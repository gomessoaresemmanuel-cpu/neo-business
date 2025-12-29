import { NextResponse } from "next/server";
import { affiliateMap, AffiliateSlug } from "@/content/affiliate";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug as AffiliateSlug;
  const target = affiliateMap[slug]?.url;

  if (!target) {
    return NextResponse.json({ error: "Unknown destination" }, { status: 404 });
  }

  return NextResponse.redirect(target, { status: 302 });
}
