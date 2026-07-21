# Open UI Registry

> Working title. The project name can change before the first public release.

Open UI Registry is an open-source, source-code registry for carefully selected frontend components from across the web.

Its goal is not to bookmark components. Its goal is to make every accepted component installable, editable, traceable to its upstream source, and safe to use in a real frontend project.

## Project status

The public repository and framework foundation are ready. The product scope, licensing policy, Registry metadata, Next.js gallery, responsive foundation page, validation scripts, and CI workflow are in place.

Current verified component count: **0**. The first executable component will be selected by the project owner and implemented as the golden path.

Repository: [github.com/HuangYuChuh/open-ui-registry](https://github.com/HuangYuChuh/open-ui-registry)

Live foundation site: [ui.kelin.center](https://ui.kelin.center/)

Live Registry index: [ui.kelin.center/r/registry.json](https://ui.kelin.center/r/registry.json)

## Intended experience

The first release will expose a shadcn-compatible source registry. A component should eventually be installable with a command similar to:

```bash
pnpm dlx shadcn@latest add https://example.com/r/example-component.json
```

After installation, the application owns the source code:

```tsx
import { ExampleComponent } from "@/components/ui/example-component";

export function ProductScreen() {
  return <ExampleComponent />;
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
- [Deployment](docs/deployment.md)

## Framework

- Next.js 16 App Router for the public gallery and workbench
- React 19 and TypeScript 5 for component source
- Tailwind CSS 4 and CSS variables for styling and tokens
- pnpm workspaces for the web app, Registry, future CLI, and future MCP service
- shadcn-compatible distribution contract
- GitHub Actions for Registry validation, lint, type checking, and production build
- Static Docker deployment with candidate validation and rollback

## Local development

Requirements: Node.js 22 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the complete quality gate:

```bash
pnpm check
```

## Repository structure

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
