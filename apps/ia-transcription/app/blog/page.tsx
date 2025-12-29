import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import { PostCard } from "@/components/blog/PostCard";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";
import { getLink } from "@/lib/links";

export const metadata: Metadata = buildMetadata({
  title: "Blog transcription IA | Guides simples",
  description: "Guides sur transcription, sous-titres, SRT/VTT, workflows et automatisation.",
  path: "/blog"
});

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <Section title="Blog IA Transcription" subtitle="Des guides courts et actionnables pour aller vite.">
      <div className="grid gap-6 md:grid-cols-3">
        {sorted.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-border-subtle bg-surface-card/60 p-5 text-sm text-text-muted">
        <p>
          Nouveau ici ? Commence par le{" "}
          <Link href={getLink("landing")} className="text-primary">
            guide rapide
          </Link>{" "}
          ou compare les outils dans la page{" "}
          <Link href={getLink("comparatif")} className="text-primary">
            comparatif
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
