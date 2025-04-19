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

// Audios para a seção Feedback (vocês podem adicionar mais conforme necessário)
import audio1 from "./audio/audio1.mp3";
import audio2 from "./audio/audio2.mp3";

// Componente AccordionItem com indicador de seta
function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowIcon = isOpen ? "▼" : "►";

  return (
    <div className="accordion-item" data-anim="fade-up">
      <button
        className="accordion-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="accordion-arrow"
          data-status={isOpen ? "open" : "closed"}
        >
          {arrowIcon}
        </span>
        {question}
      </button>
      {isOpen && (
        <div
          className="accordion-answer"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}

function App() {
  const [sobreImg, setSobreImg] = useState(StephanySobre1);
  const [menuOpen, setMenuOpen] = useState(false); // Adicionada a definição do estado

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
      answer: "Sim, se não houver risco à investigação, à ordem pública ou à aplicação da lei.<br/>Residência fixa, trabalho e bons antecedentes costumam contar a favor.<br/>Apresentar isso corretamente costuma ser determinante."
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
      answer: "É uma medida para proteger quem está sofrendo ou correndo risco de prisão ilegal.<br/>Pode ser usado em qualquer fase.<br/>A clareza e a urgência no pedido são decisivas para o resultado."
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
      answer: "Depende do caso.<br/>Em geral, enquanto o recurso suspende os efeitos da condenação, a prisão pode be evitada.<br/>Mas o juiz pode determinar a prisão em situações específicas."
    },
    {
      question: "Meu parente foi preso. O que fazer?",
      answer: "O ideal é reunir documentos como comprovante de residência, vínculo familiar e profissional.<br/>Isso pode ser usado para demonstrar que ele pode responder em liberdade.<br/>Agir rápido costuma ser decisivo."
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


  return (
    <div className="App">
      {/* Navbar fixa */}
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Stephany Daher</h1>
          <nav className="main-nav">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#atuacao">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {menuOpen && (
              <ul className="hamburger-menu">
                <li><a href="#feedback" onClick={() => setMenuOpen(false)}>Feedback</a></li>
                <li><a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas Frequentes</a></li>
                <li><a href="#links" onClick={() => setMenuOpen(false)}>Links Úteis</a></li>
              </ul>
            )}
          </nav>
        </div>
      </header>

      {/* Seção Hero */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-anim="fade-up">
          <h2 className="hero-title">Advocacia Criminal</h2>
          <p className="hero-subtitle">Defesa estratégica e atendimento 24h</p>
          <button
            className="btn-hero"
            onClick={() => {
              const el = document.getElementById("atuacao");
              if (el) el.scrollIntoView({ behavior: "smooth" });
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
            <img src={StephanyAtuacao1} alt="Flagrantes e Audiência de Custódia" />
            <h3>Flagrantes e Audiência de Custódia</h3>
            <p>
              Acompanhamento especializado em casos de prisão em flagrante, atuando
              tanto durante o interrogatório policial quanto nas audiências de
              custódia para garantir os direitos do acusado desde o primeiro
              momento.
            </p>
          </div>
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.3s">
            <img src={StephanyAtuacao4} alt="Processos Criminais – 1º e 2º Grau" />
            <h3>Processos Criminais – 1º e 2º Grau</h3>
            <p>
              Atuação estratégica em ações penais envolvendo a Lei de Drogas, o
              Estatuto do Desarmamento, o crime de estelionato, entre outros
              ilícitos, com foco em teses defensivas consistentes, desde a fase
              investigatória até os tribunais, incluindo a interposição de habeas
              corpus.
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
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.1s">
            <img src={StephanyAtuacao2} alt="Execução Criminal" />
            <h3>Execução Criminal</h3>
            <p>
              Atuação na defesa de presos em regime fechado, semiaberto e aberto,
              incluindo pedidos de progressão de regime, livramento condicional,
              indulto e revogação de monitoramento eletrônico, entre outros.
            </p>
          </div>
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
            Acompanhe no Instagram:<br />
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

      {/* Seção Feedback (opcional, comentada) */}
      <section id="feedback" className="feedback-section">
        <div className="section-header">
          <h2 data-anim="fade-right">Feedback</h2>
          <div className="divider"></div>
        </div>
        <p className="feedback-intro">
          Ouça o que os nossos clientes têm a dizer sobre o nosso trabalho.
        </p>
        <br />
        <div className="feedback-audios">

          <audio src={audio2} controls controlsList="nodownload">Seu navegador não suporta áudio.</audio>
          <br />
          <audio src={audio1} controls controlsList="nodownload">Seu navegador não suporta áudio.</audio>

        </div>
      </section>

      {/* Seção Dúvidas Frequentes */}
      <section id="duvidas" className="faq-section">
        <div className="section-header">
          <h2 data-anim="fade-right">Dúvidas Frequentes</h2>
          <div className="divider"></div>
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

      {/* Seção Links Úteis */}
      <section id="links" className="links-section">
        <div className="section-header">
          <h2 data-anim="fade-right">Links Úteis</h2>
          <div className="divider"></div>
        </div>
        <p className="links-intro">
          Clique no link escolhido para ser direcionado à página do órgão ou
          instituição correspondente.
        </p>
        <ul className="links-list">
          <li><a href="https://projudi.tjgo.jus.br/ConsultaJurisprudencia" target="_blank" rel="noreferrer">Jurisprudência TJGO</a></li>
          <li><a href="https://processo.stj.jus.br/SCON/" target="_blank" rel="noreferrer">Jurisprudência STJ</a></li>
          <li><a href="https://jurisprudencia.stf.jus.br/pages/search" target="_blank" rel="noreferrer">Jurisprudência STF</a></li>
          <li><a href="https://www.policiacivil.go.gov.br/telefones/" target="_blank" rel="noreferrer">Lista Telefônica Polícia Civil GO</a></li>
          <li><a href="https://www.tjgo.jus.br/pubtjud/ctrl/agendaCtrl.php?opc=agendaLst" target="_blank" rel="noreferrer">Agenda Judiciária – TJGO</a></li>
          <li><a href="https://raivirtual.ssp.go.gov.br/#/" target="_blank" rel="noreferrer">Boletim de Ocorrência Virtual GO</a></li>
          <li><a href="https://iivirtual.ssp.go.gov.br/#/ac" target="_blank" rel="noreferrer">Atestado/Certidão de Antecedentes GO</a></li>
          <li><a href="https://www.cnj.jus.br/wp-content/uploads/2011/02/cartilha_da_pessoa_presa_2011.pdf" target="_blank" rel="noreferrer">Cartilha de Direitos da Pessoa Presa – CNJ</a></li>
          <li><a href="https://www.policiapenal.go.gov.br/noticias-da-dgap/dgap-lanca-novo-sistema-de-retirada-de-senha-online.html" target="_blank" rel="noreferrer">Procedimentos de Visitação – Polícia Penal GO</a></li>
          <li><a href="https://projudi.tjgo.jus.br/CertidaoNegativaPositivaPublica?PaginaAtual=1" target="_blank" rel="noreferrer">Certidão Criminal – Justiça Estadual</a></li>
          <li><a href="https://projudi.tjgo.jus.br/" target="_blank" rel="noreferrer">PROJUDI</a></li>
        </ul>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="contato-section">
        <h2 data-anim="fade-down">Contato</h2>
        <div className="divider"></div>
        <div className="contato-container">
          <div className="contato-info" data-anim="fade-left">
            <h3>Atendimento 24h</h3>
            <p>Telefone: <strong>(62) 99274-7813</strong></p>
            <p>E-mail: <strong><span className="email-text">stephanydaheradv@gmail.com</span></strong></p>
            <p>
              Endereço:<br />
              <em>
                Av. Eng. Atílio Correia Lima, 1434, Qd. 108, Lt. 02, sala 09<br />
                Setor Cidade Jardim, Goiânia-GO, CEP 74425-030
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
        href="https://wa.me/5562992747813?text=Ol%C3%A1%21%20Encontrei%20seu%20WhatsApp%20no%20site%20stephanydaheradvocacia.com.br%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fixo"
      >
        <img src={iconeWhatsapp} alt="WhatsApp" />
      </a>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Stephany Daher — OAB/GO 56880 | Todos os
          Direitos Reservados
        </p>
      </footer>
    </div>
  );
}

export default App;