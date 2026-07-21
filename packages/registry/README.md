# Registry package

This package owns the build and validation workflow for installable components.

Two related manifests are intentionally kept separate:

- `/registry.json` is the public shadcn-compatible distribution manifest.
- `/registry/index.json` and `/registry/schema` contain extended provenance, licensing, and quality metadata used by Open UI Registry governance.

Keeping these concerns separate allows standard shadcn clients to install components without losing the additional evidence required by this project.
