"use client";

import { FlightStatusCard } from "@open-ui-registry/registry/flight-status-card";
import {
  catalogItems,
  catalogTaxonomy,
  getCatalogCapabilities,
  humanizeSlug,
  itemHasDomain,
  type CatalogItem,
} from "@/lib/catalog-data";
import Link from "next/link";
import { useEffect, useState } from "react";

const ALL_FILTER = "all";

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16.5 16.5 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M3 8h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ComponentPreview({ name }: { name: string }) {
  if (name === "flight-status-card") {
    return (
      <FlightStatusCard
        arrivalCity="Hong Kong"
        arrivalCode="HKG"
        arrivalTime="TUE, 9:35 AM"
        departureCity="Shanghai"
        departureCode="PVG"
        departureTime="TUE, 6:50 AM"
        eta="ETA 9:35 AM"
        nextEvent="LANDING IN"
        nextEventTime="1:12H"
        progress={62}
        remainingTime="1H 12M"
        timezone="Hong Kong Time"
      />
    );
  }

  return (
    <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
      Preview coming soon
    </div>
  );
}

function ComponentCard({ item }: { item: CatalogItem }) {
  const category = catalogTaxonomy.categories.find(
    (candidate) => candidate.id === item.classification.category,
  );
  const domains = item.classification.domains.map(
    (domain) =>
      catalogTaxonomy.domains.find((candidate) => candidate.id === domain)?.label ??
      humanizeSlug(domain),
  );
  const installCommand = `pnpm dlx shadcn@latest add https://ui.kelin.center/r/${item.name}.json`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-background transition-colors duration-200 hover:border-accent/70">
      <div className="flex min-h-[320px] items-center justify-center border-b border-border bg-surface p-4 sm:p-8">
        <ComponentPreview name={item.name} />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
          <span className="text-accent">{category?.label ?? item.classification.category}</span>
          <span aria-hidden="true">/</span>
          <span>{humanizeSlug(item.classification.subcategory)}</span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.05em]">
              <Link
                className="rounded-sm outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                href={`/components/${item.name}`}
              >
                {item.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-accent/50 bg-accent/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-accent">
            {item.status}
          </span>
        </div>

        <div className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
              Product context
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {domains.map((domain) => (
                <span
                  className="rounded-full border border-border px-2.5 py-1 text-[0.68rem] text-muted-foreground"
                  key={domain}
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
              Verified capabilities
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {getCatalogCapabilities(item).map((capability) => (
                <span
                  className="rounded-full border border-border bg-surface px-2.5 py-1 text-[0.68rem] text-muted-foreground"
                  key={capability}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-surface p-4">
          <code className="whitespace-nowrap text-xs text-foreground">
            <span className="select-none text-accent">$</span> {installCommand}
          </code>
        </div>

        <p className="mt-3 text-[0.68rem] text-muted-foreground">
          {item.runtime.framework} · {item.runtime.language} · {item.license.spdx} licensed
        </p>

        <Link
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-bold text-accent-foreground outline-none transition-colors duration-200 hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          href={`/components/${item.name}`}
        >
          View details
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function readFiltersFromUrl() {
  if (typeof window === "undefined") {
    return { category: ALL_FILTER, domain: ALL_FILTER, query: "" };
  }

  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");
  const requestedDomain = params.get("domain");
  const categoryExists = catalogTaxonomy.categories.some(
    (item) => item.id === requestedCategory,
  );
  const domainExists = catalogTaxonomy.domains.some(
    (item) => item.id === requestedDomain,
  );

  return {
    category: categoryExists ? requestedCategory! : ALL_FILTER,
    domain: domainExists ? requestedDomain! : ALL_FILTER,
    query: params.get("q") ?? "",
  };
}

export function CatalogExplorer() {
  const [category, setCategory] = useState(ALL_FILTER);
  const [domain, setDomain] = useState(ALL_FILTER);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const syncFromUrl = () => {
      const filters = readFiltersFromUrl();
      setCategory(filters.category);
      setDomain(filters.domain);
      setQuery(filters.query);
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const categoryCounts = Object.fromEntries(
    catalogTaxonomy.categories.map((item) => [
      item.id,
      catalogItems.filter(
        (component) => component.classification.category === item.id,
      ).length,
    ]),
  );

  const domainCounts = Object.fromEntries(
    catalogTaxonomy.domains.map((item) => [
      item.id,
      catalogItems.filter((component) => itemHasDomain(component, item.id)).length,
    ]),
  );

  const visibleDomains = catalogTaxonomy.domains.filter(
    (item) => (domainCounts[item.id] ?? 0) > 0,
  );

  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = catalogItems.filter((item) => {
    const matchesCategory =
      category === ALL_FILTER || item.classification.category === category;
    const matchesDomain = domain === ALL_FILTER || itemHasDomain(item, domain);
    const searchableText = [
      item.title,
      item.description,
      item.classification.category,
      item.classification.subcategory,
      ...item.classification.domains,
      ...item.classification.patterns,
      ...item.tags,
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

    return matchesCategory && matchesDomain && matchesQuery;
  });

  function updateUrl(
    next: { category: string; domain: string; query: string },
    historyMode: "push" | "replace",
  ) {
    const params = new URLSearchParams();
    if (next.category !== ALL_FILTER) params.set("category", next.category);
    if (next.domain !== ALL_FILTER) params.set("domain", next.domain);
    if (next.query.trim()) params.set("q", next.query.trim());
    const nextUrl = `${window.location.pathname}${params.size > 0 ? `?${params}` : ""}`;
    window.history[historyMode === "push" ? "pushState" : "replaceState"](
      null,
      "",
      nextUrl,
    );
  }

  function chooseCategory(nextCategory: string) {
    setCategory(nextCategory);
    updateUrl({ category: nextCategory, domain, query }, "push");
  }

  function chooseDomain(nextDomain: string) {
    setDomain(nextDomain);
    updateUrl({ category, domain: nextDomain, query }, "push");
  }

  function changeQuery(nextQuery: string) {
    setQuery(nextQuery);
    updateUrl({ category, domain, query: nextQuery }, "replace");
  }

  function clearFilters() {
    setCategory(ALL_FILTER);
    setDomain(ALL_FILTER);
    setQuery("");
    updateUrl({ category: ALL_FILTER, domain: ALL_FILTER, query: "" }, "push");
  }

  const selectedCategory = catalogTaxonomy.categories.find(
    (item) => item.id === category,
  );

  return (
    <section
      aria-labelledby="catalog-title"
      className="scroll-mt-16 border-y border-border/70 bg-surface"
      id="catalog"
    >
      <div className="mx-auto grid w-full max-w-[1440px] lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden border-r border-border/70 px-6 py-10 lg:block xl:px-8">
          <div className="sticky top-24">
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              Component category
            </p>
            <nav aria-label="Component categories" className="mt-4 space-y-1">
              <button
                aria-pressed={category === ALL_FILTER}
                className={`flex min-h-11 w-full cursor-pointer items-center justify-between rounded-md px-3 text-left text-sm outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
                  category === ALL_FILTER
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => chooseCategory(ALL_FILTER)}
                type="button"
              >
                <span>All components</span>
                <span className="text-xs">{catalogItems.length}</span>
              </button>
              {catalogTaxonomy.categories.map((item) => (
                <button
                  aria-pressed={category === item.id}
                  className={`flex min-h-11 w-full cursor-pointer items-center justify-between rounded-md px-3 text-left text-sm outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
                    category === item.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  key={item.id}
                  onClick={() => chooseCategory(item.id)}
                  type="button"
                >
                  <span>{item.label}</span>
                  <span className="text-xs">{categoryCounts[item.id] ?? 0}</span>
                </button>
              ))}
            </nav>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Why this split
              </p>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Categories describe interface function. Product domains and verified
                capabilities stay separate, so the catalog remains predictable as it grows.
              </p>
            </div>
          </div>
        </aside>

        <div className="min-w-0 px-5 py-10 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-5 border-b border-border pb-8 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-accent">
                Verified inventory
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.06em] sm:text-5xl" id="catalog-title">
                {selectedCategory?.label ?? "All components"}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                {selectedCategory?.description ??
                  "Search every verified component, then narrow by interface role and product context."}
              </p>
            </div>

            <div className="relative w-full xl:max-w-md">
              <label className="sr-only" htmlFor="component-search">
                Search components
              </label>
              <input
                className="min-h-12 w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 text-base text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                id="component-search"
                onChange={(event) => changeQuery(event.target.value)}
                placeholder="Search by name, pattern, or scenario"
                type="search"
                value={query}
              />
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <SearchIcon />
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
            <div>
              <label className="text-xs text-muted-foreground" htmlFor="mobile-category">
                Category
              </label>
              <select
                className="mt-2 min-h-12 w-full cursor-pointer rounded-lg border border-border bg-background px-3 text-base text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                id="mobile-category"
                onChange={(event) => chooseCategory(event.target.value)}
                value={category}
              >
                <option value={ALL_FILTER}>All components ({catalogItems.length})</option>
                {catalogTaxonomy.categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label} ({categoryCounts[item.id] ?? 0})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground" htmlFor="mobile-domain">
                Product context
              </label>
              <select
                className="mt-2 min-h-12 w-full cursor-pointer rounded-lg border border-border bg-background px-3 text-base text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                id="mobile-domain"
                onChange={(event) => chooseDomain(event.target.value)}
                value={domain}
              >
                <option value={ALL_FILTER}>All contexts</option>
                {visibleDomains.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label} ({domainCounts[item.id] ?? 0})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 hidden items-center gap-3 lg:flex">
            <span className="text-xs text-muted-foreground">Product context</span>
            <button
              aria-pressed={domain === ALL_FILTER}
              className={`min-h-10 cursor-pointer rounded-full border px-3 text-xs outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
                domain === ALL_FILTER
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted-foreground hover:border-accent/60 hover:text-foreground"
              }`}
              onClick={() => chooseDomain(ALL_FILTER)}
              type="button"
            >
              All contexts
            </button>
            {visibleDomains.map((item) => (
              <button
                aria-pressed={domain === item.id}
                className={`min-h-10 cursor-pointer rounded-full border px-3 text-xs outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
                  domain === item.id
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/60 hover:text-foreground"
                }`}
                key={item.id}
                onClick={() => chooseDomain(item.id)}
                type="button"
              >
                {item.label} {domainCounts[item.id] ?? 0}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {filteredItems.length} verified {filteredItems.length === 1 ? "component" : "components"}
            </p>
            {(category !== ALL_FILTER || domain !== ALL_FILTER || query) && (
              <button
                className="min-h-10 cursor-pointer rounded-md px-3 text-xs font-bold text-accent outline-none transition-colors duration-200 hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent"
                onClick={clearFilters}
                type="button"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredItems.length > 0 ? (
            <div className="mt-5 grid gap-6 2xl:grid-cols-2">
              {filteredItems.map((item) => (
                <ComponentCard item={item} key={item.name} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-border bg-background px-6 py-16 text-center sm:px-10">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">No match</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em]">
                No verified component fits these filters yet.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                Try another category or clear the search. Empty categories remain visible so
                the catalog structure stays stable while the collection grows.
              </p>
              <button
                className="mt-6 min-h-11 cursor-pointer rounded-md bg-accent px-4 text-sm font-bold text-accent-foreground outline-none transition-colors duration-200 hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                onClick={clearFilters}
                type="button"
              >
                View all components
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
