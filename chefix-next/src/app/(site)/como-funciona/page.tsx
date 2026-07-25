import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Veja como a Chefix funciona: cadastre o insumo uma vez e a informação flui por estoque, fichas técnicas, etiquetagem e desperdício. Comece em 3 passos.",
  alternates: { canonical: "/como-funciona" },
};

export default function ComoFuncionaPage() {
  return (
    <div className="pg-como">
      {/* HERO */}
      <section className="page-hero center">
        <div className="wrap">
          <span className="eyebrow">Como funciona</span>
          <h1>Cadastre uma vez, a informação flui por toda a operação</h1>
          <p className="lead">A Chefix foi feita para acabar com o retrabalho. Você lança o insumo uma única vez e ele alimenta estoque, fichas técnicas, etiquetagem e desperdício ao mesmo tempo, sempre com o custo atualizado pelo último preço de compra.</p>
        </div>
      </section>

      {/* CADASTRO ÚNICO */}
      <section className="block">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">Cadastro único, sem retrabalho</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Um insumo, todos os módulos</h2>
              <p className="lead">Digitar a mesma coisa em cinco lugares diferentes é onde a gestão trava. Na Chefix, quando você cadastra o camarão, ele já aparece no estoque, entra nas fichas técnicas, gera etiqueta com validade certa e fica pronto para o controle de desperdício.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Um único cadastro alimenta quatro módulos de uma vez</li>
                <li><span className="ck">✓</span> Preço muda em um lugar e atualiza em todos os cálculos</li>
                <li><span className="ck">✓</span> Menos digitação, menos erro, menos tempo de escritório</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="flow">
                <div className="top-card"><b>Cadastro único</b><small>camarão limpo, R$ 52,90/kg</small></div>
                <div className="stem"></div>
                <div className="branches">
                  <div className="b-card">Estoque<span>saldo e valor</span></div>
                  <div className="b-card">Fichas técnicas<span>custo do prato</span></div>
                  <div className="b-card">Etiquetagem<span>validade automática</span></div>
                  <div className="b-card">Desperdício<span>baixa de perda</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PASSOS */}
      <section className="block bg-mist">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Comece rápido</span>
            <h2>3 passos para começar</h2>
            <p className="lead">Do primeiro acesso ao CMV na tela em pouco tempo. Sem instalação complicada e sem consultor obrigatório para dar o start.</p>
          </div>
          <div className="grid g-3">
            <div className="card hoverable">
              <div className="step-n">1</div>
              <h3>Faça a contagem inicial</h3>
              <p>Registre o que já existe na sua despensa e câmaras. É a foto de partida do seu estoque, feita direto do celular pela equipe.</p>
            </div>
            <div className="card hoverable">
              <div className="step-n">2</div>
              <h3>O sistema calcula os custos</h3>
              <p>A Chefix precifica cada insumo pelo último preço de compra e distribui esse custo nas fichas técnicas de forma automática.</p>
            </div>
            <div className="card hoverable">
              <div className="step-n">3</div>
              <h3>Imprima e acompanhe</h3>
              <p>Gere etiquetas em conformidade com a Vigilância Sanitária e acompanhe o CMV em tempo real enquanto a operação roda.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link>
          </div>
        </div>
      </section>

      {/* INFO ESTRATÉGICA (NAVY) */}
      <section className="block bg-navy">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Informação estratégica em tempo real</span>
            <h2>Decisões baseadas em dados, não em achismo</h2>
            <p className="lead">Cada lançamento da operação vira indicador na hora. Você abre o painel e enxerga o que importa para proteger a margem.</p>
          </div>
          <div className="grid g-3">
            <div className="card">
              <span className="big">CMV</span>
              <h3>CMV em tempo real</h3>
              <p>O Custo da Mercadoria Vendida acompanhado a cada venda e compra, para você corrigir a rota sem esperar o fechamento do mês.</p>
            </div>
            <div className="card">
              <span className="big">R$</span>
              <h3>Valor de estoque</h3>
              <p>Quanto capital está parado na despensa agora, calculado pelo último preço de compra de cada item.</p>
            </div>
            <div className="card">
              <span className="big">!</span>
              <h3>Alertas de vencimento</h3>
              <p>Avisos do que está perto de vencer, para girar o produto na hora certa e cortar a perda antes que ela apareça no caixa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ETIQUETAGEM */}
      <section className="block">
        <div className="wrap">
          <div className="split rev">
            <div>
              <span className="eyebrow">Etiquetagem em 1 clique</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>A validade certa, sem digitar nada</h2>
              <p className="lead">Selecione o produto e imprima. A Chefix calcula a data de validade com base no cadastro do insumo e monta a etiqueta no padrão que a fiscalização pede, com nome, manipulação, validade e código.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Validade calculada de forma automática, sem risco de erro</li>
                <li><span className="ck">✓</span> Layout já em conformidade com a Vigilância Sanitária</li>
                <li><span className="ck">✓</span> Impressão em um clique, direto da tela de produção</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="label">
                <div className="lb-h"><b>Molho de tomate</b><span className="tag">Chefix</span></div>
                <div className="lb-row"><span>Manipulação</span><b>24/07/2026</b></div>
                <div className="lb-row"><span>Validade</span><b>27/07/2026</b></div>
                <div className="lb-row"><span>Responsável</span><b>Ana P.</b></div>
                <div className="barcode"></div>
                <div className="code-num">7 8901234 56789</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band">
            <h2>Pronto para tirar a sua gestão do achismo?</h2>
            <p>Mais de 100 restaurantes já rodam com a Chefix por R$ 290 por mês, sem fidelidade. Cadastre uma vez e veja a informação fluir.</p>
            <Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
