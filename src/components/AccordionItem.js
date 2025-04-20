// src/components/AccordionItem.js
import React, { useState } from "react";
import "./AccordionItem.css";


function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowIcon = isOpen ? "▼" : "►";

  return (
    <div className="accordion-item" data-anim="fade-up">
      <button
        className="accordion-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="accordion-arrow"
          data-status={isOpen ? "open" : "closed"}
        >
          {arrowIcon}
        </span>
        {question}
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
