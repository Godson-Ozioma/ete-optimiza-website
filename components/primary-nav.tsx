"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

type PrimaryNavProps = {
  className?: string;
  onNavigate?: () => void;
};

export function PrimaryNav({ className, onNavigate }: PrimaryNavProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex items-center gap-1", className)}>
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
                "rounded-md px-3 py-1.5 text-sm font-medium focus-ring",
                isActive
                  ? "text-foreground shadow-[inset_0_-1px_0_0_var(--ete-green)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
