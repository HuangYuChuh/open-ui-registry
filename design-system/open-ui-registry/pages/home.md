# Home page override

The home page keeps the technical, high-contrast monospace direction from `MASTER.md`, but uses the operating system monospace font stack instead of downloading Space Mono.

Reason: the project homepage and Registry documentation must remain stable in offline development, restricted networks, and CI environments. Typography must not require a request to Google Fonts.
