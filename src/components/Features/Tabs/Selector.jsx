import React from "react";

const Selector = ({ text, idx, changeTab }) => (
  <>
    <div className="features-tabs__selectors-heading" onClick={changeTab}>
      {text}
    </div>
  </>
);

export default Selector;
