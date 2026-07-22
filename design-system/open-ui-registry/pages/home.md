# Home page override

The home page keeps the technical, high-contrast monospace direction from `MASTER.md`, but uses the operating system monospace font stack instead of downloading Space Mono.

Reason: the project homepage and Registry documentation must remain stable in offline development, restricted networks, and CI environments. Typography must not require a request to Google Fonts.

The page is a component catalog rather than a single-component marketing landing page:

- keep search and category navigation above the component inventory;
- use a persistent desktop category sidebar and compact mobile selectors;
- separate component category, product domain, and verified capability labels;
- represent filter state in the URL so catalog views can be shared;
- show useful no-results guidance instead of an empty grid;
- keep live preview and install command visible on every component card.
