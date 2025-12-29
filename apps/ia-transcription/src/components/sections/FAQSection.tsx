import { Section } from "@/components/ui/Section";

const faqs = [
  {
    q: "Comment est gérée la confidentialité ?",
    a: "Les fichiers sont traités via des outils conformes RGPD. Les emails sont stockés dans Supabase avec accès restreint."
  },
  {
    q: "Quels formats sont supportés ?",
    a: "Texte, SRT et VTT. Nous privilégions des exports propres pour YouTube, podcasts et players web."
  },
  {
    q: "Puis-je automatiser les envois ?",
    a: "Oui, un webhook n8n est déclenché après l’inscription pour envoyer la checklist et logguer l’événement."
  },
  {
    q: "Combien de temps dure la mise en place ?",
    a: "Moins de 30 minutes : formulaire, API d’inscription, comparatif et pages blog sont prêts."
  }
];

export function FAQSection() {
  return (
    <Section id="faq" title="Questions fréquentes" subtitle="Des réponses claires avant d’adopter la transcription IA.">
      <div className="divide-y divide-border-subtle rounded-lg border border-border-subtle bg-surface-card/60">
        {faqs.map((item) => (
          <details key={item.q} className="group p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-text-high">
              {item.q}
              <span className="text-primary transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 text-text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export const faqStructuredData = faqs.map((item) => ({
  "@type": "Question",
  name: item.q,
  acceptedAnswer: {
    "@type": "Answer",
    text: item.a
  }
}));
