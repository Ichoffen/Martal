import { matrixPlotData } from "./data/matrixPlotData.js";

const slides = [
  { id: "01", label: "B2B Data · Industry Report · 2026", title: "01 · B2B Data · Industry Report · 2026" },
  { id: "02", label: "The B2B Data Industry", title: "02 · The B2B Data Industry" },
  { id: "03", label: "State of B2B Data Industry", title: "03 · State of B2B Data Industry" },
  { id: "04A", label: "The Execution Gap", title: "04A · The Execution Gap" },
  { id: "04B", label: "Execution Closes Both Ends", title: "04B · Execution Closes Both Ends" },
  { id: "05", label: "The Market Matrix", title: "05 · The Market Matrix" },
  { id: "06", label: "From Data To Pipeline", title: "06 · From Data To Pipeline" },
  { id: "07", label: "The Intelligence Layer", title: "07 · The Intelligence Layer" },
  { id: "08", label: "Price Vs. Performance", title: "08 · Price Vs. Performance" },
  { id: "09", label: "A The Horizon", title: "09 · A The Horizon" },
  { id: "10", label: "B The Horizon", title: "10 · B The Horizon" },
  { id: "11", label: "About Martal", title: "11 · About Martal" },
  { id: "12", label: "Methodology and Sources", title: "12 · Methodology and Sources" },
];

const prevButtonSvg = `
  <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g>
      <mask id="path-1-outside-1_17_646" maskUnits="userSpaceOnUse" x="-0.75" y="-0.75" width="48" height="48" fill="black">
        <rect fill="white" x="-0.75" y="-0.75" width="48" height="48"/>
        <path d="M1.25 23.25C1.25 11.0997 11.0997 1.25 23.25 1.25V1.25C35.4003 1.25 45.25 11.0997 45.25 23.25V23.25C45.25 35.4003 35.4003 45.25 23.25 45.25V45.25C11.0997 45.25 1.25 35.4003 1.25 23.25V23.25Z"/>
      </mask>
      <path d="M1.25 23.25M45.25 23.25M45.25 23.25M1.25 23.25M23.25 1.25M45.25 23.25M23.25 45.25M1.25 23.25M23.25 45.25V44C11.7901 44 2.5 34.7099 2.5 23.25H1.25H0C0 36.0906 10.4094 46.5 23.25 46.5V45.25ZM45.25 23.25H44C44 34.7099 34.7099 44 23.25 44V45.25V46.5C36.0906 46.5 46.5 36.0906 46.5 23.25H45.25ZM23.25 1.25V2.5C34.7099 2.5 44 11.7901 44 23.25H45.25H46.5C46.5 10.4094 36.0906 0 23.25 0V1.25ZM23.25 1.25V0C10.4094 0 0 10.4094 0 23.25H1.25H2.5C2.5 11.7901 11.7901 2.5 23.25 2.5V1.25Z" fill="#8D8D8D" mask="url(#path-1-outside-1_17_646)"/>
      <path d="M29.75 23.25H17.75" stroke="#8D8D8D" stroke-width="1.25" stroke-linecap="round"/>
      <path d="M20.75 19.25L16.75 23.25L20.75 27.25" stroke="#8D8D8D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>
`;

const nextButtonSvg = `
  <svg width="64" height="47" viewBox="0 0 64 47" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <mask id="path-1-outside-1_17_641" maskUnits="userSpaceOnUse" x="-0.75" y="-0.75" width="65" height="48" fill="black">
      <rect fill="white" x="-0.75" y="-0.75" width="65" height="48"/>
      <path d="M1.25 23.25C1.25 11.0997 11.0997 1.25 23.25 1.25H40.25C52.4003 1.25 62.25 11.0997 62.25 23.25V23.25C62.25 35.4003 52.4003 45.25 40.25 45.25H23.25C11.0997 45.25 1.25 35.4003 1.25 23.25V23.25Z"/>
    </mask>
    <path d="M1.25 23.25M62.25 23.25M62.25 23.25M1.25 23.25M23.25 1.25V2.5H40.25V1.25V0H23.25V1.25ZM62.25 23.25M40.25 45.25V44H23.25V45.25V46.5H40.25V45.25ZM1.25 23.25M23.25 45.25V44C11.7901 44 2.5 34.7099 2.5 23.25H1.25H0C0 36.0906 10.4094 46.5 23.25 46.5V45.25ZM62.25 23.25H61C61 34.7099 51.7099 44 40.25 44V45.25V46.5C53.0906 46.5 63.5 36.0906 63.5 23.25H62.25ZM40.25 1.25V2.5C51.7099 2.5 61 11.7901 61 23.25H62.25H63.5C63.5 10.4094 53.0906 0 40.25 0V1.25ZM23.25 1.25V0C10.4094 0 0 10.4094 0 23.25H1.25H2.5C2.5 11.7901 11.7901 2.5 23.25 2.5V1.25Z" fill="#8DB654" mask="url(#path-1-outside-1_17_641)"/>
    <path d="M21.25 23.25H41.25" stroke="#8DB654" stroke-width="1.25" stroke-linecap="round"/>
    <path d="M38.25 19.25L42.25 23.25L38.25 27.25" stroke="#8DB654" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const homeButtonMarkup = `<span class="arrow-btn__home-label">Home</span>`;
const ICON_BASE = "assets/icons";
const iconPath = (number) => `${ICON_BASE}/${String(number).padStart(2, "0")}.svg`;
const ICON_PATHS = {
  scrollMode: iconPath(1),
  help: iconPath(2),
  dotPurple: iconPath(3),
  dotYellow: iconPath(4),
  dotBlue: iconPath(5),
  dotGreen: iconPath(6),
  summaryStaticData: iconPath(7),
  summaryActivation: iconPath(8),
  summaryQuality: iconPath(9),
  summaryGap: iconPath(10),
  aiTransitionEra: iconPath(17),
  cloudCrmEra: iconPath(18),
  agenticAiEra: iconPath(19),
  enrichmentEra: iconPath(20),
  afterAi: iconPath(21),
  beforeAi: iconPath(22),
  slide03Callout: iconPath(23),
  decayPlay: iconPath(85),
  decayPause: iconPath(86),
  decayReplay: iconPath(87),
  ctaStart: iconPath(24),
  accessIntelligence: iconPath(26),
  accessActivation: iconPath(27),
  executionWarning: iconPath(28),
  executionCheck: iconPath(29),
  quadrantEmerging: iconPath(30),
  quadrantPopular: iconPath(31),
  quadrantSpecialists: iconPath(32),
  quadrantPower: iconPath(33),
  featureFull: iconPath(34),
  featurePartial: iconPath(35),
  featureNone: iconPath(36),
  tableToggle: iconPath(37),
  graphToggle: iconPath(38),
  intentSignals: iconPath(39),
  lookalikeModeling: iconPath(40),
  aiQualification: iconPath(41),
  nlpSearch: iconPath(42),
  agenticOptimization: iconPath(43),
  insight: iconPath(44),
  pricingGrowth: iconPath(45),
  gapNone: iconPath(46),
  gapMedium: iconPath(47),
  gapHigh: iconPath(48),
  pricingEntry: iconPath(49),
  horizonToday: iconPath(50),
  horizonForces: iconPath(51),
  trend2028: iconPath(52),
  trend2030: iconPath(53),
  trendIgnore: iconPath(54),
  trendReplyRates: iconPath(55),
  trendTwelveToOne: iconPath(56),
  trendAutomation: iconPath(57),
  heroBrands: iconPath(58),
  heroInteractions: iconPath(59),
  heroVerticals: iconPath(60),
  heroExperience: iconPath(61),
  platformData: iconPath(62),
  platformIntelligence: iconPath(63),
  platformExecution: iconPath(64),
  stopSorting: iconPath(65),
  deliversLift: iconPath(66),
  stopWaiting: iconPath(67),
  deliversAutomated: iconPath(68),
  stopDeliverability: iconPath(69),
  deliversPrecision: iconPath(70),
  stopPaying: iconPath(71),
  deliversAccuracy: iconPath(72),
  stopSpending: iconPath(73),
  deliversUnder30: iconPath(74),
  aboutYears: iconPath(75),
  aboutAi: iconPath(76),
  methodPricing: iconPath(77),
  methodFeatures: iconPath(78),
  methodSatisfaction: iconPath(79),
  methodExecution: iconPath(80),
  sort: iconPath(84),
};

function renderIconImage(className, src) {
  const classAttribute = className ? ` class="${className}"` : "";
  return `<img${classAttribute} src="${src}" alt="" aria-hidden="true" />`;
}

const matrixFallbackPoints = [
  { x: 18, y: 18, color: "#f5b23c" },
  { x: 28, y: 14, color: "#f5b23c" },
  { x: 37, y: 18, color: "#f5b23c" },
  { x: 18, y: 30, color: "#f5b23c" },
  { x: 37, y: 30, color: "#f5b23c" },
  { x: 18, y: 58, color: "#c92af7" },
  { x: 23, y: 63, color: "#c92af7" },
  { x: 29, y: 58, color: "#c92af7" },
  { x: 34, y: 63, color: "#c92af7" },
  { x: 39, y: 58, color: "#c92af7" },
  { x: 18, y: 71, color: "#c92af7" },
  { x: 23, y: 76, color: "#c92af7" },
  { x: 29, y: 71, color: "#c92af7" },
  { x: 34, y: 76, color: "#c92af7" },
  { x: 39, y: 71, color: "#c92af7" },
  { x: 68, y: 58, color: "#1f9bff" },
  { x: 74, y: 57, color: "#1f9bff" },
  { x: 79, y: 66, color: "#1f9bff" },
  { x: 86, y: 61, color: "#1f9bff" },
  { x: 71, y: 76, color: "#1f9bff" },
  { x: 90, y: 14, color: "#8db654" },
];

const MATRIX_PLOT_WIDTH = 432;
const MATRIX_PLOT_HEIGHT = 320;
const MATRIX_POINT_SIZE = 12;
const MATRIX_POINT_RADIUS = MATRIX_POINT_SIZE / 2;
const slide02IconBolt = ICON_PATHS.summaryStaticData;
const slide02IconClock = ICON_PATHS.summaryActivation;
const slide02IconChart = ICON_PATHS.summaryQuality;
const slide02IconSpark = ICON_PATHS.summaryGap;
const slide03ChartIcon = "https://www.figma.com/api/mcp/asset/11ebcd7f-b54c-42ad-a775-b75f18ac9394";
const slide03LineAsset = "https://www.figma.com/api/mcp/asset/d4506139-2d80-4ad9-9602-7200951cc70c";
const slide03CalloutIcon = ICON_PATHS.slide03Callout;
const slide03CloudIcon = ICON_PATHS.cloudCrmEra;
const slide03AccordionChevron = "https://www.figma.com/api/mcp/asset/bfa1ee02-902d-4946-9457-66064a1e5179";
const slide03SourceDivider = "https://www.figma.com/api/mcp/asset/ec78565f-d6a9-4daa-892d-beef25a75d77";
const slide03SourceExport = "https://www.figma.com/api/mcp/asset/a425e0f3-ba27-4e2e-bf3c-b2ddd45a953d";
const slide04aNeutralIcon = ICON_PATHS.accessIntelligence;
const slide04aAccentIcon = ICON_PATHS.accessActivation;
const slide04bInfoIcon = ICON_PATHS.executionWarning;
const slide04bCheckIcon = ICON_PATHS.executionCheck;
const slide04bCalloutIcon = ICON_PATHS.slide03Callout;
const scrollModeIcon = ICON_PATHS.scrollMode;
const slide11HeroDivider = "https://www.figma.com/api/mcp/asset/7b70df35-1bcc-4dda-9689-ba6adde2ffc6";
const slide11Arrow = "https://www.figma.com/api/mcp/asset/56f57c19-771a-489b-8411-94670519a8b0";
const slide11HeroIcon = ICON_PATHS.heroBrands;
const slide11Logo = "assets/logo.svg";
const slide11PlatformIcon = ICON_PATHS.platformData;
const slide11CardDivider = "https://www.figma.com/api/mcp/asset/47f4b5c7-6921-4c86-b3f0-73f78513f59c";
const slide11NegativeIcon = ICON_PATHS.stopSorting;
const slide11AboutIcon = ICON_PATHS.aboutYears;
  const slide11CtaBack = "assets/cta-close-gap-bg.png";
const slide11BadgeLogo = "https://www.figma.com/api/mcp/asset/dbf348d4-de71-499c-ab59-02049e08be6c";
const slide11BadgeClients = "https://www.figma.com/api/mcp/asset/bf8f93b0-8278-4169-b3dd-f68903a79b07";
const slide11BadgeManifest = "https://www.figma.com/api/mcp/asset/02f43b37-cb10-4f37-9cfc-b9d23d1da7aa";
const slide11BadgeClutch1000 = "https://www.figma.com/api/mcp/asset/00a6571b-c51c-4c8b-9f7c-e8441a19a4aa";
const slide11BadgeTopClutch = "https://www.figma.com/api/mcp/asset/257e760d-6de1-42f9-b7fd-3cbdc8321910";
const slide11BadgeTopClutch2 = "https://www.figma.com/api/mcp/asset/afe72966-db00-427d-8cdf-61407d44a33a";
const slide11BadgeService = "https://www.figma.com/api/mcp/asset/05cb912b-9e7e-4ae7-8f61-dfb166c6a3b0";
const slide12Icon = "https://www.figma.com/api/mcp/asset/47cb66b4-b959-4876-9f73-a2971697a993";
const slide12Dot = "https://www.figma.com/api/mcp/asset/538a60eb-e78d-4fbf-a0c6-e6737188ceae";
const slideModeIconSvg = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 4.66671V11.3334C12 11.7467 11.9867 12.1134 11.94 12.44C11.7467 14.1934 10.92 14.6667 8.66667 14.6667H7.33333C5.08 14.6667 4.25333 14.1934 4.06 12.44C4.01333 12.1134 4 11.7467 4 11.3334V4.66671C4 4.25337 4.01333 3.88671 4.06 3.56004C4.25333 1.80671 5.08 1.33337 7.33333 1.33337H8.66667C10.92 1.33337 11.7467 1.80671 11.94 3.56004C11.9867 3.88671 12 4.25337 12 4.66671Z" stroke="#8D8D8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.99992 11.3333C3.99992 11.7467 4.01325 12.1133 4.05992 12.44C3.96659 12.4467 3.87992 12.4467 3.77992 12.4467H3.55325C1.77992 12.4467 1.33325 12 1.33325 10.22V5.78001C1.33325 4.00001 1.77992 3.55334 3.55325 3.55334H3.77992C3.87992 3.55334 3.96659 3.55334 4.05992 3.56001C4.01325 3.88668 3.99992 4.25334 3.99992 4.66668V11.3333Z" stroke="#8D8D8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.6666 5.78001V10.22C14.6666 12 14.2199 12.4467 12.4466 12.4467H12.2199C12.1199 12.4467 12.0333 12.4467 11.9399 12.44C11.9866 12.1133 11.9999 11.7467 11.9999 11.3333V4.66668C11.9999 4.25334 11.9866 3.88668 11.9399 3.56001C12.0333 3.55334 12.1199 3.55334 12.2199 3.55334H12.4466C14.2199 3.55334 14.6666 4.00001 14.6666 5.78001Z" stroke="#8D8D8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

function renderMartalInlineArrow(className = "martal-inline-arrow") {
  return `
    <span class="${className}" aria-hidden="true">
      <span class="martal-inline-arrow__line"></span>
      <svg class="martal-inline-arrow__head" width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.625 0.625L5.625 4.625L1.625 8.625" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  `;
}

function renderSlide03ArrowLine(color, className = "") {
  return `
    <svg class="${className}" preserveAspectRatio="none" width="53" height="7.36396" viewBox="0 0 53 7.36396" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M0.5 3.18198H0V4.18198H0.5V3.68198V3.18198ZM52.8536 4.03553C53.0488 3.84027 53.0488 3.52369 52.8536 3.32843L49.6716 0.146447C49.4763 -0.0488155 49.1597 -0.0488155 48.9645 0.146447C48.7692 0.341709 48.7692 0.658291 48.9645 0.853554L51.7929 3.68198L48.9645 6.51041C48.7692 6.70567 48.7692 7.02225 48.9645 7.21751C49.1597 7.41278 49.4763 7.41278 49.6716 7.21751L52.8536 4.03553ZM0.5 3.68198V4.18198H52.5V3.68198V3.18198H0.5V3.68198Z" fill="${color}"/>
    </svg>
  `;
}

function renderSlide03CalloutIcon(fillColor, className = "") {
  return `
    <svg class="${className}" preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M16 9.5423e-08C16.7431 0.000233257 17.4714 0.207438 18.1033 0.598385C18.7352 0.989332 19.2457 1.54856 19.5776 2.21339C19.9095 2.87821 20.0496 3.62233 19.9823 4.36234C19.915 5.10234 19.6429 5.80897 19.1965 6.403C18.7501 6.99703 18.1471 7.45498 17.455 7.7255C16.7629 7.99602 16.0092 8.06842 15.2783 7.93458C14.5474 7.80075 13.8682 7.46596 13.3169 6.96777C12.7656 6.46957 12.3639 5.82766 12.157 5.114L5.862 5.9C5.83459 5.98705 5.80323 6.07281 5.768 6.157L12.214 10.588C12.6949 10.2319 13.2714 10.0278 13.8693 10.0019C14.4671 9.976 15.0591 10.1295 15.569 10.4426C16.079 10.7558 16.4836 11.2143 16.7309 11.7592C16.9782 12.3042 17.0569 12.9106 16.9569 13.5006C16.8569 14.0906 16.5827 14.6372 16.1695 15.0701C15.7564 15.5031 15.2233 15.8026 14.6386 15.9301C14.0539 16.0577 13.4445 16.0075 12.8886 15.786C12.3326 15.5644 11.8557 15.1817 11.519 14.687L7.992 15.745C7.99733 15.8297 8 15.9147 8 16C8 17.0609 7.57857 18.0783 6.82843 18.8284C6.07828 19.5786 5.06087 20 4 20C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.421427 18.0783 2.74148e-08 17.0609 2.74148e-08 16L0.00500014 15.8C0.0472533 14.9529 0.357672 14.1412 0.891421 13.482C1.42517 12.8229 2.15462 12.3505 2.97441 12.133C3.79421 11.9155 4.66191 11.9643 5.45219 12.2722C6.24247 12.5801 6.91443 13.1312 7.371 13.846L11.011 12.752L11.021 12.65C11.0363 12.514 11.061 12.3807 11.095 12.25L4.407 7.65C3.94983 7.89277 3.43762 8.01312 2.92017 7.99934C2.40272 7.98557 1.89763 7.83814 1.45403 7.57139C1.01042 7.30464 0.643375 6.92765 0.388586 6.47706C0.133797 6.02648 -6.99423e-05 5.51763 2.74148e-08 5L0.00500014 4.824C0.0446356 4.14205 0.315817 3.49405 0.773709 2.98713C1.2316 2.48022 1.84878 2.14475 2.5232 2.03619C3.19762 1.92764 3.88889 2.0525 4.48272 2.39012C5.07655 2.72775 5.53738 3.25793 5.789 3.893L12.101 3.103C12.304 2.22095 12.8001 1.43381 13.5083 0.870191C14.2165 0.306574 15.0949 -0.000197529 16 9.5423e-08Z" fill="${fillColor}"/>
    </svg>
  `;
}

function safeStorageGet(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage is unavailable on some file:// origins and locked-down contexts.
  }
}

const state = {
  currentSlide: 0,
  mode: "slide",
  helpSeen: safeStorageGet("report-help-seen", "0") === "1",
  slide03TableSort: {
    key: null,
    direction: "asc",
  },
  slide08GapSort: {
    direction: null,
  },
  slide04aDemoAutoplayed: false,
  slide06TableSort: {
    key: null,
    direction: "asc",
  },
  slide07TableSort: {
    key: null,
    direction: "asc",
  },
};

const darkThemeSlides = new Set([0, 9]);

const app = document.querySelector("#app");
const bootFallback = document.querySelector("#boot-fallback");

function markBootReady() {
  bootFallback?.classList.add("is-ready");
}

function markBootError(error) {
  if (!bootFallback) return;
  bootFallback.classList.remove("is-ready");
  bootFallback.classList.add("is-error");
  bootFallback.textContent = `Failed to load report\n${error instanceof Error ? error.message : String(error)}`;
}

try {
app.innerHTML = `
  <div class="app ${state.mode === 'scroll' ? 'manuscript-mode' : ''}">
    <div class="report-shell">
      <div class="top-progress" aria-hidden="true">
        <div class="top-progress__track"><div class="top-progress__fill"></div></div>
      </div>
      <nav class="top-nav" aria-label="Report sections">
        <div class="top-nav__inner">
          <div class="top-nav__viewport">
            <div class="top-nav__track">
              <div class="top-nav__list" id="topNav"></div>
            </div>
          </div>
        </div>
      </nav>
      <main id="reportRoot"></main>
      <div class="matrix-tooltip-layer" id="matrixTooltipLayer" aria-hidden="true" hidden>
        <div class="matrix-tooltip" role="tooltip">
          <span class="matrix-tooltip__text"></span>
        </div>
      </div>
      <div class="help-overlay" id="helpOverlay" hidden>
        <section class="help-modal" role="dialog" aria-modal="true" aria-labelledby="helpTitle">
          <button class="help-modal__close" type="button" data-help-close aria-label="Close reading mode help">&times;</button>
          <h2 id="helpTitle">Reading mode</h2>
          <p class="help-modal__intro">This report is built as a slide-based story. Use keyboard arrows or the on-screen controls to move between slides.</p>
          <div class="help-modal__rows" role="list">
            <div class="help-modal__row" role="listitem">
              <span class="help-modal__keys">
                <span class="help-modal__keycap">&larr;</span>
                <span class="help-modal__key-separator">/</span>
                <span class="help-modal__keycap">&rarr;</span>
              </span>
              <span>Move between slides</span>
            </div>
            <div class="help-modal__row" role="listitem">
              <span class="help-modal__keys">
                <span class="help-modal__keycap">Home</span>
                <span class="help-modal__key-separator">/</span>
                <span class="help-modal__keycap">End</span>
              </span>
              <span>Jump to the beginning or end of the report</span>
            </div>
            <div class="help-modal__row" role="listitem">
              <span class="help-modal__keys">
                <span class="help-modal__keycap">Space</span>
              </span>
              <span>Advance when focus is not in a text field</span>
            </div>
            <div class="help-modal__row" role="listitem">
              <span class="help-modal__keys">
                <span class="help-modal__keycap help-modal__keycap--wide">Scroll mode</span>
              </span>
              <span>Switch the report into a vertical manuscript view</span>
            </div>
            <div class="help-modal__row" role="listitem">
              <span class="help-modal__keys">
                <span class="help-modal__keycap help-modal__keycap--wide">Charts &amp; points</span>
              </span>
              <span>Hover or click to explore interactive elements</span>
            </div>
          </div>
          <div class="help-modal__actions">
            <button class="help-modal__button" id="helpClose" data-help-close type="button">Begin reading</button>
          </div>
        </section>
      </div>
    </div>
  </div>
`;

const topNav = document.querySelector("#topNav");
const reportRoot = document.querySelector("#reportRoot");
const helpOverlay = document.querySelector("#helpOverlay");
const progressFill = document.querySelector(".top-progress__fill");
const topNavViewport = document.querySelector(".top-nav__viewport");
const topNavTrack = document.querySelector(".top-nav__track");

topNavTrack?.addEventListener("scroll", syncTopNavTrackState, { passive: true });

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function getMatrixQuadrantColor(x, y, vendorName = "") {
  if (vendorName === "LeadIQ") return "#c92af7";
  if (x < 2.5 && y < 3.0) return "#c92af7";
  if (x >= 2.5 && y < 3.0) return "#0090ff";
  if (x < 2.5 && y >= 3.0) return "#fbbf24";
  return "#8db654";
}

function getMatrixCategory(x, y, vendorName = "") {
  if (vendorName === "LeadIQ") return "emerging";
  if (x < 2.5 && y < 3.0) return "emerging";
  if (x >= 2.5 && y < 3.0) return "popular";
  if (x < 2.5 && y >= 3.0) return "specialists";
  return "power";
}

function getMatrixJitter(index) {
  const pattern = [
    { x: -5, y: -4 },
    { x: 4, y: -3 },
    { x: -4, y: 3 },
    { x: 3, y: 4 },
    { x: -2, y: -5 },
    { x: 5, y: 1 },
    { x: -1, y: 4 },
    { x: 2, y: -2 },
    { x: -5, y: 2 },
    { x: 4, y: -1 },
    { x: -3, y: 5 },
    { x: 3, y: -4 },
  ];
  return pattern[index % pattern.length];
}

function clampMatrixPoint(value, size) {
  return clamp(value, MATRIX_POINT_RADIUS, size - MATRIX_POINT_RADIUS);
}

function scaleMatrixCoordinate(value, size, invert = false) {
  const usableSize = size - MATRIX_POINT_SIZE;
  const normalized = clamp((value - 1) / 4, 0, 1);
  const scaled = invert ? (1 - normalized) : normalized;
  return MATRIX_POINT_RADIUS + (scaled * usableSize);
}

function createMatrixPoints() {
  if (!matrixPlotData.length) {
    return matrixFallbackPoints
      .map(
        (point) => `
          <div
            class="matrix-point"
            style="left:${clampMatrixPoint((point.x / 100) * MATRIX_PLOT_WIDTH, MATRIX_PLOT_WIDTH)}px; top:${clampMatrixPoint((point.y / 100) * MATRIX_PLOT_HEIGHT, MATRIX_PLOT_HEIGHT)}px; background:${point.color};"
            aria-hidden="true"
          ></div>
        `
      )
      .join("");
  }

  return matrixPlotData.map((vendor, index) => {
    const xValue = Number(vendor.x ?? vendor.overallScore);
    const yValue = Number(vendor.y ?? vendor.executionDepth);
    const vendorName = vendor.vendor || vendor.name;
    const x = scaleMatrixCoordinate(xValue, MATRIX_PLOT_WIDTH);
    const y = scaleMatrixCoordinate(yValue, MATRIX_PLOT_HEIGHT, true);
    const jitter = getMatrixJitter(index);
    const finalX = clampMatrixPoint(x + jitter.x, MATRIX_PLOT_WIDTH);
    const finalY = clampMatrixPoint(y + jitter.y, MATRIX_PLOT_HEIGHT);
    const color = getMatrixQuadrantColor(xValue, yValue, vendorName);
    const category = getMatrixCategory(xValue, yValue, vendorName);
    const name = escapeHtml(vendorName);

    return `
      <button
        class="matrix-point"
        type="button"
        aria-label="${name}, overall score ${xValue}, execution depth ${yValue}"
        data-matrix-vendor="${name}"
        data-matrix-category="${category}"
        data-matrix-x="${xValue.toFixed(2)}"
        data-matrix-y="${yValue.toFixed(2)}"
        style="left:${finalX}px; top:${finalY}px; background:${color}; ${index === 0 ? 'box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), 0 0 0 5px rgba(141,182,84,0.18), 0 0 24px rgba(141,182,84,0.22);' : ''}"
      ></button>
    `;
  }).join("");
}

function getNextSlideLabel(index) {
  const nextSlide = slides[index + 1];
  if (!nextSlide) return "Home";
  return `Next: ${nextSlide.id} · ${nextSlide.label}`;
}

function getSlideElement(index) {
  return document.querySelector(`[data-slide-index="${index}"]`);
}

function isDarkThemeSlide(index) {
  return darkThemeSlides.has(index);
}

function isSlide11NavOverLightArea(slide) {
  const nav = document.querySelector(".top-nav__inner") || document.querySelector(".top-nav");
  const lightArea = slide?.querySelector(".slide11-platform-card") || slide?.querySelector(".slide11-main-card");
  if (!nav || !lightArea) return true;

  const navRect = nav.getBoundingClientRect();
  const lightAreaRect = lightArea.getBoundingClientRect();
  const navProbeY = navRect.top + navRect.height / 2;

  return navProbeY >= lightAreaRect.top;
}

function isSlide11BottomBarOverLightArea(slide, bar) {
  const lightArea = slide?.querySelector(".slide11-main-card") || slide?.querySelector(".slide11-platform-card");
  if (!bar || !lightArea) return true;

  const barRect = bar.getBoundingClientRect();
  const lightAreaRect = lightArea.getBoundingClientRect();
  const barProbeY = barRect.top + barRect.height / 2;

  return barProbeY >= lightAreaRect.top;
}

function applySlideTheme(index) {
  const root = document.querySelector(".app");
  if (!root) return;

  const slide = getSlideElement(index);
  let isLightSlide = !isDarkThemeSlide(index);
  const isSlide11 = slide?.classList.contains("slide11");

  if (isSlide11) {
    isLightSlide = isSlide11NavOverLightArea(slide);
  }

  root.classList.toggle("is-light-slide", isLightSlide);
  document.querySelectorAll(".bottom-bar").forEach((bar) => {
    const isLightBottomBar = isSlide11
      ? isSlide11BottomBarOverLightArea(slide, bar)
      : isLightSlide;
    bar.classList.toggle("bottom-bar--light", isLightBottomBar);
  });
}

function syncScrollViewportState(index) {
  const root = document.querySelector(".app");
  if (!root) return;

  if (state.mode === "scroll") {
    root.setAttribute("data-scroll-slide", String(index));
  } else {
    root.removeAttribute("data-scroll-slide");
  }
}

function getVisibleScrollSlideIndex() {
  const slideElements = Array.from(document.querySelectorAll(".slide[data-slide-index]"));
  if (!slideElements.length) return state.currentSlide;

  const anchorY = 128;
  let bestIndex = state.currentSlide;
  let bestVisibility = -1;

  slideElements.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    const visibleTop = Math.max(rect.top, anchorY);
    const visibleBottom = Math.min(rect.bottom, window.innerHeight - 96);
    const visibility = Math.max(0, visibleBottom - visibleTop);

    if (rect.top <= anchorY && rect.bottom > anchorY) {
      bestIndex = Number(slide.dataset.slideIndex || index);
      bestVisibility = visibility;
      return;
    }

    if (visibility > bestVisibility) {
      bestVisibility = visibility;
      bestIndex = Number(slide.dataset.slideIndex || index);
    }
  });

  return bestIndex;
}

function syncTopNavActive(index) {
  document.querySelectorAll(".top-nav__item").forEach((button) => {
    const buttonIndex = Number(button.dataset.slide || 0);
    button.classList.toggle("is-active", buttonIndex === index);
  });
}

function syncTopNavTrackState() {
  const viewport = topNavViewport;
  const track = topNavTrack;
  if (!viewport || !track) return;

  const threshold = 2;
  const atStart = track.scrollLeft <= threshold;
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - threshold;

  viewport.classList.toggle("is-at-start", atStart);
  viewport.classList.toggle("is-at-end", atEnd);
  viewport.classList.toggle("has-left-overflow", !atStart);
  viewport.classList.toggle("has-right-overflow", !atEnd);
}

function syncTopNavViewport(index) {
  const activeItem = document.querySelector(`.top-nav__item[data-slide="${index}"]`);
  const track = topNavTrack;
  const viewport = topNavViewport;
  if (!activeItem || !viewport || !track) return;

  const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
  if (maxScrollLeft === 0) {
    syncTopNavTrackState();
    return;
  }

  const targetLeft = clamp(
    activeItem.offsetLeft - (track.clientWidth / 2) + (activeItem.offsetWidth / 2),
    0,
    maxScrollLeft
  );

  track.scrollTo({
    left: targetLeft,
    behavior: "auto",
  });

  syncTopNavTrackState();
}

function syncMatrixLegendHover(category = null) {
  const root = document.querySelector(".app");
  if (!root) return;

  if (category) {
    root.setAttribute("data-matrix-hover", category);
  } else {
    root.removeAttribute("data-matrix-hover");
  }
}

function bindMatrixLegendHover() {
  const legend = document.querySelector(".matrix-legend");
  const legendItems = document.querySelectorAll(".matrix-legend__item");
  if (!legend || !legendItems.length) return;

  legendItems.forEach((item) => {
    item.addEventListener("pointerenter", () => {
      if (item.classList.contains("matrix-legend__item--emerging")) syncMatrixLegendHover("emerging");
      if (item.classList.contains("matrix-legend__item--popular")) syncMatrixLegendHover("popular");
      if (item.classList.contains("matrix-legend__item--specialists")) syncMatrixLegendHover("specialists");
      if (item.classList.contains("matrix-legend__item--power")) syncMatrixLegendHover("power");
    });
    item.addEventListener("focus", () => {
      if (item.classList.contains("matrix-legend__item--emerging")) syncMatrixLegendHover("emerging");
      if (item.classList.contains("matrix-legend__item--popular")) syncMatrixLegendHover("popular");
      if (item.classList.contains("matrix-legend__item--specialists")) syncMatrixLegendHover("specialists");
      if (item.classList.contains("matrix-legend__item--power")) syncMatrixLegendHover("power");
    });
  });

  legend.addEventListener("pointerleave", () => syncMatrixLegendHover(null));
  legend.addEventListener("focusout", () => syncMatrixLegendHover(null));
}

function syncScrollFooter(index) {
  const prevButton = document.querySelector("#prevSlide");
  const nextButton = document.querySelector("#nextSlide");
  const nextLabel = document.querySelector(".next-label");
  if (!prevButton || !nextButton || !nextLabel) return;

  const isLastSlide = index === slides.length - 1;
  prevButton.disabled = index === 0;
  nextButton.classList.toggle("arrow-btn--home", isLastSlide);
  nextButton.innerHTML = isLastSlide ? homeButtonMarkup : nextButtonSvg;
  nextButton.setAttribute("aria-label", isLastSlide ? "Back to home" : "Next slide");
  nextLabel.hidden = isLastSlide;
  nextLabel.textContent = isLastSlide ? "" : getNextSlideLabel(index);
}

function syncScrollChrome(index) {
  state.currentSlide = index;
  applySlideTheme(index);
  syncScrollViewportState(index);
  syncTopNavActive(index);
  syncTopNavViewport(index);
  syncScrollFooter(index);
}

function scrollToSlide(index, immediate = false) {
  const nextIndex = clamp(index, 0, slides.length - 1);
  const target = getSlideElement(nextIndex);
  if (!target) return;

  syncScrollChrome(nextIndex);
  target.scrollIntoView({
    behavior: immediate ? "auto" : "auto",
    block: "start",
  });
}

function resetSlideModeScroll() {
  if (state.mode === "scroll") return;

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const slideLayer = document.querySelector(".slide-layer");
  if (slideLayer) {
    slideLayer.scrollTop = 0;
  }
}

function renderBottomBar() {
  const isLastSlide = state.currentSlide === slides.length - 1;
  const isScrollMode = state.mode === "scroll";
  return `
    <div class="bottom-bar ${!isDarkThemeSlide(state.currentSlide) ? "bottom-bar--light" : ""}">
      <div class="bottom-bar__inner">
        <div class="nav-controls">
          <button class="arrow-btn arrow-btn--prev" id="prevSlide" aria-label="Previous slide" ${state.currentSlide === 0 ? "disabled" : ""}>
            ${prevButtonSvg}
          </button>
          <button class="arrow-btn arrow-btn--next${isLastSlide ? " arrow-btn--home" : ""}" id="nextSlide" aria-label="${isLastSlide ? "Back to home" : "Next slide"}">
            ${isLastSlide ? homeButtonMarkup : nextButtonSvg}
          </button>
          <div class="next-label" ${isLastSlide ? "hidden" : ""}>${isLastSlide ? "" : escapeHtml(getNextSlideLabel(state.currentSlide))}</div>
        </div>
        <div class="mode-help-controls">
          <button class="scroll-toggle" id="toggleMode" type="button" aria-label="Toggle scroll mode">
            ${renderIconImage("scroll-toggle__icon", scrollModeIcon)}
            <span>${isScrollMode ? "Slide mode" : "Scroll mode"}</span>
          </button>
          <span class="mode-help-divider" aria-hidden="true"></span>
          <button class="mode-help-button" data-open-help type="button" aria-label="Open reading mode help">${renderIconImage("mode-help-button__icon", ICON_PATHS.help)}</button>
        </div>
      </div>
    </div>
  `;
}

function closeHelpModal() {
  if (!helpOverlay) return;
  state.helpSeen = true;
  safeStorageSet("report-help-seen", "1");
  helpOverlay.hidden = true;
}

function openHelpModal() {
  if (!helpOverlay) return;
  helpOverlay.hidden = false;
}

function renderSlide02SummaryItem({ icon, title, body }) {
  return `
    <div class="slide02-summary-item">
      <div class="slide02-summary-icon" aria-hidden="true">
        <img src="${icon}" alt="" />
      </div>
      <div class="slide02-summary-copy">
        <div class="slide02-summary-title">${title}</div>
        <div class="slide02-summary-body">${body}</div>
      </div>
    </div>
  `;
}

