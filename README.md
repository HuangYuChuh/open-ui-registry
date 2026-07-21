# Open UI Registry

> Working title. The project name can change before the first public release.

Open UI Registry is an open-source, source-code registry for carefully selected frontend components from across the web.

Its goal is not to bookmark components. Its goal is to make every accepted component installable, editable, traceable to its upstream source, and safe to use in a real frontend project.

## Project status

The project is in its foundation stage. The product scope, architecture, licensing policy, contribution path, and registry metadata schema are defined. The first executable component has not been published yet.

## Intended experience

The first release will expose a shadcn-compatible source registry. A component should eventually be installable with a command similar to:

```bash
pnpm dlx shadcn@latest add https://example.com/r/border-trail.json
```

After installation, the application owns the source code:

```tsx
import { BorderTrail } from "@/components/ui/border-trail";

export function SubmitButton() {
  return <BorderTrail>Generating</BorderTrail>;
}
```

The URL above is illustrative and does not work yet.

## Version 1 technical standard

- React
- TypeScript
- Tailwind CSS
- CSS variables for design tokens
- Motion as the default animation dependency when animation is needed
- Source-code installation rather than a closed runtime package

Components using other frameworks or incompatible styling systems must be adapted before they enter the verified registry.

## What makes a component publishable

Every verified component must:

- compile and build successfully;
- include a working preview and usage example;
- declare all dependencies;
- support external `className` customization;
- avoid hard-coded product colors and typography;
- work on mobile and desktop;
- document accessibility behavior;
- record its original author, source, version or commit, modifications, and license;
- pass the licensing policy in [docs/licensing-policy.md](docs/licensing-policy.md).

## Open-source and third-party code

The original code written for this repository is licensed under MIT unless a file says otherwise.

Third-party components do **not** automatically become MIT-licensed. Each component retains its upstream license and attribution. A public source repository or downloadable component is not sufficient proof that redistribution is permitted.

See:

- [Project charter](PROJECT.md)
- [Architecture](docs/architecture.md)
- [Licensing policy](docs/licensing-policy.md)
- [Contributing](CONTRIBUTING.md)
- [Third-party notices](THIRD_PARTY_NOTICES.md)

## Planned repository structure

```text
apps/
  web/                     # Gallery and component workbench
packages/
  registry/                # Installable component source and metadata
  cli/                     # Human-facing installation command
  mcp/                     # Agent-facing search and installation tools
registry/
  schema/                  # Registry metadata contract
docs/                      # Architecture, policies and decisions
```

## Current milestone

Build one “golden path” component from source review through license verification, adaptation, preview, automated checks, registry publication, and installation into a clean React project.
