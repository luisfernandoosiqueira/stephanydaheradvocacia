// src/components/WhatsAppButton.js
import React, { useCallback } from "react";
import "./WhatsAppButton.css";
import iconeWhatsapp from "../images/whatsapp.png";

function WhatsAppButton() {
  const handleClick = useCallback(() => {
    // Dispara o evento de conversão antes de abrir o WhatsApp
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17023064038/CfCQCITNu74aEOavnbU_"
      });
    }
  }, []);

  return (
    <a
      href="https://wa.me/5562992747813?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20advogada%20Stephany%20Daher." target="_blank"
      rel="noreferrer"
      className="whatsapp-fixo"
      onClick={handleClick}
    >
      <img src={iconeWhatsapp} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;
