import { NextRequest, NextResponse } from "next/server";
import { affiliateMap, buildAffiliateUrl, AffiliateSlug } from "@/content/affiliate";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug as AffiliateSlug;

  if (!affiliateMap[slug]) {
    return NextResponse.json({ error: "Unknown destination" }, { status: 404 });
  }

  const target = buildAffiliateUrl(slug, { source: "ia-transcription", campaign: "affiliate_redirect" });
  const logPayload = {
    slug,
    target,
    ts: new Date().toISOString(),
    referer: request.headers.get("referer") || "direct"
  };

  console.info("affiliate_click", logPayload);

  return NextResponse.redirect(target, { status: 302 });
}
