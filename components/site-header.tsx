import Link from "next/link";

import { primaryCta } from "@/content/navigation";

import { MobileNav } from "./mobile-nav";
import { PrimaryNav } from "./primary-nav";
import { SiteLogo } from "./site-logo";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="container-site flex h-14 items-center justify-between gap-4">
        <SiteLogo priority />

        <nav aria-label="Primary" className="hidden lg:block">
          <PrimaryNav />
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            size="sm"
            render={<Link href={primaryCta.href} />}
            nativeButton={false}
          >
            {primaryCta.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
