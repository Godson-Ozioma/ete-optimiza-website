import Image from "next/image";
import { UserRound } from "lucide-react";

import type { LeadershipMember } from "@/content/types";

type FounderPortraitPlaceholderProps = {
  member: LeadershipMember;
};

export function FounderPortraitPlaceholder({
  member,
}: FounderPortraitPlaceholderProps) {
  if (member.image) {
    return (
      <Image
        src={member.image.src}
        alt={member.image.alt}
        fill
        sizes="(min-width: 768px) 42vw, 100vw"
        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(145deg,var(--about-portrait-start),var(--about-portrait-end))]"
      role="img"
      aria-label={`Portrait placeholder for ${member.name}`}
    >
      <div className="flex size-20 items-center justify-center rounded-full border border-foreground/12 bg-background/35 sm:size-24">
        <UserRound
          aria-hidden="true"
          strokeWidth={1.1}
          className="size-10 text-foreground/55 sm:size-12"
        />
      </div>
    </div>
  );
}
