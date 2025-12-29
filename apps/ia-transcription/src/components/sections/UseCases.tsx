import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const useCases = [
  {
    title: "Podcasts & interviews",
    description: "Publie le texte complet, crée des résumés courts et ajoute un CTA vers ton offre."
  },
  {
    title: "Réunions & comptes-rendus",
    description: "Synchronise avec Otter, exporte en VTT, archive dans Notion avec horodatage."
  },
  {
    title: "YouTube & shorts",
    description: "Sous-titres propres, timecodes courts et conseils de formatage mobile."
  }
];

export function UseCases() {
  return (
    <Section id="use-cases" title="Cas d’usage clés" subtitle="Des workflows prêts pour les métiers où la vitesse compte.">
      <div className="grid gap-6 md:grid-cols-3">
        {useCases.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
