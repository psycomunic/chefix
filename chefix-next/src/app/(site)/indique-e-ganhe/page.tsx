import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indique e ganhe",
  description:
    "Indique donos de restaurante para o Chefix e receba 10% de cashback recorrente, todo mês, enquanto o indicado mantiver a assinatura.",
  alternates: { canonical: "/indique-e-ganhe" },
};

export default function IndiquePage() {
  return (
    <>
      <section className="page-hero center">
        <div className="wrap">
          <span className="eyebrow">Indique e ganhe</span>
          <h1>Indique o Chefix e ganhe 10% de cashback todo mês</h1>
          <p className="lead">Conhece um dono de restaurante que precisa organizar a operação? Indique o Chefix e receba 10% de cashback de forma recorrente, mês após mês, enquanto ele mantiver a assinatura. Sem limite de indicações.</p>
          <div style={{ marginTop: "24px" }}><a href="#quero-indicar" className="btn btn-primary btn-lg">Começar a indicar</a></div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Como funciona</span>
            <h2>Três passos, cashback no bolso</h2>
            <p className="lead">Simples de indicar, simples de receber. Você acompanha tudo e o pagamento é recorrente.</p>
          </div>
          <div className="grid g-3">
            <div className="card hoverable" style={{ minWidth: 0 }}>
              <span className="pill" style={{ background: "var(--navy)", color: "#fff", borderColor: "var(--navy)" }}>Passo 1</span>
              <h3 style={{ marginTop: "14px" }}>Indique um dono de restaurante</h3>
              <p>Envie o nome e o contato de alguém que tem restaurante, bar, padaria ou cozinha e precisa profissionalizar a gestão.</p>
            </div>
            <div className="card hoverable" style={{ minWidth: 0 }}>
              <span className="pill" style={{ background: "var(--navy)", color: "#fff", borderColor: "var(--navy)" }}>Passo 2</span>
              <h3 style={{ marginTop: "14px" }}>Ele assina o Chefix</h3>
              <p>Quando o seu indicado fecha a assinatura do Chefix (R$ 290 por mês), a indicação é registrada no seu nome.</p>
            </div>
            <div className="card hoverable" style={{ minWidth: 0 }}>
              <span className="pill" style={{ background: "var(--navy)", color: "#fff", borderColor: "var(--navy)" }}>Passo 3</span>
              <h3 style={{ marginTop: "14px" }}>Você recebe 10% todo mês</h3>
              <p>Você recebe 10% de forma recorrente, todo mês, enquanto o indicado mantiver a assinatura ativa. Quanto mais indicados, mais cashback.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <div style={{ background: "var(--orange)", color: "#fff", borderRadius: "24px", padding: "48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ fontSize: "clamp(70px,16vw,120px)", fontWeight: 800, lineHeight: 1, letterSpacing: "-.03em" }}>10%</div>
            <h2 style={{ color: "#fff", margin: "8px 0 12px" }}>de cashback recorrente</h2>
            <p style={{ color: "#fff", maxWidth: "56ch", margin: "0 auto", opacity: ".95", fontSize: "18px" }}>Não é um bônus único. Você recebe 10% da mensalidade de cada indicado todo mês, mês após mês, enquanto ele continuar usando o Chefix. Indicou, o cashback vira renda recorrente.</p>
          </div>
        </div>
      </section>

      <section className="block bg-mist">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Simulador</span>
            <h2>Quanto você pode receber por mês</h2>
            <p className="lead">Exemplos considerando indicados no plano de R$ 290 por mês. Cada indicado ativo rende R$ 29 de cashback recorrente.</p>
          </div>
          <div className="grid g-3">
            <div className="card" style={{ minWidth: 0, textAlign: "center" }}>
              <div style={{ fontSize: "15px", color: "var(--slate)", fontWeight: 700 }}>5 clientes indicados</div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "var(--orange-600)", margin: "10px 0" }}>R$ 145<span style={{ fontSize: "15px", color: "var(--slate)", fontWeight: 600 }}>/mês</span></div>
              <p style={{ fontSize: "14px" }}>De volta no seu bolso todo mês, de forma recorrente.</p>
            </div>
            <div className="card" style={{ minWidth: 0, textAlign: "center", borderColor: "var(--orange)" }}>
              <div style={{ fontSize: "15px", color: "var(--slate)", fontWeight: 700 }}>10 clientes indicados</div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "var(--orange-600)", margin: "10px 0" }}>R$ 290<span style={{ fontSize: "15px", color: "var(--slate)", fontWeight: 600 }}>/mês</span></div>
              <p style={{ fontSize: "14px" }}>Sua própria assinatura sai de graça: o cashback cobre a mensalidade.</p>
            </div>
            <div className="card" style={{ minWidth: 0, textAlign: "center" }}>
              <div style={{ fontSize: "15px", color: "var(--slate)", fontWeight: 700 }}>20 clientes indicados</div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "var(--orange-600)", margin: "10px 0" }}>R$ 580<span style={{ fontSize: "15px", color: "var(--slate)", fontWeight: 600 }}>/mês</span></div>
              <p style={{ fontSize: "14px" }}>Uma renda extra fixa, sem teto de indicações.</p>
            </div>
          </div>
          <p className="hint" style={{ textAlign: "center", marginTop: "18px" }}>Valores ilustrativos, calculados sobre o plano de R$ 290 por mês. O cashback é pago enquanto cada indicado mantiver a assinatura ativa.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">Regras e condições</span>
              <h2 style={{ margin: "16px 0 14px" }}>Transparente do começo ao fim</h2>
              <p className="lead">Sem letra miúda: você entende exatamente como e quando recebe o seu cashback.</p>
            </div>
            <div style={{ minWidth: 0 }}>
              <ul className="checklist" style={{ marginTop: 0 }}>
                <li><span className="ck">✓</span>O cashback é de 10% sobre a mensalidade paga por cada indicado.</li>
                <li><span className="ck">✓</span>O pagamento é recorrente: você recebe todo mês, não apenas uma vez.</li>
                <li><span className="ck">✓</span>O cashback é pago enquanto o indicado mantiver o plano ativo e em dia.</li>
                <li><span className="ck">✓</span>Não há limite de indicações. Quanto mais indicados ativos, maior o valor mensal.</li>
                <li><span className="ck">✓</span>A indicação vale para novos clientes, que ainda não têm assinatura do Chefix.</li>
                <li><span className="ck">✓</span>Se o indicado cancelar, o cashback referente a ele deixa de ser pago no mês seguinte.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block bg-mist" id="quero-indicar">
        <div className="wrap" style={{ maxWidth: "620px" }}>
          <div className="sec-head">
            <span className="eyebrow">Quero indicar</span>
            <h2>Comece a indicar agora</h2>
            <p className="lead">Deixe seus dados e nossa equipe entra em contato para registrar suas indicações e liberar o cashback.</p>
          </div>
          <form className="form-card">
            <div className="field">
              <label htmlFor="nome">Seu nome</label>
              <input type="text" id="nome" name="nome" placeholder="Como podemos te chamar" required />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Seu WhatsApp</label>
              <input type="tel" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="voce@email.com" required />
            </div>
            <label className="consent"><input type="checkbox" required /><span>Autorizo o contato conforme a <Link href="/privacidade">Política de Privacidade</Link>.</span></label>
            <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: "8px" }}>Começar a indicar</button>
            <p className="hint" style={{ textAlign: "center", marginTop: "12px" }}>Ao enviar, você concorda em ser contatado pela equipe Chefix sobre o programa de indicações.</p>
          </form>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <div className="cta-band">
            <h2>Ainda não usa o Chefix?</h2>
            <p>Assine primeiro, ponha a sua operação no controle e depois indique outros donos de restaurante para ganhar cashback recorrente.</p>
            <Link href="/checkout" className="btn btn-primary btn-lg">Assinar agora</Link>
          </div>
        </div>
      </section>
    </>
  );
}
