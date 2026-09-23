"use client";

import { Activity, ChartNoAxesCombined, Droplets, Gauge, Info, ListTree } from "lucide-react";
import { motion } from "motion/react";

import { xbm } from "@/content/xbm";

const ease = [0.22, 1, 0.36, 1] as const;

const cells = [
  { label: "Well Navigator", icon: ListTree, className: "row-span-3" },
  { label: "Well information window", icon: Info, className: "" },
  { label: "Plot section", icon: ChartNoAxesCombined, className: "" },
  { label: "Monitoring indicators", icon: Activity, className: "" },
  { label: "KPI summary", icon: Gauge, className: "" },
  { label: "Real-time production snapshot", icon: Droplets, className: "sm:col-span-2" },
] as const;

export function XbmDashboardSection() {
  const { dashboard } = xbm;

  return (
    <section id={dashboard.id} aria-labelledby="dashboard-heading" className="scroll-mt-20 bg-[oklch(0.9_0.02_226)]">
      <div className="xbm-wrap section-y grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col gap-5">
          <h2 id="dashboard-heading" className="text-h1">
            {dashboard.title}
          </h2>
          {dashboard.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-body">
              {paragraph}
            </p>
          ))}
        </div>
        <div
          className="grid gap-3 sm:grid-cols-3"
          aria-label="Dashboard areas"
        >
          {cells.map((cell, index) => {
            const Icon = cell.icon;
            return (
            <motion.div
              key={cell.label}
              className={`group flex min-h-24 flex-col justify-between border border-foreground/10 bg-[var(--xbm-mist)] p-4 transition-colors duration-200 hover:border-[var(--xbm-aqua)] ${cell.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
            >
              <Icon
                aria-hidden="true"
                size={22}
                strokeWidth={1.7}
                className="text-[var(--xbm-aqua)] transition-colors duration-200 group-hover:text-[var(--ete-green)]"
              />
              <p className="mt-4 text-sm font-medium">{cell.label}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
