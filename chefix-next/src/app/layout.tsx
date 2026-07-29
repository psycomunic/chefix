import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import BrandSymbol from "@/components/BrandSymbol";
import Reveal from "@/components/Reveal";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { SITE_URL } from "@/lib/site";

/**
 * Fonte web do protótipo (fallback da HK Nova, a fonte oficial da marca).
 * Em produção, licencie a HK Nova e sirva via @font-face, ajustando --font-sans.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chefix | O Sistema Inteligente para o Setor de Alimentação",
    template: "%s | Chefix",
  },
  description:
    "Gestão operacional e financeira para restaurantes, padarias, pizzarias e buffets. Fichas técnicas, CMV em tempo real, estoque, etiquetagem e precificação em um só lugar.",
  applicationName: "Chefix",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Chefix",
    url: SITE_URL,
    title: "Chefix | O Sistema Inteligente para o Setor de Alimentação",
    description:
      "Gestão completa para o setor de alimentação. Assine online e comece hoje.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chefix | O Sistema Inteligente para o Setor de Alimentação",
    description:
      "Gestão completa para o setor de alimentação. Assine online e comece hoje.",
  },
  robots: { index: true, follow: true },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chefix",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "SaaS de gestão operacional e financeira para o setor de alimentação.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('chefix-theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <BrandSymbol />
        {children}
        <Reveal />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
