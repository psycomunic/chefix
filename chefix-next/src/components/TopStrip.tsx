import Link from "next/link";

/** Barra de aviso no topo (navy). */
export default function TopStrip() {
  return (
    <div className="strip">
      <div className="wrap">
        <span className="strip-msg">
          🚀 <b>Módulos de consultoria integrados</b> com Proattiva &amp; Torres
          Fintech
        </span>
        <div className="strip-right">
          <span>Atendimento em todo o Brasil</span>
          <Link href="/contato" className="strip-btn">
            Fale com a gente
          </Link>
        </div>
      </div>
    </div>
  );
}
