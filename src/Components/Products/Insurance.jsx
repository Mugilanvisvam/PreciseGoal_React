import React, { useState, useEffect, useRef } from "react";
import "./Insurance.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const insuranceConversations = [
  { text: "What is Insurance?", person: "person1" },
  { text: "Insurance is an agreement between an individual and an insurance company, providing financial safety during unforeseen events.", person: "person2" },
  { text: "What are the benefits of insurance?", person: "person1" },
  { text: "Insurance acts as a safety net, manages money effectively, and offers tax benefits.", person: "person2" },
  { text: "How does Precise Goal help with insurance?", person: "person1" },
  { text: "Precise Goal provides hassle-free solutions for motor and health insurance.", person: "person2" },
  { text: "Tell me about Motor Insurance.", person: "person1" },
  { text: "Motor insurance includes third-party and comprehensive coverage, offering financial protection against accidents, theft, and natural calamities.", person: "person2" },
  { text: "What should I consider before buying motor insurance?", person: "person1" },
  { text: "Factors like coverage, add-ons, claim settlement ratio, and network garages are crucial.", person: "person2" },
  { text: "What about Health Insurance?", person: "person1" },
  { text: "Health insurance covers medical expenses, hospitalizations, pre-existing ailments, and offers cashless treatment options.", person: "person2" },
  { text: "How does it benefit me?", person: "person1" },
  { text: "It provides financial security during medical emergencies, reducing out-of-pocket expenses.", person: "person2" },
];

const InsuranceAnimated = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (visibleIndex < insuranceConversations.length) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [visibleIndex]);

  return (
    <div className="comic-container">
      <div className="comic-intro">
        <h5 style={{ color: '#57C675' }}>INSURANCE</h5>
        <p>
          <strong>Precise Goal</strong> ensures a smooth insurance experience by guiding you to the best policies for your needs. 
          Be it health or motor insurance, we've got you covered! 🚗🏥
        </p>
      </div>
      {insuranceConversations.slice(0, visibleIndex).map((chat, index) => (
        <div key={index} className={`comic-row ${chat.person === "person1" ? "left" : "right"} fade-in`}>
          <img src={chat.person === "person1" ? person1 : person2} alt="Person" className="comic-character" />
          <div className="speech-bubble">{chat.text}</div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default InsuranceAnimated;
