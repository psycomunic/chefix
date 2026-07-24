/**
 * Definição do símbolo da marca (o "C" com chapéu de chef e check laranja).
 * Renderizado uma única vez no layout raiz; reutilizado via <use href="#chefix-mark" />.
 */
export default function BrandSymbol() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="chefix-mark" viewBox="0 0 100 100">
        <path
          d="M50 4C25.7 4 6 23.7 6 48s19.7 44 44 44c11.9 0 22.7-4.7 30.6-12.4L66 65C61.8 69 56.2 71.4 50 71.4 37.1 71.4 26.6 60.9 26.6 48S37.1 24.6 50 24.6c6.2 0 11.8 2.4 16 6.4l14.6-14.6C72.7 8.7 61.9 4 50 4z"
          fill="currentColor"
        />
        <path d="M44 40h16c3.3 0 6 2.7 6 6v6H38v-6c0-3.3 2.7-6 6-6z" fill="#fff" />
        <circle cx="42" cy="34" r="9" fill="#fff" />
        <circle cx="58" cy="34" r="9" fill="#fff" />
        <circle cx="50" cy="30" r="10" fill="#fff" />
        <path
          d="M34 52l10 12 30-30"
          fill="none"
          stroke="#f86c1f"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M70 30l8-6-2 12z" fill="#f86c1f" />
      </symbol>
    </svg>
  );
}
