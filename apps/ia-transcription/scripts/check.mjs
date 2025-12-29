#!/usr/bin/env node
import fs from "fs";
import path from "path";

const root = process.cwd();

function walk(dir, handler) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (["node_modules", ".git", ".next"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, handler);
    } else {
      handler(full);
    }
  }
}

function fail(message) {
  console.error(`check ❌ ${message}`);
  process.exitCode = 1;
}

// 1) Merge markers
walk(root, (file) => {
  if (file.endsWith("scripts/check.mjs")) return;
  const stats = fs.statSync(file);
  if (stats.size > 1_000_000) return;
  const content = fs.readFileSync(file, "utf-8");
  if (content.includes("<<<<<<<") || content.includes("=======") || content.includes(">>>>>>>")) {
    fail(`Merge markers found in ${path.relative(root, file)}`);
  }
});

// 2) .env files accidentally tracked
walk(root, (file) => {
  const base = path.basename(file);
  if (base.startsWith(".env") && base !== ".env.example") {
    fail(`.env file detected: ${path.relative(root, file)}`);
  }
});

// 3) Required routes/docs
const requiredFiles = [
  "app/page.tsx",
  "app/comparatif/page.tsx",
  "app/blog/page.tsx",
  "app/blog/[slug]/page.tsx",
  "app/merci/page.tsx",
  "app/go/[slug]/route.ts",
  "app/sitemap.ts",
  "app/robots.ts",
  "src/design/tokens.ts",
  "src/content/rules.md",
  "src/content/affiliate.ts"
];

for (const rel of requiredFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    fail(`Missing required file: ${rel}`);
  }
}

// 4) Affiliate map
const affiliatePath = path.join(root, "src/content/affiliate.ts");
if (!fs.existsSync(affiliatePath)) {
  fail("Unable to read affiliate map");
} else {
  const content = fs.readFileSync(affiliatePath, "utf-8");
  const entries = (content.match(/url:/g) || []).length;
  if (entries === 0) {
    fail("Affiliate map is empty");
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
} else {
  console.log("check ✅ passed");
}
