import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const steps = [
  { title: "1. Upload audio/vidéo", detail: "Analyse du son et normalisation pour limiter les corrections." },
  { title: "2. Transcription IA", detail: "Choix automatique de l’outil selon durée et bruit (Whisper, Descript, Otter)." },
  { title: "3. Exports & diffusion", detail: "Texte + SRT/VTT + résumé. Envoi vers Notion/Slack et CTA affiliés prêts." }
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="Un flux simple de bout en bout"
      subtitle="Moins d’étapes manuelles, plus de temps pour publier et monétiser."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} eyebrow={step.title}>
            {step.detail}
          </Card>
        ))}
      </div>
    </Section>
  );
}