function renderSlide02({ includeFooter = true, slideIndex = 1 } = {}) {
  const summaryItems = [
    {
      icon: slide02IconBolt,
      title: `Static data is <span class="slide02-emphasis slide02-emphasis--red">broken</span>`,
      body: `Most B2B databases were built the same way: static filters, one-time pulls, and contact records that begin decaying the moment they're exported. That model fit a slower GTM era. It doesn't fit the one you're operating in now.`,
    },
    {
      icon: slide02IconClock,
      title: `Most vendors <span class="slide02-emphasis slide02-emphasis--red">don't activate data</span>`,
      body: `Of the 25 vendors analyzed in this report, <span class="slide02-emphasis slide02-emphasis--red">17 sell data access only</span>, with no way to activate it. Only one covers the full journey from verified data to AI-qualified accounts to omnichannel execution inside a single platform.`,
    },
    {
      icon: slide02IconChart,
      title: `Data quality ≠ conversion`,
      body: `The difference isn't database size or brand recognition. It's whether the data you buy is <span class="slide02-emphasis slide02-emphasis--lime">built to convert</span>, or built to sit in a spreadsheet <span class="slide02-emphasis slide02-emphasis--muted">until someone has time to work it</span>.`,
    },
    {
      icon: slide02IconSpark,
      title: `<span class="slide02-emphasis slide02-emphasis--red">The gap is widening</span>`,
      body: `The gap is about to widen. Three forces, agentic AI, the death of generic outreach, and the collapse of the fragmented stack, are already separating the platforms that will <span class="slide02-emphasis slide02-emphasis--muted">matter in 2030</span> from the ones that won't.`,
    },
  ];

  const rightParagraphs = [
    `
      <p class="slide02-side__text">
        <span class="slide02-emphasis slide02-emphasis--lime">Martal</span> has spent 16 years running outbound campaigns for 2,000+ B2B brands across 50+ verticals. We weren't observers in the execution gap. <span class="slide02-emphasis slide02-emphasis--strong">We were the execution</span>. With every shift in the data industry, every new tool, every pricing model, every shortcoming in the vendor ecosystem, we felt it first in our own operation because our team's results depended on solving it.
      </p>
    `,
    `
      <p class="slide02-side__text">
        That vantage point shaped how we evaluated this market. When we looked at the 25 platforms in this report, we weren't asking which one has the biggest database or the cleanest UI. We were asking the question our own team asks every day: <span class="slide02-emphasis slide02-emphasis--strong">how much of the journey from data to pipeline does this actually own</span>, and how much does it <span class="slide02-emphasis slide02-emphasis--red">quietly hand back to you</span>?
      </p>
    `,
    `
      <p class="slide02-side__text slide02-side__text--strong">
        We've kept the methodology transparent and the criteria consistent. Martal is evaluated on the same rubric as every other vendor in this report.
      </p>
    `,
  ];

  return `
    <section class="slide slide--light slide--02" aria-label="02 · The B2B data industry" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide02-layout">
        <div class="slide02-header">
          <div class="report-label report-label--light">02 · The B2B data industry</div>
          <h1 class="slide02-headline">
            <span class="slide02-headline__line">The B2B Data Industry <span class="slide02-headline__broken">Is Broken</span></span>
          </h1>
          <div class="slide02-intro">
            <p>When sales is underperforming, it's tempting to blame the messaging, the channel, or the team. Often, the problem started earlier. It started with the data.</p>
            <p class="slide02-intro__strong">And the gap between the data and the revenue it should produce is about to get harder to close, not easier.</p>
          </div>
        </div>

        <div class="slide02-main">
          <aside class="slide02-summary" aria-label="Executive Summary">
            <div class="slide02-summary__title">Executive Summary</div>
            <div class="slide02-summary__list">
              ${summaryItems.map(renderSlide02SummaryItem).join("")}
            </div>
          </aside>

          <div class="slide02-side">
            <div class="slide02-side__title">Why We Built This Report</div>
            ${rightParagraphs.join("")}
          </div>
        </div>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

function renderSlide03Era({ start, duration, end, label, summary, summaryHtml, tone, lineColor, icon = slide03CloudIcon }) {
  const summaryMarkup = summaryHtml ?? escapeHtml(summary);
  return `
    <div class="slide03-era">
      <div class="slide03-era__range">
        <span class="slide03-era__year slide03-era__year--${tone}">${escapeHtml(start)}</span>
        ${renderSlide03ArrowLine(lineColor, "slide03-era__line")}
        <span class="slide03-era__year slide03-era__year--${tone}">(${escapeHtml(duration)})</span>
        ${renderSlide03ArrowLine(lineColor, "slide03-era__line")}
        <span class="slide03-era__year slide03-era__year--${tone}">${escapeHtml(end)}</span>
      </div>
      <div class="slide03-era__meta">
        <div class="slide03-era__title">
          ${renderIconImage("slide03-era__icon", icon)}
          <span>${escapeHtml(label)}</span>
        </div>
        <p class="slide03-era__summary">${summaryMarkup}</p>
      </div>
    </div>
  `;
}

function renderSlide03CompareBlock({ tone, label, value, summary, body, accentTone, iconTone }) {
  return `
    <article class="slide03-compare slide03-compare--${tone}">
      <div class="slide03-compare__head">
        <div class="slide03-compare__icon slide03-compare__icon--${iconTone}">
          ${renderIconImage("slide03-compare__icon-svg", iconTone === "before" ? ICON_PATHS.beforeAi : ICON_PATHS.afterAi)}
        </div>
        <div class="slide03-compare__title-stack">
          <div class="slide03-compare__label">${escapeHtml(label)}</div>
          <div class="slide03-compare__value">${escapeHtml(value)}</div>
        </div>
      </div>
      <div class="slide03-compare__content">
        <div class="slide03-compare__summary">${escapeHtml(summary)}</div>
        <p class="slide03-compare__body">${body}</p>
      </div>
    </article>
  `;
}

function renderSlide03TableRow({ era, rangeStart, rangeEnd, growth, context, alt = false, contextStrong = false }) {
  const [eraRange, eraMeta = ""] = String(era).split(" | ");
  return `
    <div class="slide03-table__row ${alt ? "slide03-table__row--alt" : ""}">
      <div class="slide03-table__cell slide03-table__cell--era">
        <p><span>${escapeHtml(eraRange)}</span>${eraMeta ? `<span class="slide03-table__era-gap" aria-hidden="true">&nbsp;</span><span class="slide03-table__era-meta">${escapeHtml(eraMeta)}</span>` : ""}</p>
      </div>
      <div class="slide03-table__cell slide03-table__cell--range">
        <p>${escapeHtml(rangeStart)}</p>
        <svg class="slide03-era__line" preserveAspectRatio="none" width="53" height="7.36396" viewBox="0 0 53 7.36396" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M0.5 3.18198H0V4.18198H0.5V3.68198V3.18198ZM52.8536 4.03553C53.0488 3.84027 53.0488 3.52369 52.8536 3.32843L49.6716 0.146447C49.4763 -0.0488155 49.1597 -0.0488155 48.9645 0.146447C48.7692 0.341709 48.7692 0.658291 48.9645 0.853554L51.7929 3.68198L48.9645 6.51041C48.7692 6.70567 48.7692 7.02225 48.9645 7.21751C49.1597 7.41278 49.4763 7.41278 49.6716 7.21751L52.8536 4.03553ZM0.5 3.68198V4.18198H52.5V3.68198V3.18198H0.5V3.68198Z" fill="#8DB654"></path>
        </svg>
        <p class="slide03-table__range-end">${escapeHtml(rangeEnd)}</p>
      </div>
      <div class="slide03-table__cell slide03-table__cell--growth">
        <p>${escapeHtml(growth)}</p>
      </div>
      <div class="slide03-table__cell slide03-table__cell--context ${contextStrong ? "is-strong" : ""}">
        <p>${escapeHtml(context)}</p>
      </div>
    </div>
  `;
}

function renderSlide03SourceRow({ name, startValue, endValue, growth, growthValue }) {
  return `
    <div class="slide03-source-row">
      <div class="slide03-source-row__name">${escapeHtml(name)}</div>
      <div class="slide03-source-row__values">
        <div class="slide03-source-row__start">${escapeHtml(startValue)}</div>
        <svg class="slide03-era__line" preserveAspectRatio="none" width="53" height="7.36396" viewBox="0 0 53 7.36396" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M0.5 3.18198H0V4.18198H0.5V3.68198V3.18198ZM52.8536 4.03553C53.0488 3.84027 53.0488 3.52369 52.8536 3.32843L49.6716 0.146447C49.4763 -0.0488155 49.1597 -0.0488155 48.9645 0.146447C48.7692 0.341709 48.7692 0.658291 48.9645 0.853554L51.7929 3.68198L48.9645 6.51041C48.7692 6.70567 48.7692 7.02225 48.9645 7.21751C49.1597 7.41278 49.4763 7.41278 49.6716 7.21751L52.8536 4.03553ZM0.5 3.68198V4.18198H52.5V3.68198V3.18198H0.5V3.68198Z" fill="#8DB654"></path>
        </svg>
        <div class="slide03-source-row__growth">${escapeHtml(growthValue)}</div>
      </div>
      <div class="slide03-source-row__action" aria-hidden="true">
        <img src="${slide03SourceExport}" alt="" />
      </div>
    </div>
  `;
}

function parseSlide03TableSortNumber(value) {
  const normalized = String(value).replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function getSlide03TableSortValue(row, key) {
  if (key === "range") {
    return parseSlide03TableSortNumber(row.era);
  }

  if (key === "growth") {
    return parseSlide03TableSortNumber(row.growth);
  }

  return 0;
}

function sortSlide03TableRows(rows, sortState) {
  if (!sortState?.key) return rows;

  const direction = sortState.direction === "desc" ? -1 : 1;

  return [...rows]
    .map((row, index) => ({ ...row, __sortIndex: index }))
    .sort((a, b) => {
      const diff = getSlide03TableSortValue(a, sortState.key) - getSlide03TableSortValue(b, sortState.key);
      if (diff !== 0) {
        return diff * direction;
      }

      return a.__sortIndex - b.__sortIndex;
    })
    .map(({ __sortIndex, ...row }) => row);
}

function renderSlide03TableSortButton({ label, key, sortState }) {
  const isActive = sortState?.key === key;
  const direction = isActive ? sortState.direction : "asc";
  const spokenDirection = direction === "asc" ? "ascending" : "descending";
  const ariaLabel = isActive ? `Sort by ${label} ${spokenDirection}` : `Sort by ${label}`;

  return `
    <button class="slide03-table__cell slide03-table__cell--${key} slide03-table__cell--header slide03-table__sort-button ${isActive ? `is-${direction}` : "is-idle"}" data-slide03-sort="${key}" type="button" aria-label="${escapeHtml(ariaLabel)}" aria-pressed="${isActive ? "true" : "false"}">
      <span class="slide03-table__sort-label">${escapeHtml(label)}</span>
      ${renderIconImage("slide03-table__sort-icon", ICON_PATHS.sort)}
    </button>
  `;
}

function getSlide03TableRows() {
  return [
    {
      era: "2005–2019 | (14 yrs)",
      rangeStart: "$0.89B",
      rangeEnd: "$4.15B",
      growth: "4.7×",
      context: "Cloud CRM adoption. First generation of sales tools. Early ABM.",
      alt: false,
      contextStrong: false,
    },
    {
      era: "2020–2022 | (2 yrs)",
      rangeStart: "$4.15B",
      rangeEnd: "$6.20B",
      growth: "1.49×",
      context: "COVID forces overnight shift to remote-first GTM.",
      alt: true,
      contextStrong: false,
    },
    {
      era: "2023–2024 | (1 yr)",
      rangeStart: "$6.20B",
      rangeEnd: "$7.53B",
      growth: "1.21×",
      context: "GenAI enters go-to-market. Marketplace category born.",
      alt: false,
      contextStrong: true,
    },
    {
      era: "2025–2030 | (5 yrs)",
      rangeStart: "$7.53B",
      rangeEnd: "$15.47B",
      growth: "2.05x",
      context: "Consensus projection at published CAGRs. Agentic AI era drives automation at scale.",
      alt: true,
      contextStrong: true,
    },
  ];
}

function renderSlide03TableMarkup(sortState = state.slide03TableSort) {
  const visibleTableRows = sortSlide03TableRows(getSlide03TableRows(), sortState);

  return `
    <div class="slide03-table">
      <div class="slide03-table__row slide03-table__row--header">
        <div class="slide03-table__cell slide03-table__cell--era slide03-table__cell--header">Era</div>
        ${renderSlide03TableSortButton({ label: "Range", key: "range", sortState })}
        ${renderSlide03TableSortButton({ label: "Growth", key: "growth", sortState })}
        <div class="slide03-table__cell slide03-table__cell--context slide03-table__cell--header">Context</div>
      </div>
      ${visibleTableRows.map((row, index) => renderSlide03TableRow({ ...row, alt: index % 2 === 1 })).join("")}
    </div>
  `;
}

function updateSlide03TableSort(tableCard = document.querySelector(".slide--03 .slide03-table-card")) {
  if (!tableCard) return;
  tableCard.innerHTML = renderSlide03TableMarkup(state.slide03TableSort);
}

const slide03MarketChartConfig = {
  width: 1248,
  height: 356,
  margin: { top: 18, right: 18, bottom: 18, left: 8 },
  yMax: 16,
  colors: {
    broader: "#8DB654",
    enrichment: "#53B9AB",
    marketplace: "#C026D3",
  },
};

const slide03MarketChartSeries = [
  { key: "broader", label: "Broader B2B Data", color: slide03MarketChartConfig.colors.broader },
  { key: "enrichment", label: "Data Enrichment", color: slide03MarketChartConfig.colors.enrichment },
  { key: "marketplace", label: "B2B Marketplace", color: slide03MarketChartConfig.colors.marketplace },
];

function getSlide03MarketInterpolatedValue(anchors, year) {
  const sortedAnchors = anchors.slice().sort((a, b) => a.year - b.year);
  let lower = sortedAnchors[0];
  let upper = sortedAnchors[sortedAnchors.length - 1];

  sortedAnchors.forEach((anchor) => {
    if (anchor.year <= year) lower = anchor;
    if (anchor.year >= year && upper.year >= anchor.year) upper = anchor;
  });

  if (!lower || !upper) return 0;
  if (lower.year === upper.year) return lower.value;

  const progress = (year - lower.year) / (upper.year - lower.year);
  return lower.value + (upper.value - lower.value) * progress;
}

const slide03MarketChartData = Array.from({ length: 26 }, (_, index) => {
  const year = 2005 + index;
  const total = getSlide03MarketInterpolatedValue([
    { year: 2005, value: 0.89 },
    { year: 2019, value: 4.15 },
    { year: 2022, value: 6.2 },
    { year: 2024, value: 7.53 },
    { year: 2030, value: 15.47 },
  ], year);
  const enrichment = getSlide03MarketInterpolatedValue([
    { year: 2005, value: 0.08 },
    { year: 2019, value: 2.0 },
    { year: 2023, value: 2.37 },
    { year: 2024, value: 3.4 },
    { year: 2030, value: 4.58 },
  ], year);
  const marketplace = getSlide03MarketInterpolatedValue([
    { year: 2005, value: 0 },
    { year: 2019, value: 0.12 },
    { year: 2023, value: 0.7 },
    { year: 2024, value: 0.86 },
    { year: 2030, value: 3.22 },
  ], year);
  const broader = Math.max(0, total - enrichment - marketplace);

  return { year, broader, enrichment, marketplace };
});

function renderSlide03({ includeFooter = true, slideIndex = 2 } = {}) {
  const tableSortState = state.slide03TableSort ?? { key: null, direction: "asc" };
  const eras = [
    {
      start: "2005",
      duration: "14 years",
      end: "2019",
      label: "Cloud CRM Era",
      summary: "Cloud CRM adoption. Static data. Early ABM.",
      tone: "red",
      lineColor: "#EF4444",
      icon: ICON_PATHS.cloudCrmEra,
    },
    {
      start: "2020",
      duration: "3 years",
      end: "2022",
      label: "Enrichment Era",
      summaryHtml: "Data enrichment boom. Remote-first<br>GTM.",
      tone: "red-soft",
      lineColor: "#FCA5A5",
      icon: ICON_PATHS.enrichmentEra,
    },
    {
      start: "2023",
      duration: "2 years",
      end: "2024",
      label: "AI Transition Era",
      summary: "GenAI enters go-to-market. Marketplace category born.",
      tone: "lime-soft",
      lineColor: "#ABC978",
      icon: ICON_PATHS.aiTransitionEra,
    },
    {
      start: "2025",
      duration: "5 years",
      end: "2030",
      label: "Agentic AI Era",
      summaryHtml: "AI-driven execution. Automation<br>at scale.",
      tone: "lime",
      lineColor: "#8DB654",
      icon: ICON_PATHS.agenticAiEra,
    },
  ];

  const tableRows = [
    {
      era: "2005–2019 | (14 yrs)",
      rangeStart: "$0.89B",
      rangeEnd: "$4.15B",
      growth: "4.7×",
      context: "Cloud CRM adoption. First generation of sales tools. Early ABM.",
      alt: false,
      contextStrong: false,
    },
    {
      era: "2020–2022 | (2 yrs)",
      rangeStart: "$4.15B",
      rangeEnd: "$6.20B",
      growth: "1.49×",
      context: "COVID forces overnight shift to remote-first GTM.",
      alt: true,
      contextStrong: false,
    },
    {
      era: "2023–2024 | (1 yr)",
      rangeStart: "$6.20B",
      rangeEnd: "$7.53B",
      growth: "1.21×",
      context: "GenAI enters go-to-market. Marketplace category born.",
      alt: false,
      contextStrong: true,
    },
    {
      era: "2025–2030 | (5 yrs)",
      rangeStart: "$7.53B",
      rangeEnd: "$15.47B",
      growth: "2.05x",
      context: "Consensus projection at published CAGRs. Agentic AI era drives automation at scale.",
      alt: true,
      contextStrong: true,
    },
  ];
  const visibleTableRows = sortSlide03TableRows(tableRows, tableSortState);
  setTimeout(initSlide03MarketChart, 0);

  const sourceRows = [
    {
      name: "MarketsandMarkets",
      startValue: "$2.0B (2019)",
      endValue: "$3.4B (2024)",
      growth: "@ 11.4%",
      growthValue: "$3.4B (2024) @ 11.4%",
    },
    {
      name: "Allied Market Research",
      startValue: "$2.78B (2020)",
      endValue: "$7.35B (2030)",
      growth: "@ 10.6%",
      growthValue: "$7.35B (2030) @ 10.6%",
    },
    {
      name: "Precedence Research",
      startValue: "$3.31B (2023)",
      endValue: "$7.45B (2031)",
      growth: "@ 10.6%",
      growthValue: "$7.45B (2031) @ 10.6%",
    },
    {
      name: "Acumen Research & Consulting",
      startValue: "$1.70B (2021)",
      endValue: "$3.5B (2030)",
      growth: "@ 8.5%",
      growthValue: "$3.5B (2030) @ 8.5%",
    },
    {
      name: "Grand View Research (Enrichment)",
      startValue: "$2.37B (2023)",
      endValue: "$4.58B (2030)",
      growth: "@ 10.1%",
      growthValue: "$4.58B (2030) @ 10.1%",
    },
    {
      name: "Introspective Market Research",
      startValue: "$2.39B (2023)",
      endValue: "$5.73B (2032)",
      growth: "@ 10.2%",
      growthValue: "$5.73B (2032) @ 10.2%",
    },
    {
      name: "Verified Market Reports",
      startValue: "$1.0B (2023)",
      endValue: "$7.32B (2030)",
      growth: "@ 25.4%",
      growthValue: "$7.32B (2030) @ 25.4%",
    },
    {
      name: "Grand View Research (Marketplace)",
      startValue: "$1.49B total (2024); B2B = 58% = $0.86B",
      endValue: "$5.73B (2030)",
      growth: "@ 25.2%",
      growthValue: "$5.73B (2030) @ 25.2%",
    },
    {
      name: "Prospeo / GVR (B2B segment)",
      startValue: "$0.86B (2024)",
      endValue: "$3.22B (2030)",
      growth: "@ 24.6%",
      growthValue: "$3.22B (2030) @ 24.6%",
    },
  ];

  return `
    <section class="slide slide--light slide--03" aria-label="03 · The State of B2B Data Industry" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide03-layout">
        <div class="slide03-heading">
          <div class="slide03-heading__top">
            <div class="report-label report-label--light">03 · The State of B2B Data Industry</div>
            <h1 class="slide03-headline" aria-label="B2B data is on track to 17x. But AI is rewriting the playbook">
              <span class="slide03-headline__line slide03-headline__line--accent">B2B data is on track to 17x.</span>
              <span class="slide03-headline__line">But AI is rewriting the playbook</span>
            </h1>
          </div>
          <div class="slide03-subtitle">
            <p>B2B data will become a $15B industry by 2030. And most revenue teams trust their data less than they did a decade ago. That's the paradox this report lives inside.</p>
          </div>
        </div>

        <section class="slide03-chart-card" aria-label="B2B data market chart">
          <div class="slide03-chart-card__inner">
            <div class="slide03-chart-card__top">
              <div class="slide03-chart-card__legend" aria-label="Legend">
                <div class="slide03-chart-card__legend-item">
                  ${renderIconImage("slide03-chart-card__legend-swatch slide03-chart-card__legend-swatch--lime", ICON_PATHS.dotGreen)}
                  <span>Broader B2B Data Market</span>
                </div>
                <div class="slide03-chart-card__legend-item">
                  ${renderIconImage("slide03-chart-card__legend-swatch slide03-chart-card__legend-swatch--teal", ICON_PATHS.dotBlue)}
                  <span>Data Enrichment Market</span>
                </div>
                <div class="slide03-chart-card__legend-item">
                  ${renderIconImage("slide03-chart-card__legend-swatch slide03-chart-card__legend-swatch--magenta", ICON_PATHS.dotPurple)}
                  <span>Global B2B Data Marketplace</span>
                </div>
              </div>
              <div class="slide03-chart-card__label">Stacked areas = segment contribution</div>
            </div>

            <div class="slide03-chart-card__graph-stack">
              <div class="slide03-chart-card__divider-layer" aria-hidden="true">
                <span class="slide03-chart-card__divider slide03-chart-card__divider--after-2019"></span>
                <span class="slide03-chart-card__divider slide03-chart-card__divider--main"></span>
                <span class="slide03-chart-card__divider slide03-chart-card__divider--after-2024"></span>
              </div>
              <div class="slide03-chart-card__graph">
                <div class="slide03-chart-card__y-axis" aria-label="Y axis labels">
                  <span>$16B</span>
                  <span>$14B</span>
                  <span>$12B</span>
                  <span>$10B</span>
                  <span>$8B</span>
                  <span>$6B</span>
                  <span>$4B</span>
                  <span>$2B</span>
                  <span>$0B</span>
                </div>
                <div class="slide03-chart-card__plot">
                  <div class="slide03-market-chart" data-slide03-market-chart>
                    <svg class="slide03-market-chart__svg" data-slide03-market-svg role="img" aria-label="B2B data market growth chart from 2005 to 2030"></svg>
                    <div class="slide03-market-chart__tooltip" data-slide03-market-tooltip hidden></div>
                  </div>
                </div>
              </div>
              <div class="slide03-chart-card__eras">
                ${eras.map(renderSlide03Era).join("")}
              </div>
            </div>

            <div class="slide03-chart-card__compare" aria-label="AI comparison">
              ${renderSlide03CompareBlock({
                tone: "before",
                iconTone: "before",
                label: "Before AI",
                value: "7x over 17 years",
                summary: "Cloud CRM era. Static databases. Manual workflows",
                body: `The industry grew steadily through the cloud CRM era, accelerated with the rise of intent data and ABM, then inflected sharply from 2020 onward as remote selling, AI enrichment, and agentic outreach converged. But scale hasn't solved the core problem. Teams have more data than ever, and <span class="slide03-emphasis slide03-emphasis--red">less trust in any of it.</span>`,
              })}
              ${renderSlide03CompareBlock({
                tone: "after",
                iconTone: "after",
                label: "After AI",
                value: "2x in the next 5",
                summary: "AI-driven acceleration. Signal-based targeting. Agentic execution.",
                body: `The shape of the curve tells the story. The B2B data market took nearly two decades to 7x. It will double again in a third of that time, and the accelerant is AI. Every incremental dollar flowing into this category now expects data that can be <span class="slide03-emphasis slide03-emphasis--lime">acted on by AI</span>, not just exported by humans.`,
              })}
            </div>
          </div>
        </section>

        <section class="slide03-table-card" aria-label="B2B data industry growth table">
          <div class="slide03-table">
            <div class="slide03-table__row slide03-table__row--header">
              <div class="slide03-table__cell slide03-table__cell--era slide03-table__cell--header">Era</div>
              ${renderSlide03TableSortButton({ label: "Range", key: "range", sortState: tableSortState })}
              ${renderSlide03TableSortButton({ label: "Growth", key: "growth", sortState: tableSortState })}
              <div class="slide03-table__cell slide03-table__cell--context slide03-table__cell--header">Context</div>
            </div>
            ${visibleTableRows.map((row, index) => renderSlide03TableRow({ ...row, alt: index % 2 === 1 })).join("")}
          </div>
        </section>

        <div class="slide03-callout" aria-label="AI callout">
          <div class="slide03-callout__icon">
            ${renderIconImage("", slide03CalloutIcon)}
          </div>
          <p><span class="slide03-callout__accent">AI</span> raised the bar on what data has to do. The next question is why, even on a good day, most data still can't clear it.</p>
        </div>

        <details class="slide03-sources">
          <summary class="slide03-sources__summary">
            <span class="slide03-sources__summary-row">
              <span class="slide03-sources__chevron" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="slide03-sources__summary-title slide03-sources__summary-title--closed">Show data sources</span>
              <span class="slide03-sources__summary-title slide03-sources__summary-title--open">Hide data sources</span>
            </span>
          </summary>
          <div class="slide03-sources__body">
            <p class="slide03-sources__intro">Historical values pre-2019 back-cast using published CAGRs from anchor years. All post-2025 values are projections at published consensus CAGRs.</p>
            <div class="slide03-sources__divider" aria-hidden="true"></div>
            <div class="slide03-sources__list" aria-label="Data sources">
              ${sourceRows.map(renderSlide03SourceRow).join("")}
            </div>
          </div>
        </details>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

let slide03MarketChartCleanup = null;

function hideSlide03MarketChartState() {
  document.querySelectorAll("[data-slide03-market-active-layer]").forEach((layer) => {
    layer.style.display = "none";
  });

  const tooltip = document.querySelector("[data-slide03-market-tooltip]");
  if (tooltip) {
    tooltip.hidden = true;
    tooltip.style.visibility = "hidden";
  }
}

function cleanupSlide03MarketChart() {
  if (!slide03MarketChartCleanup) {
    hideSlide03MarketChartState();
    return;
  }

  slide03MarketChartCleanup();
  slide03MarketChartCleanup = null;
}

function getSlide03MarketCombinedValue(dataPoint) {
  return dataPoint.broader + dataPoint.enrichment + dataPoint.marketplace;
}

function getSlide03MarketStackValue(dataPoint, key) {
  if (key === "broader") return dataPoint.broader;
  if (key === "enrichment") return dataPoint.broader + dataPoint.enrichment;
  return getSlide03MarketCombinedValue(dataPoint);
}

function getSlide03MarketEra(year) {
  if (year <= 2019) return "Cloud CRM Era";
  if (year <= 2022) return "Enrichment Era";
  if (year <= 2024) return "AI Transition Era";
  return "Agentic AI Era";
}

function formatSlide03MarketValue(value) {
  return `$${value.toFixed(2)}B`;
}

function getSlide03MarketPoint(dataPoint, key) {
  const { width, height, margin, yMax } = slide03MarketChartConfig;
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = margin.left + ((dataPoint.year - 2005) / 25) * plotWidth;
  const y = margin.top + (1 - getSlide03MarketStackValue(dataPoint, key) / yMax) * plotHeight;

  return { x, y };
}

function renderSlide03MarketSmoothCommands(points) {
  const tension = 0.18;
  return points.slice(0, -1).map((point, index) => {
    const nextPoint = points[index + 1];
    const previousPoint = points[index - 1] ?? point;
    const afterNextPoint = points[index + 2] ?? nextPoint;
    const cp1x = point.x + (nextPoint.x - previousPoint.x) * tension;
    const cp1y = point.y + (nextPoint.y - previousPoint.y) * tension;
    const cp2x = nextPoint.x - (afterNextPoint.x - point.x) * tension;
    const cp2y = nextPoint.y - (afterNextPoint.y - point.y) * tension;

    return `C${cp1x.toFixed(2)} ${cp1y.toFixed(2)} ${cp2x.toFixed(2)} ${cp2y.toFixed(2)} ${nextPoint.x.toFixed(2)} ${nextPoint.y.toFixed(2)}`;
  }).join(" ");
}

function renderSlide03MarketSmoothPath(points) {
  if (!points.length) return "";
  return `M${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} ${renderSlide03MarketSmoothCommands(points)}`;
}

function renderSlide03MarketLinePath(key) {
  return renderSlide03MarketSmoothPath(
    slide03MarketChartData.map((dataPoint) => getSlide03MarketPoint(dataPoint, key))
  );
}

function renderSlide03MarketAreaPath(key, lowerKey = null) {
  const upperPoints = slide03MarketChartData.map((dataPoint) => getSlide03MarketPoint(dataPoint, key));
  const lowerPoints = slide03MarketChartData.map((dataPoint) => {
    if (lowerKey) return getSlide03MarketPoint(dataPoint, lowerKey);
    return {
      x: getSlide03MarketPoint(dataPoint, key).x,
      y: slide03MarketChartConfig.height - slide03MarketChartConfig.margin.bottom,
    };
  }).reverse();
  const lowerStart = lowerPoints[0];

  return `${renderSlide03MarketSmoothPath(upperPoints)} L${lowerStart.x.toFixed(2)} ${lowerStart.y.toFixed(2)} ${renderSlide03MarketSmoothCommands(lowerPoints)} Z`;
}

function renderSlide03MarketTooltip(dataPoint) {
  const rows = slide03MarketChartSeries.map((series) => `
    <div class="slide03-market-chart__tooltip-row">
      <span class="slide03-market-chart__tooltip-label">
        <span class="slide03-market-chart__tooltip-marker" style="--slide03-marker-color: ${series.color};" aria-hidden="true"></span>
        <span>${escapeHtml(series.label)}</span>
      </span>
      <span class="slide03-market-chart__tooltip-value">${formatSlide03MarketValue(dataPoint[series.key])}</span>
    </div>
  `).join("");

  return `
    <p class="slide03-market-chart__tooltip-title">${escapeHtml(getSlide03MarketEra(dataPoint.year))} ${dataPoint.year}</p>
    <div class="slide03-market-chart__tooltip-rows">
      ${rows}
      <div class="slide03-market-chart__tooltip-row slide03-market-chart__tooltip-row--combined">
        <span class="slide03-market-chart__tooltip-label">
          <span class="slide03-market-chart__tooltip-marker slide03-market-chart__tooltip-marker--combined" aria-hidden="true"></span>
          <span>Combined</span>
        </span>
        <span class="slide03-market-chart__tooltip-value">${formatSlide03MarketValue(getSlide03MarketCombinedValue(dataPoint))}</span>
      </div>
    </div>
  `;
}

function initSlide03MarketChart() {
  if (slide03MarketChartCleanup) {
    cleanupSlide03MarketChart();
  }

  const chart = document.querySelector("[data-slide03-market-chart]");
  if (!chart) return;

  const svg = chart.querySelector("[data-slide03-market-svg]");
  const tooltip = chart.querySelector("[data-slide03-market-tooltip]");
  if (!svg || !tooltip) return;
  const tooltipHome = tooltip.parentElement;
  document.body.appendChild(tooltip);
  chart.classList.remove("is-animated");

  const { width, height, margin } = slide03MarketChartConfig;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  const gradientStops = slide03MarketChartSeries.map((series) => `
    <linearGradient id="slide03-market-gradient-${series.key}" x1="0" y1="${margin.top}" x2="0" y2="${height - margin.bottom}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${series.color}" stop-opacity="0.24" />
      <stop offset="72%" stop-color="${series.color}" stop-opacity="0.07" />
      <stop offset="100%" stop-color="${series.color}" stop-opacity="0" />
    </linearGradient>
  `).join("");
  const areaPaths = [
    { key: "broader", lowerKey: null },
    { key: "enrichment", lowerKey: "broader" },
    { key: "marketplace", lowerKey: "enrichment" },
  ].map(({ key, lowerKey }) => `
    <path class="slide03-market-chart__area" data-slide03-market-area="${key}" d="${renderSlide03MarketAreaPath(key, lowerKey)}" fill="url(#slide03-market-gradient-${key})" />
  `).join("");
  const linePaths = slide03MarketChartSeries.map((series) => `
    <path class="slide03-market-chart__line" data-slide03-market-line="${series.key}" pathLength="1" d="${renderSlide03MarketLinePath(series.key)}" stroke="${series.color}" />
  `).join("");
  const firstYearX = getSlide03MarketPoint(slide03MarketChartData[0], "marketplace").x;
  const hitBandWidth = (width - margin.left - margin.right) / 25;
  const hitBands = slide03MarketChartData.map((dataPoint, index) => {
    const { x } = getSlide03MarketPoint(dataPoint, "marketplace");
    const bandX = index === 0 ? 0 : x - hitBandWidth / 2;
    const bandRight = index === slide03MarketChartData.length - 1 ? width : x + hitBandWidth / 2;
    const bandWidth = bandRight - bandX;
    return `<rect class="slide03-market-chart__hit-band" data-slide03-market-year="${dataPoint.year}" x="${bandX.toFixed(2)}" y="0" width="${bandWidth.toFixed(2)}" height="${height}" />`;
  }).join("");
  const markerCircles = slide03MarketChartSeries.map((series) => `
    <circle class="slide03-market-chart__active-point" data-slide03-market-point="${series.key}" r="5.5" fill="#fff" stroke="${series.color}" />
  `).join("");

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("preserveAspectRatio", "none");
  svg.innerHTML = `
    <defs>${gradientStops}</defs>
    <g class="slide03-market-chart__areas" aria-hidden="true">${areaPaths}</g>
    <g class="slide03-market-chart__lines" aria-hidden="true">${linePaths}</g>
    <g class="slide03-market-chart__active-layer" data-slide03-market-active-layer aria-hidden="true">
      <line class="slide03-market-chart__active-guide" data-slide03-market-guide x1="${firstYearX}" x2="${firstYearX}" y1="${margin.top}" y2="${height - margin.bottom}" />
      ${markerCircles}
    </g>
    <g class="slide03-market-chart__hit-area">${hitBands}</g>
  `;

  const lineElements = Array.from(svg.querySelectorAll("[data-slide03-market-line]"));
  const areaElements = Array.from(svg.querySelectorAll("[data-slide03-market-area]"));
  const activeLayer = svg.querySelector("[data-slide03-market-active-layer]");
  const activeGuide = svg.querySelector("[data-slide03-market-guide]");
  const activePoints = Array.from(svg.querySelectorAll("[data-slide03-market-point]"));
  const animationTimeouts = [];
  let observer = null;
  let animationStarted = false;

  activeLayer.style.display = "none";
  lineElements.forEach((line) => {
    line.classList.remove("is-drawn");
  });
  areaElements.forEach((area) => {
    area.classList.remove("is-visible");
  });

  function revealChart() {
    if (animationStarted) return;
    animationStarted = true;
    chart.classList.add("is-animated");

    if (reducedMotion) {
      lineElements.forEach((line) => {
        line.style.transition = "none";
        line.classList.add("is-drawn");
      });
      areaElements.forEach((area) => {
        area.style.transition = "none";
        area.classList.add("is-visible");
      });
      return;
    }

    lineElements.forEach((line, index) => {
      const timeoutId = setTimeout(() => {
        line.classList.add("is-drawn");
        areaElements[index]?.classList.add("is-visible");
      }, index * 190);
      animationTimeouts.push(timeoutId);
    });
  }

  function getDataPointFromEvent(event) {
    const targetYear = Number(event.target?.dataset?.slide03MarketYear);
    if (Number.isFinite(targetYear)) {
      return slide03MarketChartData.find((dataPoint) => dataPoint.year === targetYear) ?? slide03MarketChartData[0];
    }

    const svgRect = svg.getBoundingClientRect();
    if (!svgRect.width) return slide03MarketChartData[0];
    const relativeX = clamp((event.clientX - svgRect.left) / svgRect.width, 0, 1);
    const index = clamp(Math.round(relativeX * (slide03MarketChartData.length - 1)), 0, slide03MarketChartData.length - 1);
    return slide03MarketChartData[index];
  }

  function getNearestSeriesPoint(dataPoint, pointerViewY) {
    return slide03MarketChartSeries
      .map((series) => ({
        key: series.key,
        point: getSlide03MarketPoint(dataPoint, series.key),
      }))
      .sort((a, b) => Math.abs(pointerViewY - a.point.y) - Math.abs(pointerViewY - b.point.y))[0].point;
  }

  function getPointerViewY(event) {
    const svgRect = svg.getBoundingClientRect();
    if (!svgRect.height) return height / 2;
    return clamp((event.clientY - svgRect.top) / svgRect.height, 0, 1) * height;
  }

  function positionTooltip(dataPoint, anchorPoint) {
    const chartRect = chart.getBoundingClientRect();
    const pointLeft = (anchorPoint.x / width) * chartRect.width;
    const pointTop = (anchorPoint.y / height) * chartRect.height;
    const anchorLeft = chartRect.left + pointLeft;
    const anchorTop = chartRect.top + pointTop;

    tooltip.hidden = false;
    tooltip.style.visibility = "hidden";
    tooltip.innerHTML = renderSlide03MarketTooltip(dataPoint);

    const tooltipRect = tooltip.getBoundingClientRect();
    const edgePadding = 8;
    const maxLeft = Math.max(edgePadding, window.innerWidth - tooltipRect.width - edgePadding);
    const left = clamp(anchorLeft - tooltipRect.width / 2, edgePadding, maxLeft);
    const top = anchorTop - tooltipRect.height - 18;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.setProperty("--slide03-tooltip-tail-x", `${clamp(anchorLeft - left, 24, tooltipRect.width - 24)}px`);
    delete tooltip.dataset.placement;
    tooltip.style.visibility = "visible";
  }

  function showActivePoint(dataPoint, pointerViewY) {
    const { x } = getSlide03MarketPoint(dataPoint, "marketplace");
    const tooltipAnchorPoint = getNearestSeriesPoint(dataPoint, pointerViewY);
    activeGuide.setAttribute("x1", x.toFixed(2));
    activeGuide.setAttribute("x2", x.toFixed(2));

    activePoints.forEach((point) => {
      const key = point.dataset.slide03MarketPoint;
      const activePoint = getSlide03MarketPoint(dataPoint, key);
      point.setAttribute("cx", activePoint.x.toFixed(2));
      point.setAttribute("cy", activePoint.y.toFixed(2));
    });

    activeLayer.style.display = "";
    positionTooltip(dataPoint, tooltipAnchorPoint);
  }

  function handlePointerMove(event) {
    showActivePoint(getDataPointFromEvent(event), getPointerViewY(event));
  }

  function hideActivePoint() {
    activeLayer.style.display = "none";
    tooltip.hidden = true;
  }

  svg.addEventListener("pointerenter", handlePointerMove);
  svg.addEventListener("pointermove", handlePointerMove);
  chart.addEventListener("pointerleave", hideActivePoint);
  chart.addEventListener("blur", hideActivePoint, true);

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.35)) {
        revealChart();
        observer?.disconnect();
      }
    }, { threshold: [0.35] });
    observer.observe(chart);
  } else {
    requestAnimationFrame(revealChart);
  }

  if (reducedMotion) revealChart();

  slide03MarketChartCleanup = () => {
    observer?.disconnect();
    animationTimeouts.forEach(clearTimeout);
    svg.removeEventListener("pointerenter", handlePointerMove);
    svg.removeEventListener("pointermove", handlePointerMove);
    chart.removeEventListener("pointerleave", hideActivePoint);
    chart.removeEventListener("blur", hideActivePoint, true);
    hideActivePoint();
    tooltip.removeAttribute("style");
    if (tooltipHome?.isConnected) {
      tooltipHome.appendChild(tooltip);
    } else {
      tooltip.remove();
    }
  };
}

