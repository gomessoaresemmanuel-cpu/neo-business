import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { isValidEmail } from "@/lib/validator";

type Payload = {
  email?: string;
  source?: string;
  page?: string;
};

export async function POST(request: NextRequest) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload invalide" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const supabase = getSupabaseClient();

  try {
    const { data: existing, error: selectError } = await supabase
      .from("subscribers")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (selectError) {
      console.error(selectError);
      return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }

    if (existing) {
      return NextResponse.json({ error: "Email déjà enregistré" }, { status: 409 });
    }

    const { data, error } = await supabase
      .from("subscribers")
      .insert({
        email,
        source: body.source || "landing",
        page: body.page || request.headers.get("referer") || null
      })
      .select("id")
      .maybeSingle();

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }

    if (process.env.N8N_WEBHOOK_URL) {
      fetch(process.env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: body.source || "landing",
          page: body.page || "/",
          ts: new Date().toISOString()
        })
      }).catch((err) => console.warn("Webhook error", err));
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
