import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: services.meta.title,
  description: services.meta.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${services.meta.title} | ${site.name}`,
    description: services.meta.description,
  },
};

function FluxDiagram() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label="Diagram of flow through a slotted screen.">
      <rect width="320" height="220" fill="oklch(0.86 0.03 145)" />
      <g fill="none" stroke="oklch(0.32 0.04 145)" strokeWidth="1.6">
        <path d="M40 36h240M40 72h240M40 108h240M40 144h240M40 180h240" />
        <path d="M70 20v180M120 20v180M170 20v180M220 20v180M260 20v180" />
      </g>
      <path d="M24 110h36M260 110h36" stroke="oklch(0.32 0.04 145)" strokeWidth="2" />
    </svg>
  );
}

const sectionTone = [
  "bg-[var(--company-sage)]",
  "bg-[var(--company-sand)]",
  "bg-[var(--company-stone)]",
  "bg-[var(--company-beige)]",
  "bg-[var(--company-olive)]",
  "bg-[var(--company-sand)]",
  "bg-[var(--company-stone)]",
];

export default function ServicesPage() {
  const { hero, offerings } = services;

  return (
    <main className="company-canvas flex flex-1 flex-col">
      <section aria-labelledby="services-hero-heading" className="relative min-h-[70svh] bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
        </div>
        <div className="container-site relative flex min-h-[70svh] flex-col justify-end gap-5 py-16 sm:py-20">
          <h1 id="services-hero-heading" className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {hero.title}
          </h1>
          <p className="text-2xl font-medium">{hero.lede}</p>
          <p className="max-w-2xl text-base leading-relaxed text-white/90">{hero.body}</p>
          <div>
            <Button size="lg" render={<Link href={hero.cta.href} />} nativeButton={false}>
              {hero.cta.label}
            </Button>
          </div>
        </div>
      </section>

      <nav aria-label="Service sections" className="border-b border-foreground/10 bg-[var(--company-sand)]">
        <ul className="container-site flex gap-x-6 gap-y-3 overflow-x-auto py-4">
          {offerings.map((item) => (
            <li key={item.id} className="shrink-0">
              <a href={`#${item.id}`} className="focus-ring rounded-sm text-sm font-medium underline-offset-4 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {offerings.map((item, index) => {
        const imageFirst = index % 2 === 1;
        const wide = item.id === "sustainable-drawdown" || item.id === "agentic-ai";
        return (
          <section
            key={item.id}
            id={item.id}
            aria-labelledby={`${item.id}-heading`}
            className={cn("scroll-mt-20", sectionTone[index])}
          >
            <div className={cn("container-site section-y", wide ? "" : "grid items-center gap-10 lg:grid-cols-2 lg:gap-16")}>
              {item.id === "flux-analysis" ? (
                <div className={cn("relative min-h-64 overflow-hidden", imageFirst ? "lg:order-first" : "lg:order-last")}>
                  <FluxDiagram />
                </div>
              ) : item.image && !wide ? (
                <div className={cn("relative min-h-72 overflow-hidden sm:min-h-96", imageFirst ? "lg:order-first" : "lg:order-last")}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-left-top"
                  />
                </div>
              ) : null}

              <div className={cn("flex flex-col gap-5", wide ? "mx-auto max-w-3xl" : "")}>
                {item.label ? <p className="text-sm font-medium text-foreground/70">{item.label}</p> : null}
                <h2 id={`${item.id}-heading`} className="text-h1 text-balance">
                  {item.title}
                </h2>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-body max-w-2xl">
                    {paragraph}
                  </p>
                ))}
                {item.points ? (
                  <ul className="flex max-w-2xl flex-col gap-4">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.cta ? (
                  <div>
                    <Button render={<Link href={item.cta.href} />} nativeButton={false}>
                      {item.cta.label}
                    </Button>
                  </div>
                ) : null}
              </div>

              {wide && item.image ? (
                <div className="relative mt-8 min-h-72 overflow-hidden sm:min-h-96">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover object-left-top"
                  />
                </div>
              ) : null}
            </div>
          </section>
        );
      })}
    </main>
  );
}
