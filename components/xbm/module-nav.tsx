"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Activity,
  BookOpen,
  Clock,
  Gauge,
  LayoutGrid,
  LineChart,
  ShieldAlert,
  Thermometer,
  Waves,
} from "lucide-react";
import { motion } from "motion/react";

import { xbm } from "@/content/xbm";
import { cn } from "@/lib/utils";

const icons = {
  landing: LayoutGrid,
  dashboard: Gauge,
  "well-data-book": BookOpen,
  "operating-envelope": ShieldAlert,
  "temperature-derived-rates": Thermometer,
  "maximum-sustainable-drawdown": Activity,
  flux: Waves,
  "short-term-pta": LineChart,
  "pseudo-skin": Clock,
} as const;

const previews: Record<string, { src: string; alt: string } | null> = {
  landing: xbm.hero.image,
  dashboard: {
    src: "/assets/xbm/external/platform-dashboard.jpg",
    alt: "Offshore drilling rig.",
  },
  "well-data-book": {
    src: "/assets/xbm/external/platform-well-data.jpg",
    alt: "Drilling rig at sunset.",
  },
  "operating-envelope": xbm.envelope.image,
  "temperature-derived-rates": xbm.temperature.image,
  "maximum-sustainable-drawdown": xbm.drawdown.image,
  flux: {
    src: "/assets/xbm/external/platform-flux.jpg",
    alt: "Sphere covered in binary digits.",
  },
  "short-term-pta": {
    src: "/assets/xbm/external/platform-pta.jpg",
    alt: "Pumping unit in a field beside a wind turbine.",
  },
  "pseudo-skin": {
    src: "/assets/xbm/external/platform-pseudo-skin.jpg",
    alt: "Land drilling rig in a field.",
  },
};

export function XbmModuleNav() {
  const [activeId, setActiveId] = useState(xbm.modules[1]?.id ?? xbm.modules[0].id);
  const active = xbm.modules.find((module) => module.id === activeId) ?? xbm.modules[0];
  const preview = previews[active.id];

  return (
    <section id="platform" aria-labelledby="platform-heading" className="scroll-mt-20 bg-[var(--xbm-cloud)]">
      <div className="xbm-wrap section-y">
        <h2 id="platform-heading" className="text-h2 mb-8">
          Platform
        </h2>
        <nav aria-label="XBM modules" className="min-w-0 overflow-hidden">
          <ul className="flex gap-2 overflow-x-auto pb-2">
            {xbm.modules.map((module) => {
              const Icon = icons[module.id as keyof typeof icons];
              const selected = module.id === active.id;
              return (
                <li key={module.id} className="shrink-0">
                  <a
                    href={`#${module.anchor}`}
                    className={cn(
                      "focus-ring flex items-center gap-2 border px-3 py-2 text-sm",
                      selected
                        ? "border-[var(--xbm-aqua)] bg-[var(--xbm-paper)] text-foreground"
                        : "border-transparent bg-[var(--xbm-paper)]/60 text-foreground/80 hover:border-foreground/15",
                    )}
                    onMouseEnter={() => setActiveId(module.id)}
                    onFocus={() => setActiveId(module.id)}
                  >
                    <Icon aria-hidden="true" className="size-4 text-[var(--xbm-aqua)]" />
                    {module.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6 grid items-center gap-6 border border-foreground/10 bg-[var(--xbm-paper)] p-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:p-8">
          <div>
            <p className="text-sm text-[var(--xbm-aqua)]">{active.name}</p>
            <p className="mt-3 text-lg leading-relaxed">{active.summary}</p>
          </div>
          <motion.div
            key={active.id}
            className="relative min-h-48 overflow-hidden bg-[var(--xbm-ink)]"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            {preview ? (
              <Image src={preview.src} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            ) : (
              <PreviewMark id={active.id} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PreviewMark({ id }: { id: string }) {
  if (id === "pseudo-skin") {
    return (
      <div className="flex h-full min-h-48 items-center justify-center gap-6 text-white">
        {xbm.pseudoSkin.windows.map((window) => (
          <span key={window} className="text-lg font-medium">
            {window}
          </span>
        ))}
      </div>
    );
  }

  if (id === "well-data-book") {
    return (
      <div className="grid h-full min-h-48 content-center gap-3 p-6 text-white sm:grid-cols-3">
        {xbm.wellData.groups.map((group) => (
          <p key={group.id} className="border border-white/15 px-3 py-4 text-sm">
            {group.title}
          </p>
        ))}
      </div>
    );
  }

  if (id === "flux") {
    return (
      <div className="flex h-full min-h-48 items-center justify-center text-sm text-white/80">
        Screen velocity
      </div>
    );
  }

  if (id === "short-term-pta") {
    return (
      <div className="flex h-full min-h-48 items-center justify-center text-sm text-white/80">
        Pressure and derivative
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-48 flex-col justify-center gap-3 p-6">
      {xbm.dashboard.features.slice(0, 4).map((feature) => (
        <div key={feature} className="h-3 bg-white/15" style={{ width: `${60 + feature.length}%`, maxWidth: "100%" }} />
      ))}
    </div>
  );
}
