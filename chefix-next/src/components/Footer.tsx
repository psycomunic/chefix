import Link from "next/link";
import Logo from "./Logo";
import { CNPJ, FOOTER_COLS, WHATSAPP_URL } from "@/lib/site";

/** Rodapé institucional. */
export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo tone="white" />
            <p>
              O sistema inteligente para o setor de alimentação. Gestão completa,
              prática e lucrativa, feita por quem vive a operação.
            </p>
            <div className="social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2c2.7 0 3 0 4.1.1 1 .1 1.7.2 2.3.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.2.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.6.2-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.2-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c.1-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.6-.2 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.8 7a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                </svg>
              </a>
              <a href={WHATSAPP_URL} aria-label="WhatsApp" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1s-.6.8-.8 1c-.1.1-.3.2-.5 0-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4s0-.3 0-.4c0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <path d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
                </svg>
              </a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className="foot-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((l) =>
                l.external ? (
                  <a key={l.label} href={l.href}>
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.label} href={l.href}>
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="foot-bot">
          <span>
            © 2026 Chefix · Todos os direitos reservados. · CNPJ {CNPJ}
          </span>
          <span>
            <Link href="/privacidade">Política de Privacidade</Link> ·{" "}
            <Link href="/termos">Termos de Uso</Link> · www.chefix.com.br
          </span>
        </div>
      </div>
    </footer>
  );
}
