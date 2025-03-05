import React, { useState, useEffect, useRef } from "react";
import "./StructuredProduct.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const structuredConversations = [
  { text: "Do you know about Structured Products?", person: "person1" },
  { text: "Yes! They provide diversification and customized investment options.", person: "person2" },
  { text: "What exactly are Structured Products?", person: "person1" },
  { text: "They are financial instruments linked to market indices, stocks, bonds, commodities, and more.", person: "person2" },
  { text: "Do they offer principal protection?", person: "person1" },
  { text: "Some do! They can provide full or partial principal return after maturity.", person: "person2" },
  { text: "What are the key features of these products?", person: "person1" },
  { text: "They are customizable, designed for specific market views, and can offer enhanced yields.", person: "person2" },
  { text: "What are the components of Structured Products?", person: "person1" },
  { text: "They consist of Bonds, Equity, and Derivatives to balance risk and reward.", person: "person2" },
  { text: "Are there different types of Structured Products?", person: "person1" },
  { text: "Yes! Conservative ones offer capital protection, while Aggressive ones provide higher potential returns.", person: "person2" },
  { text: "What is Structured Debt?", person: "person1" },
  { text: "It is a customized debt package designed to meet borrower needs, with flexible interest rates.", person: "person2" },
  { text: "That sounds useful! Can they enhance my investment returns?", person: "person1" },
  { text: "Yes! If you choose the right product issuer and market conditions align with your view.", person: "person2" },
];

const StructuredProductsAnimated = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (visibleIndex < structuredConversations.length) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [visibleIndex]);

  return (
    <div className="comic-container">
      <div className="comic-intro">
        <h5 style={{ color: "#57C675" }}>STRUCTURED PRODUCTS</h5>
        <p>
          We at <strong>Precise Goal</strong> help you invest in structured products that balance risk
          and returns. Our products are tailored to your financial needs and market opportunities.
        </p>
      </div>
      {structuredConversations.slice(0, visibleIndex).map((chat, index) => (
        <div
          key={index}
          className={`comic-row ${chat.person === "person1" ? "left" : "right"} fade-in`}
        >
          <img
            src={chat.person === "person1" ? person1 : person2}
            alt="Person"
            className="comic-character"
          />
          <div className="speech-bubble">{chat.text}</div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default StructuredProductsAnimated;
