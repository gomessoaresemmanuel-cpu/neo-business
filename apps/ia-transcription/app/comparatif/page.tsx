import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { getLink } from "@/lib/links";
import { AffiliateLink } from "@/components/AffiliateLink";

const faq = [
  { q: "Quel outil choisir pour le français ?", a: "Descript pour montage + texte, Whisper pour volume, Otter pour réunions." },
  { q: "Puis-je tester gratuitement ?", a: "Oui, chaque outil propose une version d’essai ou un quota limité avant de payer." },
  { q: "Les exports SRT/VTT sont-ils inclus ?", a: "Descript et Otter les incluent, Whisper nécessite un outil tiers pour formater si self-host." },
  { q: "Comment suivre les clics ?", a: "Passe par les liens /go/[slug] pour tracer chaque clic affilié proprement." }
];

export const metadata: Metadata = buildMetadata({
  title: "Meilleur outil de transcription 2025 | Comparatif",
  description: "Compare Descript, Otter, Whisper et alternatives. Choisis vite selon ton volume et ton budget.",
  path: "/comparatif"
});

const rows = [
  {
    feature: "Précision FR",
    descript: "Excellente (studio)",
    otter: "Très bonne réunions",
    whisper: "Très bonne si audio propre"
  },
  { feature: "Exports", descript: "Texte + SRT/VTT", otter: "Texte + SRT/VTT", whisper: "Texte (SRT via script)" },
  { feature: "Montage", descript: "Montage par texte", otter: "Notes et résumés", whisper: "N/A (self-host)" },
  { feature: "Automations", descript: "API + Zapier", otter: "API + meeting bots", whisper: "CLI + n8n" },
  { feature: "Budget mensuel", descript: "25-40€", otter: "12-30€", whisper: "≈10€ (cloud) ou gratuit en local" }
];

export default function ComparatifPage() {
  return (
    <>
      <Section
        title="Le comparatif rapide des outils de transcription"
        subtitle="Focalisé sur le français, les exports SRT/VTT et l’automatisation pour gagner du temps."
      >
        <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface-card/70">
          <table className="min-w-full divide-y divide-border-subtle text-sm">
            <thead className="bg-surface-muted/70 text-text-high">
              <tr>
                <th className="px-4 py-3 text-left">Critère</th>
                <th className="px-4 py-3 text-left">Descript</th>
                <th className="px-4 py-3 text-left">Otter</th>
                <th className="px-4 py-3 text-left">Whisper</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-text-muted">
              {rows.map((row) => (
                <tr key={row.feature} className="hover:bg-surface-muted/40">
                  <td className="px-4 py-3 font-semibold text-text-high">{row.feature}</td>
                  <td className="px-4 py-3">{row.descript}</td>
                  <td className="px-4 py-3">{row.otter}</td>
                  <td className="px-4 py-3">{row.whisper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild>
            <AffiliateLink href="/go/descript">Choisir Descript</AffiliateLink>
          </Button>
          <Button asChild variant="secondary">
            <AffiliateLink href="/go/otter">Tester Otter</AffiliateLink>
          </Button>
          <Button asChild variant="ghost">
            <Link href={getLink("blog")}>Lire le blog</Link>
          </Button>
        </div>
      </Section>

      <Section title="Checklist de choix rapide" subtitle="3 scénarios courants pour décider en moins de 5 minutes.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Podcasts & vidéo longue">Descript : montage + SRT en un clic, top pour chapitrage.</Card>
          <Card title="Réunions & équipes produit">Otter : notes en direct, résumés envoyés sur Slack.</Card>
          <Card title="Volume élevé ou offline">Whisper : coûts faibles, script n8n pour industrialiser.</Card>
        </div>
      </Section>

      <Section title="FAQ comparatif" subtitle="Réponses rapides pour choisir sans hésiter.">
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <Card key={item.q} title={item.q}>
              {item.a}
            </Card>
          ))}
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a }
            }))
          })
        }}
      />
    </>
  );
}
