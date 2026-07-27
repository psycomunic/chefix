import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Chefix | O Sistema Inteligente para o Setor de Alimentação",
  description:
    "Gestão operacional e financeira para restaurantes, padarias, pizzarias e buffets. Fichas técnicas, CMV em tempo real, estoque, etiquetagem e precificação em um só lugar. Comece grátis por 7 dias.",
  alternates: { canonical: "/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso de algum equipamento especial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. O Chefix funciona no navegador e no celular. Para etiquetagem, você usa uma impressora térmica comum e a gente te orienta na configuração durante a implantação.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para começar a usar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depois da contagem inicial de estoque, você já dá o start. A implantação é assistida pela nossa equipe para que o cadastro único fique correto desde o primeiro dia.",
      },
    },
    {
      "@type": "Question",
      name: "Tenho fidelidade ou multa de cancelamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não há fidelidade. A assinatura é mensal de R$ 290 e você pode cancelar quando quiser.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">
              O sistema inteligente para o setor de alimentação
            </span>
            <h1>
              Seu restaurante <span className="hl">perde dinheiro</span> todo dia
              sem você ver.
            </h1>
            <p className="lead">
              O Chefix mostra onde. Fichas técnicas, estoque, CMV em tempo real,
              precificação e etiquetagem em uma só plataforma, criada por quem vive
              a operação de restaurante todos os dias.
            </p>
            <div className="hero-cta">
              <Link href="/checkout" className="btn btn-primary btn-lg">
                Comece grátis
              </Link>
              <a href="#como-funciona" className="btn btn-ghost btn-lg">
                Ver como funciona
              </a>
            </div>
            <p className="hero-micro">
              7 dias grátis. Depois R$ 290/mês, sem fidelidade. Cancele quando
              quiser.
            </p>
            <div className="hero-meta">
              <div className="m">
                <b>+100</b>
                <span>restaurantes atendidos</span>
              </div>
              <div className="m">
                <b>Tempo real</b>
                <span>CMV a cada venda</span>
              </div>
              <div className="m">
                <b>Brasil</b>
                <span>cobertura nacional</span>
              </div>
              <div className="m">
                <b>Sem fidelidade</b>
                <span>cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <div className="trust">
        <div className="wrap">
          <span className="lbl">Feito para toda cozinha profissional</span>
          <div className="seg">
            <span className="chip">Restaurantes</span>
            <span className="chip">Padarias</span>
            <span className="chip">Pizzarias</span>
            <span className="chip">Hamburguerias</span>
            <span className="chip">Escolas</span>
            <span className="chip">Buffets &amp; festas</span>
            <span className="chip">Indústrias</span>
          </div>
        </div>
      </div>

      {/* ============ PROBLEM ============ */}
      <section className="block problem">
        <div className="wrap">
          <div>
            <span className="eyebrow">O problema de sempre</span>
            <h2>Gestão em dez planilhas não é gestão. É torcida.</h2>
            <p>
              Quando o custo mora numa planilha, a validade num caderno e a compra
              na cabeça do gerente, a conta só fecha no fim do mês, quando já é
              tarde para agir.
            </p>
            <ul className="pain-list">
              <li>
                <span className="x">✕</span> CMV descoberto só depois que o lucro
                já foi embora
              </li>
              <li>
                <span className="x">✕</span> Retrabalho: o mesmo insumo cadastrado
                três vezes, de três jeitos
              </li>
              <li>
                <span className="x">✕</span> Perdas por vencimento que ninguém viu
                chegar
              </li>
              <li>
                <span className="x">✕</span> Preço de venda no "achismo", sem saber
                a margem real
              </li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="stack-head">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <b>O jeito antigo, espalhado em todo canto</b>
            </div>
            <div className="messy">
              <div className="file">
                <span className="fi">📊</span> controle_estoque_FINAL_v3.xlsx{" "}
                <span className="st">desatualizado</span>
              </div>
              <div className="file">
                <span className="fi">📒</span> caderno de validades{" "}
                <span className="st">manual</span>
              </div>
              <div className="file">
                <span className="fi">💬</span> pedidos no grupo do WhatsApp{" "}
                <span className="st">perdido</span>
              </div>
              <div className="file">
                <span className="fi">🧾</span> fichas técnicas soltas{" "}
                <span className="st">sem custo</span>
              </div>
              <div className="file">
                <span className="fi">🧮</span> precificação "de cabeça"{" "}
                <span className="st">risco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES (BENTO GLASS) ============ */}
      <section className="block fbento" id="funcionalidades">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Uma plataforma, controle total</span>
            <h2>Ferramentas poderosas para o controle da operação</h2>
            <p className="lead">
              Oito módulos que conversam entre si. Você cadastra uma vez e a
              informação flui do recebimento até o relatório.
            </p>
          </div>
          <div className="bento">
            <div className="bcard big">
              <div className="toparea">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                    <path d="M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" />
                    <path d="M8 11h8M8 15h5" />
                  </svg>
                </div>
                <span className="bchip">Custo por prato</span>
              </div>
              <h3>Fichas técnicas</h3>
              <p>
                Custo detalhado de bases e pratos finalizados, com foto, modo de
                preparo e rendimento. A margem real aparece na hora.
              </p>
              <div className="mini-ficha">
                <div className="mf-row">
                  <span>Muçarela (120g)</span>
                  <b>R$ 3,10</b>
                </div>
                <div className="mf-row">
                  <span>Molho base (80g)</span>
                  <b>R$ 0,74</b>
                </div>
                <div className="mf-row">
                  <span>Massa (porção)</span>
                  <b>R$ 1,05</b>
                </div>
                <div className="mf-total">
                  <span>Custo por porção</span>
                  <span className="pc">R$ 4,89 · 62%</span>
                </div>
              </div>
            </div>

            <div className="bcard b-precos">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3>Precificação inteligente</h3>
              <p>
                Lucro, custos fixos e variáveis e taxas de delivery em poucos
                cliques.
              </p>
            </div>

            <div className="bcard tall">
              <div className="toparea">
                <div className="fi">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                    <path d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4" />
                    <rect x="6" y="12" width="12" height="8" rx="1" />
                    <path d="M9 16h6M8 3v3M16 3v3" />
                  </svg>
                </div>
                <span className="bchip">1 clique</span>
              </div>
              <h3>Etiquetagem automática</h3>
              <p>
                Conformidade total com a Vigilância Sanitária, sem digitar
                validade.
              </p>
              <div className="mini-etq">
                <div className="me-top">
                  <span>MANIPULADO</span>
                  <span>Chefix ✓</span>
                </div>
                <div className="me-b">
                  <div className="pn">Molho Bolonhesa</div>
                  <div className="me-bar" />
                  <div className="me-val">
                    <small>Validade</small>
                    <b>27/07/2026</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="bcard b-estoque">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M3 7v10l9 4 9-4V7" />
                  <path d="M12 11v10" />
                </svg>
              </div>
              <h3>Gestão de estoque</h3>
              <p>Entradas e saídas integradas, de forma simples.</p>
            </div>

            <div className="bcard b-compras">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                  <circle cx="9" cy="20" r="1.6" />
                  <circle cx="18" cy="20" r="1.6" />
                  <path d="M2 3h3l2.6 13h11l2-9H6" />
                </svg>
              </div>
              <h3>Compras e cotações</h3>
              <p>Pedidos automatizados, conectados ao estoque.</p>
            </div>

            <div className="bcard b-desperd">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                  <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
                  <path d="M10 11v5M14 11v5" />
                </svg>
              </div>
              <h3>Controle de desperdício</h3>
              <p>Relatórios com motivo, quantidade e responsável.</p>
            </div>

            <div className="bcard b-checklist">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M8 10l2 2 3-4M8 16h8" />
                </svg>
              </div>
              <h3>Checklist de atividades</h3>
              <p>Rotinas da equipe organizadas todos os dias.</p>
            </div>

            <div className="bcard b-guia">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>
              <h3>Guia de produção</h3>
              <p>Fichas com foto e rendimento no padrão da cozinha.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FLOW (cadastro único) ============ */}
      <section className="block flow" id="como-funciona">
        <div className="wrap">
          <div className="flow-visual">
            <div className="insumos-panel">
              <div className="ip-head">
                <div className="ip-title">
                  <span className="ip-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M3 7l9-4 9 4-9 4-9-4z" />
                      <path d="M3 7v10l9 4 9-4V7" />
                    </svg>
                  </span>
                  Insumos
                  <span className="ip-tag">Produção · 20</span>
                </div>
                <span className="ip-add">+ Insumo</span>
              </div>
              <div className="ip-table">
                <div className="ip-row ip-hd">
                  <span>Nome</span>
                  <span>Emb.</span>
                  <span>Preço</span>
                  <span>Custo/Uso</span>
                </div>
                <div className="ip-row">
                  <span className="ip-nm">Massa da pizza</span>
                  <span className="ip-emb">und</span>
                  <span className="ip-pr">R$ 8,12</span>
                  <span className="ip-cu">R$ 5,18</span>
                </div>
                <div className="ip-row is-hot">
                  <span className="ip-nm">Molho de tomate</span>
                  <span className="ip-emb">und</span>
                  <span className="ip-pr">R$ 11,15</span>
                  <span className="ip-cu">R$ 12,53</span>
                </div>
                <div className="ip-row">
                  <span className="ip-nm">Frango desfiado</span>
                  <span className="ip-emb">und</span>
                  <span className="ip-pr">R$ 25,92</span>
                  <span className="ip-cu">R$ 25,41</span>
                </div>
                <div className="ip-row">
                  <span className="ip-nm">Farinha de trigo</span>
                  <span className="ip-emb">kg</span>
                  <span className="ip-pr">R$ 4,50</span>
                  <span className="ip-cu">R$ 4,50</span>
                </div>
                <div className="ip-row">
                  <span className="ip-nm">Azeite</span>
                  <span className="ip-emb">L</span>
                  <span className="ip-pr">R$ 25,00</span>
                  <span className="ip-cu">R$ 25,00</span>
                </div>
              </div>
            </div>
            <div className="propagate">
              <span className="prop-label">O mesmo cadastro alimenta</span>
              <div className="prop-chips">
                <span className="pchip">Estoque</span>
                <span className="pchip">Fichas técnicas</span>
                <span className="pchip">Etiquetagem</span>
                <span className="pchip">Desperdício</span>
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Cadastro único, sem retrabalho</span>
            <h2>Cadastre uma vez. Aparece em tudo.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              O maior ladrão de tempo na cozinha é digitar a mesma coisa em
              lugares diferentes. No Chefix, o insumo cadastrado uma vez se propaga
              automaticamente por todas as abas.
            </p>
            <ul className="steps" style={{ marginTop: 22 }}>
              <li>
                <span className="num">✓</span>
                <div>
                  <b>Basta a contagem inicial</b>
                  <p>Dê o start na gestão de estoque sem planilhas paralelas.</p>
                </div>
              </li>
              <li>
                <span className="num">✓</span>
                <div>
                  <b>Custo sempre atualizado</b>
                  <p>
                    As fichas técnicas recalculam com base no último preço de
                    compra.
                  </p>
                </div>
              </li>
              <li>
                <span className="num">✓</span>
                <div>
                  <b>Etiqueta sem digitar validade</b>
                  <p>
                    Não precisa cadastrar produto nem preencher data: clique em
                    imprimir e pronto.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ INTELLIGENCE ============ */}
      <section className="block intel">
        <div className="wrap intel-grid">
          <div className="intel-phone">
            <Image
              className="intel-phone-img"
              src="/celular-ok.png"
              alt="Chefix no celular: dashboard com o valor do estoque em 7 dias e o CMV médio por categoria"
              width={1200}
              height={1369}
              sizes="(max-width: 900px) 66vw, 440px"
            />
          </div>
          <div className="intel-content">
            <span className="eyebrow">Informação estratégica</span>
            <h2>Decisões rápidas com dados que se atualizam sozinhos</h2>
            <p className="lead">
              Pare de descobrir o resultado no fim do mês. Veja a saúde do negócio
              agora, direto do celular.
            </p>
            <div className="intel-list">
              <div className="ifeat">
                <div className="ifeat-top">
                  <div className="ifeat-ic">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M21 7v6h-6" />
                    </svg>
                  </div>
                  <div className="ifeat-hd">
                    <span className="live">
                      <i /> AO VIVO
                    </span>
                    <h3>CMV em tempo real</h3>
                  </div>
                  <div className="ifeat-kpi kpi-down">
                    <b>28,4%</b>
                    <span>▼ 3,1 p.p.</span>
                  </div>
                </div>
                <p>
                  Acompanhe o Custo da Mercadoria Vendida atualizado a cada venda
                  ou entrada de estoque, não a cada fechamento.
                </p>
                <svg className="ifeat-spark" viewBox="0 0 240 44" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="0,34 30,30 60,32 90,22 120,26 150,16 180,20 210,10 240,6" />
                </svg>
              </div>

              <div className="ifeat">
                <div className="ifeat-top">
                  <div className="ifeat-ic">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 15h4" />
                    </svg>
                  </div>
                  <div className="ifeat-hd">
                    <h3>Valor de estoque</h3>
                  </div>
                  <div className="ifeat-kpi">
                    <b>R$ 41,2k</b>
                    <span>capital parado</span>
                  </div>
                </div>
                <p>
                  Saiba exatamente quanto dinheiro está parado na prateleira e
                  otimize o seu capital de giro.
                </p>
                <div className="ifeat-bar">
                  <i />
                </div>
              </div>

              <div className="ifeat">
                <div className="ifeat-top">
                  <div className="ifeat-ic">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
                      <path d="M12 3a7 7 0 00-7 7c0 5-2 6-2 6h18s-2-1-2-6a7 7 0 00-7-7z" />
                      <path d="M10 20a2 2 0 004 0" />
                    </svg>
                  </div>
                  <div className="ifeat-hd">
                    <h3>Alertas de vencimento</h3>
                  </div>
                  <div className="ifeat-kpi kpi-warn">
                    <b>3</b>
                    <span>alertas hoje</span>
                  </div>
                </div>
                <p>
                  Notificações automáticas evitam perdas de insumos e garantem a
                  segurança alimentar da operação.
                </p>
                <span className="ifeat-alert">
                  <i />
                  Tomate pelati vence em 2 dias
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LABEL ============ */}
      <section className="block label-sec">
        <div className="wrap">
          <div>
            <span className="eyebrow">Etiquetagem automática</span>
            <h2>Rápida, inteligente e dentro da norma</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              A etiquetagem que costuma travar a cozinha vira o processo mais
              simples do dia. Sem preencher validade à mão, sem re-cadastrar
              produto.
            </p>
            <ul className="steps">
              <li>
                <span className="num">1</span>
                <div>
                  <b>Cadastre uma única vez</b>
                  <p>O produto e suas regras ficam salvos para sempre.</p>
                </div>
              </li>
              <li>
                <span className="num">2</span>
                <div>
                  <b>A validade é gerada sozinha</b>
                  <p>O sistema calcula automaticamente a data conforme o insumo.</p>
                </div>
              </li>
              <li>
                <span className="num">3</span>
                <div>
                  <b>Alerta antes de vencer</b>
                  <p>Você é avisado a tempo de aproveitar ou remanejar.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="label-visual">
            <Image
              className="etq-photo"
              src="/tomate.png"
              alt="Pote de molho de tomate artesanal Chefix com etiqueta de manipulação, validade e lote gerada automaticamente"
              width={1500}
              height={1274}
              sizes="(max-width: 840px) 92vw, 600px"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* ============ CONSULTORIA MODULES ============ */}
      <section className="block mods" id="consultoria">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Módulos personalizados</span>
            <h2>Consultoria e sistema no mesmo lugar</h2>
            <p className="lead">
              Cada aba aparece apenas para os clientes da respectiva empresa. Quem
              faz consultoria com a gente ganha um módulo sob medida.
            </p>
          </div>
          <div className="mod-grid">
            <div className="mod">
              <div className="mh">
                <div className="badge">Pr</div>
                <div>
                  <h3>Aba Proattiva</h3>
                  <span>Boas práticas &amp; segurança alimentar</span>
                </div>
              </div>
              <ul>
                <li>
                  <span className="ck">✓</span> Relatórios detalhados de visita
                  técnica
                </li>
                <li>
                  <span className="ck">✓</span> Controle rigoroso de documentos
                  sanitários
                </li>
                <li>
                  <span className="ck">✓</span> Drive exclusivo do cliente para
                  armazenamento
                </li>
              </ul>
              <div className="lock">🔒 Visível apenas para clientes Proattiva</div>
            </div>
            <div className="mod">
              <div className="mh">
                <div className="badge">TF</div>
                <div>
                  <h3>Aba Torres Fintech</h3>
                  <span>Gestão financeira &amp; contábil</span>
                </div>
              </div>
              <ul>
                <li>
                  <span className="ck">✓</span> Módulo completo de BPO Financeiro
                </li>
                <li>
                  <span className="ck">✓</span> Integração direta com dados
                  contábeis
                </li>
                <li>
                  <span className="ck">✓</span> Dashboards financeiros de alta
                  performance
                </li>
              </ul>
              <div className="lock">
                🔒 Visível apenas para clientes Torres Fintech
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="block pricing" id="planos">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Planos</span>
            <h2>Gestão profissional ao seu alcance</h2>
            <p className="lead">
              Um preço simples para a gestão completa. E gratuidade para quem já é
              cliente de consultoria.
            </p>
          </div>
          <div className="grid-price">
            <div className="pcard feature">
              <div className="badge-pop">Mais popular</div>
              <div className="ph">Chefix Completo</div>
              <div className="price">
                <span className="big">R$ 290</span>
                <span className="per">/mês</span>
              </div>
              <div className="subt">
                Gestão completa, para todo o território nacional.
              </div>
              <ul>
                <li>
                  <span className="ck">✓</span> 7 dias grátis para testar
                </li>
                <li>
                  <span className="ck">✓</span> Todos os 8 módulos operacionais
                </li>
                <li>
                  <span className="ck">✓</span> CMV em tempo real e valor de
                  estoque
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
                  <span className="ck">✓</span> Sem fidelidade
                </li>
              </ul>
              <Link href="/checkout" className="btn btn-primary">
                Comece grátis
              </Link>
            </div>
            <div className="pcard">
              <span className="tagline-free">100% gratuito</span>
              <div className="ph">Clientes Proattiva</div>
              <div className="price">
                <span className="big">R$ 0</span>
                <span className="per">/mês</span>
              </div>
              <div className="subt">
                Acesso total ao sistema enquanto o contrato de consultoria estiver
                ativo.
              </div>
              <ul>
                <li>
                  <span className="ck">✓</span> Plataforma Chefix completa
                </li>
                <li>
                  <span className="ck">✓</span> Aba Proattiva exclusiva
                </li>
                <li>
                  <span className="ck">✓</span> Documentos sanitários e visitas
                  técnicas
                </li>
              </ul>
              <Link href="/consultoria" className="btn btn-ghost">
                Falar com a Proattiva
              </Link>
            </div>
            <div className="pcard">
              <span className="tagline-free">Isenção total</span>
              <div className="ph">Clientes Torres Fintech</div>
              <div className="price">
                <span className="big">R$ 0</span>
                <span className="per">/mês</span>
              </div>
              <div className="subt">
                Isenção da mensalidade para clientes em regime de BPO financeiro.
              </div>
              <ul>
                <li>
                  <span className="ck">✓</span> Plataforma Chefix completa
                </li>
                <li>
                  <span className="ck">✓</span> Aba Torres Fintech exclusiva
                </li>
                <li>
                  <span className="ck">✓</span> BPO e dashboards financeiros
                </li>
              </ul>
              <Link href="/consultoria" className="btn btn-ghost">
                Falar com a Torres
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REFERRAL ============ */}
      <section className="block referral" id="indique">
        <div className="wrap">
          <div className="box">
            <div className="cb">
              10%<small>cashback</small>
            </div>
            <div>
              <h2>Indique e ganhe com a Chefix</h2>
              <p>
                Receba 10% sobre a assinatura de cada cliente indicado, e o
                cashback continua ativo enquanto ele mantiver a assinatura. Cresça
                junto e ajude a profissionalizar o setor.
              </p>
            </div>
            <Link href="/indique-e-ganhe" className="btn btn-navy btn-lg">
              Quero indicar
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="block testi">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Quem usa, recomenda</span>
            <h2>A operação mais leve, o lucro mais claro</h2>
          </div>
          <div className="t-grid">
            <div className="tcard">
              <div className="stars">★★★★★</div>
              <p>
                "A contagem de estoque que levava a manhã inteira agora sai em
                minutos. E pela primeira vez eu sei meu CMV sem esperar o
                contador."
              </p>
              <div className="who">
                <div className="av">RM</div>
                <div>
                  <b>Rafael Menezes</b>
                  <span>Pizzaria · São Paulo/SP</span>
                </div>
              </div>
            </div>
            <div className="tcard">
              <div className="stars">★★★★★</div>
              <p>
                "A etiquetagem automática resolveu meu problema com a Vigilância.
                Ninguém mais esquece de datar nada, o sistema faz sozinho."
              </p>
              <div className="who">
                <div className="av">JS</div>
                <div>
                  <b>Juliana Souza</b>
                  <span>Buffet de festas · Campinas/SP</span>
                </div>
              </div>
            </div>
            <div className="tcard">
              <div className="stars">★★★★★</div>
              <p>
                "Precificar deixou de ser achismo. Vejo a margem real de cada prato
                e ajusto na hora. Mudou a forma como eu decido o cardápio."
              </p>
              <div className="who">
                <div className="av">EA</div>
                <div>
                  <b>Eduardo Alves</b>
                  <span>Hamburgueria · Ribeirão Preto/SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="block founders">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Por trás do Chefix</span>
            <h2>Três referências unidas para transformar sua gestão</h2>
            <p className="lead">
              O Chefix nasceu de quem vive o setor de alimentação por dentro, da
              cozinha à contabilidade.
            </p>
          </div>
          <div className="f-grid">
            <div className="fcol">
              <div className="ficon">Pr</div>
              <div className="role">Operação &amp; segurança</div>
              <h3>Proattiva</h3>
              <p>
                Equipe de nutricionistas focada em boas práticas, gestão de
                estoque, controle de desperdício, fichas técnicas e etiquetagem.
              </p>
            </div>
            <div className="fcol">
              <div className="ficon">TF</div>
              <div className="role">Financeiro &amp; contábil</div>
              <h3>Torres Fintech</h3>
              <p>
                Especialista em gestão financeira e contábil, do BPO financeiro à
                contabilidade estratégica para o setor.
              </p>
            </div>
            <div className="fcol">
              <div className="ficon">LV</div>
              <div className="role">Mercado &amp; experiência</div>
              <h3>Lucas Vrau</h3>
              <p>
                Influenciador digital e empresário do setor de alimentação,
                trazendo a visão prática do dia a dia da operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="block faq">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Tudo o que você precisa saber</h2>
          </div>
          <details className="acc" open>
            <summary>
              Preciso de algum equipamento especial? <span className="pm">+</span>
            </summary>
            <div className="a-body">
              Não. O Chefix funciona no navegador e no celular. Para etiquetagem,
              você usa uma impressora térmica comum e a gente te orienta na
              configuração durante a implantação.
            </div>
          </details>
          <details className="acc">
            <summary>
              Quanto tempo leva para começar a usar?{" "}
              <span className="pm">+</span>
            </summary>
            <div className="a-body">
              Depois da contagem inicial de estoque, você já dá o start. A
              implantação é assistida pela nossa equipe para que o cadastro único
              fique correto desde o primeiro dia.
            </div>
          </details>
          <details className="acc">
            <summary>
              O sistema atende meu tipo de estabelecimento?{" "}
              <span className="pm">+</span>
            </summary>
            <div className="a-body">
              Sim. Atendemos restaurantes, padarias, pizzarias, hamburguerias,
              escolas, indústrias e buffets de festa. Mais de 100 operações já usam
              o Chefix.
            </div>
          </details>
          <details className="acc">
            <summary>
              Como funciona a gratuidade para clientes de consultoria?{" "}
              <span className="pm">+</span>
            </summary>
            <div className="a-body">
              Clientes Proattiva têm acesso 100% gratuito enquanto mantiverem o
              contrato de consultoria ativo. Clientes em regime de BPO financeiro
              da Torres Fintech têm isenção total da mensalidade.
            </div>
          </details>
          <details className="acc">
            <summary>
              Tenho fidelidade ou multa de cancelamento?{" "}
              <span className="pm">+</span>
            </summary>
            <div className="a-body">
              Não há fidelidade. A assinatura é mensal de R$ 290 e você pode
              cancelar quando quiser.
            </div>
          </details>
          <details className="acc">
            <summary>
              Como funciona o programa de indicação?{" "}
              <span className="pm">+</span>
            </summary>
            <div className="a-body">
              Você recebe 10% de cashback sobre a assinatura de cada cliente
              indicado, de forma recorrente, enquanto ele mantiver o plano ativo.
            </div>
          </details>
        </div>
      </section>

      {/* ============ FINAL CTA / DEMO ============ */}
      <section className="block final" id="demo">
        <div className="wrap">
          <div>
            <span className="eyebrow" style={{ color: "#ff9a5c" }}>
              Comece agora
            </span>
            <h2>O futuro da gestão no setor de alimentação começa aqui</h2>
            <p>
              Comece grátis em minutos, direto pelo site, e controle sua operação
              já nos 7 primeiros dias. Prefere ver antes? Use o formulário ao lado
              e um especialista fala com você.
            </p>
            <Link
              href="/checkout"
              className="btn btn-primary btn-lg"
              style={{ marginTop: 26 }}
            >
              Comece grátis
            </Link>
            <p className="hero-micro" style={{ color: "#aab8d0" }}>
              7 dias grátis. Depois R$ 290/mês, sem fidelidade.
            </p>
            <div className="assurances">
              <div className="a">
                <span className="ck">
                  <svg viewBox="0 0 24 24" width="12" fill="none" stroke="#fff" strokeWidth="4">
                    <path d="M4 12l6 6L20 6" />
                  </svg>
                </span>{" "}
                Demonstração sem compromisso
              </div>
              <div className="a">
                <span className="ck">
                  <svg viewBox="0 0 24 24" width="12" fill="none" stroke="#fff" strokeWidth="4">
                    <path d="M4 12l6 6L20 6" />
                  </svg>
                </span>{" "}
                Especialista do setor
              </div>
              <div className="a">
                <span className="ck">
                  <svg viewBox="0 0 24 24" width="12" fill="none" stroke="#fff" strokeWidth="4">
                    <path d="M4 12l6 6L20 6" />
                  </svg>
                </span>{" "}
                Todo o Brasil
              </div>
            </div>
          </div>
          <DemoForm />
        </div>
      </section>
    </>
  );
}
