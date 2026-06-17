import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161514",
        charcoal: "#242220",
        linen: "#f7f2eb",
        pearl: "#fbfaf7",
        champagne: "#d7b982",
        bronze: "#9b6f3b",
        sage: "#657267",
        clay: "#a86645"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(22, 21, 20, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
