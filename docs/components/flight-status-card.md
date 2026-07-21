# Flight Status Card

Flight Status Card is a responsive travel-status component for itinerary screens, airline dashboards, booking products, and trip assistants. It presents the route, schedule, ETA context, next event, progress, and remaining time in one compact card.

## Install

```bash
pnpm dlx shadcn@latest add https://ui.kelin.center/r/flight-status-card.json
```

The installer adds editable source to `components/ui/flight-status-card.tsx`, installs `motion`, `clsx`, and `tailwind-merge`, and places the upstream MIT notice beside the component.

## Usage

```tsx
import { FlightStatusCard } from "@/components/ui/flight-status-card";

export function TripOverview() {
  return (
    <FlightStatusCard
      arrivalCity="Hong Kong"
      arrivalCode="HKG"
      arrivalTime="TUE, 9:35 AM"
      departureCity="Shanghai"
      departureCode="PVG"
      departureTime="TUE, 6:50 AM"
      eta="ETA 9:35 AM"
      nextEvent="LANDING IN"
      nextEventTime="1:12H"
      progress={62}
      remainingTime="1H 12M"
      timezone="Hong Kong Time"
    />
  );
}
```

## Public API

| Property | Type | Default |
| --- | --- | --- |
| `departureCode` | `string` | `YYZ` |
| `arrivalCode` | `string` | `HND` |
| `departureCity` | `string` | `Toronto` |
| `arrivalCity` | `string` | `Tokyo` |
| `departureTime` | `string` | `MON, 6:14 PM` |
| `arrivalTime` | `string` | `TUE, 7:14 AM` |
| `eta` | `string` | `ETA 2:15 PM` |
| `timezone` | `string` | `Tokyo Time` |
| `nextEvent` | `string` | `DINNER IN` |
| `nextEventTime` | `string` | `2:34H` |
| `progress` | `number` | `45` |
| `remainingTime` | `string` | `7H 01M` |
| `className` | `string` | none |
| `style` | `FlightStatusCardStyle` | none |

Airport codes are normalized to uppercase and limited to three characters. Progress values are clamped to the inclusive `0-100` range.

## Theme contract

The component includes a scoped dark flight-display palette, so it remains legible even
when the consuming project uses different or incomplete shadcn theme variables. Override
the component tokens through `className` or the typed `style` prop without changing its
internals:

```tsx
<FlightStatusCard
  className="[--flight-card-accent:#38bdf8]"
  style={{ "--flight-card-background": "#082f49" }}
/>
```

Available tokens:

- `--flight-card-accent` and `--flight-card-accent-foreground`
- `--flight-card-background` and `--flight-card-foreground`
- `--flight-card-muted` and `--flight-card-muted-foreground`
- `--flight-card-border`

## Responsive behavior

- At narrow widths, the ETA panel moves below the route so airport codes remain readable.
- At `sm` and above, route and ETA content share one row.
- The component is width-fluid with a maximum width of `520px`.
- City names truncate instead of forcing horizontal overflow.

## Accessibility

- The card is an `article` with a screen-reader route heading.
- The progress track uses `role="progressbar"` and exposes its numeric value.
- Dot-matrix SVGs are decorative; their airport-code text is separately announced.
- Motion follows `prefers-reduced-motion` through Motion's `useReducedMotion` hook.
- The component contains no fake interactive controls.

## Provenance and license

- Original author: Harsh Jadhav
- Original demo: <https://componentry.dev/docs/components/flight-status-card>
- Source repository: <https://github.com/harshjdhv/componentry>
- Reviewed commit: `0c90c9b9e624c483d434cdb85df084fd399f24c3`
- License: MIT
- Retrieved: 2026-07-21

The adapted component is redistributed under the upstream MIT terms. See `packages/registry/licenses/flight-status-card.MIT` and `THIRD_PARTY_NOTICES.md`.
