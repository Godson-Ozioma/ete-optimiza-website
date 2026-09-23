"use client";

import { Clock, Gauge, Activity } from "lucide-react";
import { motion } from "motion/react";

import { xbm } from "@/content/xbm";

const icons = [Clock, Gauge, Activity];

export function XbmSkinSection() {
  const { pseudoSkin } = xbm;

  return (
    <section id={pseudoSkin.id} aria-labelledby="skin-heading" className="scroll-mt-20 bg-[var(--xbm-cloud)]">
      <div className="xbm-wrap section-y">
        <h2 id="skin-heading" className="text-h1 max-w-3xl">
          {pseudoSkin.title}
        </h2>
        <ol className="relative mt-10 grid gap-6 md:grid-cols-3">
          <svg className="pointer-events-none absolute top-7 right-[16%] left-[16%] hidden h-2 md:block" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
            <motion.line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="var(--xbm-aqua)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </svg>
          {pseudoSkin.windows.map((window, index) => {
            const Icon = icons[index] ?? Clock;
            return (
              <li key={window} className="bg-[var(--xbm-paper)] p-5">
                <Icon aria-hidden="true" className="size-5 text-[var(--xbm-aqua)]" />
                <p className="mt-4 text-2xl font-semibold">{window}</p>
                <svg viewBox="0 0 180 56" className="mt-4 h-14 w-full" aria-hidden="true">
                  <motion.path
                    d={index === 0 ? "M4 16 H40 L48 40 H176" : index === 1 ? "M4 16 H70 L80 42 H176" : "M4 16 H110 L122 44 H176"}
                    fill="none"
                    stroke="var(--xbm-slate)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 * index }}
                  />
                </svg>
              </li>
            );
          })}
        </ol>
        <div className="mt-10 flex max-w-3xl flex-col gap-4">
          {pseudoSkin.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-body">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
