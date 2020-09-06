import React from "react";
import "./faqs.scss";

import FaqsItem from "./FaqsItem.jsx";

const Faqs = () => {
  const faqs = [
    {
      title: "What is Bookmark?",
      text:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      title: " How can I request a new browser?",
      text:
        "  Vivamus luctus eros aliquet convallis ultricies. Mauris auguemassa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
      title: "Is there a mobile app?",
      text:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
      title: "What about other Chromium browsers?",
      text:
        " Integer condimentum ipsum id imperdiet finibus. Vivamuin placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
  ];

  return (
    <div className="faqs">
      <div className="faqs__header">
        <h1 className="heading">Frequently Asked Questions</h1>
        <p className="text">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="faqs__content">
        {faqs.map((faq, idx) => (
          <FaqsItem
            idx={idx}
            key={idx + "faqs"}
            title={faq.title}
            text={faq.text}
          />
        ))}
      </div>
      <button className="btn btn-dark">More Info</button>
    </div>
  );
};

export default Faqs;
