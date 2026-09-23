import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

export function WhoWeAre() {
  const { who } = home;

  return (
    <section aria-labelledby="who-heading" className="bg-[var(--home-sand)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-72 sm:min-h-96 lg:min-h-[36rem]">
          <Image
            src={who.image.src}
            alt={who.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <h2 id="who-heading" className="text-h1">
            {who.title}
          </h2>
          <p className="text-body max-w-xl">{who.body}</p>
          <ul className="flex flex-col gap-2">
            {who.facts.map((fact) => (
              <li key={fact} className="text-xl font-medium tracking-tight">
                {fact}
              </li>
            ))}
          </ul>
          <div>
            <Button
              size="lg"
              variant="outline"
              render={<Link href={who.cta.href} />}
              nativeButton={false}
            >
              {who.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
