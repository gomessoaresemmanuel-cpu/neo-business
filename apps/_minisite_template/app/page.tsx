import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Landing - Minisite Template",
  description: "Remplacer ce contenu par la landing du prochain minisite.",
  path: "/"
});

export default function LandingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Landing (à personnaliser)</h1>
      <p>Ajoute ici hero, bénéfices, FAQ, capture email et liens internes.</p>
    </div>
  );
}