function renderSlide04AHeadlineRule(direction) {
  const isLeft = direction === "left";
  const svgClass = isLeft
    ? "slide04a-headline__rule-svg"
    : "slide04a-headline__rule-svg slide04a-headline__rule-svg--mirror";

  return `
    <span class="slide04a-headline__rule slide04a-headline__rule--${direction}" aria-hidden="true">
      <svg class="${svgClass}" viewBox="0 0 419 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M418.854 3.32845C419.049 3.52372 419.049 3.8403 418.854 4.03556L415.672 7.21754C415.476 7.4128 415.16 7.4128 414.964 7.21754C414.769 7.02228 414.769 6.7057 414.964 6.51043L417.793 3.68201L414.964 0.85358C414.769 0.658318 414.769 0.341735 414.964 0.146473C415.16 -0.0487893 415.476 -0.0487893 415.672 0.146473L418.854 3.32845ZM418.5 3.68201V4.18201H0V3.68201V3.18201H418.5V3.68201Z" fill="#EF4444" />
      </svg>
    </span>
  `;
}

function renderSlide04AStatCard({ value, body, tone }) {
  return `
    <article class="slide04a-stat-card slide04a-stat-card--${tone}">
      <div class="slide04a-stat-card__value-wrap">
        <p class="slide04a-stat-card__value">${escapeHtml(value)}</p>
      </div>
      <p class="slide04a-stat-card__body">${escapeHtml(body)}</p>
    </article>
  `;
}

const slide04aInitialMonth = 0;
const slide04aMaxMonth = 12;
const slide04aMaxDecay = 70.8;

const slide04aDecayContacts = [
  { name: "Sarah Chen", role: "VP Sales - TechCorp", decayMonth: 1, decayStatus: "Outdated" },
  { name: "Marcus Lee", role: "Revenue Ops Lead - NorthstarIQ", decayMonth: 2.5, decayStatus: "Bounced" },
  { name: "Priya Raman", role: "Head of Growth - Cloudline", decayMonth: 4, decayStatus: "Bounced" },
  { name: "Daniel Ortiz", role: "Demand Gen Director - BrightWorks", decayMonth: 5.5, decayStatus: "Unsubscribed" },
  { name: "Elena Petrova", role: "Sales Manager - VectorLabs", decayMonth: 7, decayStatus: "Unsubscribed" },
  { name: "Noah Williams", role: "COO - FinPilot", decayMonth: 8.5, decayStatus: "Bounced" },
  { name: "Amara Okafor", role: "VP Marketing - AtlasHR", decayMonth: 10, decayStatus: "Unsubscribed" },
  { name: "Sofia Martinez", role: "Founder - SignalWorks", decayMonth: 11.5, decayStatus: "Bounced" },
  { name: "James Park", role: "CRO - RelayBase", decayMonth: null, decayStatus: "Active" },
  { name: "Maya Johnson", role: "Partnerships Lead - ApexCloud", decayMonth: null, decayStatus: "Active" },
];

function getSlide04AContactState({ decayMonth, decayStatus }, month) {
  const decayed = decayMonth !== null && month >= decayMonth;
  const badge = decayed ? decayStatus : "Active";
  const badgeTone = decayed
    ? badge === "Outdated"
      ? "gray"
      : "red"
    : "lime";

  return { decayed, badge, badgeTone };
}

function getSlide04ASortedContactRows(month) {
  return slide04aDecayContacts
    .map((contact, index) => ({
      contact,
      index,
      decayed: getSlide04AContactState(contact, month).decayed,
    }))
    .sort((a, b) => Number(a.decayed) - Number(b.decayed) || a.index - b.index);
}

function renderSlide04ADemoControls() {
  return `
    <button class="slide04a-demo__control" data-slide04a-play type="button" aria-label="Play decay animation" data-state="paused">
      ${renderIconImage("slide04a-demo__control-icon slide04a-demo__control-icon--play", ICON_PATHS.decayPlay)}
      ${renderIconImage("slide04a-demo__control-icon slide04a-demo__control-icon--pause", ICON_PATHS.decayPause)}
    </button>
    <button class="slide04a-demo__control" data-slide04a-reset type="button" aria-label="Replay decay animation">
      ${renderIconImage("slide04a-demo__control-icon", ICON_PATHS.decayReplay)}
    </button>
  `;
}

function renderSlide04AContactRow({ name, role, decayMonth, decayStatus }, index, month = slide04aInitialMonth) {
  const { decayed, badge, badgeTone } = getSlide04AContactState({ decayMonth, decayStatus }, month);
  const threshold = decayMonth === null ? "" : String(decayMonth);
  return `
    <div class="slide04a-contact-row ${decayed ? "is-decayed" : ""}" data-slide04a-contact data-slide04a-contact-index="${index}" data-slide04a-decay-month="${threshold}" data-slide04a-decay-status="${escapeHtml(decayStatus)}">
      <div class="slide04a-contact-row__details">
        <p class="slide04a-contact-row__name ${decayed ? "slide04a-contact-row__name--strike" : ""}">${escapeHtml(name)}</p>
        <p class="slide04a-contact-row__role">${escapeHtml(role)}</p>
      </div>
      <div class="slide04a-contact-row__badge slide04a-contact-row__badge--${badgeTone}">${escapeHtml(badge)}</div>
    </div>
  `;
}

