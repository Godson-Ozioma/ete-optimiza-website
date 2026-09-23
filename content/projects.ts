import type { ProjectsContent } from "./types";

export const projects = {
  meta: {
    title: "Projects",
    description:
      "ETE-Optimiza software development from PO-Studio (2020) to XBM (2026): exception-based well surveillance and production optimization engineering.",
  },
  hero: {
    eyebrow: "Product Evolution",
    title: "From production optimization software to exception-based surveillance.",
    description:
      "ETE-Optimiza's software development spans a predecessor production-optimization platform and the current XBM flagship. This page traces that evolution, not client deployments or case studies.",
  },
  evolution: {
    label: "Timeline",
    title: "Two chapters in production optimization software",
    description:
      "PO-Studio established early collaboration and performance-analysis foundations. XBM extends that direction into integrated exception-based well surveillance for petroleum and production engineers.",
  },
  timeline: [
    {
      id: "po-studio",
      year: 2020,
      name: "PO-Studio",
      summary:
        "Earlier production-optimization software focused on KPI visibility, collaborative engineering review, and well performance analysis.",
      status: "predecessor",
      role: "Predecessor platform",
      features: [
        "KPI Dashboard",
        "Virtual Collaboration Room",
        "Well Performance Dashboard",
        "Production Gap Analyzer",
      ],
    },
    {
      id: "xbm",
      year: 2026,
      name: "XBM",
      summary:
        "A software platform for exception-based well surveillance that analyzes well data, identifies probable issues, alerts engineers to conditions requiring attention, and provides engineering recommendations for review.",
      status: "current",
      role: "Current flagship",
      link: {
        label: "Explore XBM",
        href: "/xbm",
      },
    },
  ],
  contactCta: {
    title: "Discuss your field or a pilot",
    description:
      "Learn how XBM builds on ETE-Optimiza's production optimization direction, or explore collaboration on an engineering pilot.",
    primary: {
      label: "Contact Us",
      href: "/contact",
    },
    secondary: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
  },
} satisfies ProjectsContent;
