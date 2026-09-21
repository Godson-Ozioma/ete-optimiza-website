import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center gap-2 focus-ring rounded-sm",
        className,
      )}
      aria-label={`${site.name} home`}
    >
      <Image
        src="/assets/brand/ete-optimiza-logo.png"
        alt=""
        width={120}
        height={32}
        className="h-7 w-auto sm:h-8"
        priority={priority}
      />
      <span className="sr-only">{site.name}</span>
    </Link>
  );
}
