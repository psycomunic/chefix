"use client";

import { useEffect, useState } from "react";

/**
 * Tema automático por horário: a partir das 18h fica ESCURO; durante o dia, CLARO.
 * Recalcula ao abrir, a cada minuto e quando a aba volta ao foco.
 * O usuário pode forçar Claro/Escuro (override manual) ou voltar ao Automático.
 */
type Theme = "light" | "dark";

function autoTheme(): Theme {
  const h = new Date().getHours();
  return h >= 18 || h < 6 ? "dark" : "light";
}

function apply(t: Theme) {
  document.documentElement.dataset.theme = t;
}

export default function ThemeSwitcher() {
  const [manual, setManual] = useState<Theme | null>(null);
  const [current, setCurrent] = useState<Theme>("light");
  const [open, setOpen] = useState(false);

  // carrega preferência salva (ou limpa valores antigos, ex.: "orange")
  useEffect(() => {
    const stored = localStorage.getItem("chefix-theme");
    const m: Theme | null =
      stored === "light" || stored === "dark" ? stored : null;
    if (stored && !m) localStorage.removeItem("chefix-theme");
    setManual(m);
    const applied = m ?? autoTheme();
    setCurrent(applied);
    apply(applied);
  }, []);

  // modo automático: acompanha o horário enquanto não houver override manual
  useEffect(() => {
    if (manual) return;
    const tick = () => {
      const a = autoTheme();
      setCurrent(a);
      apply(a);
    };
    tick();
    const id = window.setInterval(tick, 60000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [manual]);

  function pick(t: Theme) {
    setManual(t);
    setCurrent(t);
    apply(t);
    localStorage.setItem("chefix-theme", t);
  }

  function useAuto() {
    setManual(null);
    localStorage.removeItem("chefix-theme");
    const a = autoTheme();
    setCurrent(a);
    apply(a);
  }

  return (
    <div className={`theme-switch${open ? " open" : ""}`}>
      <button
        className="theme-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Trocar tema de cores"
        aria-expanded={open}
      >
        <span className={`tsw-dot ${current}`} />
        Tema
      </button>
      <div className="theme-options" role="group" aria-label="Tema de cores">
        <button
          className={`tsw${current === "light" ? " on" : ""}`}
          onClick={() => pick("light")}
          aria-pressed={current === "light"}
        >
          <span className="tsw-dot light" />
          Claro
        </button>
        <button
          className={`tsw${current === "dark" ? " on" : ""}`}
          onClick={() => pick("dark")}
          aria-pressed={current === "dark"}
        >
          <span className="tsw-dot dark" />
          Escuro
        </button>
        <button
          className={`tsw tsw-auto${manual === null ? " on" : ""}`}
          onClick={useAuto}
          aria-pressed={manual === null}
        >
          {manual === null ? "● " : ""}Automático (18h → escuro)
        </button>
      </div>
    </div>
  );
}
