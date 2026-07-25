import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoria",
  description:
    "Quem faz consultoria com a Proattiva ou a Torres Fintech ganha um módulo sob medida dentro do Chefix e usa o sistema de graça enquanto tiver contrato ativo.",
  alternates: { canonical: "/consultoria" },
};

export default function ConsultoriaPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Consultoria
          </div>
          <span className="eyebrow">Consultoria</span>
          <h1>Consultoria e sistema no mesmo lugar</h1>
          <p className="lead">
            Quem faz consultoria com a Proattiva ou a Torres Fintech ganha um módulo sob medida dentro do
            Chefix. Enquanto o contrato de consultoria estiver ativo, você usa o sistema de graça e ainda
            tem, na mesma tela, o trabalho da sua consultoria e a gestão do dia a dia.
          </p>
        </div>
      </section>

      {/* DUAS ABAS */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Dois módulos, duas empresas</span>
            <h2>Escolha a consultoria que faz sentido para o seu negócio</h2>
            <p className="lead">
              Cada consultoria entrega um conjunto de ferramentas próprias dentro do Chefix. Você contrata a
              consultoria, o módulo aparece na sua conta e a mensalidade do sistema fica por nossa conta.
            </p>
          </div>

          <div className="grid g-2">
            {/* ABA PROATTIVA */}
            <div className="card hoverable" style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
              <span className="pill" style={{ alignSelf: "flex-start", marginBottom: "14px" }}>
                Proattiva
              </span>
              <h3 style={{ fontSize: "22px" }}>Operação e segurança alimentar</h3>
              <p style={{ marginBottom: "6px" }}>
                Equipe de nutricionistas focada em boas práticas e segurança alimentar, cuidando da sua
                operação de ponta a ponta.
              </p>
              <ul className="checklist" style={{ marginBottom: "20px" }}>
                <li>
                  <span className="ck">✓</span>
                  <span>Relatórios detalhados de visita técnica, com evidências e plano de ação.</span>
                </li>
                <li>
                  <span className="ck">✓</span>
                  <span>Controle rigoroso de documentos sanitários, com alertas de vencimento.</span>
                </li>
                <li>
                  <span className="ck">✓</span>
                  <span>Drive exclusivo do cliente para armazenamento de laudos e registros.</span>
                </li>
              </ul>
              <div
                style={{
                  background: "var(--green-bg)",
                  border: "1px solid #cdeadb",
                  borderRadius: "12px",
                  padding: "16px 18px",
                  marginTop: "auto",
                }}
              >
                <b style={{ color: "var(--green)", display: "block", marginBottom: "4px" }}>
                  Sistema 100% de graça
                </b>
                <span style={{ color: "#2c384c", fontSize: "14.5px" }}>
                  Clientes Proattiva usam o Chefix sem pagar mensalidade enquanto tiverem contrato ativo.
                </span>
              </div>
              <Link href="/contato" className="btn btn-navy btn-block" style={{ marginTop: "18px" }}>
                Falar com a Proattiva
              </Link>
            </div>

            {/* ABA TORRES FINTECH */}
            <div className="card hoverable" style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
              <span className="pill" style={{ alignSelf: "flex-start", marginBottom: "14px" }}>
                Torres Fintech
              </span>
              <h3 style={{ fontSize: "22px" }}>Gestão financeira e contábil</h3>
              <p style={{ marginBottom: "6px" }}>
                Especialista em finanças e contabilidade, transformando os números do seu negócio em decisão.
              </p>
              <ul className="checklist" style={{ marginBottom: "20px" }}>
                <li>
                  <span className="ck">✓</span>
                  <span>Módulo completo de BPO Financeiro, do contas a pagar ao fluxo de caixa.</span>
                </li>
                <li>
                  <span className="ck">✓</span>
                  <span>Integração direta com os dados contábeis, sem retrabalho de digitação.</span>
                </li>
                <li>
                  <span className="ck">✓</span>
                  <span>Dashboards financeiros de alta performance para acompanhar resultado.</span>
                </li>
              </ul>
              <div
                style={{
                  background: "var(--green-bg)",
                  border: "1px solid #cdeadb",
                  borderRadius: "12px",
                  padding: "16px 18px",
                  marginTop: "auto",
                }}
              >
                <b style={{ color: "var(--green)", display: "block", marginBottom: "4px" }}>
                  Isenção total da mensalidade
                </b>
                <span style={{ color: "#2c384c", fontSize: "14.5px" }}>
                  Clientes em BPO Financeiro têm isenção total da mensalidade do Chefix durante o contrato.
                </span>
              </div>
              <Link href="/contato" className="btn btn-navy btn-block" style={{ marginTop: "18px" }}>
                Falar com a Torres
              </Link>
            </div>
          </div>

          {/* AVISO */}
          <div
            style={{
              background: "#fff7f2",
              border: "1px solid #f5d3bc",
              borderRadius: "14px",
              padding: "20px 24px",
              marginTop: "28px",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "20px", lineHeight: "1.2" }}>💡</span>
            <p style={{ color: "#2c384c", fontSize: "15px", margin: "0" }}>
              <b style={{ color: "var(--navy)" }}>Importante:</b> cada aba só aparece para os clientes da
              respectiva empresa. O módulo da Proattiva fica visível apenas para quem tem consultoria com a
              Proattiva, e o módulo da Torres Fintech, apenas para quem contrata a Torres. Você não precisa
              configurar nada, o módulo certo é liberado na sua conta assim que o contrato começa.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA A GRATUIDADE */}
      <section className="block bg-mist">
        <div className="wrap">
          <div className="split">
            <div style={{ minWidth: "0" }}>
              <span className="eyebrow">Sem pegadinha</span>
              <h2 style={{ margin: "14px 0 14px" }}>Como funciona a gratuidade</h2>
              <p className="lead" style={{ marginBottom: "16px" }}>
                Enquanto você mantém o contrato de consultoria ativo com a Proattiva ou com a Torres Fintech,
                a mensalidade do Chefix é isenta. Você tem acesso completo ao sistema e ao módulo da sua
                consultoria, sem custo adicional.
              </p>
              <p style={{ color: "#2c384c" }}>
                Se um dia o contrato de consultoria for encerrado, você continua no Chefix normalmente,
                passando a assinar um dos nossos planos para manter tudo funcionando.
              </p>
              <Link href="/planos" className="btn btn-ghost" style={{ marginTop: "22px" }}>
                Ver planos do Chefix
              </Link>
            </div>
            <div
              className="split-media"
              style={{
                minWidth: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "var(--orange)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: "800",
                    flex: "none",
                  }}
                >
                  1
                </span>
                <span style={{ color: "#2c384c", fontSize: "15.5px" }}>
                  Você contrata a consultoria da Proattiva ou da Torres.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "var(--orange)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: "800",
                    flex: "none",
                  }}
                >
                  2
                </span>
                <span style={{ color: "#2c384c", fontSize: "15.5px" }}>
                  O módulo é liberado na sua conta do Chefix.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "var(--orange)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: "800",
                    flex: "none",
                  }}
                >
                  3
                </span>
                <span style={{ color: "#2c384c", fontSize: "15.5px" }}>
                  Você usa o sistema de graça enquanto o contrato durar.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band">
            <h2>Não é cliente de consultoria? Você também assina</h2>
            <p>
              Se você não tem contrato com a Proattiva ou a Torres Fintech, pode assinar o Chefix direto por
              R$ 290 por mês e ter toda a gestão do seu negócio numa plataforma só.
            </p>
            <Link href="/checkout" className="btn btn-primary btn-lg">
              Comece grátis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
