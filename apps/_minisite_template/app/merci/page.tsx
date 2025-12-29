import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Merci - Minisite Template",
  description: "Page de remerciement à personnaliser.",
  path: "/merci"
});

export default function MerciPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Merci !</h1>
      <p>Remplace ce texte par tes prochaines étapes (CTA vers comparatif, blog, etc.).</p>
    </div>
  );
}
