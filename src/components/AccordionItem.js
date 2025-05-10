// src/components/AccordionItem.js
import React, { useState } from "react";
import "./AccordionItem.css";

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item" data-anim="fade-up">
      <button
        className="accordion-question"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="accordion-text">{question}</span>
        <span className="accordion-arrow" />
      </button>

      {isOpen && (
        <div
          className="accordion-answer"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}

export default AccordionItem;
