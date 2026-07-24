/**
 * Constantes globais do site Chefix.
 * Valores sensíveis vêm de variáveis de ambiente (ver .env.example).
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.chefix.com.br";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.chefix.com.br";

export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? "5500000000000";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

export const CNPJ = "00.000.000/0001-00";

/** Plano self-service principal. */
export const PLAN = {
  name: "Chefix Completo",
  price: 290,
  priceLabel: "R$ 290",
  period: "/mês",
} as const;

/** Itens da navegação principal (header). */
export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Consultoria", href: "/consultoria" },
  { label: "Planos", href: "/planos" },
  { label: "Indique e ganhe", href: "/indique-e-ganhe" },
];

/** Colunas do rodapé. */
export const FOOTER_COLS: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "/funcionalidades" },
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Planos", href: "/planos" },
      { label: "Consultoria", href: "/consultoria" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre o Chefix", href: "/sobre" },
      { label: "Indique e ganhe", href: "/indique-e-ganhe" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Comece",
    links: [
      { label: "Assinar agora", href: "/checkout" },
      { label: "Solicitar demonstração", href: "/contato" },
      { label: "Central de ajuda", href: "/central-de-ajuda" },
      { label: "Área do cliente", href: APP_URL, external: true },
    ],
  },
];
