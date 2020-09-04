import React from "react";
import PropTypes from "prop-types";

const AddonItem = ({ Logo, name, ver }) => (
  <div class="addon__item">
    <div class="addon__item-display">
      <img src={Logo} alt={`${name} Logo`} class="addon__item-img" />
      <h1 class="addon__item-heading">Add to {name}</h1>
      <p class="addon__item-text">Minimum version {ver}</p>
      <button class="addon__item-btn btn btn-dark">
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
