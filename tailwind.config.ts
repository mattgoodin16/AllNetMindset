import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00E5FF",
        neonBlueSoft: "#33F2FF",
        neonOrange: "#FFB347",
        deepBg: "#020617"
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,229,255,0.55)",
        card: "0 24px 60px rgba(15,23,42,0.9)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
