import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Planos simples e diretos do Chefix. Plataforma completa por R$ 290/mês, sem fidelidade, e gratuita para clientes de consultoria da Proattiva e da Torres Fintech.",
  alternates: { canonical: "/planos" },
};

export default function PlanosPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="page-hero center">
        <div className="wrap">
          <span className="eyebrow">Planos</span>
          <h1>Gestão profissional ao seu alcance</h1>
          <p className="lead">Preço simples e sem letras miúdas: R$ 290 por mês, com todos os módulos inclusos e sem fidelidade. E se você já é cliente de consultoria da Proattiva ou da Torres Fintech, a plataforma completa sai de graça enquanto o contrato estiver ativo.</p>
        </div>
      </section>

      {/* ================= PLANOS ================= */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Escolha seu plano</span>
            <h2>Um preço, tudo incluso</h2>
            <p className="lead">Mais de 100 restaurantes já usam o Chefix para controlar CMV, estoque e validade. Comece hoje, cancele quando quiser.</p>
          </div>

          <div className="grid g-3">
            {/* Plano destaque */}
            <div className="card hoverable" style={{ borderColor: "var(--orange)", boxShadow: "var(--shadow-md)", position: "relative", display: "flex", flexDirection: "column", minWidth: "0" }}>
              <span className="pill" style={{ position: "absolute", top: "-13px", left: "26px", background: "var(--orange)", color: "#fff", borderColor: "var(--orange)" }}>Mais popular</span>
              <h3 style={{ marginTop: "8px" }}>Chefix Completo</h3>
              <p style={{ color: "var(--slate)", fontSize: "14.5px" }}>Para restaurantes, bares, padarias e cozinhas que querem operar no lucro.</p>
              <div style={{ margin: "18px 0 6px", fontSize: "42px", fontWeight: "800", letterSpacing: "-.02em", color: "var(--navy)" }}>R$ 290<span style={{ fontSize: "16px", color: "var(--slate)", fontWeight: "600" }}>/mês</span></div>
              <p style={{ fontSize: "13px", color: "var(--slate)", marginBottom: "20px" }}>Sem fidelidade. Cancele quando quiser.</p>
              <ul className="checklist" style={{ marginTop: "0", marginBottom: "24px" }}>
                <li><span className="ck">✓</span>Todos os 8 módulos operacionais</li>
                <li><span className="ck">✓</span>CMV em tempo real e valor de estoque</li>
                <li><span className="ck">✓</span>Etiquetagem e alertas de vencimento</li>
                <li><span className="ck">✓</span>Usuários da equipe inclusos</li>
                <li><span className="ck">✓</span>Suporte e implantação assistida</li>
                <li><span className="ck">✓</span>Sem fidelidade e sem multa</li>
              </ul>
              <Link href="/checkout" className="btn btn-primary btn-block" style={{ marginTop: "auto" }}>Comece grátis</Link>
            </div>

            {/* Proattiva */}
            <div className="card hoverable" style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
              <h3 style={{ marginTop: "8px" }}>Clientes Proattiva</h3>
              <p style={{ color: "var(--slate)", fontSize: "14.5px" }}>Para quem já contrata a consultoria da Proattiva.</p>
              <div style={{ margin: "18px 0 6px", fontSize: "42px", fontWeight: "800", letterSpacing: "-.02em", color: "var(--navy)" }}>R$ 0<span style={{ fontSize: "16px", color: "var(--slate)", fontWeight: "600" }}>/mês</span></div>
              <p style={{ fontSize: "13px", color: "var(--slate)", marginBottom: "20px" }}>Gratuito enquanto o contrato estiver ativo.</p>
              <ul className="checklist" style={{ marginTop: "0", marginBottom: "24px" }}>
                <li><span className="ck">✓</span>Acesso 100% gratuito à plataforma</li>
                <li><span className="ck">✓</span>Plataforma completa, os 8 módulos</li>
                <li><span className="ck">✓</span>Aba Proattiva integrada</li>
                <li><span className="ck">✓</span>Válido enquanto a consultoria estiver ativa</li>
              </ul>
              <Link href="/contato" className="btn btn-ghost btn-block" style={{ marginTop: "auto" }}>Falar com a Proattiva</Link>
            </div>

            {/* Torres Fintech */}
            <div className="card hoverable" style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
              <h3 style={{ marginTop: "8px" }}>Clientes Torres Fintech</h3>
              <p style={{ color: "var(--slate)", fontSize: "14.5px" }}>Para quem já usa o BPO financeiro da Torres Fintech.</p>
              <div style={{ margin: "18px 0 6px", fontSize: "42px", fontWeight: "800", letterSpacing: "-.02em", color: "var(--navy)" }}>R$ 0<span style={{ fontSize: "16px", color: "var(--slate)", fontWeight: "600" }}>/mês</span></div>
              <p style={{ fontSize: "13px", color: "var(--slate)", marginBottom: "20px" }}>Isenção total para clientes em BPO financeiro.</p>
              <ul className="checklist" style={{ marginTop: "0", marginBottom: "24px" }}>
                <li><span className="ck">✓</span>Isenção total da mensalidade</li>
                <li><span className="ck">✓</span>Plataforma completa, os 8 módulos</li>
                <li><span className="ck">✓</span>Aba Torres Fintech integrada</li>
                <li><span className="ck">✓</span>Válido enquanto o BPO estiver ativo</li>
              </ul>
              <Link href="/contato" className="btn btn-ghost btn-block" style={{ marginTop: "auto" }}>Falar com a Torres</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TABELA COMPARATIVA ================= */}
      <section className="block bg-mist">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Comparativo</span>
            <h2>O que está incluso</h2>
            <p className="lead">Todos os planos dão acesso à plataforma completa. A diferença está no preço e na aba de consultoria.</p>
          </div>
          <div style={{ overflowX: "auto", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "#fff" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px", fontSize: "14.5px" }}>
              <thead>
                <tr style={{ background: "var(--navy)", color: "#fff", textAlign: "left" }}>
                  <th style={{ padding: "16px 20px", fontWeight: "700" }}>Recurso</th>
                  <th style={{ padding: "16px 20px", fontWeight: "700", textAlign: "center" }}>Chefix Completo</th>
                  <th style={{ padding: "16px 20px", fontWeight: "700", textAlign: "center" }}>Proattiva</th>
                  <th style={{ padding: "16px 20px", fontWeight: "700", textAlign: "center" }}>Torres Fintech</th>
                </tr>
              </thead>
              <tbody style={{ color: "#2c384c" }}>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Mensalidade</td><td style={{ padding: "14px 20px", textAlign: "center" }}>R$ 290</td><td style={{ padding: "14px 20px", textAlign: "center" }}>R$ 0</td><td style={{ padding: "14px 20px", textAlign: "center" }}>R$ 0</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>8 módulos operacionais</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>CMV em tempo real</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Valor de estoque</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Etiquetagem e alertas de vencimento</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Usuários da equipe inclusos</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Suporte e implantação assistida</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Aba Proattiva</td><td style={{ padding: "14px 20px", textAlign: "center" }}>Não</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>Não</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Aba Torres Fintech</td><td style={{ padding: "14px 20px", textAlign: "center" }}>Não</td><td style={{ padding: "14px 20px", textAlign: "center" }}>Não</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
                <tr style={{ borderTop: "1px solid var(--line)" }}><td style={{ padding: "14px 20px" }}>Sem fidelidade</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td><td style={{ padding: "14px 20px", textAlign: "center" }}>✓</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="block">
        <div className="wrap" style={{ maxWidth: "820px" }}>
          <div className="sec-head">
            <span className="eyebrow">Dúvidas de cobrança</span>
            <h2>Perguntas frequentes</h2>
          </div>

          <details className="acc">
            <summary>Quais são as formas de pagamento? <span className="pm">+</span></summary>
            <div className="a-body">Você pode assinar no cartão de crédito, no PIX ou no boleto bancário. No cartão, a cobrança é recorrente todo mês, de forma automática. No PIX e no boleto, enviamos a cobrança a cada ciclo.</div>
          </details>

          <details className="acc">
            <summary>Como funciona o cancelamento? <span className="pm">+</span></summary>
            <div className="a-body">Não temos fidelidade. Você cancela quando quiser, direto pelo painel ou falando com o suporte, sem multa e sem burocracia. O acesso continua até o fim do ciclo já pago.</div>
          </details>

          <details className="acc">
            <summary>O que está incluso na mensalidade? <span className="pm">+</span></summary>
            <div className="a-body">Tudo: os 8 módulos operacionais, CMV em tempo real, valor de estoque, etiquetagem, alertas de vencimento, usuários da equipe, além de suporte e implantação assistida. Não há cobrança por módulo ou por usuário adicional.</div>
          </details>

          <details className="acc">
            <summary>Como funciona a gratuidade para clientes de consultoria? <span className="pm">+</span></summary>
            <div className="a-body">Clientes da Proattiva (consultoria) e da Torres Fintech (BPO financeiro) usam a plataforma completa sem pagar mensalidade enquanto o contrato de consultoria estiver ativo. Você ainda ganha a aba integrada do seu parceiro dentro do Chefix.</div>
          </details>

          <details className="acc">
            <summary>Preciso de algum equipamento especial? <span className="pm">+</span></summary>
            <div className="a-body">Não. O Chefix roda no navegador, no computador ou no celular. Para etiquetagem, você pode usar uma impressora térmica comum, mas não é obrigatório para começar a usar a plataforma.</div>
          </details>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="block tight">
        <div className="wrap">
          <div className="cta-band">
            <h2>Comece hoje</h2>
            <p>Coloque a operação no controle com CMV, estoque e validade em um só lugar. Assinatura por R$ 290 por mês, sem fidelidade.</p>
            <Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link>
          </div>
        </div>
      </section>
    </>
  );
}
