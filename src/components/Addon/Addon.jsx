import React from "react";
import "./addon.scss";

import AddonItem from "./AddonItem.jsx";

import Chrome from "assets/logo-chrome.svg";
import Firefox from "assets/logo-firefox.svg";
import Opera from "assets/logo-opera.svg";

const Addon = () => {
  const Items = [
    {
      Logo: Chrome,
      name: "Chrome",
      ver: "62"
    },
    {
      Logo: Firefox,
      name: "Firefox",
      ver: "55"
    },
    {
      Logo: Opera,
      name: "Opera",
      ver: "46"
    }
  ];

  return (
    <div className="addon">
      <div className="addon__header">
        <h1 className="addon__heading heading">Download the extension</h1>
        <p className="text">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="addon__content">
        {Items.map((item) => (
          <AddonItem
            key={item.name.replace(" ", "")}
            Logo={item.Logo}
            name={item.name}
            ver={item.ver}
          />
        ))}
      </div>
    </div>
  );
};

export default Addon;
