import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { ToolsAffiliate } from "@/components/sections/ToolsAffiliate";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQSection, faqStructuredData } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Transcription IA en français | Rapide et propre",
  description: "Transcris audio et vidéo. Exporte en texte, SRT, VTT et déclenche tes automations en minutes.",
  path: "/"
});

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <UseCases />
      <ToolsAffiliate />
      <SocialProof />
      <FAQSection />
      <FinalCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqStructuredData
          })
        }}
      />
    </>
  );
}
