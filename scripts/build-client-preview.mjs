import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist", "client-preview");
const assetsDir = path.join(distDir, "assets");

const sourcePaths = {
  html: path.join(rootDir, "index.html"),
  css: path.join(rootDir, "styles.css"),
  js: path.join(rootDir, "main.js"),
  data: path.join(rootDir, "data", "matrixPlotData.js"),
  video: path.join(rootDir, "video", "cover-bg.mp4"),
};

const FIGMA_ASSET_RE = /https:\/\/www\.figma\.com\/api\/mcp\/asset\/[A-Za-z0-9-]+/g;

function toPosixPath(...segments) {
  return path.posix.join(...segments);
}

function escapeForScriptTag(text) {
  return text.replace(/<\/script>/gi, "<\\/script>");
}

function collectUniqueFigmaUrls(...texts) {
  const urls = [];
  const seen = new Set();

  for (const text of texts) {
    const matches = text.match(FIGMA_ASSET_RE) ?? [];
    for (const url of matches) {
      if (!seen.has(url)) {
        seen.add(url);
        urls.push(url);
      }
    }
  }

  return urls;
}

function extensionFromContentType(contentType) {
  const normalized = (contentType || "").split(";")[0].trim().toLowerCase();
  switch (normalized) {
    case "image/png":
      return ".png";
    case "image/jpeg":
    case "image/jpg":
      return ".jpg";
    case "image/svg+xml":
      return ".svg";
    case "image/webp":
      return ".webp";
    case "image/gif":
      return ".gif";
    default:
      return ".bin";
  }
}

async function fileSizeBytes(filePath) {
  const info = await stat(filePath);
  return info.size;
}

async function directorySizeBytes(dirPath) {
  let total = 0;
  const entries = await readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      total += await directorySizeBytes(entryPath);
    } else if (entry.isFile()) {
      total += await fileSizeBytes(entryPath);
    }
  }

  return total;
}

async function downloadFigmaAssets(urls) {
  const assetMap = new Map();
  const failed = [];
  let index = 1;

  for (const url of urls) {
    const fileBase = `figma-asset-${String(index).padStart(3, "0")}`;
    index += 1;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        failed.push(`${url} (${response.status} ${response.statusText})`);
        continue;
      }

      const contentType = response.headers.get("content-type") || "";
      const extension = extensionFromContentType(contentType);
      const fileName = `${fileBase}${extension}`;
      const filePath = path.join(assetsDir, fileName);
      const bytes = new Uint8Array(await response.arrayBuffer());
      await writeFile(filePath, bytes);
      assetMap.set(url, toPosixPath("assets", fileName));
    } catch (error) {
      failed.push(`${url} (${error.message})`);
    }
  }

  return { assetMap, failed };
}

function rewriteKnownUrls(text, replacements) {
  let output = text;
  for (const [from, to] of replacements) {
    output = output.split(from).join(to);
  }
  return output;
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(assetsDir, { recursive: true });

  const [htmlSource, cssSource, jsSource, dataSource] = await Promise.all([
    readFile(sourcePaths.html, "utf8"),
    readFile(sourcePaths.css, "utf8"),
    readFile(sourcePaths.js, "utf8"),
    readFile(sourcePaths.data, "utf8"),
  ]);

  const figmaUrls = collectUniqueFigmaUrls(cssSource, jsSource);
  const { assetMap, failed } = await downloadFigmaAssets(figmaUrls);

  await copyFile(sourcePaths.video, path.join(assetsDir, "cover-bg.mp4"));

  const cssOut = rewriteKnownUrls(cssSource, assetMap);

  const dataOut = dataSource.replace(
    /^export\s+const\s+matrixPlotData\s*=\s*/m,
    "const matrixPlotData = ",
  );

  let jsOut = jsSource
    .replace(/^\s*import\s+\{\s*matrixPlotData\s*\}\s+from\s+["']\.\/data\/matrixPlotData\.js["'];?\s*/m, "")
    .replace(/video\/cover-bg\.mp4/g, "assets/cover-bg.mp4");

  jsOut = rewriteKnownUrls(jsOut, assetMap);
  jsOut = escapeForScriptTag(jsOut);

  const inlineJs = `${dataOut}\n\n${jsOut}`;
  const bootJs = `document.addEventListener("DOMContentLoaded", () => {\n${inlineJs}\n});`;
  const inlineCss = cssOut;

  const htmlOut = htmlSource
    .replace(
      /<link\s+rel="stylesheet"\s+href="\.\/styles\.css"\s*\/>/,
      `<style>\n${inlineCss}\n</style>`,
    )
    .replace(
      /<script\s+type="module"\s+src="\.\/main\.js"\s*><\/script>/,
      `<script>\n${bootJs}\n</script>`,
    );

  const finalHtml = htmlOut;
  const outputHtmlPath = path.join(distDir, "index.html");
  await writeFile(outputHtmlPath, finalHtml, "utf8");

  const htmlSize = await fileSizeBytes(outputHtmlPath);
  const assetsSize = await directorySizeBytes(assetsDir);

  const report = [
    `output folder path: ${distDir}`,
    `output HTML path: ${outputHtmlPath}`,
    `output HTML size in MB: ${(htmlSize / (1024 * 1024)).toFixed(2)}`,
    `assets folder size in MB: ${(assetsSize / (1024 * 1024)).toFixed(2)}`,
    `CSS inlined: yes`,
    `JS inlined: yes`,
    `matrixPlotData inlined: yes`,
    `local video copied: yes`,
    `number of Figma assets found: ${figmaUrls.length}`,
    `number of Figma assets downloaded: ${assetMap.size}`,
    `failed external assets: ${failed.length ? failed.join(" | ") : "none"}`,
    `source report files modified: no`,
  ];

  console.log(report.join("\n"));

  const checks = [
    outputHtmlPath,
    path.join(assetsDir, "cover-bg.mp4"),
  ];
  for (const filePath of checks) {
    await stat(filePath);
  }

  const outputHtml = await readFile(outputHtmlPath, "utf8");
  const forbiddenLinks = [
    "./styles.css",
    "./main.js",
    "./data/matrixPlotData.js",
    "video/cover-bg.mp4",
  ];
  const lingering = forbiddenLinks.filter((needle) => outputHtml.includes(needle));
  if (lingering.length) {
    throw new Error(`Unexpected source references in preview HTML: ${lingering.join(", ")}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
