import type { ExceptionStatus } from "./types";

export type UtilityToolId =
  | "aggregation"
  | "search"
  | "imports"
  | "triage";

export type UtilityTool = {
  id: UtilityToolId;
  title: string;
  category: string;
  summary: string;
  description: string;
};

export type TriageRow = {
  label: string;
  status: ExceptionStatus;
};

export const utilityTools = {
  meta: {
    title: "Utility Tools",
    description:
      "Focused tools for working with well data, finding engineering context, and prioritizing what needs attention.",
  },
  hero: {
    title: "Utility Tools",
    description:
      "Focused tools for working with well data, finding engineering context, and prioritizing what needs attention.",
  },
  tools: [
    {
      id: "aggregation",
      title: "Aggregation Tool",
      category: "Data consolidation",
      summary: "Bring well and production information into one review layer.",
      description:
        "Bring relevant well and production information together so engineers can review asset performance from a consolidated view rather than working across fragmented sources.",
    },
    {
      id: "search",
      title: "AI Agents for Search",
      category: "Context retrieval",
      summary: "Find well information, surveillance context, and relevant records.",
      description:
        "Help engineers find relevant information across XBM data and engineering context using natural-language search, reducing manual navigation across records.",
    },
    {
      id: "imports",
      title: "Data Import & Harmonization Tool",
      category: "Data preparation",
      summary: "Organize supported engineering files for consistent downstream use.",
      description:
        "Bring structured engineering data into XBM from supported files and organize it for consistent downstream use.",
    },
    {
      id: "triage",
      title: "Exception Triage Tool",
      category: "Engineering review",
      summary: "Surface wells and operating conditions that require attention.",
      description:
        "Help engineers identify and prioritize wells or operating conditions requiring attention while keeping engineering review in the decision path.",
    },
  ] satisfies readonly UtilityTool[],
  aggregation: {
    sources: [
      "Oil data",
      "Gas data",
      "Water data",
      "Pressure data",
      "Well metadata",
    ],
    output: "Aggregated asset view",
    support:
      "Production data, well-level data, and surveillance context are organized for grouped asset review.",
  },
  search: {
    query: "Show wells requiring attention",
    related: ["Find recent pressure changes"],
    results: [
      "Exception summary",
      "Surveillance context",
      "Relevant well records",
    ],
  },
  imports: {
    formats: ["Excel", "CSV", "JSON", "TXT", "PROSPER"],
    output: "XBM-ready structured data",
    support:
      "Supported petroleum-engineering software such as PROSPER can be included where applicable.",
  },
  triage: {
    rows: [
      { label: "Well A", status: "normal" },
      { label: "Well B", status: "warning" },
      { label: "Well C", status: "normal" },
      { label: "Well D", status: "critical" },
      { label: "Well E", status: "normal" },
    ] satisfies readonly TriageRow[],
    states: [
      "normal",
      "warning",
      "critical",
      "undefined",
    ] satisfies readonly ExceptionStatus[],
    outcome: "2 wells require review",
  },
  workflow: {
    title: "How the tools work together",
    steps: [
      "Data",
      "Import",
      "Aggregate",
      "Search",
      "Triage",
      "Engineering review",
    ],
  },
} as const;
