import type { ServicesContent } from "./types";

export const services = {
  meta: {
    title: "Services",
    description:
      "Collaborative engineering services for upstream production optimization, well surveillance, diagnostics, and Exception-Based Monitoring (XBM).",
  },
  hero: {
    title: "Collaborative Services",
    lede: "Let us work together!",
    body: "We invite companies to partner with us in testing our Exception-Based Monitoring (XBM) Application. This tool has been designed to help organizations proactively diagnose oil well and asset issues. If you're interested, please use the Contact Form to reach out to us.",
    cta: {
      label: "Contact Us",
      href: "/contact",
    },
    image: {
      src: "/assets/home/field-aerial.jpg",
      alt: "Drilling rig and lease equipment in open terrain.",
    },
  },
  offerings: [
    {
      id: "exception-based-monitoring",
      title: "Exception-Based Monitoring",
      paragraphs: [
        "The XBM application enables organizations to automatically monitor their assets, alerting them to issues that require attention so they can proactively resolve problems and maximize asset value.",
      ],
      image: {
        src: "/assets/hero/xbm-surveillance-base.png",
        alt: "Technical visualization of monitored production wells and subsurface formations.",
      },
      cta: {
        label: "Explore XBM",
        href: "/xbm",
      },
    },
    {
      id: "operating-envelope",
      title: "Operating Envelope",
      paragraphs: [
        "The operating envelope is the surveillance record for each well. It gives insight into well performance, highlights critical issues, and helps users plan interventions.",
      ],
      image: {
        src: "/assets/xbm/operating_envelope.png",
        alt: "Operating envelope view used to illustrate well surveillance.",
      },
    },
    {
      id: "sustainable-drawdown",
      title: "Sustainable Drawdown",
      paragraphs: [
        "XBM uses temperature-derived rates or multiphase rates, together with real-time surveillance plots, to identify the maximum sustainable drawdown limit.",
        "That limit is the point at which productivity decline accelerates. Operating limits can be identified dynamically rather than assumed as a fixed value.",
      ],
      image: {
        src: "/assets/xbm/drawdown-2.png",
        alt: "Drawdown view used to illustrate sustainable drawdown surveillance.",
      },
    },
    {
      id: "pressure-test-analysis",
      title: "Pressure Test Analysis — At-a-Fly",
      label: "Lite Pressure Transient Analysis (PTA)",
      paragraphs: [
        "Lite PTA supports surveillance and performance tracking. Long-term PTA remains the appropriate tool for reservoir characterization.",
        "Objectives suited to Lite PTA include skin, near-wellbore damage, completion effectiveness, and productivity comparison before and after workovers.",
      ],
      image: {
        src: "/assets/xbm/Lite_PTA.png",
        alt: "Pressure-test view used to illustrate Lite PTA.",
      },
    },
    {
      id: "flux-analysis",
      title: "Flux Analysis",
      paragraphs: [
        "Flux represents average velocity through the screen. It is treated as a risk factor for screen erosion. Drawdown alone is not a sufficient safety metric.",
        "Flux monitoring supports both production optimization and well integrity. A change in the Flux trend is reviewed as an early indication, not as a prediction that a failure will occur.",
      ],
    },
    {
      id: "pseudo-skin",
      title: "Pseudo Skin",
      paragraphs: [
        "Routine 1-hour, 24-hour, and 48-hour shut-ins, using high-quality downhole pressure data, support skin and productivity diagnostics.",
        "The purpose is to assess skin and near-wellbore conditions and to compare productivity with the previous surveillance. Reservoir-boundary determination is not the purpose of these short tests.",
      ],
      image: {
        src: "/assets/xbm/skin_mornitoring.png",
        alt: "Skin monitoring view used to illustrate pseudo skin surveillance.",
      },
    },
    {
      id: "agentic-ai",
      title: "Agentic AI for Well Diagnostics",
      paragraphs: [
        "This work is AI-assisted diagnostics. It reads real-time and historical well data and supports engineering review. It does not authorize operational interventions or take control of a well.",
      ],
      points: [
        "Utilize AI-driven analytics to diagnose oil well performance issues by processing real-time and historical data",
        "Integrate AI solutions with existing monitoring and control systems for seamless data flow and enhanced insight",
        "Automate anomaly detection and root cause analysis to accelerate troubleshooting and optimize production",
        "Leverage AI to recommend targeted interventions based on comprehensive data analysis and patterns",
      ],
    },
  ],
} satisfies ServicesContent;
