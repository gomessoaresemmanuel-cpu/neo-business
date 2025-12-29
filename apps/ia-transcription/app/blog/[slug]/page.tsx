import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/content/posts";
import { PostBody } from "@/components/blog/PostBody";
import { buildMetadata } from "@/lib/metadata";
import { getLink } from "@/lib/links";

type Params = { slug: string };

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | Transcription IA`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article"
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "NEO Business"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://ia-transcription.neobusiness.fr"}/blog/${post.slug}`
    }
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="container max-w-4xl py-16">
      <p className="text-sm text-text-muted">
        <Link href={getLink("blog")} className="text-primary">
          Retour au blog
        </Link>{" "}
        · {post.readTime} · {post.category}
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-text-high">{post.title}</h1>
      <p className="text-text-muted">Publié le {post.publishedAt}</p>

      <div className="mt-8">
        <PostBody post={post} />
      </div>

      <div className="mt-10 border-t border-border-subtle pt-6">
        <h3 className="text-xl font-semibold text-text-high">Articles associés</h3>
        <ul className="mt-3 space-y-2 text-primary">
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={`/blog/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
