import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EmailForm } from "../EmailForm";
import { getLink } from "@/lib/links";

export function Hero() {
  return (
    <Section id="hero" className="pt-10 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-6">
          <Badge variant="success">Checklist offerte</Badge>
          <h1 className="text-4xl font-semibold leading-tight text-text-high md:text-[2.75rem]">
            Transcription IA en français, rapide et propre
          </h1>
          <p className="text-lg text-text-muted">
            Transforme tes audios et vidéos en texte, SRT et VTT en quelques minutes. Workflow optimisé pour podcasters,
            créateurs et équipes produit.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="#cta">Recevoir la checklist</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={getLink("comparatif")}>Voir le comparatif</Link>
            </Button>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface-muted/60 p-4 text-sm text-text-muted">
            <ul className="space-y-2 list-disc list-inside">
              <li>Précision optimisée pour le français</li>
              <li>Exports propres pour YouTube, podcasts, SRT/VTT</li>
              <li>Automations n8n incluses pour réduire le temps manuel</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-border-subtle bg-surface-card/60 p-6 shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-text-high">Recevoir la checklist de transcription</h3>
          <p className="mb-4 text-text-muted">Email unique. Pas de spam. Accès aux scripts n8n + comparatif à jour.</p>
          <EmailForm />
          <p className="mt-3 text-xs text-text-muted">Contrôle RGPD · désinscription en 1 clic.</p>
        </div>
      </div>
    </Section>
  );
}
