import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

export function XbmTeaser() {
  const { xbm } = home;

  return (
    <section aria-labelledby="xbm-heading" className="bg-[var(--home-sage)]">
      <div className="container-site section-y">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <h2 id="xbm-heading" className="text-h1">
              {xbm.title}
            </h2>
            <p className="text-body max-w-xl">{xbm.description}</p>
            <div>
              <Button
                size="lg"
                render={<Link href={xbm.cta.href} />}
                nativeButton={false}
              >
                {xbm.cta.label}
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--home-sand)]">
            <Image
              src={xbm.image.src}
              alt={xbm.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
