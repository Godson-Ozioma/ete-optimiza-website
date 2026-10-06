"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BadgeCheck,
  ChartNoAxesCombined,
  ChartSpline,
  FileChartColumn,
  Handshake,
  Lightbulb,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import { MotionConfig, animate, motion, useReducedMotion } from "motion/react";

import { FounderPortraitPlaceholder } from "@/components/about/founder-portrait-placeholder";
import { Button } from "@/components/ui/button";
import { about } from "@/content/about";
import type { PageImage } from "@/content/types";
import { cn } from "@/lib/utils";

const capabilityIcons = [
  ChartNoAxesCombined,
  UsersRound,
  Activity,
  ChartSpline,
  FileChartColumn,
  Workflow,
] as const;

const valueIcons = [BadgeCheck, ShieldCheck, Lightbulb, Handshake] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const missionImageSizes =
  "(min-width: 1376px) 560px, (min-width: 1024px) 44vw, (min-width: 768px) calc(100vw - 64px), calc(100vw - 48px)";

export function AboutView() {
  return (
    <MotionConfig reducedMotion="user">
      <AboutHero />
      <MissionSection />
      <PromisesSection />
      <VisionSection />
      <CompanySection />
      <ValuesSection />
      <LeadershipSection />
    </MotionConfig>
  );
}

function AboutHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const heading = headingRef.current;
    const actions = actionsRef.current;
    if (!heading || !actions || reducedMotion !== false) return;

    const headingMotion = animate(
      heading,
      { opacity: [0.85, 1], y: [10, 0] },
      { duration: 0.5, ease },
    );
    const actionMotion = animate(
      actions,
      { opacity: [0.85, 1], y: [10, 0] },
      { duration: 0.5, delay: 0.08, ease },
    );

    return () => {
      headingMotion.stop();
      actionMotion.stop();
    };
  }, [reducedMotion]);

  return (
    <section className="about-hero on-dark" aria-labelledby="about-hero-title">
      <div className="about-hero-frame">
        <div className="about-hero-copy">
          <div className="about-container">
            <div className="max-w-[560px]">
              <h1
                id="about-hero-title"
                ref={headingRef}
                className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance text-[var(--about-paper)]"
              >
                {about.hero.title}
              </h1>
              <div ref={actionsRef} className="mt-8 flex flex-wrap gap-3">
                <AboutButton href={about.hero.primary.href} tone="lime">
                  {about.hero.primary.label}
                </AboutButton>
                <AboutButton href={about.hero.secondary.href} tone="ghost">
                  {about.hero.secondary.label}
                </AboutButton>
              </div>
            </div>
          </div>
        </div>
        <div className="about-hero-media">
          <Image
            src={about.hero.image.src}
            alt={about.hero.image.alt}
            fill
            preload
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="about-hero-photo object-cover"
          />
          <div className="about-hero-shade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const ruleRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const rule = ruleRef.current;
    if (!rule || reducedMotion !== false) return;
    if (!("IntersectionObserver" in window)) return;

    let stop = () => {};
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        const controls = animate(
          rule,
          { scaleX: [0.6, 1] },
          { duration: 0.45, ease },
        );
        stop = () => controls.stop();
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(rule);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [reducedMotion]);

  return (
    <section
      id="mission"
      className="about-section scroll-mt-20 bg-[var(--about-sage)]"
      aria-labelledby="about-mission-title"
    >
      <div className="about-container">
        <h2
          id="about-mission-title"
          className="text-[13px] font-semibold tracking-[0.08em] text-[var(--about-green)] uppercase"
        >
          <span aria-hidden="true">{about.mission.index} / </span>
          {about.mission.title}
        </h2>
        <span ref={ruleRef} className="about-mission-rule" aria-hidden="true" />
        <p className="mt-8 text-[clamp(1.75rem,2.8vw,2.625rem)] leading-[1.25] font-medium tracking-[-0.025em] text-balance text-[var(--about-ink)] lg:mt-10 lg:w-10/12">
          {about.mission.statement}
        </p>
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-8">
          <div className="relative aspect-[5/4] overflow-hidden rounded-md lg:col-span-5">
            <EditorialImage image={about.mission.image} sizes={missionImageSizes} />
          </div>
          <div className="max-w-[62ch] space-y-5 self-center text-[17px] leading-[1.7] text-[var(--about-ink)] lg:col-span-6 lg:col-start-7 lg:text-[18px] lg:leading-[1.75]">
            {about.mission.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PromisesSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const photo = photoRef.current;
    if (!photo || reducedMotion !== false) return;
    if (!("IntersectionObserver" in window)) return;

    let stop = () => {};
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        const controls = animate(
          photo,
          { opacity: [0.8, 1], y: [12, 0] },
          { duration: 0.6, ease },
        );
        stop = () => controls.stop();
        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(photo);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [reducedMotion]);

  return (
    <section
      id="promises"
      className="about-section scroll-mt-20"
      aria-labelledby="about-promises-title"
    >
      <div className="about-container grid gap-8 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
        <p className="text-[13px] font-semibold tracking-[0.08em] text-[var(--about-green)] uppercase lg:col-span-6 lg:col-start-1 lg:row-start-1">
          {about.promises.eyebrow}
        </p>
        <h2
          id="about-promises-title"
          className="max-w-[11ch] text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.025em] text-balance text-[var(--about-ink)] lg:col-span-6 lg:col-start-1 lg:row-start-2"
        >
          {about.promises.title}
        </h2>
        <div
          ref={photoRef}
          className="relative aspect-[5/4] self-start overflow-hidden rounded-md lg:col-span-6 lg:col-start-7 lg:row-span-3 lg:row-start-1"
        >
          <EditorialImage image={about.promises.image} sizes={missionImageSizes} />
        </div>
        <div className="max-w-[62ch] lg:col-span-6 lg:col-start-1 lg:row-start-3">
          <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--about-ink)] lg:text-[18px] lg:leading-[1.75]">
            {about.promises.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-8 grid gap-6 border-t border-[var(--about-rule)] pt-6 sm:grid-cols-2">
            {about.promises.facts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-[12px] font-semibold tracking-[0.08em] text-[var(--about-muted)] uppercase">
                  {fact.term}
                </dt>
                <dd className="mt-1 text-lg text-[var(--about-ink)]">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section
      id="vision"
      className="about-section scroll-mt-20 bg-[oklch(0.32_0.025_55)] text-white"
      aria-labelledby="about-vision-title"
    >
      <div className="about-container grid gap-6 lg:grid-cols-12 lg:gap-8">
        <h2
          id="about-vision-title"
          className="text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.025em] text-white lg:col-span-3"
        >
          {about.vision.title}
        </h2>
        <div className="max-w-[65ch] space-y-5 text-[17px] leading-[1.7] text-white lg:col-span-8 lg:col-start-5 lg:text-[20px] lg:leading-[1.7]">
          {about.vision.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanySection() {
  return (
    <section
      id="company"
      aria-labelledby="company-heading"
      className="about-legacy scroll-mt-20 overflow-hidden bg-[var(--about-stone)]"
    >
      <div className="about-container py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.92fr)] lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <motion.h2
              id="company-heading"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="text-balance text-xl font-semibold tracking-tight sm:text-2xl"
            >
              {about.company.title}
            </motion.h2>
            <div className="flex max-w-[67ch] flex-col gap-5">
              {about.company.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 36)} className="text-sm leading-6 text-foreground/82 sm:text-base sm:leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease }}
              className="relative mt-2 aspect-[16/7] max-h-52 overflow-hidden"
            >
              <Image
                src={about.company.image.src}
                alt={about.company.image.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          <ul className="self-start border-t border-foreground/18">
            {about.company.offerings.map((offering, index) => {
              const Icon = capabilityIcons[index] ?? Workflow;

              return (
                <motion.li
                  key={offering}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.055, ease }}
                  className="group border-b border-foreground/14"
                >
                  <div
                    tabIndex={0}
                    className="focus-ring flex items-center gap-3 rounded-sm py-3 text-sm font-medium outline-none transition-colors duration-200 hover:text-[var(--about-olive)] focus-visible:text-[var(--about-olive)] sm:py-3.5 sm:text-base"
                  >
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.55}
                      className="size-5 shrink-0 text-[var(--about-olive)] transition-transform duration-200 group-hover:translate-x-0.5 group-focus-within:translate-x-0.5"
                    />
                    <span>{offering}</span>
                    <span
                      aria-hidden="true"
                      className="ml-auto h-px w-7 origin-right bg-foreground/25 transition-[width,background-color] duration-200 group-hover:w-12 group-hover:bg-[var(--about-accent)] group-focus-within:w-12 group-focus-within:bg-[var(--about-accent)]"
                    />
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="about-legacy scroll-mt-20 overflow-hidden bg-[var(--about-sage)]"
    >
      <div className="about-container py-10 sm:py-12 lg:py-14">
        <motion.h2
          id="values-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease }}
          className="text-balance text-xl font-semibold tracking-tight sm:text-2xl"
        >
          {about.values.title}
        </motion.h2>

        <div className="relative mt-8 lg:mt-10">
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease }}
            className="absolute bottom-9 left-8 top-9 w-px origin-top bg-[var(--about-accent)]/60 lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="absolute inset-x-[10%] top-8 hidden h-px origin-left bg-[var(--about-accent)]/60 lg:block"
          />

          <ol className="relative grid gap-6 lg:grid-cols-4 lg:gap-5">
            {about.values.sequence.map((value, index) => {
              const Icon = valueIcons[index] ?? BadgeCheck;

              return (
                <motion.li
                  key={value}
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.12 + index * 0.1, ease }}
                  className="group grid min-h-12 grid-cols-[3rem_1fr] items-center gap-4 lg:flex lg:min-h-0 lg:flex-col lg:items-start lg:gap-4"
                >
                  <div className="relative flex size-12 items-center justify-center rounded-full border border-foreground/18 bg-[var(--about-sage)]">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.45}
                      className="size-5 text-[var(--about-olive)] transition-transform duration-200 motion-safe:group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="text-lg font-semibold tracking-tight sm:text-xl">
                    {value}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="about-legacy scroll-mt-20 overflow-hidden bg-[var(--about-ivory)]"
    >
      <div className="about-container py-10 sm:py-12 lg:py-14">
        <div className="mb-8 flex flex-col gap-3 border-b border-foreground/14 pb-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="leadership-heading"
            className="max-w-2xl text-balance text-xl font-semibold tracking-tight sm:text-2xl"
          >
            {about.leadership.title}
          </h2>
          <p className="text-sm text-foreground/58">ETE-Optimiza leadership</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
          {about.leadership.members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              className="group"
            >
              <div className="relative aspect-[5/4] max-h-72 overflow-hidden sm:max-h-80">
                <FounderPortraitPlaceholder member={member} />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent"
                />
              </div>
              <div className="relative border-b border-foreground/18 py-4">
                <div
                  aria-hidden="true"
                  className="absolute bottom-[-1px] left-0 h-px w-14 bg-[var(--about-accent)] transition-[width] duration-300 group-hover:w-24"
                />
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/65">{member.title}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialImage({
  image,
  sizes,
}: {
  image: PageImage;
  sizes: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      className="object-cover object-center"
    />
  );
}

function AboutButton({
  href,
  tone,
  children,
}: {
  href: string;
  tone: "lime" | "ghost";
  children: string;
}) {
  return (
    <Button
      nativeButton={false}
      render={<Link href={href} />}
      className={cn(
        "h-12 rounded-md px-6 text-base transition-[background-color,border-color,color] duration-200",
        tone === "lime"
          ? "bg-[var(--about-lime)] text-[var(--about-dark)] hover:bg-[#78dc5e]"
          : "border border-white/75 bg-transparent text-[var(--about-paper)] hover:border-white hover:bg-white/10",
      )}
    >
      {children}
    </Button>
  );
}
