export const spacing = {
  none: "0rem",
  "xs-1": "0.25rem",
  "xs-2": "0.5rem",
  "sm": "0.75rem",
  base: "1rem",
  "md": "1.5rem",
  "lg": "2rem",
  "xl": "3rem",
  "2xl": "4rem",
  "3xl": "6rem",
  "4xl": "8rem"
};

export const radii = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  pill: "999px"
};

export const shadows = {
  sm: "0 4px 12px rgba(15,20,25,0.08)",
  md: "0 10px 30px rgba(15,20,25,0.12)",
  lg: "0 20px 60px rgba(15,20,25,0.16)"
};

export const typography = {
  h1: { size: "clamp(2.25rem, 2vw + 1rem, 2.75rem)", lineHeight: "1.2", weight: 600 },
  h2: { size: "clamp(1.75rem, 1.5vw + 1rem, 2rem)", lineHeight: "1.25", weight: 600 },
  h3: { size: "1.5rem", lineHeight: "1.3", weight: 500 },
  body: { size: "1rem", lineHeight: "1.65", weight: 400 },
  small: { size: "0.875rem", lineHeight: "1.5", weight: 500 }
};

export const layout = {
  container: "1200px",
  wide: "1440px",
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1440
  }
};

export const palette = {
  primary: "#0EA5E9",
  primaryDark: "#0B7EB6",
  accent: "#6366F1",
  surface: {
    base: "#0B0F14",
    muted: "#111820",
    card: "#0F1724",
    light: "#F8FBFF"
  },
  text: {
    high: "#E5ECF5",
    muted: "#B8C7DA",
    dark: "#0B0F14"
  },
  border: {
    subtle: "#2B3848",
    base: "#1F2A3A"
  },
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444"
};
