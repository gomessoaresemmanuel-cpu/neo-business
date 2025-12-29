import { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticPages = ["", "/comparatif", "/blog", "/merci"].map((path) => ({
    url: `${base}${path || "/"}`
  }));

  const blogPages = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt)
  }));

  return [...staticPages, ...blogPages];
}
