import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        accent: "#6366F1",
        surface: {
          base: "#0B0F14",
          card: "#0F1724",
          light: "#F8FBFF"
        },
        text: {
          high: "#E5ECF5",
          muted: "#B8C7DA"
        }
      }
    },
    container: { center: true, padding: "1.25rem" }
  },
  plugins: []
};

export default config;
