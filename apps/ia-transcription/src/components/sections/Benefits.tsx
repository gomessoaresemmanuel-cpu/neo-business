import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const benefits = [
  {
    title: "Précision en français",
    description: "Optimisé pour accents et jargons métiers. Moins de corrections manuelles."
  },
  {
    title: "Exports prêts à publier",
    description: "Texte, SRT, VTT et résumés. Intégration directe pour YouTube et CMS."
  },
  {
    title: "Automations incluses",
    description: "Workflows n8n pour notifier, stocker dans Supabase et relire vite."
  }
];

export function Benefits() {
  return (
    <Section
      id="benefits"
      title="Pensé pour aller vite sans perdre en qualité"
      subtitle="Des blocs clairs, un temps de mise en place inférieur à 30 minutes."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
