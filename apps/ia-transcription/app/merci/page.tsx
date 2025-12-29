import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";
import { getLink } from "@/lib/links";

export const metadata: Metadata = buildMetadata({
  title: "Merci pour ton inscription",
  description: "Prochaine étape : découvrir le comparatif ou lire un guide pour optimiser ta transcription IA.",
  path: "/merci"
});

export default function MerciPage() {
  return (
    <Section title="Merci !" subtitle="Checklist envoyée. Passe à l’action avec ces deux étapes.">
      <div className="grid gap-6 rounded-xl border border-border-subtle bg-surface-card/60 p-8 shadow-lg md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-text-high">1. Choisir ton outil</h3>
          <p className="text-text-muted">
            Compare Descript, Otter et Whisper selon ton volume, les exports et l’automatisation.
          </p>
          <Button asChild className="mt-3">
            <Link href={getLink("comparatif")}>Voir le comparatif</Link>
          </Button>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-high">2. Passer en prod</h3>
          <p className="text-text-muted">
            Lis nos guides courts pour fiabiliser les exports SRT/VTT et éviter les corrections manuelles.
          </p>
          <Button asChild variant="secondary" className="mt-3">
            <Link href={getLink("blog")}>Voir les guides</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
