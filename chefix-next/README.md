# Chefix — site institucional (Next.js)

Site institucional da **Chefix**, o sistema inteligente para o setor de alimentação, com foco em **fechar a venda no próprio site** por meio de um **checkout transparente** (Asaas ou Mercado Pago, plugáveis por variável de ambiente).

Migrado do protótipo estático (`../Chefix_Site`) para **Next.js (App Router) + TypeScript + Tailwind CSS**, preservando o design system da marca e a regra editorial de **não usar travessões**.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 3 (tokens da marca em `tailwind.config.ts`)
- Design system em `src/app/globals.css` (portado do `chefix.css` + estilos do home e do checkout)
- Fonte web Manrope via `next/font` (fallback da HK Nova, a fonte oficial)

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # ajuste as variáveis
npm run dev                  # http://localhost:3000
```

Scripts:

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servir o build
- `npm run typecheck` — checagem de tipos
- `npm run lint` — lint

## Estrutura

```
src/
  app/
    layout.tsx              Layout raiz (fonte, metadata base, símbolo da marca, JSON-LD Organization)
    globals.css             Design system completo
    sitemap.ts / robots.ts  SEO
    icon.svg                Favicon / ícone
    (site)/                 Route group das páginas de marketing (com header/rodapé completos)
      layout.tsx            TopStrip + Header + Footer
      page.tsx              Home
      funcionalidades/ como-funciona/ consultoria/ planos/
      indique-e-ganhe/ sobre/ contato/ central-de-ajuda/ blog/
      privacidade/ termos/
    checkout/page.tsx       Checkout (header/rodapé enxutos, fora do route group)
    api/
      checkout/customer|subscription|pix|boleto/route.ts
      webhooks/[provider]/route.ts
  components/               Header, Footer, TopStrip, Logo, BrandSymbol, Reveal, DemoForm, checkout/*
  lib/
    site.ts                 Constantes do site (URLs, nav, plano, rodapé)
    payments/               Camada de pagamento (abstração de provedor)
      types.ts              Contrato PaymentProvider
      provider.ts           Fábrica (lê PAYMENT_PROVIDER)
      asaas.ts mercadopago.ts mock.ts
```

## Checkout e pagamentos

O checkout é **transparente**: o pagamento acontece no próprio site. A UI está pronta (Cartão, PIX e Boleto) e o backend usa uma **camada de abstração** que suporta **Asaas** e **Mercado Pago**, selecionados por `PAYMENT_PROVIDER`.

Provedores disponíveis:

- `mock` (padrão em dev): não faz nenhuma chamada externa, gera dados falsos para exercitar a interface.
- `asaas`: cria cliente, assinatura mensal (cartão), cobranças PIX/boleto e trata webhooks.
- `mercadopago`: Preapproval (cartão), pagamentos PIX/boleto e webhooks/IPN.

### Regra crítica de segurança (PCI-DSS)

O **número do cartão nunca vai ao nosso servidor**. Em produção, tokenize o cartão **no navegador** com o SDK do provedor (`Asaas.js` ou `MercadoPago.js`) e envie **apenas o token** para `POST /api/checkout/subscription`. O componente `CheckoutClient` já isola esse ponto (hoje gera um pseudo-token em modo mock; troque pela chamada do SDK).

### Webhooks

Configure no painel do provedor a URL:

```
https://SEU_DOMINIO/api/webhooks/asaas         (ou /mercadopago)
```

Os eventos de pagamento confirmado/pendente/falha/estorno chegam em `src/app/api/webhooks/[provider]/route.ts`. Ali é o ponto de **liberar/bloquear o acesso ao app** (`app.chefix.com.br`) e de persistir para reconciliação (TODO marcado no código).

### Variáveis de ambiente

Ver `.env.example`. Principais:

| Variável | Descrição |
|---|---|
| `PAYMENT_PROVIDER` | `mock` \| `asaas` \| `mercadopago` |
| `PAYMENT_ENV` | `sandbox` \| `production` |
| `ASAAS_API_KEY`, `ASAAS_WEBHOOK_TOKEN` | credenciais Asaas |
| `MERCADOPAGO_ACCESS_TOKEN`, `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY`, `MERCADOPAGO_WEBHOOK_SECRET` | credenciais Mercado Pago |
| `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_WHATSAPP` | URLs públicas |
| `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID` | analytics (opcional) |

**Comece sempre em sandbox** com cartões de teste antes de ir para produção.

## SEO

- `metadata` por página com Open Graph e canonical
- JSON-LD `Organization` (layout) e `FAQPage` (home)
- `sitemap.xml` e `robots.txt` gerados (`sitemap.ts` / `robots.ts`)
- URLs em português com hífen

## Marca e fontes

A fonte oficial é a **HK Nova**. No protótipo usamos **Manrope** como fallback. Em produção, licencie a HK Nova e sirva via `@font-face`, ajustando a variável `--font-sans` (definida hoje por `next/font` no `layout.tsx`).

## Pendências para produção (checklist)

- [ ] Tokenização de cartão via SDK do provedor no navegador
- [ ] Persistência/fila de webhooks e provisionamento de acesso ao app
- [ ] Wiring dos formulários (demonstração, contato, newsletter) ao CRM
- [ ] Cupom de gratuidade para clientes Proattiva / Torres Fintech
- [ ] GA4 e Meta Pixel (evento de compra no sucesso do checkout)
- [ ] Licenciar e servir a fonte HK Nova
- [ ] Aviso de cookies (LGPD)
```
