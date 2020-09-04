import React from "react";

const FaqsItem = ({ idx, title, text }) => (
  <div className="faqs__item">
    <input
      type="checkbox"
      name="Show_Accordion"
      className="faqs__item-show"
      id={`show-${idx}`}
    />
    <label for={`show-${idx}`} className="faqs__item-title">
      <h1 className="faqs__item-heading">{title}</h1>
    </label>
    <div className="faqs__item-body">
      <p className="faqs__item-text">{text}</p>
    </div>
  </div>
);

export default FaqsItem;
