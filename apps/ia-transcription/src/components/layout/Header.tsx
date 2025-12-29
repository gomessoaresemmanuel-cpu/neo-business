import Link from "next/link";
import { getLink } from "@/lib/links";
import { Button } from "../ui/Button";

const nav = [
  { label: "Landing", href: getLink("landing") },
  { label: "Comparatif", href: getLink("comparatif") },
  { label: "Blog", href: getLink("blog") }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle/70 bg-surface-base/85 backdrop-blur">
      <div className="container flex max-w-[1200px] items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-text-high">
          IA Transcription
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-text-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-text-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <Link href={getLink("comparatif")}>Voir le comparatif</Link>
          </Button>
          <Button asChild variant="primary">
            <Link href={getLink("landing") + "#cta"}>Recevoir la checklist</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
