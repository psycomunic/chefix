# Escopo do Site: Chefix
### Documento de briefing técnico e criativo para construção no Antigravity
**Cliente:** Chefix, o Sistema Inteligente para o Setor de Alimentação
**Versão:** 2.0 · Julho/2026
**Objetivo do projeto:** Site institucional multi-página **focado em fechar a venda dentro do próprio site**, com checkout transparente (Asaas ou Mercado Pago). CTA primário: **"Assinar agora"**. Demonstração e WhatsApp entram como caminhos secundários.

---

## 1. Visão geral

O Chefix é um SaaS de gestão operacional e financeira para o setor de alimentação (restaurantes, padarias, pizzarias, hamburguerias, escolas, indústrias e buffets). Nasceu da união de três referências: **Proattiva** (nutricionistas e boas práticas), **Torres Fintech** (gestão financeira e contábil) e **Lucas Vrau** (empresário e influenciador do setor). Já atende mais de 100 operações.

A prioridade do site é **converter o visitante em assinante sem precisar de intermediário**: ele conhece o produto, decide e paga ali mesmo, no checkout. A demonstração continua disponível para quem prefere falar antes, mas não é o foco.

O site comunica, nesta ordem: **credibilidade de quem vive a operação**, **redução de trabalho manual e retrabalho**, **clareza de lucro** (CMV, margem, desperdício) e **facilidade de assinar** (preço claro, sem fidelidade, pagamento em poucos cliques).

**Tom de voz:** direto, prático, confiante e brasileiro. Frases curtas, verbos no imperativo, zero jargão de tecnologia e zero clichê de startup. Sem travessões no texto (o cliente pediu explicitamente para evitá-los, pois deixam a copy com cara de conteúdo gerado por IA). Use vírgula, ponto, dois-pontos ou parênteses no lugar.

**Meta de negócio:** maximizar assinaturas self-service (R$ 290/mês), comunicar a gratuidade para clientes de consultoria e divulgar o programa de indicação (10% de cashback recorrente).

---

## 2. Síntese da análise dos 3 sites de referência

Foram analisados foozi.com.br, alochefia.com.br e suflex.com.br, todos concorrentes ou vizinhos no nicho de gestão para alimentação.

**Foozi:** forte em prova social numérica e depoimentos em vídeo curtos. CTA de demonstração repetido, WhatsApp como canal central.

**Alô Chefia:** credibilidade progressiva (parceiros, funcionalidades, produto, depoimentos, planos, mídia) e transparência de preço. Teste grátis como CTA.

**Suflex:** foco em traçabilidade e etiquetagem, formulário de qualificação no topo, estatísticas de escala e FAQ longo.

### O que incorporamos ao Chefix
Hero com mockup real do produto (dashboard desenhado em CSS, sem foto de banco de imagens), prova social específica e regional, transparência total de planos, seção "quem está por trás" (o maior diferencial do Chefix, que nenhum concorrente tem), FAQ que quebra objeções reais e, principalmente, **um checkout próprio** para fechar a venda no site.

### O que evitamos
Nada de clichês ("revolucione", "solução all-in-one"), stock photos de equipe sorrindo, ou o grid genérico de 8 cards brancos iguais que todo site de SaaS usa. A seção de funcionalidades foi redesenhada como um **bento assimétrico com efeito de vidro** (ver Seção 3.5).

---

## 3. Identidade visual e Design System

> Fonte: Manual da Marca Chefix. Estas regras são obrigatórias.

### 3.1 Paleta de cores
| Uso | Cor | HEX |
|---|---|---|
| Primária, âncora (fundos escuros, títulos, sólidos) | Navy | `#1c3055` |
| Acento, ação (botões, destaques, links ativos) | Laranja | `#f86c1f` |
| Laranja hover | Laranja escuro | `#e35c12` |
| Base | Branco | `#ffffff` |
| Fundos de seção | Névoa | `#f5f7fa` |
| Linhas | Linha | `#e7ebf1` |
| Texto | Tinta | `#131b2b` |
| Texto secundário | Ardósia | `#5b6b83` |

Proporção alvo: cerca de 70% claro, 22% navy, 8% laranja. O laranja é tempero, não prato principal. Seções âncora (problema, consultoria, CTA final, bento de funcionalidades) usam fundo navy sólido para criar ritmo.

### 3.2 Tipografia
Fonte oficial da marca: **HK Nova** (ExtraLight, Medium, Bold), a ser licenciada e servida via `@font-face` em produção. Fallback web usado no protótipo: **Manrope** (Google Fonts), geométrica e próxima do desenho da HK Nova. Títulos peso 800, `letter-spacing -0.02em`, `line-height` apertado.

