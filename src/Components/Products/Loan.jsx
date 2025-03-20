// import React, { useState, useEffect, useRef } from "react";
// import "./Loan.css";
// import person1 from "../../assets/person1.png";
// import person2 from "../../assets/person2.png";

// const loanConversations = [
//   { text: "Hey! Do you know what a loan is?", person: "person1" },
//   { text: "Yes! A loan is an amount borrowed from a bank or NBFC for various needs.", person: "person2" },
//   { text: "That’s right! Loans can help during financial crises.", person: "person1" },
//   { text: "Exactly! You can choose a loan type based on your needs.", person: "person2" },
//   { text: "What are the benefits of taking a loan?", person: "person1" },
//   { text: "Loans offer fast disbursal, low interest, and transparency.", person: "person2" },
//   { text: "Why should I choose Precise Goal for loans?", person: "person1" },
//   { text: "We help you get the right loan with expert guidance and minimal documentation.", person: "person2" },
//   { text: "Can I get an instant loan against my mutual funds?", person: "person1" },
//   { text: "Yes! We provide instant loans against mutual funds and other assets.", person: "person2" },
//   { text: "How does tax planning work for home and education loans?", person: "person1" },
//   { text: "Our experts guide you on tax savings under sections 24 and 80E.", person: "person2" },
//   { text: "That sounds great! How do I apply for a loan?", person: "person1" },
//   { text: "Just fill out our online application form, and we’ll assist you immediately!", person: "person2" },
// ];

// const LoanAnimated = () => {
//   const [visibleIndex, setVisibleIndex] = useState(0);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     if (visibleIndex < loanConversations.length) {
//       const timeout = setTimeout(() => {
//         setVisibleIndex((prevIndex) => prevIndex + 1);
//       }, 2000);

//       return () => clearTimeout(timeout);
//     }
//   }, [visibleIndex]);

//   return (
//     <div className="comic-container">
//       <div className="comic-intro">
//         <h5 style={{ color: "#57C675" }}>LOANS</h5>
//         <p>
//           At <strong>Precise Goal</strong>, we help you make smart borrowing decisions.
//           Our expert guidance ensures that you get the best loan options with minimal hassle.
//         </p>
//       </div>
//       {loanConversations.slice(0, visibleIndex).map((chat, index) => (
//         <div
//           key={index}
//           className={`comic-row ${chat.person === "person1" ? "left" : "right"} fade-in"`}
//         >
//           <img
//             src={chat.person === "person1" ? person1 : person2}
//             alt="Person"
//             className="comic-character"
//           />
//           <div className="speech-bubble">{chat.text}</div>
//         </div>
//       ))}
//       <div ref={chatEndRef} />
//     </div>
//   );
// };

// export default LoanAnimated;

import React, { useState, useEffect } from "react";
import { 
  FaMoneyCheckAlt, FaBolt, FaPercentage, FaEye, FaHandshake, FaClock, 
  FaChartLine, FaBuilding, FaUniversity, FaClipboardList, FaHome, FaUserTie, 
  FaBusinessTime, FaPiggyBank 
} from "react-icons/fa";
import "./Loan.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const conversations = [
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

const content = [
  {
    icon: <FaMoneyCheckAlt />,
    title: "What is a Loan?",
    text: "A loan is an amount of money borrowed from a bank or NBFC, requiring future repayment. It helps overcome temporary financial crises in businesses or personal emergencies."
  },
  {
    icon: <FaHandshake />,
    title: "Benefits of Taking a Loan",
    text: "Loans offer financial flexibility, fast disbursal, and the ability to choose the type that best suits your needs."
  },
  {
    icon: <FaBolt />,
    title: "Fast Payment",
    text: "Many lenders in India provide instant loans with quick disbursal, ensuring you get funds when needed."
  },
  {
    icon: <FaPercentage />,
    title: "Low-Interest Loans",
    text: "Loans from competitive lenders offer lower interest rates, making repayment easier."
  },
  {
    icon: <FaEye />,
    title: "Transparency",
    text: "Use our Loan EMI calculator to determine monthly repayments and interest before borrowing."
  },
  {
    icon: <FaChartLine />,
    title: "Why Choose Precise Goal Loans?",
    text: "We help you secure loans without liquidating valuable investments and offer expert guidance on financial planning."
  },
  {
    icon: <FaClock />,
    title: "Get Capital Quickly",
    text: "Instant loans against mutual funds and other assets ensure fast access to funds."
  },
  {
    icon: <FaBuilding />,
    title: "Loan Management",
    text: "We provide personal and business loans to help you manage finances efficiently."
  },
  {
    icon: <FaUserTie />,
    title: "24/7 Pan India Services",
    text: "With a high-speed process, minimal documentation, and transparent service, we help you achieve your financial goals anytime."
  },
  {
    icon: <FaUniversity />,
    title: "Tax Planning for Home & Education Loans",
    text: "Our loan counselors guide you on tax savings under Section 24 (Home Loan) and Section 80E (Education Loan)."
  },
  {
    icon: <FaPiggyBank />,
    title: "Smart Investment Planning",
    text: "Leverage mutual funds and assets for emergency financing with minimal hassle."
  },
  {
    icon: <FaClipboardList />,
    title: "Loan Application Requirements",
    text: "Apply online with necessary documents such as ID proof, security cheques, address proof, bank statements, and holding statements."
  },
  {
    icon: <FaHome />,
    title: "Home Loan",
    text: "We guide you in selecting home loan options that offer financial benefits and long-term stability."
  },
  {
    icon: <FaUserTie />,
    title: "Personal Loan",
    text: "Ideal for short-term needs like medical emergencies or travel, our advisors help you secure the best deal."
  },
  {
    icon: <FaBusinessTime />,
    title: "Business Loan",
    text: "Starting a business requires capital. We assist in selecting the best business loan based on EMI calculations and tenure."
  },
  {
    icon: <FaPiggyBank />,
    title: "Loan Against Mutual Funds & Other Assets",
    text: "Gold, property, FDs, and insurance policies can be used as collateral for loans. With LAMF, you retain ownership while securing necessary funds."
  }
];


const LoanAnimated = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    if (visibleIndex < conversations.length) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [visibleIndex]);

  return (
    <div className="insurance-container">
      {/* Left Side Content */}
      <div className="content-section">
        <h2 className="section-title"> Insurance Plans </h2>
        <div className="content-grid">
          {content.map((item, index) => (
            <div key={index} className="content-card fade-in">
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <button className="invest-btn">Get a Quote 🚀</button>
      </div>

      {/* Right Side Chat Section */}
      <div className="chat-section">
        <h3>💬 Live Discussion</h3>
        <div className="chat-box">
          {conversations.slice(0, visibleIndex).map((chat, index) => (
            <div key={index} className={`chat-row ${chat.person === "person1" ? "left" : "right"} fade-in`}>
              <img src={chat.person === "person1" ? person1 : person2} alt="Person" className="chat-avatar" />
              <div className="speech-bubble">{chat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanAnimated;

