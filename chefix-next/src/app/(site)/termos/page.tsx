import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso da Chefix: condições de assinatura, pagamento, cancelamento, programa de indicação e responsabilidades das partes.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Termos de Uso</h1>
          <p className="lead">
            As condições que regem o uso da plataforma Chefix, a contratação da assinatura e a relação entre você e a Chefix.
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
              Estes Termos de Uso ("Termos") regulam o acesso e a utilização da plataforma Chefix, disponibilizada por Chefix Tecnologia Ltda, inscrita no CNPJ 00.000.000/0001-00 (a "Chefix"). Leia com atenção antes de contratar ou utilizar os nossos serviços.
            </p>

            <h2>1. Aceitação dos termos</h2>
            <p>
              Ao criar uma conta, contratar uma assinatura ou utilizar a plataforma, você declara ter lido, compreendido e concordado com estes Termos e com a nossa <Link href="/privacidade">Política de Privacidade</Link>. Caso não concorde com alguma condição, você não deve utilizar os serviços da Chefix.
            </p>

            <h2>2. Descrição do serviço</h2>
            <p>
              A Chefix é uma plataforma de gestão para o setor de alimentação, voltada a restaurantes, bares, cafeterias e operações similares. O serviço inclui recursos de controle de estoque, fichas técnicas, cálculo de custos, precificação, gestão de compras e relatórios, além de módulos de consultoria integrados. Podemos aprimorar, adicionar ou descontinuar funcionalidades a qualquer momento, comunicando alterações relevantes aos usuários.
            </p>

            <h2>3. Cadastro e conta</h2>
            <p>
              Para utilizar a plataforma é necessário criar uma conta, fornecendo informações verdadeiras, completas e atualizadas. Você é responsável por manter a confidencialidade das suas credenciais e por todas as atividades realizadas na sua conta. Comunique imediatamente a Chefix em caso de uso não autorizado ou suspeita de violação de segurança.
            </p>

            <h2>4. Assinatura, preço e pagamento</h2>
            <p>
              O acesso à plataforma é oferecido mediante assinatura mensal no valor de R$ 290/mês. O pagamento pode ser realizado por cartão de crédito, PIX ou boleto bancário, por meio de gateways de pagamento parceiros. A assinatura é renovada automaticamente a cada ciclo, salvo cancelamento. Eventuais reajustes de preço serão comunicados previamente e passarão a valer no ciclo seguinte.
            </p>

            <h2>5. Gratuidade para clientes Proattiva e Torres Fintech</h2>
            <p>
              Clientes ativos das parceiras Proattiva e Torres Fintech podem ter direito ao uso gratuito da plataforma Chefix, conforme as condições vigentes de cada parceria. O benefício está condicionado à comprovação e à manutenção do vínculo com a respectiva parceira e pode ser encerrado caso esse vínculo deixe de existir.
            </p>

            <h2>6. Cancelamento e reembolso</h2>
            <p>
              A assinatura não possui fidelidade nem multa por cancelamento. Você pode cancelar a qualquer momento pela área do cliente ou pelos nossos canais de atendimento, mantendo o acesso até o fim do ciclo já pago. Solicitações de reembolso são analisadas conforme a legislação aplicável e o prazo legal de arrependimento, quando cabível.
            </p>

            <h2>7. Programa de indicação</h2>
            <p>
              A Chefix mantém um programa de indicação que concede 10% de cashback recorrente sobre o valor pago pelo cliente indicado, enquanto este mantiver a assinatura ativa. O benefício é interrompido caso o indicado cancele a assinatura ou fique inadimplente. As regras completas do programa podem ser consultadas na página <Link href="/indique-e-ganhe">Indique e ganhe</Link> e podem ser atualizadas a qualquer momento.
            </p>

            <h2>8. Obrigações do usuário</h2>
            <p>Ao utilizar a plataforma, você se compromete a:</p>
            <ul>
              <li>Utilizar os serviços de forma lícita e de acordo com estes Termos.</li>
              <li>Não tentar acessar áreas ou sistemas sem autorização, nem violar a segurança da plataforma.</li>
              <li>Não reproduzir, distribuir ou revender o serviço sem autorização expressa da Chefix.</li>
              <li>Manter os seus dados cadastrais atualizados e responder pela veracidade das informações inseridas.</li>
            </ul>

            <h2>9. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo da plataforma, incluindo software, marca, layout, textos e materiais, é de propriedade da Chefix ou de seus licenciadores e está protegido pela legislação aplicável. O uso da plataforma não transfere ao usuário qualquer direito de propriedade intelectual. Os dados inseridos pelo cliente permanecem de titularidade do cliente, que concede à Chefix licença para tratá-los na medida necessária à prestação do serviço.
            </p>

            <h2>10. Limitação de responsabilidade</h2>
            <p>
              A Chefix empenha-se em manter a plataforma disponível e segura, mas o serviço é fornecido no estado em que se encontra, podendo haver interrupções para manutenção ou por fatores fora do nosso controle. Na máxima extensão permitida pela lei, a Chefix não se responsabiliza por danos indiretos, lucros cessantes ou decisões de negócio tomadas com base nas informações apresentadas pela plataforma. Cabe ao usuário validar os dados inseridos e as configurações do seu estabelecimento.
            </p>

            <h2>11. Alterações dos termos</h2>
            <p>
              Estes Termos podem ser atualizados a qualquer momento para refletir mudanças legais, técnicas ou de negócio. A versão vigente estará sempre disponível nesta página, com a data de atualização revisada. O uso continuado dos serviços após alterações representa a concordância com os novos Termos.
            </p>

            <h2>12. Foro e legislação aplicável</h2>
            <p>
              Estes Termos são regidos pela legislação da República Federativa do Brasil. Fica eleito o foro do domicílio da Chefix para dirimir eventuais controvérsias decorrentes destes Termos, salvo disposição legal que determine foro diverso, especialmente em relações regidas pelo Código de Defesa do Consumidor.
            </p>

            <hr />
            <p className="updated">
              Chefix Tecnologia Ltda · CNPJ 00.000.000/0001-00 · privacidade@chefix.com.br · Última atualização: 24 de julho de 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
