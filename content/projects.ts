import type { ProjectsContent } from "./types";

export const projects = {
  meta: {
    title: "Projects",
    description:
      "ETE-Optimiza projects: PO-Studio from 2020, Flow iQ (XBM) from 2026, and Optimech, coming soon.",
  },
  hero: {
    title: "Recent Projects",
    sentence: "PO-Studio, Flow iQ (XBM), and Optimech.",
    image: {
      src: "/assets/home/projects-hero.jpg",
      alt: "Pumping unit in a dry field under a clear sky.",
    },
  },
  poStudio: {
    year: "2020",
    name: "PO-Studio",
    description:
      "PO-Studio is an innovative production optimization software platform, soon to be commercially available.",
    features: [
      "KPI Dashboard",
      "Virtual Collaboration Room",
      "Well Performance Dashboard",
      "Production Gap Analyzer",
    ],
    useCases: [
      "Screen and analyze wells to uncover hidden inefficiencies",
      "Evaluate the impact of correcting problems",
      "Search for unlocked potentials",
      "Improve technical efficiency",
      "Increase profitability",
    ],
    image: {
      src: "/assets/home/plan-field.jpg",
      alt: "Process facility photographed from the air.",
    },
  },
  flowIq: {
    year: "2026",
    name: "Flow iQ (XBM)",
    description:
      "Built software that performs exception-based surveillance by analyzing well data, swiftly identifying probable causes, and proactively alerting engineers before issues escalate. It recommends solutions based on proven strategies for improving well performance.",
    link: {
      label: "Explore XBM",
      href: "/xbm",
    },
    image: {
      src: "/assets/hero/xbm-surveillance-base.png",
      alt: "Technical visualization of monitored production wells, used for the Flow iQ (XBM) project.",
    },
  },
  optimech: {
    name: "Optimech",
    status: "Coming Soon",
    image: {
      src: "/assets/home/optimize-plant.jpg",
      alt: "Pressure gauges mounted on process piping.",
    },
  },
} satisfies ProjectsContent;
