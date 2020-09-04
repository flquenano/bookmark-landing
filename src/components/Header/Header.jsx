import React from "react";
import "./header.scss";

import Logo from "assets/logo-bookmark.svg";
import Burger from "assets/icon-hamburger.svg";
import Cross from "assets/icon-close.svg";

import Facebook from "assets/icon-facebook.svg";
import Twitter from "assets/icon-twitter.svg";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} alt="Logo Bookmark" className="nav__logo" />
        <div className="nav__desktop">
          <ul className="nav__list">
            <li className="nav__list-item">Features</li>
            <li className="nav__list-item">Pricing</li>
            <li className="nav__list-item">Contact</li>
            <li className="nav__list-item">Login</li>
          </ul>
        </div>

        <div className="nav__mobile">
          <input
            type="checkbox"
            name="nav mobile"
            id="nav__checkbox"
            className="nav__show"
          />
          <label htmlFor="nav__checkbox">
            <img src={Burger} alt="Hamburger Icon" className="nav__mobile" />
          </label>
          <div className="nav__mobile-background">
            <div className="nav__mobile-container">
              <div className="nav__mobile-header">
                <img src={Logo} alt="Logo" />
                <img src={Cross} alt="Close Icon" />
              </div>
              <ul className="nav__mobile-list">
                <li className="nav__mobile-item">Features</li>
                <li className="nav__mobile-item">Pricing</li>
                <li className="nav__mobile-item">Contact</li>
                <li className="nav__mobile-item">Login</li>
              </ul>
              <div className="nav__mobile-footer">
                <img src={Facebook} alt="Facebook Icon" />
                <img src={Twitter} alt="Twitter Icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
