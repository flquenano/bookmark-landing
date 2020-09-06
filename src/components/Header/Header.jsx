import React, { useState } from "react";
import "./header.scss";

import { CSSTransition } from "react-transition-group";

import { ReactComponent as Logo } from "assets/logo-bookmark.svg";
import Burger from "assets/icon-hamburger.svg";
import Cross from "assets/icon-close.svg";

import Facebook from "assets/icon-facebook.svg";
import Twitter from "assets/icon-twitter.svg";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <header>
      <nav className="nav">
        <Logo className={`nav__logo ${navVisible && "opacity"}`} />
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
            <img
              src={Burger}
              alt="Hamburger Icon"
              className={`nav__mobile ${navVisible && "opacity"}`}
              onClick={() => setNavVisible(!navVisible)}
            />
          </label>

          <CSSTransition
            in={navVisible}
            timeout={150}
            classNames="navAnimation"
            unmountOnExit
          >
            <div className="nav__mobile-background">
              <div className="nav__mobile-container">
                <div className="nav__mobile-header">
                  <Logo className="nav__mobile-logo" />
                  <img
                    src={Cross}
                    alt="Close Icon"
                    onClick={() => setNavVisible(!navVisible)}
                  />
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
          </CSSTransition>
        </div>
      </nav>
    </header>
  );
};

export default Header;