function renderSlide04A({ includeFooter = true, slideIndex = 3 } = {}) {
  const leftStatCards = [
    {
      value: "71%",
      body: "of B2B decision-makers ignore outreach due to poor relevance, weak personalization, and low contextual value.",
      tone: "neutral",
    },
    {
      value: "~5%",
      body: "of your target market is actively buying at any given time — while most accounts are still not ready to make a purchase yet.",
      tone: "neutral",
    },
  ];

  const rightStatCards = [
    {
      value: "70.8%",
      body: "of contacts change within 12 months; 65.8% change roles or titles",
      tone: "accent",
    },
    {
      value: "~109 hrs",
      body: "average selling time wasted per SDR annually on bad data",
      tone: "accent",
    },
    {
      value: "$5M+",
      body: "annual loss for organizations caused by outdated data",
      tone: "accent",
    },
  ];

  const contactRows = getSlide04ASortedContactRows(slide04aInitialMonth);
  const initialProgress = slide04aInitialMonth / slide04aMaxMonth;
  const initialColor = getSlide04AInterpolatedColor(initialProgress);
  const initialDecayPercent = (slide04aMaxDecay * initialProgress).toFixed(1);
  const initialProgressPercent = `${(initialProgress * 100).toFixed(3)}%`;
  const initialVisibleMonth = Math.floor(slide04aInitialMonth);
  setTimeout(bindSlide04ADecayDemo, 0);

  return `
    <section class="slide slide--light slide--04a" aria-label="04 · A The Execution Gap" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide04a-layout">
        <div class="slide04a-heading">
          <div class="slide04a-heading__title">
            <div class="report-label report-label--light slide04a-heading__eyebrow">04 · A The Execution Gap</div>
            <h1 class="slide04a-headline" aria-label="The data model is broken on both ends">
              <span class="slide04a-headline__line">The data model is <span class="slide04a-headline__accent">broken</span></span>
              <span class="slide04a-headline__line slide04a-headline__line--decorated">
                ${renderSlide04AHeadlineRule("left")}
                <span class="slide04a-headline__decorated-text">on both ends</span>
                ${renderSlide04AHeadlineRule("right")}
              </span>
            </h1>
          </div>
          <p class="slide04a-heading__intro">Filter-based targeting finds accounts that might fit. Stale records find accounts that used to fit. Both are symptoms of the same model: access without execution. Half the names on your list shouldn't be there. Half the ones that should be are already out of date.</p>
        </div>

        <div class="slide04a-content">
          <div class="slide04a-columns">
            <div class="slide04a-column">
              <div class="slide04a-subsection">
                <div class="slide04a-subsection__header">
                  <div class="slide04a-subsection__icon slide04a-subsection__icon--neutral" aria-hidden="true">
                    <img src="${slide04aNeutralIcon}" alt="" />
                  </div>
                  <div class="slide04a-subsection__copy">
                    <div class="slide04a-subsection__title">
                      <p>Access without intelligence:</p>
                      <p><span>the </span><span class="slide04a-emphasis slide04a-emphasis--red">relevance problem</span><span> </span><span class="slide04a-emphasis slide04a-emphasis--red">going in</span><span>.</span></p>
                    </div>
                  </div>
                </div>
                <p class="slide04a-subsection__body"><span class="slide04a-subsection__body--muted">Filter-based lists return thousands of accounts that match. They don't identify the small fraction that are ready. </span><span class="slide04a-subsection__body--dark">If only 5% of a filter-matched list is in-market, and 71% of the rest will ignore you on relevance alone, </span><span class="slide04a-emphasis slide04a-emphasis--red">volume is working against you</span><span class="slide04a-subsection__body--dark">.</span></p>
              </div>
              <div class="slide04a-card-grid slide04a-card-grid--2">
                ${leftStatCards.map(renderSlide04AStatCard).join("")}
              </div>
            </div>

            <div class="slide04a-column">
              <div class="slide04a-subsection">
                <div class="slide04a-subsection__header">
                  <div class="slide04a-subsection__icon slide04a-subsection__icon--accent" aria-hidden="true">
                    <img src="${slide04aAccentIcon}" alt="" />
                  </div>
                  <div class="slide04a-subsection__copy">
                    <div class="slide04a-subsection__title">
                      <p>Access without activation:</p>
                      <p><span>the </span><span class="slide04a-emphasis slide04a-emphasis--red">decay problem</span><span> </span><span class="slide04a-emphasis slide04a-emphasis--red">coming out.</span></p>
                    </div>
                  </div>
                </div>
                <p class="slide04a-subsection__body"><span class="slide04a-subsection__body--muted">People change roles. Companies restructure. Emails expire. Titles shift. The database you paid for last year is not the database you have today. </span><span class="slide04a-subsection__body--dark">SDR hours burn on empty desks. </span><span class="slide04a-emphasis slide04a-emphasis--red">Pipeline thins quietly</span><span class="slide04a-subsection__body--dark"> while everyone assumes the data is still working.</span></p>
              </div>
              <div class="slide04a-card-grid slide04a-card-grid--3">
                ${rightStatCards.map(renderSlide04AStatCard).join("")}
              </div>
            </div>
          </div>

          <div class="slide04a-divider" aria-hidden="true"></div>

          <section class="slide04a-demo" aria-label="Your database, 12 months from now" style="--slide04a-decay-color: ${initialColor}; --slide04a-decay-progress: ${initialProgressPercent};">
            <div class="slide04a-demo__header">
              <div class="slide04a-demo__heading">
                <p class="slide04a-demo__eyebrow">Interactive · Your database, 12 months from now</p>
                <p class="slide04a-demo__title">Watch what happens to 10 contacts you just exported.</p>
              </div>
              <div class="slide04a-demo__icons">
                ${renderSlide04ADemoControls()}
              </div>
            </div>
            <div class="slide04a-demo__body">
              <aside class="slide04a-demo__stats" aria-label="Contacts decay summary">
                <div class="slide04a-demo__score-card">
                  <div class="slide04a-demo__score-stat">
                    <div class="slide04a-demo__score-value">
                      <span class="slide04a-demo__score-number">${initialDecayPercent}</span>
                      <span class="slide04a-demo__score-percent">%</span>
                    </div>
                    <p class="slide04a-demo__score-label">of contacts decayed</p>
                  </div>
                  <div class="slide04a-demo__score-meta">
                    <p class="slide04a-demo__score-month">Month ${initialVisibleMonth} of 12</p>
                    <div class="slide04a-demo__progress">
                      <div class="slide04a-demo__progress-fill"></div>
                      <div class="slide04a-demo__progress-dot"></div>
                      <input class="slide04a-demo__range" data-slide04a-range type="range" min="0" max="12" step="0.01" value="${slide04aInitialMonth}" aria-label="Decay month" />
                    </div>
                    <div class="slide04a-demo__months" aria-hidden="true">
                      <span>M0</span>
                      <span>M3</span>
                      <span>M6</span>
                      <span>M9</span>
                      <span>M12</span>
                    </div>
                  </div>
                </div>
                <div class="slide04a-demo__copy">
                  <p>Play it, or drag the slider. 7 of 10 contacts will be unreachable within 12 months — roles change, emails die, companies restructure.</p>
                  <p>The database you paid for last year is not the database you have today.</p>
                </div>
              </aside>
              <div class="slide04a-demo__contacts" aria-label="Contact status list">
                ${contactRows.map(({ contact, index }) => renderSlide04AContactRow(contact, index, slide04aInitialMonth)).join("")}
                <span class="slide04a-demo__scrollbar" aria-hidden="true"></span>
              </div>
            </div>
          </section>
        </div>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

let slide04aDemoCleanup = null;

function getSlide04AInterpolatedColor(progress) {
  const start = { r: 141, g: 182, b: 84 };
  const end = { r: 239, g: 68, b: 68 };
  const amount = clamp(progress, 0, 1);
  const r = Math.round(start.r + (end.r - start.r) * amount);
  const g = Math.round(start.g + (end.g - start.g) * amount);
  const b = Math.round(start.b + (end.b - start.b) * amount);
  return `rgb(${r}, ${g}, ${b})`;
}

function setSlide04APlayState(button, isPlaying) {
  if (!button) return;
  button.dataset.state = isPlaying ? "playing" : "paused";
  button.setAttribute("aria-label", isPlaying ? "Pause decay animation" : "Play decay animation");
}

function bindSlide04ADecayDemo() {
  if (slide04aDemoCleanup) {
    slide04aDemoCleanup();
    slide04aDemoCleanup = null;
  }

  const demo = document.querySelector(".slide04a-demo");
  if (!demo) return;

  const range = demo.querySelector("[data-slide04a-range]");
  const scoreNumber = demo.querySelector(".slide04a-demo__score-number");
  const scorePercent = demo.querySelector(".slide04a-demo__score-percent");
  const monthLabel = demo.querySelector(".slide04a-demo__score-month");
  const playButton = demo.querySelector("[data-slide04a-play]");
  const resetButton = demo.querySelector("[data-slide04a-reset]");
  const contacts = demo.querySelector(".slide04a-demo__contacts");
  const contactRows = Array.from(demo.querySelectorAll("[data-slide04a-contact]"));
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  if (!range || !scoreNumber || !scorePercent || !monthLabel || !playButton || !resetButton || !contacts) return;

  const maxMonth = slide04aMaxMonth;
  const maxDecay = slide04aMaxDecay;
  const duration = 4200;
  const justDecayedHoldMs = 500;
  let currentMonth = slide04aInitialMonth;
  let rafId = null;
  let delayId = null;
  let pendingSortTimerId = null;
  let observer = null;
  let isPlaying = false;
  let autoFollowContacts = true;
  let lastAutoFollowTop = null;
  let lastContactOrder = "";
  const previousDecayedByIndex = new Map(
    contactRows.map((row) => [Number(row.dataset.slide04aContactIndex || 0), false])
  );
  const pendingSortUntilByIndex = new Map();

  function clearPendingSortTimer() {
    if (pendingSortTimerId === null) return;
    clearTimeout(pendingSortTimerId);
    pendingSortTimerId = null;
  }

  function schedulePendingSort() {
    clearPendingSortTimer();

    const now = performance.now();
    const nextSortAt = Math.min(
      ...Array.from(pendingSortUntilByIndex.values()).filter((sortAt) => sortAt > now)
    );

    if (!Number.isFinite(nextSortAt)) return;

    pendingSortTimerId = setTimeout(() => {
      pendingSortTimerId = null;
      syncContacts(currentMonth);
      followDecayedBoundary();
      schedulePendingSort();
    }, Math.max(0, nextSortAt - now));
  }

  function syncContacts(month, { forceSort = false } = {}) {
    const now = performance.now();
    if (forceSort) {
      pendingSortUntilByIndex.clear();
      clearPendingSortTimer();
    }

    const rowsWithState = contactRows.map((row) => {
      const thresholdRaw = row.dataset.slide04aDecayMonth;
      const threshold = thresholdRaw ? Number(thresholdRaw) : Infinity;
      const decayed = month >= threshold;
      const status = row.dataset.slide04aDecayStatus || "Bounced";
      const index = Number(row.dataset.slide04aContactIndex || 0);
      const name = row.querySelector(".slide04a-contact-row__name");
      const badge = row.querySelector(".slide04a-contact-row__badge");
      const wasDecayed = previousDecayedByIndex.get(index) === true;

      row.classList.toggle("is-decayed", decayed);
      name?.classList.toggle("slide04a-contact-row__name--strike", decayed);
      if (badge) {
        badge.textContent = decayed ? status : "Active";
        badge.classList.remove(
          "slide04a-contact-row__badge--red",
          "slide04a-contact-row__badge--gray",
          "slide04a-contact-row__badge--lime"
        );
        badge.classList.add(
          decayed
            ? status === "Outdated"
              ? "slide04a-contact-row__badge--gray"
              : "slide04a-contact-row__badge--red"
            : "slide04a-contact-row__badge--lime"
        );
      }

      return { row, decayed, index, wasDecayed };
    });

    const newlyDecayedRows = rowsWithState.filter(({ decayed, wasDecayed }) => decayed && !wasDecayed);

    rowsWithState.forEach(({ row, decayed, index }) => {
      if (!decayed) {
        pendingSortUntilByIndex.delete(index);
      }

      if (!forceSort && newlyDecayedRows.length === 1 && newlyDecayedRows[0].index === index) {
        pendingSortUntilByIndex.set(index, now + justDecayedHoldMs);
      }

      if (newlyDecayedRows.length > 1) {
        pendingSortUntilByIndex.delete(index);
      }

      previousDecayedByIndex.set(index, decayed);

      const isPendingSort = decayed && (pendingSortUntilByIndex.get(index) || 0) > now;
      row.classList.toggle("is-just-decayed", isPendingSort);
    });

    const hasPendingSort = rowsWithState.some(({ index }) => (pendingSortUntilByIndex.get(index) || 0) > now);
    const rowsForDisplay = hasPendingSort
      ? Array.from(contacts.querySelectorAll("[data-slide04a-contact]")).map((row) => ({
        row,
        index: Number(row.dataset.slide04aContactIndex || 0),
      }))
      : rowsWithState.sort((a, b) => Number(a.decayed) - Number(b.decayed) || a.index - b.index);

    const order = rowsForDisplay.map(({ row }) => row.dataset.slide04aContactIndex).join("|");
    if (order !== lastContactOrder) {
      const scrollbar = contacts.querySelector(".slide04a-demo__scrollbar");
      rowsForDisplay.forEach(({ row }) => contacts.insertBefore(row, scrollbar));
      lastContactOrder = order;
    }

    schedulePendingSort();
  }

  function updateDemo(month, { forceSort = false } = {}) {
    currentMonth = clamp(month, 0, maxMonth);
    const progress = currentMonth / maxMonth;
    const color = getSlide04AInterpolatedColor(progress);
    const decayPercent = maxDecay * progress;
    const visibleMonth = Math.min(maxMonth, Math.floor(currentMonth + 0.0001));

    demo.style.setProperty("--slide04a-decay-progress", `${(progress * 100).toFixed(3)}%`);
    demo.style.setProperty("--slide04a-decay-color", color);
    scoreNumber.textContent = decayPercent.toFixed(1);
    scorePercent.style.color = color;
    monthLabel.textContent = `Month ${visibleMonth} of 12`;
    range.value = currentMonth.toFixed(2);
    range.setAttribute("aria-valuetext", `Month ${visibleMonth} of 12, ${decayPercent.toFixed(1)}% of contacts decayed`);
    syncContacts(currentMonth, { forceSort });
    followDecayedBoundary();
  }

  function resetContactScroll() {
    pendingSortUntilByIndex.clear();
    clearPendingSortTimer();
    contacts.scrollTop = 0;
    lastAutoFollowTop = null;
  }

  function followDecayedBoundary() {
    if (!isPlaying || !autoFollowContacts) return;
    const decayedRow = contacts.querySelector(".slide04a-contact-row.is-decayed");
    if (!decayedRow) {
      resetContactScroll();
      return;
    }

    const nextScrollTop = Math.max(
      0,
      decayedRow.offsetTop + decayedRow.offsetHeight - contacts.clientHeight + 16
    );

    if (Math.abs(nextScrollTop - (lastAutoFollowTop ?? -1)) < 1) return;
    contacts.scrollTo({ top: nextScrollTop, behavior: "smooth" });
    lastAutoFollowTop = nextScrollTop;
  }

  function handleContactScrollIntent() {
    autoFollowContacts = false;
  }

  function stopAnimation() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (delayId !== null) {
      clearTimeout(delayId);
      delayId = null;
    }
    isPlaying = false;
    setSlide04APlayState(playButton, false);
  }

  function playFromCurrent() {
    stopAnimation();
    if (currentMonth >= maxMonth) {
      updateDemo(slide04aInitialMonth, { forceSort: true });
      resetContactScroll();
      autoFollowContacts = true;
    }

    isPlaying = true;
    setSlide04APlayState(playButton, true);

    const startMonth = currentMonth;
    const remainingDuration = duration * ((maxMonth - startMonth) / maxMonth);
    let startTime = null;

    function tick(timestamp) {
      if (!isPlaying) return;
      if (startTime === null) startTime = timestamp;

      const progress = remainingDuration === 0
        ? 1
        : clamp((timestamp - startTime) / remainingDuration, 0, 1);
      updateDemo(startMonth + (maxMonth - startMonth) * progress);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      rafId = null;
      isPlaying = false;
      updateDemo(maxMonth, { forceSort: true });
      setSlide04APlayState(playButton, false);
    }

    rafId = requestAnimationFrame(tick);
  }

  function queueInitialAutoplay() {
    if (state.slide04aDemoAutoplayed || reducedMotion || delayId !== null) return;
    delayId = setTimeout(() => {
      delayId = null;
      if (state.slide04aDemoAutoplayed) return;
      state.slide04aDemoAutoplayed = true;
      playFromCurrent();
    }, 650);
  }

  function handleRangeInput() {
    state.slide04aDemoAutoplayed = true;
    stopAnimation();
    updateDemo(Number(range.value));
  }

  function handleRangeIntent() {
    state.slide04aDemoAutoplayed = true;
    stopAnimation();
  }

  function handlePlayClick() {
    state.slide04aDemoAutoplayed = true;
    if (isPlaying) {
      stopAnimation();
      return;
    }
    playFromCurrent();
  }

  function handleResetClick() {
    state.slide04aDemoAutoplayed = true;
    stopAnimation();
    updateDemo(slide04aInitialMonth, { forceSort: true });
    resetContactScroll();
    autoFollowContacts = true;
    playFromCurrent();
  }

  contacts.addEventListener("wheel", handleContactScrollIntent, { passive: true });
  contacts.addEventListener("pointerdown", handleContactScrollIntent);
  contacts.addEventListener("touchstart", handleContactScrollIntent, { passive: true });
  contacts.addEventListener("keydown", handleContactScrollIntent);
  range.addEventListener("pointerdown", handleRangeIntent);
  range.addEventListener("keydown", handleRangeIntent);
  range.addEventListener("input", handleRangeInput);
  playButton.addEventListener("click", handlePlayClick);
  resetButton.addEventListener("click", handleResetClick);

  updateDemo(slide04aInitialMonth, { forceSort: true });
  resetContactScroll();
  setSlide04APlayState(playButton, false);

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver((entries) => {
      const isVisible = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.35);
      if (isVisible) queueInitialAutoplay();
    }, { threshold: [0.35] });
    observer.observe(demo);
  } else {
    requestAnimationFrame(queueInitialAutoplay);
  }

  slide04aDemoCleanup = () => {
    stopAnimation();
    clearPendingSortTimer();
    observer?.disconnect();
    contacts.removeEventListener("wheel", handleContactScrollIntent);
    contacts.removeEventListener("pointerdown", handleContactScrollIntent);
    contacts.removeEventListener("touchstart", handleContactScrollIntent);
    contacts.removeEventListener("keydown", handleContactScrollIntent);
    range.removeEventListener("pointerdown", handleRangeIntent);
    range.removeEventListener("keydown", handleRangeIntent);
    range.removeEventListener("input", handleRangeInput);
    playButton.removeEventListener("click", handlePlayClick);
    resetButton.removeEventListener("click", handleResetClick);
  };
}

function renderCoverSlide({ includeFooter = true, slideIndex = 0 } = {}) {
  return `
    <section class="slide cover-page" aria-label="Cover slide" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="cover-background" aria-hidden="true">
        <video class="cover-background__media" autoplay muted loop playsinline preload="auto">
          <source src="video/01.mp4" type="video/mp4" />
        </video>
        <div class="cover-background__overlay"></div>
        <div class="cover-background__noise"></div>
      </div>
      <div class="cover-layout">
        <div class="hero-grid">
          <div>
            <div class="brand-row">
              <svg class="logo" width="131" height="30" viewBox="0 0 131 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Martal Group" role="img">
                <path d="M1.99568 0C2.14273 0.105036 2.3318 0.0840288 2.49986 0.126043C3.52921 0.37813 4.26446 0.987338 4.72662 1.93266C5.06274 2.58389 5.39885 3.23511 5.75597 3.88633C6.32317 4.93669 6.86935 6.00806 7.43655 7.05842C8.33986 8.78101 9.26418 10.5036 10.1675 12.2262C10.1885 12.2472 10.1885 12.2682 10.2095 12.2892C10.2935 12.3942 10.3355 12.3942 10.3986 12.2892C10.5876 11.9531 10.7557 11.617 10.9237 11.3019C11.8481 9.57928 12.7724 7.85669 13.6967 6.11309C14.474 4.6636 15.2302 3.23511 16.0075 1.78561C16.3856 1.09237 16.9108 0.567194 17.6671 0.294101C18.3393 0.0630216 19.0115 0.0210072 19.7048 0.189065C19.8518 0.231079 19.9778 0.294101 20.1039 0.399137C20.1879 0.483166 20.2509 0.588202 20.2509 0.735252C20.2509 0.819281 20.2509 0.903309 20.2509 0.987338C20.2509 6.80633 20.2509 12.6043 20.2509 18.4233C20.2509 19.0325 20.0409 19.2636 19.4317 19.3686C19.0745 19.4317 18.6964 19.4317 18.3393 19.3476C17.8981 19.2636 17.604 18.9905 17.604 18.4863C17.604 13.9278 17.604 9.3482 17.604 4.78964C17.604 4.68461 17.625 4.55856 17.583 4.45353C17.478 4.45353 17.478 4.53755 17.457 4.57957C16.7427 5.86101 16.0495 7.14245 15.3563 8.42389C14.7891 9.47425 14.2009 10.5246 13.6127 11.575C13.1505 12.4153 12.6883 13.2555 12.2472 14.0748C11.9741 14.579 11.722 15.0832 11.4279 15.5663C10.8187 16.5747 9.47425 16.5957 8.86504 15.6083C8.57094 15.1252 8.31885 14.6 8.06676 14.1168C7.45756 12.9614 6.84835 11.806 6.23914 10.6507C5.29381 8.86504 4.3695 7.10043 3.42417 5.31482C3.25612 4.97871 3.06705 4.64259 2.89899 4.32748C2.87799 4.28547 2.85698 4.22245 2.79396 4.22245C2.70993 4.26446 2.75194 4.32748 2.75194 4.3695C2.75194 4.53755 2.75194 4.70561 2.75194 4.87367C2.75194 9.36921 2.75194 13.8437 2.75194 18.3393C2.75194 18.4023 2.75194 18.4863 2.75194 18.5494C2.77295 19.0115 2.58389 19.2216 2.10072 19.3476C1.65957 19.4737 1.19741 19.4527 0.756259 19.3476C0.52518 19.2846 0.294101 19.1796 0.168058 18.9485C0.0840288 18.9065 0.0630216 18.8645 0 18.8645C0 12.7724 0 6.68029 0 0.588202C0.0420144 0.588202 0.0840288 0.588202 0.105036 0.52518C0.189065 0.315108 0.37813 0.210072 0.588202 0.126043C0.693238 0.0630216 0.840288 0.105036 0.945324 0C1.30245 0 1.63856 0 1.99568 0Z" fill="white"/>
                <path d="M130.979 24.7254C130.958 24.7674 130.937 24.8094 130.937 24.8514C130.79 25.5027 130.328 25.8598 129.74 26.1119C129.277 26.3009 128.794 26.385 128.269 26.364C127.954 26.364 127.618 26.364 127.303 26.364C127.072 26.364 127.051 26.385 127.051 26.616C127.051 27.4143 127.051 28.2126 127.051 29.0109C127.051 29.0529 127.051 29.1159 127.051 29.1579C127.051 29.389 127.051 29.389 126.82 29.389C126.693 29.389 126.567 29.389 126.462 29.389C126.315 29.389 126.273 29.326 126.273 29.1999C126.273 29.1579 126.273 29.0949 126.273 29.0529C126.273 26.9522 126.273 24.8724 126.273 22.7717C126.273 22.7297 126.273 22.6667 126.273 22.6247C126.273 22.4356 126.294 22.4146 126.462 22.4146C127.261 22.4146 128.08 22.3936 128.878 22.4356C129.382 22.4566 129.866 22.6037 130.286 22.8978C130.643 23.1499 130.895 23.486 130.958 23.9271C130.958 23.9691 130.979 24.0112 131 24.0532C130.979 24.2842 130.979 24.5153 130.979 24.7254ZM127.051 24.3683C127.051 24.7674 127.051 25.1665 127.051 25.5657C127.051 25.7548 127.072 25.7758 127.261 25.7758C127.618 25.7758 127.996 25.7968 128.353 25.7548C128.647 25.7337 128.962 25.6917 129.256 25.6077C129.782 25.4186 130.118 25.0825 130.181 24.5153C130.223 24.0112 130.013 23.3809 129.361 23.1289C129.109 23.0238 128.857 22.9818 128.605 22.9818C128.185 22.9608 127.744 22.9608 127.324 22.9818C127.072 22.9818 127.051 23.0028 127.051 23.2549C127.051 23.633 127.051 24.0112 127.051 24.3683Z" fill="white"/>
                <path d="M57.2036 10.3775C57.2666 10.4826 57.3717 10.5246 57.4767 10.5876C58.1909 11.0498 58.7581 11.638 59.1363 12.4152C59.3673 12.9194 59.4934 13.4656 59.4934 14.0118C59.4934 15.6083 59.4934 17.2049 59.4934 18.8224C59.4934 19.1796 59.3463 19.3476 59.0102 19.4316C58.6321 19.5367 58.2329 19.5157 57.8338 19.5157C57.6447 19.5157 57.4767 19.4737 57.2876 19.4316C56.9305 19.3476 56.7835 19.1375 56.7835 18.7594C56.7835 17.3309 56.7624 15.8814 56.7835 14.4529C56.7835 13.9278 56.6154 13.4866 56.3633 13.0455C55.8171 12.0791 54.9558 11.617 53.8845 11.4279C53.4013 11.3439 52.9181 11.3439 52.414 11.3439C50.8384 11.3439 49.2629 11.3439 47.6873 11.3439C47.3302 11.3439 47.3302 11.3439 47.3302 11.701C47.3302 14.0538 47.3302 16.4066 47.3302 18.7594C47.3302 19.2006 47.1832 19.3896 46.763 19.4947C46.2168 19.6207 45.6706 19.6207 45.1245 19.4947C44.9984 19.4737 44.8934 19.4316 44.7883 19.3476C44.6623 19.2636 44.5783 19.1375 44.5573 18.9905C44.5573 18.8855 44.5363 18.7594 44.5363 18.6544C44.5363 12.5833 44.5363 6.51222 44.5363 0.441142C44.5363 0.0420048 44.5363 0.0840192 44.8934 0.0840192C47.4142 0.0840192 49.9561 0.0840192 52.477 0.0840192C53.4433 0.0840192 54.4096 0.147041 55.355 0.336106C56.3843 0.546178 57.3296 0.924307 58.1279 1.63855C58.9262 2.3528 59.4514 3.2351 59.6824 4.28546C59.9555 5.60891 59.8715 6.89035 59.3463 8.15078C58.9472 9.09611 58.254 9.76834 57.3717 10.2935C57.3086 10.2935 57.2456 10.3145 57.2036 10.3775ZM47.3512 5.69294C47.3512 6.7433 47.3512 7.79366 47.3512 8.84402C47.3512 9.09611 47.3512 9.11712 47.6243 9.11712C49.3259 9.11712 51.0275 9.13812 52.7501 9.09611C53.6324 9.0751 54.4937 8.90704 55.2919 8.50791C56.0482 8.15078 56.5734 7.58359 56.8255 6.76431C56.9725 6.32316 56.9725 5.88201 56.9725 5.44085C56.9515 4.13841 56.0692 2.83596 54.6407 2.45783C53.9895 2.28977 53.3173 2.26877 52.666 2.26877C51.0275 2.26877 49.3679 2.26877 47.7293 2.26877C47.6873 2.26877 47.6243 2.26877 47.5823 2.26877C47.4142 2.28978 47.3932 2.28978 47.3932 2.47884C47.3932 2.54186 47.3932 2.62589 47.3932 2.68891C47.3512 3.69726 47.3512 4.7056 47.3512 5.69294Z" fill="white"/>
                <path d="M86.6348 0.126086C87.013 0.126086 87.3701 0.168101 87.7272 0.273137C88.0843 0.378173 88.3364 0.609252 88.5045 0.966374C89.1767 2.45789 89.8699 3.9494 90.5422 5.4199C91.3825 7.22652 92.2017 9.03314 93.042 10.8608C93.8613 12.6464 94.6806 14.453 95.5209 16.2386C95.899 17.0579 96.2771 17.8982 96.6553 18.7175C96.6763 18.7595 96.6973 18.8015 96.7183 18.8435C96.7813 19.0326 96.7603 19.0956 96.5923 19.1796C96.3822 19.2847 96.1511 19.3267 95.92 19.3687C95.4159 19.4527 94.9117 19.4527 94.4075 19.3687C94.2184 19.3267 94.0504 19.2636 93.8823 19.1796C93.7143 19.0956 93.6092 18.9695 93.5252 18.8015C93.2311 18.1503 92.958 17.499 92.6639 16.8688C92.1807 15.7975 91.6976 14.7261 91.2354 13.6547C90.7943 12.6674 90.3531 11.659 89.891 10.6717C89.4288 9.64235 88.9666 8.59199 88.5045 7.56263C88.0633 6.5963 87.6432 5.62997 87.202 4.66364C87.097 4.43256 86.992 4.20148 86.8869 3.9704C86.8659 3.90738 86.8449 3.80235 86.7399 3.80235C86.6558 3.80235 86.6558 3.90738 86.6348 3.9704C86.4458 4.41155 86.2357 4.85271 86.0466 5.29386C85.5845 6.34422 85.1223 7.39458 84.6602 8.44494C84.114 9.70537 83.5468 10.9658 83.0006 12.2472C82.4334 13.5497 81.8662 14.8311 81.299 16.1336C80.9419 16.9529 80.5638 17.7721 80.2276 18.6124C80.0596 19.0536 79.7445 19.2636 79.3033 19.3477C78.7571 19.4317 78.211 19.4527 77.6648 19.3477C77.5597 19.3267 77.4547 19.3057 77.3707 19.2426C77.1606 19.1376 77.0976 19.0326 77.2026 18.8015C77.3497 18.4234 77.5177 18.0662 77.6648 17.6881C78.1059 16.6377 78.5681 15.6084 79.0092 14.558C79.7025 12.9405 80.4167 11.3229 81.1099 9.68436C81.5721 8.613 82.0343 7.54163 82.4754 6.47026C83.0846 5.06278 83.6938 3.63429 84.303 2.22681C84.4921 1.80666 84.6602 1.38652 84.8492 0.966374C84.9963 0.609252 85.2694 0.378173 85.6475 0.252129C85.9416 0.147093 86.2987 0.105079 86.6348 0.126086Z" fill="white"/>
                <path d="M32.2244 3.76028C32.0983 3.8023 32.0983 3.88633 32.0563 3.94935C31.2791 5.71395 30.5228 7.47856 29.7455 9.24316C29.0523 10.8397 28.338 12.4363 27.6448 14.0118C27.0356 15.3983 26.4264 16.7847 25.8172 18.1712C25.7331 18.3813 25.6281 18.5704 25.5441 18.7804C25.4601 18.9905 25.313 19.1165 25.1029 19.2006C24.9139 19.2846 24.7248 19.3266 24.5147 19.3476C24.0106 19.4106 23.5064 19.4317 23.0022 19.3056C22.519 19.2006 22.456 19.0535 22.6451 18.6124C23.0442 17.7091 23.4224 16.8058 23.8005 15.9235C24.2626 14.8731 24.7038 13.8227 25.166 12.7724C25.6281 11.722 26.0693 10.6506 26.5314 9.60029C27.0776 8.33985 27.6238 7.07942 28.17 5.81899C28.6321 4.74762 29.0943 3.67626 29.5565 2.60489C29.7875 2.0587 30.0186 1.53352 30.2497 0.987334C30.3967 0.651219 30.6278 0.420139 30.9639 0.315103C31.7412 0.0630171 32.5185 0.0630171 33.2747 0.336111C33.5478 0.420139 33.7369 0.609204 33.8629 0.861291C34.115 1.42849 34.3881 1.99568 34.6612 2.58388C35.2074 3.78129 35.7536 4.9787 36.2998 6.17611C36.909 7.47856 37.4972 8.80201 38.1064 10.1045C38.7996 11.596 39.4719 13.0665 40.1651 14.558C40.8163 15.9655 41.4675 17.394 42.1188 18.8014C42.2238 19.0325 42.2028 19.1165 41.9717 19.2006C41.7826 19.2846 41.5936 19.3266 41.3835 19.3686C40.8583 19.4527 40.3332 19.4737 39.808 19.3686C39.3878 19.2846 39.0517 19.0955 38.8626 18.6544C38.1904 17.0999 37.4972 15.5663 36.8039 14.0328C36.2788 12.8354 35.7326 11.638 35.2074 10.4406C34.5562 8.99108 33.9049 7.52057 33.2327 6.07108C32.9386 5.39885 32.6235 4.70561 32.3294 4.03338C32.3084 3.92834 32.2664 3.86532 32.2244 3.76028Z" fill="white"/>
                <path d="M69.1338 10.6926C69.1338 8.02467 69.1338 5.37776 69.1338 2.70985C69.1338 2.24769 69.1338 2.2897 68.7347 2.2897C67.0961 2.2897 65.4576 2.2897 63.819 2.2897C63.3148 2.2897 63.0417 2.12164 62.9577 1.53344C62.9157 1.26035 62.9367 0.966249 62.9787 0.693155C62.9997 0.567112 63.0417 0.462076 63.1048 0.35704C63.2098 0.188982 63.3569 0.0839462 63.5669 0.0839462C63.6299 0.0839462 63.714 0.0839462 63.777 0.0839462C68.2935 0.0839462 72.8101 0.0839462 77.3266 0.0839462C77.7888 0.0839462 77.9359 0.209989 78.0409 0.672148C78.1039 1.00826 78.1039 1.34438 78.0619 1.65949C78.0199 2.10064 77.8518 2.31071 77.3477 2.31071C75.6671 2.31071 74.0075 2.31071 72.3269 2.31071C71.8858 2.31071 71.9278 2.2897 71.9278 2.73085C71.9278 8.00366 71.9278 13.2765 71.9278 18.5703C71.9278 18.6543 71.9278 18.7383 71.9278 18.8224C71.9278 19.0534 71.8228 19.2005 71.6127 19.2845C71.4236 19.3686 71.2346 19.4106 71.0245 19.4106C70.6043 19.4526 70.1842 19.4526 69.764 19.3896C69.659 19.3686 69.575 19.3475 69.491 19.3055C69.1758 19.1795 69.1128 19.0955 69.1128 18.7593C69.1338 16.0704 69.1338 13.3815 69.1338 10.6926Z" fill="white"/>
                <path d="M99.2587 9.93628C99.2587 6.99527 99.2587 4.05426 99.2587 1.11325C99.2587 0.672102 99.4478 0.420016 99.8049 0.251958C100.288 0.0418861 100.792 -0.00012828 101.296 0.104908C101.801 0.209944 102.053 0.46203 102.053 1.07124C102.032 4.68448 102.053 8.29772 102.053 11.911C102.053 13.4445 102.053 14.978 102.053 16.5115C102.053 16.5956 102.053 16.6586 102.053 16.7426C102.053 16.8687 102.116 16.9107 102.242 16.9107C102.326 16.9107 102.389 16.9107 102.473 16.9107C105.498 16.9107 108.502 16.9107 111.527 16.9107C112.199 16.9107 112.556 17.2258 112.598 17.919C112.619 18.1921 112.619 18.4442 112.493 18.6963C112.367 18.9694 112.136 19.0954 111.842 19.1374C111.695 19.1584 111.569 19.1584 111.422 19.1584C107.494 19.1584 103.544 19.1584 99.6159 19.1584C99.1957 19.1584 99.2587 19.1794 99.2587 18.7803C99.2587 15.8183 99.2587 12.8773 99.2587 9.93628Z" fill="white"/>
                <path d="M112.452 22.3097C113.145 22.3097 113.755 22.4147 114.343 22.6668C114.994 22.9609 115.477 23.4231 115.792 24.0323C116.38 25.1457 116.38 26.3221 115.939 27.4775C115.582 28.3808 114.91 28.99 113.965 29.2841C113.25 29.4942 112.515 29.5572 111.759 29.4522C111.423 29.4101 111.108 29.3261 110.793 29.2211C109.889 28.864 109.259 28.2337 108.944 27.3094C108.608 26.3641 108.608 25.4188 108.944 24.4524C109.154 23.8432 109.532 23.3391 110.057 22.9609C110.729 22.5198 111.57 22.2887 112.452 22.3097ZM115.456 25.923C115.435 25.4398 115.372 24.9566 115.162 24.5155C114.826 23.8222 114.322 23.297 113.565 23.045C113.082 22.8769 112.578 22.8349 112.074 22.8979C110.982 23.045 110.225 23.6122 109.805 24.5995C109.448 25.4398 109.448 26.3221 109.784 27.1834C110.099 28.0237 110.708 28.5699 111.549 28.843C112.074 28.99 112.62 29.032 113.166 28.906C113.923 28.7589 114.532 28.3808 114.952 27.7086C115.288 27.1624 115.435 26.5742 115.456 25.923Z" fill="white"/>
                <path d="M100.057 27.4144C100.057 27.8766 100.057 28.3598 100.057 28.8219C100.057 29.095 100.057 29.116 99.805 29.179C99.3429 29.3261 98.9017 29.4101 98.4186 29.4521C97.9984 29.4942 97.5783 29.5152 97.1581 29.5152C96.3388 29.4732 95.5406 29.3261 94.8263 28.927C93.7339 28.2967 93.1668 27.3514 93.1247 26.091C93.1037 25.4608 93.1878 24.8306 93.5029 24.2634C93.902 23.5281 94.5112 23.0029 95.2885 22.6878C96.2548 22.2887 97.2422 22.2677 98.2505 22.3517C98.5866 22.3727 98.9227 22.4147 99.2588 22.4988C99.763 22.6248 99.7 22.6038 99.616 23.108C99.595 23.192 99.5529 23.213 99.4899 23.192C99.3639 23.15 99.2168 23.108 99.0908 23.066C98.0824 22.8139 97.0741 22.7719 96.0657 23.066C94.9524 23.4021 94.1541 24.1793 93.944 25.4188C93.839 26.133 93.923 26.8052 94.2801 27.4144C94.5322 27.8976 94.9314 28.2547 95.4145 28.5068C96.2338 28.927 97.1161 29.011 98.0194 28.927C98.3555 28.906 98.6916 28.8639 99.0278 28.7799C99.2588 28.7169 99.2799 28.6959 99.2799 28.4648C99.2799 27.7926 99.2799 27.1203 99.2799 26.4481C99.2799 26.217 99.2588 26.196 99.0488 26.196C98.5446 26.196 98.0404 26.196 97.5363 26.196C97.3052 26.196 97.3052 26.196 97.3052 25.9649C97.3052 25.9229 97.3052 25.8599 97.3052 25.8179C97.3052 25.7129 97.3682 25.6498 97.4732 25.6498C97.5783 25.6498 97.6623 25.6498 97.7673 25.6498C98.4606 25.6498 99.1538 25.6498 99.847 25.6498C100.099 25.6498 100.099 25.6498 100.099 25.9229C100.057 26.4061 100.057 26.9103 100.057 27.4144Z" fill="white"/>
                <path d="M105.225 25.8179C105.288 25.944 105.372 25.944 105.435 25.965C105.603 26.007 105.75 26.112 105.855 26.2591C106.002 26.4271 106.107 26.6162 106.212 26.8053C106.632 27.5615 107.052 28.3388 107.451 29.116C107.493 29.2001 107.556 29.2841 107.556 29.4101C107.304 29.4732 107.052 29.4312 106.779 29.4312C106.674 29.4312 106.653 29.3261 106.611 29.2421C106.359 28.7799 106.128 28.2968 105.876 27.8346C105.687 27.4985 105.519 27.1624 105.33 26.8263C105.078 26.3851 104.678 26.154 104.174 26.154C103.88 26.154 103.586 26.154 103.292 26.154C103.103 26.154 103.082 26.175 103.082 26.3641C103.082 26.7632 103.082 27.1414 103.082 27.5405C103.082 28.1077 103.082 28.6539 103.082 29.2211C103.082 29.4312 103.082 29.4312 102.872 29.4522C102.767 29.4522 102.683 29.4522 102.578 29.4522C102.305 29.4522 102.305 29.4522 102.305 29.1581C102.305 27.2254 102.305 25.2927 102.305 23.3601C102.305 23.129 102.305 22.8979 102.305 22.6878C102.305 22.4988 102.326 22.4988 102.494 22.4988C103.313 22.4988 104.132 22.4778 104.951 22.5198C105.456 22.5408 105.96 22.6668 106.38 22.9819C106.674 23.213 106.884 23.4861 106.926 23.8642C107.031 24.6205 106.926 25.1457 106.086 25.6078C105.834 25.6709 105.561 25.7759 105.225 25.8179ZM103.082 24.2424C103.082 24.5995 103.082 24.9566 103.082 25.3137C103.082 25.4818 103.103 25.5238 103.271 25.5238C103.775 25.5238 104.258 25.5448 104.762 25.4608C105.099 25.3978 105.414 25.2927 105.687 25.1037C106.065 24.8306 106.233 24.4735 106.17 24.0113C106.107 23.5491 105.855 23.255 105.414 23.108C105.288 23.066 105.162 23.045 105.036 23.024C104.468 22.9399 103.901 22.9609 103.334 22.9609C103.124 22.9609 103.103 22.9819 103.103 23.213C103.082 23.5701 103.082 23.9063 103.082 24.2424Z" fill="white"/>
                <path d="M124.151 25.1665C124.13 25.7757 124.193 26.553 124.13 27.3092C124.088 28.0025 123.752 28.5487 123.206 28.9268C122.786 29.2209 122.282 29.389 121.778 29.473C121.463 29.515 121.147 29.557 120.832 29.536C120.139 29.473 119.446 29.3469 118.858 28.9058C118.374 28.5487 118.08 28.0865 117.996 27.4773C117.975 27.2882 117.954 27.1202 117.954 26.9311C117.954 25.5446 117.954 24.1582 117.954 22.7927C117.954 22.7507 117.954 22.6877 117.954 22.6457C117.954 22.4566 117.975 22.4356 118.164 22.4356C118.816 22.4356 118.732 22.3515 118.732 22.9818C118.732 24.2212 118.732 25.4396 118.732 26.679C118.732 26.9731 118.732 27.2672 118.816 27.5403C119.005 28.1705 119.404 28.6117 120.013 28.8218C120.685 29.0528 121.358 29.0528 122.051 28.8218C122.786 28.5697 123.29 27.9185 123.311 27.1412C123.332 26.2379 123.311 25.3136 123.311 24.4103C123.311 23.8431 123.311 23.2549 123.311 22.6877C123.311 22.4566 123.311 22.4566 123.542 22.4566C123.689 22.4566 123.836 22.4566 123.983 22.4566C124.067 22.4566 124.109 22.4986 124.109 22.5826C124.109 22.6667 124.109 22.7297 124.109 22.8137C124.151 23.528 124.151 24.2842 124.151 25.1665Z" fill="white"/>
              </svg>
            </div>

            <div class="report-label">01 · B2B Data · Industry Report · 2026</div>
            <h1 class="headline">
              <span class="headline__line">Why you have <span class="accent-lime">more</span></span>
              <span class="headline__line"><span class="accent-lime">data</span> than ever</span>
              <span class="headline__line">And <span class="accent-red">less pipeline</span></span>
              <span class="headline__line">to show for it</span>
            </h1>
            <div class="lead-ornament" aria-hidden="true">
              <svg width="609" height="7" viewBox="0 0 609 7" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false">
                <path d="M0 0.500001L163 0.499993L170 6.2966L175.778 0.499992L609 0.500636" stroke="url(#paint0_linear_7_2)"/>
                <defs>
                  <linearGradient id="paint0_linear_7_2" x1="5.49999" y1="6.29536" x2="457" y2="-49.5008" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80B122" stop-opacity="0"/>
                    <stop offset="0.148572" stop-color="#80B122"/>
                    <stop offset="1" stop-color="#80B122" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="subtitle">
              <p class="subtitle__main">An analysis of 25 leading B2B database and enrichment platforms, and why the data most teams buy isn't built to convert.</p>
              <p class="subtitle__meta">Martal Group · 2026 · Separating data access from data execution.</p>
            </div>
            <button class="cta" id="beginStory">
              <span>Begin the story</span>
              <img class="cta__icon" src="${ICON_PATHS.ctaStart}" alt="" />
            </button>
          </div>

          <aside class="matrix-card" aria-label="Market matrix">
            <div class="matrix-card__title">Market matrix • 25 vendors</div>
            <div class="matrix-chart">
              <div class="matrix-stage">
                <div class="matrix-axis matrix-axis--depth">
                  <span class="matrix-axis__depth-low">Low</span>
                  <span class="matrix-axis__depth-line matrix-axis__depth-line--bottom"></span>
                  <span class="matrix-axis__depth-text">Execution Depth</span>
                  <span class="matrix-axis__depth-line matrix-axis__depth-line--top"></span>
                  <span class="matrix-axis__depth-high">High</span>
                </div>
                <div class="matrix-plot">
                  <div class="matrix-grid">
                    <div class="matrix-axis matrix-axis--split"></div>
                    <div class="matrix-axis matrix-axis--split matrix-axis--split-horizontal"></div>
                    ${createMatrixPoints()}
                  </div>
                </div>
              </div>
              <div class="matrix-axis matrix-axis--x-labels">
                <span class="muted">Low</span>
                <span class="matrix-axis__presence-line matrix-axis__presence-line--left"></span>
                <span class="strong">Presence</span>
                <span class="matrix-axis__presence-line matrix-axis__presence-line--right"></span>
                <span class="strong">High</span>
              </div>
            </div>
            <div class="matrix-legend">
              <div class="matrix-legend__item matrix-legend__item--emerging">
                <div class="matrix-legend__dot" style="background:#c92af7"></div>
                <div class="matrix-legend__title">Emerging Tools</div>
                <div class="matrix-legend__text">Early traction, building execution</div>
              </div>
              <div class="matrix-legend__item matrix-legend__item--popular">
                <div class="matrix-legend__dot" style="background:#0090FF"></div>
                <div class="matrix-legend__title">Popular Contenders</div>
                <div class="matrix-legend__text">High visibility, uneven execution</div>
              </div>
              <div class="matrix-legend__item matrix-legend__item--specialists">
                <div class="matrix-legend__dot" style="background:#FBBF24"></div>
                <div class="matrix-legend__title">Execution Specialists</div>
                <div class="matrix-legend__text">Niche focus, excellent execution</div>
              </div>
              <div class="matrix-legend__item matrix-legend__item--power">
                <div class="matrix-legend__dot" style="background:#8db654"></div>
                <div class="matrix-legend__title">Power Players</div>
                <div class="matrix-legend__text">Strong presence, strong execution</div>
              </div>
            </div>
          </aside>
        </div>

        <div class="stats-grid">
          <article class="stat-card">
            <p class="stat-card__number">01</p>
            <p class="stat-card__text">Access is no longer the differentiator. The teams pulling ahead continuously enrich, qualify, and <strong>activate data</strong> across channels.</p>
          </article>
          <div class="stat-divider" aria-hidden="true"></div>
          <article class="stat-card">
            <p class="stat-card__number">02</p>
            <p class="stat-card__text">We analyzed 25 platforms across pricing, feature depth, customer satisfaction, and execution depth - <span class="negative">not brand recognition</span>.</p>
          </article>
          <div class="stat-divider" aria-hidden="true"></div>
          <article class="stat-card">
            <p class="stat-card__number">03</p>
            <p class="stat-card__text">Most platforms <span class="negative">stop at access</span>. Only one spans the full journey from verified data to agentic AI optimization natively.</p>
          </article>
          <div class="stat-divider" aria-hidden="true"></div>
          <article class="stat-card">
            <p class="stat-card__number">04</p>
            <p class="stat-card__text"><span class="negative">The gap is widening.</span> Three forces - agentic AI, the end of generic outreach, and stack collapse - are separating winners from the rest.</p>
          </article>
        </div>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

const slide04bMetricLabels = [
  "Buyer effort",
  "Platform lift",
  "Speed to pipeline",
  "Internal headcount",
];

const slide04bTierCards = [
  {
    tone: "teal",
    tier: "Tier 01",
    title: "Database",
    description: "Contact lists, raw records",
    footer: "Team builds everything internally",
    metrics: [5, 1, 1, 5],
  },
  {
    tone: "amber",
    tier: "Tier 02",
    title: "Enrichment",
    description: "AI-verified records",
    footer: "Buyer owns List building and execution",
    metrics: [4, 2, 2, 4],
  },
  {
    tone: "fuchsia",
    tier: "Tier 03",
    title: "Automation",
    description: "Sequencing & basic outreach",
    footer: "Tools automate; you manage and optimize",
    metrics: [3, 3, 3, 3],
  },
  {
    tone: "sky",
    tier: "Tier 04",
    title: "Orchestration",
    description: "Omnichannel GTM workflows",
    footer: "Platform coordinates; you configure",
    metrics: [2, 4, 4, 2],
  },
  {
    tone: "lime",
    tier: "Tier 05",
    title: "Agentic AI",
    description: "AI-driven, low human input",
    footer: "Buyer owns goal setting. AI owns execution",
    metrics: [1, 5, 5, 1],
  },
];

const slide04bComparisonRows = [
  {
    tone: "access",
    icon: slide04bInfoIcon,
    arrowWidth: 84,
    label: "ACCESS",
    copy: "You have a database. You have contacts. You can export a list.",
  },
  {
    tone: "execution",
    icon: slide04bCheckIcon,
    arrowWidth: 52,
    label: "EXECUTION",
    copy: "Continuously verified, enriched, sequenced, personalized, and optimized in real time. Outcomes—not exports—are delivered.",
  },
];

function renderSlide04BArrow(width, tone) {
  return renderMartalInlineArrow("martal-inline-arrow slide04b-definition-row__inline-arrow");
}

function renderSlide04BComparisonRow(row) {
  return `
    <div class="slide04b-definition-row slide04b-definition-row--${row.tone}">
      <div class="slide04b-definition-row__identity">
        <div class="slide04b-definition-row__icon slide04b-definition-row__icon--${row.tone}" aria-hidden="true">
          <img src="${row.icon}" alt="" />
        </div>
        <p class="slide04b-definition-row__label">${escapeHtml(row.label)}</p>
      </div>
      <div class="slide04b-definition-row__arrow slide04b-definition-row__arrow--${row.tone}" aria-hidden="true">
        ${renderSlide04BArrow(row.arrowWidth, row.tone)}
      </div>
      <p class="slide04b-definition-row__copy">${escapeHtml(row.copy)}</p>
    </div>
  `;
}

function renderSlide04BTierCard(card) {
  const metricItems = slide04bMetricLabels.map((label, index) => {
    const metricValue = clamp(card.metrics?.[index] ?? 5, 1, 5);
    return `
    <div class="slide04b-tier-card__metric">
      <p class="slide04b-tier-card__metric-label">${escapeHtml(label)}</p>
      <div class="slide04b-tier-card__metric-bar" aria-hidden="true">
        <span class="slide04b-tier-card__metric-bar-fill" style="width: ${metricValue * 20}%;"></span>
      </div>
    </div>
  `;
  }).join("");

  return `
    <article class="slide04b-tier-card slide04b-tier-card--${card.tone}">
      <div class="slide04b-tier-card__meta">
        <p class="slide04b-tier-card__tier">${escapeHtml(card.tier)}</p>
        <p class="slide04b-tier-card__title">${escapeHtml(card.title)}</p>
        <p class="slide04b-tier-card__desc">${escapeHtml(card.description)}</p>
      </div>
      <div class="slide04b-tier-card__metrics">
        ${metricItems}
      </div>
      <p class="slide04b-tier-card__footer">${escapeHtml(card.footer)}</p>
    </article>
  `;
}

function renderSlide04B({ includeFooter = true, slideIndex = 4 } = {}) {
  return `
    <section class="slide slide--light slide--04b" aria-label="04 · B The Execution Gap" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide04b-layout">
        <div class="slide04b-heading">
          <div class="slide04b-heading__title">
            <div class="report-label report-label--light slide04b-heading__eyebrow">04 · B The Execution Gap</div>
            <h1 class="slide04b-headline" aria-label="Execution closes both ends. Here's how">
              <span class="slide04b-headline__line">Execution closes <span class="slide04b-headline__accent">both ends</span>.</span>
              <span class="slide04b-headline__line">Here&apos;s how</span>
            </h1>
          </div>
          <p class="slide04b-heading__intro">Execution closes both gaps — qualifying for relevance going in, re-verifying against decay coming out. Below: five modes, ordered by how much of that work the platform actually owns.</p>
        </div>

        <div class="slide04b-content">
          <section class="slide04b-section" aria-label="Access vs. Execution, defined.">
            <h2 class="slide04b-section__title">Access vs. Execution, defined.</h2>
            <div class="slide04b-definition-list">
              ${slide04bComparisonRows.map(renderSlide04BComparisonRow).join("")}
            </div>
          </section>

          <section class="slide04b-section" aria-label="The GTM Execution Spectrum">
            <h2 class="slide04b-section__title">The GTM Execution Spectrum</h2>
            <div class="slide04b-tier-grid">
              ${slide04bTierCards.map(renderSlide04BTierCard).join("")}
            </div>
          </section>

          <section class="slide04b-callout" aria-label="Key takeaway">
            <div class="slide04b-callout__icon" aria-hidden="true">
              <img src="${slide04bCalloutIcon}" alt="" />
            </div>
            <p class="slide04b-callout__text">Where does your current stack actually stop? Every column to the left of where you stop is work your team absorbs, or pipeline you don't convert.</p>
            <p class="slide04b-callout__text slide04b-callout__text--accent">If the data model is broken on both ends, the question becomes which vendors actually fixed it, and which ones are still selling the old playbook.</p>
          </section>
        </div>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

const slide05MethodologyRows = [
  {
    label: "X-Axis (Overall Score):",
    text: "Relative market performance based on combined customer ratings from G2, Capterra, and Clutch.",
  },
  {
    label: "Y-Axis (Execution Depth):",
    text: "How much of the outbound journey each platform covers natively. A score of 1 = raw data access only. A score of 5 = full coverage across data, enrichment, AI qualification, omnichannel execution, and continuous optimization, with human support available as an add-on.",
  },
];

const slide05MatrixLegendItems = [
  {
    tone: "emerging",
    icon: ICON_PATHS.dotPurple,
    title: "Emerging tools",
    text: "Early traction, building execution",
  },
  {
    tone: "popular",
    icon: ICON_PATHS.dotYellow,
    title: "Popular contenders",
    text: "High visibility, uneven execution",
  },
  {
    tone: "specialists",
    icon: ICON_PATHS.dotBlue,
    title: "Execution specialists",
    text: "Niche focus, excellent execution",
  },
  {
    tone: "power",
    icon: ICON_PATHS.dotGreen,
    title: "Power Players",
    text: "Strong presence, strong execution",
  },
];

const slide05QuadrantCards = [
  {
    tone: "amber",
    iconTone: "amber",
    icon: ICON_PATHS.quadrantPopular,
    title: "Popular Contenders",
    subtitle: "High score, lower execution depth",
    body: "Popular and widely used, but require significant internal resources to execute campaigns effectively. Examples: SalesIntel, D&B Hoovers, Lusha",
  },
  {
    tone: "lime",
    iconTone: "lime",
    icon: ICON_PATHS.quadrantPower,
    title: "Power Players",
    subtitle: "High score + high execution depth",
    body: "Widely adopted and best fit for organizations seeking both data breadth and operational execution. Examples: Martal Group, Clay, UpLead",
  },
  {
    tone: "fuchsia",
    iconTone: "fuchsia",
    icon: ICON_PATHS.quadrantEmerging,
    title: "Emerging Tools",
    subtitle: "Lower score, lower execution depth",
    body: "Vendors scoring low on both axes—strong point solutions, but require additional tools for a complete outbound stack (e.g., ZoomInfo, Unify, Persana).",
  },
  {
    tone: "sky",
    iconTone: "sky",
    icon: ICON_PATHS.quadrantSpecialists,
    title: "Execution Specialists",
    subtitle: "High execution depth, lower recognition",
    body: "Very capable but under-recognized. High leverage for teams that find them. Examples: Apollo, Cognism, LeadIQ",
  },
];

const slide05Takeaways = [
  {
    index: "01",
    title: "Execution depth separates the market",
    stats: [
      {
        tone: "accent",
        value: "1",
        meta: "of 25 vendors",
        text: "full execution depth across all layers",
      },
      {
        tone: "neutral",
        value: "17",
        meta: "of 25 vendors",
        text: "data access only, no outreach layer",
      },
    ],
    copy: "Martal Group ranks highest in execution depth — the only Power Player that closes both gaps within a single platform. From agentic AI that continuously optimizes timing and messaging to fully managed execution for teams that want human support, it covers the full spectrum.",
    chips: [
      { tone: "power", label: "Power player" },
    ],
  },
  {
    index: "02",
    title: "Adoption leaders require internal resources",
    stats: [
      {
        tone: "accent",
        value: "4",
        meta: "of 25 vendors",
        text: "full execution depth across all layers",
      },
      {
        tone: "neutral",
        value: "3",
        meta: "of 25 vendors",
        text: "data access only, no outreach layer",
      },
    ],
    copy: "Apollo, Cognism, LeadIQ, and Amplemarket offer strong execution capability relative to their recognition. Unify and Persana are earlier-stage entrants. ZoomInfo is the category's largest player, but trails on customer satisfaction here, reflecting feedback around pricing, contracts, and adaptability to AI workflows. All still require significant buyer configuration to run campaigns.",
    chips: [
      { tone: "specialists", label: "Execution specialists" },
      { tone: "emerging", label: "Emerging tools" },
    ],
  },
  {
    index: "03",
    title: "Low-friction entry drives adoption",
    stats: [
      {
        tone: "accent",
        value: "10",
        meta: "of 25 vendors",
        text: "full execution depth across all layers",
      },
      {
        tone: "neutral",
        value: "0",
        meta: "of 25 vendors",
        text: "data access only, no outreach layer",
      },
    ],
    copy: "Free plans and credit models drive review volume and broad recognition for Power Players like Clay and Popular Contenders alike. But entry-tier adoption doesn't predict scale. Execution depth, data quality, and deliverability are where performance is actually decided.",
    chips: [
      { tone: "power", label: "Power player" },
      { tone: "popular", label: "Popular contenders" },
    ],
  },
  {
    index: "04",
    title: "Consolidation wins on total cost",
    stats: [
      {
        tone: "accent",
        value: "1",
        meta: "of 25 vendors",
        text: "full execution depth across all layers",
      },
      {
        tone: "neutral",
        value: "24",
        meta: "of 25 vendors",
        text: "data access only, no outreach layer",
      },
    ],
    copy: "Credit-based and enterprise models serve different segments, but neither eliminates execution gaps on their own. Platforms that consolidate the full stack reduce tooling complexity and total cost of ownership across every quadrant.",
    chips: [
      { tone: "power", label: "Power player" },
      { tone: "specialists", label: "Execution specialists" },
      { tone: "popular", label: "Popular contenders" },
      { tone: "emerging", label: "Emerging tools" },
    ],
  },
];

function slide05ScalePosition(value, invert = false) {
  const normalized = clamp((value - 1) / 4, 0, 1);
  const scaled = invert ? (1 - normalized) : normalized;
  return 4 + (scaled * 92);
}

function renderSlide05Icon(src = ICON_PATHS.insight) {
  return renderIconImage("slide05-icon", src);
}

function renderSlide05MethodologyChevron() {
  return `
    <svg class="slide05-methodology__chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function renderSlide05MatrixDots() {
  return matrixPlotData.map((vendor, index) => {
    const xValue = Number(vendor.x ?? vendor.overallScore);
    const yValue = Number(vendor.y ?? vendor.executionDepth);
    const vendorName = vendor.vendor || vendor.name;
    const category = getMatrixCategory(xValue, yValue, vendorName);
    const color = getMatrixQuadrantColor(xValue, yValue, vendorName);
    const left = slide05ScalePosition(xValue);
    const top = slide05ScalePosition(yValue, true);
    const isMartal = index === 0;

    return `
      <span
        class="slide05-matrix__point-wrap"
        tabindex="0"
        aria-label="${escapeHtml(vendorName)}"
        style="left:${left}%;top:${top}%"
      >
        <span
          class="slide05-matrix__point slide05-matrix__point--${category}"
          aria-hidden="true"
          style="background:${color};${isMartal ? "box-shadow:inset 0 0 0 1px rgba(255,255,255,0.92), 0 0 0 5px rgba(141,182,84,0.14), 0 0 22px rgba(141,182,84,0.14);" : ""}"
        ></span>
        <span class="slide05-matrix__bubble" aria-hidden="true">${escapeHtml(vendorName)}</span>
      </span>
    `;
  }).join("");
}

function renderSlide05MatrixLegendItem(item) {
  return `
    <div class="slide05-matrix__legend-item slide05-matrix__legend-item--${item.tone}">
      ${renderIconImage("slide05-matrix__legend-dot", item.icon)}
      <div class="slide05-matrix__legend-copy">
        <p class="slide05-matrix__legend-title">${escapeHtml(item.title)}</p>
        <p class="slide05-matrix__legend-text">${escapeHtml(item.text)}</p>
      </div>
    </div>
  `;
}

function renderSlide05QuadrantCard(card) {
  return `
    <article class="slide05-quadrant-card slide05-quadrant-card--${card.tone}">
      <div class="slide05-quadrant-card__header">
        <div class="slide05-quadrant-card__icon" aria-hidden="true">
          ${renderSlide05Icon(card.icon)}
        </div>
        <div class="slide05-quadrant-card__heading">
          <p class="slide05-quadrant-card__title">${escapeHtml(card.title)}</p>
          <p class="slide05-quadrant-card__subtitle">${escapeHtml(card.subtitle)}</p>
        </div>
      </div>
      <p class="slide05-quadrant-card__body">${escapeHtml(card.body)}</p>
    </article>
  `;
}

function renderSlide05StatCard(stat) {
  return `
    <article class="slide05-stat-card slide05-stat-card--${stat.tone}">
      <div class="slide05-stat-card__value">${escapeHtml(stat.value)}</div>
      <div class="slide05-stat-card__copy">
        <p class="slide05-stat-card__meta">${escapeHtml(stat.meta)}</p>
        <p class="slide05-stat-card__text">${escapeHtml(stat.text)}</p>
      </div>
    </article>
  `;
}

function renderSlide05Chip(chip) {
  return `
    <span class="slide05-chip slide05-chip--${chip.tone}">${escapeHtml(chip.label)}</span>
  `;
}

function renderSlide05Takeaway(row) {
  return `
    <article class="slide05-takeaway">
      <div class="slide05-takeaway__header">
        <p class="slide05-takeaway__index">${escapeHtml(row.index)}</p>
        <h3 class="slide05-takeaway__title">${escapeHtml(row.title)}</h3>
      </div>
      <div class="slide05-takeaway__content">
        <div class="slide05-takeaway__stats">
          ${row.stats.map(renderSlide05StatCard).join("")}
        </div>
        <p class="slide05-takeaway__copy">${escapeHtml(row.copy)}</p>
      </div>
      <div class="slide05-takeaway__chips">
        ${row.chips.map(renderSlide05Chip).join("")}
      </div>
    </article>
  `;
}

function renderSlide05({ includeFooter = true, slideIndex = 5 } = {}) {
  return `
    <section class="slide slide--light slide--05" aria-label="05 · The Market Matrix" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide05-layout">
        <div class="slide05-heading">
          <div class="slide05-heading__title">
            <div class="report-label report-label--light slide05-heading__eyebrow">05 · The Market Matrix</div>
            <h1 class="slide05-headline" aria-label="25 vendors. Four quadrants. One clear gap.">
              <span class="slide05-headline__line slide05-headline__line--muted">25 Vendors. Four Quadrants.</span>
              <span class="slide05-headline__line"><span class="slide05-headline__accent">One Clear Gap</span></span>
            </h1>
          </div>
          <p class="slide05-heading__intro">Database size and brand recognition tell you who has access. Neither tells you who has execution. This matrix plots the 25 leading platforms on what does: customer ratings on one axis, execution depth on the other — how far each platform actually goes before handing the work back to you.</p>
        </div>

        <details class="slide05-methodology">
          <summary class="slide05-methodology__summary">
            <span class="slide05-methodology__summary-copy">
              ${renderSlide05MethodologyChevron()}
              <span>Methodology</span>
            </span>
          </summary>
          <div class="slide05-methodology__body">
            ${slide05MethodologyRows.map((row) => `
              <p class="slide05-methodology__paragraph">
                <strong>${escapeHtml(row.label)}</strong> ${escapeHtml(row.text)}
              </p>
            `).join("")}
          </div>
        </details>

        <section class="slide05-matrix" aria-label="Market matrix chart">
          <div class="slide05-matrix__header">Market matrix • 25 vendors</div>
          <div class="slide05-matrix__chart">
            <div class="slide05-matrix__stage">
              <div class="slide05-matrix__depth-axis" aria-hidden="true">
                <span class="slide05-matrix__depth-value slide05-matrix__depth-value--high">High</span>
                <span class="slide05-matrix__depth-line slide05-matrix__depth-line--top"></span>
                <span class="slide05-matrix__depth-label">Execution Depth</span>
                <span class="slide05-matrix__depth-line slide05-matrix__depth-line--bottom"></span>
                <span class="slide05-matrix__depth-value slide05-matrix__depth-value--low">Low</span>
              </div>
              <div class="slide05-matrix__plot">
                <span class="slide05-matrix__crosshair slide05-matrix__crosshair--vertical" aria-hidden="true"></span>
                <span class="slide05-matrix__crosshair slide05-matrix__crosshair--horizontal" aria-hidden="true"></span>
                <div class="slide05-matrix__points">
                  ${renderSlide05MatrixDots()}
                </div>
              </div>
            </div>
            <div class="slide05-matrix__x-axis" aria-hidden="true">
              <span class="slide05-matrix__x-axis-label slide05-matrix__x-axis-label--muted">Low</span>
              <span class="slide05-matrix__x-axis-line slide05-matrix__x-axis-line--left"></span>
              <span class="slide05-matrix__x-axis-label">Presence</span>
              <span class="slide05-matrix__x-axis-line slide05-matrix__x-axis-line--right"></span>
              <span class="slide05-matrix__x-axis-label slide05-matrix__x-axis-label--strong">High</span>
            </div>
          </div>
          <div class="slide05-matrix__legend">
            ${slide05MatrixLegendItems.map(renderSlide05MatrixLegendItem).join("")}
          </div>
        </section>

        <section class="slide05-quadrants" aria-label="Quadrant explanations">
          <div class="slide05-quadrants__grid">
            ${slide05QuadrantCards.map(renderSlide05QuadrantCard).join("")}
          </div>
        </section>

        <div class="slide05-section-divider" aria-hidden="true"></div>

        <section class="slide05-takeaways" aria-label="Strategic Takeaways from the Matrix">
          <h2 class="slide05-takeaways__title"><span class="slide05-takeaways__title-accent">Strategic</span> Takeaways from the <span class="slide05-takeaways__title-accent">Matrix</span></h2>
          <p class="slide05-takeaways__intro">What the data across 25 vendors actually tells you about where the market stands and where execution gaps remain.</p>
          <div class="slide05-takeaways__list">
            ${slide05Takeaways.map(renderSlide05Takeaway).join("")}
          </div>
        </section>

        <section class="slide05-callout" aria-label="Key takeaway">
          <div class="slide05-callout__icon" aria-hidden="true">
            ${renderSlide05Icon(ICON_PATHS.insight)}
          </div>
          <div class="slide05-callout__body">
            <p class="slide05-callout__text">The matrix shows where vendors land. The next question is how they got there, what each one actually covers, capability by capability.</p>
          </div>
        </section>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

const slide06CapabilityColumns = [
  { key: "data", label: "Data", icon: "chart-left", rotation: "-90" },
  { key: "enrichment", label: "Enrichment", icon: "chart-right", rotation: "90" },
  { key: "deliverability", label: "Deliverability" },
  { key: "automation", label: "Automation" },
  { key: "orchestration", label: "GTM Orchestration" },
  { key: "agentic", label: "Agentic AI" },
  { key: "managed", label: "Fully Managed" },
];

const slide06CapabilityRows = [
  { vendor: "Martal Group", featured: true, states: ["full", "full", "full", "full", "full", "full", "full"] },
  { vendor: "Clay", states: ["none", "full", "none", "none", "partial", "none", "none"] },
  { vendor: "Apollo.io", states: ["full", "full", "partial", "full", "full", "none", "none"] },
  { vendor: "ZoomInfo", states: ["full", "full", "none", "full", "full", "none", "none"] },
  { vendor: "Cognism", states: ["full", "full", "none", "none", "none", "none", "none"] },
  { vendor: "Amplemarket", states: ["full", "full", "partial", "full", "full", "none", "none"] },
  { vendor: "Unify GTM", states: ["full", "full", "none", "full", "full", "none", "none"] },
  { vendor: "LeadIQ", states: ["full", "full", "none", "full", "none", "none", "none"] },
  { vendor: "Seamless.AI", states: ["full", "full", "none", "none", "none", "none", "none"] },
  { vendor: "SalesIntel", states: ["full", "full", "none", "none", "none", "none", "none"] },
  { vendor: "UpLead", states: ["full", "full", "none", "none", "none", "none", "none"] },
  { vendor: "Clearbit", states: ["none", "full", "none", "none", "partial", "none", "none"] },
  { vendor: "Lusha", states: ["full", "full", "none", "none", "none", "none", "none"] },
  { vendor: "Hunter.io", states: ["partial", "partial", "none", "none", "none", "none", "none"] },
  { vendor: "Persana AI", states: ["full", "full", "none", "partial", "partial", "none", "none"] },
  { vendor: "Lead411", states: ["full", "full", "none", "partial", "partial", "none", "none"] },
  { vendor: "FullEnrich", states: ["none", "full", "none", "none", "none", "none", "none"] },
  { vendor: "Floqer", states: ["none", "full", "none", "none", "partial", "none", "none"] },
  { vendor: "Kaspr", states: ["full", "full", "none", "none", "none", "none", "none"] },
  { vendor: "D&B Hoovers", states: ["full", "full", "none", "none", "none", "none", "none"] },
  { vendor: "Datanyze", states: ["full", "partial", "none", "none", "none", "none", "none"] },
  { vendor: "Exa Websets", states: ["none", "full", "none", "none", "none", "none", "none"] },
  { vendor: "Airscale", states: ["none", "full", "none", "none", "none", "none", "none"] },
  { vendor: "Freckle.io", states: ["none", "full", "none", "none", "partial", "none", "none"] },
  { vendor: "AnyMailFinder", states: ["none", "partial", "none", "none", "none", "none", "none"] },
];

const slide06SortableColumnKeys = new Set(["data", "enrichment"]);
const slide06CapabilityRank = {
  none: 0,
  partial: 1,
  full: 2,
};

const slide06LegendItems = [
  { tone: "full", label: "Feature fully available / core to vendor" },
  { tone: "partial", label: "Partial or supporting feature" },
  { tone: "none", label: "Not offered natively" },
];

const slide06InsightRows = [
  {
    index: "01",
    title: "Data and enrichment are table stakes",
    chip: { tone: "muted", label: "Table stakes" },
    stats: [
      { tone: "accent", value: "15", meta: "of 25 vendors", text: "offer both data and enrichment natively" },
      { tone: "neutral", value: "8", meta: "of 25 vendors", text: "specialize in enrichment only, no sourcing" },
    ],
    copy: "The base layer of this market is crowded. Vendors like Clay, Clearbit, and FullEnrich specialize in enrichment only, requiring sales teams to source contacts separately and adding tooling complexity before outreach can even begin.",
  },
  {
    index: "02",
    title: "Deliverability is the missing layer",
    chip: { tone: "power", label: "Critical gap" },
    stats: [
      { tone: "accent", value: "1", meta: "of 25 vendors", text: "offers fully native deliverability" },
      { tone: "neutral", value: "2", meta: "of 25 vendors", text: "provide partial coverage; the rest offer none" },
    ],
    copy: "Only Martal Group offers fully native deliverability. Apollo and Amplemarket provide partial coverage. Every other vendor leaves inbox placement, domain management, and warm-up entirely to the buyer.",
  },
  {
    index: "03",
    title: "Outreach automation is selective",
    chip: { tone: "power", label: "Platform vs. point tool" },
    stats: [
      { tone: "accent", value: "6", meta: "of 25 vendors", text: "provide native outreach and sequencing" },
      { tone: "neutral", value: "19", meta: "of 25 vendors", text: "require a separate platform to execute" },
    ],
    copy: "A subset of vendors, including Martal Group, Apollo.io, ZoomInfo, Amplemarket, Unify GTM, and LeadIQ, provide native outreach and sequencing. The remaining vendors require a separate platform to execute campaigns effectively.",
  },
  {
    index: "04",
    title: "Orchestration separates platforms from point solutions",
    chip: { tone: "power", label: "Platform tier" },
    stats: [
      { tone: "accent", value: "5", meta: "of 25 vendors", text: "connect data, signals, and outreach as one workflow" },
      { tone: "neutral", value: "20", meta: "of 25 vendors", text: "stop at data access; no orchestration" },
    ],
    copy: "A smaller tier, including Martal Group, Apollo.io, ZoomInfo, Amplemarket, and Unify GTM, connects data, signals, and outreach into a coordinated workflow. The majority stop at data access.",
  },
  {
    index: "05",
    title: "Full stack remains a single vendor",
    chip: { tone: "power", label: "Power player" },
    featured: true,
    stat: {
      value: "1",
      meta: "of 25 vendors",
      text: "covers all capabilities natively",
      textHtml: "covers all capabilities<br>natively",
    },
    copyHtml:
      "<strong>Martal Group</strong> is the only vendor offering all seven capabilities natively, closing the gap between data access and campaign execution without additional tools. Every other vendor in this report requires at least one supporting tool to run campaigns end-to-end.",
  },
];

const slide06GraphRows = [
  {
    label: "Data coverage",
    full: 15,
    partial: 2,
    none: 8,
    description: "Native access to prospect data plus enrichment within the same platform. The base layer of this market is crowded. 15 of 25 vendors cover data and enrichment natively, while 8 of 25 still stop at data access only and offer no outreach layer. The remaining 2 vendors provide partial coverage. Vendors like Clay, Clearbit, and FullEnrich specialize in enrichment only, requiring sales teams to source contacts separately and adding tooling complexity before outreach can even begin.",
  },
  {
    label: "Email deliverability",
    full: 1,
    partial: 2,
    none: 22,
    description: "Built-in support for getting outreach into inboxes, including domain setup, warm-up, and inbox placement. Deliverability is the clearest gap in the market. Only 1 of 25 vendors offers it fully natively. 2 vendors provide partial coverage — Apollo and Amplemarket — while the remaining 22 leave inbox placement, domain management, and warm-up entirely to the buyer.",
  },
  {
    label: "Outreach automation",
    full: 6,
    partial: 0,
    none: 19,
    description: "Native ability to run and sequence outbound campaigns without a separate outreach tool. Only a subset of the market provides native outreach and sequencing. 6 of 25 vendors — including Martal Group, Apollo.io, ZoomInfo, Amplemarket, Unify GTM, and LeadIQ — offer outreach automation natively. The remaining 19 vendors require a separate platform to execute campaigns effectively.",
  },
  {
    label: "GTM orchestration",
    full: 5,
    partial: 0,
    none: 20,
    description: "A coordinated workflow that connects data, signals, and outreach in one system. Orchestration is where true platforms begin to separate from point solutions. Only 5 of 25 vendors — Martal Group, Apollo.io, ZoomInfo, Amplemarket, and Unify GTM — connect data, signals, and outreach into a coordinated workflow. The remaining 20 vendors stop at data access and leave orchestration to the buyer.",
  },
  {
    label: "Full-stack coverage",
    full: 1,
    partial: 24,
    none: 0,
    tone: "stack",
    description: "Native coverage of the full journey from data access to campaign execution, without additional tools. Only 1 of 25 vendors covers all seven capabilities natively. Martal Group is the only vendor that closes the gap between data access and campaign execution without additional tools. The remaining 24 vendors each require at least one supporting tool to run campaigns end-to-end.",
  },
];

function renderSlide06HeaderGlyph(orientation = "right") {
  return renderIconImage("slide03-table__sort-icon slide06-table__header-sort-icon", ICON_PATHS.sort);
}

function renderSlide06ModeIcon(kind) {
  if (kind === "table") {
    return renderIconImage("slide06-mode-toggle__icon", ICON_PATHS.tableToggle);
  }

  return renderIconImage("slide06-mode-toggle__icon", ICON_PATHS.graphToggle);
}

function renderSlide06State(status) {
  if (status === "full") {
    return renderIconImage("slide06-state slide06-state--full", ICON_PATHS.featureFull);
  }

  if (status === "partial") {
    return renderIconImage("slide06-state slide06-state--partial", ICON_PATHS.featurePartial);
  }

  return renderIconImage("slide06-state slide06-state--none", ICON_PATHS.featureNone);
}

function renderSlide06TableRow(row) {
  return `
    <tr class="slide06-table__row ${row.featured ? "slide06-table__row--featured" : ""}">
      <th class="slide06-table__vendor" scope="row">${escapeHtml(row.vendor)}</th>
      ${row.states.map((state) => `
        <td class="slide06-table__cell slide06-table__cell--${state}" title="${escapeHtml(state === "full" ? "Feature fully available / core to vendor" : state === "partial" ? "Partial or supporting feature" : "Not offered natively")}">
          ${renderSlide06State(state)}
        </td>
      `).join("")}
    </tr>
  `;
}

function getSlide06ColumnIndex(key) {
  return slide06CapabilityColumns.findIndex((column) => column.key === key);
}

function sortSlide06CapabilityRows(rows, sortState = state.slide06TableSort) {
  if (!sortState?.key || !slide06SortableColumnKeys.has(sortState.key)) return rows;

  const columnIndex = getSlide06ColumnIndex(sortState.key);
  if (columnIndex < 0) return rows;

  const direction = sortState.direction === "desc" ? -1 : 1;
  const [pinnedRows, sortableRows] = rows.reduce((groups, row, index) => {
    const item = { row, index };
    if (row.vendor === "Martal Group") {
      groups[0].push(item);
    } else {
      groups[1].push(item);
    }
    return groups;
  }, [[], []]);

  const sortedRows = sortableRows
    .sort((a, b) => {
      const aRank = slide06CapabilityRank[a.row.states[columnIndex]] ?? 0;
      const bRank = slide06CapabilityRank[b.row.states[columnIndex]] ?? 0;
      if (aRank !== bRank) return (aRank - bRank) * direction;
      return a.index - b.index;
    });

  return [...pinnedRows, ...sortedRows].map(({ row }) => row);
}

function renderSlide06TableSortButton(column, sortState = state.slide06TableSort) {
  const isActive = sortState?.key === column.key;
  const direction = isActive ? sortState.direction : "asc";
  const spokenDirection = direction === "asc" ? "ascending" : "descending";
  const ariaLabel = isActive ? `Sort by ${column.label} ${spokenDirection}` : `Sort by ${column.label}`;

  return `
    <button class="slide06-table__sort-button ${isActive ? `is-${direction}` : "is-idle"}" data-slide06-sort="${column.key}" type="button" aria-label="${escapeHtml(ariaLabel)}" aria-pressed="${isActive ? "true" : "false"}">
      <span>${escapeHtml(column.label)}</span>
      ${renderSlide06HeaderGlyph(column.rotation === "-90" ? "left" : "right")}
    </button>
  `;
}

function renderSlide06TableHeader(sortState = state.slide06TableSort) {
  return `
    <tr>
      <th class="slide06-table__header slide06-table__header--vendor">Vendor</th>
      ${slide06CapabilityColumns.map((column) => {
        const isSortable = slide06SortableColumnKeys.has(column.key);
        const isActive = sortState?.key === column.key;
        const ariaSort = !isSortable || !isActive
          ? ""
          : ` aria-sort="${sortState.direction === "desc" ? "descending" : "ascending"}"`;

        return `
          <th class="slide06-table__header slide06-table__header--capability"${ariaSort}>
            ${isSortable ? renderSlide06TableSortButton(column, sortState) : `<span>${escapeHtml(column.label)}</span>`}
          </th>
        `;
      }).join("")}
    </tr>
  `;
}

function renderSlide06TableBodyRows(sortState = state.slide06TableSort) {
  return sortSlide06CapabilityRows(slide06CapabilityRows, sortState).map(renderSlide06TableRow).join("");
}

function updateSlide06TableSort(table = document.querySelector(".slide--06 .slide06-table")) {
  if (!table) return;
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  if (thead) thead.innerHTML = renderSlide06TableHeader();
  if (tbody) tbody.innerHTML = renderSlide06TableBodyRows();
}

function getSlide06GraphWidths(row) {
  const total = 25;
  const fullPercent = (row.full / total) * 100;
  const fullFloorPercent = row.full > 0 ? 7.5 + ((row.full - 1) * 2.25) : 0;
  const fullVisualPercent = Math.max(fullPercent, fullFloorPercent);
  const fullMinimumPx = row.full > 0 ? 54 + (row.full * 12) : 0;
  const fullWidth = row.full > 0 ? `max(${fullMinimumPx}px, ${fullVisualPercent.toFixed(2)}%)` : "0%";
  const partialVisualPercent = Math.max((row.partial / total) * 100, row.partial > 0 ? 14 : 14);
  const partialCap = row.none === 0 ? 88 : 100;
  const partialLayerWidth = Math.min(partialCap, fullVisualPercent + partialVisualPercent);

  return {
    full: fullWidth,
    partial: `${partialLayerWidth.toFixed(2)}%`,
  };
}

function renderSlide06GraphCount(value, suffix, delay) {
  return `<span class="slide06-graph-bar__label"><span class="slide06-graph-bar__value" data-slide06-count-target="${value}" data-slide06-count-delay="${delay}" style="--slide06-count-digits: ${String(value).length};">${escapeHtml(String(value))}</span> ${escapeHtml(suffix)}</span>`;
}

function renderSlide06GraphRow(row, index = 0) {
  const widths = getSlide06GraphWidths(row);
  const toneClass = row.tone === "stack" ? " slide06-graph-row--stack" : "";
  const countDelay = index * 110;

  return `
    <article class="slide06-graph-row${toneClass}" style="--slide06-full-width: ${widths.full}; --slide06-partial-width: ${widths.partial}; --slide06-row-delay: ${countDelay}ms;">
      <div class="slide06-graph-row__top">
        <p class="slide06-graph-row__label">${escapeHtml(row.label)}</p>
        <div class="slide06-graph-bar" aria-label="${escapeHtml(`${row.label}: ${row.full} Full, ${row.partial} Partial, ${row.none} None`)}">
          <span class="slide06-graph-bar__segment slide06-graph-bar__segment--none">${renderSlide06GraphCount(row.none, "None", countDelay + 240)}</span>
          <span class="slide06-graph-bar__segment slide06-graph-bar__segment--partial">${renderSlide06GraphCount(row.partial, "Partial", countDelay + 120)}</span>
          <span class="slide06-graph-bar__segment slide06-graph-bar__segment--full">${renderSlide06GraphCount(row.full, "Full", countDelay)}</span>
        </div>
      </div>
      <p class="slide06-graph-row__description">${escapeHtml(row.description)}</p>
    </article>
  `;
}

function renderSlide06GraphView() {
  return `
    <div class="slide06-graph-card">
      ${slide06GraphRows.map(renderSlide06GraphRow).join("")}
    </div>
  `;
}

const slide06GraphAnimations = new WeakMap();

function clearSlide06GraphAnimation(graphView) {
  if (!graphView) return;
  const animation = slide06GraphAnimations.get(graphView);
  if (!animation) return;
  if (animation.startRaf) cancelAnimationFrame(animation.startRaf);
  if (animation.countRaf) cancelAnimationFrame(animation.countRaf);
  if (animation.finishTimer) window.clearTimeout(animation.finishTimer);
  slide06GraphAnimations.delete(graphView);
}

function setSlide06GraphLabelProgress(graphView, progressByLabel) {
  graphView.querySelectorAll("[data-slide06-count-target]").forEach((label) => {
    const target = Number(label.dataset.slide06CountTarget || 0);
    const progress = typeof progressByLabel === "function" ? progressByLabel(label) : progressByLabel;
    label.textContent = String(Math.round(target * clamp(progress, 0, 1)));
  });
}

function prepareSlide06GraphAnimation(graphView) {
  if (!graphView) return false;
  clearSlide06GraphAnimation(graphView);
  graphView.classList.remove("is-animating", "is-animation-complete");

  if (prefersReducedMotion()) {
    graphView.classList.remove("is-preparing");
    setSlide06GraphLabelProgress(graphView, 1);
    graphView.classList.add("is-animation-complete");
    return false;
  }

  setSlide06GraphLabelProgress(graphView, 0);
  graphView.classList.add("is-preparing");
  return true;
}

function playSlide06GraphAnimation(graphView) {
  if (!graphView || prefersReducedMotion()) {
    if (graphView) setSlide06GraphLabelProgress(graphView, 1);
    return;
  }

  const animation = {};
  animation.startRaf = requestAnimationFrame(() => {
    const startedAt = performance.now();
    const countDuration = 900;

    graphView.classList.add("is-animating");

    const tick = (now) => {
      setSlide06GraphLabelProgress(graphView, (label) => {
        const delay = Number(label.dataset.slide06CountDelay || 0);
        const elapsed = now - startedAt - delay;
        const progress = clamp(elapsed / countDuration, 0, 1);
        return 1 - Math.pow(1 - progress, 3);
      });

      if (now - startedAt < countDuration + 680) {
        animation.countRaf = requestAnimationFrame(tick);
        return;
      }

      setSlide06GraphLabelProgress(graphView, 1);
    };

    animation.countRaf = requestAnimationFrame(tick);
    animation.finishTimer = window.setTimeout(() => {
      setSlide06GraphLabelProgress(graphView, 1);
      graphView.classList.remove("is-preparing", "is-animating");
      graphView.classList.add("is-animation-complete");
      slide06GraphAnimations.delete(graphView);
    }, 1800);
  });

  slide06GraphAnimations.set(graphView, animation);
}

function renderSlide06MetricCard(stat) {
  return `
    <article class="slide06-metric-card slide06-metric-card--${stat.tone}">
      <div class="slide06-metric-card__value">${escapeHtml(stat.value)}</div>
      <div class="slide06-metric-card__copy">
        <p class="slide06-metric-card__meta">${escapeHtml(stat.meta)}</p>
        <p class="slide06-metric-card__text">${escapeHtml(stat.text)}</p>
      </div>
    </article>
  `;
}

function renderSlide06Chip(chip) {
  return `<span class="slide06-chip slide06-chip--${chip.tone}">${escapeHtml(chip.label)}</span>`;
}

function renderSlide06Insight(row) {
  if (row.featured) {
    return `
      <article class="slide06-insight slide06-insight--featured">
        <div class="slide06-insight__header">
          <p class="slide06-insight__index">${escapeHtml(row.index)}</p>
          <h3 class="slide06-insight__title">${escapeHtml(row.title)}</h3>
        </div>
        <div class="slide06-insight__featured-card">
          <div class="slide06-insight__featured">
            <div class="slide06-insight__featured-stat">
              <div class="slide06-metric-card__value">${escapeHtml(row.stat.value)}</div>
              <div class="slide06-insight__featured-stat-copy">
                <p class="slide06-metric-card__meta">${escapeHtml(row.stat.meta)}</p>
                <p class="slide06-metric-card__text">${row.stat.textHtml ?? escapeHtml(row.stat.text)}</p>
              </div>
            </div>
            <div class="slide06-insight__arrow" aria-hidden="true">
              ${renderSlide06InsightArrow()}
            </div>
            <p class="slide06-insight__featured-copy">${row.copyHtml ?? escapeHtml(row.copy)}</p>
          </div>
        </div>
        <div class="slide06-insight__chips">${renderSlide06Chip(row.chip)}</div>
      </article>
    `;
  }

  return `
    <article class="slide06-insight">
      <div class="slide06-insight__header">
        <p class="slide06-insight__index">${escapeHtml(row.index)}</p>
        <h3 class="slide06-insight__title">${escapeHtml(row.title)}</h3>
      </div>
      <div class="slide06-insight__content">
        <div class="slide06-insight__stats">
          ${row.stats.map(renderSlide06MetricCard).join("")}
        </div>
        <p class="slide06-insight__copy">${escapeHtml(row.copy)}</p>
      </div>
      <div class="slide06-insight__chips">${renderSlide06Chip(row.chip)}</div>
    </article>
  `;
}

function renderSlide06Arrow(width = 53) {
  return `
    <svg class="slide06-arrow" width="${width}" height="7.36396" viewBox="0 0 53 7.36396" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M0.5 3.18198H0V4.18198H0.5V3.68198V3.18198ZM52.8536 4.03553C53.0488 3.84027 53.0488 3.52369 52.8536 3.32843L49.6716 0.146447C49.4763 -0.0488155 49.1597 -0.0488155 48.9645 0.146447C48.7692 0.341709 48.7692 0.658291 48.9645 0.853554L51.7929 3.68198L48.9645 6.51041C48.7692 6.70567 48.7692 7.02225 48.9645 7.21751C49.1597 7.41278 49.4763 7.41278 49.6716 7.21751L52.8536 4.03553ZM0.5 3.68198V4.18198H52.5V3.68198V3.18198H0.5V3.68198Z" fill="#8DB654"></path>
    </svg>
  `;
}

function renderSlide06InsightArrow() {
  return renderMartalInlineArrow("martal-inline-arrow slide06-full-stack__arrow");
}

function renderSlide06CalloutIcon() {
  return renderIconImage("slide06-callout__icon-svg", ICON_PATHS.insight);
}

function renderSlide06({ includeFooter = true, slideIndex = 6 } = {}) {
  return `
    <section class="slide slide--light slide--06" aria-label="06 · From Data To Pipeline" data-slide-index="${slideIndex}" data-pipeline-view="table" id="slide-${slides[slideIndex].id}">
      <div class="slide06-layout">
        <div class="slide06-switcher-spotlight-overlay" data-slide06-spotlight-overlay aria-hidden="true"></div>
        <div class="slide06-heading">
          <div class="slide06-heading__title">
            <div class="report-label report-label--light slide06-heading__eyebrow">06 · From Data To Pipeline</div>
            <h1 class="slide06-headline" aria-label="Every missing capability is a tool you'll have to buy, integrate, and maintain.">
              <span class="slide06-headline__line"><span class="slide06-headline__accent">Every missing</span> capability is a tool</span>
              <span class="slide06-headline__line"><span class="slide06-headline__accent">you&apos;ll have to buy</span>, integrate, and</span>
              <span class="slide06-headline__line">maintain</span>
            </h1>
          </div>
          <div class="slide06-heading__intro-row">
            <div class="slide06-heading__intro-copy">
              <p>Every platform shares the same goal: turn prospect data into revenue. They differ in how much execution they actually own.</p>
            </div>
            <div class="slide06-heading__bridge" aria-hidden="true">
              ${renderSlide06Arrow()}
            </div>
            <div class="slide06-heading__intro-note">
              <p>The table below shows where each platform stops, and where your team picks up.</p>
            </div>
          </div>
        </div>

        <section class="slide06-table-section" aria-label="Capability map table">
          <div class="slide06-table-section__toolbar">
            <div class="slide06-legend" data-slide06-view-panel="table">
              <span class="slide06-legend__label">Legend:</span>
              ${slide06LegendItems.map((item) => `
                <span class="slide06-legend__item slide06-legend__item--${item.tone}">
                  ${renderSlide06State(item.tone === "full" ? "full" : item.tone === "partial" ? "partial" : "none")}
                  <span>${escapeHtml(item.label)}</span>
                </span>
              `).join("")}
            </div>
            <p class="slide06-graph-helper" data-slide06-view-panel="graph" hidden>The charts below show how often each capability is covered fully, partially, or not at all.</p>
            <div class="slide06-switcher-spotlight-target" data-slide06-switcher-target>
              <p class="slide06-switcher-spotlight-hint">Switch between detailed table view or simplified view</p>
              <div class="slide06-mode-toggle" role="group" aria-label="Switch between detailed table view or simplified view">
                <button class="slide06-mode-toggle__item slide06-mode-toggle__item--active" data-slide06-view="table" type="button" aria-pressed="true">
                  ${renderSlide06ModeIcon("table")}
                  <span>Table</span>
                </button>
                <button class="slide06-mode-toggle__item" data-slide06-view="graph" type="button" aria-pressed="false">
                  ${renderSlide06ModeIcon("graph")}
                  <span>Graph</span>
                </button>
              </div>
            </div>
          </div>

          <div class="slide06-table-view" data-slide06-view-panel="table">
            <div class="slide06-table-card">
              <table class="slide06-table">
                <colgroup>
                  <col class="slide06-table__col slide06-table__col--vendor" />
                  <col class="slide06-table__col slide06-table__col--data" />
                  <col class="slide06-table__col slide06-table__col--enrichment" />
                  <col class="slide06-table__col slide06-table__col--deliverability" />
                  <col class="slide06-table__col slide06-table__col--automation" />
                  <col class="slide06-table__col slide06-table__col--orchestration" />
                  <col class="slide06-table__col slide06-table__col--agentic" />
                  <col class="slide06-table__col slide06-table__col--managed" />
                </colgroup>
                <thead>
                  ${renderSlide06TableHeader()}
                </thead>
                <tbody>
                  ${renderSlide06TableBodyRows()}
                </tbody>
              </table>
            </div>
          </div>

          <div class="slide06-graph-view" data-slide06-view-panel="graph" hidden>
            ${renderSlide06GraphView()}
          </div>
        </section>

        <div class="slide06-section-divider" data-slide06-view-panel="table" aria-hidden="true"></div>

        <section class="slide06-insights" data-slide06-view-panel="table" aria-label="What the Capability Map Reveals">
          <div class="slide06-insights__heading">
            <h2 class="slide06-insights__title">What the Capability <span class="slide06-insights__title-accent">Map Reveals</span></h2>
            <p class="slide06-insights__intro">Five patterns in how vendors cover, and fail to cover, the outbound journey.</p>
          </div>
          <div class="slide06-insights__list">
            ${slide06InsightRows.map(renderSlide06Insight).join("")}
          </div>
        </section>

        <section class="slide06-callout" aria-label="Key takeaway">
          <div class="slide06-callout__icon" aria-hidden="true">
            ${renderSlide06CalloutIcon()}
          </div>
          <p class="slide06-callout__text">Coverage is only as valuable as the list it works. The intelligence layer is what decides which accounts belong on that list in the first place.</p>
        </section>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

function setSlide06PipelineView(slide, view) {
  if (!slide || (view !== "table" && view !== "graph")) return;

  dismissSlide06SwitcherHint({ markSeen: true });
  const graphView = slide.querySelector(".slide06-graph-view");
  const shouldAnimateGraph = view === "graph" ? prepareSlide06GraphAnimation(graphView) : false;
  if (view === "table") clearSlide06GraphAnimation(graphView);

  slide.dataset.pipelineView = view;
  slide.querySelectorAll("[data-slide06-view]").forEach((button) => {
    const isActive = button.dataset.slide06View === view;
    button.classList.toggle("slide06-mode-toggle__item--active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  slide.querySelectorAll("[data-slide06-view-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.slide06ViewPanel !== view;
  });

  if (shouldAnimateGraph) playSlide06GraphAnimation(graphView);
}

const tableGraphSwitcherHintStorageKey = "martal-table-graph-hint-seen";
const tableGraphSwitcherHintStorageValue = "1";
const slide06SwitcherHintState = {
  showTimer: null,
  dismissTimer: null,
};

function hasSeenTableGraphSwitcherHint() {
  try {
    return sessionStorage.getItem(tableGraphSwitcherHintStorageKey) === tableGraphSwitcherHintStorageValue;
  } catch {
    return false;
  }
}

function markTableGraphSwitcherHintSeen() {
  try {
    sessionStorage.setItem(tableGraphSwitcherHintStorageKey, tableGraphSwitcherHintStorageValue);
  } catch {
    // Session storage may be unavailable in locked-down contexts.
  }
}

function clearSlide06SwitcherHintTimers() {
  if (slide06SwitcherHintState.showTimer) {
    window.clearTimeout(slide06SwitcherHintState.showTimer);
    slide06SwitcherHintState.showTimer = null;
  }
  if (slide06SwitcherHintState.dismissTimer) {
    window.clearTimeout(slide06SwitcherHintState.dismissTimer);
    slide06SwitcherHintState.dismissTimer = null;
  }
}

function dismissSlide06SwitcherHint({ markSeen = false } = {}) {
  const activeSlide = document.querySelector(".slide--06.is-switcher-spotlight");
  const hadPendingHint = Boolean(slide06SwitcherHintState.showTimer || slide06SwitcherHintState.dismissTimer);
  clearSlide06SwitcherHintTimers();
  if (markSeen) markTableGraphSwitcherHintSeen();
  if (activeSlide) activeSlide.classList.remove("is-switcher-spotlight");
  return Boolean(activeSlide || hadPendingHint);
}

function scheduleSlide06SwitcherHint() {
  const slide = document.querySelector(".slide--06");
  if (!slide || slide.dataset.pipelineView !== "table" || hasSeenTableGraphSwitcherHint()) return;

  clearSlide06SwitcherHintTimers();
  slide06SwitcherHintState.showTimer = window.setTimeout(() => {
    slide06SwitcherHintState.showTimer = null;
    const currentSlide = document.querySelector(".slide--06");
    if (!currentSlide || currentSlide.dataset.pipelineView !== "table") return;

    markTableGraphSwitcherHintSeen();
    currentSlide.classList.add("is-switcher-spotlight");
    slide06SwitcherHintState.dismissTimer = window.setTimeout(() => {
      dismissSlide06SwitcherHint();
    }, 2200);
  }, 650);
}

const slide07CapabilityColumns = [
  { key: "vendor", label: "Vendor" },
  { key: "nlpSearch", label: "NLP Search", glyph: true },
  { key: "aiQualification", label: "AI Qualification", glyph: true },
  { key: "lookalike", label: "Lookalike", glyph: true },
  { key: "intentSignals", label: "Intent Signals", glyph: true },
  { key: "agenticOpt", label: "Agentic Opt.", glyph: true },
];

const slide07LegendItems = [
  { tone: "full", label: "Feature fully available / core to vendor" },
  { tone: "partial", label: "Partial or supporting feature" },
  { tone: "none", label: "Not offered natively" },
];

const slide07CapabilityRows = [
  { vendor: "Martal Group", states: ["full", "full", "full", "full", "full"], featured: true },
  { vendor: "Clay", states: ["partial", "none", "none", "partial", "none"] },
  { vendor: "Apollo.io", states: ["partial", "partial", "full", "partial", "partial"] },
  { vendor: "ZoomInfo", states: ["partial", "partial", "partial", "full", "partial"] },
  { vendor: "Cognism", states: ["none", "partial", "none", "partial", "none"] },
  { vendor: "Amplemarket", states: ["partial", "partial", "partial", "full", "partial"] },
  { vendor: "Unify GTM", states: ["partial", "partial", "partial", "full", "partial"] },
  { vendor: "LeadIQ", states: ["full", "full", "none", "full", "none"] },
  { vendor: "Seamless.AI", states: ["full", "none", "none", "none", "none"] },
  { vendor: "SalesIntel", states: ["none", "none", "none", "full", "none"] },
  { vendor: "UpLead", states: ["none", "none", "none", "partial", "none"] },
  { vendor: "Clearbit", states: ["none", "partial", "none", "partial", "none"] },
  { vendor: "Lusha", states: ["none", "partial", "none", "partial", "none"] },
  { vendor: "Hunter.io", states: ["none", "none", "none", "none", "none"] },
  { vendor: "Persana AI", states: ["partial", "partial", "none", "full", "partial"] },
  { vendor: "Lead411", states: ["none", "none", "none", "full", "none"] },
  { vendor: "FullEnrich", states: ["none", "none", "none", "none", "none"] },
  { vendor: "Floqer", states: ["none", "none", "none", "partial", "none"] },
  { vendor: "Kaspr", states: ["none", "none", "none", "none", "none"] },
  { vendor: "D&B Hoovers", states: ["none", "partial", "none", "full", "none"] },
  { vendor: "Datanyze", states: ["none", "none", "none", "partial", "none"] },
  { vendor: "Exa Websets", states: ["full", "none", "none", "none", "none"] },
  { vendor: "Airscale", states: ["partial", "none", "none", "partial", "none"] },
  { vendor: "Freckle.io", states: ["full", "partial", "none", "none", "none"] },
  { vendor: "AnyMailFinder", states: ["none", "none", "none", "none", "none"] },
];

const slide07SortableColumnKeys = new Set(["nlpSearch", "aiQualification"]);
const slide07CapabilityRank = {
  none: 0,
  partial: 1,
  full: 2,
};

const slide07InsightRows = [
  {
    title: "Intent signals",
    tone: "blue",
    icon: ICON_PATHS.intentSignals,
    stats: [
      { label: "fully native", value: "8" },
      { label: "partial", value: "10" },
    ],
    copy: "The most accessible intelligence layer. ZoomInfo, Amplemarket, Unify GTM, SalesIntel, Lead411, D&B Hoovers, Persana AI, and Martal Group offer it natively, but most deliver only account-level signals, not contact-level.",
  },
  {
    title: "Lookalike modeling",
    tone: "purple",
    icon: ICON_PATHS.lookalikeModeling,
    stats: [
      { label: "fully native", value: "2" },
      { label: "partial", value: "3" },
    ],
    copy: "Only Martal Group and Apollo.io offer lookalike modeling natively. ZoomInfo, Amplemarket, and Unify GTM cover it partially. The majority of vendors leave audience expansion entirely to the buyer.",
  },
  {
    title: "NLP search",
    tone: "yellow",
    icon: ICON_PATHS.nlpSearch,
    stats: [
      { label: "fully native", value: "3" },
      { label: "partial", value: "8" },
    ],
    copy: "Describing your ICP in plain language and having the platform surface matching accounts remains rare. Only Martal Group, Exa Websets, and Freckle.io offer it natively. Most still rely on manual filter-based search.",
  },
  {
    title: "AI qualification",
    tone: "teal",
    icon: ICON_PATHS.aiQualification,
    stats: [
      { label: "fully native", value: "1" },
      { label: "partial", value: "11" },
    ],
    copy: "Automatically validating ICP fit and prioritizing accounts before outreach begins is still rare. Partial capabilities appear across 11 platforms, but incomplete data reduces accuracy and leads to false positives.",
  },
  {
    title: "Agentic Optimization",
    tone: "green",
    icon: ICON_PATHS.agenticOptimization,
    featured: true,
    stats: [
      { label: "fully native", value: "1" },
      { label: "partial", value: "5" },
    ],
    featuredLeadLines: [
      "Martal Group",
      "is the only vendor",
      "with a fully native",
      "agentic AI platform",
      "built in-house",
    ],
    copy: "Martal Group is the only vendor with fully native agentic AI that monitors interactions, adjusts timing and messaging, and continuously optimizes campaigns. Partial capabilities appear in Apollo, ZoomInfo, Amplemarket, Unify GTM, and Persana AI.",
  },
];

const slide07GraphRows = [
  {
    label: "Intent signals",
    full: 8,
    partial: 10,
    none: 7,
    description: "The most accessible intelligence layer. ZoomInfo, Amplemarket, Unify GTM, SalesIntel, Lead411, D&B Hoovers, Persana AI, and Martal Group offer it natively \u2014 but most deliver account-level signals only, not contact-level buying behavior.",
  },
  {
    label: "Lookalike modeling",
    full: 2,
    partial: 3,
    none: 20,
    description: "Only Martal Group and Apollo.io offer lookalike modeling natively. ZoomInfo, Amplemarket, and Unify GTM cover it partially. The majority of vendors leave audience expansion entirely to the buyer.",
  },
  {
    label: "NLP search",
    full: 3,
    partial: 8,
    none: 14,
    description: "Describing your ICP in plain language and having the platform surface matching accounts remains rare. Only Martal Group, Exa Websets, and Freckle.io offer it natively. Most still rely on manual filter-based search.",
  },
  {
    label: "AI qualification",
    full: 1,
    partial: 11,
    none: 13,
    description: "Automatically validating ICP fit and prioritizing accounts before outreach begins is still rare. Partial capabilities appear across 11 platforms, but incomplete data reduces accuracy and leads to false positives.",
  },
  {
    label: "Agentic AI",
    full: 1,
    partial: 5,
    none: 19,
    tone: "agentic",
    description: "Martal Group is the only vendor with fully native agentic AI that monitors interactions, adjusts timing and messaging, and continuously optimizes campaigns. Partial capabilities appear in Apollo, ZoomInfo, Amplemarket, Unify GTM, and Persana AI.",
  },
];

const slide07PrimaryCallout = {
  lead: "Most vendors offer AI-assisted<br>enrichment or scoring at<br>a single layer.",
  text: "Martal Group's agentic AI spans the full stack: natural-language audience building, automated account scoring, lookalike modeling, and real-time buyer signals, before outreach begins, then continuously optimizes performance as campaigns run.",
};

const slide07SecondaryCallout = {
  lead: "Every gap in execution or intelligence becomes<br>another tool, another contract, another line item.",
  text: "That’s how outbound stacks get expensive by accident. The pricing table coming up next shows what vendors charge for themselves, but the real bill is everything around them.",
};

function renderSlide07HeaderGlyph(direction = "right") {
  return renderIconImage("slide03-table__sort-icon slide07-table__header-sort-icon", ICON_PATHS.sort);
}

function renderSlide07State(status) {
  if (status === "full") {
    return renderIconImage("slide07-state slide07-state--full", ICON_PATHS.featureFull);
  }

  if (status === "partial") {
    return renderIconImage("slide07-state slide07-state--partial", ICON_PATHS.featurePartial);
  }

  return renderIconImage("slide07-state slide07-state--none", ICON_PATHS.featureNone);
}

function renderSlide07ModeIcon(kind) {
  if (kind === "graph") {
    return renderIconImage("slide07-mode-toggle__icon", ICON_PATHS.graphToggle);
  }

  return renderIconImage("slide07-mode-toggle__icon", ICON_PATHS.tableToggle);
}

function renderSlide07Arrow(width = 52) {
  return `
    <svg class="slide07-arrow" width="${width}" height="8" viewBox="0 0 419 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M418.854 3.32845C419.049 3.52372 419.049 3.8403 418.854 4.03556L415.672 7.21754C415.476 7.4128 415.16 7.4128 414.964 7.21754C414.769 7.02228 414.769 6.7057 414.964 6.51043L417.793 3.68201L414.964 0.85358C414.769 0.658318 414.769 0.341735 414.964 0.146473C415.16 -0.0487893 415.476 -0.0487893 415.672 0.146473L418.854 3.32845ZM418.5 3.68201V4.18201H0V3.68201V3.18201H418.5V3.68201Z" fill="currentColor"/>
    </svg>
  `;
}

function renderSlide07IntroArrow() {
  return `
    <svg class="slide07-arrow slide07-intro-bridge__arrow" width="53" height="7.36396" viewBox="0 0 53 7.36396" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M0.5 3.18198H0V4.18198H0.5V3.68198V3.18198ZM52.8536 4.03553C53.0488 3.84027 53.0488 3.52369 52.8536 3.32843L49.6716 0.146447C49.4763 -0.0488155 49.1597 -0.0488155 48.9645 0.146447C48.7692 0.341709 48.7692 0.658291 48.9645 0.853554L51.7929 3.68198L48.9645 6.51041C48.7692 6.70567 48.7692 7.02225 48.9645 7.21751C49.1597 7.41278 49.4763 7.41278 49.6716 7.21751L52.8536 4.03553ZM0.5 3.68198V4.18198H52.5V3.68198V3.18198H0.5V3.68198Z" fill="#8DB654"></path>
    </svg>
  `;
}

function renderSlide07FeaturedArrow() {
  return `
    <svg class="slide07-agentic-callout__arrow" width="96" height="7.36396" viewBox="0 0 96 7.36396" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M0.5 3.18198H0V4.18198H0.5V3.68198V3.18198ZM95.8536 4.03553C96.0488 3.84027 96.0488 3.52369 95.8536 3.32843L92.6716 0.146447C92.4763 -0.0488155 92.1597 -0.0488155 91.9645 0.146447C91.7692 0.341709 91.7692 0.658291 91.9645 0.853554L94.7929 3.68198L91.9645 6.51041C91.7692 6.70567 91.7692 7.02225 91.9645 7.21751C92.1597 7.41278 92.4763 7.41278 92.6716 7.21751L95.8536 4.03553ZM0.5 3.68198V4.18198H95.5V3.68198V3.18198H0.5V3.68198Z" fill="#8DB654"></path>
    </svg>
  `;
}

function renderSlide07InsightIcon(src = ICON_PATHS.insight) {
  return renderIconImage("slide07-insight-card__icon-svg", src);
}

function renderSlide07HighlightedParagraph(text, highlights = []) {
  let html = escapeHtml(text);
  highlights.forEach((highlight) => {
    html = html.replaceAll(highlight, `<strong>${escapeHtml(highlight)}</strong>`);
  });
  return `<p>${html}</p>`;
}

function renderSlide07CalloutIcon() {
  return renderIconImage("slide07-callout__icon-svg", ICON_PATHS.insight);
}

function renderSlide07TableRow(row) {
  return `
    <tr class="slide07-table__row ${row.featured ? "slide07-table__row--featured" : ""}">
      <th class="slide07-table__vendor">${escapeHtml(row.vendor)}</th>
      ${row.states.map((status) => `
        <td class="slide07-table__cell">${renderSlide07State(status)}</td>
      `).join("")}
    </tr>
  `;
}

function getSlide07ColumnIndex(key) {
  return slide07CapabilityColumns.findIndex((column) => column.key === key) - 1;
}

function sortSlide07CapabilityRows(rows, sortState = state.slide07TableSort) {
  if (!sortState?.key || !slide07SortableColumnKeys.has(sortState.key)) return rows;

  const columnIndex = getSlide07ColumnIndex(sortState.key);
  if (columnIndex < 0) return rows;

  const direction = sortState.direction === "desc" ? -1 : 1;
  const [pinnedRows, sortableRows] = rows.reduce((groups, row, index) => {
    const item = { row, index };
    if (row.vendor === "Martal Group") {
      groups[0].push(item);
    } else {
      groups[1].push(item);
    }
    return groups;
  }, [[], []]);

  const sortedRows = sortableRows
    .sort((a, b) => {
      const aRank = slide07CapabilityRank[a.row.states[columnIndex]] ?? 0;
      const bRank = slide07CapabilityRank[b.row.states[columnIndex]] ?? 0;
      if (aRank !== bRank) return (aRank - bRank) * direction;
      return a.index - b.index;
    });

  return [...pinnedRows, ...sortedRows].map(({ row }) => row);
}

function renderSlide07TableSortButton(column, sortState = state.slide07TableSort) {
  const isActive = sortState?.key === column.key;
  const direction = isActive ? sortState.direction : "asc";
  const spokenDirection = direction === "asc" ? "ascending" : "descending";
  const ariaLabel = isActive ? `Sort by ${column.label} ${spokenDirection}` : `Sort by ${column.label}`;

  return `
    <button class="slide07-table__sort-button ${isActive ? `is-${direction}` : "is-idle"}" data-slide07-sort="${column.key}" type="button" aria-label="${escapeHtml(ariaLabel)}" aria-pressed="${isActive ? "true" : "false"}">
      <span>${escapeHtml(column.label)}</span>
      ${renderSlide07HeaderGlyph()}
    </button>
  `;
}

function renderSlide07TableHeader(sortState = state.slide07TableSort) {
  return `
    <tr>
      <th class="slide07-table__header slide07-table__header--vendor">Vendor</th>
      ${slide07CapabilityColumns.slice(1).map((column) => {
        const isSortable = slide07SortableColumnKeys.has(column.key);
        const isActive = sortState?.key === column.key;
        const ariaSort = !isSortable || !isActive
          ? ""
          : ` aria-sort="${sortState.direction === "desc" ? "descending" : "ascending"}"`;

        return `
          <th class="slide07-table__header slide07-table__header--capability"${ariaSort}>
            ${isSortable ? renderSlide07TableSortButton(column, sortState) : `<span>${escapeHtml(column.label)}</span>`}
          </th>
        `;
      }).join("")}
    </tr>
  `;
}

function renderSlide07TableBodyRows(sortState = state.slide07TableSort) {
  return sortSlide07CapabilityRows(slide07CapabilityRows, sortState).map(renderSlide07TableRow).join("");
}

function updateSlide07TableSort(table = document.querySelector(".slide--07 .slide07-table")) {
  if (!table) return;
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  if (thead) thead.innerHTML = renderSlide07TableHeader();
  if (tbody) tbody.innerHTML = renderSlide07TableBodyRows();
}

function getSlide07GraphWidths(row) {
  const total = 25;
  const fullPercent = (row.full / total) * 100;
  const fullFloorPercent = row.full > 0 ? 7.5 + ((row.full - 1) * 2.25) : 0;
  const fullVisualPercent = Math.max(fullPercent, fullFloorPercent);
  const fullMinimumPx = row.full > 0 ? 54 + (row.full * 12) : 0;
  const fullWidth = row.full > 0 ? `max(${fullMinimumPx}px, ${fullVisualPercent.toFixed(2)}%)` : "0%";
  const partialWidth = Math.max((row.partial / total) * 100, row.partial > 0 ? 14 : 0);
  const partialLayerWidth = Math.min(100, fullVisualPercent + partialWidth);

  return {
    full: fullWidth,
    partial: `${partialLayerWidth.toFixed(2)}%`,
  };
}

function renderSlide07GraphCount(value, suffix, delay) {
  return `<span class="slide07-graph-bar__label"><span class="slide07-graph-bar__value" data-slide07-count-target="${value}" data-slide07-count-delay="${delay}" style="--slide07-count-digits: ${String(value).length};">${escapeHtml(String(value))}</span> ${escapeHtml(suffix)}</span>`;
}

function renderSlide07GraphRow(row, index = 0) {
  const widths = getSlide07GraphWidths(row);
  const toneClass = row.tone === "agentic" ? " slide07-graph-row--agentic" : "";
  const countDelay = index * 110;

  return `
    <article class="slide07-graph-row${toneClass}" style="--slide07-full-width: ${widths.full}; --slide07-partial-width: ${widths.partial}; --slide07-row-delay: ${countDelay}ms;">
      <div class="slide07-graph-row__top">
        <p class="slide07-graph-row__label">${escapeHtml(row.label)}</p>
        <div class="slide07-graph-bar" aria-label="${escapeHtml(`${row.label}: ${row.full} Full, ${row.partial} Partial, ${row.none} None`)}">
          <span class="slide07-graph-bar__segment slide07-graph-bar__segment--none">${renderSlide07GraphCount(row.none, "None", countDelay + 240)}</span>
          <span class="slide07-graph-bar__segment slide07-graph-bar__segment--partial">${renderSlide07GraphCount(row.partial, "Partial", countDelay + 120)}</span>
          <span class="slide07-graph-bar__segment slide07-graph-bar__segment--full">${renderSlide07GraphCount(row.full, "Full", countDelay)}</span>
        </div>
      </div>
      <p class="slide07-graph-row__description">${escapeHtml(row.description)}</p>
    </article>
  `;
}

function renderSlide07GraphView() {
  return `
    <div class="slide07-graph-card">
      ${slide07GraphRows.map(renderSlide07GraphRow).join("")}
    </div>
  `;
}

const slide07GraphAnimations = new WeakMap();

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
}

function clearSlide07GraphAnimation(graphView) {
  if (!graphView) return;
  const animation = slide07GraphAnimations.get(graphView);
  if (!animation) return;
  if (animation.startRaf) cancelAnimationFrame(animation.startRaf);
  if (animation.countRaf) cancelAnimationFrame(animation.countRaf);
  if (animation.finishTimer) window.clearTimeout(animation.finishTimer);
  slide07GraphAnimations.delete(graphView);
}

function setSlide07GraphLabelProgress(graphView, progressByLabel) {
  graphView.querySelectorAll("[data-slide07-count-target]").forEach((label) => {
    const target = Number(label.dataset.slide07CountTarget || 0);
    const progress = typeof progressByLabel === "function" ? progressByLabel(label) : progressByLabel;
    label.textContent = String(Math.round(target * clamp(progress, 0, 1)));
  });
}

function prepareSlide07GraphAnimation(graphView) {
  if (!graphView) return false;
  clearSlide07GraphAnimation(graphView);
  graphView.classList.remove("is-animating", "is-animation-complete");

  if (prefersReducedMotion()) {
    graphView.classList.remove("is-preparing");
    setSlide07GraphLabelProgress(graphView, 1);
    graphView.classList.add("is-animation-complete");
    return false;
  }

  setSlide07GraphLabelProgress(graphView, 0);
  graphView.classList.add("is-preparing");
  return true;
}

function playSlide07GraphAnimation(graphView) {
  if (!graphView || prefersReducedMotion()) {
    if (graphView) setSlide07GraphLabelProgress(graphView, 1);
    return;
  }

  const animation = {};
  animation.startRaf = requestAnimationFrame(() => {
    const startedAt = performance.now();
    const countDuration = 900;

    graphView.classList.add("is-animating");

    const tick = (now) => {
      setSlide07GraphLabelProgress(graphView, (label) => {
        const delay = Number(label.dataset.slide07CountDelay || 0);
        const elapsed = now - startedAt - delay;
        const progress = clamp(elapsed / countDuration, 0, 1);
        return 1 - Math.pow(1 - progress, 3);
      });

      if (now - startedAt < countDuration + 680) {
        animation.countRaf = requestAnimationFrame(tick);
        return;
      }

      setSlide07GraphLabelProgress(graphView, 1);
    };

    animation.countRaf = requestAnimationFrame(tick);
    animation.finishTimer = window.setTimeout(() => {
      setSlide07GraphLabelProgress(graphView, 1);
      graphView.classList.remove("is-preparing", "is-animating");
      graphView.classList.add("is-animation-complete");
      slide07GraphAnimations.delete(graphView);
    }, 1800);
  });

  slide07GraphAnimations.set(graphView, animation);
}

const slide07SwitcherHintState = {
  showTimer: null,
  dismissTimer: null,
};

function clearSlide07SwitcherHintTimers() {
  if (slide07SwitcherHintState.showTimer) {
    window.clearTimeout(slide07SwitcherHintState.showTimer);
    slide07SwitcherHintState.showTimer = null;
  }
  if (slide07SwitcherHintState.dismissTimer) {
    window.clearTimeout(slide07SwitcherHintState.dismissTimer);
    slide07SwitcherHintState.dismissTimer = null;
  }
}

function dismissSlide07SwitcherHint({ markSeen = false } = {}) {
  const activeSlide = document.querySelector(".slide--07.is-switcher-spotlight");
  const hadPendingHint = Boolean(slide07SwitcherHintState.showTimer || slide07SwitcherHintState.dismissTimer);
  clearSlide07SwitcherHintTimers();
  if (markSeen) markTableGraphSwitcherHintSeen();
  if (activeSlide) activeSlide.classList.remove("is-switcher-spotlight");
  return Boolean(activeSlide || hadPendingHint);
}

function scheduleSlide07SwitcherHint() {
  const slide = document.querySelector(".slide--07");
  if (!slide || slide.dataset.intelligenceView !== "table" || hasSeenTableGraphSwitcherHint()) return;

  clearSlide07SwitcherHintTimers();
  slide07SwitcherHintState.showTimer = window.setTimeout(() => {
    slide07SwitcherHintState.showTimer = null;
    const currentSlide = document.querySelector(".slide--07");
    if (!currentSlide || currentSlide.dataset.intelligenceView !== "table") return;

    markTableGraphSwitcherHintSeen();
    currentSlide.classList.add("is-switcher-spotlight");
    slide07SwitcherHintState.dismissTimer = window.setTimeout(() => {
      dismissSlide07SwitcherHint();
    }, 2200);
  }, 650);
}

function syncSlide07SwitcherHint() {
  if (state.currentSlide === 7) {
    scheduleSlide07SwitcherHint();
    return;
  }
  dismissSlide07SwitcherHint();
}

function syncTableGraphSwitcherHints() {
  if (state.currentSlide === 6) {
    scheduleSlide06SwitcherHint();
    dismissSlide07SwitcherHint();
    return;
  }
  if (state.currentSlide === 7) {
    dismissSlide06SwitcherHint();
    scheduleSlide07SwitcherHint();
    return;
  }
  dismissSlide06SwitcherHint();
  dismissSlide07SwitcherHint();
}

function renderSlide07InsightCard(row) {
  const statsMarkup = row.stats.map((stat) => `
    <div class="slide07-insight-card__stat">
      <span class="slide07-insight-card__stat-label">${escapeHtml(stat.label)}:</span>
      <span class="slide07-insight-card__stat-value">${escapeHtml(stat.value)}</span>
    </div>
  `).join("");

  if (row.featured) {
    const [featuredCopyPrimary, featuredCopySecondary] = row.copy.split(". ");
    const featuredCopyPrimaryText = `${featuredCopyPrimary}.`;
    const featuredCopySecondaryText = `${featuredCopySecondary}.`;

    return `
      <article class="slide07-insight-card slide07-insight-card--featured slide07-insight-card--${row.tone}">
        <div class="slide07-insight-card__left">
          <div class="slide07-insight-card__icon" aria-hidden="true">
            ${renderSlide07InsightIcon(row.icon)}
          </div>
          <div class="slide07-insight-card__body">
            <p class="slide07-insight-card__title">${escapeHtml(row.title)}</p>
            <div class="slide07-insight-card__stats">${statsMarkup}</div>
          </div>
        </div>
        <div class="slide07-insight-card__featured-lead slide07-insight-card__featured-lead--middle">
          ${row.featuredLeadLines.map((line) => `<span>${escapeHtml(line)}</span>`).join("")}
        </div>
        <div class="slide07-insight-card__bridge slide07-insight-card__bridge--featured" aria-hidden="true">
          ${renderSlide07FeaturedArrow()}
        </div>
        <div class="slide07-insight-card__copy slide07-insight-card__copy--featured">
          ${renderSlide07HighlightedParagraph(featuredCopyPrimaryText, ["Martal Group"])}
          ${renderSlide07HighlightedParagraph(featuredCopySecondaryText, ["Apollo", "ZoomInfo", "Amplemarket", "Unify GTM", "Persana AI"])}
        </div>
      </article>
    `;
  }

  return `
    <article class="slide07-insight-card slide07-insight-card--${row.tone}">
      <div class="slide07-insight-card__left">
        <div class="slide07-insight-card__icon" aria-hidden="true">
          ${renderSlide07InsightIcon(row.icon)}
        </div>
        <div class="slide07-insight-card__body">
          <p class="slide07-insight-card__title">${escapeHtml(row.title)}</p>
          <div class="slide07-insight-card__stats">${statsMarkup}</div>
        </div>
      </div>
      <p class="slide07-insight-card__copy">${escapeHtml(row.copy)}</p>
    </article>
  `;
}

function renderSlide07({ includeFooter = true, slideIndex = 7 } = {}) {
  return `
    <section class="slide slide--light slide--07" aria-label="07 В· The Intelligence Layer" data-slide-index="${slideIndex}" data-intelligence-view="table" id="slide-${slides[slideIndex].id}">
      <div class="slide07-layout">
        <div class="slide07-switcher-spotlight-overlay" data-slide07-spotlight-overlay aria-hidden="true"></div>
        <div class="slide07-heading">
          <div class="slide07-heading__title">
            <div class="report-label report-label--light slide07-heading__eyebrow">07 В· The Intelligence Layer</div>
            <h1 class="slide07-headline" aria-label="Intelligence isn't one feature. It's a stack">
              <span class="slide07-headline__line"><span class="slide07-headline__accent">Intelligence</span> isn&apos;t one feature.</span>
              <span class="slide07-headline__line"><span class="slide07-headline__accent">It&apos;s a stack</span></span>
            </h1>
          </div>
          <div class="slide07-heading__intro-row">
            <div class="slide07-heading__intro-copy">
              <p>Signals are<br>a commodity<br>now.</p>
            </div>
            <div class="slide07-heading__bridge" aria-hidden="true">
              ${renderSlide07IntroArrow()}
            </div>
            <div class="slide07-heading__intro-note">
              <p>Most vendors have some version of them. But a signal on its own tells you something happened at an account, not whether that account is worth working, how to prioritize it against the rest of your pipeline, or what to do about it. The vendors pulling ahead have layered capability: natural-language search, AI qualification, lookalike modeling, intent signals, and agentic optimization. This section shows who has what.</p>
            </div>
          </div>
        </div>

        <section class="slide07-table-section" aria-label="Intelligence capability table">
          <div class="slide07-table-section__toolbar">
            <div class="slide07-legend" data-slide07-view-panel="table">
              <span class="slide07-legend__label">Legend:</span>
              ${slide07LegendItems.map((item) => `
                <span class="slide07-legend__item slide07-legend__item--${item.tone}">
                  ${renderSlide07State(item.tone === "full" ? "full" : item.tone === "partial" ? "partial" : "none")}
                  <span>${escapeHtml(item.label)}</span>
                </span>
              `).join("")}
            </div>
            <p class="slide07-graph-helper" data-slide07-view-panel="graph" hidden>The charts below show how often each capability is covered fully, partially, or not at all.</p>
            <div class="slide07-switcher-spotlight-target" data-slide07-switcher-target>
              <p class="slide07-switcher-spotlight-hint">Switch between detailed table view or simplified view</p>
              <div class="slide07-mode-toggle" role="group" aria-label="Switch between detailed table view or simplified view">
                <button class="slide07-mode-toggle__item slide07-mode-toggle__item--active" data-slide07-view="table" type="button" aria-pressed="true">
                  ${renderSlide07ModeIcon("table")}
                  <span>Table</span>
                </button>
                <button class="slide07-mode-toggle__item" data-slide07-view="graph" type="button" aria-pressed="false">
                  ${renderSlide07ModeIcon("graph")}
                  <span>Graph</span>
                </button>
              </div>
            </div>
          </div>

          <div class="slide07-table-view" data-slide07-view-panel="table">
            <div class="slide07-table-card">
              <table class="slide07-table">
                <colgroup>
                  <col class="slide07-table__col slide07-table__col--vendor" />
                  <col class="slide07-table__col" />
                  <col class="slide07-table__col" />
                  <col class="slide07-table__col" />
                  <col class="slide07-table__col" />
                  <col class="slide07-table__col" />
                </colgroup>
                <thead>
                  ${renderSlide07TableHeader()}
                </thead>
                <tbody>
                  ${renderSlide07TableBodyRows()}
                </tbody>
              </table>
            </div>
          </div>

          <div class="slide07-graph-view" data-slide07-view-panel="graph" hidden>
            ${renderSlide07GraphView()}
          </div>
        </section>

        <div class="slide07-section-divider" data-slide07-view-panel="table" aria-hidden="true"></div>

        <section class="slide07-insights" data-slide07-view-panel="table" aria-label="What Intelligence Layers Reveal About Execution">
          <div class="slide07-insights__heading">
            <h2 class="slide07-insights__title">What Intelligence Layers Reveal About <span class="slide07-insights__title-accent">Execution</span></h2>
          </div>
          <div class="slide07-insights__list">
            ${slide07InsightRows.map(renderSlide07InsightCard).join("")}
          </div>
        </section>

        <section class="slide07-callout slide07-callout--primary" aria-label="Key takeaway">
          <div class="slide07-callout__icon" aria-hidden="true">
            ${renderSlide07CalloutIcon()}
          </div>
          <div class="slide07-callout__body">
            <p class="slide07-callout__lead">${slide07PrimaryCallout.lead}</p>
            <p class="slide07-callout__text">${slide07PrimaryCallout.text}</p>
          </div>
        </section>

        <section class="slide07-callout slide07-callout--secondary" aria-label="Closing takeaway">
          <div class="slide07-callout__icon" aria-hidden="true">
            ${renderSlide07CalloutIcon()}
          </div>
          <div class="slide07-callout__body">
            <p class="slide07-callout__lead">${slide07SecondaryCallout.lead}</p>
            <p class="slide07-callout__text slide07-callout__text--accent">${slide07SecondaryCallout.text}</p>
          </div>
        </section>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

function setSlide07IntelligenceView(slide, view) {
  if (!slide || (view !== "table" && view !== "graph")) return;

  dismissSlide07SwitcherHint({ markSeen: true });
  const graphView = slide.querySelector(".slide07-graph-view");
  const shouldAnimateGraph = view === "graph" ? prepareSlide07GraphAnimation(graphView) : false;
  if (view === "table") clearSlide07GraphAnimation(graphView);

  slide.dataset.intelligenceView = view;
  slide.querySelectorAll("[data-slide07-view]").forEach((button) => {
    const isActive = button.dataset.slide07View === view;
    button.classList.toggle("slide07-mode-toggle__item--active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  slide.querySelectorAll("[data-slide07-view-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.slide07ViewPanel !== view;
  });

  if (shouldAnimateGraph) playSlide07GraphAnimation(graphView);
}

const slide08PricingTiers = [
  {
    title: "Entry Tier",
    accent: "neutral",
    icon: ICON_PATHS.pricingEntry,
    body: "Often under $150 / month. Data and enrichment-only platforms typically lead the low end of the market with limited execution functionality and minimal workflow automation.",
  },
  {
    title: "Growth Tier",
    accent: "neutral",
    icon: ICON_PATHS.pricingGrowth,
    body: "Pricing increases 3–5x once intent data, dialer access, credits, or outreach automation become available. Supporting tool costs still stack on top.",
  },
];

const slide08GapCards = [
  {
    tone: "none",
    title: "None",
    body: "Full engine with minimal extra tooling required across the workflow, reducing operational complexity and supporting more efficient campaign execution.",
  },
  {
    tone: "medium",
    title: "Medium",
    body: "Execution gaps require additional supporting tools and moderate operational spend to maintain workflows and support scalable outbound execution.",
  },
  {
    tone: "high",
    title: "High",
    body: "Major execution gaps require multiple tools to run campaigns end-to-end efficiently, increasing operational overhead, complexity, and ongoing execution costs.",
  },
];

const slide08PricingRows = [
  { vendor: "Martal Group", entry: "$1,000/mo", growth: "Custom", context: "Sub + Credits", gap: "None", note: "Full engine; managed execution as add-on", featured: true },
  { vendor: "Clay", entry: "$185/mo", growth: "$495-2,330+/mo", context: "Credits-first", gap: "High", note: "Enrichment only; no sequencing" },
  { vendor: "Apollo.io", entry: "$59/mo", growth: "$99-450+/mo", context: "Subscription + Credits", gap: "Medium", note: "Phone & deliverability gaps" },
  { vendor: "ZoomInfo", entry: "Custom", growth: "Custom", context: "Subscription-first", gap: "Medium", note: "Strong data; heavier execution lift" },
  { vendor: "Cognism", entry: "Custom", growth: "Custom", context: "Subscription-first", gap: "High", note: "Data only; no outreach" },
  { vendor: "Amplemarket", entry: "$600/mo", growth: "Custom", context: "Subscription-first", gap: "Medium", note: "Email & phone; LinkedIn manual; 2 seat min" },
  { vendor: "Unify GTM", entry: "$1,740/mo", growth: "Custom", context: "Subscription-first", gap: "Medium", note: "Signals; limited execution" },
  { vendor: "LeadIQ", entry: "$20/mo", growth: "Custom", context: "Subscription + Credits", gap: "High", note: "Capture only; no outreach" },
  { vendor: "Seamless.AI", entry: "Custom", growth: "Custom", context: "Subscription-first", gap: "High", note: "Data only; no execution" },
  { vendor: "SalesIntel", entry: "$99/mo", growth: "$225-4,000/mo", context: "Subscription + Credits", gap: "High", note: "Verified data; no sequencing" },
  { vendor: "UpLead", entry: "$99/mo", growth: "$199/mo", context: "Subscription + Credits", gap: "High", note: "Accurate data; no execution" },
  { vendor: "Clearbit", entry: "Custom", growth: "Custom", context: "Subscription-first", gap: "High", note: "API enrichment; no outreach" },
  { vendor: "Lusha", entry: "$50/mo", growth: "$70-400+/mo", context: "Subscription + Credits", gap: "High", note: "Contacts only; no outreach" },
  { vendor: "Hunter.io", entry: "$50/mo", growth: "$150-300+/mo", context: "Subscription-first", gap: "High", note: "Email finding only" },
  { vendor: "Persana AI", entry: "$85/mo", growth: "$189-1,750/mo", context: "Credits-first", gap: "Medium", note: "Light sequencing; limited depth" },
  { vendor: "Lead411", entry: "$49/mo", growth: "$150+/mo", context: "Subscription + Credits", gap: "High", note: "Data & intent; no outreach" },
  { vendor: "FullEnrich", entry: "$29/mo", growth: "$55-1,950+/mo", context: "Credits-first", gap: "High", note: "Waterfall enrichment only" },
  { vendor: "Floqer", entry: "Custom", growth: "Custom", context: "Subscription-first", gap: "High", note: "CRM enrichment; no outreach" },
  { vendor: "Kaspr", entry: "$68/mo", growth: "$114+/mo", context: "Subscription + Credits", gap: "High", note: "EU data; LinkedIn-focused" },
  { vendor: "D&B Hoovers", entry: "Custom", growth: "Custom", context: "Subscription-first", gap: "High", note: "Enterprise data only" },
  { vendor: "Datanyze", entry: "$29/mo", growth: "$55/mo", context: "Credits-first", gap: "High", note: "Technographics; US-focused" },
  { vendor: "Exa Websets", entry: "$49/mo", growth: "$449+/mo", context: "Credits-first", gap: "High", note: "AI web search; no outreach" },
  { vendor: "Airscale", entry: "$49/mo", growth: "$99-1,049+/mo", context: "Credits-first", gap: "High", note: "List building; no execution" },
  { vendor: "Freckle.io", entry: "$99/mo", growth: "$599+/mo", context: "Credits-first", gap: "High", note: "NLP enrichment; no outreach" },
  { vendor: "AnyMailFinder", entry: "$14/mo", growth: "$49-499+/mo", context: "Credits-first", gap: "High", note: "Email finding only" },
];

const slide08Takeaways = [
  {
    eyebrow: "Pricing jump",
    title: "Why growth pricing escalates.",
    body: "The jump from entry tier to growth tier isn't linear. It's a re-pricing event. Intent data, dialer access, additional credits, and outreach automation sit behind the growth tier on most platforms, which is why the 3 to 5x multiplier is consistent across the market. Platforms that bundle these capabilities earlier reduce the likelihood of extreme cost escalation as teams scale.",
  },
  {
    eyebrow: "Hidden spend",
    title: "Where the data-only teams spend it all.",
    body: "A low entry price doesn't mean a low total cost. Teams using data-only platforms like Cognism, SalesIntel, or Clearbit typically spend hundreds, sometimes thousands, more per month on sequencing, deliverability, and dialer tools to fill the gaps. The savings on the invoice get paid out everywhere else.",
  },
  {
    eyebrow: "Invisible costs",
    title: "The costs that don't show up on any invoice.",
    body: "Fragmented stacks don't just cost more in subscriptions. Every handoff between tools introduces configuration time, data inconsistency, and workflow gaps. Teams managing separate tools for data, sequencing, deliverability, and outreach spend more time on setup than execution. The hours are expensive.",
  },
];

const slide08AuthorNote = {
  title: "Why Martal stands where\nit does on this table.",
  body: "AI is reshaping how B2B databases are built and used. Companies increasingly combine CRM data with enriched external datasets to power predictive modeling, intent scoring, and automated prospecting.",
};

const slide08BottomCallout = {
  body: "That's the cost of the stack as it stands today. The next five years will decide whether that cost goes away, or whether it multiplies.",
};

function renderSlide08TableGlyph(direction = "right") {
  return renderIconImage("slide03-table__sort-icon slide08-table__header-sort-icon", ICON_PATHS.sort);
}

const slide08GapRank = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
};

function renderSlide08GapIcon(tone) {
  const iconByTone = {
    none: ICON_PATHS.gapNone,
    medium: ICON_PATHS.gapMedium,
    high: ICON_PATHS.gapHigh,
  };
  return renderIconImage(`slide08-gap-card__icon-svg slide08-gap-card__icon-svg--${tone}`, iconByTone[tone] ?? ICON_PATHS.gapMedium);
}

function renderSlide08GapPill(level) {
  const normalized = level.toLowerCase();
  return `<span class="slide08-table__gap-pill slide08-table__gap-pill--${normalized}">${escapeHtml(level)}</span>`;
}

function renderSlide08TierIcon(src) {
  return renderIconImage("slide08-tier-card__icon-svg", src);
}

function renderSlide08TierCard(card) {
  return `
    <article class="slide08-tier-card slide08-tier-card--${card.accent}">
      <div class="slide08-tier-card__icon" aria-hidden="true">
        ${renderSlide08TierIcon(card.icon)}
      </div>
      <div class="slide08-tier-card__body">
        <p class="slide08-tier-card__title">${escapeHtml(card.title)}</p>
        <p class="slide08-tier-card__copy">
          ${escapeHtml(card.body || "")}
        </p>
      </div>
    </article>
  `;
}

function renderSlide08GapCard(card) {
  return `
    <article class="slide08-gap-card slide08-gap-card--${card.tone}">
      <div class="slide08-gap-card__icon" aria-hidden="true">
        ${renderSlide08GapIcon(card.tone)}
      </div>
      <p class="slide08-gap-card__title">${escapeHtml(card.title)}</p>
      <p class="slide08-gap-card__copy">${escapeHtml(card.body)}</p>
    </article>
  `;
}

function renderSlide08TableRow(row) {
  return `
    <tr class="slide08-table__row ${row.featured ? "slide08-table__row--featured" : ""}">
      <th class="slide08-table__vendor">${escapeHtml(row.vendor)}</th>
      <td class="slide08-table__cell">${escapeHtml(row.entry)}</td>
      <td class="slide08-table__cell">${escapeHtml(row.growth)}</td>
      <td class="slide08-table__cell">${escapeHtml(row.context)}</td>
      <td class="slide08-table__cell">${renderSlide08GapPill(row.gap)}</td>
      <td class="slide08-table__cell">${escapeHtml(row.note)}</td>
    </tr>
  `;
}

function sortSlide08PricingRows(rows, sortState = state.slide08GapSort) {
  const [pinnedRows, sortableRows] = rows.reduce((groups, row, index) => {
    const item = { row, index };
    if (row.vendor === "Martal Group") {
      groups[0].push(item);
    } else {
      groups[1].push(item);
    }
    return groups;
  }, [[], []]);

  if (sortState?.direction === "asc" || sortState?.direction === "desc") {
    const multiplier = sortState.direction === "asc" ? 1 : -1;
    sortableRows.sort((a, b) => {
      const aRank = slide08GapRank[a.row.gap.toLowerCase()] ?? Number.MAX_SAFE_INTEGER;
      const bRank = slide08GapRank[b.row.gap.toLowerCase()] ?? Number.MAX_SAFE_INTEGER;
      if (aRank !== bRank) return (aRank - bRank) * multiplier;
      return a.index - b.index;
    });
  }

  return [...pinnedRows, ...sortableRows].map((item) => item.row);
}

function renderSlide08TableHeader(sortState = state.slide08GapSort) {
  const direction = sortState?.direction === "desc" ? "desc" : sortState?.direction === "asc" ? "asc" : null;
  const ariaSort = direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none";
  const buttonLabel = direction === "asc"
    ? "Sort Gap Cost high to low"
    : "Sort Gap Cost low to high";

  return `
    <tr>
      <th class="slide08-table__header slide08-table__header--vendor">Vendor</th>
      <th class="slide08-table__header">Entry</th>
      <th class="slide08-table__header">Growth</th>
      <th class="slide08-table__header">Model</th>
      <th class="slide08-table__header slide08-table__header--sortable" aria-sort="${ariaSort}">
        <button class="slide08-table__sort-button ${direction ? `is-${direction}` : "is-idle"}" data-slide08-sort="gap" type="button" aria-label="${buttonLabel}" aria-pressed="${direction ? "true" : "false"}">
          <span>Gap Cost</span>
          ${renderSlide08TableGlyph()}
        </button>
      </th>
      <th class="slide08-table__header">Notes</th>
    </tr>
  `;
}

function renderSlide08TableBodyRows(sortState = state.slide08GapSort) {
  return sortSlide08PricingRows(slide08PricingRows, sortState).map(renderSlide08TableRow).join("");
}

function updateSlide08TableSort(table = document.querySelector(".slide--08 .slide08-table")) {
  if (!table) return;
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  if (thead) thead.innerHTML = renderSlide08TableHeader();
  if (tbody) tbody.innerHTML = renderSlide08TableBodyRows();
}

function renderSlide08Takeaway(row) {
  return `
    <article class="slide08-takeaways__card">
      <p class="slide08-takeaways__eyebrow">${escapeHtml(row.eyebrow)}</p>
      <p class="slide08-takeaways__card-title">${escapeHtml(row.title)}</p>
      <p class="slide08-takeaways__card-copy">${escapeHtml(row.body)}</p>
    </article>
  `;
}

function renderSlide08Arrow(width = 100) {
  return `
    <svg class="slide08-arrow" width="${width}" height="8" viewBox="0 0 419 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M418.854 3.32845C419.049 3.52372 419.049 3.8403 418.854 4.03556L415.672 7.21754C415.476 7.4128 415.16 7.4128 414.964 7.21754C414.769 7.02228 414.769 6.7057 414.964 6.51043L417.793 3.68201L414.964 0.85358C414.769 0.658318 414.769 0.341735 414.964 0.146473C415.16 -0.0487893 415.476 -0.0487893 415.672 0.146473L418.854 3.32845ZM418.5 3.68201V4.18201H0V3.68201V3.18201H418.5V3.68201Z" fill="currentColor"/>
    </svg>
  `;
}

function renderSlide08NoteIcon() {
  return renderIconImage("slide08-note__icon-svg", ICON_PATHS.platformData);
}

function renderSlide08({ includeFooter = true, slideIndex = 8 } = {}) {
  return `
    <section class="slide slide--light slide--08" aria-label="08 В· Price Vs. Performance" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide08-layout">
        <div class="slide08-heading">
          <div class="slide08-heading__title">
            <div class="report-label report-label--light slide08-heading__eyebrow">08 В· Price Vs. Performance</div>
            <h1 class="slide08-headline" aria-label="The cheapest tool is usually the most expensive one">
              <span class="slide08-headline__line">The <span class="slide08-headline__accent slide08-headline__accent--green">Cheapest</span> tool is usually the</span>
              <span class="slide08-headline__line">Most <span class="slide08-headline__accent slide08-headline__accent--red">Expensive</span> one</span>
            </h1>
          </div>
        <div class="slide08-heading__intro-row">
          <div class="slide08-heading__intro-copy">
            <p>A low entry price looks good on the spreadsheet until you count every tool you had to buy around it. The table below shows what each vendor charges for their own platform. It doesn't show the supporting tools most buyers end up stacking on top, which is where the real cost hides.</p>
          </div>
          <div class="slide08-heading__intro-arrow" aria-hidden="true">
            ${renderSlide08Arrow(56)}
          </div>
          <div class="slide08-heading__intro-note">
            <p><span class="slide08-heading__note-label">Important note:</span> Entry Price and Growth Price reflect each vendor's own pricing for their tool only. They do not include supporting tools that most buyers need to run campaigns end-to-end. The Gap Cost column estimates how much additional tooling is typically required to close the gaps.</p>
          </div>
        </div>
        </div>

        <section class="slide08-pricing-gap" aria-label="Platform Pricing Tiers and Gap Cost">
          <div class="slide08-pricing-gap__headings">
            <div class="slide08-section-title slide08-pricing-gap__heading slide08-pricing-gap__heading--pricing">Platform Pricing Tiers, explained</div>
            <div class="slide08-section-title slide08-pricing-gap__heading slide08-pricing-gap__heading--gap">Gap Cost, explained</div>
          </div>
          <div class="slide08-pricing-gap__cards">
            ${slide08PricingTiers.map(renderSlide08TierCard).join("")}
            ${slide08GapCards.map(renderSlide08GapCard).join("")}
          </div>
        </section>

        <section class="slide08-table-section" aria-label="Vendor pricing table">
          <div class="slide08-table-card">
            <table class="slide08-table">
              <colgroup>
                <col class="slide08-table__col slide08-table__col--vendor" />
                <col class="slide08-table__col" />
                <col class="slide08-table__col" />
                <col class="slide08-table__col" />
                <col class="slide08-table__col" />
                <col class="slide08-table__col" />
              </colgroup>
              <thead>
                ${renderSlide08TableHeader()}
              </thead>
              <tbody>
                ${renderSlide08TableBodyRows()}
              </tbody>
            </table>
          </div>
        </section>

        <section class="slide08-gap-callout" aria-label="Gap cost summary">
          <div class="slide08-gap-callout__metric">
            <div class="slide08-gap-callout__metric-box">
              <span>17</span>
            </div>
            <p class="slide08-gap-callout__metric-caption">of 25 vendors</p>
          </div>
          <div class="slide08-gap-callout__body">
            <p class="slide08-gap-callout__title">Carry a High Gap Cost</p>
            <p class="slide08-gap-callout__copy">The majority of this market requires additional tooling for sequencing, deliverability, dialing, or orchestration before campaigns can run end-to-end. The entry price is the floor, not the total.</p>
          </div>
        </section>

        <details class="slide08-takeaways">
          <summary class="slide08-takeaways__summary">
            <span class="slide08-takeaways__summary-icon" aria-hidden="true">
              <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M3 5.25L7 9.25L11 5.25" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>Major takeaways</span>
          </summary>
          <div class="slide08-takeaways__grid">
            ${slide08Takeaways.map(renderSlide08Takeaway).join("")}
          </div>
        </details>

        <section class="slide08-authors" aria-label="From the authors">
          <div class="slide08-authors__body">
            <div class="slide08-authors__label">FROM THE AUTHORS</div>
            <div class="slide08-authors__title">${escapeHtml(slide08AuthorNote.title).replace("\n", "<br />")}</div>
          </div>
          <div class="slide08-authors__arrow" aria-hidden="true">
            ${renderMartalInlineArrow("martal-inline-arrow slide08-authors__inline-arrow")}
          </div>
          <div class="slide08-authors__copy">
            ${escapeHtml(slide08AuthorNote.body)}
          </div>
        </section>

        <section class="slide08-note" aria-label="Closing takeaway">
          <div class="slide08-note__icon" aria-hidden="true">
            ${renderSlide08NoteIcon()}
          </div>
          <p class="slide08-note__copy">${escapeHtml(slide08BottomCallout.body)}</p>
        </section>

        ${includeFooter ? renderBottomBar() : ""}
      </div>
    </section>
  `;
}

function renderSlide09FeatureIcon(src) {
  return renderIconImage("slide09-feature__icon-svg", src);
}

function renderSlide09Feature({ label, body, icon }) {
  return `
    <article class="slide09-feature">
      <div class="slide09-feature__icon" aria-hidden="true">
        ${renderSlide09FeatureIcon(icon)}
      </div>
      <div class="slide09-feature__content">
        <p class="slide09-feature__label">${escapeHtml(label)}</p>
        <p class="slide09-feature__text">${escapeHtml(body)}</p>
      </div>
    </article>
  `;
}

function renderSlide09({ includeFooter = true, slideIndex = 9 } = {}) {
  const featureItems = [
    {
      label: "Today",
      icon: ICON_PATHS.horizonToday,
      body: "is only the beginning of a larger shift.",
    },
    {
      label: "Emerging forces",
      icon: ICON_PATHS.horizonForces,
      body: "reshape B2B data — defining what stays relevant.",
    },
  ];

  return `
    <section class="slide slide09-page" aria-label="09 · A The Horizon" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide09-background" aria-hidden="true">
        <video class="slide09-background__video" autoplay muted loop playsinline preload="auto">
          <source src="video/09.mp4" type="video/mp4" />
        </video>
        <div class="slide09-background__overlay"></div>
      </div>

      <div class="slide09-layout">
        <div class="slide09-heading">
          <p class="slide09-eyebrow">09 · A The Horizon</p>
          <h1 class="slide09-title" aria-label="The Future of B2B Data">
            <span class="slide09-title__line slide09-title__line--the">THE</span>
            <span class="slide09-title__line slide09-title__line--future">FUTURE</span>
            <span class="slide09-title__line slide09-title__line--of">OF B2B DATA</span>
          </h1>
        </div>

        <div class="slide09-features" aria-label="Supporting notes">
          ${featureItems.map(renderSlide09Feature).join("")}
        </div>
      </div>

      ${includeFooter ? renderBottomBar() : ""}
    </section>
  `;
}

function renderSlide10StatIcon(src) {
  if (src) {
    return renderIconImage("slide10-stat__icon-svg", src);
  }

  return `
    <svg class="slide10-stat__icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <circle cx="6.2" cy="7" r="2.1" fill="currentColor" />
      <circle cx="17.8" cy="8" r="2.1" fill="currentColor" />
      <circle cx="12" cy="16.8" r="2.1" fill="currentColor" />
      <path d="M7.8 7.4L16.2 8.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.9 8.3L11.2 15.7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.2 9L13.6 16.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

function renderSlide10Stat({ year, value, copy, icon }) {
  return `
    <article class="slide10-stat">
      <div class="slide10-stat__head">
        <div class="slide10-stat__icon" aria-hidden="true">
          ${renderSlide10StatIcon(icon)}
        </div>
        <div class="slide10-stat__meta">
          <p class="slide10-stat__year">${escapeHtml(year)}</p>
          <p class="slide10-stat__value">${escapeHtml(value)}</p>
        </div>
      </div>
      <p class="slide10-stat__copy">${escapeHtml(copy)}</p>
    </article>
  `;
}

function renderSlide10Trend({
  number,
  title,
  stats,
  pull,
  paragraphs,
  showSeparator = true,
}) {
  return `
    <section class="slide10-trend">
      <div class="slide10-trend__number">${escapeHtml(number)}</div>
      <h2 class="slide10-trend__title">${escapeHtml(title)}</h2>
      <div class="slide10-trend__stats">
        ${stats.map(renderSlide10Stat).join("")}
      </div>
      <p class="slide10-trend__pull"><strong>${escapeHtml(pull)}</strong></p>
      <div class="slide10-trend__body">
        ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      ${showSeparator ? `<div class="slide10-trend__separator" aria-hidden="true"></div>` : ""}
    </section>
  `;
}

function renderSlide10CompoundConnector() {
  return renderMartalInlineArrow("martal-inline-arrow slide10-compound__connector-arrow");
}

function renderSlideDivider(gradientId = "slide10-divider-gradient") {
  return `
    <svg class="slide10-divider__svg" width="37" height="239" viewBox="0 0 37 239" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M35.748 0.0682373L30.9941 34.5682L35.005 41.0491L29.2084 46.8279L0.494141 238.908" stroke="url(#${gradientId})"/>
      <defs>
        <linearGradient id="${gradientId}" x1="35.9941" y1="-0.431762" x2="0.494272" y2="245.068" gradientUnits="userSpaceOnUse">
          <stop stop-color="#80B122" stop-opacity="0"/>
          <stop offset="0.148572" stop-color="#80B122"/>
          <stop offset="1" stop-color="#80B122" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  `;
}

function renderSlide10({ includeFooter = true, slideIndex = 10 } = {}) {
  const trends = [
    {
      number: "01",
      title: "Agentic AI is becoming the execution layer",
      stats: [
        {
          year: "In 2028",
          value: "$15 trillion",
          icon: ICON_PATHS.trend2028,
          copy: "in B2B spend will move through AI agents",
        },
        {
          year: "In 2030",
          value: "$3 to $5 trillion",
          icon: ICON_PATHS.trend2030,
          copy: "in global agentic commerce",
        },
      ],
      pull: "By 2028, buyers will be evaluating platforms on how well their agents run, not on how big their databases are.",
      paragraphs: [
        "This is an architectural problem, not a roadmap problem. Platforms built around a database with AI features bolted on cannot be retrofitted into agent-native systems.",
        "The data model is wrong. The execution layer is wrong. The place where the human sits in the workflow is wrong.",
      ],
    },
    {
      number: "02",
      title: "Signals and research replace volume and templates",
      stats: [
        {
          year: "In 2028",
          value: "73%",
          icon: ICON_PATHS.trendIgnore,
          copy: "of B2B buyers now ignore outreach that lacks contextual relevance.",
        },
        {
          year: "In 2030",
          value: "5x",
          icon: ICON_PATHS.trendReplyRates,
          copy: "reply rates for signal-based outreach versus generic cold email.",
        },
      ],
      pull: "Volume used to be the lever. Now relevance is, and relevance requires signals the database was never built to carry.",
      paragraphs: [
        "Every buyer's inbox has trained them to recognize AI outreach by its shape. Name, company, recent funding, one-sentence ask. They delete before they finish reading.",
        "What still works is outreach written from something real. A leadership change. A hiring pattern that signals departmental strain. Commentary in a recent earnings call. A partner already converted. The AI that produces that outreach is doing research first and writing second.",
      ],
    },
    {
      number: "03",
      title: "The stack collapses into the platform",
      stats: [
        {
          year: "In 2028",
          value: "12 to 1",
          icon: ICON_PATHS.trendTwelveToOne,
          copy: "is where B2B sales stacks are heading, with teams consolidating from 10-15 tools down to unified platforms.",
        },
        {
          year: "In 2030",
          value: "60 to 75%",
          icon: ICON_PATHS.trendAutomation,
          copy: "reduction in tool spend for teams that consolidate, plus elimination of integration cost.",
        },
      ],
      pull: "Consolidation used to be a cost story. In the next five years, it becomes the difference between AI that works and AI that doesn't.",
      paragraphs: [
        "AI trained on fragmented data doesn't work. A model can only learn from the data it can see, and every tool boundary is a boundary in what it can see. Every integration is a place where context breaks. Every siloed record is a signal the AI will never connect to the outcome it should have predicted.",
        "That's the pressure most teams haven't felt yet. They're still evaluating consolidation on cost, and the cost math is real. But the real pressure coming is that the AI layer they're about to bet their pipeline on literally cannot function on the stack they have today.",
      ],
      showSeparator: false,
    },
  ];

  return `
    <section class="slide slide--light slide--10 slide10-page" aria-label="10 · B The Horizon" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide10-layout">
        <div class="slide10-main">
        <aside class="slide10-intro">
          <div class="slide10-intro__content">
          <p class="slide10-eyebrow">10 · B The Horizon</p>
          <h1 class="slide10-title" aria-label="The Next Five Years of B2B Data">
            <span class="slide10-title__line">THE NEXT FIVE</span>
            <span class="slide10-title__line">YEARS OF B2B</span>
            <span class="slide10-title__line">DATA</span>
          </h1>
          <div class="slide10-intro__copy">
            <p>The market we just mapped is already changing.</p>
            <p>Three forces are rewriting what a B2B data platform is supposed to be, and which ones will still be relevant when the rewriting settles.</p>
          </div>
          </div>

          <div class="slide10-divider" aria-hidden="true">
            ${renderSlideDivider()}
          </div>
        </aside>

        <div class="slide10-trends" aria-label="Trend sections">
          ${trends.map(renderSlide10Trend).join("")}
        </div>
        </div>

        <section class="slide10-compound" aria-label="The Compound Effect">
          <div class="slide10-compound__title">The Compound Effect</div>
          <div class="slide10-compound__panel">
            <div class="slide10-compound__copy">
              The three forces do not operate independently. Agentic AI needs deep signals to run on. Signals need unified data to learn from. Unified data only exists on consolidated platforms. Pull one thread and the others tighten.
            </div>
            <div class="slide10-compound__connector" aria-hidden="true">
              ${renderSlide10CompoundConnector()}
            </div>
            <div class="slide10-compound__copy slide10-compound__copy--muted">
              The platforms still relevant in 2030 will be the ones already built this way. The rest will be adding features to architectures that were never designed to hold them.
            </div>
          </div>
        </section>

        <section class="slide10-callout" aria-label="Closing callout">
          <div class="slide10-callout__icon" aria-hidden="true">
            <img class="slide10-callout__icon-svg" src="${ICON_PATHS.platformData}" alt="" />
          </div>
          <p class="slide10-callout__copy">Every vendor in this report is trying to answer some version of the same question. One of them built the answer from the sales floor up.</p>
        </section>
      </div>

      ${includeFooter ? renderBottomBar() : ""}
    </section>
  `;
}

const slide11TrainingStats = [
  { value: "2 000+", lines: ["B2B", "brands"], icon: ICON_PATHS.heroBrands },
  { value: "40+ M", lines: ["Sales", "interactions"], icon: ICON_PATHS.heroInteractions },
  { value: "50+", lines: ["Industry", "verticals"], icon: ICON_PATHS.heroVerticals },
  { value: "16", lines: ["Years", "of experience"], icon: ICON_PATHS.heroExperience },
];

const slide11PlatformColumns = [
  {
    label: "DATA",
    icon: ICON_PATHS.platformData,
    title: "300M+ verified contacts",
    body: "across 24M+ accounts. 1,500+ enrichment fields per company. Sourced across 20+ databases, continuously refreshed.",
  },
  {
    label: "INTELLIGENCE",
    icon: ICON_PATHS.platformIntelligence,
    title: "Natural-language search",
    body: "AI qualification, lookalike modeling, intent signals. Accounts arrive filtered for fit and prioritized by readiness.",
  },
  {
    label: "EXECUTION",
    icon: ICON_PATHS.platformExecution,
    title: "Email, LinkedIn, and phone",
    body: "coordinated in one workflow. Deliverability built in. Agentic AI adjusts timing and messaging as the campaign runs.",
  },
];

const slide11StopDoing = [
  { title: "Sorting filter-matched", icon: ICON_PATHS.stopSorting, body: "lists for the small slice that actually fits." },
  { title: "Waiting", icon: ICON_PATHS.stopWaiting, body: "for intent signals that arrive a week late." },
  { title: "Fighting deliverability", icon: ICON_PATHS.stopDeliverability, body: "as a quarterly fire drill" },
  { title: "Paying", icon: ICON_PATHS.stopPaying, body: "twelve invoices to run one campaign." },
  { title: "Spending more time", icon: ICON_PATHS.stopSpending, body: "on setup than selling." },
];

const slide11Deliverables = [
  { title: "4-7x", icon: ICON_PATHS.deliversLift, body: "conversion lift vs. traditional outreach" },
  { title: "80%", icon: ICON_PATHS.deliversAutomated, body: "of repetitive tasks, automated" },
  { title: "50%", icon: ICON_PATHS.deliversPrecision, body: "AI precision vs. manual filtering" },
  { title: "90%+", icon: ICON_PATHS.deliversAccuracy, body: "high contact data accuracy" },
  { title: "Under 30 min", icon: ICON_PATHS.deliversUnder30, body: "from ICP to live outbound campaign" },
];

const slide11Badges = [
  { src: "assets/report-on-business-2023.png", width: 203, label: "Report on Business Canada's Top Growing Companies 2023" },
  { src: "assets/clients-love-us.png", width: 61, label: "Clients Love Us" },
  { src: "assets/top_the_manifest_lead_generation_company_2023_award 1.png", width: 50, label: "Top The Manifest Lead Generation Company 2023 Award" },
  { src: "assets/clutch_1000_2022_award.png", width: 88, label: "Clutch 1000 2022 Award" },
  { src: "assets/top_clutch.png", width: 54, label: "Top Clutch" },
  { src: "assets/top_clutch 2.png", width: 67, label: "Top Clutch 2023" },
  { src: "assets/local-excellence.png", width: 73, label: "Local Excellence San Francisco 2023" },
];

function renderSlide11Icon(src, tone = "lime") {
  return `
    <span class="slide11-icon slide11-icon--${tone}" aria-hidden="true">
      <img class="slide11-icon__image" src="${src}" alt="" />
    </span>
  `;
}

function renderSlide11TrainingStat(stat) {
  return `
    <article class="slide11-training-stat">
      ${renderSlide11Icon(stat.icon ?? slide11HeroIcon, "dark")}
      <div class="slide11-training-stat__copy">
        <div class="slide11-training-stat__value">${escapeHtml(`${stat.value} ${stat.lines[0]}`)}</div>
        <div class="slide11-training-stat__label">${escapeHtml(stat.lines[1])}</div>
      </div>
    </article>
  `;
}

function renderSlide11PlatformColumn(column) {
  return `
    <article class="slide11-platform-column">
      <div class="slide11-platform-column__head">
        ${renderSlide11Icon(column.icon ?? slide11PlatformIcon)}
        <div class="slide11-platform-column__title-group">
          <p class="slide11-platform-column__label">${escapeHtml(column.label)}</p>
          <p class="slide11-platform-column__title">${escapeHtml(column.title)}</p>
        </div>
      </div>
      <p class="slide11-platform-column__body">${escapeHtml(column.body)}</p>
    </article>
  `;
}

function renderSlide11ListItem(item, tone) {
  const icon = item.icon ?? (tone === "red" ? slide11NegativeIcon : slide11PlatformIcon);
  return `
    <article class="slide11-list-item slide11-list-item--${tone}">
      ${renderSlide11Icon(icon, tone)}
      <div class="slide11-list-item__copy">
        <p class="slide11-list-item__title">${escapeHtml(item.title)}</p>
        <p class="slide11-list-item__body">${escapeHtml(item.body)}</p>
      </div>
    </article>
  `;
}

function renderSlide11Badge(badge) {
  return `
    <div class="slide11-badge" style="--slide11-badge-width:${badge.width}px;">
      <img src="${badge.src}" alt="${escapeHtml(badge.label)}" width="${badge.width}" height="74" />
    </div>
  `;
}

function renderSlide11BadgeDuplicate(badge) {
  return `
    <div class="slide11-badge slide11-badge--duplicate" style="--slide11-badge-width:${badge.width}px;">
      <img src="${badge.src}" alt="" width="${badge.width}" height="74" />
    </div>
  `;
}

function renderSlide11({ includeFooter = true, slideIndex = 11 } = {}) {
  return `
    <section class="slide slide11" aria-label="${escapeHtml(slides[slideIndex].title)}" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide11-background" aria-hidden="true">
        <div class="slide11-background__shape">
          <video class="slide11-background__media" autoplay muted loop playsinline preload="auto">
            <source src="video/11.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="slide11-container">
        <section class="slide11-section-header" aria-label="Where data access and execution meet">
          <div class="slide11-hero-main">
            <div class="slide11-hero-title-block">
              <p class="slide11-eyebrow">11 &middot; Built for where the market is going.</p>
              <h1 class="slide11-hero-title">WHERE DATA ACCESS AND EXECUTION MEET</h1>
            </div>
            <div class="slide11-hero-divider slide10-divider" aria-hidden="true">
              ${renderSlideDivider("slide11-divider-gradient")}
            </div>
            <div class="slide11-hero-support">
              <div class="slide11-hero-statement">
                <p class="slide11-hero-statement__lead">Now that you know where the market is going, here's what we built to meet it there.</p>
                <div class="slide11-hero-arrow" aria-hidden="true">
                  <svg class="slide11-hero-arrow__svg" width="53" height="7.36396" viewBox="0 0 53 7.36396" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M0.5 3.18198H0V4.18198H0.5V3.68198V3.18198ZM52.8536 4.03553C53.0488 3.84027 53.0488 3.52369 52.8536 3.32843L49.6716 0.146447C49.4763 -0.0488155 49.1597 -0.0488155 48.9645 0.146447C48.7692 0.341709 48.7692 0.658291 48.9645 0.853554L51.7929 3.68198L48.9645 6.51041C48.7692 6.70567 48.7692 7.02225 48.9645 7.21751C49.1597 7.41278 49.4763 7.41278 49.6716 7.21751L52.8536 4.03553ZM0.5 3.68198V4.18198H52.5V3.68198V3.18198H0.5V3.68198Z" fill="#8DB654"/>
                  </svg>
                </div>
                <p class="slide11-hero-statement__mid">We didn't theorize<br />this problem.</p>
                <p class="slide11-hero-statement__accent">
                  <span class="slide11-hero-statement__accent-text">We lived it.</span>
                  <svg class="slide11-hero-statement__accent-underline" width="89" height="5" viewBox="0 0 89 5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M0.787737 3.4956C1.306 3.40456 1.91118 3.33675 2.42222 3.28976C2.58343 3.27482 2.51568 3.31769 2.6159 3.31044C2.81301 3.2961 3.00153 3.25365 3.21462 3.23986C3.28548 3.23542 3.20519 3.29942 3.27952 3.29355C3.68613 3.26117 4.02087 3.20214 4.44425 3.1563C6.37802 2.95127 8.30537 2.72242 10.2792 2.5028C10.9515 2.42768 11.7149 2.38294 12.4036 2.27982C12.4803 2.26817 12.4289 2.22791 12.4432 2.22239C12.6667 2.13723 12.6011 2.23869 12.7537 2.23301C13.3588 2.21029 14.0497 2.13391 14.6219 2.05031C14.8691 2.01418 14.6096 1.95184 14.8659 1.97417C14.8837 1.97563 14.8261 2.03146 14.895 2.02883C15.051 2.02276 15.3458 1.98044 15.4679 1.97054C15.7032 1.9517 15.736 1.94751 15.9537 1.92363C16.2499 1.89157 16.6076 1.87624 16.9294 1.82965C16.9981 1.81956 16.9013 1.77977 17.0104 1.75918C17.1206 1.73847 17.4099 1.71109 17.5069 1.71245C17.6047 1.71369 17.5679 1.75735 17.586 1.76447C17.7347 1.82496 18.0565 1.68398 18.0993 1.67677C18.8835 1.54768 19.5555 1.53757 20.2946 1.46144C20.861 1.40301 21.4458 1.32421 21.9815 1.27411C22.6209 1.21454 23.1538 1.19047 23.7713 1.12758C23.8364 1.12101 23.7546 1.0695 23.8341 1.06137C24.6812 0.974879 25.5144 0.905792 26.3612 0.871996C26.4457 0.868702 26.3418 0.929704 26.4264 0.929503C26.9448 0.926902 27.7694 0.960317 28.0578 0.71075C28.4078 0.690828 28.8329 0.665861 29.1491 0.686621C29.353 0.699973 29.1616 0.771489 29.4073 0.728194C29.4628 0.71851 29.3863 0.674913 29.4697 0.66412C29.8207 0.618756 30.2079 0.60553 30.5553 0.554302C30.6259 0.543767 30.6033 0.501071 30.6228 0.49164C30.7873 0.414782 31.0765 0.500818 31.1383 0.504177C31.609 0.528393 31.9489 0.481994 32.3853 0.454002C32.4865 0.447563 32.3629 0.396279 32.4602 0.387962C32.9656 0.345582 33.4825 0.317624 33.9825 0.31362C34.0931 0.31292 33.9948 0.369615 34.0478 0.371871C34.2813 0.381277 34.327 0.282764 34.5503 0.290351C34.5974 0.291841 34.5735 0.336654 34.5824 0.340906C34.7203 0.407708 34.8301 0.295375 34.8643 0.291081C35.2956 0.234544 35.5802 0.329711 36.0014 0.292047C36.0517 0.287451 35.9352 0.238569 36.0768 0.229012C37.0142 0.165337 38.0211 0.135356 38.9465 0.145455C39.0913 0.146923 38.9895 0.19186 38.9986 0.19661C39.1518 0.270448 39.2449 0.160833 39.2924 0.155175C39.6675 0.113311 40.0182 0.191751 40.2667 0.0579533C41.5343 0.0568675 42.8101 -0.00308123 44.0566 0.0388363C44.3619 0.0491534 44.6699 0.0656259 44.9803 0.0905131C45.0002 0.0919873 44.964 0.144063 45.0038 0.146781C45.4844 0.180545 45.3939 0.0985063 45.7155 0.00307895C45.7946 -0.020894 46.0332 0.10298 46.0544 0.112186C46.1315 0.145922 46.0497 0.222488 46.0756 0.229203C46.29 0.282234 46.2591 0.0238896 46.5516 0.0294979C46.5608 0.0301095 46.5214 0.0767569 46.5458 0.0819595C46.6218 0.0982794 46.698 0.081012 46.7726 0.0989448C46.9435 0.140466 47.0015 0.266903 47.2668 0.20055C47.2995 0.191942 47.2564 0.0445133 47.5144 0.0581724C47.617 0.0635919 48.0755 0.0742037 48.2047 0.0878599C48.3334 0.101328 48.2433 0.145644 48.2525 0.147967C48.5983 0.221252 48.4657 0.242903 48.6372 0.340821C48.809 0.438535 48.768 0.217978 48.8403 0.196006C48.9126 0.174068 49.1688 0.234703 49.2285 0.254842C49.2899 0.275002 49.2114 0.302033 49.2662 0.314188C49.6296 0.394031 49.431 0.211614 49.5531 0.181502C49.8416 0.110354 50.0582 0.281887 50.3204 0.309088C50.3913 0.316457 50.3349 0.276976 50.3984 0.276269C50.6493 0.274 50.8029 0.331651 51.0858 0.298369C51.1324 0.29295 51.366 0.206271 51.5112 0.285206C51.5317 0.296566 51.4699 0.334052 51.5759 0.348356C51.734 0.369759 52.0206 0.393197 52.1931 0.388725C52.3204 0.385392 52.1785 0.311107 52.3371 0.340242C52.4076 0.353255 52.274 0.385226 52.4066 0.406436C52.5393 0.427596 52.8765 0.444348 53.0042 0.450226C53.132 0.456033 53.0649 0.401582 53.0754 0.398757C53.139 0.382743 53.386 0.372449 53.4078 0.3738C54.5082 0.43139 55.5103 0.581902 56.5815 0.628935C56.6653 0.632693 56.6133 0.575537 56.6262 0.575562C56.9141 0.573549 56.6783 0.699041 56.8749 0.760663C56.8537 0.650597 56.9703 0.678535 57.1731 0.681331C57.2708 0.682602 57.2208 0.636936 57.23 0.633299C57.3789 0.580281 57.4735 0.66974 57.4981 0.688426C57.5891 0.7572 57.6986 0.691991 57.7606 0.73811C57.8226 0.783921 57.6684 0.833438 57.8622 0.847156C57.9194 0.812579 57.7831 0.700766 57.9315 0.695442C58.4915 0.67481 59.52 0.835773 59.9649 0.880841C60.4093 0.92555 60.5537 0.930595 60.8117 0.966354C61.2776 1.03124 61.1124 0.941833 61.4058 0.932459C61.7 0.923316 61.5425 1.09535 61.5809 1.13856C61.6185 1.18171 61.6669 1.14485 61.716 1.17105C61.765 1.19724 61.6525 1.21457 61.7714 1.23316C61.89 1.25168 62.2255 1.21028 62.2716 1.17267C62.3694 1.09295 62.2296 0.987687 62.5446 1.04836C62.5627 1.05191 62.4991 1.09505 62.5686 1.10619C63.1215 1.19321 63.6934 1.24801 64.248 1.33338C64.3239 1.34517 64.2506 1.3926 64.2947 1.40007C64.7538 1.47816 64.597 1.37177 64.8596 1.295C64.79 1.42382 64.9223 1.51918 65.2712 1.55366C65.481 1.57449 65.4495 1.51228 65.5905 1.4843C65.6329 1.47585 65.7788 1.53073 65.8086 1.50583C65.9069 1.42451 65.776 1.30976 66.1346 1.38562C66.1503 1.3891 66.0948 1.43342 66.1494 1.44183C66.5021 1.49646 66.5539 1.40645 66.9365 1.43334C67.2336 1.45412 67.7664 1.56645 68.1068 1.61117C68.0842 1.7612 68.4101 1.76008 68.5512 1.66975C68.7723 1.69714 69.0069 1.71587 69.2223 1.75322C69.2961 1.76599 69.2426 1.80446 69.2515 1.81017C69.3874 1.89939 69.495 1.80859 69.5435 1.80975C70.0696 1.82693 70.4763 1.94849 70.9799 1.92795C70.9979 1.9272 71.0382 1.82568 71.1631 1.91678C71.1711 1.923 71.0013 1.95249 71.2353 1.982C71.4694 2.01152 71.9019 2.11637 72.2267 2.10382C72.3063 2.10094 72.5074 2.03756 72.6631 2.12242C72.6835 2.13386 72.6567 2.16122 72.6857 2.18141C72.7794 2.24593 72.8458 2.14635 72.9523 2.24948C73.0587 2.35261 73.2934 2.44752 73.6238 2.42281C73.6343 2.4222 73.7206 2.34722 73.8217 2.36026C73.9827 2.38108 74.2101 2.42519 74.3848 2.44505C74.4675 2.45441 74.4206 2.39621 74.4351 2.39693C74.9964 2.43306 75.3659 2.52378 75.9579 2.61508C76.067 2.632 76.3881 2.59867 76.5889 2.6799C76.8088 2.76887 76.5464 2.99594 77.0721 2.99828C77.2806 2.99906 77.6043 2.70999 77.9631 2.92472C78.6914 2.97267 79.3921 3.14804 80.1236 3.1813C80.1582 3.18306 80.278 3.10659 80.3575 3.11805C80.4756 3.13524 80.5344 3.18573 80.6175 3.19926C80.9692 3.25751 81.2662 3.25935 81.62 3.31132C81.7493 3.33032 81.6987 3.36806 81.8514 3.39057C82.0033 3.41296 82.1118 3.36878 82.3089 3.42305C82.4535 3.46368 82.6 3.60256 82.8092 3.64435C82.8323 3.52957 82.9781 3.55138 83.2307 3.55411C83.2792 3.55457 83.2335 3.50742 83.2567 3.50555C83.3512 3.49708 83.4305 3.54174 83.5186 3.53058C83.54 3.52793 83.5463 3.48852 83.5641 3.48412C83.7204 3.44587 83.9682 3.56997 84.0066 3.59096C84.1624 3.67198 84.2439 3.63071 84.362 3.67039C84.4792 3.70997 84.2955 3.71438 84.4338 3.74757C84.7177 3.8159 85.1388 3.86736 85.4181 3.90801C85.5359 3.92485 85.4628 3.86095 85.4797 3.8621C85.7534 3.88649 85.9952 3.97759 86.1409 3.89094C86.2556 4.18409 86.3111 3.88792 86.6562 3.99231C86.683 4.0006 86.7004 4.13408 86.5912 4.13781C86.4854 4.14202 86.3034 4.07534 86.1544 4.08436C86.1212 4.08672 85.907 4.1794 85.8772 4.18268C85.651 4.20914 85.6413 4.01213 85.6316 4.00001C85.4998 3.86563 85.2503 3.96326 85.1825 3.96303C84.8885 3.96423 84.5949 3.89644 84.3631 3.89469C84.2 3.89176 84.1665 4.01534 84.0376 3.99391C83.599 3.92147 83.4756 3.72616 83.0548 3.82475C82.9628 3.84552 83.0338 3.99495 82.7307 3.84449C82.7149 3.83543 82.4765 3.70304 82.3467 3.74957C82.3294 3.75531 82.3246 3.79548 82.3026 3.796C82.1553 3.7987 82.0621 3.75391 81.8988 3.74799C81.7353 3.74207 81.535 3.73903 81.3457 3.70053C81.2275 3.67684 81.1066 3.58515 81.0548 3.55982C80.9145 3.48802 80.743 3.55372 80.6579 3.47786C80.5719 3.40155 80.7692 3.32794 80.5266 3.25455C80.504 3.35758 80.469 3.46183 80.4407 3.56473C79.8767 3.48849 79.3862 3.39192 78.8252 3.32617C78.7564 3.31823 78.8197 3.3831 78.7456 3.37602C78.4349 3.34612 78.188 3.27479 77.8679 3.25135C77.6232 3.2338 77.3384 3.25905 77.0825 3.24297C76.9446 3.10497 76.565 3.09989 76.2893 3.0556C76.1928 3.04014 76.2031 3.00904 76.1352 2.99031C75.8782 2.9204 75.988 3.04062 75.9142 3.0486C75.594 3.08214 75.6027 2.84095 75.2455 2.80453C75.2268 2.80253 74.9804 2.90247 74.9473 2.90662C74.7378 2.93434 74.9189 2.85834 74.7925 2.83392C74.5613 2.78929 74.4018 2.73978 74.1199 2.74477C74.0387 2.74651 73.8426 2.80419 73.6961 2.72506C73.6769 2.7147 73.6929 2.67389 73.677 2.66955C73.3874 2.59452 73.3639 2.72589 73.1895 2.75129C73.0151 2.77667 72.7617 2.65535 72.7108 2.62292C72.5777 2.53886 72.822 2.60607 72.8302 2.60025C72.9286 2.5309 72.7348 2.5227 72.5878 2.49926C72.5803 2.36702 72.3756 2.35179 72.4362 2.4756C72.4421 2.48904 72.5588 2.48997 72.5878 2.49926C72.4404 2.61148 72.2225 2.60338 71.9887 2.45677C71.8796 2.38812 71.9965 2.3353 71.6424 2.31993C71.4813 2.3129 71.5332 2.4091 71.3891 2.41779C71.0593 2.4375 70.6464 2.30789 70.3171 2.28551C70.1967 2.27729 70.3082 2.33886 70.2257 2.33493C70.0066 2.32465 69.8178 2.26721 69.5954 2.26246C69.5752 2.26209 69.6185 2.31852 69.5499 2.31185C69.0248 2.26184 68.5866 2.18259 68.0445 2.12559C67.7845 2.09824 67.3065 2.07794 67.0414 2.04548C66.5763 1.98879 66.0058 1.85699 65.6006 1.83582C65.3369 1.82186 65.3908 1.87889 65.2755 1.90299C65.054 1.94987 64.6836 1.79207 64.6337 1.76841C64.6323 1.76763 64.8582 1.77696 64.7408 1.7392C64.6762 1.6777 64.6363 1.76841 64.6337 1.76841C64.6012 1.75301 64.1524 1.69888 64.0618 1.70037C64.0126 1.70118 64.0353 1.75232 64.0098 1.75183C63.4019 1.73891 62.8038 1.69688 62.194 1.61999C62.1833 1.61806 62.2043 1.5651 62.1792 1.56124C61.827 1.50575 61.5963 1.55274 61.3019 1.56721C61.0076 1.5817 60.7779 1.54899 60.6133 1.44113C60.3926 1.43442 60.0803 1.36702 59.901 1.32718C59.7216 1.28731 59.6877 1.39123 59.6716 1.39203C59.1684 1.41885 58.8855 1.33545 58.3698 1.28623C58.1251 1.26264 57.6354 1.24128 57.3687 1.23346C57.1578 1.22739 57.033 1.19339 56.8384 1.19541C56.812 1.19567 56.8351 1.24476 56.827 1.246C56.6071 1.28708 56.7191 1.1791 56.6759 1.15532C56.5194 1.06892 56.4236 1.022 56.1429 1.03805C56.0783 1.04169 55.8805 1.1951 55.7633 1.19696C55.611 1.19909 55.6721 1.14335 55.5126 1.14719C55.499 1.14747 55.4993 1.1844 55.4016 1.1763C54.9477 1.13917 54.4578 1.08656 53.9826 1.06155C53.9179 1.05802 53.9972 1.12132 53.9038 1.11719C53.4652 1.09772 52.9891 1.0683 52.5655 1.01797C52.4604 1.00535 52.5287 0.968087 52.5065 0.954721C52.3699 0.873724 52.1654 0.969894 52.1325 0.970231C51.3485 0.980916 50.7614 0.856364 49.9606 0.86907C49.917 0.86991 49.5803 0.970881 49.4367 0.867217C49.4269 0.860298 49.2846 0.754333 49.1533 0.818245C49.145 0.822246 49.2343 0.877247 49.0755 0.866173C48.9141 0.855023 48.6538 0.880494 48.4354 0.816591C48.3663 0.796441 48.2046 0.690969 47.9953 0.764651C47.9814 0.769749 47.6578 0.941077 47.5483 0.813586C47.5301 0.792612 47.5548 0.661214 47.3049 0.72245C47.2567 0.734352 47.3428 0.765916 47.2163 0.78114C47.0226 0.804653 46.7687 0.76355 46.5329 0.817623C46.4917 0.827187 46.3161 0.913286 46.1786 0.842987C46.157 0.831976 46.1991 0.788667 46.1258 0.782488C45.781 0.752984 45.4076 0.777534 45.0502 0.744035C44.9238 0.732289 44.989 0.661627 44.8574 0.641597C44.7258 0.621543 44.462 0.601944 44.3259 0.634211C44.1898 0.666478 44.3379 0.780106 44.1347 0.788942C44.1086 0.790087 44.0826 0.791149 44.0566 0.792132C43.2038 0.824405 42.3237 0.771636 41.4623 0.780116C41.3291 0.781477 41.4405 0.819645 41.2439 0.824731C40.5154 0.84281 39.2762 0.920312 38.6473 0.859257C38.1448 0.809806 38.772 0.732522 38.3886 0.719529C38.2034 0.713486 38.0082 0.853659 37.9637 0.85971C37.5283 0.920411 37.2181 0.876144 36.8299 0.912699C36.7493 0.920311 36.8311 0.969865 36.7624 0.975765C36.528 0.996405 36.2791 0.985039 36.0535 1.00113C35.9522 1.00848 35.973 1.04827 35.8796 1.05003C35.6561 1.05475 35.456 1.04843 35.239 1.02218C35.2191 1.01979 35.3491 0.961702 35.185 0.968948C34.9195 0.980846 34.5869 0.962212 34.2821 1.01951C34.1917 1.03668 34.1938 1.12996 33.9938 1.07759C33.9518 1.06669 33.9976 0.951587 33.7748 1.06231C33.7362 1.08076 33.3639 1.23488 33.1711 1.16305C33.1202 1.14413 32.9881 1.06081 32.8797 1.08235C32.865 1.08562 32.9277 1.13173 32.8374 1.14254C32.5193 1.17982 32.1838 1.19713 31.8558 1.23563C31.7683 1.24601 31.9024 1.28866 31.7723 1.30247C31.4152 1.34046 30.9665 1.35948 30.6141 1.36929C30.4842 1.3728 30.5705 1.32334 30.5608 1.31938C30.4036 1.25478 30.3216 1.36385 30.2718 1.37359C29.9614 1.43284 29.7202 1.40297 29.4332 1.43809C29.354 1.44766 29.4141 1.49206 29.3986 1.49764C29.2379 1.55296 29.3533 1.45579 29.2487 1.45427C28.9556 1.44974 28.6315 1.47959 28.3378 1.50976C28.23 1.52092 28.356 1.56758 28.2592 1.57695C27.6858 1.63354 27.0882 1.67851 26.5265 1.69589C26.4207 1.69907 26.4831 1.64979 26.4603 1.64175C26.3034 1.5853 26.0888 1.69976 26.0385 1.71332C25.8094 1.77512 25.7157 1.74469 25.5112 1.77025C24.5149 1.89536 23.2733 1.98667 22.3278 2.06371C21.0937 2.16446 20.1296 2.22144 18.9635 2.35554C18.8883 2.36415 18.9703 2.4139 18.9056 2.42206C18.0689 2.52489 17.2607 2.58998 16.4246 2.70001C16.3566 2.70886 16.4608 2.75268 16.352 2.76874C16.1283 2.80212 15.8487 2.83052 15.6195 2.83875C15.5062 2.84303 15.6515 2.77901 15.5377 2.78428C15.2727 2.79645 14.9924 2.82447 14.7275 2.8638C14.6149 2.88065 14.7919 2.91702 14.6451 2.93456C13.6467 3.05512 12.6689 3.1803 11.6324 3.23222C11.5624 3.23564 11.4877 3.12931 11.3439 3.16891C11.3368 3.2018 11.3419 3.23885 11.3412 3.27316C9.87298 3.47018 8.44234 3.61012 6.97156 3.79507C6.91165 3.80261 7.02285 3.84934 6.90708 3.86424C6.19437 3.95611 5.53983 4.05957 4.82447 4.09474C4.75571 4.09803 4.77517 3.98767 4.57931 4.03034C4.5414 4.03839 4.22013 4.09617 4.14385 4.12994C4.13336 4.1349 4.19707 4.17654 4.09651 4.19165C3.53142 4.27602 2.92223 4.34833 2.31576 4.40242C2.22167 4.41052 2.3136 4.34407 2.24679 4.34936C1.79987 4.38343 1.24117 4.50343 0.81132 4.51684C0.478409 4.5322 0.585708 4.42403 0.424505 4.35624C0.425938 4.34312 0.185127 4.37636 0.189114 4.32271C0.148038 4.19523 0.206929 4.04036 0.153124 3.90596C0.135943 3.89316 0.126022 3.89518 0.0337845 3.904C-0.00302638 3.90463 -0.016951 3.89643 0.0304019 3.85235C0.0874288 3.83893 0.196415 3.79831 0.273209 3.76197C0.308097 3.7395 0.239727 3.69549 0.301428 3.66424C0.351755 3.63468 0.420129 3.66997 0.529581 3.62798C0.638664 3.58575 0.597389 3.53028 0.787737 3.4956Z" fill="#8DB654"/>
                  </svg>
                </p>
              </div>

              <div class="slide11-training">
                <p class="slide11-training__title">Data the agentic AI platform was trained on:</p>
                <div class="slide11-training__stats">
                  ${slide11TrainingStats.map(renderSlide11TrainingStat).join("")}
                </div>
              </div>
            </div>
          </div>

          <div class="slide11-content-divider" aria-hidden="true">
            <img src="${slide11HeroDivider}" alt="" />
          </div>

          <div class="slide11-hero-paragraphs">
            <p class="slide11-hero-paragraph">For nearly two decades, our onshore team has been running outbound for B2B clients, absorbing every pattern this report describes. The stale lists. The filter-built pipelines. The twelve-tool stack nobody fully owns. The cost that shows up everywhere except the invoice. If this report landed because it described what your team is feeling, we understand.</p>
            <p class="slide11-hero-paragraph"><span>We were in the same boat.</span> That's why we built this platform, because the tools for running outbound had stopped keeping up with the work. But we didn't just build it; we trained it using our knowledge, experience, and workflows.</p>
            <div class="slide11-logo" aria-label="Martal Group logo">
              <img src="${slide11Logo}" alt="Martal Group" />
            </div>
          </div>
        </section>

        <div class="slide11-main-card">
          <section class="slide11-platform-card" aria-label="Martal platform">
            <div class="slide11-card-content">
              <div class="slide11-card-intro">
                <h2 class="slide11-card-heading">One platform does what twelve used to.</h2>
                <p class="slide11-card-copy">Instead of stitching together a database, an enrichment tool, a sequencer, a dialer, a deliverability layer, and a signal feed,one system owns the full flow.<br />What most teams assemble across their stack, <span>Martal runs as a single engine.</span></p>
              </div>

              <div class="slide11-platform-columns">
                ${slide11PlatformColumns.map(renderSlide11PlatformColumn).join("")}
              </div>
              <p class="slide11-card-note">Managed execution is available as an add-on for teams that want the engine and the operators together.</p>
            </div>

            <div class="slide11-card-divider" aria-hidden="true">
              <img src="${slide11CardDivider}" alt="" />
            </div>

            <div class="slide11-card-lower">
              <section class="slide11-card-column">
                <h3 class="slide11-card-column__heading">Manual to automated outbound</h3>
                <div class="slide11-card-column__body">
                  <p>Outbound is slowed by repetitive tasks and fragmented tools.</p>
                  <p>A unified system automates qualification, enrichment, and execution with real-time signals &mdash; reducing overhead, speeding up campaigns, and focusing teams on high-quality opportunities.</p>
                </div>
              </section>

              <section class="slide11-card-column">
                <h3 class="slide11-card-column__heading">What your team stops doing.</h3>
                <div class="slide11-list slide11-list--red">
                  ${slide11StopDoing.map((item) => renderSlide11ListItem(item, "red")).join("")}
                </div>
              </section>

              <section class="slide11-card-column">
                <h3 class="slide11-card-column__heading">What the platform delivers.</h3>
                <div class="slide11-list slide11-list--lime">
                  ${slide11Deliverables.map((item) => renderSlide11ListItem(item, "lime")).join("")}
                </div>
              </section>
            </div>
          </section>

          <section class="slide11-about" aria-label="About Martal Group">
            <div class="slide11-about-heading">
              <h2 class="slide11-about-title">About Martal Group</h2>
            </div>
            <div class="slide11-about-content">
              <p class="slide11-about-lead">Martal Group is a global B2B lead generation and sales acceleration partner that helps companies generate predictable pipeline and accelerate revenue growth.</p>
              <div class="slide11-about-grid">
                <article class="slide11-about-item">
                  <div class="slide11-about-item__head">
                    ${renderSlide11Icon(ICON_PATHS.aboutYears)}
                    <div>
                      <p class="slide11-about-item__kicker">more than</p>
                      <p class="slide11-about-item__title">16 years</p>
                    </div>
                  </div>
                  <p class="slide11-about-item__body">Supported by more than 16 years of outbound expertise and a team of onshore sales professionals, Martal executes omnichannel lead generation and appointment setting programs that enable organizations to scale sales capacity without the cost and complexity of building large internal SDR teams.</p>
                </article>
                <article class="slide11-about-item">
                  <div class="slide11-about-item__head">
                    ${renderSlide11Icon(ICON_PATHS.aboutAi)}
                    <div>
                      <p class="slide11-about-item__kicker">proprietary</p>
                      <p class="slide11-about-item__title">AI SDR</p>
                    </div>
                  </div>
                  <p class="slide11-about-item__body">Its proprietary AI SDR serves as the foundation for Martal's outbound programs, combining a large B2B contact database, automated enrichment, and AI-driven qualification to help sales teams identify and prioritize the accounts most likely to convert.</p>
                </article>
              </div>
            </div>
          </section>

            <section class="slide11-cta" aria-label="Book a demo">
              <div class="slide11-cta-panel">
                <img class="slide11-cta-panel__back" src="${slide11CtaBack}" alt="" />
                <div class="slide11-cta-copy">
                  <h2 class="slide11-cta-title">READY TO CLOSE THE GAP?</h2>
                  <p class="slide11-cta-text">See how Martal builds, enriches, and executes your outbound pipeline, delivering meetings,<br /><span class="slide11-cta-text__nowrap">not just data.</span></p>
                </div>
              </div>
              <a class="slide11-cta-button" href="https://martal.ca/consultation/" target="_blank" rel="noopener noreferrer" aria-label="Book a demo">
                <span class="slide11-cta-button__icon" aria-hidden="true">
                  <svg class="slide11-cta-button__icon-svg slide11-cta-button__icon-svg--default" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M13.333 21.6667V7.5C13.333 6.83696 13.5964 6.20107 14.0652 5.73223C14.5341 5.26339 15.17 5 15.833 5C16.496 5 17.1319 5.26339 17.6008 5.73223C18.0696 6.20107 18.333 6.83696 18.333 7.5V20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.333 19.1666V15.8333C18.333 15.505 18.3977 15.1799 18.5233 14.8766C18.6489 14.5733 18.8331 14.2977 19.0652 14.0655C19.2974 13.8334 19.573 13.6493 19.8763 13.5236C20.1796 13.398 20.5047 13.3333 20.833 13.3333C21.1613 13.3333 21.4864 13.398 21.7897 13.5236C22.093 13.6493 22.3686 13.8334 22.6008 14.0655C22.8329 14.2977 23.0171 14.5733 23.1427 14.8766C23.2683 15.1799 23.333 15.505 23.333 15.8333V20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.333 17.5C23.333 16.837 23.5964 16.2011 24.0652 15.7322C24.5341 15.2634 25.17 15 25.833 15C26.496 15 27.1319 15.2634 27.6008 15.7322C28.0696 16.2011 28.333 16.837 28.333 17.5V20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.3307 19.1667C28.3307 18.5036 28.5941 17.8678 29.0629 17.3989C29.5318 16.9301 30.1677 16.6667 30.8307 16.6667C31.4938 16.6667 32.1296 16.9301 32.5985 17.3989C33.0673 17.8678 33.3307 18.5036 33.3307 19.1667V26.6667C33.3307 29.3189 32.2771 31.8624 30.4018 33.7378C28.5264 35.6131 25.9829 36.6667 23.3307 36.6667H19.9974H20.344C18.6879 36.667 17.0577 36.2559 15.5997 35.4705C14.1417 34.6851 12.9016 33.5498 11.9907 32.1667C11.8814 32.0003 11.7725 31.8336 11.664 31.6667C11.144 30.8684 9.31904 27.6867 6.18738 22.12C5.86813 21.5526 5.78285 20.883 5.94968 20.2536C6.11651 19.6243 6.52229 19.0848 7.08071 18.75C7.67551 18.3931 8.3725 18.2452 9.06098 18.3298C9.74945 18.4143 10.3899 18.7265 10.8807 19.2167L13.3307 21.6667" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="slide11-cta-button__icon-svg slide11-cta-button__icon-svg--hover" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <g clip-path="url(#clip0_65_2760_hover)">
                      <path d="M13.333 21.6667V7.5C13.333 6.83696 13.5964 6.20107 14.0652 5.73223C14.5341 5.26339 15.17 5 15.833 5C16.496 5 17.1319 5.26339 17.6008 5.73223C18.0696 6.20107 18.333 6.83696 18.333 7.5V20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.333 19.1667V15.8334C18.333 15.1703 18.5964 14.5344 19.0652 14.0656C19.5341 13.5968 20.17 13.3334 20.833 13.3334C21.496 13.3334 22.1319 13.5968 22.6008 14.0656C23.0696 14.5344 23.333 15.1703 23.333 15.8334V20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M23.333 17.5C23.333 16.837 23.5964 16.2011 24.0652 15.7322C24.5341 15.2634 25.17 15 25.833 15C26.496 15 27.1319 15.2634 27.6008 15.7322C28.0696 16.2011 28.333 16.837 28.333 17.5V20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M28.3307 19.1666C28.3307 18.5036 28.5941 17.8677 29.0629 17.3989C29.5318 16.93 30.1677 16.6666 30.8307 16.6666C31.4938 16.6666 32.1296 16.93 32.5985 17.3989C33.0673 17.8677 33.3307 18.5036 33.3307 19.1666V26.6666C33.3307 29.3188 32.2771 31.8623 30.4018 33.7377C28.5264 35.6131 25.9829 36.6666 23.3307 36.6666H19.9974H20.344C18.6879 36.6669 17.0577 36.2559 15.5997 35.4704C14.1417 34.685 12.9016 33.5497 11.9907 32.1666L11.664 31.6666C11.144 30.8683 9.31904 27.6866 6.18738 22.12C5.86813 21.5525 5.78285 20.8829 5.94968 20.2535C6.11651 19.6242 6.52229 19.0848 7.08071 18.75C7.67551 18.3931 8.3725 18.2452 9.06098 18.3297C9.74945 18.4143 10.3899 18.7264 10.8807 19.2166L13.3307 21.6666" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.33366 5.00004L6.66699 3.33337" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.66667 11.6666H5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M23.333 5.00004L24.9997 3.33337" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M25 10H26.6667" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_65_2760_hover">
                        <rect width="40" height="40" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="slide11-cta-button__text">
                  <span>BOOK</span>
                  <span>a demo</span>
                </span>
              </a>
            </section>

          <div class="slide11-badges" aria-label="Martal recognition badges">
            <div class="slide11-badges-track" style="display: contents;">
              <div class="slide11-badges-set" style="display: contents;">
                ${slide11Badges.map(renderSlide11Badge).join("")}
              </div>
              <div class="slide11-badges-set slide11-badges-set--duplicate" style="display: contents;" aria-hidden="true" hidden>
                ${slide11Badges.map(renderSlide11BadgeDuplicate).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>

      ${includeFooter ? renderBottomBar() : ""}
    </section>
  `;
}

const slide12MethodologyCards = [
  {
    index: "01",
    icon: ICON_PATHS.methodPricing,
    title: "Pricing",
    body: "was gathered from vendor websites and secondary sources (Bloomberry, Clutch) and grouped by free, entry, and growth tiers.",
  },
  {
    index: "02",
    icon: ICON_PATHS.methodFeatures,
    title: "Features",
    body: "were tallied from high-level specs (e.g., CRM integration, automation, verification).",
  },
  {
    index: "03",
    icon: ICON_PATHS.methodSatisfaction,
    title: "Customer satisfaction",
    body: "came from G2, Capterra, and Clutch, converted to a 1–5 scale and aggregated.",
  },
  {
    index: "04",
    icon: ICON_PATHS.methodExecution,
    title: "Execution Depth",
    body: "scored 1–5, from basic data provision to AI / automation, workflow orchestration, and fully managed execution.",
  },
];

const slide12EvaluationRows = [
  {
    criteria: "Execution Depth",
    context: "Operational model rating (1–5): data provision to managed execution",
    source: "Internal assessment",
  },
  {
    criteria: "Pricing",
    context: "Monthly / annual tiers, model type (credit vs. subscription)",
    source: "Vendor websites",
  },
  {
    criteria: "Features",
    context: "High-level capabilities (CRM integration, automation, verification)",
    source: "Vendor websites, product documents",
  },
  {
    criteria: "Customer Satisfaction",
    context: "Ratings on usability, support, data accuracy",
    source: "G2, Capterra, Clutch",
  },
  {
    criteria: "Pros & Cons",
    context: "Common positive / negative feedback themes",
    source: "G2, Capterra, Clutch",
  },
  {
    criteria: "G2, Capterra, Clutch Score",
    context: "Overall score (0–5)",
    source: "G2, Capterra, Clutch",
    indicator: true,
  },
];

const slide12SourceIntro = "This analysis draws on vendor websites, industry reports, and customer review platforms. Review scores were aggregated from G2, Capterra, Clutch, and Bloomberry, where available. In-text stats citations are attributed below in order of appearance.";

const slide12Section2 = {
  kicker: "Section 2.",
  title: "State of B2B Data.",
  body: "Market size figures ($0.89B → $15.47B, 17x growth, era-by-era table) are aggregated from the nine providers listed in the Primary Data Sources drill-down: MarketsandMarkets, Allied Market Research, Precedence Research, Acumen Research & Consulting, Grand View Research (Enrichment and Marketplace), Introspective Market Research, Verified Market Reports, and Prospeo / GVR.",
};

const slide12ExecutionGapSources = [
  {
    lead: "¹ 71% relevance.",
    body: "Prospeo, B2B Cold Email Reply Rates: 2026 Benchmarks + Data. Based on a survey of 217 B2B decision-makers.",
  },
  {
    lead: "² ~5% in buying cycle.",
    body: "Ehrenberg-Bass Institute, Professor John Dawes, via LinkedIn B2B Institute. Widely known as the \"95/5 Rule.\"",
  },
  {
    lead: "³ 70.8% contact decay within 12 months.",
    body: "IndustrySelect. 65.8% role / title change figure from the same source.",
  },
  {
    lead: "⁴ ~109 hours wasted per SDR annually.",
    body: "ZoomInfo research on SDR selling-time loss to bad data.",
  },
  {
    lead: "⁵ $5M+ annual loss from bad data.",
    body: "IBM / Gartner research, as cited by Revefi. Over 25% of organizations report losses exceeding $5 million annually due to poor data quality.",
  },
];

const slide12HorizonSources = [
  {
    lead: "⁶ $15 trillion in B2B spend through AI agents by 2028.",
    body: "Gartner Top Predictions for IT Organizations and Users in 2026 and Beyond (October 2025). 90% of B2B buying will be AI-agent intermediated.",
  },
  {
    lead: "⁷ $3 to $5 trillion in global agentic commerce by 2030.",
    body: "McKinsey & Company, Agentic Commerce research (2025).",
  },
  {
    lead: "⁸ 73% of B2B buyers ignore outreach without contextual relevance.",
    body: "Gartner, via Salesmotion intelligence framework research (2026).",
  },
  {
    lead: "⁹ 5x reply rates for signal-based outreach.",
    body: "Autobound platform data synthesis (2026), consistent with Instantly and Belkins benchmarks (2025-2026).",
  },
  {
    lead: "¹⁰ 10-15 tools average per B2B sales team.",
    body: "Apollo, Sales Tech Stack research and MarketBetter cost breakdown (2026).",
  },
  {
    lead: "¹¹ 60-75% tool spend reduction from consolidation.",
    body: "MarketBetter, Real Cost of Building a B2B Sales Tech Stack (2026).",
  },
];

const slide12Limitations = "This analysis relies on publicly available vendor data, customer review platforms, and industry reports. Where primary research data were unavailable, secondary sources were used and noted. Self-reported vendor capabilities were accepted at face value where independent verification was not possible. Readers should conduct their own due diligence when selecting vendors.";

function renderSlide12Icon(src = slide12Icon) {
  return `
    <span class="slide12-icon" aria-hidden="true">
      <img class="slide12-icon__image" src="${src}" alt="" />
    </span>
  `;
}

function renderSlide12MethodologyCard(card) {
  return `
    <article class="slide12-methodology-card">
      <div class="slide12-methodology-card__head">
        <div class="slide12-methodology-card__icon-box" aria-hidden="true">
          ${renderSlide12Icon(card.icon)}
        </div>
        <div class="slide12-methodology-card__copy-group">
          <p class="slide12-methodology-card__index">${escapeHtml(card.index)}</p>
          <p class="slide12-methodology-card__title">${escapeHtml(card.title)}</p>
        </div>
      </div>
      <p class="slide12-methodology-card__body">${escapeHtml(card.body)}</p>
    </article>
  `;
}

function renderSlide12EvaluationRow(row, index) {
  const isAlt = index % 2 === 0;
  return `
    <div class="slide12-table__row ${isAlt ? "slide12-table__row--alt" : ""}">
      <div class="slide12-table__cell slide12-table__cell--criteria">${escapeHtml(row.criteria)}</div>
      <div class="slide12-table__cell">${escapeHtml(row.context)}</div>
      <div class="slide12-table__cell">${escapeHtml(row.source)}</div>
      <div class="slide12-table__cell slide12-table__cell--indicator${row.indicator ? " slide12-table__cell--indicator-active" : ""}" aria-hidden="true">
        ${row.indicator ? `<img class="slide12-table__dot" src="${slide12Dot}" alt="" />` : ""}
      </div>
    </div>
  `;
}

function renderSlide12Citation(item) {
  return `
    <div class="slide12-citation">
      <p class="slide12-citation__lead">${escapeHtml(item.lead)}</p>
      <p class="slide12-citation__body">${escapeHtml(item.body)}</p>
    </div>
  `;
}

function renderSlide12SourceSection({ kicker, title, body, icon = false, citations = [] }) {
  return `
    <section class="slide12-source-section ${icon ? "slide12-source-section--icon" : ""}" aria-label="${escapeHtml(title)}">
      <div class="slide12-source-section__head ${icon ? "slide12-source-section__head--icon" : ""}">
        ${icon ? `
          <div class="slide12-source-section__icon-box" aria-hidden="true">
            ${renderSlide12Icon()}
          </div>
        ` : ""}
        <div class="slide12-source-section__title-group">
          <p class="slide12-source-section__kicker ${icon ? "slide12-source-section__kicker--small" : ""}">${escapeHtml(kicker)}</p>
          <h3 class="slide12-source-section__title">${escapeHtml(title)}</h3>
        </div>
      </div>
      ${body ? `<p class="slide12-source-section__body">${escapeHtml(body)}</p>` : ""}
      ${citations.length ? `<div class="slide12-citation-list">${citations.map(renderSlide12Citation).join("")}</div>` : ""}
    </section>
  `;
}

function renderSlide12({ includeFooter = true, slideIndex = 12 } = {}) {
  return `
    <section class="slide slide--light slide12-page" aria-label="${escapeHtml(slides[slideIndex].title)}" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
      <div class="slide12-layout">
        <header class="slide12-heading">
          <p class="slide12-eyebrow">12 &middot; Methodology And Sources</p>
          <h1 class="slide12-title">METHODOLOGY AND APPENDIX</h1>
        </header>

        <section class="slide12-section slide12-section--overview" aria-label="Overview of Methodology">
          <div class="slide12-section-heading">
            <h2 class="slide12-section-title slide12-section-title--xl">Overview of Methodology</h2>
            <p class="slide12-section-intro">Vendors were evaluated on four main criteria: Pricing, Features, Customer Reviews, and Execution Depth.</p>
          </div>
          <div class="slide12-methodology-grid">
            ${slide12MethodologyCards.map(renderSlide12MethodologyCard).join("")}
          </div>
        </section>

        <section class="slide12-section slide12-section--criteria" aria-label="Evaluation Criteria">
          <h2 class="slide12-section-title">Evaluation Criteria</h2>
          <div class="slide12-table-card">
            <div class="slide12-table" role="table" aria-label="Evaluation criteria table">
              <div class="slide12-table__row slide12-table__row--header" role="row">
                <div class="slide12-table__cell slide12-table__cell--header slide12-table__cell--criteria" role="columnheader">Criteria</div>
                <div class="slide12-table__cell slide12-table__cell--header" role="columnheader">Context</div>
                <div class="slide12-table__cell slide12-table__cell--header slide12-table__cell--header-muted" role="columnheader">Context</div>
                <div class="slide12-table__cell slide12-table__cell--header slide12-table__cell--header-empty" aria-hidden="true"></div>
              </div>
              <div class="slide12-table__body" role="rowgroup">
                ${slide12EvaluationRows.map((row, index) => renderSlide12EvaluationRow(row, index)).join("")}
              </div>
            </div>
          </div>
        </section>

        <section class="slide12-section slide12-section--sources" aria-label="Data Sources">
          <div class="slide12-section-heading">
            <h2 class="slide12-section-title slide12-section-title--xl">Data Sources</h2>
            <p class="slide12-section-intro">${escapeHtml(slide12SourceIntro)}</p>
          </div>
          <div class="slide12-source-sections">
            ${renderSlide12SourceSection({
              kicker: slide12Section2.kicker,
              title: slide12Section2.title,
              body: slide12Section2.body,
            })}
            ${renderSlide12SourceSection({
              kicker: "Section 3.",
              title: "The Execution Gap.",
              citations: slide12ExecutionGapSources,
            })}
            ${renderSlide12SourceSection({
              kicker: "Section 8.",
              title: "The Horizon.",
              citations: slide12HorizonSources,
            })}
          </div>
        </section>

        <section class="slide12-section slide12-section--limitations" aria-label="Limitations of This Analysis">
          <div class="slide12-limitations-card">
            <p class="slide12-limitations-card__title">Limitations of This Analysis</p>
            <p class="slide12-limitations-card__body">${escapeHtml(slide12Limitations)}</p>
          </div>
        </section>
      </div>

      ${includeFooter ? renderBottomBar() : ""}
    </section>
  `;
}

function renderPlaceholderSlides() {
  function renderSlide09FeatureIcon() {
    return `
      <svg class="slide09-feature__icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M8 5.5C8 6.88071 6.88071 8 5.5 8C4.11929 8 3 6.88071 3 5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5Z" fill="currentColor" />
        <path d="M21 6.5C21 7.88071 19.8807 9 18.5 9C17.1193 9 16 7.88071 16 6.5C16 5.11929 17.1193 4 18.5 4C19.8807 4 21 5.11929 21 6.5Z" fill="currentColor" />
        <path d="M15 19.5C15 20.8807 13.8807 22 12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5Z" fill="currentColor" />
        <path d="M7.3 6.9L15.7 7.9" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.7 7.9L11.2 17.3" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.1 8.6L13.4 17.2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;
  }

  function renderSlide09Feature({ label, body }) {
    return `
      <article class="slide09-feature">
        <div class="slide09-feature__icon" aria-hidden="true">
          ${renderSlide09FeatureIcon()}
        </div>
        <div class="slide09-feature__content">
          <p class="slide09-feature__label">${escapeHtml(label)}</p>
          <p class="slide09-feature__text">${escapeHtml(body)}</p>
        </div>
      </article>
    `;
  }

  function renderSlide09({ includeFooter = true, slideIndex = 9 } = {}) {
    const featureItems = [
      {
        label: "Today",
        body: "is only the beginning of a larger shift.",
      },
      {
        label: "Emerging forces",
        body: "reshape B2B data — defining what stays relevant.",
      },
    ];

    return `
      <section class="slide slide09-page" aria-label="09 · A The Horizon" data-slide-index="${slideIndex}" id="slide-${slides[slideIndex].id}">
        <div class="slide09-background" aria-hidden="true">
          <div class="slide09-background__field"></div>
          <div class="slide09-background__overlay"></div>
          <div class="slide09-background__grain"></div>
        </div>

        <div class="slide09-layout">
          <div class="slide09-heading">
            <p class="slide09-eyebrow">09 · A The Horizon</p>
            <h1 class="slide09-title" aria-label="The Future of B2B Data">
              <span class="slide09-title__line slide09-title__line--the">THE</span>
              <span class="slide09-title__line slide09-title__line--future">FUTURE</span>
              <span class="slide09-title__line slide09-title__line--of">OF B2B DATA</span>
            </h1>
          </div>

          <div class="slide09-features" aria-label="Supporting notes">
            ${featureItems.map(renderSlide09Feature).join("")}
          </div>
        </div>

        ${includeFooter ? renderBottomBar() : ""}
      </section>
    `;
  }

  return slides.slice(13).map((slide, offset) => {
    const slideIndex = offset + 13;
    return `
    <section class="slide" aria-label="${escapeHtml(slide.title)}" data-slide-index="${slideIndex}" id="slide-${slide.id}" style="min-height:70vh;display:grid;place-items:center;padding:48px;color:rgba(255,255,255,0.46);">
      <div style="border:1px dashed rgba(255,255,255,0.08);border-radius:20px;padding:32px;max-width:860px;width:100%;background:rgba(0,0,0,0.12);">
        <div style="color:var(--lime);font-weight:600;letter-spacing:0.02em;margin-bottom:10px;">${escapeHtml(slide.id)}</div>
        <div style="font-size:24px;color:rgba(255,255,255,0.88);font-family:Rubik,Inter,sans-serif;font-weight:700;">${escapeHtml(slide.label)}</div>
        <p style="margin-top:10px;line-height:1.7;">This slide is intentionally not implemented yet. The structure is reserved for the remaining report pages.</p>
      </div>
    </section>
  `;
  }).join("");
}

function renderScrollSlides() {
  return `
    ${renderCoverSlide({ includeFooter: false, slideIndex: 0 })}
    ${renderSlide02({ includeFooter: false, slideIndex: 1 })}
    ${renderSlide03({ includeFooter: false, slideIndex: 2 })}
    ${renderSlide04A({ includeFooter: false, slideIndex: 3 })}
    ${renderSlide04B({ includeFooter: false, slideIndex: 4 })}
    ${renderSlide05({ includeFooter: false, slideIndex: 5 })}
    ${renderSlide06({ includeFooter: false, slideIndex: 6 })}
    ${renderSlide07({ includeFooter: false, slideIndex: 7 })}
    ${renderSlide08({ includeFooter: false, slideIndex: 8 })}
    ${renderSlide09({ includeFooter: false, slideIndex: 9 })}
    ${renderSlide10({ includeFooter: false, slideIndex: 10 })}
    ${renderSlide11({ includeFooter: false, slideIndex: 11 })}
    ${renderSlide12({ includeFooter: false, slideIndex: 12 })}
    ${renderBottomBar()}
  `;
}

function hideMatrixTooltip() {
  const layer = document.querySelector("#matrixTooltipLayer");
  if (!layer) return;
  layer.setAttribute("hidden", "");
}

function showMatrixTooltip(pointButton) {
  const layer = document.querySelector("#matrixTooltipLayer");
  const tooltip = layer?.querySelector(".matrix-tooltip");
  const text = layer?.querySelector(".matrix-tooltip__text");
  const card = document.querySelector(".matrix-card");
  if (!layer || !tooltip || !text || !card) return;

  const vendor = pointButton.dataset.matrixVendor || "";
  const cardRect = card.getBoundingClientRect();
  const pointRect = pointButton.getBoundingClientRect();
  const edgePadding = 16;
  const gap = 12;

  text.textContent = vendor;
  layer.removeAttribute("hidden");
  tooltip.dataset.side = "center";
  tooltip.style.left = "0px";
  tooltip.style.top = "0px";
  tooltip.style.visibility = "hidden";

  const tooltipRect = tooltip.getBoundingClientRect();
  const idealLeft = pointRect.left + (pointRect.width / 2) - (tooltipRect.width / 2);
  const maxLeft = cardRect.right - edgePadding - tooltipRect.width;
  const minLeft = cardRect.left + edgePadding;
  const clampedLeft = clamp(idealLeft, minLeft, maxLeft);
  const pointCenter = pointRect.left + (pointRect.width / 2);
  let side = "center";

  if (clampedLeft === minLeft && idealLeft < minLeft) {
    side = "left";
  } else if (clampedLeft === maxLeft && idealLeft > maxLeft) {
    side = "right";
  } else if (pointCenter < cardRect.left + (cardRect.width * 0.35)) {
    side = "left";
  } else if (pointCenter > cardRect.left + (cardRect.width * 0.65)) {
    side = "right";
  }

  const idealTop = pointRect.top - tooltipRect.height - gap;
  const top = Math.max(cardRect.top + edgePadding, idealTop);

  tooltip.dataset.side = side;
  tooltip.style.left = `${clampedLeft}px`;
  tooltip.style.top = `${top}px`;
  tooltip.style.visibility = "visible";
}

function bindMatrixHoverTooltips() {
  const points = document.querySelectorAll(".matrix-point[data-matrix-vendor]");
  points.forEach((point) => {
    point.addEventListener("pointerenter", () => showMatrixTooltip(point));
    point.addEventListener("pointermove", () => showMatrixTooltip(point));
    point.addEventListener("pointerleave", hideMatrixTooltip);
    point.addEventListener("blur", hideMatrixTooltip);
    point.addEventListener("focus", () => showMatrixTooltip(point));
  });
}

function renderReport() {
  cleanupSlide03MarketChart();

  const activeSlide = slides[state.currentSlide];
  const slideMarkup = state.currentSlide === 0
    ? renderCoverSlide()
    : state.currentSlide === 1
      ? renderSlide02()
      : state.currentSlide === 2
        ? renderSlide03()
      : state.currentSlide === 3
        ? renderSlide04A()
      : state.currentSlide === 4
        ? renderSlide04B()
      : state.currentSlide === 5
        ? renderSlide05()
      : state.currentSlide === 6
        ? renderSlide06()
      : state.currentSlide === 7
        ? renderSlide07()
      : state.currentSlide === 8
        ? renderSlide08()
      : state.currentSlide === 9
        ? renderSlide09()
      : state.currentSlide === 10
        ? renderSlide10()
      : state.currentSlide === 11
        ? renderSlide11()
      : state.currentSlide === 12
        ? renderSlide12()
      : `
        <section class="slide" aria-label="${escapeHtml(activeSlide.title)}" style="min-height:100vh;display:grid;place-items:center;padding:48px;color:rgba(255,255,255,0.46);">
          <div style="border:1px dashed rgba(255,255,255,0.08);border-radius:20px;padding:32px;max-width:860px;width:100%;background:rgba(0,0,0,0.12);">
            <div style="color:var(--lime);font-weight:600;letter-spacing:0.02em;margin-bottom:10px;">${escapeHtml(activeSlide.id)}</div>
            <div style="font-size:24px;color:rgba(255,255,255,0.88);font-family:Rubik,Inter,sans-serif;font-weight:700;">${escapeHtml(activeSlide.label)}</div>
            <p style="margin-top:10px;line-height:1.7;">This slide is intentionally not implemented yet. The structure is reserved for the remaining report pages.</p>
          </div>
        </section>
      `;

  reportRoot.innerHTML = state.mode === "scroll"
    ? `
      <div class="slide-layer slide-layer--scroll">
        ${renderScrollSlides()}
      </div>
    `
    : `
      <div class="slide-layer">
        ${slideMarkup}
      </div>
    `;
  hideMatrixTooltip();

  const root = document.querySelector(".app");
  root.classList.toggle("manuscript-mode", state.mode === "scroll");
  applySlideTheme(state.currentSlide);
  syncScrollViewportState(state.currentSlide);
  const slideProgress = (state.currentSlide + 1) / slides.length;
  document.documentElement.style.setProperty("--slide-progress", slideProgress.toFixed(4));
  progressFill.style.width = `${slideProgress * 100}%`;

  const topNavMarkup = slides.map((slide, index) => `
    <button class="top-nav__item ${index === state.currentSlide ? "is-active" : ""}" data-slide="${index}" type="button">
      <span class="top-nav__index">${slide.id}</span>
      <span>${escapeHtml(slide.label)}</span>
    </button>
  `).join("");
  topNav.innerHTML = topNavMarkup;

  const prevButton = document.querySelector("#prevSlide");
  const nextButton = document.querySelector("#nextSlide");
  const beginStory = document.querySelector("#beginStory");
  const helpOpenButtons = document.querySelectorAll("[data-open-help]");

  prevButton?.addEventListener("click", () => goToSlide(state.currentSlide - 1));
  nextButton?.addEventListener("click", () => {
    goToSlide(state.currentSlide === slides.length - 1 ? 0 : state.currentSlide + 1);
  });
  beginStory?.addEventListener("click", () => goToSlide(1));
  helpOpenButtons.forEach((button) => {
    button.addEventListener("click", openHelpModal);
  });
  if (state.mode === "scroll" || state.currentSlide === 11) {
    document.querySelector(".slide-layer")?.addEventListener("scroll", scheduleScrollSync, { passive: true });
  }
  document.querySelectorAll("#toggleMode").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = state.mode === "slide" ? "scroll" : "slide";
      renderReport();
      if (state.mode === "scroll") {
        requestAnimationFrame(() => scrollToSlide(state.currentSlide, true));
      }
    });
  });
  document.querySelectorAll("[data-slide]").forEach((button) => {
    button.addEventListener("click", () => {
      goToSlide(Number(button.dataset.slide || 0));
    });
  });

  bindMatrixHoverTooltips();
  syncMatrixLegendHover(null);
  bindMatrixLegendHover();
  syncTopNavTrackState();
  syncTopNavViewport(state.currentSlide);

  if (state.mode === "scroll") {
    syncScrollChrome(state.currentSlide);
  } else {
    prevButton.disabled = state.currentSlide === 0;
    const isLastSlide = state.currentSlide === slides.length - 1;
    nextButton.classList.toggle("arrow-btn--home", isLastSlide);
    nextButton.innerHTML = isLastSlide ? homeButtonMarkup : nextButtonSvg;
    nextButton.setAttribute("aria-label", isLastSlide ? "Back to home" : "Next slide");
    const nextLabel = document.querySelector(".next-label");
    if (nextLabel) {
      nextLabel.hidden = isLastSlide;
      nextLabel.textContent = isLastSlide ? "" : getNextSlideLabel(state.currentSlide);
    }
  }
syncTableGraphSwitcherHints();
helpOverlay.hidden = state.helpSeen;
}

function goToSlide(index) {
  const nextIndex = clamp(index, 0, slides.length - 1);
  if (state.mode === "scroll") {
    if (state.currentSlide === 2 && nextIndex !== 2) {
      hideSlide03MarketChartState();
    }
    scrollToSlide(nextIndex);
    return;
  }
  state.currentSlide = nextIndex;
  renderReport();
  requestAnimationFrame(resetSlideModeScroll);
}

function isEditableTarget(target) {
  if (!target || !(target instanceof HTMLElement)) return false;
  return target.matches("input, textarea, select, [contenteditable='true']");
}

document.addEventListener("keydown", (event) => {
  if (helpOverlay && !helpOverlay.hidden && event.key === "Escape") {
    closeHelpModal();
    return;
  }
  if (isEditableTarget(event.target)) return;
  if (event.key === "Escape" && (dismissSlide06SwitcherHint() || dismissSlide07SwitcherHint())) {
    event.preventDefault();
    return;
  }

  if (state.mode !== "slide") return;

  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    goToSlide(state.currentSlide + 1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToSlide(state.currentSlide - 1);
  }
  if (event.key === "Home") {
    event.preventDefault();
    goToSlide(0);
  }
  if (event.key === "End") {
    event.preventDefault();
    goToSlide(slides.length - 1);
  }
});

helpOverlay?.addEventListener("click", (event) => {
  if (event.target === helpOverlay) {
    closeHelpModal();
    return;
  }
  const closeButton = event.target instanceof Element
    ? event.target.closest("[data-help-close]")
    : null;
  if (closeButton) closeHelpModal();
});

document.addEventListener("click", (event) => {
  const activeSlide06Spotlight = document.querySelector(".slide--06.is-switcher-spotlight");
  if (activeSlide06Spotlight && event.target instanceof Element) {
    const spotlightTarget = activeSlide06Spotlight.querySelector("[data-slide06-switcher-target]");
    if (!spotlightTarget?.contains(event.target)) {
      dismissSlide06SwitcherHint();
    }
  }

  const activeSpotlightSlide = document.querySelector(".slide--07.is-switcher-spotlight");
  if (activeSpotlightSlide && event.target instanceof Element) {
    const spotlightTarget = activeSpotlightSlide.querySelector("[data-slide07-switcher-target]");
    if (!spotlightTarget?.contains(event.target)) {
      dismissSlide07SwitcherHint();
    }
  }

  const slide06ViewButton = event.target instanceof Element
    ? event.target.closest("[data-slide06-view]")
    : null;
  if (slide06ViewButton) {
    event.preventDefault();
    setSlide06PipelineView(slide06ViewButton.closest(".slide--06"), slide06ViewButton.dataset.slide06View);
    return;
  }

  const slide06SortButton = event.target instanceof Element
    ? event.target.closest(".slide06-table [data-slide06-sort]")
    : null;
  if (slide06SortButton) {
    event.preventDefault();
    const sortKey = slide06SortButton.dataset.slide06Sort;
    if (!slide06SortableColumnKeys.has(sortKey)) return;

    state.slide06TableSort = {
      key: sortKey,
      direction: state.slide06TableSort?.key === sortKey && state.slide06TableSort.direction === "asc" ? "desc" : "asc",
    };
    updateSlide06TableSort(slide06SortButton.closest(".slide06-table"));
    return;
  }

  const slide07ViewButton = event.target instanceof Element
    ? event.target.closest("[data-slide07-view]")
    : null;
  if (slide07ViewButton) {
    event.preventDefault();
    setSlide07IntelligenceView(slide07ViewButton.closest(".slide--07"), slide07ViewButton.dataset.slide07View);
    return;
  }

  const slide07SortButton = event.target instanceof Element
    ? event.target.closest(".slide07-table [data-slide07-sort]")
    : null;
  if (slide07SortButton) {
    event.preventDefault();
    const sortKey = slide07SortButton.dataset.slide07Sort;
    if (!slide07SortableColumnKeys.has(sortKey)) return;

    state.slide07TableSort = {
      key: sortKey,
      direction: state.slide07TableSort?.key === sortKey && state.slide07TableSort.direction === "asc" ? "desc" : "asc",
    };
    updateSlide07TableSort(slide07SortButton.closest(".slide07-table"));
    return;
  }

  const slide08SortButton = event.target instanceof Element
    ? event.target.closest(".slide08-table [data-slide08-sort='gap']")
    : null;
  if (slide08SortButton) {
    event.preventDefault();
    state.slide08GapSort = {
      direction: state.slide08GapSort?.direction === "asc" ? "desc" : "asc",
    };
    updateSlide08TableSort(slide08SortButton.closest(".slide08-table"));
    return;
  }

  const button = event.target instanceof Element
    ? event.target.closest(".slide03-table [data-slide03-sort]")
    : null;
  if (!button) return;

  const sortKey = button.dataset.slide03Sort;
  if (sortKey !== "range" && sortKey !== "growth") return;

  event.preventDefault();
  state.slide03TableSort = {
    key: sortKey,
    direction: state.slide03TableSort?.key === sortKey && state.slide03TableSort.direction === "asc" ? "desc" : "asc",
  };
  updateSlide03TableSort(button.closest(".slide03-table-card"));
});

let scrollSyncRaf = null;

function scheduleScrollSync() {
  const shouldSyncSlide11Theme = state.mode !== "scroll" && state.currentSlide === 11;
  if (state.mode !== "scroll" && !shouldSyncSlide11Theme) return;
  if (scrollSyncRaf !== null) return;

  scrollSyncRaf = requestAnimationFrame(() => {
    scrollSyncRaf = null;
    if (state.mode !== "scroll") {
      applySlideTheme(state.currentSlide);
      return;
    }

    const visibleIndex = getVisibleScrollSlideIndex();
    if (visibleIndex !== state.currentSlide) {
      syncScrollChrome(visibleIndex);
    } else {
      applySlideTheme(visibleIndex);
      syncScrollFooter(visibleIndex);
    }
  });
}

window.addEventListener("scroll", scheduleScrollSync, { passive: true });
window.addEventListener("resize", () => {
  scheduleScrollSync();
  syncTopNavTrackState();
  syncTopNavViewport(state.currentSlide);
});

renderReport();

if (!state.helpSeen) {
  helpOverlay.hidden = false;
}
markBootReady();
} catch (error) {
  markBootError(error);
  throw error;
}


