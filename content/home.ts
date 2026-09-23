import type { HomeContent } from "./types";

export const home = {
  meta: {
    title: "Production Optimization Technology",
    description:
      "ETE-Optimiza builds XBM, exception-based well surveillance for petroleum and production engineers, and provides the engineering services around it.",
  },
  hero: {
    eyebrow: "Exception-Based Production Surveillance",
    title: "Production surveillance that tells engineers where to look first.",
    description:
      "XBM monitors well performance, surfaces exceptions, and helps petroleum engineers focus on the wells that need attention before they spend hours reviewing every chart.",
    primaryCta: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
    secondaryCta: {
      label: "Explore XBM",
      href: "/xbm",
    },
    visual: {
      id: "surveillance",
      src: "/assets/hero/xbm-surveillance-base.png",
      alt: "Technical visualization of monitored production wells and subsurface formations.",
    },
  },
  problem: {
    label: "The surveillance challenge",
    title: "Too much data. Not enough engineering signal.",
    paragraphs: [
      "Production teams monitor rates, pressures, drawdown, skin, and operating limits across growing well inventories. Dashboards accumulate charts, but engineers still need to decide which wells deserve review first.",
      "Exception-based surveillance surfaces the abnormal conditions first, so review starts with the wells that need it.",
    ],
    points: [
      "Well inventories outpace routine review capacity",
      "Rates, pressures, drawdown, and skin need to be read together",
      "A short list of exceptions beats another dashboard of charts",
    ],
  },
  workflow: {
    label: "How XBM works",
    title: "From well data to a short review list",
    description:
      "XBM imports well data, watches the parameters that matter, and ranks the wells that need a closer look.",
    sequence: "DATA → MONITOR → DETECT → DIAGNOSE → PRIORITIZE → ENGINEER REVIEW",
    steps: [
      {
        id: "data",
        label: "DATA",
        title: "Ingest well and production data",
        description:
          "Import well history and current rates, pressures, and related parameters.",
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
          "Apply integrated workflows: operating envelope, drawdown, PTA screening, and related calculations, to surface probable causes.",
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
        title: "Show where to look next",
        description:
          "Rank the wells and conditions that should be reviewed first.",
      },
    ],
    engineerNote:
      "XBM surfaces exceptions, supports diagnosis, and helps engineers prioritize where to investigate next. Operational decisions remain with qualified engineering teams.",
  },
  platform: {
    label: "XBM platform",
    title: "One connected surveillance platform",
    description:
      "Dashboard, well history, operating envelope, drawdown, and Lite PTA sit in one surveillance workflow.",
    link: {
      label: "Explore the XBM platform",
      href: "/xbm",
    },
    visual: {
      id: "operating-envelope",
      src: "/assets/xbm/operating_envelope.png",
      alt: "Operating envelope surveillance view with per-well limit monitoring",
    },
  },
  capabilities: {
    label: "Engineering capabilities",
    title: "Surveillance workflows built for production engineers",
    description:
      "Four workflows cover the questions production engineers ask most often.",
    items: [
      {
        id: "operating-envelope",
        title: "Operating Envelope",
        summary: "See when a well moves outside its limits.",
        detail:
          "Track rates, choke, tubing-head pressure, gas-lift injection, pseudo skin, and wellbore gradient against the limits set for that well.",
        visual: {
          id: "operating-envelope",
          src: "/assets/xbm/operating_envelope.png",
          alt: "Operating envelope surveillance view with per-well limit monitoring and status indicators",
        },
        layout: "visual-right",
      },
      {
        id: "sustainable-drawdown",
        title: "Maximum Sustainable Drawdown",
        summary: "See when more drawdown stops delivering more production.",
        detail:
          "XBM compares drawdown with production response so engineers can see the edge of useful operating performance.",
        visual: {
          id: "drawdown",
          src: "/assets/xbm/drawdown-2.png",
          alt: "Maximum sustainable drawdown analysis view with drawdown versus production response",
        },
        layout: "visual-left",
      },
      {
        id: "lite-pta",
        title: "Lite PTA",
        summary: "Screen near-wellbore changes from routine shut-ins.",
        detail:
          "Lite PTA looks at skin, completion effectiveness, and productivity from short shut-in windows. Reservoir-boundary work still belongs to long-duration tests.",
        visual: {
          id: "lite-pta",
          src: "/assets/xbm/Lite_PTA.png",
          alt: "Lite PTA workflow for skin and productivity screening",
        },
        layout: "visual-right",
      },
      {
        id: "integrated-surveillance",
        title: "Integrated Surveillance",
        summary: "See which wells need review now.",
        detail:
          "Drawdown, skin, operating-envelope exceptions, and data gaps are read together so the field view points at specific wells.",
        visual: {
          id: "dashboard-integrated",
          src: "/assets/xbm/dashboard.png",
          alt: "Integrated surveillance dashboard with exception summaries and well health indicators",
        },
        layout: "visual-left",
      },
    ],
  },
  credibility: {
    label: "Engineering credibility",
    title: "Built around how production engineers already work",
    paragraphs: [
      "The workflows use the same parameters engineers already compare: rates, pressures, drawdown, skin, and operating limits.",
    ],
    principles: [
      "Exceptions first, then the charts that explain them",
      "Drawdown, skin, limits, and data quality read together",
      "Same surveillance questions across the field, well by well",
    ],
  },
  services: {
    label: "Software and engineering expertise",
    title: "Technology backed by production-engineering experience",
    description:
      "ETE-Optimiza develops XBM and works with operators on production optimization, surveillance, and field implementation.",
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
          "Exception-based well surveillance that analyzes well data, identifies probable issues, and alerts engineers to the conditions that need attention.",
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
