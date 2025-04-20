// src/components/LinksSection.js
import React from "react";
import "./LinksSection.css";


function LinksSection() {
    return (
        <section id="links" className="links-section">
            <div className="section-header">
                <h2 data-anim="fade-right">Links Úteis</h2>
                <div className="divider" />
            </div>
            <br />
            <p className="links-intro">
                Clique no link escolhido para ser direcionado à página do órgão ou
                instituição correspondente.
            </p>
            <br />
            
            <ul className="links-list">
                <li><a href="https://projudi.tjgo.jus.br/ConsultaJurisprudencia" target="_blank" rel="noreferrer">Jurisprudência TJGO</a></li>
                <li><a href="https://processo.stj.jus.br/SCON/" target="_blank" rel="noreferrer">Jurisprudência STJ</a></li>
                <li><a href="https://jurisprudencia.stf.jus.br/pages/search" target="_blank" rel="noreferrer">Jurisprudência STF</a></li>
                <li><a href="https://www.policiacivil.go.gov.br/telefones/" target="_blank" rel="noreferrer">Lista Telefônica Polícia Civil GO</a></li>
                <li><a href="https://www.tjgo.jus.br/pubtjud/ctrl/agendaCtrl.php?opc=agendaLst" target="_blank" rel="noreferrer">Agenda Judiciária – TJGO</a></li>
                <li><a href="https://raivirtual.ssp.go.gov.br/#/" target="_blank" rel="noreferrer">Boletim de Ocorrência Virtual GO</a></li>
                <li><a href="https://iivirtual.ssp.go.gov.br/#/ac" target="_blank" rel="noreferrer">Atestado/Certidão de Antecedentes GO</a></li>
                <li><a href="https://www.cnj.jus.br/wp-content/uploads/2011/02/cartilha_da_pessoa_presa_2011.pdf" target="_blank" rel="noreferrer">Cartilha de Direitos da Pessoa Presa – CNJ</a></li>
                <li><a href="https://www.policiapenal.go.gov.br/noticias-da-dgap/dgap-lanca-novo-sistema-de-retirada-de-senha-online.html" target="_blank" rel="noreferrer">Procedimentos de Visitação – Polícia Penal GO</a></li>
                <li><a href="https://projudi.tjgo.jus.br/CertidaoNegativaPositivaPublica?PaginaAtual=1" target="_blank" rel="noreferrer">Certidão Criminal – Justiça Estadual</a></li>
                <li><a href="https://projudi.tjgo.jus.br/" target="_blank" rel="noreferrer">PROJUDI</a></li>
            </ul>
            <br />
            <br />
        </section>
    );
}

export default LinksSection;
