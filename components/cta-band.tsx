import Link from "next/link";

import type { CtaLink } from "@/content/types";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type CtaBandProps = {
  title: string;
  description?: string;
  primary: CtaLink;
  secondary?: CtaLink;
  className?: string;
};

export function CtaBand({
  title,
  description,
  primary,
  secondary,
  className,
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="cta-band-heading"
      className={cn(
        "rule-top rule-bottom bg-surface engineering-grid",
        className,
      )}
    >
      <div className="container-site section-y">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-2">
            <h2 id="cta-band-heading" className="text-h3">
              {title}
            </h2>
            {description ? (
              <p className="text-body-muted">{description}</p>
            ) : null}
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Button render={<Link href={primary.href} />} nativeButton={false}>
              {primary.label}
            </Button>
            {secondary ? (
              <Button
                variant="outline"
                render={<Link href={secondary.href} />}
                nativeButton={false}
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
