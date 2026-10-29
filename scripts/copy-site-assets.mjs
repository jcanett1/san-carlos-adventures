import { cp, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = path.join(projectRoot, "images", "site-assets");
const outputDirectory = path.join(projectRoot, "dist", "public", "images", "site-assets");

await mkdir(path.dirname(outputDirectory), { recursive: true });
await cp(sourceDirectory, outputDirectory, { recursive: true, force: true });

console.log(`Copied local site images from ${sourceDirectory} to ${outputDirectory}.`);
