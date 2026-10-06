"use client";

import {
  Braces,
  CircleCheck,
  Database,
  FileInput,
  FileSpreadsheet,
  FileText,
  Layers3,
  ListFilter,
  Search,
  Table2,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";

import { StatusIndicator } from "@/components/status-indicator";
import { utilityTools } from "@/content/utility-tools";

const ease = [0.22, 1, 0.36, 1] as const;

export function UtilityHeroVisual() {
  const nodes = [
    { label: "Well data", className: "left-5 top-5 sm:left-8 sm:top-8" },
    {
      label: "Engineering context",
      className: "right-5 top-12 sm:right-8 sm:top-14",
    },
    {
      label: "Search",
      className: "bottom-12 left-5 sm:bottom-14 sm:left-8",
    },
    {
      label: "Exceptions",
      className: "bottom-5 right-5 sm:bottom-8 sm:right-8",
    },
  ];

  return (
    <div
      className="relative min-h-[23rem] overflow-hidden border border-white/14 bg-[oklch(0.2_0.03_190/0.74)] sm:min-h-[29rem]"
      role="img"
      aria-label="Illustration of data, search, and exceptions connecting to a shared utility layer."
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 utility-grid opacity-70"
      />
      <svg
        viewBox="0 0 640 460"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        {[
          "M110 66 C210 66 200 190 320 230",
          "M530 96 C430 96 442 190 320 230",
          "M110 370 C205 370 210 275 320 230",
          "M530 398 C430 398 438 285 320 230",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke={index === 3 ? "var(--utility-amber)" : "var(--utility-aqua)"}
            strokeWidth="1.5"
            strokeDasharray="5 7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.75 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease }}
            className="utility-motion utility-path"
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.12 + index * 0.08, ease }}
          className={`utility-motion absolute border border-white/14 bg-[var(--utility-ink)]/88 px-3 py-2 text-xs text-white/78 sm:text-sm ${node.className}`}
        >
          {node.label}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.58, ease }}
        className="utility-motion absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 border border-[var(--utility-aqua)]/60 bg-[var(--utility-paper)] p-5 text-[var(--utility-ink)] shadow-[0_24px_70px_oklch(0.1_0.02_190/0.3)] sm:w-56 sm:p-6"
      >
        <Layers3
          aria-hidden="true"
          strokeWidth={1.5}
          className="mb-5 size-7 text-[var(--utility-petrol)]"
        />
        <p className="text-lg font-semibold tracking-tight">Utility layer</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--utility-ink)]/65">
          Focused tools supporting XBM workflows.
        </p>
      </motion.div>
    </div>
  );
}

export function AggregationVisual() {
  const { sources, output } = utilityTools.aggregation;
  const yPositions = [45, 115, 185, 255, 325];

  return (
    <div
      className="border border-[var(--utility-ink)]/12 bg-[var(--utility-paper)] p-4 sm:p-7"
      role="img"
      aria-label="Five engineering data sources flowing into one aggregated asset view."
    >
      <svg
        viewBox="0 0 680 390"
        className="hidden w-full sm:block"
        aria-hidden="true"
      >
        {sources.map((source, index) => {
          const y = yPositions[index];
          return (
            <g key={source}>
              <motion.path
                d={`M205 ${y + 24} C 325 ${y + 24}, 320 195, 455 195`}
                fill="none"
                stroke="var(--utility-aqua)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.68 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.7, delay: 0.16 + index * 0.08, ease }}
                className="utility-motion utility-path"
              />
              <motion.g
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.4, delay: index * 0.07, ease }}
                className="utility-motion"
              >
                <rect
                  x="15"
                  y={y}
                  width="190"
                  height="48"
                  fill="var(--utility-steel)"
                  stroke="var(--utility-rule)"
                />
                <text
                  x="35"
                  y={y + 30}
                  fill="var(--utility-ink)"
                  fontSize="15"
                  fontWeight="550"
                >
                  {source}
                </text>
              </motion.g>
            </g>
          );
        })}
        <motion.g
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, delay: 0.72, ease }}
          className="utility-motion"
          style={{ transformOrigin: "555px 195px" }}
        >
          <rect
            x="455"
            y="135"
            width="200"
            height="120"
            fill="var(--utility-petrol)"
          />
          <text
            x="555"
            y="182"
            textAnchor="middle"
            fill="white"
            fontSize="15"
          >
            Consolidated
          </text>
          <text
            x="555"
            y="207"
            textAnchor="middle"
            fill="white"
            fontSize="15"
          >
            asset view
          </text>
          <path
            d="M515 226h80"
            stroke="var(--utility-aqua)"
            strokeWidth="2"
          />
        </motion.g>
      </svg>

      <div className="flex flex-col sm:hidden">
        {sources.map((source, index) => (
          <motion.div
            key={source}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.06, ease }}
            className="utility-motion flex flex-col items-center"
          >
            <div className="w-full border border-[var(--utility-ink)]/12 bg-[var(--utility-steel)] px-4 py-3 text-sm font-medium">
              {source}
            </div>
            <span
              aria-hidden="true"
              className="h-4 w-px bg-[var(--utility-aqua)]"
            />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.4, ease }}
          className="utility-motion bg-[var(--utility-petrol)] px-5 py-6 text-center font-medium text-white"
        >
          {output}
        </motion.div>
      </div>
    </div>
  );
}

