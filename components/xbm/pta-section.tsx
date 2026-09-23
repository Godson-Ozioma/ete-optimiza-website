"use client";

import { motion } from "motion/react";

import { xbm } from "@/content/xbm";

export function XbmPtaSection() {
  const { pta } = xbm;

  return (
    <section id={pta.id} aria-labelledby="pta-heading" className="scroll-mt-20 bg-[var(--xbm-paper)]">
      <div className="xbm-wrap section-y">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="pta-heading" className="text-h1">
            {pta.title}
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-left sm:text-center">
            {pta.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl">
          <ul className="mb-4 flex flex-wrap justify-center gap-2">
            {pta.objectives.map((objective) => (
              <li key={objective} className="border border-foreground/15 bg-[var(--xbm-mist)] px-3 py-1.5 text-sm">
                {objective}
              </li>
            ))}
          </ul>
          <svg viewBox="0 0 640 280" role="img" aria-label="Conceptual pressure and derivative curves for a short test. Not a measured result, and not a reservoir-boundary interpretation." className="w-full bg-[var(--xbm-mist)]">
            <line x1="56" y1="28" x2="56" y2="230" stroke="currentColor" strokeOpacity="0.35" />
            <line x1="56" y1="230" x2="600" y2="230" stroke="currentColor" strokeOpacity="0.35" />
            <text x="64" y="24" fontSize="12" fill="currentColor">Pressure</text>
            <text x="560" y="250" fontSize="12" fill="currentColor">Time</text>
            <motion.path
              d="M72 188 C 140 186, 200 170, 280 140 S 420 78, 560 70"
              fill="none"
              stroke="var(--xbm-aqua)"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.path
              d="M72 200 C 150 198, 220 160, 300 150 S 430 120, 560 128"
              fill="none"
              stroke="var(--xbm-amber)"
              strokeWidth="2"
              strokeDasharray="5 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
            <circle cx="300" cy="150" r="4" fill="var(--xbm-amber)" />
          </svg>
          <p className="mt-3 text-sm text-muted-foreground">
            Conceptual curves. Long-term PTA remains the tool for reservoir characterization.
          </p>
        </div>
      </div>
    </section>
  );
}
