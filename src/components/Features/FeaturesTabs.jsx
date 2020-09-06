import React, { useState } from "react";

import Selector from "./Tabs/Selector.jsx";
import Tab from "./Tabs/Tab.jsx";

import IlluOne from "assets/illustration-features-tab-1.svg";
import IlluTwo from "assets/illustration-features-tab-2.svg";
import IlluThree from "assets/illustration-features-tab-3.svg";

const Tabs = () => {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);

  const changeTab = (tabNum) => {
    setTab(tabNum);
    setActive(tabNum);
  };

  const selectors = ["Simple Bookmarking", "Speedt Searching", "Easy Sharing"];
  const tabs = [
    {
      image: IlluOne,
      heading: "Bookmark in one click",
      text:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
      image: IlluTwo,
      heading: "Intelligent search",
      text:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
      image: IlluThree,
      heading: "Share your bookmarks",
      text:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
  ];
  return (
    <div className="features-tabs">
      <div className="features-tabs__selectors">
        {selectors.map((selector, idx) => (
          <Selector
            text={selector}
            key={idx}
            changeTab={() => changeTab(idx)}
            isActive={
              active === idx ? "features-tabs__selectors-heading-active" : ""
            }
          />
        ))}
      </div>
      <Tab
        image={tabs[tab].image}
        heading={tabs[tab].heading}
        text={tabs[tab].text}
      />
    </div>
  );
};

export default Tabs;
