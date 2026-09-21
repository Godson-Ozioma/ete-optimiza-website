import type { HomeContent } from "./types";

export const home = {
  meta: {
    title: "Production Optimization Technology",
    description:
      "ETE-Optimiza combines petroleum-engineering expertise with XBM, an exception-based well surveillance platform for production optimization and engineering decision support.",
  },
  hero: {
    eyebrow: "Exception-Based Production Surveillance",
    title: "Production surveillance that tells engineers where to look first.",
    description:
      "XBM is an engineering workflow platform for petroleum and production engineers. It monitors well data, identifies exceptions, supports diagnosis, and helps prioritize wells that require attention—so review starts with the right conditions, not every chart.",
    primaryCta: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
    secondaryCta: {
      label: "Explore XBM",
      href: "/xbm",
    },
    visual: {
      id: "dashboard",
      src: "/assets/xbm/dashboard.png",
      alt: "XBM dashboard showing field performance overview, well navigation, and exception status indicators",
      caption: "XBM Dashboard",
    },
  },
  problem: {
    label: "The surveillance challenge",
    title: "Too much data. Not enough engineering signal.",
    paragraphs: [
      "Production teams monitor rates, pressures, drawdown, skin, and operating limits across growing well inventories. Dashboards accumulate charts, but engineers still need to decide which wells deserve review first.",
      "Exception-based surveillance is meant to invert that burden: surface abnormal conditions, support diagnosis, and prioritize attention—without replacing petroleum-engineering judgement.",
    ],
    points: [
      "Well inventories outpace routine review capacity",
      "Multiple parameters must be read together, not in isolation",
      "Screening outputs require engineer validation before action",
      "Integrated workflows beat disconnected spreadsheets and alerts",
    ],
  },
  workflow: {
    label: "How XBM works",
    title: "From data ingestion to engineer review",
    description:
      "XBM connects surveillance, diagnosis, and prioritization into one engineering workflow. Recommendations are presented for review—the engineer remains responsible for operational decisions.",
    sequence: "DATA → MONITOR → DETECT → DIAGNOSE → PRIORITIZE → ENGINEER REVIEW",
    steps: [
      {
        id: "data",
        label: "DATA",
        title: "Ingest well and production data",
        description:
          "Access structured well history and live or near-live parameters from approved sources and formats.",
      },
      {
        id: "monitor",
        label: "MONITOR",
        title: "Continuous parameter surveillance",
        description:
          "Track operating limits, performance trends, and engineering indicators across field and well scope.",
      },
      {
        id: "detect",
        label: "DETECT",
        title: "Identify exceptions and abnormal trends",
        description:
          "Highlight conditions that move outside expected ranges or show patterns that warrant engineering attention.",
      },
      {
        id: "diagnose",
        label: "DIAGNOSE",
        title: "Support engineering analysis",
        description:
          "Apply integrated workflows—operating envelope, drawdown, PTA screening, and related calculations—to surface probable causes.",
      },
      {
        id: "prioritize",
        label: "PRIORITIZE",
        title: "Rank wells requiring attention",
        description:
          "Focus review on wells and conditions where surveillance indicates the greatest need for engineering follow-up.",
      },
      {
        id: "engineer-review",
        label: "ENGINEER REVIEW",
        title: "Recommendations for validation",
        description:
          "Present insights and recommendations for petroleum-engineer review. XBM supports decision-making—it does not authorize operational changes.",
      },
    ],
    engineerNote:
      "Engineer-in-the-loop by design: XBM screens, highlights, and recommends. Operational decisions stay with qualified engineering staff.",
  },
  platform: {
    label: "XBM platform",
    title: "One connected surveillance platform",
    description:
      "XBM combines dashboard overview, structured well data, operating-envelope monitoring, drawdown surveillance, PTA screening, and integrated recommendations into a single engineering environment—not a generic charting tool.",
    link: {
      label: "Explore the XBM platform",
      href: "/xbm",
    },
    visual: {
      id: "operating-envelope",
      src: "/assets/xbm/operating_envelope.png",
      alt: "Operating envelope surveillance view with per-well limit monitoring",
      caption: "Operating Envelope",
    },
  },
  capabilities: {
    label: "Engineering capabilities",
    title: "Surveillance workflows built for production engineers",
    description:
      "A focused set of integrated modules for exception-based monitoring, operating-limit surveillance, and engineering screening.",
    items: [
      {
        id: "operating-envelope",
        title: "Operating Envelope",
        summary:
          "Per-well surveillance against defined operating limits with warning and critical states.",
        detail:
          "Monitor parameters such as rates, choke, tubing-head pressure, gas-lift injection, pseudo skin, and wellbore gradient. Gauges, surveillance plots, and live updates help engineers see when conditions move outside expected ranges.",
        visual: {
          id: "operating-envelope",
          src: "/assets/xbm/operating_envelope.png",
          alt: "Operating envelope surveillance view with per-well limit monitoring and status indicators",
          caption: "Operating Envelope",
        },
        layout: "visual-right",
      },
      {
        id: "sustainable-drawdown",
        title: "Maximum Sustainable Drawdown",
        summary:
          "Dynamic drawdown surveillance—not a single static limit.",
        detail:
          "Identify operating conditions where increasing drawdown stops producing a proportionate production benefit or begins indicating increased risk. Supports screening for changing production efficiency and the edge of effective operating performance.",
        visual: {
          id: "drawdown",
          src: "/assets/xbm/drawdown-2.png",
          alt: "Maximum sustainable drawdown analysis view with drawdown versus production response",
          caption: "Maximum Sustainable Drawdown",
        },
        layout: "visual-left",
      },
      {
        id: "lite-pta",
        title: "Short-Term / Lite PTA",
        summary:
          "Short-duration pressure-transient analysis for routine surveillance.",
        detail:
          "Screen skin, near-wellbore damage, completion effectiveness, and productivity changes using short shut-in windows. Outputs are engineering screening results that require engineer validation—not long-duration reservoir characterization.",
        visual: {
          id: "lite-pta",
          src: "/assets/xbm/Lite_PTA.png",
          alt: "Short-term pressure transient analysis workflow for skin and productivity screening",
          caption: "Short-Term / Lite PTA",
        },
        layout: "visual-right",
      },
      {
        id: "integrated-surveillance",
        title: "Integrated Surveillance",
        summary:
          "Combined field and well health view across multiple workflows.",
        detail:
          "Connect drawdown trends, skin screening, operating-envelope exceptions, and data-quality flags into exception summaries and engineering recommendations—helping teams answer which wells need review now.",
        visual: {
          id: "dashboard-integrated",
          src: "/assets/xbm/dashboard.png",
          alt: "Integrated surveillance dashboard with exception summaries and well health indicators",
          caption: "Integrated Surveillance",
        },
        layout: "visual-left",
      },
    ],
  },
  credibility: {
    label: "Engineering credibility",
    title: "Screening and decision support—not autonomous control",
    paragraphs: [
      "XBM is built for petroleum and production engineers who need faster, more structured surveillance—not a system that replaces engineering judgement.",
      "The platform identifies exceptions, supports diagnosis with established workflows, and presents recommendations for review. It must not be described as independently authorizing operational changes.",
    ],
    principles: [
      "Exception-based surveillance over chart overload",
      "Engineering workflows grounded in well-performance fundamentals",
      "Screening outputs validated by qualified staff",
      "Integrated analysis across drawdown, skin, limits, and data quality",
    ],
  },
  services: {
    label: "Software and engineering expertise",
    title: "Technology backed by production-engineering experience",
    description:
      "ETE-Optimiza develops XBM and provides engineering services for production optimization, surveillance workflows, and operational decision support.",
    expertise:
      "The team draws on more than 30 years of combined industry experience in petroleum engineering, production optimization, and software development.",
    links: [
      { label: "View services", href: "/services" },
      { label: "About ETE-Optimiza", href: "/about" },
    ],
  },
  projects: {
    label: "Product evolution",
    title: "From production optimization software to XBM",
    description:
      "ETE-Optimiza's software development spans a predecessor platform and the current flagship surveillance system.",
    entries: [
      {
        year: 2020,
        name: "PO-Studio",
        summary:
          "Earlier production-optimization software with KPI dashboard, virtual collaboration room, well performance dashboard, and production gap analyzer.",
        status: "predecessor",
      },
      {
        year: 2026,
        name: "XBM",
        summary:
          "Exception-based well surveillance platform that analyzes well data, identifies probable issues, alerts engineers to conditions requiring attention, and provides engineering recommendations for review.",
        status: "current",
      },
    ],
  },
  pilotCta: {
    title: "Collaborate on an XBM pilot",
    description:
      "ETE-Optimiza invites operators and engineering teams to explore exception-based surveillance with XBM. Discuss your field, review the platform, and evaluate fit for your surveillance workflow.",
    primary: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
    secondary: {
      label: "Explore XBM",
      href: "/xbm",
    },
  },
} satisfies HomeContent;
