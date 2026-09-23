import type { ServicesContent } from "./types";

export const services = {
  meta: {
    title: "Engineering Services",
    description:
      "Production optimization, well surveillance, workflow automation, and XBM pilot support from ETE-Optimiza engineers.",
  },
  hero: {
    eyebrow: "Engineering services",
    title: "Engineering work alongside the surveillance platform.",
    description:
      "ETE-Optimiza engineers help operators diagnose well performance, set up surveillance, and put XBM into daily use.",
    primaryCta: {
      label: "Request an XBM Pilot",
      href: "/contact?intent=pilot",
    },
    secondaryCta: {
      label: "Discuss Your Field",
      href: "/contact",
    },
  },
  collaboration: {
    label: "How we work",
    title: "People and software, used together.",
    paragraphs: [
      "The services are the engineering work: diagnosis, surveillance setup, workflow automation, and pilot support. XBM is the software those engagements often run on.",
      "Engineers stay in control. We help interpret surveillance results. Operational decisions remain with your engineering team.",
    ],
    principles: [
      "Start from the field's wells, data, and current review practice",
      "Configure the workflows with the engineers who will use them",
      "Leave the team able to interpret the results",
    ],
  },
  engagement: {
    label: "Engagement model",
    title: "A coherent path from field context to engineering review",
    description:
      "Engagements typically move from understanding surveillance needs through configuration, collaborative evaluation, and ongoing engineering review, whether supporting XBM deployment or standalone engineering analysis.",
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
          "Define operating limits, screening parameters, and engineering workflows appropriate to asset scope: exception-based monitoring, drawdown surveillance, PTA screening, or integrated combinations.",
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
          "Stay available as the field and the surveillance questions change.",
      },
    ],
  },
  domains: {
    label: "Services",
    title: "Four ways we work with a field team",
    description:
      "Production optimization, surveillance and diagnostics, workflow automation, and XBM pilot support.",
    items: [
      {
        id: "production-optimization",
        name: "Production Optimization",
        summary: "Find where well performance is constrained.",
        detail:
          "Identify where well performance is being constrained and focus engineering effort on the conditions with the greatest operational relevance.",
        themes: [
          "Well performance and bottlenecks",
          "Operating strategy",
          "Engineering review of optimization opportunities",
        ],
      },
      {
        id: "surveillance-diagnostics",
        name: "Surveillance & Well Diagnostics",
        summary: "Read the exceptions, then the well.",
        detail:
          "Operating envelope, sustainable drawdown, flux, Lite PTA, and pseudo skin, used as related surveillance work rather than separate products.",
        themes: [
          "Operating envelope and exception states",
          "Drawdown versus production response",
          "Flux and screen integrity",
          "Lite PTA and pseudo skin",
        ],
      },
      {
        id: "workflow-automation",
        name: "Workflow & Data Automation",
        summary: "Cut the repetitive part of surveillance.",
        detail:
          "Structure the data, repeat the surveillance checks, and produce the reports engineers already ask for. AI-assisted interpretation can sit inside that workflow when it helps the review.",
        themes: [
          "Data handling and repeatable checks",
          "Engineering reports",
          "AI-assisted reading of surveillance results",
        ],
      },
      {
        id: "xbm-implementation",
        name: "XBM Implementation & Pilot Support",
        summary: "Put XBM to work on your wells.",
        detail:
          "Configure surveillance for the field, run a pilot with your engineers, and transfer how to interpret the results inside the existing workflow.",
        themes: [
          "Workflow configuration",
          "Pilot collaboration",
          "Interpretation and knowledge transfer",
        ],
      },
    ],
  },
  platform: {
    label: "XBM",
    title: "Looking for the software platform?",
    description: "Explore XBM for the product itself. These services are how ETE-Optimiza engineers work with you around it.",
    link: {
      label: "Explore XBM",
      href: "/xbm",
    },
    note: "",
  },
  contextualVisual: {
    id: "well-data",
    src: "/assets/xbm/Well_Data.png",
    alt: "Structured well data view showing production and pressure parameters used in engineering surveillance workflows",
  },
  pilotCta: {
    title: "Request an XBM pilot",
    description:
      "Tell us about the field. We will look at whether a bounded XBM pilot fits the wells, the data, and the way your engineers review them.",
    primary: {
      label: "Request an XBM Pilot",
      href: "/contact?intent=pilot",
    },
    secondary: {
      label: "Partner With Us",
      href: "/contact?intent=partnership",
    },
  },
} satisfies ServicesContent;
