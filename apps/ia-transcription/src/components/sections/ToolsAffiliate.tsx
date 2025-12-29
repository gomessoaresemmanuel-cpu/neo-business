import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AffiliateLink } from "../AffiliateLink";
import { getLink } from "@/lib/links";

const tools = [
  {
    name: "Descript",
    focus: "Édition + transcription",
    slug: "affiliateDescript",
    points: ["Montage par texte", "Exports SRT/VTT", "Bon pour vidéos longues"]
  },
  {
    name: "Otter",
    focus: "Réunions & calls",
    slug: "affiliateOtter",
    points: ["Notes en temps réel", "Résumés auto", "Idéal équipes produit"]
  },
  {
    name: "Whisper",
    focus: "Volume & offline",
    slug: "affiliateWhisper",
    points: ["Modèle OpenAI", "Bon hors ligne", "Coût faible en masse"]
  }
];

export function ToolsAffiliate() {
  return (
    <Section
      id="tools"
      title="Choisis l’outil adapté à ton volume"
      subtitle="Liens d’affiliation transparents, pas de redirections exotiques."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tools.map((tool) => (
          <Card
            key={tool.name}
            title={tool.name}
            eyebrow={tool.focus}
            actions={
              <Badge variant="outline" className="text-xs">
                Affiliation
              </Badge>
            }
          >
            <ul className="space-y-2 text-text-muted">
              {tool.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <AffiliateLink href={getLink(tool.slug as "affiliateDescript" | "affiliateOtter" | "affiliateWhisper")} className="mt-4 inline-flex text-primary">
              Découvrir
            </AffiliateLink>
          </Card>
        ))}
      </div>
    </Section>
  );
}
