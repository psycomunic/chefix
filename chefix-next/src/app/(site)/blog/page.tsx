import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo prático para profissionalizar a gestão da sua cozinha: CMV, ficha técnica, precificação, estoque, compras e controle financeiro.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero center">
        <div className="wrap">
          <span className="eyebrow">Blog</span>
          <h1>Conteúdo para profissionalizar a sua cozinha</h1>
          <p className="lead">Guias práticos sobre custos, precificação, estoque e gestão financeira, escritos para quem toca a operação de um restaurante todos os dias.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="grid g-3">

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--navy),var(--orange))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>CMV na prática</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Custos</span>
                <h3 style={{ margin: 0 }}>Como calcular o CMV do seu restaurante</h3>
                <p style={{ margin: 0 }}>Entenda o Custo de Mercadoria Vendida passo a passo e descubra quanto de cada real de venda vira insumo.</p>
                <a href="#" className="prose" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--orange),var(--navy))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>Ficha técnica</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Operação</span>
                <h3 style={{ margin: 0 }}>Ficha técnica: por onde começar</h3>
                <p style={{ margin: 0 }}>O guia essencial para padronizar receitas, controlar porções e saber o custo real de cada prato.</p>
                <a href="#" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--navy-700),var(--orange))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>Vigilância Sanitária</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Boas práticas</span>
                <h3 style={{ margin: 0 }}>Etiquetagem e a Vigilância Sanitária: o que você precisa saber</h3>
                <p style={{ margin: 0 }}>Como manter a etiquetagem em dia, evitar autuações e garantir segurança alimentar na sua cozinha.</p>
                <a href="#" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--orange-600),var(--navy-800))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>Menos desperdício</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Eficiência</span>
                <h3 style={{ margin: 0 }}>5 causas de desperdício na cozinha (e como cortar)</h3>
                <p style={{ margin: 0 }}>Identifique onde o dinheiro escorre pelo ralo e aplique ajustes simples para proteger a sua margem.</p>
                <a href="#" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--navy),var(--orange-600))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>Margem real</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Precificação</span>
                <h3 style={{ margin: 0 }}>Precificação: como saber a margem real de cada prato</h3>
                <p style={{ margin: 0 }}>Vá além do &quot;chute&quot; e defina preços que cobrem custos, impostos e ainda deixam lucro na mesa.</p>
                <a href="#" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--orange),var(--navy-700))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>Estoque sob controle</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Estoque</span>
                <h3 style={{ margin: 0 }}>Contagem de estoque sem dor de cabeça</h3>
                <p style={{ margin: 0 }}>Uma rotina simples de contagem para acabar com rupturas, sobras e surpresas no fim do mês.</p>
                <a href="#" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--navy-800),var(--orange))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>Compras inteligentes</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Compras</span>
                <h3 style={{ margin: 0 }}>Compras inteligentes: comprar melhor, não só mais barato</h3>
                <p style={{ margin: 0 }}>Como negociar com fornecedores, avaliar rendimento e evitar que o preço baixo saia caro.</p>
                <a href="#" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

            <article className="card hoverable" style={{ minWidth: 0, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "150px", background: "linear-gradient(135deg,var(--orange-600),var(--navy))", display: "flex", alignItems: "flex-end", padding: "18px", color: "#fff", fontWeight: 800, fontSize: "19px", lineHeight: "1.2" }}>BPO financeiro</div>
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <span className="pill">Financeiro</span>
                <h3 style={{ margin: 0 }}>O que é BPO financeiro para restaurantes</h3>
                <p style={{ margin: 0 }}>Entenda como terceirizar a gestão financeira pode liberar o seu tempo e organizar o caixa do negócio.</p>
                <a href="#" style={{ color: "var(--orange-600)", fontWeight: 700, marginTop: "auto" }}>Ler artigo →</a>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="block bg-mist tight">
        <div className="wrap">
          <div className="form-card" style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Newsletter</span>
            <h2 style={{ margin: "14px 0 10px", color: "var(--navy)" }}>Receba os próximos artigos no seu e-mail</h2>
            <p className="lead" style={{ margin: "0 auto 22px" }}>Conteúdo prático de gestão para o setor de alimentação, sem enrolação. Cancele quando quiser.</p>
            <form style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="field" style={{ flex: 1, minWidth: "220px", margin: 0, textAlign: "left" }}>
                <label htmlFor="nl-email">Seu melhor e-mail</label>
                <input id="nl-email" type="email" placeholder="voce@seurestaurante.com.br" required />
              </div>
              <label className="consent"><input type="checkbox" required /><span>Autorizo o contato conforme a <Link href="/privacidade">Política de Privacidade</Link>.</span></label>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-end" }}>Assinar novidades</button>
            </form>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="cta-band">
            <h2>Coloque esse conteúdo em prática com a Chefix</h2>
            <p>Controle de custos, fichas técnicas, estoque e precificação em uma plataforma feita para a sua cozinha.</p>
            <Link href="/checkout" className="btn btn-primary btn-lg">Assinar agora</Link>
          </div>
        </div>
      </section>
    </>
  );
}
