"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { APP_URL } from "@/lib/site";
import type {
  BoletoCharge,
  BillingType,
  PixCharge,
} from "@/lib/payments/types";
import QrPlaceholder from "./QrPlaceholder";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "approved" } // cartão aprovado / acesso liberado
  | { kind: "pix"; charge: PixCharge }
  | { kind: "boleto"; charge: BoletoCharge };

const MASK_CARD = (v: string) =>
  v
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();

const MASK_EXP = (v: string) =>
  v
    .replace(/\D/g, "")
    .slice(0, 4)
    .replace(/(\d{2})(?=\d)/, "$1/");

export default function CheckoutClient() {
  const [method, setMethod] = useState<BillingType>("card");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [copied, setCopied] = useState(false);

  // Passo 1 — dados do cliente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [establishment, setEstablishment] = useState("");

  // Cartão (número/cvv/validade NÃO vão ao servidor em produção — ver nota)
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [coupon, setCoupon] = useState("");

  const last4 = useMemo(
    () => cardNumber.replace(/\D/g, "").slice(-4).padStart(4, "•"),
    [cardNumber],
  );

  async function createCustomer(): Promise<string> {
    const res = await fetch("/api/checkout/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, whatsapp, cpfCnpj, establishment }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error ?? "Falha ao registrar seus dados.");
    return data.customer.id as string;
  }

  function validateStep1(): string | null {
    if (!name.trim()) return "Informe seu nome completo.";
    if (!/.+@.+\..+/.test(email)) return "Informe um e-mail válido.";
    if (cpfCnpj.replace(/\D/g, "").length < 11)
      return "Informe um CPF ou CNPJ válido.";
    return null;
  }

  async function handleSubmit() {
    const invalid = validateStep1();
    if (invalid) {
      setStatus({ kind: "error", message: invalid });
      return;
    }
    setStatus({ kind: "loading" });
    try {
      const customerId = await createCustomer();

      if (method === "card") {
        // ATENÇÃO (produção): o cartão deve ser tokenizado NO NAVEGADOR pelo SDK
        // do provedor (Asaas.js / MercadoPago.js). O backend recebe apenas o token.
        // Aqui, em modo mock, geramos um pseudo-token a partir dos últimos dígitos.
        const token = `tok_${cardNumber.replace(/\D/g, "").slice(-4) || "0000"}`;
        const res = await fetch("/api/checkout/subscription", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customerId,
            card: { token, installments: 1 },
            coupon,
          }),
        });
        const data = await res.json();
        if (!res.ok || data.result?.status === "failed") {
          throw new Error(
            data.result?.message ??
              data.error ??
              "Cartão recusado. Confira os dados ou tente outro cartão.",
          );
        }
        setStatus({ kind: "approved" });
      } else if (method === "pix") {
        const res = await fetch("/api/checkout/pix", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerId, coupon }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Falha ao gerar PIX.");
        setStatus({ kind: "pix", charge: data.charge });
      } else {
        const res = await fetch("/api/checkout/boleto", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerId, coupon }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Falha ao gerar boleto.");
        setStatus({ kind: "boleto", charge: data.charge });
      }
    } catch (e) {
      setStatus({
        kind: "error",
        message: e instanceof Error ? e.message : "Algo deu errado. Tente novamente.",
      });
    }
  }

  // ---- Estado de sucesso (cartão aprovado) ----
  if (status.kind === "approved") {
    return (
      <div className="co-result">
        <div className="co-result-ic ok">✓</div>
        <h2>Pagamento aprovado. Bem-vindo ao Chefix!</h2>
        <p>
          Sua assinatura está ativa. O acesso ao sistema foi liberado. Você vai
          receber os dados de acesso por e-mail.
        </p>
        <a href={APP_URL} className="btn btn-primary btn-lg">
          Acessar o Chefix →
        </a>
      </div>
    );
  }

  const pending = status.kind === "loading";

  return (
    <div className="co-grid">
      {/* ============ LEFT ============ */}
      <div className="co-main">
        {/* STEP 1 */}
        <div className="co-step">
          <div className="st-h">
            <span className="st-n">1</span>
            <h2>Seus dados</h2>
          </div>
          <div className="field">
            <label htmlFor="co-name">Nome completo</label>
            <input
              id="co-name"
              type="text"
              placeholder="Como no documento"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field two">
            <div>
              <label htmlFor="co-email">E-mail</label>
              <input
                id="co-email"
                type="email"
                placeholder="voce@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="co-wpp">WhatsApp</label>
              <input
                id="co-wpp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
          </div>
          <div className="field two">
            <div>
              <label htmlFor="co-doc">CPF / CNPJ</label>
              <input
                id="co-doc"
                type="text"
                inputMode="numeric"
                placeholder="Somente números"
                value={cpfCnpj}
                onChange={(e) => setCpfCnpj(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="co-estab">Nome do estabelecimento</label>
              <input
                id="co-estab"
                type="text"
                placeholder="Seu negócio"
                value={establishment}
                onChange={(e) => setEstablishment(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="co-step">
          <div className="st-h">
            <span className="st-n">2</span>
            <h2>Forma de pagamento</h2>
          </div>

          <div className="pay-methods">
            <button
              type="button"
              className={`pay-tab${method === "card" ? " active" : ""}`}
              onClick={() => setMethod("card")}
            >
              <div className="pm-ic">
                <svg viewBox="0 0 24 24" width="26" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <b>Cartão</b>
              <small>Aprovação na hora</small>
            </button>
            <button
              type="button"
              className={`pay-tab${method === "pix" ? " active" : ""}`}
              onClick={() => setMethod("pix")}
            >
              <div className="pm-ic">
                <svg viewBox="0 0 24 24" width="26" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l4 4-4 4-4-4 4-4zM2 12l4-4 4 4-4 4-4-4zm20 0l-4-4-4 4 4 4 4-4zM12 14l4 4-4 4-4-4 4-4z" />
                </svg>
              </div>
              <b>PIX</b>
              <small>Liberação imediata</small>
            </button>
            <button
              type="button"
              className={`pay-tab${method === "boleto" ? " active" : ""}`}
              onClick={() => setMethod("boleto")}
            >
              <div className="pm-ic">
                <svg viewBox="0 0 24 24" width="26" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 5v14M7 5v14M10 5v14M14 5v14M17 5v14M20 5v14" />
                </svg>
              </div>
              <b>Boleto</b>
              <small>Compensa em 1 a 2 dias</small>
            </button>
          </div>

          {/* CARD PANEL */}
          {method === "card" && (
            <div className="pay-panel active">
              <div className="card-visual">
                <span className="card-brand-logo">VISA</span>
                <div className="chip" />
                <div className="cnum">•••• •••• •••• {last4}</div>
                <div className="crow">
                  <span>
                    TITULAR<b>{cardName.toUpperCase() || "SEU NOME"}</b>
                  </span>
                  <span>
                    VALIDADE<b>{cardExp || "MM/AA"}</b>
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="cc-num">Número do cartão</label>
                <input
                  id="cc-num"
                  type="text"
                  inputMode="numeric"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(MASK_CARD(e.target.value))}
                />
              </div>
              <div className="field">
                <label htmlFor="cc-name">Nome impresso no cartão</label>
                <input
                  id="cc-name"
                  type="text"
                  placeholder="Igual ao cartão"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              <div className="field three">
                <div>
                  <label htmlFor="cc-exp">Validade</label>
                  <input
                    id="cc-exp"
                    type="text"
                    placeholder="MM/AA"
                    value={cardExp}
                    onChange={(e) => setCardExp(MASK_EXP(e.target.value))}
                  />
                </div>
                <div>
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    id="cc-cvv"
                    type="text"
                    inputMode="numeric"
                    placeholder="123"
                    maxLength={4}
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
                <div>
                  <label htmlFor="cc-parc">Parcelas</label>
                  <select id="cc-parc" defaultValue="1">
                    <option value="1">1x de R$ 290,00 (sem juros)</option>
                  </select>
                </div>
              </div>
              <p className="hint">
                🔒 Os dados do cartão são enviados diretamente ao gateway
                certificado PCI-DSS e tokenizados no seu navegador. O Chefix nunca
                recebe o número do seu cartão.
              </p>
            </div>
          )}

          {/* PIX PANEL */}
          {method === "pix" && (
            <div className="pay-panel active">
              <div className="pix-box">
                <span className="badge-soft">
                  ⚡ Acesso liberado assim que o PIX cair
                </span>
                <div className="pix-qr">
                  {status.kind === "pix" && status.charge.qrCodeImage ? (
                    <Image
                      src={status.charge.qrCodeImage}
                      alt="QR Code PIX"
                      width={180}
                      height={180}
                      unoptimized
                    />
                  ) : (
                    <QrPlaceholder />
                  )}
                </div>
                <div className="pix-code">
                  <input
                    type="text"
                    readOnly
                    value={
                      status.kind === "pix"
                        ? status.charge.copyPaste
                        : "Clique em finalizar para gerar o código PIX"
                    }
                  />
                  <button
                    className="btn btn-ghost"
                    type="button"
                    disabled={status.kind !== "pix"}
                    onClick={() => {
                      if (status.kind === "pix") {
                        navigator.clipboard?.writeText(status.charge.copyPaste);
                        setCopied(true);
                      }
                    }}
                  >
                    {copied ? "Copiado ✓" : "Copiar"}
                  </button>
                </div>
                <div className="info-row">
                  Escaneie com o app do seu banco ou use o PIX copia e cola.
                </div>
              </div>
            </div>
          )}

          {/* BOLETO PANEL */}
          {method === "boleto" && (
            <div className="pay-panel active">
              <div className="boleto-box">
                <span
                  className="badge-soft"
                  style={{ background: "#fdf1e6", color: "var(--orange-600)" }}
                >
                  🧾 Compensação em 1 a 2 dias úteis
                </span>
                <p style={{ margin: "16px 0", color: "var(--slate)", fontSize: 15 }}>
                  O boleto será gerado após a confirmação dos dados. Seu acesso é
                  liberado automaticamente assim que o pagamento for compensado.
                </p>
                {status.kind === "boleto" && (
                  <div className="boleto-line">
                    <label>Linha digitável</label>
                    <div className="pix-code">
                      <input type="text" readOnly value={status.charge.digitableLine} />
                      <button
                        className="btn btn-ghost"
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(status.charge.digitableLine);
                          setCopied(true);
                        }}
                      >
                        {copied ? "Copiado ✓" : "Copiar"}
                      </button>
                    </div>
                    {status.charge.pdfUrl && (
                      <a
                        href={status.charge.pdfUrl}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-ghost btn-block"
                        style={{ marginTop: 12 }}
                      >
                        Abrir boleto em PDF
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {status.kind === "error" && (
          <div className="co-error" role="alert">
            {status.message}
          </div>
        )}

        <button
          className="btn btn-primary btn-lg btn-block"
          style={{ fontSize: 17, padding: 18 }}
          onClick={handleSubmit}
          disabled={pending}
        >
          {pending
            ? "Processando..."
            : method === "card"
              ? "Finalizar assinatura · R$ 290,00"
              : method === "pix"
                ? "Gerar PIX · R$ 290,00"
                : "Gerar boleto · R$ 290,00"}
        </button>
        <div className="secure-note">
          <svg viewBox="0 0 24 24" width="16" fill="none" stroke="#5b6b83" strokeWidth="2">
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 018 0v3" />
          </svg>{" "}
          Seus dados de pagamento são criptografados e processados por gateway
          certificado PCI-DSS. O Chefix não armazena o número do seu cartão.
        </div>
      </div>

      {/* ============ RIGHT (SUMMARY) ============ */}
      <aside className="co-summary">
        <div className="summary-card">
          <div className="sc-h">
            <div className="plan">Plano escolhido</div>
            <div style={{ fontSize: 20, fontWeight: 800, margin: "2px 0 6px" }}>
              Chefix Completo
            </div>
            <div className="pr">
              R$ 290,00 <small>/mês</small>
            </div>
          </div>
          <div className="sc-b">
            <div className="sum-row">
              <span>Assinatura mensal</span>
              <span>R$ 290,00</span>
            </div>
            <div className="sum-row">
              <span>Implantação assistida</span>
              <span style={{ color: "var(--green)", fontWeight: 700 }}>Grátis</span>
            </div>
            <div className="coupon">
              <input
                type="text"
                placeholder="Cupom de desconto"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="btn btn-ghost" type="button">
                Aplicar
              </button>
            </div>
            <div className="sum-row total">
              <span>Total hoje</span>
              <span>R$ 290,00</span>
            </div>
            <ul className="sum-incl">
              <li>
                <span className="ck">✓</span> Todos os 8 módulos operacionais
              </li>
              <li>
                <span className="ck">✓</span> CMV em tempo real e valor de estoque
              </li>
              <li>
                <span className="ck">✓</span> Etiquetagem e alertas de vencimento
              </li>
              <li>
                <span className="ck">✓</span> Usuários da equipe inclusos
              </li>
              <li>
                <span className="ck">✓</span> Suporte e implantação assistida
              </li>
              <li>
                <span className="ck">✓</span> Sem fidelidade, cancele quando quiser
              </li>
            </ul>
          </div>
        </div>
        <div className="trust-badges">
          <span className="tb">🔒 Pagamento seguro</span>
          <span className="tb">✓ Dados protegidos (LGPD)</span>
          <span className="tb">↩ Cancelamento livre</span>
        </div>
        <p className="hint center" style={{ marginTop: 14 }}>
          É cliente Proattiva ou Torres Fintech? Sua assinatura pode ser{" "}
          <a
            href="/consultoria"
            style={{ color: "var(--orange-600)", fontWeight: 600 }}
          >
            gratuita
          </a>
          .
        </p>
      </aside>
    </div>
  );
}
