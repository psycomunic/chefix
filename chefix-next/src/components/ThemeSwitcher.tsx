"use client";

import { useEffect, useState } from "react";

/**
 * Seletor de tema para PREVIEW (Claro / Escuro / Laranja).
 * Aplica data-theme no <html> e persiste em localStorage.
 * Ferramenta de comparação visual; não é parte fixa do produto.
 */
const THEMES = [
  { id: "light", label: "Claro" },
  { id: "dark", label: "Escuro" },
  { id: "orange", label: "Laranja" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("chefix-theme") as ThemeId) || "light";
    setTheme(stored);
    document.documentElement.dataset.theme = stored;
  }, []);

  function apply(t: ThemeId) {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem("chefix-theme", t);
  }

  return (
    <div className={`theme-switch${open ? " open" : ""}`}>
      <button
        className="theme-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Trocar tema de cores"
        aria-expanded={open}
      >
        <span className={`tsw-dot ${theme}`} />
        Tema
      </button>
      <div className="theme-options" role="group" aria-label="Tema de cores">
        {THEMES.map((t) => (
          <button
            key={t.id}
            className={`tsw${theme === t.id ? " on" : ""}`}
            onClick={() => apply(t.id)}
            aria-pressed={theme === t.id}
          >
            <span className={`tsw-dot ${t.id}`} />
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
