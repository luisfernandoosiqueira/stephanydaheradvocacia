// src/components/ContactSection.js
import React from "react";
import "./ContactSection.css";

import imagemLocalizacao from "../images/localizacao2.png";
import logoContato from "../images/logo.png";

function ContactSection() {
  return (
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
            E‑mail:{" "}
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
