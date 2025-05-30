// src/components/FeedbackSection.js
import React from "react";
import "./FeedbackSection.css";

import audio1 from "../audio/audio1.mp3";
import audio2 from "../audio/audio2.mp3";
import audio3 from "../audio/audio3.mp3";

/* Sites usados para manipular os audios:
Converter: https://www.freeconvert.com/pt/audio-converter
Cortar: https://audiotrimmer.com/pt/
Juntar: https://online.hitpaw.com.br/online-audio-joiner.html */


function FeedbackSection() {
  return (
    <section id="feedback" className="feedback-section">
      <div className="section-header">
        <h2 data-anim="fade-right">Feedback</h2>
        <div className="divider" />
      </div>
      <p className="feedback-intro">
        Ouça o que os clientes têm a dizer sobre o nosso trabalho.
      </p><br />
      <div className="feedback-audios">
        <audio src={audio2} controls controlsList="nodownload">
          Seu navegador não suporta áudio.
        </audio>
        <br />
        <audio src={audio3} controls controlsList="nodownload">
          Seu navegador não suporta áudio.
        </audio>
        <br />
        <audio src={audio1} controls controlsList="nodownload">
          Seu navegador não suporta áudio.
        </audio>
        
      </div>
    </section>
  );
}

export default FeedbackSection;
