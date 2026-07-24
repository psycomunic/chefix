"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Efeito de "scroll reveal" (fade + slide up) aplicado ao entrar na viewport.
 * Reproduz o comportamento do protótipo, re-executando a cada mudança de rota.
 * Respeita prefers-reduced-motion.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const targets = document.querySelectorAll<HTMLElement>(
      "section.block .wrap > *, .bento .bcard, .t-grid .tcard, .grid > *, .co-step",
    );
    targets.forEach((el) => {
      if (!el.classList.contains("bento")) el.classList.add("reveal");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