### 3.3 Logotipo
Símbolo: "C" navy com chapéu de chef branco e check/seta laranja. Três versões (fundo claro, fundo navy, fundo laranja). Wordmark "Chefix" em navy com um pequeno quadrado laranja de acento no "i". Nunca distorcer ou recolorir fora das versões oficiais.

### 3.4 Componentes-base (tokens)
Raio: cards 16px, botões 12px, pills 30px. Sombras frias e sutis, base em `rgba(20,32,55, ...)`. Botões: primário laranja sólido, secundário "ghost" com borda, terciário navy sólido. Ícones estilo line (traço ~1.9px), monocromáticos. Mockups de produto sempre desenhados em CSS.

### 3.5 A seção de funcionalidades (bento de vidro)
Decisão de design a pedido do cliente: a seção de funcionalidades **não** é um grid de cards brancos iguais. Ela é um **bento assimétrico** sobre fundo navy com brilhos radiais (laranja e azul) e **cards de vidro** (glassmorphism): fundo translúcido `rgba(255,255,255,.11 a .035)`, `backdrop-filter: blur(18px) saturate(150%)`, borda `rgba(255,255,255,.14)`, realce interno no topo e sombra profunda. O card grande ("Fichas técnicas") e o card alto ("Etiquetagem") trazem mini-mockups reais por dentro (composição de custo e etiqueta). No hover, a borda acende em laranja. Isso dá personalidade e foge do padrão. Use com disciplina: vidro só nessa seção e em detalhes pontuais, para não pesar.

### 3.6 Princípios anti-template
Assimetria proposital e grid editorial, números concretos do produto (CMV 28,4%, R$ 290, 10% cashback, +100 restaurantes), micro-detalhes com intenção (chip "vence em 2 dias", lote na etiqueta), copy regional e específica, espaçamento generoso, uma cor de acento com disciplina e **sem travessões**.

---

## 4. Arquitetura da informação (multi-página)

```
/  ou index.html            Home (foco em venda, CTA "Assinar agora")
/checkout                   Checkout transparente (Cartão, PIX, Boleto)  <-- conversão
/funcionalidades            Os 8 módulos em profundidade
/como-funciona              Cadastro único, fluxo, etiquetagem, CMV
/consultoria                Abas Proattiva e Torres Fintech, gratuidade
/planos                     Preço, gratuidades e comparativo
/indique-e-ganhe            Programa de indicação (10% cashback)
/sobre                      História: Proattiva, Torres Fintech, Lucas Vrau
/contato                    Formulário e canais (também recebe a demonstração)
/central-de-ajuda           Busca, categorias e FAQ de suporte
/blog                       Conteúdo e SEO
/privacidade                Política de Privacidade (LGPD)
/termos                     Termos de Uso
/login                      Externo: app.chefix.com.br
```

**Navegação (header):** Funcionalidades · Como funciona · Consultoria · Planos · Indique e ganhe · [Login] · **[Assinar agora]** (botão laranja, sticky).
**Rodapé:** colunas Produto / Empresa / Comece, redes sociais, legais e CNPJ. Todas essas páginas já foram construídas no protótipo.

---

## 5. Estrutura detalhada por página

### 5.1 Home (index.html)
Barra de aviso, header sticky, hero (headline "A cozinha produz. O Chefix cuida do resto." com CTA "Assinar por R$ 290/mês" levando ao checkout e "Ver como funciona" como secundário, mais o mockup de dashboard), barra de confiança, seção Problema (navy), **funcionalidades em bento de vidro**, cadastro único, inteligência (CMV, estoque, alertas), etiquetagem, consultoria (navy), planos (com "Assinar agora"), indique e ganhe, depoimentos, "por trás do Chefix", FAQ, bloco final com "Assinar por R$ 290/mês" mais o formulário de demonstração como alternativa, e rodapé.

### 5.2 Checkout (checkout.html)
Ver Seção 6. É a página mais importante para o objetivo de vender no site.

### 5.3 a 5.13 Demais páginas
Funcionalidades (um bloco por módulo, layout alternado com mini-mockups), Como funciona (cadastro único, 3 passos, inteligência, etiquetagem), Consultoria (abas Proattiva e Torres Fintech mais gratuidade), Planos (3 planos, tabela comparativa, FAQ de cobrança), Indique e ganhe (como funciona, simulador estático, formulário), Sobre (origem, fundadores, métricas), Contato (formulário mais canais), Central de ajuda (busca, categorias, FAQ), Blog (grade de artigos, newsletter), Privacidade e Termos (LGPD e regras de assinatura). Todas já prototipadas com copy real e o mesmo design system.

---

## 6. Checkout transparente e pagamentos

O cliente decidiu usar **checkout transparente** (o pagamento acontece dentro do site, sem redirecionar para a página do provedor) com **Asaas ou Mercado Pago**. O protótipo `checkout.html` já traz a interface pronta e neutra em relação ao provedor.

