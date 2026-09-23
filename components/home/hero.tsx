import Image from "next/image";
import Link from "next/link";

import { EngineeringLabel } from "@/components/engineering-label";
import { HeroSurveillanceVisual } from "@/components/home/hero-surveillance-visual";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

export function Hero() {
  const { hero } = home;

  return (
    <section
      aria-labelledby="hero-heading"
      className="rule-bottom engineering-grid overflow-x-clip"
    >
      <div className="container-site section-y">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.12fr)] lg:items-stretch lg:gap-6 xl:gap-8">
          <div className="relative z-10 flex flex-col gap-6 lg:gap-8 lg:justify-center">
            <EngineeringLabel as="p">{hero.eyebrow}</EngineeringLabel>
            <h1
              id="hero-heading"
              className="text-display max-w-2xl text-balance"
            >
              {hero.title}
            </h1>
            <p className="text-body-muted max-w-xl">{hero.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                render={<Link href={hero.primaryCta.href} />}
                nativeButton={false}
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href={hero.secondaryCta.href} />}
                nativeButton={false}
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <HeroSurveillanceVisual>
            <Image
              src={hero.visual.src}
              alt={hero.visual.alt}
              fill
              priority
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </HeroSurveillanceVisual>
        </div>
      </div>
    </section>
  );
}
