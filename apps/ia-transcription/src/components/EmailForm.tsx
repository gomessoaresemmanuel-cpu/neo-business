'use client';

import { FormEvent, useState, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { isValidEmail } from "@/lib/validator";
import { trackEvent } from "@/lib/analytics";

type Props = {
  compact?: boolean;
  source?: string;
};

export function EmailForm({ compact = false, source = "landing" }: Props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMessage(null);

    if (!isValidEmail(email)) {
      setMessage("Entre un email valide pour recevoir la checklist.");
      trackEvent("lead_submit_error", { reason: "invalid_email" });
      return;
    }

    trackEvent("lead_submit_attempt", { source });

    startTransition(async () => {
      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source, page: pathname })
        });
        const data = await res.json();
        if (res.ok) {
          trackEvent("lead_submit_success", { source });
          setEmail("");
          setMessage("Parfait, on t’emmène sur la page de confirmation.");
          router.push("/merci");
        } else {
          trackEvent("lead_submit_error", { status: res.status });
          setMessage(data?.error ?? "Une erreur est survenue.");
        }
      } catch (error) {
        console.error(error);
        trackEvent("lead_submit_error", { reason: "network" });
        setMessage("Serveur indisponible, réessaie dans un instant.");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "flex flex-col gap-3 sm:flex-row sm:items-center" : "space-y-3"}
      aria-label="Formulaire d’inscription email"
    >
      <Input
        type="email"
        name="email"
        placeholder="prenom@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email"
        disabled={isPending}
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Envoi..." : "Recevoir la checklist"}
      </Button>
      {message && <p className="text-sm text-text-muted">{message}</p>}
    </form>
  );
}
