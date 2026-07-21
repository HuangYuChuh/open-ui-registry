import {
  FlightStatusCard,
  type FlightStatusCardProps,
} from "@open-ui-registry/registry/flight-status-card";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flight Status Card | Open UI Registry",
  description:
    "Install and preview a responsive, accessible flight status component distributed as editable React source.",
};

const installCommand =
  "pnpm dlx shadcn@latest add https://ui.kelin.center/r/flight-status-card.json";

const customRoute: FlightStatusCardProps = {
  departureCode: "PVG",
  arrivalCode: "HKG",
  departureCity: "Shanghai",
  arrivalCity: "Hong Kong",
  departureTime: "TUE, 6:50 AM",
  arrivalTime: "TUE, 9:35 AM",
  eta: "ETA 9:35 AM",
  timezone: "Hong Kong Time",
  nextEvent: "LANDING IN",
  nextEventTime: "1:12H",
  progress: 62,
  remainingTime: "1H 12M",
};

const apiRows = [
  ["departureCode", "string", "YYZ"],
  ["arrivalCode", "string", "HND"],
  ["departureCity", "string", "Toronto"],
  ["arrivalCity", "string", "Tokyo"],
  ["departureTime", "string", "MON, 6:14 PM"],
  ["arrivalTime", "string", "TUE, 7:14 AM"],
  ["eta", "string", "ETA 2:15 PM"],
  ["timezone", "string", "Tokyo Time"],
  ["nextEvent", "string", "DINNER IN"],
  ["nextEventTime", "string", "2:34H"],
  ["progress", "number", "45"],
  ["remainingTime", "string", "7H 01M"],
  ["style", "FlightStatusCardStyle", "none"],
  ["className", "string", "—"],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M4 12 12 4m0 0H5m7 0v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function FlightStatusCardPage() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            className="rounded-sm text-sm font-bold tracking-[-0.04em] outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            href="/"
          >
            OPEN UI REGISTRY
          </Link>
          <a
            className="flex min-h-11 items-center gap-2 rounded-md px-3 text-xs text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
            href="https://github.com/HuangYuChuh/open-ui-registry"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
          <div>
            <Link
              className="text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              href="/"
            >
              Components / 01
            </Link>
            <h1 className="mt-6 text-[clamp(3.3rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em] text-balance">
              Flight Status Card
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              A compact travel-status surface for itinerary products, airline
              dashboards, booking flows, and trip assistants. The installed
              source is responsive, token-driven, accessible, and editable.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 text-xs">
              {["Verified", "React 19", "TypeScript", "Tailwind 4", "Motion", "MIT"].map(
                (label) => (
                  <span
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-muted-foreground"
                    key={label}
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex min-h-[440px] items-center justify-center rounded-2xl border border-border bg-surface p-4 sm:p-8">
            <FlightStatusCard {...customRoute} />
          </div>
        </section>

        <section className="border-y border-border/70 bg-surface">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:py-20">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">Install</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.06em] sm:text-5xl">
                One command, then own the code.
              </h2>
            </div>
            <div className="self-end overflow-x-auto rounded-xl border border-border bg-background p-5 sm:p-6">
              <code className="whitespace-nowrap text-sm text-foreground">
                <span className="select-none text-accent">$</span> {installCommand}
              </code>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Usage</p>
            <pre className="mt-5 overflow-x-auto rounded-xl border border-border bg-surface p-5 text-sm leading-7 text-foreground">
              <code>{`import { FlightStatusCard } from "@/components/ui/flight-status-card";

export function TripOverview() {
  return (
    <FlightStatusCard
      departureCode="PVG"
      arrivalCode="HKG"
      progress={62}
      remainingTime="1H 12M"
    />
  );
}`}</code>
            </pre>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Product fit
            </p>
            <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {[
                ["Travel itinerary", "A glanceable status block inside a trip detail screen."],
                ["Airline dashboard", "A compact route and progress summary for operational views."],
                ["Booking follow-up", "A confirmation-page status card after purchase."],
                ["Trip assistant", "A visual answer surface for an AI travel companion."],
              ].map(([title, description]) => (
                <article className="bg-surface p-5" key={title}>
                  <h3 className="font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-surface">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              API reference
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead className="bg-background text-muted-foreground">
                  <tr>
                    <th className="px-5 py-4 font-normal">Property</th>
                    <th className="px-5 py-4 font-normal">Type</th>
                    <th className="px-5 py-4 font-normal">Default</th>
                  </tr>
                </thead>
                <tbody>
                  {apiRows.map(([property, type, defaultValue]) => (
                    <tr className="border-t border-border" key={property}>
                      <td className="px-5 py-4 text-accent">{property}</td>
                      <td className="px-5 py-4 text-muted-foreground">{type}</td>
                      <td className="px-5 py-4">{defaultValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <article>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Integration notes
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
              <li>
                Ships with component-scoped color tokens, so it stays readable even
                when the host project uses a different shadcn theme.
              </li>
              <li>
                Override <code className="text-foreground">--flight-card-accent</code>
                {" "}through <code className="text-foreground">className</code> or
                {" "}<code className="text-foreground">style</code> without editing its
                internals.
              </li>
              <li>Moves the ETA panel below the route on narrow screens.</li>
              <li>Exposes progress semantics and screen-reader route context.</li>
              <li>Follows the user&apos;s reduced-motion preference.</li>
            </ul>
          </article>
          <article>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Provenance
            </p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Adapted from Componentry&apos;s Flight Status Card by Harsh Jadhav,
              reviewed at commit <code className="text-foreground">0c90c9b9</code>.
              Distributed under the upstream MIT License with the notice installed
              beside the component source.
            </p>
            <a
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-sm font-bold outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent"
              href="https://componentry.dev/docs/components/flight-status-card"
              rel="noreferrer"
              target="_blank"
            >
              View upstream
              <ArrowIcon />
            </a>
          </article>
        </section>
      </main>
    </div>
  );
}
