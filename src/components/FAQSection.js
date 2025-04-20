// src/components/FAQSection.js
import React from "react";
import "./FAQSection.css";

import AccordionItem from "./AccordionItem";

 // Array com as 20 FAQs
 const faqs = [
  {
    question: "O que é audiência de custódia?",
    answer: "É o ato em que a pessoa presa em flagrante é apresentada ao juiz em até 24 horas.<br/>O juiz verifica se houve abuso, se a prisão foi legal e se deve ser mantida.<br/>O modo como a situação é apresentada pode influenciar diretamente a decisão."
  },
  {
    question: "Qual a diferença entre prisão temporária e preventiva?",
    answer: "A temporária é usada durante a investigação, com prazos definidos.<br/>Já a preventiva pode ser decretada a qualquer momento para garantir o andamento do processo.<br/>Saber diferenciar ajuda a entender o que pode ser feito em cada fase."
  },
  {
    question: "Fui preso em flagrante, e agora?",
    answer: "Após a prisão, a pessoa é levada ao IML para exame de corpo de delito e, em seguida, à delegacia, onde será lavrado o auto de prisão e realizado o interrogatório.<br/>O ideal é contar com a presença de um advogado, para que o preso seja orientado sobre o que deve ou não declarar.<br/>Dependendo do caso, o delegado pode arbitrar fiança ainda na delegacia, nos crimes que permitem esse benefício.<br/>Se não for possível, ou se a fiança não for paga, o preso passará a noite na delegacia.<br/>No dia seguinte, será apresentado ao juiz em uma audiência de custódia, onde será avaliada a legalidade da prisão e decidido se será decretada a prisão preventiva, concedida a liberdade provisória ou aplicada alguma medida cautelar alternativa."
  },
  {
    question: "Tenho direito à liberdade provisória?",
    answer: "Sim, desde que não haja risco à investigação, à ordem pública ou à aplicação da lei.<br/>Ter residência fixa, trabalho e bons antecedentes pode contar a favor.<br/>Apresentar essas informações de forma adequada faz toda a diferença."
  },
  {
    question: "Paguei fiança e agora?",
    answer: "Pagar fiança permite responder em liberdade, mas o processo continua.<br/>É importante seguir todas as condições impostas para não perder o benefício e evitar novas medidas."
  },
  {
    question: "Posso responder ao processo em casa?",
    answer: "Sim, em casos específicos — como gestantes, idosos, doentes graves ou responsáveis por crianças.<br/>O juiz pode converter a prisão em domiciliar quando as condições legais estão presentes e bem fundamentadas."
  },
  {
    question: "Emprestei minha conta e fui envolvido em golpe. E agora?",
    answer: "Mesmo sem saber do crime, quem empresta a conta pode ser responsabilizado.<br/>Apresentar provas de boa-fé e ausência de vantagem indevida é essencial para evitar prejuízos maiores."
  },
  {
    question: "O que é um habeas corpus e quando usar?",
    answer: "É um instrumento jurídico previsto na Constituição Federal para proteger o direito de liberdade de quem se encontra preso ou ameaçado de prisão de forma ilegal.<br/>Pode ser utilizado em qualquer fase, inclusive antes do início formal de um processo.<br/>A apresentação adequada da ilegalidade e da urgência costuma ser determinante para a concessão da medida."
  },
  {
    question: "Fui intimado para depor. Posso ir sozinho?",
    answer: "Sim, mas nem sempre é indicado.<br/>Saber se está sendo ouvido como testemunha ou investigado pode mudar completamente o que deve ou não ser dito.<br/>A preparação prévia costuma evitar problemas desnecessários."
  },
  {
    question: "A polícia levou meu celular. Isso é legal?",
    answer: "Sim, a polícia pode apreender seu celular em situações específicas, como prisão em flagrante, cumprimento de mandado judicial ou com seu consentimento.<br/>A apreensão deve estar relacionada à investigação de um crime e ser formalmente registrada.<br/>No entanto, o conteúdo do celular só pode ser acessado com autorização judicial.<br/>O Superior Tribunal de Justiça já decidiu que é ilícita a prova obtida sem autorização do juiz, salvo raras exceções urgentes e justificadas.<br/>Mesmo com a apreensão, você não é obrigado a fornecer a senha, e tem o direito de ser assistido por um advogado.<br/>Caso haja abuso, é possível contestar a legalidade do ato judicialmente."
  },
  {
    question: "A vítima não quis representar. O processo continua?",
    answer: "Em alguns crimes, como ameaça ou lesão corporal leve, a representação da vítima é necessária para que o processo tenha continuidade.<br/>Se ela não quiser prosseguir, o caso pode ser arquivado.<br/>No entanto, há uma exceção importante: em casos de violência doméstica e familiar contra a mulher, o Ministério Público pode dar continuidade ao processo mesmo sem a representação da vítima, visando proteger sua integridade física e psicológica.<br/>Por isso, é fundamental respeitar os prazos e analisar os detalhes de cada situação com cuidado."
  },
  {
    question: "Tenho antecedentes. Isso impede liberdade?",
    answer: "Ter antecedentes pode dificultar, mas não impede automaticamente.<br/>Cada caso é analisado de forma individual.<br/>A apresentação de vínculos sociais e profissionais pode equilibrar o histórico."
  },
  {
    question: "Posso ser preso só por estar sendo investigado?",
    answer: "Não. A simples investigação não autoriza prisão.<br/>Ela só ocorre em flagrante ou com ordem judicial fundamentada.<br/>A postura durante a apuração pode influenciar na condução do caso."
  },
  {
    question: "Fui chamado para audiência. Sou obrigado a comparecer?",
    answer: "Sim. Se você foi intimado para uma audiência, o comparecimento é obrigatório.<br/>A ausência injustificada pode trazer prejuízos, como condução coercitiva ou até decisões desfavoráveis.<br/>Entender o motivo da audiência e o que será tratado nela é fundamental para se preparar da forma correta."
  },
  {
    question: "Já fui condenado, mas o processo ainda está em recurso. Posso ser preso?",
    answer: "Depende do caso.<br/>Em geral, enquanto houver recurso com efeito suspensivo, a prisão pode ser evitada.<br/>Mas o juiz pode determinar a prisão em situações específicas."
  },
  {
    question: "Meu parente foi preso. O que fazer?",
    answer: "O mais indicado é buscar, o quanto antes, a orientação de um advogado.<br/>Também é importante reunir documentos como comprovante de residência, vínculo familiar e profissional, que poderão ser utilizados para demonstrar que ele reúne condições de responder ao processo em liberdade.<br/>A agilidade na atuação costuma ser determinante nesses casos."
  },
  {
    question: "A tornozeleira pode ser retirada?",
    answer: "Sim. A qualquer momento, o juiz pode rever a medida, especialmente se não houver mais necessidade.<br/>A demonstração de mudança nas circunstâncias é fundamental para o pedido."
  },
  {
    question: "Sou réu primário. Isso me ajuda?",
    answer: "Sim. Primariedade, bons antecedentes e conduta social positiva podem pesar a favor em pedidos de liberdade, substituição de pena ou medidas alternativas.<br/>Apresentar isso corretamente é sempre relevante."
  },
  {
    question: "Posso ser processado mesmo sem provas?",
    answer: "O processo pode ser iniciado com indícios.<br/>No entanto, sem provas suficientes, não pode haver condenação.<br/>A forma de enfrentar a acusação desde o início pode evitar injustiças."
  },
  {
    question: "Posso contratar um advogado só para uma parte do caso?",
    answer: "Sim. É possível contratar apenas para um pedido específico, como habeas corpus ou revogação de tornozeleira.<br/>Isso permite resolver questões pontuais sem compromisso com toda a defesa."
  }
];



function FAQSection() {
  return (
    <section id="duvidas" className="faq-section">
      <div className="section-header">
        <h2 data-anim="fade-right">Dúvidas Frequentes</h2>
        <div className="divider" />
      </div>
      <div className="accordion">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
