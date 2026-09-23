"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const imageFrame = {
  width: 1672,
  height: 941,
} as const;

const centralWell = {
  path: "M 1108 294 L 1107 746",
  node: { x: 1108, y: 518 },
  travelY: [308, 340, 730, 730] as const,
} as const;

const deviatedWell = {
  path: "M 852 264 L 854 404 C 872 470 904 528 896 546 L 692 548",
  node: { x: 852, y: 348 },
  travel: {
    x: [852, 854, 888, 860, 720] as const,
    y: [280, 410, 530, 546, 548] as const,
  },
} as const;

const reviewWell = {
  path: "M 1495 260 L 1486 568",
  node: { x: 1494, y: 424 },
} as const;

const reviewCycle = 12;
const reviewAt = 8;

const pulse = {
  duration: 1.5,
  repeatDelay: 3.4,
} as const;

type Point = { x: number; y: number };

type HeroSurveillanceVisualProps = {
  children: ReactNode;
};

export function HeroSurveillanceVisual({
  children,
}: HeroSurveillanceVisualProps) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <>
      <style>{`
        @keyframes hero-surveillance-in {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: none; }
        }
        .hero-surveillance-in {
          animation: hero-surveillance-in 0.78s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-surveillance-in {
            animation: none;
          }
        }
      `}</style>
      <div className="hero-surveillance-in relative min-w-0">
      <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[26rem]">
        <div className="absolute top-1/2 right-0 h-[138%] aspect-[1672/941] -translate-y-1/2 lg:top-0 lg:h-full lg:translate-y-0">
          {children}
          <SurveillanceOverlay reduceMotion={reduceMotion} />
          <ReviewLabel reduceMotion={reduceMotion} />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_26%)] lg:bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklch,var(--background)_72%,transparent)_14%,transparent_46%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_12%,transparent_88%,var(--background)_100%)] opacity-70"
        />

        <LiveResponseTrace reduceMotion={reduceMotion} />
      </div>
      </div>
    </>
  );
}

