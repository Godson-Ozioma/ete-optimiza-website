import type { XbmContent } from "./types";

export const xbm = {
  name: "XBM",
  fullName: "XBM — Xception Based Monitoring",
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
    "Present recommendations or insights for engineer review",
  ] as const,
  workflowLabel: "DATA → MONITOR → DETECT → DIAGNOSE → PRIORITIZE → ENGINEER REVIEW",
  positioning: [
    "Exception-based surveillance",
    "Production optimization",
    "Well-performance monitoring",
    "Engineering decision support",
    "Proactive identification of abnormal well conditions",
    "Integrated petroleum-engineering workflows",
    "Data-driven engineering analysis",
    "Engineer-in-the-loop recommendations",
  ] as const,
  meta: {
    title: "XBM Platform",
    description:
      "XBM — Xception Based Monitoring is ETE-Optimiza's exception-based well surveillance platform for production optimization, operating-envelope monitoring, and engineer-in-the-loop decision support.",
  },
  hero: {
    eyebrow: "XBM — Xception Based Monitoring",
    title: "Exception-based surveillance for production engineers.",
    description:
      "XBM connects well data, engineering workflows, and exception states into one platform—helping petroleum and production engineers monitor performance, diagnose probable issues, and prioritize wells that require attention.",
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
      caption: "XBM Dashboard",
    },
  },
  moduleIndex: {
    label: "Platform modules",
    title: "Integrated surveillance workflows",
    description:
      "XBM modules share a common data foundation and exception framework. Each capability below anchors to a section on this page; dedicated module routes may follow.",
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
        name: "Short-Term / Lite PTA",
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
    title: "From data to engineer review",
    description:
      "XBM follows a connected surveillance sequence. Each stage builds on the previous—screening outputs are presented for engineer validation, not autonomous operational action.",
    sequence: "DATA → MONITOR → DETECT → DIAGNOSE → PRIORITIZE → ENGINEER REVIEW",
    steps: [
      {
        id: "data",
        label: "DATA",
        title: "Ingest or access well and production data",
        description:
          "Bring structured well history and current parameters from approved file formats and engineering tools into a common surveillance foundation.",
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
          "Apply integrated workflows—operating envelope, drawdown, flux screening, PTA, and related calculations—to help identify probable causes.",
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
        title: "Recommendations for validation",
        description:
          "Present insights and recommendations for petroleum-engineer review. XBM supports decision-making—it does not authorize operational changes.",
      },
    ],
  },
  exceptionStates: {
    label: "Exception states",
    title: "Structured status language across surveillance",
    description:
      "XBM uses consistent exception states so engineers can scan field and well conditions quickly. Undefined indicates incomplete or unavailable context—it is neutral and does not imply a healthy operating state.",
    states: [
      {
        status: "critical",
        description:
          "Conditions outside critical operating limits or showing patterns that require immediate engineering review.",
      },
      {
        status: "warning",
        description:
          "Parameters approaching limits or trending toward conditions that may require follow-up.",
      },
      {
        status: "normal",
        description:
          "Parameters within expected operating ranges based on configured surveillance context.",
      },
      {
        status: "undefined",
        description:
          "Insufficient or unavailable data to assign a surveillance state. Requires data review—not an indication of normal performance.",
      },
    ],
  },
  primaryCapabilities: {
    label: "Primary capabilities",
    title: "Core engineering surveillance workflows",
    description:
      "Four integrated workflows form the technical backbone of exception-based monitoring—each designed for production-engineering review, not autonomous control.",
    items: [
      {
        id: "operating-envelope",
        anchor: "operating-envelope",
        title: "Operating Envelope",
        summary: "Per-well surveillance against defined operating limits.",
        paragraphs: [
          "Operating Envelope highlights when well conditions move outside expected ranges. Engineers configure limits and monitor parameters such as oil and gas rates, choke position, tubing-head pressure, gas-lift injection, pseudo skin, wellbore gradient, and wellbore velocity.",
          "Warning and critical states, gauges, surveillance plots, and live updates support continuous review—without publishing fixed thresholds as universal defaults.",
        ],
        points: [
          "Warning and critical exception states",
          "Configurable threshold context per well",
          "Gauges and surveillance plots",
          "Live operating-envelope updates",
        ],
        visual: {
          id: "operating-envelope",
          src: "/assets/xbm/operating_envelope.png",
          alt: "Operating envelope surveillance view with per-well limit monitoring and status indicators",
          caption: "Product visual",
        },
        layout: "visual-right",
      },
      {
        id: "maximum-sustainable-drawdown",
        anchor: "maximum-sustainable-drawdown",
        title: "Maximum Sustainable Drawdown",
        summary: "Dynamic drawdown surveillance—not a single static limit.",
        paragraphs: [
          "Maximum Sustainable Drawdown supports identification of operating conditions where increasing drawdown stops producing a proportionate production benefit or begins indicating increased risk.",
          "The workflow focuses on drawdown versus production response, changing production efficiency, and screening for the edge of effective operating performance—presented as engineering surveillance, not an autonomous setpoint.",
        ],
        points: [
          "Drawdown versus production response",
          "Changing production efficiency screening",
          "Risk-oriented operating condition identification",
        ],
        visual: {
          id: "drawdown",
          src: "/assets/xbm/drawdown-2.png",
          alt: "Maximum sustainable drawdown analysis view showing drawdown versus production response",
          caption: "Product visual",
        },
        layout: "visual-left",
      },
      {
        id: "flux-analysis",
        anchor: "flux-analysis",
        title: "Flux Analysis",
        summary:
          "An additional integrity-related indicator—drawdown alone is not sufficient for sand-control surveillance.",
        paragraphs: [
          "Flux is an engineering indicator related to flow velocity through effective screen area. XBM uses flux surveillance to support sand-control and screen-integrity monitoring alongside drawdown and rate trends.",
          "Useful relationships include flux over time, rate versus effective area, pressure-loss behavior, sand indicators, and step changes associated with choke movement. Outputs are screening indicators for engineer review.",
        ],
        points: [
          "Flux over time and rate versus effective area",
          "Pressure-loss behavior and sand indicators",
          "Step changes associated with choke movement",
          "Complements drawdown for screen-integrity screening",
        ],
        layout: "text-only",
      },
      {
        id: "lite-pta",
        anchor: "lite-pta",
        title: "Short-Term / Lite PTA",
        summary: "Short-duration pressure-transient analysis for routine surveillance.",
        paragraphs: [
          "Lite PTA provides short-duration pressure-transient-analysis workflows intended for surveillance shut-ins—not long-duration reservoir characterization.",
          "Approved objectives include skin assessment, near-wellbore damage screening, completion effectiveness review, productivity comparison, and before/after workover comparison. Results require engineer validation.",
        ],
        points: [
          "Skin and near-wellbore damage screening",
          "Completion effectiveness and productivity comparison",
          "Before/after workover comparison support",
          "Not a substitute for long-duration reservoir tests",
        ],
        visual: {
          id: "lite-pta",
          src: "/assets/xbm/Lite_PTA.png",
          alt: "Short-term pressure transient analysis workflow for skin and productivity screening",
          caption: "Product visual",
        },
        layout: "visual-right",
      },
    ],
  },
  supportingCapabilities: {
    label: "Supporting capabilities",
    title: "Data foundation, aggregation, and integrated review",
    description:
      "Beyond the core workflows, XBM modules provide structured data access, alternative rate surveillance, skin monitoring, production roll-ups, and a combined health view.",
    items: [
      {
        id: "dashboard",
        anchor: "dashboard",
        title: "XBM Dashboard",
        summary: "Field and well performance at a glance.",
        detail:
          "The dashboard provides an overview of monitoring status with key performance indicators, well navigation, production trends, monitoring indicators, exception status, and near-real-time surveillance views.",
        points: [
          "KPIs and well navigation",
          "Production trends and snapshots",
          "Exception status across the field",
          "Near-real-time surveillance views",
        ],
        visual: {
          id: "dashboard",
          src: "/assets/xbm/dashboard.png",
          alt: "XBM dashboard showing field performance overview, well navigation, and exception status",
          caption: "Product visual",
        },
        emphasis: "primary",
      },
      {
        id: "well-data-book",
        anchor: "well-data-book",
        title: "Well Data Book",
        summary: "Structured parameter history for engineering review.",
        detail:
          "Well Data Book organizes important well parameters in one place—supporting diagnosis and trend review across the surveillance workflow.",
        points: [
          "Allocated oil, gas, and water",
          "Static and flowing bottom-hole pressure",
          "Drawdown and productivity index",
          "Pseudo skin, wellbore gradient, and friction drop",
          "Tubing-head and wellhead pressure, choke size",
        ],
        visual: {
          id: "well-data",
          src: "/assets/xbm/Well_Data.png",
          alt: "Well data book with structured parameter history and engineering fields",
          caption: "Product visual",
        },
        emphasis: "secondary",
      },
      {
        id: "temperature-derived-rates",
        anchor: "temperature-derived-rates",
        title: "Temperature-Derived Rates",
        summary: "Rate estimation from measured temperature data.",
        detail:
          "Uses measured temperature data and data-driven relationships to estimate production rates for surveillance—supporting teams when direct rate measurement context varies.",
        visual: {
          id: "temperature-derived",
          src: "/assets/xbm/Temperature_derived.png",
          alt: "Temperature-derived rate estimation view for production surveillance",
          caption: "Product visual",
        },
        emphasis: "secondary",
      },
      {
        id: "pseudo-skin",
        anchor: "pseudo-skin",
        title: "Pseudo Skin Surveillance",
        summary: "Near-wellbore condition screening from routine shut-ins.",
        detail:
          "Monitors skin and productivity changes using routine short-duration shut-in data. Typical shut-in windows may include one, twenty-four, or forty-eight hours—supporting screening relative to previous surveillance, not replacing conventional pressure-transient analysis.",
        points: [
          "Skin and near-wellbore condition trends",
          "Productivity change screening",
          "Comparison against prior surveillance windows",
        ],
        visual: {
          id: "pseudo-skin",
          src: "/assets/xbm/skin_mornitoring.png",
          alt: "Pseudo skin surveillance monitoring view for near-wellbore screening",
          caption: "Product visual",
        },
        emphasis: "tertiary",
      },
      {
        id: "production-aggregation",
        anchor: "production-aggregation",
        title: "Production Aggregation",
        summary: "Roll-up views across well, field, or asset scope.",
        detail:
          "Supports daily, monthly, yearly, average, total, and cumulative production views with engineering indicators such as oil, gas, water, GOR, water cut, and WOR.",
        points: [
          "Daily, monthly, and yearly views",
          "Average, total, and cumulative aggregation",
          "Oil, gas, water, GOR, water cut, and WOR",
        ],
        emphasis: "tertiary",
      },
      {
        id: "integrated-surveillance",
        anchor: "integrated-surveillance",
        title: "Integrated Surveillance",
        summary: "Combined field and well health across workflows.",
        detail:
          "Connects multiple surveillance modules into a broader review context—helping engineers answer questions such as which wells show flat rate with increasing drawdown, increasing skin, high flux with rising drawdown, or incomplete data quality.",
        points: [
          "Exception and well-health summaries",
          "Drawdown, skin, and flux screening together",
          "Data-quality and review-priority flags",
          "Engineering recommendations for review",
        ],
        visual: {
          id: "dashboard-integrated",
          src: "/assets/xbm/dashboard.png",
          alt: "Integrated surveillance dashboard with exception summaries and well health indicators",
          caption: "Product visual",
        },
        emphasis: "primary",
      },
    ],
  },
  dataSources: {
    label: "Data inputs",
    title: "Approved sources and formats",
    description:
      "XBM ingests structured well and production data from approved file formats and petroleum-engineering tools. Do not assume integrations beyond those listed without engineering confirmation.",
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
    title: "Monitoring support for engineering teams",
    description:
      "XBM supports live monitoring, exception alerts, and configurable threshold context—keeping engineers informed when conditions require review.",
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
    title: "Engineer-in-the-loop by design",
    paragraphs: [
      "XBM is built to support screening, diagnosis, prioritization, and review—not to replace petroleum engineers or authorize operational changes independently.",
      "The platform identifies exceptions, applies established production-engineering workflows, and presents recommendations for qualified staff to validate. Operational decisions remain with engineering teams.",
    ],
    principles: [
      "Exception-based surveillance over undifferentiated chart review",
      "Integrated workflows grounded in well-performance fundamentals",
      "Screening outputs validated before operational action",
      "Recommendations as engineering decision support",
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
      caption: "Product visual",
    },
    {
      id: "operating-envelope",
      src: "/assets/xbm/operating_envelope.png",
      alt: "Operating envelope surveillance view with per-well limit monitoring",
      caption: "Product visual",
    },
    {
      id: "temperature-derived",
      src: "/assets/xbm/Temperature_derived.png",
      alt: "Temperature-derived rate estimation for production surveillance",
      caption: "Product visual",
    },
    {
      id: "drawdown",
      src: "/assets/xbm/drawdown-2.png",
      alt: "Maximum sustainable drawdown analysis view",
      caption: "Product visual",
    },
    {
      id: "lite-pta",
      src: "/assets/xbm/Lite_PTA.png",
      alt: "Short-term pressure transient analysis workflow",
      caption: "Product visual",
    },
    {
      id: "pseudo-skin",
      src: "/assets/xbm/skin_mornitoring.png",
      alt: "Pseudo skin surveillance monitoring view",
      caption: "Product visual",
    },
    {
      id: "well-data",
      src: "/assets/xbm/Well_Data.png",
      alt: "Well data book with structured parameter history",
      caption: "Product visual",
    },
    {
      id: "home",
      src: "/assets/xbm/home_page.png",
      alt: "XBM platform home view",
      caption: "Product visual",
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
