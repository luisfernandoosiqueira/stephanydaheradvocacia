import React, { useState } from "react";
import "./SobreSection.css";

import StephanySobre1 from "../images/sobre1.png";
import StephanySobre2 from "../images/sobre2.png";
import StephanySobre3 from "../images/sobre3.png";
import StephanySobre4 from "../images/sobre4.png";
import StephanySobre5 from "../images/sobre5.png";
import iconeInstagram from "../images/instagram.png";

const imagens = [
  StephanySobre1,
  StephanySobre2,
  StephanySobre3,
  StephanySobre4,
  StephanySobre5,
  // adicione mais imagens aqui, sem alterar a lógica
];

function SobreSection() {
  const [current, setCurrent] = useState(0);
  const length = imagens.length;

  // Swipe
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const threshold = 50;

  const nextSlide = () => {
    if (current < length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStartX - touchEndX;
    if (diff > threshold && current < length - 1) {
      nextSlide();
    } else if (diff < -threshold && current > 0) {
      prevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <section id="sobre" className="sobre-section">
      {/* LADO IMAGEM */}
      <div className="sobre-content" data-anim="fade-left">
        <div className="carousel">
          <button
            className="carousel-button prev"
            onClick={prevSlide}
            disabled={current === 0}
          >
            ‹
          </button>
          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {imagens.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Stephany slide ${idx + 1}`}
                  className="sobre-img carousel-slide"
                />
              ))}
            </div>
          </div>
          <button
            className="carousel-button next"
            onClick={nextSlide}
            disabled={current === length - 1}
          >
            ›
          </button>
        </div>

        {/* Pontinhos indicadores */}
        <div className="carousel-dots">
          {imagens.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>

      {/* LADO TEXTO */}
      <div className="sobre-content" data-anim="fade-right">
        <h2>Sobre a Advogada</h2>
        <br />
        <p>
          <strong>OAB/GO 56880</strong> — Stephany Daher é advogada
          criminalista, formada em Direito pela PUC Goiás desde 2018. Iniciou
          sua trajetória no Tribunal Regional Eleitoral, em Aparecida de
          Goiânia, onde atuou como estagiária e depois foi promovida ao cargo de assessor especial.
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
  );
}

export default SobreSection;
