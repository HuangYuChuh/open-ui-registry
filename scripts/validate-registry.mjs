import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const readJson = async (relativePath) =>
  JSON.parse(await readFile(path.join(root, relativePath), "utf8"));

const [index, distribution, taxonomy] = await Promise.all([
  readJson("registry/index.json"),
  readJson("registry.json"),
  readJson("registry/taxonomy.json"),
]);

const errors = [];

if (index.schemaVersion !== "1.1.0") {
  errors.push("registry/index.json must use schemaVersion 1.1.0");
}

if (!Array.isArray(index.items) || !Array.isArray(distribution.items)) {
  errors.push("Both Registry manifests must contain an items array");
}

const governanceNames = new Set();
const categoryIds = new Set(
  (taxonomy.categories ?? []).map((category) => category.id),
);
const domainIds = new Set((taxonomy.domains ?? []).map((domain) => domain.id));

if (categoryIds.size !== (taxonomy.categories ?? []).length) {
  errors.push("registry/taxonomy.json contains duplicate category ids");
}

if (domainIds.size !== (taxonomy.domains ?? []).length) {
  errors.push("registry/taxonomy.json contains duplicate domain ids");
}

for (const item of index.items ?? []) {
  const requiredFields = [
    "name",
    "title",
    "description",
    "status",
    "classification",
    "runtime",
    "files",
    "dependencies",
    "provenance",
    "license",
    "quality",
  ];

  for (const field of requiredFields) {
    if (!(field in item)) {
      errors.push(`${item.name ?? "unknown item"}: missing ${field}`);
    }
  }

  if (item.name) {
    if (governanceNames.has(item.name)) {
      errors.push(`Duplicate governance item: ${item.name}`);
    }
    governanceNames.add(item.name);
  }

  if (!categoryIds.has(item.classification?.category)) {
    errors.push(
      `${item.name}: unknown category ${item.classification?.category ?? "missing"}`,
    );
  }

  for (const domain of item.classification?.domains ?? []) {
    if (!domainIds.has(domain)) {
      errors.push(`${item.name}: unknown domain ${domain}`);
    }
  }

  if (item.status === "verified") {
    if (item.license?.redistributionReviewed !== true) {
      errors.push(`${item.name}: verified item lacks license review`);
    }

    const requiredChecks = [
      "typecheck",
      "build",
      "preview",
      "responsive",
      "accessibility",
      "darkMode",
    ];

    for (const check of requiredChecks) {
      if (item.quality?.[check] !== true) {
        errors.push(`${item.name}: verified item failed ${check}`);
      }
    }
  }
}

const distributionNames = new Set(
  (distribution.items ?? []).map((item) => item.name),
);

for (const name of distributionNames) {
  if (!governanceNames.has(name)) {
    errors.push(`${name}: missing governance metadata`);
  }
}

for (const name of governanceNames) {
  if (!distributionNames.has(name)) {
    errors.push(`${name}: missing shadcn distribution entry`);
  }
}

if (errors.length > 0) {
  console.error("Registry validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Registry validation passed (${distributionNames.size} installable components).`,
  );
}
