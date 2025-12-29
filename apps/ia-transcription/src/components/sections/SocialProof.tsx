import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const proof = [
  {
    label: "5 000+ créateurs",
    detail: "Listes emails opt-in collectées sur nos mini-sites."
  },
  {
    label: "94% de précision moyenne",
    detail: "Mesurée sur des fichiers FR propres (<20 min)."
  },
  {
    label: "30 min gagnées par épisode",
    detail: "En combinant automatisation n8n + exports prêts."
  }
];

export function SocialProof() {
  return (
    <Section id="social-proof" title="Preuves rapides" subtitle="Données issues de tests internes NEO Business.">
      <div className="grid gap-4 md:grid-cols-3">
        {proof.map((item) => (
          <Card key={item.label} title={item.label}>
            {item.detail}
          </Card>
        ))}
      </div>
    </Section>
  );
}
