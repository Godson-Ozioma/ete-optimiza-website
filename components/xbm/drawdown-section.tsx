"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { xbm } from "@/content/xbm";

export function XbmDrawdownSection() {
  const { drawdown } = xbm;

  return (
    <section id={drawdown.id} aria-labelledby="drawdown-heading" className="scroll-mt-20 bg-[var(--xbm-paper)]">
      <div className="xbm-wrap section-y grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <figure className="flex flex-col gap-3">
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--xbm-ink)]">
            <Image
              src={drawdown.image.src}
              alt={drawdown.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
        <div className="flex flex-col gap-5">
          <h2 id="drawdown-heading" className="text-h1">
            {drawdown.title}
          </h2>
          {drawdown.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 36)} className="text-body">
              {paragraph}
            </p>
          ))}
          <svg viewBox="0 0 320 120" className="mt-2 h-28 w-full max-w-md" role="img" aria-label="Conceptual curve showing production response flattening as drawdown increases. Not a measured result.">
            <motion.path
              d="M16 96 C 70 94, 110 80, 150 62 S 230 28, 304 24"
              fill="none"
              stroke="var(--xbm-aqua)"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <p className="text-sm text-muted-foreground">Conceptual shape only. No measured values.</p>
        </div>
      </div>
    </section>
  );
}
