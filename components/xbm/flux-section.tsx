"use client";

import { motion } from "motion/react";

import { xbm } from "@/content/xbm";

export function XbmFluxSection() {
  const { flux } = xbm;

  return (
    <section id={flux.id} aria-labelledby="flux-heading" className="scroll-mt-20 bg-[oklch(0.3_0.03_220)] text-white">
      <div className="xbm-wrap section-y grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 id="flux-heading" className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {flux.title}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {flux.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-white/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <FluxDiagram />
      </div>
    </section>
  );
}

function FluxDiagram() {
  return (
    <svg viewBox="0 0 520 360" role="img" aria-label="Conceptual cross-section of fluid moving through a sand-control screen." className="w-full">
      <rect x="40" y="24" width="160" height="312" fill="oklch(0.38 0.03 70 / 0.35)" />
      <rect x="320" y="24" width="160" height="312" fill="oklch(0.38 0.03 70 / 0.35)" />
      <text x="78" y="48" fill="white" fontSize="13">Formation</text>
      <text x="358" y="48" fill="white" fontSize="13">Formation</text>
      <rect x="200" y="24" width="28" height="312" fill="none" stroke="oklch(0.78 0.04 220)" strokeWidth="8" />
      <rect x="292" y="24" width="28" height="312" fill="none" stroke="oklch(0.78 0.04 220)" strokeWidth="8" />
      <text x="214" y="200" fill="white" fontSize="13" transform="rotate(-90 214 200)">Screen</text>
      { [70, 120, 170, 220, 270].map((y, index) => (
        <motion.g
          key={y}
          initial={{ opacity: 0.2, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <path d={`M70 ${y} H188`} fill="none" stroke="oklch(0.72 0.08 200)" strokeWidth="2" />
          <path d={`M188 ${y - 5} L200 ${y} L188 ${y + 5}`} fill="oklch(0.72 0.08 200)" />
          <path d={`M450 ${y} H332`} fill="none" stroke="oklch(0.72 0.08 200)" strokeWidth="2" />
          <path d={`M332 ${y - 5} L320 ${y} L332 ${y + 5}`} fill="oklch(0.72 0.08 200)" />
        </motion.g>
      ))}
      <text x="168" y="344" fill="white" fontSize="13">Velocity through the screen</text>
    </svg>
  );
}
