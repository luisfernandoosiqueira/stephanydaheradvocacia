// src/components/Navbar.js
import React from "react";
import "./Navbar.css";


function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Stephany Daher</h1>
        <nav className="main-nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#atuacao">Serviços</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {menuOpen && (
            <ul className="hamburger-menu">
              <li><a href="#feedback" onClick={() => setMenuOpen(false)}>Feedback</a></li>
              <li><a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas Frequentes</a></li>
              <li><a href="#links" onClick={() => setMenuOpen(false)}>Links Úteis</a></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
