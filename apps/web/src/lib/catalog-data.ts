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
    item.quality.responsive ? "响应式" : null,
    item.quality.accessibility ? "无障碍" : null,
    item.quality.darkMode ? "深色模式" : null,
    itemHasTag(item, "motion") ? "动效" : null,
    item.runtime.ssrCompatible ? "兼容 SSR" : null,
  ].filter((value): value is string => Boolean(value));
}

export function humanizeSlug(value: string) {
  const localizedLabels: Record<string, string> = {
    "status-and-progress": "状态与进度",
  };

  if (localizedLabels[value]) return localizedLabels[value];

  return value
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

export function localizeStatus(status: string) {
  return status === "verified" ? "已验证" : status;
}
