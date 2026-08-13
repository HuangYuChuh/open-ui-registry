"use client";

import { clsx, type ClassValue } from "clsx";
import { motion, useReducedMotion } from "motion/react";
import { type CSSProperties, useId } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EMPTY_MATRIX = [
  "00000",
  "00000",
  "00000",
  "00000",
  "00000",
  "00000",
  "00000",
];

const DOT_MATRIX: Record<string, string[]> = {
  A: ["00100", "01010", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  G: ["01110", "10001", "10000", "10111", "10001", "10001", "01110"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  J: ["00111", "00010", "00010", "00010", "10010", "10010", "01100"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10001", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  Q: ["01110", "10001", "10001", "10001", "10101", "10010", "01101"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  V: ["10001", "10001", "10001", "10001", "01010", "01010", "00100"],
  W: ["10001", "10001", "10001", "10101", "10101", "11011", "10001"],
  X: ["10001", "01010", "00100", "00100", "00100", "01010", "10001"],
  Y: ["10001", "01010", "00100", "00100", "00100", "00100", "00100"],
  Z: ["11111", "00010", "00100", "01000", "10000", "10000", "11111"],
};

export interface DotMatrixCharProps {
  char: string;
  dotSize?: number;
  gap?: number;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
  delay?: number;
  reducedMotion?: boolean;
}

export function DotMatrixChar({
  char,
  dotSize = 4,
  gap = 2,
  activeColor = "var(--flight-card-accent)",
  inactiveColor =
    "color-mix(in srgb, var(--flight-card-accent) 14%, transparent)",
  className,
  delay = 0,
  reducedMotion = false,
}: DotMatrixCharProps) {
  const matrix = DOT_MATRIX[char.toUpperCase()] ?? EMPTY_MATRIX;
  const width = 5 * dotSize + 4 * gap;
  const height = 7 * dotSize + 6 * gap;

  return (
    <motion.svg
      aria-hidden="true"
      className={className}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      {matrix.map((row, rowIndex) =>
        [...row].map((cell, columnIndex) => (
          <motion.rect
            animate={{ opacity: 1 }}
            fill={cell === "1" ? activeColor : inactiveColor}
            height={dotSize}
            initial={reducedMotion ? false : { opacity: 0 }}
            key={`${rowIndex}-${columnIndex}`}
            rx={dotSize / 2}
            ry={dotSize / 2}
            style={
              cell === "1"
                ? {
                    filter:
                      "drop-shadow(0 0 3px color-mix(in srgb, var(--flight-card-accent) 55%, transparent))",
                  }
                : undefined
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    delay: delay + columnIndex * 0.035 + rowIndex * 0.035,
                    duration: 0.18,
                  }
            }
            width={dotSize}
            x={columnIndex * (dotSize + gap)}
            y={rowIndex * (dotSize + gap)}
          />
        )),
      )}
    </motion.svg>
  );
}

export interface DotMatrixTextProps {
  text: string;
  dotSize?: number;
  gap?: number;
  characterGap?: number;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
  reducedMotion?: boolean;
}

export function DotMatrixText({
  text,
  dotSize = 4,
  gap = 2,
  characterGap = 5,
  activeColor,
  inactiveColor,
  className,
  reducedMotion = false,
}: DotMatrixTextProps) {
  return (
    <span aria-label={text} className={cn("inline-flex items-center", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex" style={{ gap: characterGap }}>
        {[...text].map((char, index) => (
          <DotMatrixChar
            activeColor={activeColor}
            char={char}
            delay={index * 0.08}
            dotSize={dotSize}
            gap={gap}
            inactiveColor={inactiveColor}
            key={`${char}-${index}`}
            reducedMotion={reducedMotion}
          />
        ))}
      </span>
    </span>
  );
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    </svg>
  );
}

function RouteIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function HalftonePattern({ id, reducedMotion }: { id: string; reducedMotion: boolean }) {
  const patternId = `${id}-pattern`;
  const fadeId = `${id}-fade`;
  const maskId = `${id}-mask`;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full opacity-60"
    >
      <defs>
        <pattern height="8" id={patternId} patternUnits="userSpaceOnUse" width="8">
          <motion.circle
            animate={reducedMotion ? undefined : { opacity: [0.3, 0.65, 0.3] }}
            cx="2"
            cy="2"
            fill="color-mix(in srgb, var(--flight-card-accent) 18%, transparent)"
            r="1.2"
            transition={
              reducedMotion
                ? undefined
                : { duration: 4, ease: "easeInOut", repeat: Infinity }
            }
          />
        </pattern>
        <linearGradient id={fadeId} x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.85" />
          <stop offset="55%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={maskId}>
          <rect fill={`url(#${fadeId})`} height="100%" width="100%" />
        </mask>
      </defs>
      <rect
        fill={`url(#${patternId})`}
        height="100%"
        mask={`url(#${maskId})`}
        width="100%"
      />
    </svg>
  );
}

export interface FlightStatusCardProps {
  departureCode?: string;
  arrivalCode?: string;
  departureCity?: string;
  arrivalCity?: string;
  departureTime?: string;
  arrivalTime?: string;
  eta?: string;
  timezone?: string;
  nextEvent?: string;
  nextEventTime?: string;
  progress?: number;
  remainingTime?: string;
  className?: string;
  style?: FlightStatusCardStyle;
}

export interface FlightStatusCardStyle extends CSSProperties {
  "--flight-card-accent"?: string;
  "--flight-card-accent-foreground"?: string;
  "--flight-card-background"?: string;
  "--flight-card-border"?: string;
  "--flight-card-foreground"?: string;
  "--flight-card-muted"?: string;
  "--flight-card-muted-foreground"?: string;
}

function normalizeAirportCode(code: string) {
  return code.trim().toUpperCase().slice(0, 3);
}

export function FlightStatusCard({
  departureCode = "YYZ",
  arrivalCode = "HND",
  departureCity = "多伦多",
  arrivalCity = "东京",
  departureTime = "周一 18:14",
  arrivalTime = "周二 07:14",
  eta = "预计 14:15 到达",
  timezone = "东京时间",
  nextEvent = "距离用餐",
  nextEventTime = "2:34H",
  progress = 45,
  remainingTime = "7H 01M",
  className,
  style,
}: FlightStatusCardProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const patternId = useId().replaceAll(":", "");
  const routeId = useId().replaceAll(":", "");
  const safeProgress = Math.min(100, Math.max(0, progress));
  const from = normalizeAirportCode(departureCode);
  const to = normalizeAirportCode(arrivalCode);

  return (
    <motion.article
      animate={{ opacity: 1, y: 0 }}
      aria-labelledby={routeId}
      className={cn(
        "relative w-full max-w-[520px] overflow-hidden rounded-[28px] border p-4",
        "border-[var(--flight-card-border)] text-[var(--flight-card-foreground)]",
        "[--flight-card-accent-foreground:#07130b] [--flight-card-accent:#4ade80]",
        "[--flight-card-background:#151e31] [--flight-card-border:#3f4b61]",
        "[--flight-card-foreground:#f8fafc] [--flight-card-muted-foreground:#a7b0c0] [--flight-card-muted:#202a3d]",
        "shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] sm:p-6",
        className,
      )}
      data-slot="flight-status-card"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      style={{
        background:
          "linear-gradient(145deg, color-mix(in oklab, var(--flight-card-background) 92%, white 8%), var(--flight-card-background) 58%, color-mix(in oklab, var(--flight-card-background) 88%, black 12%))",
        ...style,
      }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="sr-only" id={routeId}>
        Flight status from {from} to {to}
      </h3>
      <HalftonePattern id={patternId} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-2 sm:gap-4">
          <div className="min-w-0">
            <DotMatrixText reducedMotion={reducedMotion} text={from} />
            <p className="mt-2 truncate text-sm font-medium text-[var(--flight-card-muted-foreground)]">
              {departureCity}
            </p>
            <p className="mt-0.5 text-[0.68rem] uppercase tracking-wide text-[color-mix(in_srgb,var(--flight-card-muted-foreground)_72%,transparent)]">
              {departureTime}
            </p>
          </div>

          <RouteIcon className="mt-1 size-6 text-[var(--flight-card-accent)]" />

          <div className="min-w-0 text-right">
            <DotMatrixText
              className="justify-end"
              reducedMotion={reducedMotion}
              text={to}
            />
            <p className="mt-2 truncate text-sm font-medium text-[var(--flight-card-muted-foreground)]">
              {arrivalCity}
            </p>
            <p className="mt-0.5 text-[0.68rem] uppercase tracking-wide text-[color-mix(in_srgb,var(--flight-card-muted-foreground)_72%,transparent)]">
              {arrivalTime}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--flight-card-border)] bg-[var(--flight-card-muted)] p-3 sm:min-w-36">
          <p className="text-sm font-semibold text-[var(--flight-card-foreground)]">{eta}</p>
          <p className="mt-1 text-xs text-[var(--flight-card-muted-foreground)]">
            {timezone}
          </p>
          <p className="mt-1 text-xs font-bold tracking-wide text-[var(--flight-card-accent)]">
            {nextEvent} {nextEventTime}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-5">
        <div
          aria-label={`航班进度：${safeProgress}%`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={safeProgress}
          className="relative h-12 overflow-hidden rounded-full border border-[var(--flight-card-border)] bg-[var(--flight-card-muted)]"
          role="progressbar"
        >
          <motion.div
            animate={{ width: `${safeProgress}%` }}
            className="absolute inset-y-0 left-0 flex items-center justify-end rounded-full pr-2"
            initial={reducedMotion ? false : { width: "0%" }}
            style={{
              background:
                "linear-gradient(90deg, color-mix(in srgb, var(--flight-card-accent) 68%, black), var(--flight-card-accent))",
              boxShadow:
                "0 0 24px color-mix(in srgb, var(--flight-card-accent) 45%, transparent), inset 0 2px 4px rgba(255,255,255,0.22)",
            }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { delay: 0.25, duration: 1.1, ease: "circOut" }
            }
          >
            {safeProgress > 8 ? (
              <motion.span
                animate={reducedMotion ? undefined : { y: [0, -2, 0] }}
                className="flex size-8 items-center justify-center rounded-full bg-white/20"
                transition={
                  reducedMotion
                    ? undefined
                    : { duration: 2, ease: "easeInOut", repeat: Infinity }
                }
              >
                <PlaneIcon className="size-5 rotate-45 text-[var(--flight-card-accent-foreground)]" />
              </motion.span>
            ) : null}
          </motion.div>
        </div>
        <p
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--flight-card-border)] px-2.5 py-1 font-mono text-sm font-medium text-[var(--flight-card-muted-foreground)]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--flight-card-background) 90%, transparent)",
          }}
        >
          {remainingTime}
        </p>
      </div>
    </motion.article>
  );
}

export { FlightStatusCard as FlightStatusCardAdaptive };
