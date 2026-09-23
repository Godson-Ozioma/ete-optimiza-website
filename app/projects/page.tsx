import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: projects.meta.title,
  description: projects.meta.description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${projects.meta.title} | ${site.name}`,
    description: projects.meta.description,
  },
};

export default function ProjectsPage() {
  const { hero, poStudio, flowIq, optimech } = projects;

  return (
    <main className="company-canvas flex flex-1 flex-col">
      <section aria-labelledby="projects-hero-heading" className="relative min-h-[32rem] bg-neutral-950 text-white">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-transparent" />
        <div className="container-site relative flex min-h-[32rem] flex-col justify-end gap-4 py-16">
          <h1 id="projects-hero-heading" className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-lg text-white/90">{hero.sentence}</p>
        </div>
      </section>

      <section aria-labelledby="po-studio-heading" className="bg-[var(--company-stone)]">
        <div className="container-site section-y grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-72 overflow-hidden sm:min-h-[28rem]">
            <Image
              src={poStudio.image.src}
              alt={poStudio.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-sm text-foreground/65">{poStudio.year}</p>
            <h2 id="po-studio-heading" className="text-h1">
              {poStudio.name}
            </h2>
            <p className="text-body max-w-xl">{poStudio.description}</p>
            <div>
              <h3 className="mb-2 text-sm font-medium">Features</h3>
              <ul className="flex flex-col gap-1.5">
                {poStudio.features.map((feature) => (
                  <li key={feature} className="text-sm leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Use cases</h3>
              <ul className="flex flex-col gap-1.5">
                {poStudio.useCases.map((useCase) => (
                  <li key={useCase} className="text-sm leading-relaxed">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="flow-iq-heading" className="bg-[var(--company-sage)]">
        <div className="container-site section-y grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5 lg:order-first">
            <p className="text-sm text-foreground/65">{flowIq.year}</p>
            <h2 id="flow-iq-heading" className="text-h1">
              {flowIq.name}
            </h2>
            <p className="text-body max-w-xl">{flowIq.description}</p>
            <div>
              <Button render={<Link href={flowIq.link.href} />} nativeButton={false}>
                {flowIq.link.label}
              </Button>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden sm:min-h-[28rem]">
            <Image
              src={flowIq.image.src}
              alt={flowIq.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="optimech-heading" className="relative min-h-[28rem] text-white">
        <Image
          src={optimech.image.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.28_0.03_80/0.72)]" />
        <div className="container-site relative flex min-h-[28rem] flex-col justify-end gap-3 py-16">
          <h2 id="optimech-heading" className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {optimech.name}
          </h2>
          <p className="text-xl font-medium">{optimech.status}</p>
        </div>
      </section>
    </main>
  );
}
