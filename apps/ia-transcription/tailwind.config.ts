import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        "primary-dark": "#0B7EB6",
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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        sm: "0 4px 12px rgba(15,20,25,0.08)",
        md: "0 10px 30px rgba(15,20,25,0.12)",
        lg: "0 20px 60px rgba(15,20,25,0.16)"
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "999px"
      },
      spacing: {
        "0": "0rem",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "8": "2rem",
        "12": "3rem",
        "16": "4rem",
        "24": "6rem",
        "32": "8rem"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px"
      }
    }
  },
  plugins: []
};

export default config;
