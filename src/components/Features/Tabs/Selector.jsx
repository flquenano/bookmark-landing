import React from "react";

const Selector = ({ text, idx, changeTab, isActive }) => (
  <>
    <div
      className={`features-tabs__selectors-heading ${isActive}`}
      onClick={changeTab}
    >
      {text}
    </div>
  </>
);

export default Selector;
