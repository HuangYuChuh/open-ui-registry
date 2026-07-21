# Agent Instructions

## Project purpose

Build an open-source source-code Registry that makes selected frontend components directly installable, editable, attributable, and verifiable.

## Non-negotiable rules

1. Do not add or redistribute third-party source without a verified license that permits redistribution.
2. A public repository, downloadable ZIP, or visible source file is not evidence of an open-source license.
3. Preserve upstream author, source URL, version or commit, license, and modification history.
4. Do not describe a component as `verified` until its build, preview, metadata, and required quality checks pass.
5. Version 1 targets React and TypeScript. Other frameworks require an explicit adaptation rather than raw inclusion.
6. Prefer source installation through a shadcn-compatible Registry. Do not introduce a shared runtime package without an architecture decision.
7. Keep component-specific dependencies explicit. Do not silently add global dependencies.
8. Use design tokens or CSS variables instead of hard-coded product branding.
9. Do not publish, create a remote repository, or deploy without explicit user authorization.

## Required component evidence

- Provenance metadata
- License review result
- Installable source
- Usage example
- Working preview
- Declared dependencies
- TypeScript and build verification
- Responsive and accessibility notes

## Communication

Explain technical changes in terms of the product workflow they enable, while retaining exact file paths, commands, schemas, and validation results needed for implementation decisions.
