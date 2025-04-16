import React, { useState } from "react";
import "./App.css";

// Importações de imagens para a aplicação
import iconeWhatsapp from "./images/whatsapp.png";
import iconeInstagram from "./images/instagram.png";
import imagemLocalizacao from "./images/localizacao.png";

// Imagens do Hero: "home.png" para desktop e "home2.png" para mobile (usadas via CSS)
import StephanyAtuacao1 from "./images/flagrantes.png";
import StephanyAtuacao2 from "./images/execucao.png";
import StephanyAtuacao3 from "./images/juri.png";
import StephanyAtuacao4 from "./images/processos2.png";

// Imagens para a seção Sobre
import StephanySobre1 from "./images/sobre1.png";
import StephanySobre2 from "./images/sobre2.png";

// Logo para a seção Contato
import logoContato from "./images/logo.png";

// Componente AccordionItem com indicador de seta
function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Define o ícone de seta: ► (fechado) e ▼ (aberto)
  const arrowIcon = isOpen ? "▼" : "►";

  return (
    <div className="accordion-item" data-anim="fade-up">
      <button
        className="accordion-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Atribuímos data-status para identificar o estado da seta */}
        <span className="accordion-arrow" data-status={isOpen ? "open" : "closed"}>
          {arrowIcon}
        </span>
        {question}
      </button>
      {isOpen && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}

function App() {
  const [sobreImg, setSobreImg] = useState(StephanySobre1);

 // Array com as 20 FAQs
const faqs = [
  {
    question: "O que é audiência de custódia?",
    answer: "É o ato em que a pessoa presa em flagrante é apresentada ao juiz em até 24 horas. O juiz verifica se houve abuso, se a prisão foi legal e se deve ser mantida. O modo como a situação é apresentada pode influenciar diretamente a decisão."
  },
  {
    question: "Qual a diferença entre prisão temporária e preventiva?",
    answer: "A temporária é usada durante a investigação, com prazos definidos. Já a preventiva pode ser decretada a qualquer momento para garantir o andamento do processo. Saber diferenciar ajuda a entender o que pode ser feito em cada fase."
  },
  {
    question: "Fui preso em flagrante, e agora?",
    answer: "Após o flagrante, a pessoa é levada à delegacia e depois ao juiz. A decisão pode ser prisão preventiva, liberdade provisória ou outra medida. A forma como os fatos são apresentados nesse momento pode impactar diretamente na liberdade."
  },
  {
    question: "Tenho direito à liberdade provisória?",
    answer: "Sim, se não houver risco à investigação, à ordem pública ou à aplicação da lei. Residência fixa, trabalho e bons antecedentes costumam contar a favor. Apresentar isso corretamente costuma ser determinante."
  },
  {
    question: "Paguei fiança e agora?",
    answer: "Pagar fiança permite responder em liberdade, mas o processo continua. É importante seguir todas as condições impostas para não perder o benefício e evitar novas medidas."
  },
  {
    question: "Posso responder ao processo em casa?",
    answer: "Sim, em casos específicos — como gestantes, idosos, doentes graves ou responsáveis por crianças. O juiz pode converter a prisão em domiciliar quando as condições legais estão presentes e bem fundamentadas."
  },
  {
    question: "Emprestei minha conta e fui envolvido em golpe. E agora?",
    answer: "Mesmo sem saber do crime, quem empresta a conta pode ser responsabilizado. Apresentar provas de boa-fé e ausência de vantagem indevida é essencial para evitar prejuízos maiores."
  },
  {
    question: "O que é um habeas corpus e quando usar?",
    answer: "É uma medida para proteger quem está sofrendo ou correndo risco de prisão ilegal. Pode ser usado em qualquer fase. A clareza e a urgência no pedido são decisivas para o resultado."
  },
  {
    question: "Fui intimado para depor. Posso ir sozinho?",
    answer: "Sim, mas nem sempre é indicado. Saber se está sendo ouvido como testemunha ou investigado pode mudar completamente o que deve ou não ser dito. A preparação prévia costuma evitar problemas desnecessários."
  },
  {
    question: "A polícia levou meu celular. Isso é legal?",
    answer: "Só é permitido em flagrante, por ordem judicial ou se houver risco à investigação. Mesmo assim, o conteúdo só pode ser acessado com autorização do juiz. É possível contestar abusos nesse tipo de situação."
  },
  {
    question: "A vítima não quis representar. O processo continua?",
    answer: "Em alguns crimes, como ameaça ou lesão leve, a representação da vítima é necessária. Se ela não desejar prosseguir, o processo pode ser arquivado. Respeitar os prazos e entender os detalhes da situação é essencial."
  },
  {
    question: "Tenho antecedentes. Isso impede liberdade?",
    answer: "Ter antecedentes pode dificultar, mas não impede automaticamente. Cada caso é analisado de forma individual. A apresentação de vínculos sociais e profissionais pode equilibrar o histórico."
  },
  {
    question: "Posso ser preso só por estar sendo investigado?",
    answer: "Não. A simples investigação não autoriza prisão. Ela só ocorre em flagrante ou com ordem judicial fundamentada. A postura durante a apuração pode influenciar na condução do caso."
  },
  {
    question: "Fui chamado para audiência. Sou obrigado a comparecer?",
    answer: "Sim. Se você foi intimado para uma audiência, o comparecimento é obrigatório. A ausência injustificada pode trazer prejuízos, como condução coercitiva ou até decisões desfavoráveis. Entender o motivo da audiência e o que será tratado nela é fundamental para se preparar da forma correta."
  },
  {
    question: "Já fui condenado, mas o processo ainda está em recurso. Posso ser preso?",
    answer: "Depende do caso. Em geral, enquanto o recurso suspende os efeitos da condenação, a prisão pode ser evitada. Mas o juiz pode determinar a prisão em situações específicas."
  },
  {
    question: "Meu parente foi preso. O que fazer?",
    answer: "O ideal é reunir documentos como comprovante de residência, vínculo familiar e profissional. Isso pode ser usado para demonstrar que ele pode responder em liberdade. Agir rápido costuma ser decisivo."
  },
  {
    question: "A tornozeleira pode ser retirada?",
    answer: "Sim. A qualquer momento, o juiz pode rever a medida, especialmente se não houver mais necessidade. A demonstração de mudança nas circunstâncias é fundamental para o pedido."
  },
  {
    question: "Sou réu primário. Isso me ajuda?",
    answer: "Sim. Primariedade, bons antecedentes e conduta social positiva podem pesar a favor em pedidos de liberdade, substituição de pena ou medidas alternativas. Apresentar isso corretamente é sempre relevante."
  },
  {
    question: "Posso ser processado mesmo sem provas?",
    answer: "O processo pode ser iniciado com indícios. No entanto, sem provas suficientes, não pode haver condenação. A forma de enfrentar a acusação desde o início pode evitar injustiças."
  },
  {
    question: "Posso contratar um advogado só para uma parte do caso?",
    answer: "Sim. É possível contratar apenas para um pedido específico, como habeas corpus ou revogação de tornozeleira. Isso permite resolver questões pontuais sem compromisso com toda a defesa."
  }
];

  return (
    <div className="App">
      {/* Navbar fixa */}
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Stephany Daher</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#atuacao">Serviços</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Seção Hero (imagem de fundo definida via CSS) */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-anim="fade-up">
          <h2 className="hero-title">Advocacia Criminal</h2>
          <p className="hero-subtitle">
            Defesa estratégica e atendimento 24h
          </p>
          <button
            className="btn-hero"
            onClick={() => {
              const atuacaoSection = document.getElementById("atuacao");
              if (atuacaoSection) {
                atuacaoSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Conheça Nossas Áreas de Atuação
          </button>
        </div>
      </section>

      {/* Seção Áreas de Atuação */}
      <section id="atuacao" className="atuacao-section">
        <div className="section-header">
          <h2 data-anim="fade-right">Áreas de Atuação</h2>
          <div className="divider"></div>
        </div>
        <div className="cards-atuacao">
          <div className="card-atuacao" data-anim="fade-up">
            <img
              src={StephanyAtuacao1}
              alt="Flagrantes e Audiência de Custódia"
            />
            <h3>Flagrantes e Audiência de Custódia</h3>
            <p>
              Acompanhamento especializado em casos de prisão em flagrante, atuando
              tanto durante o interrogatório policial quanto nas audiências de
              custódia para garantir os direitos do acusado desde o primeiro
              momento.
            </p>
          </div>
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.1s">
            <img src={StephanyAtuacao2} alt="Execução Criminal" />
            <h3>Execução Criminal</h3>
            <p>
              Atuação na defesa de presos em regime fechado, semiaberto e aberto,
              incluindo pedidos de progressão de regime, livramento condicional,
              indulto e revogação de monitoramento eletrônico, entre outros.
            </p>
          </div>
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.2s">
            <img src={StephanyAtuacao3} alt="Tribunal do Júri" />
            <h3>Tribunal do Júri</h3>
            <p>
              Atuação em crimes dolosos contra a vida, abrangendo a fase de
              pronúncia e o julgamento no Tribunal do Júri, com interposição de
              recursos após o julgamento.
            </p>
          </div>
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.3s">
            <img
              src={StephanyAtuacao4}
              alt="Processos Criminais – 1º e 2º Grau"
            />
            <h3>Processos Criminais – 1º e 2º Grau</h3>
            <p>
              Atuação estratégica em ações penais envolvendo a Lei de Drogas, o
              Estatuto do Desarmamento, o crime de estelionato, entre outros
              ilícitos, com foco em teses defensivas consistentes, desde a fase
              investigatória até os tribunais, incluindo a interposição de habeas
              corpus.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Dúvidas Frequentes */}
      <section id="duvidas" className="faq-section">
        <div className="section-header">
          <h2 data-anim="fade-right">Dúvidas Frequentes</h2>
          <div className="divider"></div>
        </div>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="sobre-section">
        <div className="sobre-content" data-anim="fade-left">
          <img
            src={sobreImg}
            alt="Stephany Daher"
            className="sobre-img"
            onMouseOver={() => setSobreImg(StephanySobre2)}
            onMouseOut={() => setSobreImg(StephanySobre1)}
          />
        </div>
        <div className="sobre-content" data-anim="fade-right">
          <h2>Sobre a Advogada</h2>
          <p>
            <strong>OAB/GO 56880</strong> - Stephany Daher é advogada
            criminalista, formada em Direito pela PUC Goiás desde 2018. Iniciou
            sua trajetória no Tribunal Regional Eleitoral, em Aparecida de
            Goiânia, onde atuou como estagiária.
            <br />
            <br />
            Após ser aprovada em concurso público, trabalhou na Prefeitura de
            Goiânia, mas decidiu abrir mão da estabilidade para seguir seu
            verdadeiro propósito: a advocacia.
            <br />
            <br />
            Desde então, dedica-se à defesa criminal com atuação estratégica,
            ética e humanizada. Com experiência sólida em casos complexos, está
            disponível 24h para atender situações urgentes.
          </p>
          <br />
          <br />
          <p className="sobre-instagram">
            Acompanhe pelo Instagram:
            <br />
            <a
              href="https://www.instagram.com/daherstephany/"
              target="_blank"
              rel="noreferrer"
              className="btn-instagram"
            >
              <img
                src={iconeInstagram}
                alt="Ícone do Instagram"
                className="icon-instagram"
              />
              @daherstephany
            </a>
          </p>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="contato-section">
        <h2 data-anim="fade-down">Contato</h2>
        <div className="divider"></div>
        <div className="contato-container">
          <div className="contato-info" data-anim="fade-left">
            <h3>Atendimento 24h</h3>
            <p>
              Telefone: <strong>(62) 99274-7813</strong>
            </p>
            <p>
              E-mail: <strong>stephanydaheradv@gmail.com</strong>
            </p>
            <p>
              Endereço:
              <br />
              <em>
                Avenida Engenheiro Atílio Correia Lima, nº 1434, Qd. 108, Lt. 02,
                sala 09, Setor Cidade Jardim, CEP: 74425-030, Goiânia-GO
              </em>
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/RbWnPkRYwMPYsNaz9"
                target="_blank"
                rel="noreferrer"
                className="map-link"
              >
                <img
                  src={imagemLocalizacao}
                  alt="Localização"
                  className="localizacao-img"
                />
              </a>
            </p>
            <p className="localizacao-orientacao">
              Clique na imagem acima para visualizar a localização.
            </p>
          </div>
          <div className="contato-logo" data-anim="fade-right">
            <img
              src={logoContato}
              alt="Logomarca do Escritório"
              className="logo-contato"
            />
          </div>
        </div>
      </section>

      {/* Ícone WhatsApp flutuante */}
      <a
        href="https://wa.me/5562992747813"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fixo"
      >
        <img src={iconeWhatsapp} alt="WhatsApp" />
      </a>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Stephany Daher - OAB/GO 56880 | Todos os
          Direitos Reservados
        </p>
      </footer>
    </div>
  );
}

export default App;
