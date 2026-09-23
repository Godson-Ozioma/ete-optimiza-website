import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

export function Hero() {
  const { hero } = home;

  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[88svh] bg-neutral-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="home-hero-photo object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
      </div>

      <div className="container-site relative flex min-h-[88svh] items-end py-16 sm:py-20 lg:items-center lg:py-24">
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-sm font-medium text-white/80">ETE-Optimiza</p>
          <h1 id="hero-heading" className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]">
            {hero.title}
          </h1>
          <div>
            <Button
              size="lg"
              render={<Link href={hero.cta.href} />}
              nativeButton={false}
            >
              {hero.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
