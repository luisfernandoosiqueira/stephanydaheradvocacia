// src/components/WhatsAppButton.js
import React from "react";
import "./WhatsAppButton.css";

import iconeWhatsapp from "../images/whatsapp.png";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562992747813?text=Ol%C3%A1%21%20Encontrei%20seu%20WhatsApp%20no%20site%20stephanydaheradvocacia.com.br%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fixo"
    >
      <img src={iconeWhatsapp} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;
