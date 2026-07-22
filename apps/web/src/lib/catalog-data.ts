import registryIndex from "../../../../registry/index.json";
import taxonomySource from "../../../../registry/taxonomy.json";

export type CatalogItem = (typeof registryIndex.items)[number];
export type CatalogCategory = (typeof taxonomySource.categories)[number];
export type CatalogDomain = (typeof taxonomySource.domains)[number];

export const catalogItems = registryIndex.items;
export const catalogTaxonomy = taxonomySource;

export function itemHasDomain(item: CatalogItem, domain: string) {
  return (item.classification.domains as readonly string[]).includes(domain);
}

export function itemHasTag(item: CatalogItem, tag: string) {
  return (item.tags as readonly string[]).includes(tag);
}

export function getCatalogCapabilities(item: CatalogItem) {
  return [
    item.quality.responsive ? "Responsive" : null,
    item.quality.accessibility ? "Accessible" : null,
    item.quality.darkMode ? "Dark mode" : null,
    itemHasTag(item, "motion") ? "Motion" : null,
    item.runtime.ssrCompatible ? "SSR compatible" : null,
  ].filter((value): value is string => Boolean(value));
}

export function humanizeSlug(value: string) {
  return value
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}
