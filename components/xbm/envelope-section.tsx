"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { XbmReveal } from "@/components/xbm/reveal";
import { xbm } from "@/content/xbm";

export function XbmEnvelopeSection() {
  const { envelope } = xbm;

  return (
    <section id={envelope.id} aria-labelledby="envelope-heading" className="xbm-ink scroll-mt-20 overflow-x-clip">
      <div className="xbm-wrap section-y grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <motion.figure
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
            <Image
              src={envelope.image.src}
              alt={envelope.image.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-left"
            />
          </div>
        </motion.figure>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="xbm-pulse size-2 rounded-full bg-[var(--xbm-amber)]" aria-hidden="true" />
            <h2 id="envelope-heading" className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {envelope.title}
            </h2>
          </div>
          {envelope.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 28)} className="text-base leading-relaxed text-white/85">
              {paragraph}
            </p>
          ))}
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {envelope.parameters.map((parameter, index) => (
              <li key={parameter}>
                <XbmReveal delay={index * 0.04}>
                  <span className="block border border-white/15 px-3 py-2 text-sm text-white/90">{parameter}</span>
                </XbmReveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
