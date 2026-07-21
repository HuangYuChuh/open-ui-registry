# Architecture

## Decision summary

Open UI Registry will distribute editable component source through a shadcn-compatible Registry. The gallery, CLI, and future MCP integration are clients of the same Registry metadata rather than separate sources of truth.

## Product flow

```text
External open-source component
  -> provenance and license review
  -> technical adaptation
  -> preview and quality verification
  -> Registry publication
  -> CLI or Agent installation
  -> application-owned source code
```

## Why source distribution

The project combines selected components from different upstream libraries. Consumers will frequently need to change styling, motion, accessibility, or product-specific behavior. Source distribution keeps those changes possible and prevents the application from depending on a single large runtime package.

The tradeoff is that automatic upgrades are harder. To preserve upgradeability, every Registry item records its upstream version or commit and whether it was modified.

## Version 1 system boundary

### Gallery and workbench

The web application provides discovery, documentation, live previews, responsive inspection, and install instructions. It is not the authoritative source of component metadata.

### Registry

The Registry contains component source, metadata, dependency declarations, provenance, license status, and quality status. It is the authoritative source.

### Installer

Version 1 should first use the existing shadcn Registry protocol. A custom CLI should be added only when the project needs workflow that the shadcn CLI cannot provide.

### Agent integration

The future MCP or Skill layer searches the Registry, explains component suitability, invokes installation, and runs project checks. Agent access does not bypass component verification or consumer-project validation.

## Canonical component contract

Version 1 components target:

- React and TypeScript;
- Tailwind CSS for utility styling;
- CSS variables for theme and design-token values;
- `className` for consumer overrides;
- named exports;
- explicit client boundaries when browser APIs or animation require them;
- explicit npm and Registry dependencies;
- no hidden global CSS or provider requirement.

Exceptions are allowed only when metadata makes the additional runtime cost visible.

## Component states

- `draft`: adaptation or evidence is incomplete; not offered as production-ready.
- `verified`: all required evidence and checks pass; installable from the public Registry.
- `deprecated`: retained for traceability but no longer recommended for new use.

## Quality gates

Required for every verified component:

1. Registry schema validation.
2. TypeScript validation.
3. Production build.
4. Working preview.
5. Dependency declaration check.
6. License and attribution review.
7. Mobile and desktop review.
8. Accessibility review appropriate to the interaction.

Interactive or visually sensitive components should additionally receive behavior tests and visual regression baselines.

## Planned repository topology

```text
apps/web
packages/registry
packages/cli
packages/mcp
registry/schema
docs
```

The exact build tooling remains an implementation decision for M1. The project should validate the Registry contract before adding monorepo complexity.
