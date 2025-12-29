import type { Metadata } from "next";

export function buildMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const url = `${base.replace(/\/$/, "")}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(base),
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: title }
  };
}
