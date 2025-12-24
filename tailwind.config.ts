import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whisk: {
          yellow: "#FFD500",
          yellowHover: "rgba(255, 213, 0, 0.15)",
          yellowActive: "rgba(255, 213, 0, 0.25)",
        },
        text: {
          primary: "rgba(26, 26, 26, 0.9)", // #1A1A1A
          secondary: "rgba(74, 74, 74, 0.7)", // #4A4A4A
          tertiary: "rgba(138, 138, 138, 0.5)", // #8A8A8A
        },
        bg: {
          page: "#F8F9FA",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-inter)"], // Using Inter as fallback/primary as requested
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
