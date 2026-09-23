import Image from "next/image";

import { cn } from "@/lib/utils";

type ProductVisualProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProductVisual({
  src,
  alt,
  priority = false,
  className,
}: ProductVisualProps) {
  return (
    <figure className={cn(className)}>
      <div className="rule-top rule-bottom bg-surface engineering-grid-fine p-1">
        <div className="relative overflow-hidden border border-border-subtle bg-background">
          <Image
            src={src}
            alt={alt}
            width={1280}
            height={720}
            className="h-auto w-full object-contain object-left-top"
            priority={priority}
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>
      </div>
    </figure>
  );
}
