import Link from "next/link";
import { Badge } from "../ui/Badge";
import type { Post } from "@/content/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border-subtle bg-surface-card/60 p-5 shadow-sm">
      <div className="flex items-center justify-between text-xs text-text-muted">
        <Badge variant="outline">{post.category}</Badge>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-text-high">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-text-muted">{post.excerpt}</p>
      <div className="mt-auto pt-4 text-sm">
        <Link href={`/blog/${post.slug}`} className="text-primary">
          Lire l’article →
        </Link>
      </div>
    </article>
  );
}
