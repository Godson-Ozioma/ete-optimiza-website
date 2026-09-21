import { cn } from "@/lib/utils";

import { EngineeringLabel } from "./engineering-label";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
  titleId,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? <EngineeringLabel>{label}</EngineeringLabel> : null}
      <h2 id={titleId} className="text-h2">
        {title}
      </h2>
      {description ? (
        <p className="text-body-muted">{description}</p>
      ) : null}
    </header>
  );
}
