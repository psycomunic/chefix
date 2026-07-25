"use client";

import { useState } from "react";

/**
 * Formulário de solicitação de demonstração.
 * Mockado: valida no cliente e exibe confirmação. Em produção, envie ao CRM
 * via rota de API própria (ver /api). Consentimento LGPD incluído.
 */
export default function DemoForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-card" role="status">
        <h3>Recebemos seu contato</h3>
        <p className="fsub">
          Um especialista do setor vai falar com você em breve. Enquanto isso,
          você pode assinar direto pelo site.
        </p>
        <a href="/checkout" className="btn btn-primary btn-lg btn-block">
          Comece grátis
        </a>
      </div>
    );
  }

  return (
    <form
      className="form-card"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3>Solicitar demonstração</h3>
      <p className="fsub">Preencha e um especialista entra em contato.</p>
      <div className="field">
        <label htmlFor="df-nome">Nome completo</label>
        <input id="df-nome" name="nome" type="text" placeholder="Seu nome" required />
      </div>
      <div className="field two">
        <div>
          <label htmlFor="df-wpp">WhatsApp</label>
          <input
            id="df-wpp"
            name="whatsapp"
            type="tel"
            placeholder="(00) 00000-0000"
            required
          />
        </div>
        <div>
          <label htmlFor="df-email">E-mail</label>
          <input
            id="df-email"
            name="email"
            type="email"
            placeholder="voce@email.com"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="df-estab">Estabelecimento</label>
        <input
          id="df-estab"
          name="estabelecimento"
          type="text"
          placeholder="Nome do seu negócio"
        />
      </div>
      <div className="field">
        <label htmlFor="df-tipo">Tipo de operação</label>
        <select id="df-tipo" name="tipo" defaultValue="Restaurante">
          <option>Restaurante</option>
          <option>Padaria</option>
          <option>Pizzaria</option>
          <option>Hamburgueria</option>
          <option>Escola</option>
          <option>Buffet / festas</option>
          <option>Indústria</option>
          <option>Outro</option>
        </select>
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          Autorizo o contato e o tratamento dos meus dados conforme a{" "}
          <a href="/privacidade">Política de Privacidade</a>.
        </span>
      </label>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        Quero minha demonstração →
      </button>
      <p className="priv">Seus dados estão protegidos. Sem spam.</p>
    </form>
  );
}
