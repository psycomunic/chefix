import type { Config } from "tailwindcss";

/**
 * Tokens da marca Chefix.
 * Fonte: Manual da Marca (Seção 3 do escopo). Regras obrigatórias.
 * O CSS do design system fica em src/app/globals.css usando estas mesmas cores
 * via variáveis CSS; aqui expomos os tokens para uso com utilitários Tailwind.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1c3055",
          800: "#16294a",
          700: "#22406e",
          deep: "#152745",
        },
        orange: {
          DEFAULT: "#f86c1f",
          600: "#e35c12",
        },
        ink: "#131b2b",
        slate: "#5b6b83",
        line: "#e7ebf1",
        paper: "#ffffff",
        mist: {
          DEFAULT: "#f5f7fa",
          2: "#eef2f7",
        },
        green: {
          DEFAULT: "#1a8f5a",
          bg: "#e6f4ec",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
        pill: "30px",
      },
      maxWidth: {
        wrap: "1180px",
      },
      boxShadow: {
        "chefix-sm": "0 1px 2px rgba(20,32,55,.06),0 2px 8px rgba(20,32,55,.05)",
        "chefix-md": "0 10px 30px rgba(20,32,55,.10)",
        "chefix-lg": "0 30px 60px -20px rgba(20,32,55,.35)",
      },
    },
  },
  plugins: [],
};

export default config;
