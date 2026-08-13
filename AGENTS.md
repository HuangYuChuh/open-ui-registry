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

## Language and localization

1. Simplified Chinese (`zh-CN`) is the default language for user-facing pages, navigation, component descriptions, examples, accessibility text, repository documentation, and contributor guidance.
2. New component metadata must provide a Chinese `title` and `description`. Taxonomy labels and capability labels shown to users must also be Chinese.
3. Keep code identifiers, package names, API property names, commands, URLs, SPDX identifiers, machine-readable enum values, and upstream license text in their canonical form.
4. Preserve upstream component names when required for attribution; add a Chinese display name instead of rewriting provenance.
5. Record localization of redistributed component defaults or accessibility text as a modification in provenance metadata and `THIRD_PARTY_NOTICES.md`.
6. Before describing a change as complete, check Chinese text at mobile and desktop widths for wrapping, truncation, overflow, and understandable screen-reader labels.
