import type { ServicesContent } from "./types";

export const services = {
  meta: {
    title: "Engineering Services",
    description:
      "Production optimization, exception-based surveillance, and engineering workflow support from ETE-Optimiza—combining petroleum-engineering expertise with software and automated screening.",
  },
  hero: {
    eyebrow: "Software & Engineering Services",
    title: "Engineering collaboration for production optimization and surveillance.",
    description:
      "ETE-Optimiza pairs XBM platform development with hands-on engineering support. We work alongside petroleum and production engineers to structure surveillance workflows, interpret screening outputs, and improve decision support—without replacing engineering judgement.",
    primaryCta: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
    secondaryCta: {
      label: "Discuss Your Field",
      href: "/contact",
    },
  },
  collaboration: {
    label: "How we work",
    title: "Collaboration and engineering support—not a software handoff.",
    paragraphs: [
      "Upstream production optimization requires both disciplined engineering analysis and practical workflow integration. ETE-Optimiza provides a combination of software and engineering services intended to improve well surveillance, production optimization, and operational decision support.",
      "Our engineers contribute petroleum-engineering expertise alongside software development and automation. Knowledge transfer between ETE-Optimiza staff and client engineers is part of how engagements are structured—reducing repetitive surveillance work while keeping qualified staff responsible for operational decisions.",
    ],
    principles: [
      "Engineer-in-the-loop screening and recommendations",
      "Collaborative workflow design aligned to field context",
      "Integration with existing engineering processes and data",
      "Decision support—not autonomous operational approval",
    ],
  },
  engagement: {
    label: "Engagement model",
    title: "A coherent path from field context to engineering review",
    description:
      "Engagements typically move from understanding surveillance needs through configuration, collaborative evaluation, and ongoing engineering review—whether supporting XBM deployment or standalone engineering analysis.",
    phases: [
      {
        id: "discover",
        label: "01",
        title: "Understand field and workflow context",
        description:
          "Review well inventory, data availability, surveillance priorities, and how engineering teams currently identify wells requiring attention.",
      },
      {
        id: "configure",
        label: "02",
        title: "Structure surveillance and analysis workflows",
        description:
          "Define operating limits, screening parameters, and engineering workflows appropriate to asset scope—exception-based monitoring, drawdown surveillance, PTA screening, or integrated combinations.",
      },
      {
        id: "collaborate",
        label: "03",
        title: "Collaborate on evaluation and pilot use",
        description:
          "Work alongside client engineers to evaluate screening outputs, refine thresholds, and transfer knowledge on interpreting surveillance results within established engineering processes.",
      },
      {
        id: "review",
        label: "04",
        title: "Support ongoing engineering review",
        description:
          "Provide continued engineering support and workflow refinement as conditions change. Screening outputs and recommendations remain subject to engineer validation before action.",
      },
    ],
  },
  domains: {
    label: "Service domains",
    title: "Production optimization and surveillance engineering",
    description:
      "Approved service themes span surveillance workflows, engineering analysis, and workflow automation. Each domain supports screening and decision support—outputs require engineer validation.",
    items: [
      {
        id: "production-optimization",
        name: "Production Optimization",
        summary: "Integrated well-performance diagnostics and optimization screening.",
        detail:
          "Engineering support for diagnosing performance changes, comparing productivity indicators, and screening wells where operating conditions may warrant review—grounded in production-engineering fundamentals rather than generic reporting.",
        themes: [
          "Well-performance diagnostics",
          "Production trend interpretation",
          "Optimization screening for engineer review",
        ],
      },
      {
        id: "exception-based-monitoring",
        name: "Exception-Based Surveillance",
        summary: "Continuous monitoring that prioritizes abnormal conditions.",
        detail:
          "Structured surveillance workflows that identify exceptions and abnormal trends across well inventories, helping engineers focus review on conditions that warrant attention rather than scanning every chart.",
        themes: [
          "Proactive identification of abnormal well conditions",
          "Exception alerts and monitoring indicators",
          "Prioritization for engineering follow-up",
        ],
      },
      {
        id: "operating-envelope",
        name: "Operating Envelope Surveillance",
        summary: "Per-well monitoring against defined operating limits.",
        detail:
          "Engineering support for configuring and interpreting operating-envelope surveillance—warning and critical states, threshold context, and live monitoring of parameters such as rates, choke, pressures, and wellbore indicators.",
        themes: [
          "Limit-based surveillance configuration",
          "Warning and critical state interpretation",
          "Live operating-envelope updates",
        ],
      },
      {
        id: "sustainable-drawdown",
        name: "Sustainable Drawdown Analysis",
        summary: "Dynamic drawdown surveillance and production-response screening.",
        detail:
          "Analysis to identify operating conditions where increasing drawdown stops producing a proportionate production benefit or begins indicating increased risk—presented as dynamic engineering surveillance, not a single static limit or autonomous setpoint.",
        themes: [
          "Drawdown versus production response",
          "Changing production efficiency screening",
          "Edge-of-performance condition identification",
        ],
      },
      {
        id: "pressure-transient-analysis",
        name: "Pressure Transient Analysis",
        summary: "Short-duration PTA workflows for routine surveillance.",
        detail:
          "Short-term and lite pressure-transient-analysis support for skin assessment, near-wellbore damage screening, completion effectiveness, and productivity comparison using routine shut-in windows—outputs are screening results requiring engineer validation.",
        themes: [
          "Skin and near-wellbore screening",
          "Before/after workover comparison",
          "Short-duration surveillance shut-ins",
        ],
      },
      {
        id: "flux-analysis",
        name: "Flux & Integrity Surveillance",
        summary: "Sand-control and screen-integrity monitoring using flux indicators.",
        detail:
          "Flux surveillance as an additional engineering indicator for sand-control and screen-integrity monitoring—drawdown alone is not sufficient; flux provides complementary integrity-related screening alongside rate and pressure-loss behavior.",
        themes: [
          "Flux over time and step-change screening",
          "Sand-indicator context",
          "Screen-integrity engineering indicators",
        ],
      },
      {
        id: "pseudo-skin",
        name: "Pseudo Skin Surveillance",
        summary: "Routine shut-in based skin and productivity monitoring.",
        detail:
          "Monitoring of skin and near-wellbore productivity changes using short-duration shut-in data—supporting comparison against previous surveillance without replacing conventional long-duration pressure-transient analysis.",
        themes: [
          "Skin and productivity trend screening",
          "Near-wellbore condition monitoring",
          "Routine shut-in surveillance windows",
        ],
      },
      {
        id: "workflow-automation",
        name: "Engineering Workflow Automation",
        summary: "Automation of repetitive surveillance and reporting tasks.",
        detail:
          "Workflow automation that reduces repetitive engineering work—structured data handling, automated screening, and engineering reporting integrated with surveillance outputs to support faster review cycles.",
        themes: [
          "Repetitive task reduction",
          "Engineering reporting workflows",
          "Integration with client engineering processes",
        ],
      },
      {
        id: "ai-assisted-diagnostics",
        name: "AI-Assisted Diagnostics",
        summary: "AI-assisted analysis integrated with surveillance workflows.",
        detail:
          "AI-assisted well diagnostics and natural-language engineering workflows that support interpretation of surveillance outputs. Automated screening and decision support—never autonomous reservoir or production engineering.",
        themes: [
          "AI-assisted analysis",
          "Natural-language engineering workflows",
          "Automated screening for engineer review",
        ],
      },
      {
        id: "production-surveillance",
        name: "Production Surveillance",
        summary: "Live monitoring and engineering decision support across asset scope.",
        detail:
          "Production surveillance spanning field and asset scope—live monitoring, exception alerts, configurable thresholds, and engineering decision support that helps teams maintain structured oversight of well performance.",
        themes: [
          "Live monitoring and exception alerts",
          "Field and asset-scope surveillance",
          "Engineering decision support",
        ],
      },
    ],
  },
  platform: {
    label: "XBM platform",
    title: "Software that carries surveillance into daily engineering practice",
    description:
      "Many service engagements connect to XBM—the exception-based well surveillance platform ETE-Optimiza develops. XBM ingests well data, monitors parameters, identifies exceptions, supports diagnosis, and presents recommendations for engineer review.",
    link: {
      label: "Explore the XBM platform",
      href: "/xbm",
    },
    note: "Services complement the platform: ETE-Optimiza engineers help teams configure workflows, interpret screening outputs, and integrate surveillance into established engineering processes.",
  },
  contextualVisual: {
    id: "well-data",
    src: "/assets/xbm/Well_Data.png",
    alt: "Structured well data view showing production and pressure parameters used in engineering surveillance workflows",
    caption: "Well Data Book — product context for engineering surveillance services",
  },
  pilotCta: {
    title: "Collaborate on an XBM pilot",
    description:
      "ETE-Optimiza invites operators and engineering teams to explore exception-based surveillance with XBM. Discuss your field, review engineering workflows, and evaluate fit for your production optimization needs.",
    primary: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
    secondary: {
      label: "Partner With Us",
      href: "/contact?intent=partnership",
    },
  },
} satisfies ServicesContent;
