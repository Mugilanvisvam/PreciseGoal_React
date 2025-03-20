// import React, { useState, useEffect, useRef } from "react";
// import "./StructuredProduct.css";
// import person1 from "../../assets/person1.png";
// import person2 from "../../assets/person2.png";

// const structuredConversations = [
//   { text: "Do you know about Structured Products?", person: "person1" },
//   { text: "Yes! They provide diversification and customized investment options.", person: "person2" },
//   { text: "What exactly are Structured Products?", person: "person1" },
//   { text: "They are financial instruments linked to market indices, stocks, bonds, commodities, and more.", person: "person2" },
//   { text: "Do they offer principal protection?", person: "person1" },
//   { text: "Some do! They can provide full or partial principal return after maturity.", person: "person2" },
//   { text: "What are the key features of these products?", person: "person1" },
//   { text: "They are customizable, designed for specific market views, and can offer enhanced yields.", person: "person2" },
//   { text: "What are the components of Structured Products?", person: "person1" },
//   { text: "They consist of Bonds, Equity, and Derivatives to balance risk and reward.", person: "person2" },
//   { text: "Are there different types of Structured Products?", person: "person1" },
//   { text: "Yes! Conservative ones offer capital protection, while Aggressive ones provide higher potential returns.", person: "person2" },
//   { text: "What is Structured Debt?", person: "person1" },
//   { text: "It is a customized debt package designed to meet borrower needs, with flexible interest rates.", person: "person2" },
//   { text: "That sounds useful! Can they enhance my investment returns?", person: "person1" },
//   { text: "Yes! If you choose the right product issuer and market conditions align with your view.", person: "person2" },
// ];

// const StructuredProductsAnimated = () => {
//   const [visibleIndex, setVisibleIndex] = useState(0);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     if (visibleIndex < structuredConversations.length) {
//       const timeout = setTimeout(() => {
//         setVisibleIndex((prevIndex) => prevIndex + 1);
//       }, 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [visibleIndex]);

//   return (
//     <div className="comic-container">
//       <div className="comic-intro">
//         <h5 style={{ color: "#57C675" }}>STRUCTURED PRODUCTS</h5>
//         <p>
//           We at <strong>Precise Goal</strong> help you invest in structured products that balance risk
//           and returns. Our products are tailored to your financial needs and market opportunities.
//         </p>
//       </div>
//       {structuredConversations.slice(0, visibleIndex).map((chat, index) => (
//         <div
//           key={index}
//           className={`comic-row ${chat.person === "person1" ? "left" : "right"} fade-in`}
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

// export default StructuredProductsAnimated;

import React, { useState, useEffect } from "react";
import { 
  FaBalanceScale, FaChartBar, FaRegMoneyBillAlt, FaCoins, FaDollarSign, 
  FaChartLine, FaCogs, FaUsers, FaPiggyBank, FaLayerGroup, FaHandshake,
  FaFileInvoiceDollar, FaShieldAlt, FaExchangeAlt, FaBuilding
} from "react-icons/fa";
import "./StructuredProduct.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const conversations = [
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



const content = [
  {
    icon: <FaBalanceScale />,
    title: "What is a Structured Product?",
    text: "Structured products are financial instruments whose performance is linked to the value of underlying assets, indexes, or products."
  },
  {
    icon: <FaChartBar />,
    title: "Market-Linked Investment",
    text: "The returns on structured products depend on market indices, stocks, bonds, commodities, and other financial instruments."
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Principal Protection",
    text: "Certain structured products offer full or partial principal protection, ensuring capital safety upon maturity."
  },
  {
    icon: <FaCoins />,
    title: "Potential for Higher Returns",
    text: "With market-driven returns, structured products provide opportunities for capital growth beyond traditional fixed-income instruments."
  },
  {
    icon: <FaDollarSign />,
    title: "Types of Structured Products",
    text: "They are classified as conservative (capital-protected) and aggressive (higher upside potential without protection)."
  },
  {
    icon: <FaChartLine />,
    title: "Customized Investment Plans",
    text: "These products are highly customizable to meet specific investor needs and financial goals."
  },
  {
    icon: <FaCogs />,
    title: "Components of Structured Products",
    text: "Typically consist of bonds for stability, equities for growth, and derivatives for risk management."
  },
  {
    icon: <FaUsers />,
    title: "Why Choose Us?",
    text: "We provide expert guidance and customized solutions to help you make informed investment decisions."
  },
  {
    icon: <FaPiggyBank />,
    title: "Smart Portfolio Diversification",
    text: "Structured products allow investors to diversify their portfolios across multiple asset classes."
  },
  {
    icon: <FaLayerGroup />,
    title: "Understanding Structured Debt",
    text: "Structured debt offers customized financing solutions, allowing borrowers to switch between fixed and variable interest rates."
  },
  {
    icon: <FaHandshake />,
    title: "Benefits of Structured Notes",
    text: "These products enhance yield potential while offering credit-worthy issuers for added security."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Tax-Efficient Investments",
    text: "We help optimize your structured investments for better tax efficiency and long-term savings."
  },
  {
    icon: <FaShieldAlt />,
    title: "Risk Factors",
    text: "Structured products carry risks such as market volatility, liquidity constraints, and potential capital loss."
  },
  {
    icon: <FaExchangeAlt />,
    title: "How We Help?",
    text: "We provide unbiased, transparent guidance to help you invest in structured products with confidence."
  },
  {
    icon: <FaBuilding />,
    title: "Trusted Investment Partner",
    text: "Our team assists with structured products through personalized portfolio management and expert advisory services."
  }
];




const StructuredProductsAnimated = () => {
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
        <h2 className="section-title"> Structured Product </h2>
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

export default StructuredProductsAnimated;

