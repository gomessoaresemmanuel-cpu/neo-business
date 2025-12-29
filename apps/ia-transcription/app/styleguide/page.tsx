import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { palette, spacing, radii, shadows, typography } from "@/design/tokens";

export default function StyleguidePage() {
  if (process.env.NEXT_PUBLIC_SHOW_STYLEGUIDE !== "true") return notFound();

  return (
    <div className="space-y-10 pb-16">
      <Section title="Styleguide" subtitle="Palette, typographie, boutons et cartes.">
        <div className="grid gap-4 md:grid-cols-4">
          {Object.entries(palette).map(([key, value]) => {
            if (typeof value === "string") {
              return (
                <div key={key} className="rounded-lg border border-border-subtle p-3">
                  <div className="h-12 rounded-md" style={{ background: value }} />
                  <p className="mt-2 text-sm text-text-muted">{key}</p>
                </div>
              );
            }
            return Object.entries(value).map(([sub, color]) => (
              <div key={`${key}-${sub}`} className="rounded-lg border border-border-subtle p-3">
                <div className="h-12 rounded-md" style={{ background: color as string }} />
                <p className="mt-2 text-sm text-text-muted">
                  {key}.{sub}
                </p>
              </div>
            ));
          })}
        </div>
      </Section>

      <Section title="Typographie">
        <div className="space-y-3">
          <div style={{ fontSize: typography.h1.size, lineHeight: typography.h1.lineHeight, fontWeight: typography.h1.weight }}>
            Titre H1
          </div>
          <div style={{ fontSize: typography.h2.size, lineHeight: typography.h2.lineHeight, fontWeight: typography.h2.weight }}>
            Titre H2
          </div>
          <div style={{ fontSize: typography.h3.size, lineHeight: typography.h3.lineHeight, fontWeight: typography.h3.weight }}>
            Titre H3
          </div>
          <p style={{ fontSize: typography.body.size, lineHeight: typography.body.lineHeight }}>Texte body</p>
          <p style={{ fontSize: typography.small.size, lineHeight: typography.small.lineHeight }}>Texte small</p>
        </div>
      </Section>

      <Section title="Boutons">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Section>

      <Section title="Cartes & tokens">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Radii">{Object.entries(radii).map(([k, v]) => <div key={k}>{k}: {v}</div>)}</Card>
          <Card title="Shadows">{Object.entries(shadows).map(([k, v]) => <div key={k}>{k}: {v}</div>)}</Card>
          <Card title="Spacing">{Object.entries(spacing).map(([k, v]) => <div key={k}>{k}: {v}</div>)}</Card>
        </div>
      </Section>
    </div>
  );
}
