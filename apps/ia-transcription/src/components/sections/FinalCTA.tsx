import { Section } from "@/components/ui/Section";
import { EmailForm } from "../EmailForm";
import { getLink } from "@/lib/links";
import Link from "next/link";

export function FinalCTA() {
  return (
    <Section
      id="cta"
      title="Prêt à gagner 30 minutes par transcription ?"
      subtitle="Reçois la checklist, les scripts n8n et le comparatif pour choisir vite."
      className="pb-24"
    >
      <div className="grid gap-6 rounded-xl border border-border-subtle bg-surface-card/60 p-8 shadow-lg md:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4">
          <p className="text-text-muted">
            Formulaire léger, sans piège. On t’envoie la checklist et un lien vers la page merci pour continuer vers le
            comparatif ou le blog.
          </p>
          <div className="flex gap-4 text-sm text-text-muted">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">RGPD</span>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">Exports SRT/VTT</span>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">Automation</span>
          </div>
          <div className="text-sm text-text-muted">
            Déjà certain ?{" "}
            <Link href={getLink("comparatif")} className="text-primary">
              Compare les outils
            </Link>{" "}
            ou explore le{" "}
            <Link href={getLink("blog")} className="text-primary">
              blog
            </Link>
            .
          </div>
        </div>
        <div className="rounded-lg border border-border-subtle bg-surface-muted/60 p-6">
          <EmailForm source="final_cta" />
        </div>
      </div>
    </Section>
  );
}
