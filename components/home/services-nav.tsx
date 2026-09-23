"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { home } from "@/content/home";
import { cn } from "@/lib/utils";

function FluxMark() {
  return (
    <svg viewBox="0 0 120 80" className="h-full w-full" aria-hidden="true">
      <rect width="120" height="80" fill="oklch(0.86 0.03 145)" />
      <g fill="none" stroke="oklch(0.35 0.04 145)" strokeWidth="1.4">
        <path d="M18 18h84M18 32h84M18 46h84M18 62h84" />
        <path d="M30 12v56M50 12v56M70 12v56M90 12v56" />
      </g>
    </svg>
  );
}

function ServiceThumb({
  item,
}: {
  item: (typeof home.services.items)[number];
}) {
  if (!item.image) {
    return <FluxMark />;
  }

  return (
    <Image
      src={item.image.src}
      alt=""
      fill
      sizes="(min-width: 1024px) 40vw, 4rem"
      className="object-cover object-left-top"
    />
  );
}

export function ServicesNav() {
  const { services } = home;
  const [active, setActive] = useState(0);
  const current = services.items[active] ?? services.items[0];

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[var(--home-stone)]"
    >
      <div className="container-site section-y">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <h2 id="services-heading" className="text-h1 text-balance">
              {services.title}
            </h2>
            <p className="max-w-md text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              {services.phrases.map((phrase) => (
                <span key={phrase} className="block">
                  {phrase}
                </span>
              ))}
            </p>

            <ul className="flex flex-col border-t border-foreground/15 lg:hidden">
              {services.items.map((item) => (
                <li key={item.href} className="border-b border-foreground/15">
                  <Link
                    href={item.href}
                    className="focus-ring flex items-center gap-4 py-3"
                  >
                    <span className="relative size-14 shrink-0 overflow-hidden bg-[var(--home-sand)]">
                      <ServiceThumb item={item} />
                    </span>
                    <span className="text-base font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="hidden flex-col border-t border-foreground/15 lg:flex">
              {services.items.map((item, index) => {
                const selected = index === active;
                return (
                  <li key={item.href} className="border-b border-foreground/15">
                    <Link
                      href={item.href}
                      className={cn(
                        "focus-ring block px-3 py-3.5 text-base transition-colors",
                        selected ? "bg-foreground/5 font-semibold" : "font-medium text-foreground/75",
                      )}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative hidden min-h-[28rem] overflow-hidden bg-[var(--home-sand)] lg:block">
            {current?.image ? (
              <Image
                src={current.image.src}
                alt={current.image.alt}
                fill
                sizes="50vw"
                className="object-cover object-left-top"
              />
            ) : (
              <div className="absolute inset-0">
                <FluxMark />
                <p className="absolute bottom-6 left-6 right-6 text-lg font-medium">
                  {current?.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
