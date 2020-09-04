import React from "react";
import PropTypes from "prop-types";

const Tab = ({ image, heading, text }) => (
  <div className="features-tabs__content">
    <div className="features-tabs__display">
      <img src={image} className="features-tabs__display-img" alt="Tab 1" />
      <div className="tablet"></div>
    </div>
    <div className="features-tabs__context">
      <div className="features-tabs__context-tab">
        <h1 className="heading">{heading}</h1>
        <p className="text">{text}</p>
        <button className="btn btn-dark">More Info</button>
      </div>
    </div>
  </div>
);

Tab.propTypes = {
  image: PropTypes.elementType.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Tab;
