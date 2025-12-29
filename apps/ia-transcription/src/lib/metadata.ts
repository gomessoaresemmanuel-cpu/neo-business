import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type MetaProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function buildMetadata({ title, description, path = "/", type = "website" }: MetaProps): Metadata {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - preview`
        }
      ]
    }
  };
}
