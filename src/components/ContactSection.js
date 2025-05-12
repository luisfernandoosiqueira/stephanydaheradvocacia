// src/components/ContactSection.js
import React, { useCallback } from "react";
import "./ContactSection.css";

import imagemLocalizacao from "../images/localizacao2.png";
import logoContato from "../images/logo.png";
import WhatsappIcon from "../images/icone-whatsapp.png";

function ContactSection() {
  // Handler para disparar o evento de conversão
  const handleWhatsAppClick = useCallback(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17023064038/CfCQCITNu74aEOavnbU_"
      });
    }
  }, []);

  return (
    <section id="contato" className="contato-section">
      <h2 data-anim="fade-down">Contato</h2>
      <div className="divider"></div>

      <div className="contato-container">
        <div className="contato-info" data-anim="fade-left">
          <h3>Atendimento 24h</h3>
          {/* Substituição do telefone por link do WhatsApp */}
          <p>
            <a
              href="https://wa.me/5562992747813?text=Ol%C3%A1%21%20Preciso%20conversar%20com%20um%20advogado%20criminalista%20e%20encontrei%20seu%20contato."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
              onClick={handleWhatsAppClick}
            >
              <img
                src={WhatsappIcon}
                alt="WhatsApp"
                className="icon-whatsapp-contact"
              />
              <strong>(62) 99274-7813</strong>
            </a>
          </p>

          <p>
            E-mail:{" "}
            <strong>
              <span className="email-text">
                stephanydaheradv@gmail.com
              </span>
            </strong>
          </p>
          <p>
            Endereço:<br />
            <em>
              Av. Eng. Atílio Correia Lima, 1434, Qd. 108, Lt. 02, sala 09<br />
              Setor Cidade Jardim, Goiânia-GO, CEP 74425-030
            </em>
          </p>
          {/* envolvimento em <p> para manter margem igual às outras linhas */}
          <p>
            <a
              href="https://maps.app.goo.gl/msHC9KCZxXRMACg6A"
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
            Clique na imagem acima para abrir no Google Maps.
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
  );
}

export default ContactSection;
