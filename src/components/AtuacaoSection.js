// src/components/AtuacaoSection.js
import React from "react";
import "./AtuacaoSection.css";

import StephanyAtuacao1 from "../images/flagrantes.png";
import StephanyAtuacao2 from "../images/execucao.png";
import StephanyAtuacao3 from "../images/juri.png";
import StephanyAtuacao4 from "../images/processos2.png";

function AtuacaoSection() {
  return (
    <section id="atuacao" className="atuacao-section">
      <div className="section-header">
        <h2 data-anim="fade-right">Áreas de Atuação</h2>
        <div className="divider" />
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
  );
}

export default AtuacaoSection;
