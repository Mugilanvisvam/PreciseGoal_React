import React, { useState, useEffect, useRef } from "react";
import "./Loan.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const loanConversations = [
  { text: "Hey! Do you know what a loan is?", person: "person1" },
  { text: "Yes! A loan is an amount borrowed from a bank or NBFC for various needs.", person: "person2" },
  { text: "That’s right! Loans can help during financial crises.", person: "person1" },
  { text: "Exactly! You can choose a loan type based on your needs.", person: "person2" },
  { text: "What are the benefits of taking a loan?", person: "person1" },
  { text: "Loans offer fast disbursal, low interest, and transparency.", person: "person2" },
  { text: "Why should I choose Precise Goal for loans?", person: "person1" },
  { text: "We help you get the right loan with expert guidance and minimal documentation.", person: "person2" },
  { text: "Can I get an instant loan against my mutual funds?", person: "person1" },
  { text: "Yes! We provide instant loans against mutual funds and other assets.", person: "person2" },
  { text: "How does tax planning work for home and education loans?", person: "person1" },
  { text: "Our experts guide you on tax savings under sections 24 and 80E.", person: "person2" },
  { text: "That sounds great! How do I apply for a loan?", person: "person1" },
  { text: "Just fill out our online application form, and we’ll assist you immediately!", person: "person2" },
];

const LoanAnimated = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (visibleIndex < loanConversations.length) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [visibleIndex]);

  return (
    <div className="comic-container">
      <div className="comic-intro">
        <h5 style={{ color: "#57C675" }}>LOANS</h5>
        <p>
          At <strong>Precise Goal</strong>, we help you make smart borrowing decisions.
          Our expert guidance ensures that you get the best loan options with minimal hassle.
        </p>
      </div>
      {loanConversations.slice(0, visibleIndex).map((chat, index) => (
        <div
          key={index}
          className={`comic-row ${chat.person === "person1" ? "left" : "right"} fade-in"`}
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

export default LoanAnimated;
