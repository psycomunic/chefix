import type { Metadata } from "next";
import Link from "next/link";
import CheckoutClient from "@/components/checkout/CheckoutClient";
import Logo from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finalizar assinatura",
  description:
    "Assine o Chefix Completo por R$ 290/mês. Cartão, PIX ou boleto, com pagamento seguro e sem fidelidade.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/checkout" },
};

export default function CheckoutPage() {
  return (
    <div className="checkout-wrap">
      {/* top bar enxuto */}
      <div className="co-top">
        <div className="wrap">
          <Logo />
          <div className="secure">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 018 0v3" />
            </svg>{" "}
            Ambiente 100% seguro e criptografado
          </div>
          <Link href="/" className="co-back">
            ← Voltar ao site
          </Link>
        </div>
      </div>

      <div className="wrap">
        <div className="co-title">
          <span className="eyebrow">Comece grátis</span>
          <h1>Você está a um passo de profissionalizar sua cozinha</h1>
          <p>
            7 dias grátis do Chefix Completo. Você só é cobrado depois do período
            de teste. Sem fidelidade, cancele quando quiser.
          </p>
          <div className="steps-mini">
            <span className="dot">1</span> Seus dados <span className="ln" />
            <span className="dot">2</span> Pagamento <span className="ln" />
            <span className="dot" style={{ background: "var(--orange)" }}>
              3
            </span>{" "}
            Acesso liberado
          </div>
        </div>

        <CheckoutClient />
      </div>

      <div className="co-foot">
        Precisa de ajuda para assinar?{" "}
        <a
          href={WHATSAPP_URL}
          style={{ fontWeight: 700, color: "var(--orange-600)" }}
        >
          Fale no WhatsApp
        </a>{" "}
        · <Link href="/privacidade">Privacidade</Link> ·{" "}
        <Link href="/termos">Termos</Link> · © 2026 Chefix
      </div>
    </div>
  );
}
