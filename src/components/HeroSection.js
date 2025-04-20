// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  const scrollToAtuacao = () => {
    const el = document.getElementById("atuacao");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content" data-anim="fade-up">
        <h2 className="hero-title">Advocacia Criminal</h2>
        <p className="hero-subtitle">Defesa estratégica e atendimento 24h</p>
        <button className="btn-hero" onClick={scrollToAtuacao}>
          Conheça Nossas Áreas de Atuação
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
