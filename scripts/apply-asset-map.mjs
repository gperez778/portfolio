/**
 * apply-asset-map.mjs
 *
 * Reads scripts/asset-map.json (produced by scrape-assets.mjs) and replaces
 * every framerusercontent.com URL in your source files with the local /assets/
 * path. Also patches next.config.ts to remove the remote image pattern.
 *
 * Usage:
 *   node scripts/apply-asset-map.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MAP_PATH = join(__dirname, "asset-map.json");

const SOURCE_EXTENSIONS = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".json",
]);

const IGNORE_DIRS = new Set([
  "node_modules", ".next", ".git", "public", "scripts",
]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (IGNORE_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (SOURCE_EXTENSIONS.has(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

const map = JSON.parse(readFileSync(MAP_PATH, "utf8"));
const entries = Object.entries(map);

if (entries.length === 0) {
  console.log("asset-map.json is empty — nothing to replace.");
  process.exit(0);
}

const files = walk(ROOT);
let totalReplacements = 0;

for (const file of files) {
  let src = readFileSync(file, "utf8");
  let changed = false;

  for (const [original, local] of entries) {
    if (src.includes(original)) {
      src = src.replaceAll(original, local);
      changed = true;
      totalReplacements++;
    }
  }

  if (changed) {
    writeFileSync(file, src);
    console.log(`  Updated: ${file.replace(ROOT + "/", "")}`);
  }
}

// Patch next.config.ts — remove framerusercontent remotePattern if all assets are local
const configPath = join(ROOT, "next.config.ts");
let config = readFileSync(configPath, "utf8");
if (config.includes("framerusercontent.com")) {
  config = config.replace(
    /\s*\{\s*\n?\s*protocol:\s*["']https["'],\s*\n?\s*hostname:\s*["']framerusercontent\.com["'],\s*\n?\s*pathname:\s*["'][^"']*["'],?\s*\n?\s*\},?/g,
    ""
  );
  // Clean up empty remotePatterns array if needed
  config = config.replace(/remotePatterns:\s*\[\s*\],?\s*\n/g, "");
  writeFileSync(configPath, config);
  console.log("  Patched: next.config.ts (removed framerusercontent remotePattern)");
}

console.log(`\n✓ ${totalReplacements} replacements across ${files.length} source files.`);
console.log("  Run `npm run build` to verify everything compiles.");
