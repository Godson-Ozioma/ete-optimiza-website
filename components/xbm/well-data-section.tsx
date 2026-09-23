"use client";

import { useState, type ReactNode } from "react";
import { Braces, FileSpreadsheet, FileText, Table2 } from "lucide-react";
import { motion } from "motion/react";

import { xbm } from "@/content/xbm";

const formatIcons = {
  Excel: FileSpreadsheet,
  CSV: Table2,
  JSON: Braces,
  TXT: FileText,
} as const;

export function XbmWellDataSection() {
  const { wellData } = xbm;
  const [active, setActive] = useState(wellData.groups[0].id);

  return (
    <section id={wellData.id} aria-labelledby="well-data-heading" className="scroll-mt-20 bg-[var(--xbm-mist)]">
      <div className="xbm-wrap section-y">
        <div className="max-w-3xl">
          <h2 id="well-data-heading" className="text-h1">
            {wellData.title}
          </h2>
          <p className="text-body mt-4">{wellData.intro}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm text-muted-foreground">
              {wellData.date.name}
              {wellData.date.unit ? ` · ${wellData.date.unit}` : ""}
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              {wellData.groups.map((group) => (
                <li key={group.id}>
                  <p className={group.id === active ? "border-l-2 border-[var(--xbm-aqua)] pl-3 text-lg font-semibold" : "border-l-2 border-transparent pl-3 text-lg text-foreground/55"}>
                    {group.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-col gap-12 overflow-x-clip">
            {wellData.groups.map((group) => (
              <GroupBlock key={group.id} id={group.id} title={group.title} onEnter={() => setActive(group.id)}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {group.fields.map((field) => (
                    <li key={field.name} className="border border-foreground/10 bg-[var(--xbm-paper)] px-4 py-3">
                      <p className="text-sm font-medium">{field.name}</p>
                      {field.unit ? <p className="mt-1 text-sm text-muted-foreground">{field.unit}</p> : null}
                    </li>
                  ))}
                </ul>
              </GroupBlock>
            ))}

            <div id="data-imports" className="border border-foreground/10 bg-[var(--xbm-paper)] p-6">
              <h3 className="text-h3">{wellData.imports.title}</h3>
              {wellData.imports.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-body mt-3">
                  {paragraph}
                </p>
              ))}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ul className="flex flex-wrap gap-2">
                  {wellData.imports.formats.map((format) => {
                    const Icon = formatIcons[format as keyof typeof formatIcons];
                    return (
                      <li key={format}>
                        <span className="inline-flex items-center gap-2 border border-foreground/15 px-3 py-2 text-sm">
                          {Icon ? <Icon aria-hidden="true" className="size-4 text-[var(--xbm-aqua)]" /> : <span aria-hidden="true" className="text-xs font-semibold text-[var(--xbm-aqua)]">PE</span>}
                          {format}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-sm text-muted-foreground sm:ml-auto">→ XBM Well Data Book</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupBlock({
  id,
  title,
  onEnter,
  children,
}: {
  id: string;
  title: string;
  onEnter: () => void;
  children: ReactNode;
}) {
  return (
    <motion.article
      aria-labelledby={`${id}-heading`}
      onViewportEnter={onEnter}
      viewport={{ margin: "-45% 0px -45% 0px" }}
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
            <h3 id={`${id}-heading`} className="mb-4 text-lg font-semibold">
              {title}
            </h3>
      {children}
    </motion.article>
  );
}
