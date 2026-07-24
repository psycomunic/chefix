import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Chefix coleta, usa, compartilha e protege os seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Política de Privacidade</h1>
          <p className="lead">
            Como a Chefix coleta, utiliza e protege os seus dados pessoais, com
            transparência e em conformidade com a LGPD.
          </p>
          <p className="breadcrumb" style={{ marginTop: "14px" }}>
            Última atualização: 24 de julho de 2026
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="prose">
            <p>
              Esta Política de Privacidade descreve as práticas da Chefix
              Tecnologia Ltda, inscrita no CNPJ 00.000.000/0001-00 (a "Chefix",
              "nós"), no tratamento de dados pessoais de usuários, clientes e
              visitantes dos nossos sites e da nossa plataforma de gestão para o
              setor de alimentação. Ao utilizar os nossos serviços, você declara
              estar ciente das condições aqui descritas.
            </p>

            <h2>1. Introdução e quem somos</h2>
            <p>
              A Chefix oferece um sistema de gestão voltado a restaurantes,
              bares, cafeterias e demais operações do setor de alimentação.
              Levamos a privacidade a sério e tratamos dados pessoais de acordo
              com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018, a
              "LGPD") e demais normas aplicáveis. Esta política vale para todas
              as pessoas que se relacionam conosco por meio dos nossos canais
              digitais.
            </p>

            <h2>2. Dados que coletamos</h2>
            <p>
              Coletamos diferentes categorias de dados, conforme a forma como
              você interage conosco:
            </p>
            <ul>
              <li>
                <b>Dados de cadastro:</b> nome, e-mail, telefone, nome do
                estabelecimento, CNPJ e cargo, informados no momento da criação
                da conta.
              </li>
              <li>
                <b>Dados de uso:</b> informações sobre como você utiliza a
                plataforma, como registros de acesso, funcionalidades acessadas,
                endereço IP e dados do dispositivo e do navegador.
              </li>
              <li>
                <b>Dados de pagamento:</b> informações necessárias para
                processar a assinatura, tratadas por meio de gateways de
                pagamento parceiros. A Chefix não armazena os dados completos do
                cartão de crédito.
              </li>
              <li>
                <b>Cookies e tecnologias similares:</b> dados coletados
                automaticamente para lembrar preferências, medir audiência e
                melhorar a experiência.
              </li>
            </ul>

            <h2>3. Como usamos os dados</h2>
            <p>Utilizamos os dados pessoais para as seguintes finalidades:</p>
            <ul>
              <li>
                Criar e administrar a sua conta e viabilizar o acesso à
                plataforma.
              </li>
              <li>
                Processar assinaturas, cobranças e emitir documentos fiscais.
              </li>
              <li>
                Prestar suporte, responder solicitações e enviar comunicados
                operacionais.
              </li>
              <li>
                Melhorar produtos, desenvolver novas funcionalidades e realizar
                análises estatísticas.
              </li>
              <li>
                Enviar comunicações de marketing, quando autorizado, com opção
                de descadastro a qualquer momento.
              </li>
              <li>
                Cumprir obrigações legais e regulatórias e prevenir fraudes.
              </li>
            </ul>

            <h2>4. Base legal</h2>
            <p>
              O tratamento de dados pessoais pela Chefix se apoia nas bases
              legais previstas na LGPD, entre elas: a execução de contrato e de
              procedimentos preliminares (para prestação do serviço), o
              cumprimento de obrigação legal ou regulatória, o legítimo
              interesse (para melhoria dos serviços e segurança) e o
              consentimento (para comunicações de marketing e cookies não
              essenciais). A base legal aplicável depende da finalidade
              específica de cada tratamento.
            </p>

            <h2>5. Compartilhamento de dados</h2>
            <p>
              Não vendemos dados pessoais. Podemos compartilhá-los com terceiros
              estritamente para viabilizar a operação e sempre com salvaguardas
              adequadas:
            </p>
            <ul>
              <li>
                <b>Gateways de pagamento:</b> para processar cobranças de
                assinatura por cartão, PIX e boleto.
              </li>
              <li>
                <b>Parceiros de consultoria:</b> Proattiva e Torres Fintech,
                quando você contrata ou utiliza módulos integrados de
                consultoria e serviços financeiros.
              </li>
              <li>
                <b>Provedores de nuvem e infraestrutura:</b> para hospedagem,
                armazenamento e processamento de dados.
              </li>
              <li>
                <b>Autoridades públicas:</b> quando exigido por lei, ordem
                judicial ou requisição de autoridade competente.
              </li>
            </ul>
            <p>
              Todos os parceiros que tratam dados em nosso nome são
              contratualmente obrigados a manter padrões de segurança e
              confidencialidade compatíveis com esta política.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Utilizamos cookies e tecnologias similares para manter a sessão do
              usuário, lembrar preferências, medir o desempenho das páginas e
              personalizar conteúdos. Você pode gerenciar ou bloquear cookies
              nas configurações do seu navegador, ciente de que alguns recursos
              podem deixar de funcionar corretamente sem os cookies essenciais.
            </p>

            <h2>7. Segurança da informação</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger os dados
              pessoais contra acessos não autorizados, perda, alteração e
              divulgação indevida. Entre essas medidas estão a criptografia de
              dados em trânsito, o controle de acesso baseado em perfis e a
              realização de rotinas de backup. Nenhum sistema é totalmente imune
              a riscos, mas trabalhamos continuamente para reduzir
              vulnerabilidades.
            </p>

            <h2>8. Direitos do titular</h2>
            <p>
              Nos termos da LGPD, você pode exercer, a qualquer momento, os
              seguintes direitos:
            </p>
            <ul>
              <li>
                Confirmar a existência de tratamento e acessar os seus dados.
              </li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>
                Solicitar a anonimização, o bloqueio ou a exclusão de dados
                desnecessários ou tratados em desconformidade.
              </li>
              <li>
                Solicitar a portabilidade dos dados a outro fornecedor de
                serviço.
              </li>
              <li>
                Revogar o consentimento e obter informações sobre o
                compartilhamento dos seus dados.
              </li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:privacidade@chefix.com.br">
                privacidade@chefix.com.br
              </a>
              .
            </p>

            <h2>9. Retenção de dados</h2>
            <p>
              Mantemos os dados pessoais apenas pelo tempo necessário para
              cumprir as finalidades descritas nesta política ou para atender
              obrigações legais, contratuais e regulatórias. Encerrado esse
              período, os dados são eliminados ou anonimizados de forma segura,
              ressalvadas as hipóteses de guarda obrigatória previstas em lei.
            </p>

            <h2>10. Encarregado (DPO) e contato</h2>
            <p>
              A Chefix mantém um Encarregado pelo Tratamento de Dados Pessoais
              (DPO), responsável por atuar como canal de comunicação entre a
              empresa, os titulares e a Autoridade Nacional de Proteção de Dados
              (ANPD). Para dúvidas, solicitações ou reclamações relacionadas à
              privacidade, utilize o e-mail{" "}
              <a href="mailto:privacidade@chefix.com.br">
                privacidade@chefix.com.br
              </a>
              .
            </p>

            <h2>11. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente para refletir
              mudanças legais, técnicas ou de negócio. Sempre que houver
              alteração relevante, publicaremos a nova versão nesta página com a
              data de atualização revisada. Recomendamos a consulta periódica
              deste documento.
            </p>

            <hr />
            <p className="updated">
              Chefix Tecnologia Ltda · CNPJ 00.000.000/0001-00 ·
              privacidade@chefix.com.br · Última atualização: 24 de julho de
              2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
