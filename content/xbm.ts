import type { XbmContent } from "./types";

export const xbm = {
  name: "XBM",
  fullName: "XBM - Xception Based Monitoring",
  tagline:
    "Exception-based well surveillance and production optimization for petroleum and production engineers.",
  summary:
    "XBM is an engineering workflow and surveillance platform that uses well data to identify exceptions, highlight potential performance problems, support engineering diagnosis, and help engineers prioritize wells that require attention.",
  workflowSummary: [
    "Ingest or access well and production data",
    "Continuously monitor relevant operating and engineering parameters",
    "Identify exceptions and abnormal trends",
    "Support diagnosis using engineering workflows and calculations",
    "Prioritize wells or conditions that require attention",
    "Rank the wells and conditions to review first",
  ] as const,
  workflowLabel: "DATA → MONITOR → DETECT → DIAGNOSE → PRIORITIZE → ENGINEER REVIEW",
  positioning: [
    "Exception-based surveillance",
    "Production optimization",
    "Well-performance monitoring",
    "Identification of abnormal well conditions",
    "Petroleum-engineering workflows in one platform",
    "Data-driven engineering analysis",
  ] as const,
  meta: {
    title: "XBM Platform",
    description:
      "XBM - Xception Based Monitoring helps petroleum engineers monitor well performance, find exceptions, and decide which wells to review first.",
  },
  hero: {
    eyebrow: "XBM - Xception Based Monitoring",
    title: "Exception-based surveillance for production engineers.",
    description:
      "XBM watches well performance, flags exceptions, and helps petroleum engineers decide which wells to review first.",
    primaryCta: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
    secondaryCta: {
      label: "Explore capabilities",
      href: "#capabilities",
    },
    visual: {
      id: "dashboard",
      src: "/assets/xbm/dashboard.png",
      alt: "XBM dashboard showing field performance overview, well navigation, and exception status",
    },
  },
  moduleIndex: {
    label: "On this page",
    title: "Workflows",
    description: "Core surveillance workflows first, then the rest of the platform.",
    modules: [
      {
        id: "dashboard",
        anchor: "dashboard",
        name: "XBM Dashboard",
        summary:
          "Field and well performance overview with KPIs, navigation, trends, and exception status.",
      },
      {
        id: "well-data-book",
        anchor: "well-data-book",
        name: "Well Data Book",
        summary:
          "Structured history of rates, pressures, drawdown, productivity index, and related parameters.",
      },
      {
        id: "operating-envelope",
        anchor: "operating-envelope",
        name: "Operating Envelope",
        summary:
          "Per-well surveillance against defined operating limits with warning and critical states.",
      },
      {
        id: "temperature-derived-rates",
        anchor: "temperature-derived-rates",
        name: "Temperature-Derived Rates",
        summary:
          "Temperature-based rate estimation for production surveillance using data-driven relationships.",
      },
      {
        id: "maximum-sustainable-drawdown",
        anchor: "maximum-sustainable-drawdown",
        name: "Maximum Sustainable Drawdown",
        summary:
          "Dynamic drawdown surveillance to identify diminishing production response and increased risk.",
      },
      {
        id: "flux-analysis",
        anchor: "flux-analysis",
        name: "Flux Analysis",
        summary:
          "Flow-velocity indicator through effective screen area for sand-control and screen-integrity screening.",
      },
      {
        id: "lite-pta",
        anchor: "lite-pta",
        name: "Lite PTA",
        summary:
          "Short-duration pressure-transient analysis for skin, damage, and productivity screening.",
      },
      {
        id: "pseudo-skin",
        anchor: "pseudo-skin",
        name: "Pseudo Skin Surveillance",
        summary:
          "Routine shut-in screening for skin and near-wellbore condition changes.",
      },
      {
        id: "production-aggregation",
        anchor: "production-aggregation",
        name: "Production Aggregation",
        summary:
          "Oil, gas, and water views aggregated across well, field, or asset scope.",
      },
      {
        id: "integrated-surveillance",
        anchor: "integrated-surveillance",
        name: "Integrated Surveillance",
        summary:
          "Combined field and well health view with exception summaries and engineering recommendations.",
      },
    ],
  },
  workflow: {
    label: "Engineering workflow",
    title: "How XBM works",
    description:
      "Well data moves through six steps, from import to a short list of wells worth reviewing.",
    sequence: "DATA → MONITOR → DETECT → DIAGNOSE → PRIORITIZE → ENGINEER REVIEW",
    steps: [
      {
        id: "data",
        label: "DATA",
        title: "Ingest or access well and production data",
        description:
          "Import well history and current parameters from Excel, CSV, JSON, TXT, and tools such as PROSPER.",
      },
      {
        id: "monitor",
        label: "MONITOR",
        title: "Continuous parameter surveillance",
        description:
          "Track operating limits, performance trends, drawdown, skin indicators, and related engineering parameters across field and well scope.",
      },
      {
        id: "detect",
        label: "DETECT",
        title: "Identify exceptions and abnormal trends",
        description:
          "Surface conditions that move outside expected operating ranges or show patterns that warrant engineering attention.",
      },
      {
        id: "diagnose",
        label: "DIAGNOSE",
        title: "Support engineering analysis",
        description:
          "Compare operating envelope, drawdown, flux, and Lite PTA results to narrow the likely cause.",
      },
      {
        id: "prioritize",
        label: "PRIORITIZE",
        title: "Rank wells requiring attention",
        description:
          "Focus review on wells and conditions where combined surveillance indicates the greatest need for engineering follow-up.",
      },
      {
        id: "engineer-review",
        label: "ENGINEER REVIEW",
        title: "Show where to look next",
        description:
          "Rank the wells and conditions that should be reviewed first.",
      },
    ],
  },
  exceptionStates: {
    label: "Exception states",
    title: "Four states, used the same way across the field",
    description:
      "Critical, Warning, and Normal describe the surveillance result. Undefined means the data is missing or incomplete. Treat the well as unchecked until that data is available.",
    states: [
      {
        status: "critical",
        description:
          "Outside critical limits, or a pattern that needs review now.",
      },
      {
        status: "warning",
        description:
          "Approaching a limit, or trending toward a condition that may need follow-up.",
      },
      {
        status: "normal",
        description:
          "Inside the ranges configured for that well.",
      },
      {
        status: "undefined",
        description:
          "Not enough data to assign a state. Check the data before treating the well as normal.",
      },
    ],
  },
  primaryCapabilities: {
    label: "Primary capabilities",
    title: "Core workflows",
    description:
      "Operating envelope, drawdown, flux, and Lite PTA carry most of the day-to-day surveillance.",
    items: [
      {
        id: "operating-envelope",
        anchor: "operating-envelope",
        title: "Operating Envelope",
        summary: "See when a well moves outside its limits.",
        paragraphs: [
          "Engineers set the limits. XBM watches oil and gas rate, choke, tubing-head pressure, gas-lift injection, pseudo skin, wellbore gradient, and wellbore velocity, and marks Warning or Critical when a well leaves that envelope.",
        ],
        points: [
          "Warning and Critical states",
          "Limits set per well",
          "Gauges, plots, and live updates",
        ],
        visual: {
          id: "operating-envelope",
          src: "/assets/xbm/operating_envelope.png",
          alt: "Operating envelope surveillance view with per-well limit monitoring and status indicators",
        },
        layout: "visual-right",
      },
      {
        id: "maximum-sustainable-drawdown",
        anchor: "maximum-sustainable-drawdown",
        title: "Maximum Sustainable Drawdown",
        summary: "See when more drawdown stops delivering more production.",
        paragraphs: [
          "XBM compares drawdown with production response. The aim is to show where extra drawdown stops adding proportionate production, or where the trend starts to look like added risk.",
        ],
        points: [
          "Drawdown versus production response",
          "Changing production efficiency",
          "The edge of useful operating performance",
        ],
        visual: {
          id: "drawdown",
          src: "/assets/xbm/drawdown-2.png",
          alt: "Maximum sustainable drawdown analysis view showing drawdown versus production response",
        },
        layout: "visual-left",
      },
      {
        id: "flux-analysis",
        anchor: "flux-analysis",
        title: "Flux Analysis",
        summary: "Track flow velocity through the effective screen area.",
        paragraphs: [
          "Flux is the average flow velocity through the effective screen area. XBM tracks it with rate, drawdown, sand indicators, and choke changes so sand-control risk is not judged from drawdown alone.",
        ],
        points: [
          "Flux over time",
          "Rate versus effective screen area",
          "Pressure loss, sand indicators, and choke steps",
        ],
        layout: "text-only",
      },
      {
        id: "lite-pta",
        anchor: "lite-pta",
        title: "Lite PTA",
        summary: "Screen near-wellbore changes from routine shut-ins.",
        paragraphs: [
          "Lite PTA focuses on near-wellbore surveillance: skin, completion effectiveness, productivity changes, and before-and-after workover comparisons.",
          "Long-duration testing remains the right method for reservoir-boundary characterization.",
        ],
        points: [
          "Skin and near-wellbore damage",
          "Completion effectiveness and productivity",
          "Before-and-after workover comparison",
        ],
        visual: {
          id: "lite-pta",
          src: "/assets/xbm/Lite_PTA.png",
          alt: "Lite PTA workflow for skin and productivity screening",
        },
        layout: "visual-right",
      },
    ],
  },
  supportingCapabilities: {
    label: "Supporting capabilities",
    title: "The rest of the platform",
    description:
      "Dashboard, well history, temperature-derived rates, pseudo skin, production roll-ups, and a combined field view.",
    items: [
      {
        id: "dashboard",
        anchor: "dashboard",
        title: "XBM Dashboard",
        summary: "See field performance and open exceptions in one view.",
        detail:
          "KPIs, well navigation, production trends, and exception status, including near-real-time updates.",
        visual: {
          id: "dashboard",
          src: "/assets/xbm/dashboard.png",
          alt: "XBM dashboard showing field performance overview, well navigation, and exception status",
        },
        emphasis: "primary",
      },
      {
        id: "well-data-book",
        anchor: "well-data-book",
        title: "Well Data Book",
        summary: "Keep the well history engineers need for diagnosis in one place.",
        detail:
          "Allocated oil, gas, and water; static and flowing bottom-hole pressure; drawdown; productivity index; pseudo skin; gradient; friction drop; tubing-head and wellhead pressure; choke size.",
        visual: {
          id: "well-data",
          src: "/assets/xbm/Well_Data.png",
          alt: "Well data book with structured parameter history and engineering fields",
        },
        emphasis: "secondary",
      },
      {
        id: "temperature-derived-rates",
        anchor: "temperature-derived-rates",
        title: "Temperature-Derived Rates",
        summary: "Estimate rate from temperature when a direct measurement is intermittent.",
        detail:
          "XBM uses measured well temperature and established data relationships to estimate production rate for surveillance.",
        visual: {
          id: "temperature-derived",
          src: "/assets/xbm/Temperature_derived.png",
          alt: "Temperature-derived rate estimation view for production surveillance",
        },
        emphasis: "secondary",
      },
      {
        id: "pseudo-skin",
        anchor: "pseudo-skin",
        title: "Pseudo Skin Surveillance",
        summary: "Watch skin and productivity from routine shut-ins.",
        detail:
          "Compare skin and near-wellbore productivity across shut-in windows of about 1, 24, or 48 hours.",
        visual: {
          id: "pseudo-skin",
          src: "/assets/xbm/skin_mornitoring.png",
          alt: "Pseudo skin surveillance monitoring view for near-wellbore screening",
        },
        emphasis: "tertiary",
      },
      {
        id: "production-aggregation",
        anchor: "production-aggregation",
        title: "Production Aggregation",
        summary: "Roll production up from well to field to asset.",
        detail:
          "Daily, monthly, yearly, average, total, and cumulative views for oil, gas, water, GOR, water cut, and WOR.",
        emphasis: "tertiary",
      },
      {
        id: "integrated-surveillance",
        anchor: "integrated-surveillance",
        title: "Integrated Surveillance",
        summary: "Ask which wells need review, across workflows.",
        detail:
          "For example: flat rate with rising drawdown, rising skin, high flux with rising drawdown, or a well whose data is incomplete.",
        emphasis: "tertiary",
      },
    ],
  },
  dataSources: {
    label: "Data inputs",
    title: "What you can import",
    description:
      "Import structured well and production data from Excel, CSV, JSON, TXT, and supported petroleum-engineering tools such as PROSPER.",
    formats: ["Excel", "CSV", "JSON", "TXT", "PROSPER"],
    parameters: [
      "Production rates and pressures",
      "Drawdown and productivity indicators",
      "Operating limits and choke data",
      "Shut-in and transient measurements",
    ],
  },
  alertsReporting: {
    label: "Alerts and reporting",
    title: "Alerts and reports",
    description:
      "Watch wells live, raise an alert when a threshold is crossed, and send the exception by email. Export PDF and Excel reports when the review needs a record.",
    capabilities: [
      "Live monitoring and exception alerts",
      "Alarm states with configurable thresholds",
      "Email notifications for exception conditions",
      "PDF and Excel engineering reports",
      "Live operating-envelope updates",
    ],
  },
  methodology: {
    label: "Engineering methodology",
    title: "Engineers stay in control",
    paragraphs: [
      "XBM surfaces exceptions, supports diagnosis, and helps engineers prioritize where to investigate next. Operational decisions remain with qualified engineering teams.",
    ],
    principles: [
      "The same four states on every workflow",
      "Drawdown, skin, flux, and operating limits read together",
      "A shorter review list, still checked by an engineer",
    ],
  },
  pilotCta: {
    title: "Collaborate on an XBM pilot",
    description:
      "Discuss your field, review the platform, and evaluate how exception-based surveillance fits your engineering workflow.",
    primary: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
    secondary: {
      label: "Discuss Your Field",
      href: "/contact",
    },
  },
  exceptionStateLabels: ["Critical", "Warning", "Normal", "Undefined"] as const,
  visuals: [
    {
      id: "dashboard",
      src: "/assets/xbm/dashboard.png",
      alt: "XBM dashboard showing field performance overview and exception status",
    },
    {
      id: "operating-envelope",
      src: "/assets/xbm/operating_envelope.png",
      alt: "Operating envelope surveillance view with per-well limit monitoring",
    },
    {
      id: "temperature-derived",
      src: "/assets/xbm/Temperature_derived.png",
      alt: "Temperature-derived rate estimation for production surveillance",
    },
    {
      id: "drawdown",
      src: "/assets/xbm/drawdown-2.png",
      alt: "Maximum sustainable drawdown analysis view",
    },
    {
      id: "lite-pta",
      src: "/assets/xbm/Lite_PTA.png",
      alt: "Lite PTA workflow",
    },
    {
      id: "pseudo-skin",
      src: "/assets/xbm/skin_mornitoring.png",
      alt: "Pseudo skin surveillance monitoring view",
    },
    {
      id: "well-data",
      src: "/assets/xbm/Well_Data.png",
      alt: "Well data book with structured parameter history",
    },
    {
      id: "home",
      src: "/assets/xbm/home_page.png",
      alt: "XBM platform home view",
    },
  ],
} satisfies XbmContent & {
  name: string;
  fullName: string;
  tagline: string;
  summary: string;
  workflowSummary: readonly string[];
  workflowLabel: string;
  positioning: readonly string[];
  exceptionStateLabels: readonly string[];
  visuals: readonly {
    id: string;
    src: string;
    alt: string;
    caption?: string;
  }[];
};