### 6.1 Experiência (já construída no protótipo)
Cabeçalho enxuto (logo, selo de segurança, voltar ao site) para reduzir distração e aumentar conversão. Passo 1: dados do cliente (nome, e-mail, WhatsApp, CPF/CNPJ, estabelecimento). Passo 2: forma de pagamento em abas: **Cartão** (com visual do cartão e formulário completo), **PIX** (QR Code e copia e cola, liberação imediata) e **Boleto** (compensação em 1 a 2 dias). Resumo do pedido fixo à direita (plano Chefix Completo, R$ 290/mês, cupom, itens inclusos), selos de confiança e nota PCI-DSS. Rodapé enxuto com ajuda por WhatsApp.

### 6.2 Regras de integração (críticas)
- **Nunca** envie dados de cartão para o seu próprio servidor. Use o SDK de tokenização do provedor no navegador; o backend recebe apenas o token.
- **Asaas:** crie o cliente, tokenize o cartão via SDK, crie a assinatura (`subscription`) com ciclo mensal. Para PIX e boleto, gere a cobrança e exiba QR Code ou linha digitável. Configure **webhooks** (pagamento confirmado, falha, estorno) para liberar ou bloquear o acesso ao app.
- **Mercado Pago:** use o SDK JS (`MercadoPago.js`) para tokenizar o cartão, crie a assinatura via API de Preapproval (recorrência mensal). Para PIX, use o payment com `payment_method_id: 'pix'` e exiba o QR. Configure **webhooks/IPN** para os mesmos eventos.
- O acesso ao sistema (`app.chefix.com.br`) é liberado automaticamente quando o webhook confirmar o pagamento (imediato no cartão e PIX, após compensação no boleto).
- Ambiente de testes primeiro (sandbox), com cartões de teste, antes de ir para produção.
- Trate estados: pagamento pendente (boleto), recusado (mostrar motivo e permitir novo cartão) e aprovado (redirecionar para página de sucesso com criação de conta).
- **Segurança e conformidade:** HTTPS obrigatório, provedor certificado PCI-DSS, consentimento LGPD, e não persistir dados sensíveis de cartão.

### 6.3 Gratuidade no checkout
Clientes Proattiva e Torres Fintech não pagam. Ofereça um caminho (cupom ou validação de contrato) para que esses clientes ativem a conta sem cobrança, e mantenha o aviso com link para a página de Consultoria.

---

## 7. Requisitos técnicos

**Stack sugerida:** Next.js (App Router) mais TypeScript mais Tailwind CSS, com os tokens da marca no `tailwind.config`. Alternativa estática: Astro mais Tailwind. Componentize header, footer, hero, bento de funcionalidades, cards de plano, checkout (com componentes de método de pagamento), formulários e mockups.

**Backend do checkout:** rotas de API para criar cliente, criar assinatura, gerar PIX/boleto e receber webhooks. Variáveis de ambiente para chaves do provedor. Fila ou log para reconciliação de pagamentos.

**SEO:** metas e Open Graph por página, JSON-LD (`Organization`, `SoftwareApplication`, `FAQPage`, `Product` mais `Offer`), sitemap.xml, robots.txt, URLs em português com hífen. Blog para termos como "como calcular CMV" e "ficha técnica de restaurante".

**Performance:** meta Lighthouse 90 ou mais nas quatro métricas, imagens em WebP/AVIF, `loading="lazy"`, fontes com `display=swap`.

**Acessibilidade:** contraste AA, navegação por teclado, `aria-label` em ícones, foco visível.

**LGPD:** aviso de cookies, política de privacidade, consentimento no checkout e nos formulários, contato do encarregado.

**Integrações:** Asaas ou Mercado Pago (pagamentos), WhatsApp (`wa.me`), GA4 e Meta Pixel (com evento de compra no sucesso do checkout), CRM opcional para leads da demonstração, e o app do cliente.

---

## 8. Prompts prontos para o Antigravity

> Cole o Prompt Mestre primeiro. Anexe o protótipo (todos os `.html` mais `assets/chefix.css`) como referência visual.

