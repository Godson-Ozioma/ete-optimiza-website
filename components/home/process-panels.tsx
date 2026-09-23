"use client";

import Image from "next/image";
import { useState } from "react";
import { useReducedMotion } from "motion/react";

import { home } from "@/content/home";
import { cn } from "@/lib/utils";

export function ProcessPanels() {
  const { phases } = home.process;
  const [active, setActive] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="process-heading" className="bg-neutral-950 text-white">
      <h2 id="process-heading" className="sr-only">
        Plan, diagnose, optimize
      </h2>

      <div className="flex flex-col lg:hidden">
        {phases.map((phase) => {
          const open = active === phase.id;
          const panelId = `process-${phase.id}-mobile`;
          return (
            <article key={phase.id} className="relative border-b border-white/15">
              <div className="relative min-h-28">
                <Image
                  src={phase.image.src}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <h3 className="relative">
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between px-4 py-8 text-left text-3xl font-semibold tracking-tight sm:px-6"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setActive(open ? null : phase.id)}
                  >
                    {phase.title}
                    <span className="text-base font-medium text-white/80">
                      {open ? "Hide" : "Show"}
                    </span>
                  </button>
                </h3>
              </div>
              <ul
                id={panelId}
                hidden={!open}
                className="flex list-disc flex-col gap-3 bg-neutral-950 px-8 py-6 text-sm leading-relaxed text-white/90 sm:px-10"
              >
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div
        className="hidden lg:flex lg:h-[36rem]"
        onMouseLeave={() => setActive(null)}
      >
        {phases.map((phase) => {
          const open = active === phase.id;
          const panelId = `process-${phase.id}`;
          return (
            <article
              key={phase.id}
              className={cn(
                "relative min-w-0 overflow-hidden border-r border-white/15 last:border-r-0",
                reduceMotion ? "" : "transition-[flex-grow] duration-500 ease-out",
                open ? "flex-[2.4]" : "flex-1",
              )}
              onMouseEnter={() => setActive(phase.id)}
            >
              <Image
                src={phase.image.src}
                alt={phase.image.alt}
                fill
                sizes="40vw"
                className="object-cover"
              />
              <div
                className={cn(
                  "absolute inset-0",
                  open ? "bg-black/60" : "bg-black/45",
                )}
              />
              <div className="relative flex h-full flex-col justify-end p-6 xl:p-8">
                <h3>
                  <button
                    type="button"
                    className="focus-ring text-left text-3xl font-semibold tracking-tight xl:text-4xl"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onFocus={() => setActive(phase.id)}
                    onClick={() => setActive(phase.id)}
                  >
                    {phase.title}
                  </button>
                </h3>
                <ul
                  id={panelId}
                  hidden={!open}
                  className="mt-5 flex max-h-72 list-disc flex-col gap-3 overflow-y-auto pl-4 pr-2 text-sm leading-relaxed text-white/90"
                >
                  {phase.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
