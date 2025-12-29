import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Comparatif - Minisite Template",
  description: "Insère ici un tableau comparatif et des CTA affiliés.",
  path: "/comparatif"
});

export default function ComparatifPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Comparatif (placeholder)</h1>
      <p>Ajoute un tableau, des CTA et une FAQ adaptés au minisite cloné.</p>
    </div>
  );
}
