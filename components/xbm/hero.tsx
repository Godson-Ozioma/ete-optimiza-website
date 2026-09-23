"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { Button } from "@/components/ui/button";
import { xbm } from "@/content/xbm";

const ease = [0.22, 1, 0.36, 1] as const;

export function XbmHero() {
  const { hero } = xbm;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 12]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -8]);

  return (
    <section
      ref={ref}
      id="xbm-hero"
      aria-labelledby="xbm-hero-heading"
      className="xbm-ink scroll-mt-20"
    >
      <div className="xbm-wrap grid items-center gap-10 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-20">
        <div className="flex flex-col gap-6">
          <h1 id="xbm-hero-heading" className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {hero.name}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/88">{hero.statement}</p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" render={<Link href={hero.primaryCta.href} />} nativeButton={false}>
              {hero.primaryCta.label}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 text-white hover:bg-white/10 hover:text-white"
              render={<Link href={hero.secondaryCta.href} />}
              nativeButton={false}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative min-h-80 sm:min-h-[28rem]">
          <motion.div className="absolute inset-0 overflow-hidden" style={{ y: photoY }}>
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[center_45%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--xbm-ink)] via-[var(--xbm-ink)]/25 to-transparent" />
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-4 right-4 border border-white/15 bg-[oklch(0.2_0.03_228/0.88)] p-4 text-white sm:right-auto sm:w-72"
            style={{ y: cardY }}
          >
            <div className="mb-3 flex items-center gap-2 text-sm">
              <span className="xbm-pulse size-2 rounded-full bg-[var(--xbm-aqua)]" aria-hidden="true" />
              Monitoring
            </div>
            <svg viewBox="0 0 240 48" className="h-12 w-full" aria-hidden="true">
              <motion.path
                d="M0 32 C 20 32, 28 18, 46 20 S 78 36, 96 28 128 10, 150 16 190 34, 240 18"
                fill="none"
                stroke="oklch(0.72 0.08 200)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease }}
              />
            </svg>
            <p className="mt-2 text-sm text-white/75">Well Navigator · Plot · Indicators</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
