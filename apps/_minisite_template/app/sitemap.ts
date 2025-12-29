import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");
  return [
    { url: `${base}/` },
    { url: `${base}/comparatif` },
    { url: `${base}/blog` }
  ];
}
