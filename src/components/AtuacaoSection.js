// src/components/AtuacaoSection.js
import React, { useEffect, useRef } from "react";
import "./AtuacaoSection.css";

const cardsData = [
  {
    icon: "⚖️",
    title: (
      <>
        Urgência Criminal<br/>
        Atendimento Imediato<br/>
        24h
      </>
    ),
    question: "Está preso ou recebeu voz de prisão?",
    tagline:
      "Atuação rápida e estratégica desde o primeiro contato com a autoridade policial.",
    items: [
      "Flagrante",
      "Audiência de Custódia",
      "Pedido de Liberdade Provisória",
      "Pedido de Relaxamento de Flagrante",
      "Medida Protetiva (Remoção)",
      "Habeas Corpus",
    ],
  },
  {
    icon: "👮‍♀️",
    title: "Delegacia e Inquérito Policial",
    question: "Foi intimado para depor?",
    tagline:
      "Não vá sozinho. Conte com a orientação de um advogado criminalista experiente.",
    items: [
      "Intimações para Depoimento",
      "Acompanhamento de Depoimentos",
      "Acompanhamento de Interrogatório Policial",
      "Acompanhamento de Inquérito Policial",
    ],
  },
  {
    icon: "📂",
    title: (
      <>
        Defesa Técnica no<br/>
        Processo Penal
      </>
    ),
    tagline:
      "Atuação estratégica em todas as fases: da defesa inicial aos tribunais superiores.",
    items: [
      "Defesa Preliminar e Resposta à Acusação",
      "Propostas de Acordo de Não Persecução Penal (ANPP)",
      "Produção de Provas e Pedidos Técnicos",
      "Audiência de Instrução e Julgamento",
      "Alegações Finais (Orais ou Escritas)",
      "Sustentação Oral",
      "Tribunal do Júri",
      "Pedidos de Absolvição ou Desclassificação",
      "Recursos (Apelação, Embargos, STJ e STF)",
    ],
  },
  {
    icon: "⚔️",
    title: (
      <>
        Defesa Criminal<br/>
        Áreas de Atuação
      </>
    ),
    question: "Processado ou acusado?",
    tagline:
      "Defesa estratégica em crimes graves e complexos, com sigilo e dedicação total.",
    items: [
      "Homicídio, Tentativa de Homicídio e Lesão Corporal",
      "Roubo, Furto, Receptação e Crimes Patrimoniais",
      "Tráfico de Drogas, Posse e Associação",
      "Estelionato, Falsidade, Lavagem de Dinheiro",
      "Crimes Cibernéticos, Golpes Online e Fraudes",
      "Crimes Contra a Honra e Crimes Sexuais",
      "Corrupção e Crimes Contra a Administração Pública",
      "Crimes de Trânsito",
      "Violência Doméstica",
      "E outros crimes previstos no Código Penal e legislações especiais",
    ],
  },
  {
    icon: "🔓",
    title: (
      <>
        Execução Penal<br/>
        Garantias de Direitos
      </>
    ),
    question: "Seu direito à liberdade começa na execução penal.",
    tagline:
      "Atuação focada na redução de pena e no cumprimento humanizado.",
    items: [
      "Progressão de Regime",
      "Livramento Condicional",
      "Indulto e Comutação de Pena",
      "Revogação de Monitoramento Eletrônico",
      "Detração e Remição de Pena",
    ],
  },
  {
    icon: "🧑‍⚖️",
    title: (
      <>
        Juizado Especial <br/>
        Criminal – JECRIM
      </>
    ),
    question:
      "Infrações de menor potencial ofensivo também exigem defesa especializada.",
    tagline: "",
    items: [
      "Queixa-Crime",
      "Transação Penal",
      "Composição Civil dos Danos",
      "Audiência Preliminar / Conciliação",
      "Suspensão Condicional do Processo (SURSIS Processual)",
    ],
  },
];

function AtuacaoSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.6) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.6 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="atuacao" className="atuacao-section">
      <div className="section-header">
        <h2 data-anim="fade-right">Áreas de Atuação</h2>
        <div className="divider" />
      </div>
      <div className="cards-atuacao">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="card-atuacao"
            data-anim="fade-up"
            data-delay={`${i * 0.1}s`}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            {card.question && <p className="card-question">{card.question}</p>}
            {card.tagline && <p className="card-tagline">{card.tagline}</p>}
            <ul>
              {card.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AtuacaoSection;
