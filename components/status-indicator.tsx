import type { ExceptionStatus } from "@/content/types";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  ExceptionStatus,
  { label: string; dotClass: string; textClass: string }
> = {
  critical: {
    label: "Critical",
    dotClass: "bg-critical",
    textClass: "text-critical",
  },
  warning: {
    label: "Warning",
    dotClass: "bg-warning",
    textClass: "text-warning",
  },
  normal: {
    label: "Normal",
    dotClass: "bg-success",
    textClass: "text-success",
  },
  undefined: {
    label: "Undefined",
    dotClass: "bg-undefined",
    textClass: "text-undefined",
  },
};

type StatusIndicatorProps = {
  status: ExceptionStatus;
  showLabel?: boolean;
  className?: string;
};

export function StatusIndicator({
  status,
  showLabel = true,
  className,
}: StatusIndicatorProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide",
        config.textClass,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 shrink-0 rounded-full", config.dotClass)}
      />
      {showLabel ? (
        <span>{config.label}</span>
      ) : (
        <span className="sr-only">{config.label}</span>
      )}
    </span>
  );
}
