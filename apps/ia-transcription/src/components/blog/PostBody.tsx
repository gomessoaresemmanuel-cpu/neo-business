import type { Post } from "@/content/posts";
import Link from "next/link";
import { getLink } from "@/lib/links";

export function PostBody({ post }: { post: Post }) {
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-text-muted">{post.excerpt}</p>
      {post.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {post.outline && (
        <div>
          <h2>Plan rapide</h2>
          <ul>
            {post.outline.map((item) => (
              <li key={item.heading}>
                <strong>{item.heading}:</strong> {item.bullets.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="rounded-lg border border-border-subtle bg-surface-card/60 p-4">
        <p>Prochaine étape :</p>
        <ul>
          <li>
            <Link href={getLink("comparatif")}>Voir le comparatif IA</Link>
          </li>
          <li>
            <Link href={getLink("blog")}>Retour au blog</Link>
          </li>
        </ul>
      </div>
      {post.faq && post.faq.length > 0 && (
        <div>
          <h2>FAQ rapide</h2>
          <ul>
            {post.faq.map((item) => (
              <li key={item.q}>
                <strong>{item.q}</strong>
                <p>{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
