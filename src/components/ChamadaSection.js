// src/components/ChamadaSection.js 
import React, { useCallback } from "react";
import "./ChamadaSection.css";
import WhatsappIcon from "../images/icone-whatsapp.png";

function ChamadaSection() {
  // Handler para disparar o evento de conversão
  const handleWhatsAppClick = useCallback(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17023064038/CfCQCITNu74aEOavnbU_"
      });
    }
    // não precisa preventDefault pois abre em nova aba
  }, []);

  return (
    <section id="chamada" className="chamada-section">
      <div className="chamada-overlay" />
      <div className="chamada-content" data-anim="fade-up">
        <h2 className="chamada-title">Não espere o pior. <br /> <br /> Sua liberdade deve ser levada a sério</h2>
        <h1 className="chamada-subtitle">
          Conte com um advogado experiente para defendê-la.<br />

        </h1>
        <a
          className="btn-hero btn-whatsapp"
          href="https://wa.me/5562992747813?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Stephany%20Daher."
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          <img
            src={WhatsappIcon}
            alt="WhatsApp"
            className="icon-whatsapp"
          />
          Falar com a Dra Stephany Daher
        </a>
      </div>
    </section>
  );
}

export default ChamadaSection;