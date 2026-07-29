"use client";

import { useEffect, useState } from "react";

/**
 * Tema automático por horário (18h→6h escuro, dia claro) + botão sol/lua no header.
 * O clique força claro/escuro (override manual, persistido). Sem override, segue o horário.
 */
type Theme = "light" | "dark";

function autoTheme(): Theme {
  const h = new Date().getHours();
  return h >= 18 || h < 6 ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("chefix-theme");
    const manual: Theme | null =
      stored === "light" || stored === "dark" ? stored : null;
    if (stored && !manual) localStorage.removeItem("chefix-theme");

    const applied = manual ?? autoTheme();
    setTheme(applied);
    document.documentElement.dataset.theme = applied;

    // sem override manual: acompanha o horário
    if (manual) return;
    const tick = () => {
      const a = autoTheme();
      setTheme(a);
      document.documentElement.dataset.theme = a;
    };
    const id = window.setInterval(tick, 60000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", tick);
    };
  }, []);

  function toggle() {
    const next: Theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("chefix-theme", next);
  }

  const isDark = mounted && theme === "dark";

  return (
    <button
      className="theme-icon"
      onClick={toggle}
      aria-label={isDark ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
      title="Alternar claro/escuro"
      suppressHydrationWarning
    >
      {isDark ? (
        // sol (está escuro, clique vai pro claro)
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" suppressHydrationWarning>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        // lua (está claro, clique vai pro escuro)
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" suppressHydrationWarning>
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
