type LinkKey =
  | "landing"
  | "comparatif"
  | "blog"
  | "merci"
  | "styleguide"
  | "affiliateDescript"
  | "affiliateOtter"
  | "affiliateWhisper";

const linkMap: Record<LinkKey, string> = {
  landing: "/",
  comparatif: "/comparatif",
  blog: "/blog",
  merci: "/merci",
  styleguide: "/styleguide",
  affiliateDescript: "/go/descript",
  affiliateOtter: "/go/otter",
  affiliateWhisper: "/go/whisper"
};

export function getLink(key: LinkKey) {
  return linkMap[key];
}

export function internalLinks(): Array<{ label: string; href: string }> {
  return [
    { label: "Landing", href: linkMap.landing },
    { label: "Comparatif", href: linkMap.comparatif },
    { label: "Blog", href: linkMap.blog }
  ];
}
