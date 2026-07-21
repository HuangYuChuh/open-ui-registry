import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "registry.json");
const outputDirectory = path.join(root, "apps", "web", "public", "r");
const outputPath = path.join(outputDirectory, "registry.json");

const registry = JSON.parse(await readFile(sourcePath, "utf8"));

const registryItemSchema = "https://ui.shadcn.com/schema/registry-item.json";

const readSourceFile = async (relativePath) => {
  const absolutePath = path.resolve(root, relativePath);

  if (!absolutePath.startsWith(`${root}${path.sep}`)) {
    throw new Error(`Registry source escapes repository root: ${relativePath}`);
  }

  return readFile(absolutePath, "utf8");
};

await mkdir(outputDirectory, { recursive: true });

const publicItems = [];

for (const item of registry.items) {
  const files = await Promise.all(
    item.files.map(async (file) => ({
      path: file.target ?? file.path,
      type: file.type,
      ...(file.target ? { target: file.target } : {}),
      content: await readSourceFile(file.path),
    })),
  );

  const publicItem = {
    $schema: registryItemSchema,
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies ?? [],
    devDependencies: item.devDependencies ?? [],
    registryDependencies: item.registryDependencies ?? [],
    files,
    tailwind: item.tailwind ?? {},
    cssVars: item.cssVars ?? {},
    meta: item.meta ?? {},
  };

  publicItems.push({
    ...item,
    files: item.files.map((file) => ({
      path: file.target ?? file.path,
      type: file.type,
    })),
  });

  await writeFile(
    path.join(outputDirectory, `${item.name}.json`),
    `${JSON.stringify(publicItem, null, 2)}\n`,
    "utf8",
  );
}

await writeFile(
  outputPath,
  `${JSON.stringify({ ...registry, items: publicItems }, null, 2)}\n`,
  "utf8",
);

console.log(
  `Registry output written to ${path.relative(root, outputPath)} (${publicItems.length} components).`,
);
