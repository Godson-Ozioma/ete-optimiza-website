"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { primaryCta, primaryNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Dismiss navigation menu"
            className="fixed inset-0 z-40 bg-background/90"
            onClick={() => setOpen(false)}
          />
          <nav
            id={panelId}
            aria-label="Mobile"
            className="fixed inset-x-0 top-14 z-50 border-b border-border bg-surface px-4 py-4 shadow-lg"
          >
            <ul className="space-y-1">
              {primaryNav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm font-medium focus-ring",
                        isActive
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 border-t border-border-subtle pt-4">
              <Button
                className="w-full"
                render={<Link href={primaryCta.href} />}
                nativeButton={false}
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </Button>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
