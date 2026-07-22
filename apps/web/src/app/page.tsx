import { CatalogExplorer } from "./_components/catalog-explorer";
import { SiteHeader } from "./_components/site-header";
import { catalogItems, catalogTaxonomy } from "@/lib/catalog-data";

const classificationLayers = [
  {
    index: "01",
    title: "Component category",
    description:
      "The stable navigation layer: what the component does in an interface, such as Data Display, Input, or Navigation.",
  },
  {
    index: "02",
    title: "Product context",
    description:
      "Where the component may be useful, such as Travel, Commerce, AI products, or Developer tools.",
  },
  {
    index: "03",
    title: "Verified capabilities",
    description:
      "What has actually been checked: responsive behavior, accessibility, dark mode, SSR compatibility, and motion.",
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      <main id="main-content">
        <section className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-8 sm:px-8 sm:py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] md:items-end lg:gap-10 lg:py-14">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="size-2 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]" />
              Source-code component catalog
            </div>
            <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.075em] text-balance">
              Find components by what they do.
            </h1>
          </div>

          <div className="border-l border-border pl-6 sm:pl-8">
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A curated Registry of worth-keeping open-source components. Search by interface
              role, filter by product context, and install editable source directly into your
              project.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.12em] text-muted-foreground sm:hidden">
              01 verified · 09 categories · editable source
            </p>
            <div className="mt-8 hidden grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border text-center sm:grid">
              <div className="bg-surface px-3 py-4">
                <p className="text-2xl font-bold tracking-[-0.05em]">
                  {String(catalogItems.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  Verified
                </p>
              </div>
              <div className="bg-surface px-3 py-4">
                <p className="text-2xl font-bold tracking-[-0.05em]">
                  {String(catalogTaxonomy.categories.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  Categories
                </p>
              </div>
              <div className="bg-surface px-3 py-4">
                <p className="text-2xl font-bold tracking-[-0.05em]">CODE</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  Editable source
                </p>
              </div>
            </div>
          </div>
        </section>

        <CatalogExplorer />

        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                Classification contract
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.06em] sm:text-5xl">
                One component, three ways to understand it.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {classificationLayers.map((layer) => (
                <article className="bg-surface p-6 sm:p-7" key={layer.index}>
                  <p className="text-xs text-accent">/{layer.index}</p>
                  <h3 className="mt-10 text-lg font-bold tracking-[-0.04em]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {layer.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Original platform code: MIT License.</p>
          <p>Third-party components retain their upstream licenses and provenance.</p>
        </div>
      </footer>
    </div>
  );
}
