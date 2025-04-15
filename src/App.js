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

function App() {
  const [sobreImg, setSobreImg] = useState(StephanySobre1);

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
              Acompanhamento especializado em casos de prisão em flagrante, atuando tanto durante o interrogatório policial quanto nas audiências de custódia para garantir os direitos do acusado desde o primeiro momento.
            </p>
          </div>
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.1s">
            <img src={StephanyAtuacao2} alt="Execução Criminal" />
            <h3>Execução Criminal</h3>
            <p>
              Atuação na defesa de presos em regime fechado, semiaberto e aberto, incluindo pedidos de progressão de regime, livramento condicional, indulto e revogação de monitoramento eletrônico, entre outros.
            </p>
          </div>
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.2s">
            <img src={StephanyAtuacao3} alt="Tribunal do Júri" />
            <h3>Tribunal do Júri</h3>
            <p>
              Atuação em crimes dolosos contra a vida, abrangendo a fase de pronúncia e o julgamento no Tribunal do Júri, com interposição de recursos após o julgamento.
            </p>
          </div>
          <div className="card-atuacao" data-anim="fade-up" data-delay="0.3s">
            <img
              src={StephanyAtuacao4}
              alt="Processos Criminais – 1º e 2º Grau"
            />
            <h3>Processos Criminais – 1º e 2º Grau</h3>
            <p>
            Atuação estratégica em ações penais envolvendo a Lei de Drogas, o Estatuto do Desarmamento, o crime de estelionato, entre outros ilícitos, com foco em teses defensivas consistentes, desde a fase investigatória até os tribunais, incluindo a interposição de habeas corpus.            </p>
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
            <strong>OAB/GO 56880</strong> - Stephany Daher é advogada criminalista,
            formada em Direito pela PUC Goiás desde 2018. Iniciou sua trajetória no
            Tribunal Regional Eleitoral, em Aparecida de Goiânia, onde atuou como
            estagiária.
            <br />
            <br />
            Após ser aprovada em concurso público, trabalhou na Prefeitura de Goiânia,
            mas decidiu abrir mão da estabilidade para seguir seu verdadeiro propósito:
            a advocacia.
            <br />
            <br />
            Desde então, dedica-se à defesa criminal com atuação estratégica, ética e
            humanizada. Com experiência sólida em casos complexos, está disponível 24h
            para atender situações urgentes.
          </p>
          <br />
          <p>
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
