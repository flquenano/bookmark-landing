import React, { useState } from "react";
import "./cta.scss";

const CTA = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(email.toLowerCase());
    setIsEmail(result);
  };

  const warning = (
    <span className="cta__form-warning-text">
      Whoops, make sure it’s an email
    </span>
  );

  return (
    <div className="cta">
      <div className="cta__content">
        <p className="cta__text">35,000+ already joined</p>
        <h1 className="cta__heading">Stay up-to-date with what we’re doing</h1>
        <form action="POST" className="cta__form" onSubmit={submit}>
          <div className="cta__form-warning">
            <input
              type="text"
              name="email"
              id="email"
              className={`cta__form-input ${
                !isEmail && "cta__form-input-warning"
              }`}
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmail && warning}
          </div>
          <button className="btn cta__form-btn">Contact Us</button>
        </form>
      </div>
    </div>
  );
};

export default CTA;
