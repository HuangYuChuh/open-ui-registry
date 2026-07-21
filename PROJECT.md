# Project Charter

## Working name

Open UI Registry

The name is provisional. Naming must not block validation of the core workflow.

## Problem

Useful frontend components are scattered across component libraries, animation libraries, demos, and individual repositories. A developer or product builder may like only a few components from each source and later forget where they came from.

A bookmark collection does not solve the real problem. The component still needs to be found again, understood, installed, adapted to the current design system, checked for licensing, and tested before it can ship.

## Product promise

Any component marked `verified` can be installed as source code into a supported React project and used without manually reconstructing its dependencies, provenance, or basic integration steps.

## Primary users

- Product builders who assemble frontend experiences from multiple design and motion sources.
- Frontend developers who want editable source rather than a restrictive package API.
- AI coding agents that need structured metadata to search, select, install, and validate components.
- Component authors who want their open-source work to remain attributed while becoming easier to adopt.

## Version 1 scope

1. A public gallery with searchable component metadata and live previews.
2. A shadcn-compatible source registry for React and TypeScript.
3. A strict component intake and license-review process.
4. A normalized component contract covering dependencies, styling, tokens, props, accessibility, and provenance.
5. Automated checks for TypeScript, build success, responsive behavior, and registry metadata.
6. Ten verified components covering both common product interactions and selected motion effects.

## Out of scope for version 1

- Supporting React, Vue, Svelte, and Web Components simultaneously.
- Mirroring entire third-party component libraries.
- Publishing code that has no clear redistribution license.
- Promising that a Registry or MCP entry alone proves product fit, accessibility, or performance.
- Automatically scraping and republishing source code without human review.

## Product principles

### Installable beats collectible

A component is not part of the product merely because it appears in the gallery. Only verified, installable source counts toward the core inventory.

### Curated beats comprehensive

The project selects components that solve useful product or interaction problems. It does not compete on the total number of components.

### Adapted beats copied

External components are normalized to the supported technical standard. Upstream provenance and modifications remain visible.

### Verification beats visual novelty

A beautiful demo is insufficient. Build behavior, responsive behavior, accessibility, dependency cost, license status, and integration quality all matter.

### Agent access is a delivery channel

CLI, MCP, and Skills make components easier to retrieve and install. They do not replace design judgment or quality validation.

## Milestones

### M0 — Foundation

- [x] Project charter
- [x] Architecture decision
- [x] Licensing policy
- [x] Registry item schema
- [x] Contribution workflow
- [x] Public repository
- [x] Next.js gallery foundation
- [x] CI quality gate

### M1 — Golden path

- One legally redistributable component
- Complete provenance record
- Adapted React and TypeScript source
- Workbench preview
- Automated quality checks
- Successful installation into a clean example project

### M2 — Useful first collection

- Ten verified components
- Search and category navigation
- Public registry endpoint
- Installation documentation

### M3 — Agent access

- Machine-readable search API
- MCP or Skill integration
- Agent can select, install, and run verification commands

## Version 1 success criteria

- A new user can discover and install a verified component without visiting the upstream website.
- The installed component builds in a clean supported project.
- Every redistributed file has an auditable source and license.
- Each component declares its runtime dependencies and design-token expectations.
- Removing the Registry service does not break already-installed components because applications own their installed source.

## Open decisions

- Final project name and package namespace
- Public GitHub organization or personal account
- Preview site domain
- The first ten components
- Whether the first installer uses only the shadcn CLI or also ships a project-specific CLI
