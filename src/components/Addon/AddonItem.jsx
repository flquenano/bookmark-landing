import React from "react";
import PropTypes from "prop-types";

const AddonItem = ({ Logo, name, ver }) => (
  <div className="addon__item">
    <div className="addon__item-display">
      <img src={Logo} alt={`${name} Logo`} className="addon__item-img" />
      <h1 className="addon__item-heading">Add to {name}</h1>
      <p className="addon__item-text">Minimum version {ver}</p>
      <button className="addon__item-btn btn btn-dark">
        Add & Install Extension
      </button>
    </div>
  </div>
);

AddonItem.propTypes = {
  Logo: PropTypes.elementType,
  name: PropTypes.string,
  ver: PropTypes.string
};

export default AddonItem;
