#!/usr/bin/env node
import fs from "fs";
import path from "path";

const required = ["app/page.tsx", "app/comparatif/page.tsx", "app/blog/page.tsx", "app/blog/[slug]/page.tsx", "app/merci/page.tsx"];
const root = process.cwd();

let hasError = false;

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    console.error(`Missing required file: ${file}`);
    hasError = true;
  }
}

if (hasError) process.exit(1);
console.log("check ✅ template ready to customize");
