import Link from "next/link";
import { getLink } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-muted/60">
      <div className="container flex max-w-[1200px] flex-col gap-4 py-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-text-high">IA Transcription · NEO Business</p>
          <p className="text-text-muted">Site test optimisé pour la conversion et l’affiliation.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={getLink("comparatif")} className="hover:text-text-high">
            Comparatif
          </Link>
          <Link href={getLink("blog")} className="hover:text-text-high">
            Blog
          </Link>
          <Link href={getLink("merci")} className="hover:text-text-high">
            Merci
          </Link>
        </div>
      </div>
    </footer>
  );
}
