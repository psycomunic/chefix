import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe da Chefix. Tire dúvidas, peça uma demonstração sem compromisso e descubra como a gestão inteligente pode transformar a sua cozinha.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Fale com a gente</span>
          <h1>Vamos conversar sobre a sua cozinha</h1>
          <p className="lead">
            Quer entender como a Chefix organiza estoque, fichas técnicas,
            etiquetagem e CMV no dia a dia? Mande uma mensagem ou chame no
            WhatsApp. A gente responde rápido, sem enrolação e sem compromisso.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="grid g-2" style={{ alignItems: "start" }}>
            <div style={{ minWidth: 0 }}>
              <div className="form-card">
                <h2
                  style={{
                    fontSize: "24px",
                    color: "var(--navy)",
                    marginBottom: "6px",
                  }}
                >
                  Envie uma mensagem
                </h2>
                <p
                  className="lead"
                  style={{ fontSize: "15px", marginBottom: "22px" }}
                >
                  Preencha os campos abaixo e a nossa equipe entra em contato
                  para entender a sua operação.
                </p>
                <form>
                  <div className="field">
                    <label htmlFor="nome">Nome completo</label>
                    <input
                      id="nome"
                      type="text"
                      placeholder="Como podemos te chamar?"
                    />
                  </div>
                  <div className="field two">
                    <div className="field" style={{ marginBottom: 0 }}>
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="voce@empresa.com.br"
                      />
                    </div>
                    <div className="field" style={{ marginBottom: 0 }}>
                      <label htmlFor="whats">WhatsApp</label>
                      <input
                        id="whats"
                        type="tel"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="estab">Estabelecimento</label>
                    <input
                      id="estab"
                      type="text"
                      placeholder="Nome do seu negócio"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="tipo">Tipo de operação</label>
                    <select id="tipo" defaultValue="">
                      <option value="">Selecione uma opção</option>
                      <option>Restaurante</option>
                      <option>Padaria</option>
                      <option>Pizzaria</option>
                      <option>Hamburgueria</option>
                      <option>Escola</option>
                      <option>Buffet e festas</option>
                      <option>Indústria</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="msg">Mensagem</label>
                    <textarea
                      id="msg"
                      placeholder="Conte um pouco sobre a sua cozinha e o que você precisa resolver."
                    ></textarea>
                  </div>
                  <div
                    className="field"
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <input
                      id="lgpd"
                      type="checkbox"
                      style={{ width: "auto", marginTop: "4px" }}
                    />
                    <label
                      htmlFor="lgpd"
                      style={{
                        fontWeight: 400,
                        color: "var(--slate)",
                        fontSize: "13.5px",
                        marginBottom: 0,
                      }}
                    >
                      Autorizo a Chefix a usar os meus dados para entrar em
                      contato, conforme a{" "}
                      <Link
                        href="/privacidade"
                        style={{ color: "var(--orange-600)", fontWeight: 700 }}
                      >
                        Política de Privacidade
                      </Link>{" "}
                      e a LGPD.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ marginTop: "8px" }}
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>

            <div
              style={{
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                className="card"
                style={{
                  background: "var(--navy)",
                  borderColor: "var(--navy)",
                }}
              >
                <h3 style={{ color: "#fff" }}>Chame no WhatsApp</h3>
                <p style={{ color: "#aab8d0" }}>
                  O jeito mais rápido de falar com a gente. Tire dúvidas e
                  agende uma demonstração ao vivo.
                </p>
                <a
                  href={WHATSAPP_URL}
                  className="btn btn-primary"
                  style={{ marginTop: "16px" }}
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="card">
                <h3>E-mail</h3>
                <p>
                  Prefere escrever? Mande um e-mail que respondemos em até um
                  dia útil.
                </p>
                <a
                  href="mailto:contato@chefix.com.br"
                  style={{
                    color: "var(--orange-600)",
                    fontWeight: 700,
                    display: "inline-block",
                    marginTop: "10px",
                  }}
                >
                  contato@chefix.com.br
                </a>
              </div>

              <div className="card">
                <h3>Instagram</h3>
                <p>
                  Acompanhe dicas de gestão, bastidores e novidades da
                  plataforma.
                </p>
                <a
                  href="https://instagram.com/chefix.br"
                  style={{
                    color: "var(--orange-600)",
                    fontWeight: 700,
                    display: "inline-block",
                    marginTop: "10px",
                  }}
                >
                  @chefix.br
                </a>
              </div>

              <div className="card">
                <h3>Horário de atendimento</h3>
                <p>
                  Segunda a sexta, das 9h às 18h (horário de Brasília). Fora
                  desse período, deixe a sua mensagem que retornamos no próximo
                  dia útil.
                </p>
              </div>

              <div
                className="card"
                style={{
                  background: "var(--green-bg)",
                  borderColor: "#c5e6d4",
                }}
              >
                <h3 style={{ color: "var(--green)" }}>
                  Demonstração sem compromisso
                </h3>
                <p style={{ color: "#2c384c" }}>
                  Mostramos a Chefix funcionando na prática, com os números da
                  sua operação. Sem pressão de venda e sem custo para conhecer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block tight bg-mist">
        <div className="wrap">
          <div className="cta-band">
            <h2>Prefere já começar?</h2>
            <p>
              Você não precisa esperar. Assine agora e comece a organizar a sua
              cozinha hoje mesmo, com implantação guiada e suporte de gente que
              vive a operação.
            </p>
            <Link href="/checkout" className="btn btn-primary btn-lg">
              Assinar agora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
