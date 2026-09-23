import type { HomeContent } from "./types";

export const home = {
  meta: {
    title: "Upstream Oilfield Optimization",
    description:
      "ETE-Optimiza is a Richmond, Texas technology company for upstream production optimization, engineering services, and software including XBM.",
  },
  hero: {
    title:
      "Unleashing Peak Performance: Harnessing Cutting-Edge Tech for Strategic Oilfield Optimization",
    cta: {
      label: "Let's Connect",
      href: "#contact",
    },
    image: {
      src: "/assets/home/hero-oilfield.jpg",
      alt: "Pumping unit silhouetted against a sunset sky.",
    },
  },
  services: {
    title: "ETE-Optimiza Services",
    phrases: [
      "Expert Solutions.",
      "Innovative Technology.",
      "Driven by Results",
    ],
    items: [
      {
        name: "Exception-Based Monitoring",
        href: "/services#exception-based-monitoring",
        image: {
          src: "/assets/xbm/dashboard.png",
          alt: "Surveillance interface used to illustrate exception-based monitoring.",
        },
      },
      {
        name: "Operating Envelope",
        href: "/services#operating-envelope",
        image: {
          src: "/assets/xbm/operating_envelope.png",
          alt: "Operating envelope view used to illustrate that service.",
        },
      },
      {
        name: "Sustainable Drawdown",
        href: "/services#sustainable-drawdown",
        image: {
          src: "/assets/xbm/drawdown-2.png",
          alt: "Drawdown view used to illustrate sustainable drawdown.",
        },
      },
      {
        name: "Pressure Test Analysis - at-a-fly",
        href: "/services#pressure-test-analysis",
        image: {
          src: "/assets/xbm/Lite_PTA.png",
          alt: "Pressure-test view used to illustrate pressure test analysis.",
        },
      },
      {
        name: "Flux Analysis",
        href: "/services#flux-analysis",
      },
      {
        name: "Pseudo Skin",
        href: "/services#pseudo-skin",
        image: {
          src: "/assets/xbm/skin_mornitoring.png",
          alt: "Skin monitoring view used to illustrate pseudo skin.",
        },
      },
      {
        name: "Agentic AI for Well Diagnostics",
        href: "/services#agentic-ai",
        image: {
          src: "/assets/xbm/Well_Data.png",
          alt: "Well data view used to illustrate diagnostics support.",
        },
      },
    ],
  },
  xbm: {
    title: "XBM",
    description:
      "Boost Your Oil Output—Right from Your Desktop. ETE-Optimiza’s purpose-built XBM optimization software empowers engineers to drive comprehensive improvements and strategically plan your oilfield assets.",
    cta: {
      label: "Learn More",
      href: "/xbm",
    },
    image: {
      src: "/assets/hero/xbm-surveillance-base.png",
      alt: "Technical visualization of monitored production wells and subsurface formations.",
    },
  },
  who: {
    title: "Who We Are",
    body: "Our mission is to deliver optimization solutions that maximize performance and efficiency in the upstream oil and gas sector. As a cutting-edge technology company, we draw on more than thirty years of experience and pioneering technology to streamline production processes. We are committed to equipping our clients with innovative strategies that drive operational excellence and foster a culture of safety. Through our deep expertise and unwavering dedication, we empower clients with the tools and insights necessary to achieve their objectives.",
    facts: ["Founded 2020", "Richmond, TX-based"],
    cta: {
      label: "About Us",
      href: "/about",
    },
    image: {
      src: "/assets/home/field-aerial.jpg",
      alt: "Drilling rig and lease equipment in open terrain.",
    },
  },
  process: {
    phases: [
      {
        id: "plan",
        title: "PLAN",
        image: {
          src: "/assets/home/hero-oilfield.jpg",
          alt: "Pumping unit in an open field.",
        },
        points: [
          "Assess current well performance through data analysis and field evaluation",
          "Identify production bottlenecks and inefficiencies",
          "Set clear optimization objectives aligned with operational goals",
          "Evaluate and select appropriate technologies, such as artificial lift systems, chemical treatments, and real-time monitoring tools",
          "Develop a step-by-step implementation plan, including timeline, budget, and resource allocation",
          "Engage multidisciplinary teams for integrated solutions, including reservoir, production, and facilities engineers",
          "Monitor progress with key performance indicators (KPIs) and adjust strategies as needed",
          "Prioritize health, safety, and environmental considerations throughout the process",
          "Document lessons learned and best practices for future optimization projects",
        ],
      },
      {
        id: "diagnose",
        title: "DIAGNOSE",
        image: {
          src: "/assets/home/optimize-plant.jpg",
          alt: "Pressure gauges mounted on process piping.",
        },
        points: [
          "Utilize AI-driven analytics to diagnose oil well performance issues by processing real-time and historical data",
          "Integrate AI solutions with existing monitoring and control systems for seamless data flow and enhanced insight",
          "Automate anomaly detection and root cause analysis to accelerate troubleshooting and optimize production",
          "Leverage AI to recommend targeted interventions based on comprehensive data analysis and patterns",
        ],
      },
      {
        id: "optimize",
        title: "OPTIMIZE",
        image: {
          src: "/assets/home/plan-field.jpg",
          alt: "Process facility at dusk.",
        },
        points: [
          "Analyze real-time and historical well data to identify performance gaps",
          "Implement advanced monitoring and control systems for continuous optimization",
          "Apply enhanced recovery techniques, such as artificial lift or stimulation",
          "Optimize production parameters for maximum efficiency and output",
          "Regularly review and adjust strategies based on performance metrics",
        ],
      },
    ],
  },
  testimonial: {
    title: "What Clients Say",
    quote:
      "There is nothing so useless as doing efficiently that which should not be done at all.",
    attribution: "Peter F. Drucker",
  },
  projects: {
    title: "Recent Projects",
    items: [
      {
        id: "po-studio",
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
        href: "/projects",
        image: {
          src: "/assets/home/plan-field.jpg",
          alt: "Process facility photographed from the air.",
        },
      },
      {
        id: "flow-iq",
        year: "2026",
        name: "Flow iQ",
        description:
          "Built Software that performs exception-based surveillance by analyzing well data, swiftly identifying probable causes, and proactively alerting engineers before issues escalate. It recommends solutions based on proven strategies for improving well performance.",
        href: "/xbm",
        image: {
          src: "/assets/xbm/dashboard.png",
          alt: "XBM interface illustrating the Flow iQ project entry.",
        },
      },
      {
        id: "optimech",
        name: "Optimech",
        status: "Coming Soon",
      },
    ],
  },
  contact: {
    title: "Let's collaborate on your next project.",
    image: {
      src: "/assets/home/rig-worker.jpg",
      alt: "Field worker beside a drilling rig and tubulars.",
    },
  },
} satisfies HomeContent;
