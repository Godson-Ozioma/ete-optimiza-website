"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { home } from "@/content/home";

export function ProjectsCarousel() {
  const { projects } = home;
  const items = projects.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const count = items.length;
  const current = items[index];

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % count);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, count]);

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <section
      aria-labelledby="projects-heading"
      aria-roledescription="carousel"
      className="bg-[var(--home-slate)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="container-site section-y">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 id="projects-heading" className="text-h1">
            {projects.title}
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="focus-ring inline-flex size-10 items-center justify-center border border-foreground/20 bg-[var(--home-sand)]"
              aria-label="Previous project"
              onClick={() => go(index - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="focus-ring inline-flex size-10 items-center justify-center border border-foreground/20 bg-[var(--home-sand)]"
              aria-label="Next project"
              onClick={() => go(index + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onPointerDown={(event) => {
            pointer.current = { x: event.clientX, y: event.clientY };
          }}
          onPointerUp={(event) => {
            if (!pointer.current) return;
            const dx = event.clientX - pointer.current.x;
            const dy = event.clientY - pointer.current.y;
            pointer.current = null;
            if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
            go(dx < 0 ? index + 1 : index - 1);
          }}
        >
          <motion.div
            className="flex w-full"
            animate={{ x: `${-index * 100}%` }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {items.map((item, itemIndex) => (
              <article
                key={item.id}
                aria-roledescription="slide"
                aria-label={`${itemIndex + 1} of ${count}`}
                className="w-full shrink-0"
                aria-hidden={itemIndex === index ? undefined : true}
                inert={itemIndex === index ? undefined : true}
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
                  <div className="relative min-h-64 overflow-hidden bg-[var(--home-sand)] sm:min-h-80">
                    {item.image ? (
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-64 items-end bg-[oklch(0.84_0.02_155)] p-6 sm:min-h-80">
                        <p className="text-sm text-foreground/70">Coming Soon</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    {item.year ? (
                      <p className="text-sm text-foreground/70">{item.year}</p>
                    ) : null}
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="focus-ring rounded-sm underline-offset-4 hover:underline"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        item.name
                      )}
                    </h3>
                    {item.status ? (
                      <p className="text-lg font-medium">{item.status}</p>
                    ) : null}
                    {item.description ? (
                      <p className="text-body">{item.description}</p>
                    ) : null}
                    {item.features ? (
                      <div>
                        <p className="mb-2 text-sm font-medium">Features</p>
                        <ul className="flex flex-col gap-1.5">
                          {item.features.map((feature) => (
                            <li key={feature} className="text-sm leading-relaxed">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {item.useCases ? (
                      <div>
                        <p className="mb-2 text-sm font-medium">Use cases</p>
                        <ul className="flex flex-col gap-1.5">
                          {item.useCases.map((useCase) => (
                            <li key={useCase} className="text-sm leading-relaxed">
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
        <p className="sr-only" aria-live="polite">
          {current ? `${current.name}, ${index + 1} of ${count}` : ""}
        </p>
      </div>
    </section>
  );
}
