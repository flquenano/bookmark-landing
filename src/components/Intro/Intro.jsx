import React from "react";
import "./intro.scss";

import Illustration from "assets/illustration-hero.svg";

const Intro = () => (
  <div className="intro">
    <div className="intro__display">
      <img
        src={Illustration}
        alt="Illustration illustration-hero"
        className="intro__display-img"
      />
      <div className="tablet"></div>
    </div>

    <div className="intro__context">
      <h1 className="intro__context-heading heading-intro">
        A Simple Bookmark Manager
      </h1>
      <p className="intro__context-text text">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly.
        <span className="bold">Try it for free.</span>
      </p>
      <div className="intro__context-btn-group">
        <button className="btn btn-dark">Get it on Chrome</button>
        <button className="btn">Get it on Firefox</button>
      </div>
    </div>
  </div>
);

export default Intro;
