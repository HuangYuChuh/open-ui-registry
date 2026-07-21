import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "registry.json");
const outputDirectory = path.join(root, "apps", "web", "public", "r");
const outputPath = path.join(outputDirectory, "registry.json");

const registry = JSON.parse(await readFile(sourcePath, "utf8"));

if (registry.items.length > 0) {
  throw new Error(
    "Component payload generation will be enabled with the first golden component.",
  );
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(outputPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");

console.log(`Registry output written to ${path.relative(root, outputPath)}.`);
