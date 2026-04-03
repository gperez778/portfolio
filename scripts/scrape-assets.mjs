/**
 * scrape-assets.mjs
 *
 * Visits every page of the live Framer site using a real browser (Playwright),
 * intercepts every network request to framerusercontent.com, downloads each
 * unique image/video asset, and saves it to public/assets/.
 *
 * After running this script, update next.config.ts to remove the
 * framerusercontent.com remotePattern — everything will be local.
 *
 * Usage:
 *   node scripts/scrape-assets.mjs
 */

import { chromium } from "playwright";
import { createWriteStream, mkdirSync, existsSync } from "fs";
import { join, dirname, extname } from "path";
import { pipeline } from "stream/promises";
import { Readable } from "stream";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "assets");

const BASE_URL = "https://gperezdesign.framer.website";

const PAGES = [
  "/",
  "/about",
  "/imvu-hashtags",
  "/ea-meta",
  "/ea-help-center",
  "/withme-design",
];

// framerusercontent.com URLs to collect
const collected = new Map(); // url → local filename

function urlToFilename(url) {
  try {
    const u = new URL(url);
    // e.g. /images/abc123.png or /modules/abc123
    const parts = u.pathname.split("/").filter(Boolean);
    // grab last path segment + any query hash for uniqueness
    let name = parts[parts.length - 1] ?? "asset";
    // strip query params from name but append short hash for uniqueness
    const hash = u.search ? u.search.slice(1, 8) : "";
    const ext = extname(name) || guessExt(url);
    if (!extname(name) && ext) {
      name = name + ext;
    }
    return hash ? `${name.replace(ext, "")}_${hash}${ext}` : name;
  } catch {
    return `asset_${Date.now()}`;
  }
}

function guessExt(url) {
  if (/\.(mp4|webm|mov)/i.test(url)) return url.match(/\.(mp4|webm|mov)/i)[0];
  if (/\.(png|jpg|jpeg|gif|webp|avif|svg)/i.test(url))
    return url.match(/\.(png|jpg|jpeg|gif|webp|avif|svg)/i)[0];
  return ".bin";
}

async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  mkdirSync(dirname(destPath), { recursive: true });
  await pipeline(Readable.fromWeb(res.body), createWriteStream(destPath));
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  console.log("Launching browser…");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  });

  for (const path of PAGES) {
    const pageUrl = BASE_URL + path;
    console.log(`\nVisiting ${pageUrl}`);

    const page = await context.newPage();

    // Intercept every response from framerusercontent.com
    page.on("response", async (res) => {
      const url = res.url();
      if (!url.includes("framerusercontent.com")) return;
      if (collected.has(url)) return;

      const ct = res.headers()["content-type"] ?? "";
      const isAsset =
        ct.startsWith("image/") ||
        ct.startsWith("video/") ||
        ct.includes("font") ||
        /\.(png|jpg|jpeg|gif|webp|avif|svg|mp4|webm|mov|woff2?|ttf|otf)/i.test(
          url
        );
      if (!isAsset) return;

      const filename = urlToFilename(url);
      collected.set(url, filename);
      console.log(`  + Found: ${filename}`);
    });

    await page.goto(pageUrl, { waitUntil: "networkidle", timeout: 30000 });

    // Scroll to trigger lazy-loaded images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let total = 0;
        const step = 400;
        const timer = setInterval(() => {
          window.scrollBy(0, step);
          total += step;
          if (total >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 120);
      });
    });

    // Wait for any lazy loads to settle
    await page.waitForTimeout(1500);
    await page.close();
  }

  await browser.close();

  console.log(`\nDownloading ${collected.size} assets to public/assets/…`);

  const mapping = {}; // original URL → /assets/filename (for code replacement)
  let i = 0;
  for (const [url, filename] of collected.entries()) {
    const dest = join(OUT_DIR, filename);
    if (existsSync(dest)) {
      console.log(`  [skip] ${filename} already exists`);
    } else {
      process.stdout.write(`  [${++i}/${collected.size}] ${filename}… `);
      try {
        await download(url, dest);
        console.log("✓");
      } catch (err) {
        console.log(`✗ ${err.message}`);
      }
    }
    mapping[url] = `/assets/${filename}`;
  }

  // Write a JSON map so you can do a bulk find-replace in code
  const mapPath = join(ROOT, "scripts", "asset-map.json");
  const { writeFileSync } = await import("fs");
  writeFileSync(mapPath, JSON.stringify(mapping, null, 2));
  console.log(`\n✓ Asset map written to scripts/asset-map.json`);
  console.log(
    `  Use it to replace framerusercontent.com URLs in your source files.`
  );
  console.log(`\nDone. ${collected.size} assets saved to public/assets/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
