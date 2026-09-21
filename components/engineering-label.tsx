import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EngineeringLabelProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

export function EngineeringLabel({
  children,
  className,
  as: Component = "span",
}: EngineeringLabelProps) {
  return (
    <Component
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 shrink-0 bg-ete-green" />
      {children}
    </Component>
  );
}