function SurveillanceOverlay({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${imageFrame.width} ${imageFrame.height}`}
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      fill="none"
    >
      <ReservoirGlow reduceMotion={reduceMotion} />

      <WellTrace
        d={deviatedWell.path}
        opacity={0.32}
        draw={1.7}
        delay={0.15}
        reduceMotion={reduceMotion}
        className="max-lg:hidden"
      />
      <WellTrace
        d={centralWell.path}
        opacity={0.62}
        draw={2}
        reduceMotion={reduceMotion}
      />
      <WellTrace
        d={reviewWell.path}
        opacity={0.28}
        draw={1.6}
        delay={0.2}
        reduceMotion={reduceMotion}
      />

      <TravelingSample
        cx={1108}
        cy={centralWell.travelY}
        duration={10.5}
        opacity={0.8}
        reduceMotion={reduceMotion}
        className="max-md:hidden"
      />
      <TravelingSample
        cx={1108}
        cy={centralWell.travelY}
        duration={10.5}
        delay={5.2}
        opacity={0.55}
        reduceMotion={reduceMotion}
        className="max-lg:hidden"
      />
      <TravelingSample
        cx={[...deviatedWell.travel.x]}
        cy={[...deviatedWell.travel.y]}
        duration={16}
        delay={2.4}
        opacity={0.45}
        reduceMotion={reduceMotion}
        className="max-xl:hidden"
      />

      <StatusNode
        point={centralWell.node}
        pulseDelay={0.6}
        reduceMotion={reduceMotion}
      />
      <StatusNode
        point={deviatedWell.node}
        pulseDelay={0}
        reduceMotion={reduceMotion}
        showPulse={false}
        className="max-lg:hidden"
      />
      <ReviewNode reduceMotion={reduceMotion} />
    </svg>
  );
}

function WellTrace({
  d,
  opacity,
  draw,
  delay = 0,
  reduceMotion,
  className,
}: {
  d: string;
  opacity: number;
  draw: number;
  delay?: number;
  reduceMotion: boolean;
  className?: string;
}) {
  return (
    <motion.path
      d={d}
      className={className}
      stroke="var(--ete-green)"
      strokeWidth="1.25"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={{
        duration: reduceMotion ? 0 : draw,
        delay: reduceMotion ? 0 : delay,
        ease: easeOut,
      }}
    />
  );
}

function TravelingSample({
  cx,
  cy,
  duration,
  delay = 0,
  opacity,
  reduceMotion,
  className,
}: {
  cx: number | number[];
  cy: number | readonly number[];
  duration: number;
  delay?: number;
  opacity: number;
  reduceMotion: boolean;
  className?: string;
}) {
  const samples = typeof cy === "number" ? [cy] : [...cy];
  const fade = samples.map((_, index) => {
    if (index === 0 || index === samples.length - 1) return 0;
    return opacity;
  });

  if (reduceMotion) return null;

  return (
    <motion.circle
      r="7"
      className={className}
      fill="var(--ete-green)"
      initial={{ opacity: 0 }}
      animate={{ cx, cy: samples, opacity: fade }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function StatusNode({
  point,
  pulseDelay,
  reduceMotion,
  showPulse = true,
  className,
}: {
  point: Point;
  pulseDelay: number;
  reduceMotion: boolean;
  showPulse?: boolean;
  className?: string;
}) {
  return (
    <g className={className}>
      {showPulse && !reduceMotion ? (
        <motion.circle
          cx={point.x}
          cy={point.y}
          fill="none"
          stroke="var(--ete-green)"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
          initial={{ r: 8, opacity: 0 }}
          animate={{ r: [8, 34], opacity: [0.4, 0] }}
          transition={{
            duration: pulse.duration,
            delay: pulseDelay,
            repeat: Infinity,
            repeatDelay: pulse.repeatDelay,
            ease: "easeOut",
          }}
        />
      ) : null}
      <circle cx={point.x} cy={point.y} r="5.5" fill="var(--ete-green)" />
    </g>
  );
}

function ReviewNode({ reduceMotion }: { reduceMotion: boolean }) {
  const { x, y } = reviewWell.node;
  const amberFade = {
    duration: reviewCycle,
    repeat: Infinity,
    ease: "linear" as const,
    times: [0, 0.64, 0.7, 0.84, 0.9, 1],
  };

  return (
    <g>
      <circle cx={x} cy={y} r="5.5" fill="var(--ete-green)" />
      {reduceMotion ? null : (
        <>
          <motion.circle
            cx={x}
            cy={y}
            r="5.5"
            fill="var(--warning)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={amberFade}
          />
          <motion.circle
            cx={x}
            cy={y}
            fill="none"
            stroke="var(--warning)"
            strokeWidth="1.15"
            vectorEffect="non-scaling-stroke"
            initial={{ r: 8, opacity: 0 }}
            animate={{ r: [8, 30], opacity: [0.55, 0] }}
            transition={{
              duration: 0.85,
              delay: reviewAt,
              repeat: Infinity,
              repeatDelay: reviewCycle - 0.85,
              ease: "easeOut",
            }}
          />
        </>
      )}
    </g>
  );
}

function ReviewLabel({ reduceMotion }: { reduceMotion: boolean }) {
  if (reduceMotion) return null;

  const left = `${(reviewWell.node.x / imageFrame.width) * 100}%`;
  const top = `${(reviewWell.node.y / imageFrame.height) * 100}%`;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute hidden md:block"
      style={{ left, top }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
      transition={{
        duration: reviewCycle,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.68, 0.73, 0.84, 0.89, 1],
      }}
    >
      <span className="absolute top-1/2 right-2 -translate-y-1/2 border border-warning/40 bg-background/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-warning">
        Review
      </span>
    </motion.div>
  );
}

function ReservoirGlow({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.ellipse
      cx="1280"
      cy="718"
      rx="250"
      ry="58"
      className="hidden xl:block"
      fill="var(--ete-green)"
      initial={false}
      animate={
        reduceMotion ? { opacity: 0.05 } : { opacity: [0.035, 0.09, 0.035] }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}

function LiveResponseTrace({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-5 right-4 hidden w-28 xl:block"
    >
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        Well response
      </p>
      <svg viewBox="0 0 112 36" className="mt-1 h-8 w-full" fill="none">
        <motion.path
          d="M2 27 L24 24 L40 25 L58 16 L78 18 L108 7"
          stroke="var(--ete-green)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            duration: reduceMotion ? 0 : 2,
            delay: reduceMotion ? 0 : 0.45,
            ease: easeOut,
          }}
        />
      </svg>
    </div>
  );
}
