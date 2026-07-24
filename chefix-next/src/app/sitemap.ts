import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Sitemap XML gerado a partir das rotas públicas. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/funcionalidades", priority: 0.9, freq: "monthly" as const },
    { path: "/como-funciona", priority: 0.8, freq: "monthly" as const },
    { path: "/consultoria", priority: 0.7, freq: "monthly" as const },
    { path: "/planos", priority: 0.9, freq: "monthly" as const },
    { path: "/indique-e-ganhe", priority: 0.6, freq: "monthly" as const },
    { path: "/sobre", priority: 0.6, freq: "yearly" as const },
    { path: "/contato", priority: 0.6, freq: "yearly" as const },
    { path: "/central-de-ajuda", priority: 0.5, freq: "monthly" as const },
    { path: "/blog", priority: 0.7, freq: "weekly" as const },
    { path: "/privacidade", priority: 0.3, freq: "yearly" as const },
    { path: "/termos", priority: 0.3, freq: "yearly" as const },
  ];

  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
