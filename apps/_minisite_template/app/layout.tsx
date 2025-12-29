import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minisite Template",
  description: "Structure de base à dupliquer pour un minisite."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-surface-base text-text-high">
        <header className="border-b border-white/10">
          <div className="container flex items-center justify-between py-4">
            <div className="text-lg font-semibold">Minisite Template</div>
            <nav className="flex gap-4 text-sm text-text-muted">
              <a href="/">Landing</a>
              <a href="/comparatif">Comparatif</a>
              <a href="/blog">Blog</a>
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t border-white/10 py-6 text-sm text-text-muted">
          <div className="container">Remplace le contenu par celui de ton minisite.</div>
        </footer>
      </body>
    </html>
  );
}
