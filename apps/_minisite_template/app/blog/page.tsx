import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog - Minisite Template",
  description: "Liste d’articles à remplacer.",
  path: "/blog"
});

export default function BlogIndex() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Blog (placeholder)</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-primary">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
