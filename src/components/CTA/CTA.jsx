import React from "react";
import "./cta.scss";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta__content">
        <p className="cta__text">35,000+ already joined</p>
        <h1 className="cta__heading">Stay up-to-date with what we’re doing</h1>
        <form action="POST" className="cta__form">
          <div className="cta__form-warning">
            <input
              type="text"
              name="email"
              id="email"
              className="cta__form-input"
              placeholder="example@email.com"
            />
            <span className="cta__form-warning-text">
              Whoops, make sure it’s an email
            </span>
          </div>
          <button className="btn cta__form-btn">Contact Us</button>
        </form>
      </div>
    </div>
  );
};

export default CTA;
