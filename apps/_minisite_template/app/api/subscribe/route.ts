import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  // À remplacer par votre logique (Supabase, webhook, etc.)
  return NextResponse.json({ success: true });
}