export function SearchVisual() {
  return (
    <div
      className="border border-white/14 bg-[oklch(0.18_0.028_190)] p-4 text-white sm:p-7"
      role="img"
      aria-label="Illustrative natural-language search with engineering context results."
    >
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.65, ease }}
        className="utility-motion flex items-center gap-3 border border-white/20 bg-white/[0.06] px-4 py-4"
      >
        <Search
          aria-hidden="true"
          strokeWidth={1.6}
          className="size-5 shrink-0 text-[var(--utility-aqua)]"
        />
        <span className="min-w-0 text-sm text-white/88 sm:text-base">
          {utilityTools.search.query}
        </span>
      </motion.div>

      <div className="mt-5 grid gap-3">
        {utilityTools.search.results.map((result, index) => (
          <motion.div
            key={result}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.42, delay: 0.34 + index * 0.1, ease }}
            className="utility-motion flex items-center gap-3 border-b border-white/12 px-1 py-4"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full border border-[var(--utility-aqua)]"
            />
            <span className="text-sm text-white/76">{result}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-7 border-t border-white/12 pt-5">
        <p className="mb-3 text-xs font-medium text-white/48">Related searches</p>
        <div className="flex flex-col gap-2">
          {utilityTools.search.related.map((query) => (
            <p key={query} className="text-sm text-white/62">
              {query}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ImportsVisual() {
  return (
    <div
      className="border border-[var(--utility-ink)]/12 bg-[var(--utility-paper)] px-5 py-8 sm:px-8 sm:py-10"
      role="img"
      aria-label="Supported file formats converging into XBM-ready structured data."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {utilityTools.imports.formats.map((format, index) => {
          const Icon =
            format === "Excel"
              ? FileSpreadsheet
              : format === "CSV"
                ? Table2
                : format === "JSON"
                  ? Braces
                  : format === "TXT"
                    ? FileText
                    : null;

          return (
            <motion.div
              key={format}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.4, delay: index * 0.07, ease }}
              className="utility-motion group flex min-h-24 flex-col items-center justify-center gap-3 border border-[var(--utility-ink)]/12 bg-[var(--utility-stone)] px-3 text-center"
            >
              {Icon ? (
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.45}
                  className="size-6 text-[var(--utility-petrol)] transition-transform duration-200 group-hover:translate-y-0.5"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="text-sm font-semibold text-[var(--utility-petrol)]"
                >
                  PE
                </span>
              )}
              <span className="text-sm font-semibold">{format}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.45, delay: 0.42, ease }}
        className="utility-motion mx-auto h-10 w-px origin-top bg-[var(--utility-aqua)]"
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.5, delay: 0.58, ease }}
        className="utility-motion mx-auto flex max-w-lg items-center justify-center gap-3 bg-[var(--utility-petrol)] px-5 py-6 text-center text-white"
      >
        <Database aria-hidden="true" strokeWidth={1.5} className="size-6" />
        <span className="font-medium">{utilityTools.imports.output}</span>
      </motion.div>
    </div>
  );
}

export function TriageVisual() {
  return (
    <div
      className="border border-[var(--utility-ink)]/14 bg-[var(--utility-paper)] p-4 sm:p-7"
      role="img"
      aria-label="Illustrative well list prioritizing warning and critical states for engineering review."
    >
      <div className="mb-5 flex items-center justify-between border-b border-[var(--utility-ink)]/12 pb-4">
        <span className="text-sm font-semibold">Surveillance list</span>
        <ListFilter
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-5 text-[var(--utility-petrol)]"
        />
      </div>

      <div className="grid gap-2">
        {utilityTools.triage.rows.map((row, index) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.4, delay: index * 0.07, ease }}
            className="utility-motion flex items-center justify-between border border-[var(--utility-ink)]/10 bg-[var(--utility-steel)] px-4 py-3"
          >
            <span className="text-sm font-medium">{row.label}</span>
            <StatusIndicator status={row.status} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
        className="utility-motion mt-5 flex items-center gap-3 border-l-2 border-[var(--utility-amber)] bg-[var(--utility-amber)]/10 px-4 py-4"
      >
        <CircleCheck
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-5 text-[var(--utility-petrol)]"
        />
        <span className="text-sm font-semibold">
          {utilityTools.triage.outcome}
        </span>
      </motion.div>
    </div>
  );
}

const workflowIcons = [
  Database,
  FileInput,
  Layers3,
  Search,
  ListFilter,
  UserCheck,
] as const;

export function WorkflowVisual() {
  return (
    <div className="relative">
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="utility-motion absolute left-[8%] right-[8%] top-7 hidden h-px origin-left bg-[var(--utility-aqua)]/70 lg:block"
      />
      <motion.span
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="utility-motion absolute bottom-7 left-7 top-7 w-px origin-top bg-[var(--utility-aqua)]/70 lg:hidden"
      />

      <ol className="relative grid gap-7 lg:grid-cols-6 lg:gap-4">
        {utilityTools.workflow.steps.map((step, index) => {
          const Icon = workflowIcons[index] ?? CircleCheck;
          return (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.12 + index * 0.09, ease }}
              className="utility-motion group grid grid-cols-[3.5rem_1fr] items-center gap-4 lg:flex lg:flex-col lg:items-start lg:gap-5"
            >
              <span className="flex size-14 items-center justify-center rounded-full border border-white/20 bg-[var(--utility-ink)]">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.45}
                  className="size-5 text-[var(--utility-aqua)] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
              <span className="text-sm font-medium text-white/86">{step}</span>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
