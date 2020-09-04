import React from "react";
import "./footer.scss";

import Logo from "assets/logo-bookmark.svg";
import Facebook from "assets/icon-facebook.svg";
import Twitter from "assets/icon-twitter.svg";

const Footer = () => (
  <footer class="footer">
    <img src={Logo} alt="Footer Logo" class="footer__logo" />
    <ul class="footer__nav">
      <li class="footer__nav-item">Features</li>
      <li class="footer__nav-item">Pricing</li>
      <li class="footer__nav-item">Contact</li>
    </ul>
    <div class="footer__sns">
      <img src={Facebook} alt="Facebook" class="footer__sns-item" />
      <img src={Twitter} alt="Twitter" class="footer__sns-item" />
    </div>
  </footer>
);

export default Footer;
