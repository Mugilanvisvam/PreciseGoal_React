import React, { useState, useEffect, useRef } from "react";
import "./MutualFunds.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const conversations = [
  { text: "Hey! Do you know what Mutual Funds are?", person: "person1" },
  { text: "Yes! They are a great investment option for all ages.", person: "person2" },
  { text: "Exactly! But there are over 2500+ schemes. Choosing the right one is tricky.", person: "person1" },
  { text: "That's where Precise Goal helps! They guide you to invest in the best funds.", person: "person2" },
  { text: "Why should I choose Precise Goal?", person: "person1" },
  { text: "They are transparent, unbiased, and build need-specific portfolios.", person: "person2" },
  { text: "That sounds great! Do they also help with tax-saving investments?", person: "person1" },
  { text: "Yes! They help you optimize tax while investing smartly.", person: "person2" },
  { text: "So how do they help me achieve my financial goals?", person: "person1" },
  { text: "They create smart portfolios based on your risk appetite.", person: "person2" },
  { text: "What kind of portfolios do they offer?", person: "person1" },
  { text: "Three types: Fixed-Income Portfolio, Goal-Oriented Portfolio, and Blockbuster Portfolio.", person: "person2" },
  { text: "Tell me about the Fixed-Income Portfolio.", person: "person1" },
  { text: "It provides stable returns with low risk, no lock-in period, and tax benefits.", person: "person2" },
  { text: "And what about the Goal-Oriented Portfolio?", person: "person1" },
  { text: "It focuses on financial goals like buying a house, child's education, and future security.", person: "person2" },
  { text: "That’s useful! What’s the Blockbuster Portfolio?", person: "person1" },
  { text: "It’s a high-risk, high-return investment focused on sector-specific mutual funds.", person: "person2" },
  { text: "Wow! Precise Goal really balances risk and returns.", person: "person1" },
  { text: "Yes! They help you invest wisely and achieve financial growth.", person: "person2" },
];

const MutualFundsAnimated = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (visibleIndex < conversations.length) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 2000); // Each message appears after 2 seconds

      return () => clearTimeout(timeout);
    }
  }, [visibleIndex]);

  // // Auto scroll to the latest message
  // useEffect(() => {
  //   if (chatEndRef.current) {
  //     chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [visibleIndex]);

  return (
    <div className="comic-container">
       <div className="comic-intro">
       <h5 style={{color:'#57C675'}}>MUTUAL FUND</h5>
      <p>
        We at <strong>Precise Goal</strong> focus on balancing risks with returns. 
        We recommend the above portfolios to investors based on their risk appetite. 
        This helps to build a well-diversified smart portfolio and safeguard against market fluctuations. 😊
      </p>
    </div>
      {conversations.slice(0, visibleIndex).map((chat, index) => (
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
      {/* Empty div to track end of messages for auto-scroll */}
      <div ref={chatEndRef} />
    </div>
  );
};

export default MutualFundsAnimated;
