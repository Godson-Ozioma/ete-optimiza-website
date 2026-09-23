"use client";

import Image from "next/image";
import { ArrowRight, Thermometer } from "lucide-react";
import { motion } from "motion/react";

import { xbm } from "@/content/xbm";

export function XbmTemperatureSection() {
  const { temperature } = xbm;

  return (
    <section id={temperature.id} aria-labelledby="temperature-heading" className="scroll-mt-20 bg-[var(--xbm-cloud)]">
      <div className="xbm-wrap section-y">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 id="temperature-heading" className="text-h1">
              {temperature.title}
            </h2>
            {temperature.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-body">
                {paragraph}
              </p>
            ))}
          </div>
          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--xbm-ink)]">
              <Image
                src={temperature.image.src}
                alt={temperature.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>

        <ol className="relative mt-12 grid gap-4 md:grid-cols-4">
          <svg className="pointer-events-none absolute top-8 right-8 left-8 hidden h-4 md:block" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
            <motion.line
              x1="0"
              y1="2"
              x2="100"
              y2="2"
              stroke="var(--xbm-aqua)"
              strokeWidth="0.6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          {temperature.flow.map((step, index) => (
            <li
              key={step}
              className="group relative flex items-start gap-3 border border-transparent bg-[var(--xbm-paper)] p-4 transition-colors duration-200 hover:border-[var(--xbm-aqua)] hover:bg-white"
            >
              <Thermometer aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[var(--xbm-aqua)] transition-colors duration-200 group-hover:text-[var(--ete-green)]" />
              <div>
                <p className="text-sm font-medium">{step}</p>
                {index < temperature.flow.length - 1 ? (
                  <ArrowRight aria-hidden="true" className="mt-3 size-4 text-foreground/40 md:hidden" />
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
