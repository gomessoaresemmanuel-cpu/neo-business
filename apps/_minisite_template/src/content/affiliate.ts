export type AffiliateSlug = "example-tool" | "second-tool";

export const affiliateMap: Record<AffiliateSlug, { url: string; label: string }> = {
  "example-tool": { url: "https://example.com", label: "Example Tool" },
  "second-tool": { url: "https://example.com/second", label: "Second Tool" }
};
