"use client";

import {
  ArrowDown,
  FileInput,
  Layers3,
  ListFilter,
  Search,
} from "lucide-react";
import { motion, MotionConfig } from "motion/react";

import { StatusIndicator } from "@/components/status-indicator";
import {
  AggregationVisual,
  ImportsVisual,
  SearchVisual,
  TriageVisual,
  UtilityHeroVisual,
  WorkflowVisual,
} from "@/components/utility-tools/tool-visuals";
import { utilityTools, type UtilityToolId } from "@/content/utility-tools";

const toolIcons = {
  aggregation: Layers3,
  search: Search,
  imports: FileInput,
  triage: ListFilter,
} satisfies Record<UtilityToolId, typeof Layers3>;

const ease = [0.22, 1, 0.36, 1] as const;

function Hero() {
  return (
    <section
      aria-labelledby="utility-hero-heading"
      className="utility-deep overflow-hidden"
    >
      <div className="utility-wrap grid min-h-[calc(100svh-3.5rem)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:py-20">
        <div className="flex max-w-xl flex-col gap-7">
          <motion.h1
            id="utility-hero-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="utility-motion text-balance text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
          >
            {utilityTools.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="utility-motion max-w-[55ch] text-lg leading-8 text-white/78"
          >
            {utilityTools.hero.description}
          </motion.p>
          <motion.a
            href="#tools-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="utility-motion focus-ring mt-2 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-white/66 hover:text-white"
          >
            View the tools
            <ArrowDown aria-hidden="true" className="size-4" />
          </motion.a>
        </div>

        <UtilityHeroVisual />
      </div>
    </section>
  );
}

function ToolsOverview() {
  return (
    <section
      id="tools-overview"
      aria-labelledby="tools-overview-heading"
      className="scroll-mt-20 border-b border-[var(--utility-ink)]/12 bg-[var(--utility-paper)]"
    >
      <div className="utility-wrap py-14 sm:py-18">
        <h2
          id="tools-overview-heading"
          className="mb-10 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
        >
          Tools overview
        </h2>

        <nav aria-label="Utility tools">
          <ul className="grid border-y border-[var(--utility-ink)]/14 md:grid-cols-2 lg:grid-cols-4">
            {utilityTools.tools.map((tool, index) => {
              const Icon = toolIcons[tool.id];
              return (
                <motion.li
                  key={tool.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease }}
                  className="utility-motion border-b border-[var(--utility-ink)]/12 last:border-b-0 md:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <a
                    href={`#${tool.id}`}
                    className="focus-ring group flex min-h-52 flex-col gap-5 rounded-sm px-5 py-7 hover:bg-[var(--utility-steel)]/65 focus-visible:bg-[var(--utility-steel)]/65"
                  >
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.45}
                      className="size-6 text-[var(--utility-petrol)] transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                    />
                    <div className="flex flex-1 flex-col gap-3">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {tool.title}
                      </h3>
                      <p className="text-sm leading-6 text-[var(--utility-ink)]/62">
                        {tool.summary}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[var(--utility-petrol)]">
                      View tool ↓
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

function ToolHeading({
  category,
  title,
  description,
  headingId,
  inverse = false,
}: {
  category: string;
  title: string;
  description: string;
  headingId: string;
  inverse?: boolean;
}) {
  return (
    <div className="flex max-w-xl flex-col gap-5">
      <p
        className={
          inverse
            ? "text-sm font-medium text-[var(--utility-aqua)]"
            : "text-sm font-medium text-[var(--utility-petrol)]"
        }
      >
        {category}
      </p>
      <h2
        id={headingId}
        className={`text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
          inverse ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-base leading-8 sm:text-lg ${
          inverse ? "text-white/72" : "text-[var(--utility-ink)]/72"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function AggregationSection() {
  const tool = utilityTools.tools[0];

  return (
    <section
      id={tool.id}
      aria-labelledby="aggregation-heading"
      className="scroll-mt-20 bg-[var(--utility-mist)]"
    >
      <div className="utility-wrap grid items-center gap-12 py-18 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:gap-20 lg:py-30">
        <AggregationVisual />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="utility-motion flex flex-col gap-7"
        >
          <ToolHeading
            category={tool.category}
            title={tool.title}
            description={tool.description}
            headingId="aggregation-heading"
          />
          <p className="max-w-xl border-l-2 border-[var(--utility-aqua)] pl-5 text-sm leading-7 text-[var(--utility-ink)]/65">
            {utilityTools.aggregation.support}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SearchSection() {
  const tool = utilityTools.tools[1];

  return (
    <section
      id={tool.id}
      aria-labelledby="search-heading"
      className="utility-deep scroll-mt-20"
    >
      <div className="utility-wrap grid items-center gap-12 py-18 sm:py-24 lg:grid-cols-[minmax(21rem,0.84fr)_minmax(0,1.16fr)] lg:gap-20 lg:py-30">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="utility-motion"
        >
          <ToolHeading
            category={tool.category}
            title={tool.title}
            description={tool.description}
            headingId="search-heading"
            inverse
          />
        </motion.div>
        <SearchVisual />
      </div>
    </section>
  );
}

function ImportsSection() {
  const tool = utilityTools.tools[2];

  return (
    <section
      id={tool.id}
      aria-labelledby="imports-heading"
      className="scroll-mt-20 bg-[var(--utility-stone)]"
    >
      <div className="utility-wrap py-18 sm:py-24 lg:py-30">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
            className="utility-motion"
          >
            <ToolHeading
              category={tool.category}
              title={tool.title}
              description={tool.description}
              headingId="imports-heading"
            />
          </motion.div>
          <p className="max-w-xl border-t border-[var(--utility-ink)]/16 pt-5 text-sm leading-7 text-[var(--utility-ink)]/62 lg:justify-self-end">
            {utilityTools.imports.support}
          </p>
        </div>
        <div className="mt-12 lg:mt-16">
          <ImportsVisual />
        </div>
      </div>
    </section>
  );
}

function TriageSection() {
  const tool = utilityTools.tools[3];

  return (
    <section
      id={tool.id}
      aria-labelledby="triage-heading"
      className="scroll-mt-20 bg-[var(--utility-steel)]"
    >
      <div className="utility-wrap grid items-center gap-12 py-18 sm:py-24 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-20 lg:py-30">
        <TriageVisual />
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="utility-motion flex flex-col gap-8"
        >
          <ToolHeading
            category={tool.category}
            title={tool.title}
            description={tool.description}
            headingId="triage-heading"
          />
          <div>
            <p className="mb-4 text-sm font-medium">Surveillance states</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {utilityTools.triage.states.map((state) => (
                <StatusIndicator key={state} status={state} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section
      aria-labelledby="utility-workflow-heading"
      className="utility-deep"
    >
      <div className="utility-wrap py-18 sm:py-24 lg:py-30">
        <div className="mb-14 grid gap-6 border-b border-white/14 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2
            id="utility-workflow-heading"
            className="max-w-xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
          >
            {utilityTools.workflow.title}
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/62 lg:justify-self-end">
            One connected path from incoming data to engineering review.
          </p>
        </div>
        <WorkflowVisual />
      </div>
    </section>
  );
}

export function UtilityToolsView() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <ToolsOverview />
      <AggregationSection />
      <SearchSection />
      <ImportsSection />
      <TriageSection />
      <WorkflowSection />
    </MotionConfig>
  );
}
