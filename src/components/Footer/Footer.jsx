import React from "react";
import "./footer.scss";

import { ReactComponent as Logo } from "assets/logo-bookmark.svg";
import Facebook from "assets/icon-facebook.svg";
import Twitter from "assets/icon-twitter.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <Logo className="footer__logo" />
      <ul className="footer__nav">
        <li className="footer__nav-item">Features</li>
        <li className="footer__nav-item">Pricing</li>
        <li className="footer__nav-item">Contact</li>
      </ul>
      <div className="footer__sns">
        <img src={Facebook} alt="Facebook" className="footer__sns-item" />
        <img src={Twitter} alt="Twitter" className="footer__sns-item" />
      </div>
    </div>
  </footer>
);

export default Footer;