### 8.1 Prompt Mestre
```
Você vai construir o site da CHEFIX, um SaaS de gestão para o setor de
alimentação. O foco do site é FECHAR A VENDA no próprio site, com checkout
transparente. Stack: Next.js (App Router) + TypeScript + Tailwind. Multi-página,
responsivo, mobile-first, SEO e performance (Lighthouse 90+).

MARCA (obrigatória): navy #1c3055 (âncora/títulos), laranja #f86c1f (ação, hover
#e35c12), branco, névoa #f5f7fa, linha #e7ebf1, texto #131b2b, secundário
#5b6b83. Proporção ~70% claro / 22% navy / 8% laranja. Tipografia HK Nova
(fallback Manrope), títulos peso 800. Logo: "C" navy com chapéu e check laranja,
wordmark "Chefix" com quadradinho laranja no "i".

TOM: direto, brasileiro, prático. Frases curtas. NÃO use travessões (o traço
longo) em nenhum texto; use vírgula, ponto, dois-pontos ou parênteses. Sem clichê de
startup, sem stock photo.

ANTI-TEMPLATE: mockups de produto desenhados em CSS. A seção de funcionalidades
é um BENTO ASSIMÉTRICO com efeito de vidro (glassmorphism) sobre fundo navy com
brilhos, não um grid de cards iguais. Dados concretos: CMV 28,4%, R$ 290/mês,
10% cashback, +100 restaurantes, 8 módulos, sem fidelidade.

CTA PRIMÁRIO em todo o site: "Assinar agora" (destino /checkout). Secundários:
"Ver planos" e "Solicitar demonstração".
```

### 8.2 Prompt do Checkout
```
Crie /checkout com checkout TRANSPARENTE (pagamento no próprio site), integrando
Asaas OU Mercado Pago (deixe o provedor configurável por variável de ambiente).
Cabeçalho enxuto (logo, selo de segurança, voltar). Passo 1: dados (nome, email,
WhatsApp, CPF/CNPJ, estabelecimento). Passo 2: abas Cartão, PIX e Boleto. Cartão:
tokenização no navegador via SDK do provedor (NUNCA envie o cartão ao seu
servidor), formulário com número, nome, validade, CVV, parcelas e CPF do titular,
mais um visual do cartão que atualiza em tempo real. PIX: gere QR Code e copia e
cola. Boleto: gere linha digitável. Resumo do pedido fixo (Chefix Completo,
R$ 290/mês, cupom, itens inclusos), selos de confiança e nota PCI-DSS. Backend:
rotas para criar cliente, criar assinatura mensal, gerar PIX/boleto e receber
webhooks (pago, falha, estorno) que liberam o acesso ao app. Sandbox primeiro.
Siga o Prompt Mestre e o protótipo checkout.html.
```

### 8.3 Prompts das demais páginas
```
Crie /funcionalidades: um bloco por módulo (8 módulos), layout alternado
(esquerda/direita) com mini-mockup em CSS em cada, título, benefício e 3 bullets.
Botão "Assinar agora" a cada 3 módulos. Siga o Prompt Mestre e o protótipo.
```
Repita o padrão para `/como-funciona`, `/consultoria`, `/planos`,
`/indique-e-ganhe`, `/sobre`, `/contato`, `/central-de-ajuda`, `/blog`,
`/privacidade` e `/termos`, usando o conteúdo já presente nos protótipos.

---

## 9. Checklist de qualidade (Definition of Done)

- [ ] Checkout transparente funcionando com Asaas ou Mercado Pago (cartão tokenizado, PIX e boleto), webhooks liberando o acesso.
- [ ] CTA "Assinar agora" presente, sticky e levando ao checkout em todas as páginas.
- [ ] Seção de funcionalidades em bento de vidro, não em grid genérico.
- [ ] Nenhum travessão em nenhum texto do site.
- [ ] Paleta e proporção respeitadas, HK Nova em produção.
- [ ] Todos os mockups em CSS, sem stock photo.
- [ ] Responsivo de 360px a 1440px, sem overflow horizontal.
- [ ] Lighthouse 90 ou mais nas quatro métricas.
- [ ] SEO (metas, OG, JSON-LD, sitemap, robots) e acessibilidade AA.
- [ ] LGPD e PCI: cookies, privacidade, consentimento, sem armazenar cartão.
- [ ] GA4 e Meta Pixel com evento de compra no sucesso do checkout.

---

## 10. Roadmap sugerido

**Fase 1 (venda):** Home, Planos, Checkout (Asaas ou Mercado Pago em produção), Funcionalidades, e SEO base. Publicar e começar a vender.
**Fase 2 (autoridade e suporte):** Consultoria, Como funciona, Indique e ganhe, Sobre, Contato, Central de ajuda, Blog, páginas legais.
**Fase 3 (otimização):** testes A/B de headline, preço e checkout, recuperação de carrinho, depoimentos em vídeo e conteúdo de SEO.

---

### Anexos entregues
`index.html` (home com bento de vidro), `checkout.html` (checkout transparente), e as páginas `funcionalidades`, `como-funciona`, `consultoria`, `planos`, `indique-e-ganhe`, `sobre`, `contato`, `central-de-ajuda`, `blog`, `privacidade` e `termos`, mais `assets/chefix.css` (design system compartilhado). Também os arquivos originais de marca (PDF e PPTX).
