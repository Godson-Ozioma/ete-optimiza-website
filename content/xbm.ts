import type { XbmContent } from "./types";

export const xbm = {
  meta: {
    title: "Exception-Based Monitoring (XBM)",
    description:
      "XBM enables organizations to automatically monitor their assets, alerting them to issues that require attention so they can proactively resolve problems and maximize asset value.",
  },
  hero: {
    name: "Exception-Based Monitoring (XBM)",
    statement:
      "XBM enables organizations to automatically monitor their assets, alerting them to issues that require attention so they can proactively resolve problems and maximize asset value.",
    primaryCta: {
      label: "Contact Us",
      href: "/#contact",
    },
    secondaryCta: {
      label: "Explore the Platform",
      href: "#platform",
    },
    image: {
      src: "/assets/xbm/external/production-platform.jpg",
      alt: "Offshore production platform at dusk.",
    },
  },
  modules: [
    {
      id: "landing",
      anchor: "xbm-hero",
      name: "Landing page",
      summary:
        "XBM enables organizations to automatically monitor their assets, alerting them to issues that require attention so they can proactively resolve problems and maximize asset value.",
    },
    {
      id: "dashboard",
      anchor: "dashboard",
      name: "XBM Dashboard",
      summary:
        "Well Navigator, well information, plots, monitoring indicators, KPI summary, and a real-time production snapshot.",
    },
    {
      id: "well-data-book",
      anchor: "well-data-book",
      name: "XBM Well Data Book",
      summary:
        "Well-performance parameters used to determine how a well is performing, including rates, pressures, drawdown, and choke size.",
    },
    {
      id: "operating-envelope",
      anchor: "operating-envelope",
      name: "Operating Envelope with Alert Systems",
      summary:
        "The surveillance record for each well. It highlights critical issues and helps users plan interventions.",
    },
    {
      id: "temperature-derived-rates",
      anchor: "temperature-derived-rates",
      name: "Temperature-Derived Rates",
      summary:
        "Measured well temperature is correlated to production rate for performance surveillance.",
    },
    {
      id: "maximum-sustainable-drawdown",
      anchor: "maximum-sustainable-drawdown",
      name: "Maximum Sustainable Drawdown",
      summary:
        "The point at which productivity decline accelerates, identified from rates and real-time surveillance plots.",
    },
    {
      id: "flux",
      anchor: "flux",
      name: "Flux",
      summary: "Average velocity through the screen, used as a risk factor for screen erosion.",
    },
    {
      id: "short-term-pta",
      anchor: "short-term-pta",
      name: "Short-Term Pressure Transient Analysis (PTA)",
      summary:
        "Surveillance and performance tracking for skin, near-wellbore damage, completion effectiveness, and productivity comparison.",
    },
    {
      id: "pseudo-skin",
      anchor: "pseudo-skin",
      name: "Pseudo Skin Surveillance",
      summary:
        "Skin and productivity diagnostics from 1-hour, 24-hour, and 48-hour routine shut-ins.",
    },
  ],
  dashboard: {
    id: "dashboard",
    title: "XBM Dashboard",
    paragraphs: [
      "The XBM Dashboard offers a detailed overview of essential information from the XBM application. It includes the Well Navigator, a well information window, a plot section, and a quick overview of monitoring indicators. Additionally, it features a summary of key performance indicators (KPIs) and a real-time snapshot of production, with space allocated for any additional information as needed.",
    ],
    features: [
      "Well Navigator",
      "Well information window",
      "Plot section",
      "Monitoring indicators",
      "KPI summary",
      "Real-time production snapshot",
    ],
  },
  wellData: {
    id: "well-data-book",
    title: "XBM Well Data Book",
    intro:
      "The well data book contains essential information about the well that is critical for determining its performance. The data is presented in a tabular format.",
    date: { name: "Date", unit: "Datestamp" },
    groups: [
      {
        id: "production",
        title: "Production",
        fields: [
          { name: "Allocated Daily Oil", unit: "bbl/d" },
          { name: "Allocated Daily Gas", unit: "Mscf/d" },
          { name: "Allocated Daily Water", unit: "bbl/d" },
        ],
      },
      {
        id: "pressure",
        title: "Pressure",
        fields: [
          { name: "Static Bottom Hole Pressure", unit: "psi" },
          { name: "Flowing Bottom Hole Pressure", unit: "psi" },
          { name: "Tubing Head Pressure (THP)", unit: "psi" },
          { name: "Well Head Pressure (WHP)", unit: "psi" },
        ],
      },
      {
        id: "performance",
        title: "Performance",
        fields: [
          { name: "Drawdown", unit: "psi" },
          { name: "Productivity Index (PI)", unit: "bbl/psi" },
          { name: "Pseudo Skin" },
          { name: "Wellbore Gradient", unit: "psi/ft" },
          { name: "Friction Drop", unit: "psi" },
          { name: "Choke Size" },
        ],
      },
    ],
    imports: {
      title: "Data imports",
      paragraphs: [
        "The XBM Well Data Book can import parameter data from Excel, CSV, JSON, and TXT files. Additionally, data available in Petroleum Engineering Software, such as PROSPER, can also be imported by the application.",
      ],
      formats: ["Excel", "CSV", "JSON", "TXT", "PROSPER"],
    },
  },
  envelope: {
    id: "operating-envelope",
    title: "Operating Envelope with Alert Systems",
    paragraphs: [
      'The "XBM Well Book Record - Operating Envelope" contains the surveillance record for each well, providing users with insights into the wells\' performance. It highlights critical issues and enables users to plan necessary interventions.',
    ],
    parameters: [
      "VFM - Oil Change - No Operational Changes",
      "VFM - Oil (bbl/d)",
      "VFM - Gas",
      "Choke",
      "Tubing Head Pressure (THP in psi)",
      "Gas Lift Injection Rate (Mscf/d)",
      "Pseudo Skin",
      "Wellbore Gradient (psi/ft)",
      "Wellbore Velocity (ft/s)",
    ],
    image: {
      src: "/assets/xbm/operating_envelope.png",
      alt: "Illustration of an operating-envelope plot. Names and values shown are not a client record.",
    },
  },
  temperature: {
    id: "temperature-derived-rates",
    title: "Temperature-Derived Rates",
    paragraphs: [
      "The XBM Temperature-Derived Rate Module enables real-time performance optimization by utilizing temperature-derived rates to prevent declines in productivity. With this module, we can convert measured well temperatures into accurate production rates using data-driven models that correlate temperature to rate.",
      "These temperature-derived rates have demonstrated a high level of accuracy, matching well tests, multiphase meters, and ultrasonic meters within ±3% error, making them suitable for daily monitoring and real-time decision-making.",
      "Additionally, continuous temperature data can effectively replace intermittent rate measurements for performance surveillance.",
    ],
    flow: [
      "Measured temperature",
      "Data-driven correlation",
      "Estimated production rate",
      "Performance surveillance",
    ],
    image: {
      src: "/assets/xbm/Temperature_derived.png",
      alt: "Illustration of downhole temperature measurement. Names and values shown are not a client record.",
    },
  },
  drawdown: {
    id: "maximum-sustainable-drawdown",
    title: "Maximum Sustainable Drawdown",
    paragraphs: [
      "The XBM platform utilizes temperature-derived rates or multiphase rates along with real-time surveillance plots to identify the maximum sustainable drawdown limit. This limit represents the point at which productivity decline accelerates.",
      "By doing so, operators can work right at the edge of optimal performance without entering conditions that cause damage. With the XBM Maximum Sustainable Drawdown Module, optimal operating limits can be dynamically identified rather than being statically assumed.",
    ],
    image: {
      src: "/assets/xbm/drawdown-2.png",
      alt: "Illustration of drawdown between reservoir pressure and bottomhole pressure. Values shown are not a client record.",
    },
  },
  flux: {
    id: "flux",
    title: "Flux",
    paragraphs: [
      "Flux represents the average velocity through the screen. XBM developed the Flux calculation because it is the primary risk factor for screen erosion. Relying on drawdown alone is an unreliable safety metric. It is possible to optimize production while maintaining well integrity when Flux is managed effectively.",
      "ETE-Optimiza's XBM monitors several key trends, including Flux over time, rate versus effective area, pressure loss versus rate slope, and sand indicators (both surface and desanders). Additionally, it observes step-change behaviors during choke adjustments. Monitoring these trends is crucial because deterioration in the Flux trend serves as an early warning signal—well before any potential failure occurs.",
    ],
  },
  pta: {
    id: "short-term-pta",
    title: "Short-Term Pressure Transient Analysis (PTA)",
    paragraphs: [
      "Short-term PTA excels in surveillance and performance tracking, while long-term PTA remains essential for reservoir characterization.",
      "Objectives that are well-suited to ETE-Optimiza's short tests include skin, near-wellbore damage, completion effectiveness, and productivity comparison before and after workovers.",
    ],
    objectives: [
      "Skin",
      "Near-wellbore damage",
      "Completion effectiveness",
      "Productivity comparison before and after workovers",
    ],
  },
  pseudoSkin: {
    id: "pseudo-skin",
    title: "Pseudo Skin Surveillance",
    paragraphs: [
      "Using 1-hour, 24-hour, and 48-hour routine shut-ins with high-quality downhole pressure data, ETE-Optimiza's Pseudo Skin Surveillance system obtains reliable skin and productivity diagnostics—without running a classical long well test—exactly as enabled.",
      "The main objectives of generating a Pseudo Skin using short-term Pressure Transient Analysis (PTA) are to assess skin and near-wellbore conditions, as well as to evaluate changes in productivity compared to the last surveillance. It's important to note that determining reservoir boundaries is explicitly excluded from this process. This approach is feasible because routine platforms and well shutdowns take place every few months.",
      "The skin obtained through this method is deemed reliable because it primarily reflects early-time responses. During this early time, pressure readings are clear and exhibit low noise, as the gauge is positioned close to the perforations. Additionally, this objective aligns well with the capabilities of short-duration tests.",
    ],
    windows: ["1 hr", "24 hr", "48 hr"],
  },
  pilot: {
    title: "See XBM on your own well data.",
    description:
      "Request a pilot to review Exception-Based Monitoring (XBM) with the ETE-Optimiza team.",
    primary: {
      label: "Contact Us",
      href: "/#contact",
    },
  },
} satisfies XbmContent;
