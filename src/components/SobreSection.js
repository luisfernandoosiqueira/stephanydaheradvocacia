// src/components/SobreSection.js
import React from "react";
import "./SobreSection.css";

import StephanySobre1 from "../images/sobre1.png";
import StephanySobre2 from "../images/sobre2.png";
import iconeInstagram from "../images/instagram.png";

function SobreSection({ sobreImg, setSobreImg }) {
  return (
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
          Acompanhe pelo Instagram:<br />
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
  );
}

export default SobreSection;
