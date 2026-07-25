import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre o Chefix",
  description:
    "O Chefix nasceu da união de três referências que vivem o setor de alimentação por dentro, da cozinha à contabilidade, com a missão de profissionalizar o setor.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Sobre o Chefix
          </div>
          <span className="eyebrow">Sobre o Chefix</span>
          <h1>Três referências unidas para transformar a gestão do setor</h1>
          <p className="lead">O Chefix não veio de fora do setor de alimentação, ele nasceu de dentro. Reunimos operação, finanças e mercado numa plataforma só para dar ao seu negócio a gestão que ele sempre precisou, com quem entende de verdade o dia a dia da cozinha ao caixa.</p>
        </div>
      </section>

      {/* NOSSA ORIGEM */}
      <section className="block">
        <div className="wrap">
          <div className="split">
            <div style={{ minWidth: "0" }}>
              <span className="eyebrow">Nossa origem</span>
              <h2 style={{ margin: "14px 0 16px" }}>Feito por quem vive o setor por dentro</h2>
              <p style={{ color: "#2c384c", marginBottom: "14px" }}>O Chefix nasceu da união de três referências que vivem o setor de alimentação por dentro, da cozinha à contabilidade. Cada uma trouxe uma peça do quebra-cabeça: a operação segura, o controle financeiro e a leitura de mercado.</p>
              <p style={{ color: "#2c384c" }}>Nossa missão é uma só: profissionalizar o setor de alimentação. Queremos que padarias, restaurantes, escolas e indústrias tenham as mesmas ferramentas das grandes redes, num sistema simples, prático e que cabe no bolso.</p>
            </div>
            <div className="split-media" style={{ minWidth: "0", display: "grid", placeItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <svg className="mark" style={{ width: "80px", height: "80px", color: "var(--navy)", margin: "0 auto 16px" }}><use href="#chefix-mark" /></svg>
                <p style={{ color: "var(--navy)", fontWeight: "800", fontSize: "20px", letterSpacing: "-.02em" }}>Da cozinha à contabilidade</p>
                <p className="muted" style={{ fontSize: "14.5px", marginTop: "6px" }}>Operação, finanças e mercado num sistema só.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNDADORES */}
      <section className="block bg-mist">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Quem está por trás</span>
            <h2>As três referências que fundaram o Chefix</h2>
            <p className="lead">Cada fundador cuida de uma frente, e juntos entregam uma visão completa do seu negócio.</p>
          </div>
          <div className="grid g-3">
            <div className="card hoverable" style={{ minWidth: "0" }}>
              <span className="pill" style={{ marginBottom: "14px" }}>Operação e segurança</span>
              <h3 style={{ fontSize: "19px" }}>Proattiva</h3>
              <p>Equipe de nutricionistas focada em boas práticas, gestão de estoque, controle de desperdício, fichas técnicas e etiquetagem. É a base que mantém sua operação segura e organizada.</p>
            </div>
            <div className="card hoverable" style={{ minWidth: "0" }}>
              <span className="pill" style={{ marginBottom: "14px" }}>Financeiro e contábil</span>
              <h3 style={{ fontSize: "19px" }}>Torres Fintech</h3>
              <p>Especialista em gestão financeira e contábil, do BPO financeiro à contabilidade estratégica. Traz clareza sobre números, custos e resultado para você decidir com segurança.</p>
            </div>
            <div className="card hoverable" style={{ minWidth: "0" }}>
              <span className="pill" style={{ marginBottom: "14px" }}>Mercado e experiência</span>
              <h3 style={{ fontSize: "19px" }}>Lucas Vrau</h3>
              <p>Influenciador digital e empresário do setor, com a visão prática do dia a dia da operação. Garante que o Chefix fale a língua de quem está no balcão e na cozinha.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DE NÚMEROS */}
      <section className="block bg-navy">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Prova de mercado</span>
            <h2>Presença que já se espalhou pelo Brasil</h2>
          </div>
          <div className="grid g-3">
            <div style={{ textAlign: "center", minWidth: "0" }}>
              <div style={{ fontSize: "44px", fontWeight: "800", letterSpacing: "-.02em", color: "#fff" }}>+100</div>
              <p className="lead" style={{ marginTop: "6px" }}>restaurantes atendidos e operando com o Chefix</p>
            </div>
            <div style={{ textAlign: "center", minWidth: "0" }}>
              <div style={{ fontSize: "26px", fontWeight: "800", letterSpacing: "-.01em", color: "#fff", lineHeight: "1.25" }}>Padarias, escolas, pizzarias, hamburguerias, indústrias e buffets</div>
              <p className="lead" style={{ marginTop: "6px" }}>tipos de operação que atendemos todos os dias</p>
            </div>
            <div style={{ textAlign: "center", minWidth: "0" }}>
              <div style={{ fontSize: "44px", fontWeight: "800", letterSpacing: "-.02em", color: "#fff" }}>Brasil</div>
              <p className="lead" style={{ marginTop: "6px" }}>cobertura nacional, atendimento em todo o país</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band">
            <h2>Pronto para profissionalizar o seu negócio?</h2>
            <p>Comece hoje a usar o sistema feito por quem entende o setor de alimentação de ponta a ponta.</p>
            <Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link>
          </div>
        </div>
      </section>
    </>
  );
}
