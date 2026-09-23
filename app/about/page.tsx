import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${about.meta.title} | ${site.name}`,
    description: about.meta.description,
  },
};

export default function AboutPage() {
  const { hero, mission, vision, company, values, leadership } = about;

  return (
    <main className="company-canvas flex flex-1 flex-col">
      <section aria-labelledby="about-hero-heading" className="grid bg-[var(--company-sand)] lg:grid-cols-2">
        <div className="relative min-h-80 lg:min-h-[40rem]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
          <p className="text-sm font-medium text-foreground/70">{hero.support}</p>
          <h1 id="about-hero-heading" className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed">{hero.body}</p>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="bg-[var(--company-beige)]">
        <div className="container-site section-y">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <h2 id="mission-heading" className="text-h1">
              {mission.title}
            </h2>
            <p className="text-xl leading-relaxed sm:text-2xl">{mission.text}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="vision-heading" className="bg-[oklch(0.32_0.025_55)] text-white">
        <div className="container-site section-y">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <h2 id="vision-heading" className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {vision.title}
            </h2>
            <p className="text-xl leading-relaxed text-white sm:text-2xl">{vision.text}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="company-heading" className="bg-[var(--company-stone)]">
        <div className="container-site section-y grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="flex flex-col gap-5">
            <h2 id="company-heading" className="text-h1">
              {company.title}
            </h2>
            {company.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body max-w-2xl">
                {paragraph}
              </p>
            ))}
            <p className="text-body">
              For more information about our services, please visit our{" "}
              <Link href={company.link.href} className="focus-ring rounded-sm font-medium underline underline-offset-4">
                {company.link.label}
              </Link>
              .
            </p>
          </div>
          <ul className="flex flex-col gap-3 border-t border-foreground/15 pt-4">
            {company.offerings.map((item) => (
              <li key={item} className="border-b border-foreground/10 pb-3 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-[var(--company-sage)]">
        <div className="container-site section-y">
          <h2 id="values-heading" className="text-h2 mb-10">
            {values.title}
          </h2>
          <ol className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-8 lg:gap-y-4">
            {values.sequence.map((value, index) => (
              <li key={value} className="flex items-center gap-8">
                <span className="text-3xl font-semibold tracking-tight sm:text-4xl">{value}</span>
                {index < values.sequence.length - 1 ? (
                  <span aria-hidden="true" className="text-2xl text-foreground/40">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="leadership-heading" className="bg-[var(--company-sand)]">
        <div className="container-site section-y">
          <h2 id="leadership-heading" className="text-h1 mb-10">
            {leadership.title}
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {leadership.members.map((member) => (
              <article key={member.name} className="border-t border-foreground/15 pt-6">
                <h3 className="text-3xl font-semibold tracking-tight">{member.name}</h3>
                <p className="mt-2 text-base text-foreground/75">{member.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
