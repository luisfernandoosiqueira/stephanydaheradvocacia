// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  const termos = [
"Advogado 24 horas",
    "Advogado online",
    "Advogado Criminal Goiânia",
    "Advogado Criminal Aparecida de Goiânia",
    "Advogado Criminal Senador Canedo",
    "Advogado Criminal Trindade",
    "Advogado Criminalista Goiânia",
    "Advogado para Execução Penal",
    "Prisão em Flagrante",
    "Preso em Flagrante",
    "Acompanhamento em Delegacia",
    "Advogado Criminal Urgente Goiânia",
    "Advogado de Defesa Criminal",
    "Advogado Criminal",
    "Advogado Criminalista",
    "Advogado Criminal Urgente",
    "Advogado Criminal 24h",
    "Advogado Criminalista Urgente",
    "Advogado Flagrante",
    "Advogado Habeas Corpus",
    "Advogado Audiência de Custódia",
    "Advogado para Execução Criminal",
    "Advogado para Crime de Estelionato",
    "Advogado para Crimes Cibernéticos"
   ];

  // Duplica os termos para scroll contínuo sem gap
  const termosDuplicados = [...termos, ...termos];

  return (
    <footer className="footer">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {termosDuplicados.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
     {/* trecho atualizado: duas linhas condicionais */}
      <p className="footer-text">
        <span className="footer-line1">
          © {new Date().getFullYear()} Stephany Daher — OAB/GO 56880 |
        </span>
        <span className="footer-line2">Todos os Direitos Reservados</span>
      </p>
    </footer>
  );
}

export default Footer;