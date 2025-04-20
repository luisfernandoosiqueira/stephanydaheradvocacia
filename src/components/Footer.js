// src/components/Footer.js
import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Stephany Daher — OAB/GO 56880 | Todos os
        Direitos Reservados
      </p>
      
    </footer>
  );
}

export default Footer;
