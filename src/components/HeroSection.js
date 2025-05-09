// src/components/HeroSection.js
import React, { useCallback } from "react";
import "./HeroSection.css";
import WhatsappIcon from "../images/icone-whatsapp.png";

function HeroSection() {
  // Handler para disparar o evento de conversão
  const handleWhatsAppClick = useCallback((e) => {
    // dispara a conversão
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17023064038/CfCQCITNu74aEOavnbU_"
      });
    }
    // não precisa preventDefault pois abre em nova aba
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content" data-anim="fade-up">
        <h2 className="hero-title">Advocacia Criminal</h2>
        <h1 className="hero-subtitle">
          Precisa de um <strong>Advogado Criminal</strong>? <br/>
          Plantão 24 horas - Goiânia e Região
        </h1>
        <a
          className="btn-hero btn-whatsapp"
          href="https://wa.me/5562992747813?text=Ol%C3%A1%21%20Encontrei%20seu%20WhatsApp%20no%20site%20stephanydaheradvocacia.com.br%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          <img
            src={WhatsappIcon}
            alt="WhatsApp"
            className="icon-whatsapp"
          />
          Falar com Advogado Agora
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
