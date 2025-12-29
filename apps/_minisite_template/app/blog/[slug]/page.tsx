import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import { buildMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | Minisite Template`,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-3">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="text-text-muted">{post.excerpt}</p>
      {post.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </article>
  );
}
