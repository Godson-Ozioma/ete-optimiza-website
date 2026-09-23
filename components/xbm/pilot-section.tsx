import Link from "next/link";

import { Button } from "@/components/ui/button";
import { xbm } from "@/content/xbm";

export function XbmPilotSection() {
  const { pilot } = xbm;

  return (
    <section aria-labelledby="xbm-pilot-heading" className="xbm-ink">
      <div className="xbm-wrap section-y flex flex-col gap-6">
        <h2 id="xbm-pilot-heading" className="max-w-2xl font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {pilot.title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/85">{pilot.description}</p>
        <div>
          <Button size="lg" render={<Link href={pilot.primary.href} />} nativeButton={false}>
            {pilot.primary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
