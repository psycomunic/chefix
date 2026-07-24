import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Central de ajuda",
  description:
    "Respostas sobre primeiros passos, estoque, fichas técnicas, etiquetagem, cobrança, planos e suporte da Chefix.",
  alternates: { canonical: "/central-de-ajuda" },
};

export default function CentralAjudaPage() {
  return (
    <>
      <section className="page-hero center">
        <div className="wrap">
          <span className="eyebrow">Central de ajuda</span>
          <h1>Como podemos ajudar?</h1>
          <p className="lead">
            Reunimos aqui as dúvidas mais comuns sobre a Chefix. Busque por um
            tema ou navegue pelas categorias para achar a resposta na hora.
          </p>
          <form
            style={{
              maxWidth: "560px",
              margin: "26px auto 0",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
                display: "grid",
                placeItems: "center",
                pointerEvents: "none",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--orange)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Busque por um tema (ex: etiquetagem, CMV, cobrança)"
              style={{
                width: "100%",
                padding: "16px 18px 16px 48px",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                fontFamily: "inherit",
                fontSize: "16px",
                color: "var(--ink)",
                boxShadow: "var(--shadow-md)",
              }}
            />
          </form>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Categorias</span>
            <h2>Escolha um tema</h2>
            <p className="lead">
              Cada categoria reúne os artigos e passos a passo para você resolver
              rápido, sozinho ou com o nosso suporte.
            </p>
          </div>
          <div className="grid g-3">
            <div className="card hoverable" style={{ minWidth: 0 }}>
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 3v4M3 5h4M6 17v4M4 19h4" />
                  <path d="M13 3l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5z" />
                </svg>
              </div>
              <h3>Primeiros passos</h3>
              <p>
                Crie a sua conta, configure a operação e faça o primeiro cadastro
                de insumos.
              </p>
            </div>

            <div className="card hoverable" style={{ minWidth: 0 }}>
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="M3.3 7L12 12l8.7-5M12 22V12" />
                </svg>
              </div>
              <h3>Estoque e insumos</h3>
              <p>
                Cadastre produtos, controle entradas e saídas e acompanhe o saldo
                em tempo real.
              </p>
            </div>

            <div className="card hoverable" style={{ minWidth: 0 }}>
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M9 13h6M9 17h6M9 9h1" />
                </svg>
              </div>
              <h3>Fichas técnicas e precificação</h3>
              <p>
                Monte fichas, calcule o custo real de cada prato e defina o preço
                com margem justa.
              </p>
            </div>

            <div className="card hoverable" style={{ minWidth: 0 }}>
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.5 3h9l4.5 5-9 13-9-13z" />
                  <path d="M7.5 3l4.5 5 4.5-5M3 8h18" />
                </svg>
              </div>
              <h3>Etiquetagem</h3>
              <p>
                Imprima etiquetas de validade e manipulação seguindo as normas
                sanitárias.
              </p>
            </div>

            <div className="card hoverable" style={{ minWidth: 0 }}>
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20M6 15h4" />
                </svg>
              </div>
              <h3>Cobrança e planos</h3>
              <p>
                Veja formas de pagamento, notas fiscais, mudança de plano e
                histórico de faturas.
              </p>
            </div>

            <div className="card hoverable" style={{ minWidth: 0 }}>
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <h3>Conta e acesso</h3>
              <p>
                Gerencie usuários, permissões, senha e os dados da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block bg-mist">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Respostas rápidas</h2>
            <p className="lead">
              As dúvidas que mais recebemos de quem está começando com a Chefix.
            </p>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <details className="acc">
              <summary>
                Como começar a usar a Chefix?<span className="pm">+</span>
              </summary>
              <div className="a-body">
                É simples: você assina o plano, cria a sua conta e recebe um passo
                a passo guiado. Cadastramos junto com você os primeiros insumos e
                fichas técnicas para o sistema já refletir a sua operação. Se
                preferir, o nosso time faz a implantação com você em uma chamada.
              </div>
            </details>

            <details className="acc">
              <summary>
                Preciso de algum equipamento especial?
                <span className="pm">+</span>
              </summary>
              <div className="a-body">
                Não. A Chefix funciona no navegador, no computador ou no celular.
                Para etiquetas, basta uma impressora térmica comum (aquelas de
                bobina, usadas em comércio). Não é preciso comprar equipamento
                exclusivo nem instalar nada complicado.
              </div>
            </details>

            <details className="acc">
              <summary>
                Quanto tempo leva para implantar?<span className="pm">+</span>
              </summary>
              <div className="a-body">
                A maioria das cozinhas começa a usar no mesmo dia. Uma implantação
                completa, com estoque e fichas técnicas organizados, costuma levar
                de alguns dias a duas semanas, dependendo do tamanho da operação e
                da quantidade de itens a cadastrar.
              </div>
            </details>

            <details className="acc">
              <summary>
                Como funciona o CMV em tempo real?<span className="pm">+</span>
              </summary>
              <div className="a-body">
                A cada entrada de compra e cada baixa de insumo, a Chefix recalcula
                o custo da sua mercadoria vendida (CMV). Assim você enxerga a
                margem de cada prato e a saúde do negócio no momento, sem esperar o
                fechamento do mês nem montar planilhas manuais.
              </div>
            </details>

            <details className="acc">
              <summary>
                Quais são as formas de pagamento?<span className="pm">+</span>
              </summary>
              <div className="a-body">
                Você pode pagar com cartão de crédito, PIX ou boleto. No cartão, a
                renovação é automática; no PIX e no boleto, avisamos antes de cada
                vencimento. Todas as formas dão acesso completo ao plano
                contratado.
              </div>
            </details>

            <details className="acc">
              <summary>
                Posso cancelar quando quiser?<span className="pm">+</span>
              </summary>
              <div className="a-body">
                Sim. Não trabalhamos com fidelidade nem multa de cancelamento.
                Você cancela pela sua conta ou falando com o suporte e mantém o
                acesso até o fim do período já pago.
              </div>
            </details>

            <details className="acc">
              <summary>
                Sou cliente de consultoria, tenho gratuidade?
                <span className="pm">+</span>
              </summary>
              <div className="a-body">
                Clientes ativos das consultorias parceiras (Proattiva e Torres
                Fintech) têm condições especiais de uso da Chefix, incluindo
                períodos de gratuidade nos módulos integrados. Fale com o seu
                consultor ou com o nosso time para ativar o benefício.
              </div>
            </details>

            <details className="acc">
              <summary>
                Como funciona o cashback de indicação?
                <span className="pm">+</span>
              </summary>
              <div className="a-body">
                Ao indicar outro estabelecimento que assine a Chefix, você recebe
                10% de cashback sobre o valor da assinatura dele. É simples:
                compartilhe o seu link de indicação e acompanhe os ganhos direto
                na sua conta. Saiba mais na página Indique e ganhe.
              </div>
            </details>

            <details className="acc">
              <summary>
                Como imprimir etiquetas?<span className="pm">+</span>
              </summary>
              <div className="a-body">
                No módulo de etiquetagem, você seleciona o insumo ou preparo,
                confirma a data de manipulação e validade e clica em imprimir. A
                Chefix envia direto para a sua impressora térmica comum, já no
                formato correto para as normas sanitárias.
              </div>
            </details>

            <details className="acc">
              <summary>
                Como falar com o suporte?<span className="pm">+</span>
              </summary>
              <div className="a-body">
                Você fala com a gente pelo WhatsApp, por e-mail em
                contato@chefix.com.br ou pela própria plataforma. O atendimento é
                de segunda a sexta, das 9h às 18h, com gente que entende de cozinha
                e de gestão.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <div className="cta-band">
            <h2>Não achou o que procurava?</h2>
            <p>
              Chama a gente que ajudamos você a resolver. O nosso time responde
              rápido e fala a sua língua, sem termos complicados.
            </p>
            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
                position: "relative",
              }}
            >
              <a href={WHATSAPP_URL} className="btn btn-primary btn-lg">
                Falar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="btn btn-ghost btn-lg"
                style={{ background: "#fff" }}
              >
                Ir para o contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
