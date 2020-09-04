import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Selector from "./Selector.jsx";

const Selectors = ({ changeTab }) => {
  const selectors = ["Simple Bookmarking", "Speedt Searching", "Easy Sharing"];
  return (
    <div className="features-tabs__selectors">
      {selectors.map((selector, idx) => (
        <Selector text={selector} key={idx} />
      ))}
    </div>
  );
};

Selectors.propTypes = {
  changeTab: PropTypes.func.isRequired
};

export default Selectors;
