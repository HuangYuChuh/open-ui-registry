const principles = [
  {
    index: "01",
    title: "Installable source",
    description:
      "Every verified component enters the consumer project as editable React and TypeScript source.",
  },
  {
    index: "02",
    title: "Traceable provenance",
    description:
      "Author, upstream URL, version, license, and local modifications travel with every component.",
  },
  {
    index: "03",
    title: "Verified integration",
    description:
      "A visual demo is not enough. Components must build, respond, and pass the required quality gates.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 12 12 4m0 0H5m7 0v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            className="rounded-sm text-sm font-bold tracking-[-0.04em] outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            href="#top"
          >
            OPEN UI REGISTRY
          </a>
          <a
            className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md px-3 text-xs text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
            href="https://github.com/HuangYuChuh/open-ui-registry"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100dvh-4rem)] w-full max-w-7xl content-between px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]" />
            Foundation ready · awaiting first component
          </div>

          <div className="py-20 sm:py-28 lg:py-36">
            <p className="mb-6 text-xs uppercase tracking-[0.16em] text-accent">
              Source-code component registry
            </p>
            <h1 className="max-w-6xl text-[clamp(3.2rem,10vw,9rem)] font-bold leading-[0.86] tracking-[-0.08em] text-balance">
              Components you can actually ship.
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A curated open-source registry that turns scattered frontend
              components into installable, attributable, and verified product
              code.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {principles.map((principle) => (
              <article
                className="min-h-56 bg-surface p-6 transition-colors duration-200 hover:bg-muted sm:p-8"
                key={principle.index}
              >
                <p className="text-xs text-accent">/{principle.index}</p>
                <h2 className="mt-12 text-lg font-bold tracking-[-0.04em]">
                  {principle.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="distribution-title"
          className="border-y border-border/70 bg-surface"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                Distribution contract
              </p>
              <h2
                className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.06em] sm:text-5xl"
                id="distribution-title"
              >
                Own the code after install.
              </h2>
            </div>

            <div className="self-end">
              <div className="overflow-x-auto rounded-xl border border-border bg-background p-5 sm:p-6">
                <code className="whitespace-nowrap text-sm text-foreground">
                  <span className="select-none text-accent">$</span>{" "}
                  pnpm dlx shadcn@latest add &lt;component-url&gt;
                </code>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
                The Registry will use the standard shadcn distribution protocol.
                A custom CLI or MCP layer will only add search, selection, and
                verification workflows—not create a second inventory.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Current inventory
              </p>
              <p className="mt-4 text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-[-0.08em]">
                00
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                verified components — deliberately honest at foundation stage.
              </p>
            </div>
            <a
              className="flex min-h-12 w-fit cursor-pointer items-center gap-3 rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground outline-none transition-colors hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              href="https://github.com/HuangYuChuh/open-ui-registry/issues/new?template=component-proposal.yml"
              rel="noreferrer"
              target="_blank"
            >
              Propose a component
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 pb-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Original platform code: MIT License.</p>
        <p>Third-party components retain their upstream licenses.</p>
      </footer>
    </div>
  );
}
