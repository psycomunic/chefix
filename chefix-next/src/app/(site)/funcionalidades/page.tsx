import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description:
    "Os 8 módulos da Chefix: fichas técnicas, precificação, estoque, compras, desperdício, checklist, etiquetagem e guia de produção.",
  alternates: { canonical: "/funcionalidades" },
};

export default function FuncionalidadesPage() {
  return (
    <div className="pg-func">
      {/* HERO */}
      <section className="page-hero center">
        <div className="wrap">
          <span className="eyebrow">Controle de verdade, não achismo</span>
          <h1>Seu restaurante perde dinheiro todo dia sem você ver.</h1>
          <p className="lead">O Chefix mostra onde. São 8 módulos que conversam entre si: fichas técnicas, estoque, compras, CMV em tempo real e etiquetagem, com a margem real de cada prato sempre na sua frente.</p>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="block" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="wrap">

          {/* 1 Fichas técnicas */}
          <div className="mod-row split">
            <div>
              <span className="eyebrow">Módulo 1</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Fichas técnicas</h2>
              <p className="lead">Monte o custo de bases e pratos com foto, modo de preparo e rendimento. A margem real aparece na hora, sem planilha e sem conta de padeiro.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Custo detalhado de cada base e cada prato do cardápio</li>
                <li><span className="ck">✓</span> Foto, modo de preparo e rendimento em uma tela só</li>
                <li><span className="ck">✓</span> Margem real calculada no momento em que você monta a ficha</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Risoto de camarão <small>rende 4 porções</small></div>
                  <div className="mk-row"><span>Custo dos insumos</span><b>R$ 18,40</b></div>
                  <div className="mk-row"><span>Preço de venda</span><b>R$ 52,00</b></div>
                  <div className="mk-row"><span>Margem real</span><span className="mk-tag">64,6%</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Precificação */}
          <div className="mod-row split rev">
            <div>
              <span className="eyebrow">Módulo 2</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Precificação inteligente</h2>
              <p className="lead">Chegue no preço certo considerando lucro, custos fixos e variáveis e as taxas de cada canal de delivery. Nada de descobrir o prejuízo só no fim do mês.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Lucro desejado embutido no preço de cada item</li>
                <li><span className="ck">✓</span> Custos fixos e variáveis rateados de forma automática</li>
                <li><span className="ck">✓</span> Taxas de delivery consideradas por plataforma</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Composição do preço <small>por porção</small></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", marginBottom: "5px" }}><span>Insumos</span><b>35%</b></div><div className="bar"><i style={{ width: "35%" }}></i></div></div>
                    <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", marginBottom: "5px" }}><span>Custos fixos</span><b>20%</b></div><div className="bar"><i style={{ width: "20%" }}></i></div></div>
                    <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", marginBottom: "5px" }}><span>Taxa delivery</span><b>18%</b></div><div className="bar"><i style={{ width: "18%" }}></i></div></div>
                    <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", marginBottom: "5px" }}><span>Lucro</span><b>27%</b></div><div className="bar g"><i style={{ width: "27%" }}></i></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Estoque */}
          <div className="mod-row split">
            <div>
              <span className="eyebrow">Módulo 3</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Gestão de estoque</h2>
              <p className="lead">Entradas e saídas integradas ao restante do sistema e uma contagem simples que qualquer pessoa da equipe consegue fazer. O saldo fica sempre confiável.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Entradas e saídas integradas às fichas e às compras</li>
                <li><span className="ck">✓</span> Contagem simples, direto do celular no salão ou na câmara</li>
                <li><span className="ck">✓</span> Valor total do estoque atualizado em tempo real</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Estoque atual</div>
                  <div className="mk-row"><span>Camarão limpo</span><b>4,2 kg</b></div>
                  <div className="mk-row"><span>Arroz arbóreo</span><b>12 kg</b></div>
                  <div className="mk-row"><span>Queijo parmesão</span><span className="mk-tag or">baixo</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mod-cta"><Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link></div>

          {/* 4 Compras */}
          <div className="mod-row split rev">
            <div>
              <span className="eyebrow">Módulo 4</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Compras e cotações</h2>
              <p className="lead">Pedidos automatizados que nascem do próprio estoque. O sistema sugere o que comprar, você cota com os fornecedores e fecha pelo melhor preço.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Sugestão de pedido conectada ao saldo do estoque</li>
                <li><span className="ck">✓</span> Cotação com vários fornecedores lado a lado</li>
                <li><span className="ck">✓</span> Entrada no estoque registrada ao receber a mercadoria</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Cotação de camarão <small>por kg</small></div>
                  <div className="mk-row"><span>Fornecedor A</span><b>R$ 58,00</b></div>
                  <div className="mk-row"><span>Fornecedor B</span><span className="mk-tag">R$ 52,90</span></div>
                  <div className="mk-row"><span>Fornecedor C</span><b>R$ 61,50</b></div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Desperdício */}
          <div className="mod-row split">
            <div>
              <span className="eyebrow">Módulo 5</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Controle de desperdício</h2>
              <p className="lead">Relatórios que mostram o que foi perdido, por qual motivo, em que quantidade e quem registrou. Com o desperdício visível, a perda para de virar surpresa.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Registro por motivo, quantidade e responsável</li>
                <li><span className="ck">✓</span> Baixa automática no estoque a cada perda lançada</li>
                <li><span className="ck">✓</span> Relatórios que apontam onde o dinheiro está escorrendo</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Perdas da semana</div>
                  <div className="mk-row"><span>Vencimento</span><b>R$ 210</b></div>
                  <div className="mk-row"><span>Quebra no preparo</span><b>R$ 95</b></div>
                  <div className="mk-row"><span>Sobra de salão</span><b>R$ 47</b></div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Checklist */}
          <div className="mod-row split rev">
            <div>
              <span className="eyebrow">Módulo 6</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Checklist de atividades</h2>
              <p className="lead">As rotinas operacionais da equipe organizadas em listas claras de abertura, produção e fechamento. Cada um sabe o que fazer, e você acompanha o que foi cumprido.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Rotinas de abertura, produção e fechamento definidas</li>
                <li><span className="ck">✓</span> Responsável e horário registrados em cada tarefa</li>
                <li><span className="ck">✓</span> Acompanhamento do que foi feito, direto do painel</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Abertura da cozinha</div>
                  <ul className="mk-list">
                    <li><span className="dot">✓</span> Conferir temperatura das câmaras</li>
                    <li><span className="dot">✓</span> Higienizar bancadas e utensílios</li>
                    <li><span className="dot">✓</span> Separar mise en place do dia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mod-cta"><Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link></div>

          {/* 7 Etiquetagem */}
          <div className="mod-row split">
            <div>
              <span className="eyebrow">Módulo 7</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Etiquetagem automática</h2>
              <p className="lead">Etiquetas em conformidade com a Vigilância Sanitária sem ninguém precisar digitar validade. O sistema calcula a data e imprime em um toque.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Validade calculada de forma automática por produto</li>
                <li><span className="ck">✓</span> Padrão exigido pela Vigilância Sanitária já pronto</li>
                <li><span className="ck">✓</span> Impressão em um clique, sem digitação manual</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Etiqueta gerada</div>
                  <div className="mk-row"><span>Produto</span><b>Molho de tomate</b></div>
                  <div className="mk-row"><span>Manipulação</span><b>24/07</b></div>
                  <div className="mk-row"><span>Validade</span><span className="mk-tag">27/07</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Guia de produção */}
          <div className="mod-row split rev">
            <div>
              <span className="eyebrow">Módulo 8</span>
              <h2 style={{ color: "var(--navy)", margin: "14px 0 12px" }}>Guia de produção</h2>
              <p className="lead">Fichas com foto e rendimento que padronizam a cozinha. O prato sai igual independente de quem está na praça, do primeiro ao último cliente.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Foto de referência para cada etapa do preparo</li>
                <li><span className="ck">✓</span> Rendimento e porcionamento no padrão da casa</li>
                <li><span className="ck">✓</span> Padronização que mantém a qualidade constante</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mock">
                <div className="mk-card">
                  <div className="mk-h">Ficha de produção <small>base de molho</small></div>
                  <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                    <div className="mk-tab">foto 1</div>
                    <div className="mk-tab">foto 2</div>
                    <div className="mk-tab">foto 3</div>
                  </div>
                  <div className="mk-row"><span>Rendimento</span><b>3,5 litros</b></div>
                  <div className="mk-row"><span>Porções</span><b>28 un</b></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mod-cta"><Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link></div>

        </div>
      </section>

      {/* INTELIGÊNCIA */}
      <section className="block bg-mist">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Inteligência que fecha a conta</span>
            <h2>Os números que decidem o seu mês, sempre à vista</h2>
            <p className="lead">Enquanto a operação roda, a Chefix transforma cada lançamento em indicador. Você abre o painel e sabe exatamente onde está o lucro e onde está o risco.</p>
          </div>
          <div className="grid g-3">
            <div className="card hoverable">
              <h3>CMV em tempo real</h3>
              <p>O Custo da Mercadoria Vendida atualizado a cada venda e cada compra, para você comparar com a meta sem esperar o fechamento.</p>
            </div>
            <div className="card hoverable">
              <h3>Valor de estoque</h3>
              <p>Quanto dinheiro está parado na sua despensa neste exato momento, calculado pelo último preço de compra de cada insumo.</p>
            </div>
            <div className="card hoverable">
              <h3>Alertas de vencimento</h3>
              <p>Avisos do que está perto de vencer, para girar o estoque na hora certa e cortar a perda antes que ela aconteça.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band">
            <h2>8 módulos, sem fidelidade, por R$ 290 por mês</h2>
            <p>Mais de 100 restaurantes já gerenciam custo, estoque e cardápio com a Chefix. Comece hoje e cancele quando quiser.</p>
            <Link href="/checkout" className="btn btn-primary btn-lg">Comece grátis</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
