export type AffiliateSlug = "descript" | "otter" | "whisper";

export const affiliateMap: Record<AffiliateSlug, { url: string; label: string }> = {
  descript: {
    url: "https://www.descript.com/",
    label: "Descript"
  },
  otter: {
    url: "https://otter.ai/",
    label: "Otter.ai"
  },
  whisper: {
    url: "https://openai.com/research/whisper",
    label: "Whisper"
  }
};

export function buildAffiliateUrl(slug: AffiliateSlug, utm?: { source?: string; campaign?: string }) {
  const target = affiliateMap[slug];
  const params = new URLSearchParams();
  if (utm?.source) params.set("utm_source", utm.source);
  if (utm?.campaign) params.set("utm_campaign", utm.campaign);
  const query = params.toString();
  return query ? `${target.url}?${query}` : target.url;
}
