export type AnalyticsEvent =
  | "lead_submit_attempt"
  | "lead_submit_success"
  | "lead_submit_error"
  | "affiliate_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", event, params ?? {});
}

export function loadGaScript(gaId?: string) {
  if (!gaId || typeof document === "undefined") return;
  const existing = document.querySelector(`script[src*="www.googletagmanager.com/gtag/js?id=${gaId}"]`);
  if (existing) return;
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.async = true;
  document.head.appendChild(script);

  const inline = document.createElement("script");
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `;
  document.head.appendChild(inline);
}
