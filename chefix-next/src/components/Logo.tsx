import Link from "next/link";

/**
 * Logotipo Chefix: símbolo + wordmark com o quadradinho laranja no "i".
 * `tone` controla a cor do símbolo (navy no header, branco no rodapé).
 */
export default function Logo({
  href = "/",
  tone = "navy",
}: {
  href?: string;
  tone?: "navy" | "white";
}) {
  const color = tone === "white" ? "#fff" : "var(--navy)";
  return (
    <Link href={href} className="logo">
      <svg className="mark" style={{ color }} aria-hidden="true">
        <use href="#chefix-mark" />
      </svg>
      <span className="wm">Chefix</span>
    </Link>
  );
}
