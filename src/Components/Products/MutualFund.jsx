// import React, { useState, useEffect } from "react";
// import { FaChartLine, FaUserShield, FaRocket, FaDollarSign, FaListAlt, FaUsers, FaHandshake, FaUserCheck, FaClock } from "react-icons/fa";
// import "./MutualFunds.css";
// import person1 from "../../assets/person1.png";
// import person2 from "../../assets/person2.png";

// const conversations = [
//   { text: "Hey! Do you know what Mutual Funds are?", person: "person1" },
//   { text: "Yes! They are a great investment option for all ages.", person: "person2" },
//   { text: "Exactly! But there are over 2500+ schemes. Choosing the right one is tricky.", person: "person1" },
//   { text: "That's where Precise Goal helps! They guide you to invest in the best funds.", person: "person2" },
//   { text: "Why should I choose Precise Goal?", person: "person1" },
//   { text: "They are transparent, unbiased, and build need-specific portfolios.", person: "person2" },
//   { text: "That sounds great! Do they also help with tax-saving investments?", person: "person1" },
//   { text: "Yes! They help you optimize tax while investing smartly.", person: "person2" },
//   { text: "So how do they help me achieve my financial goals?", person: "person1" },
//   { text: "They create smart portfolios based on your risk appetite.", person: "person2" },
//   { text: "What kind of portfolios do they offer?", person: "person1" },
//   { text: "Three types: Fixed-Income Portfolio, Goal-Oriented Portfolio, and Blockbuster Portfolio.", person: "person2" },
//   { text: "Tell me about the Fixed-Income Portfolio.", person: "person1" },
//   { text: "It provides stable returns with low risk, no lock-in period, and tax benefits.", person: "person2" },
//   { text: "And what about the Goal-Oriented Portfolio?", person: "person1" },
//   { text: "It focuses on financial goals like buying a house, child's education, and future security.", person: "person2" },
//   { text: "That’s useful! What’s the Blockbuster Portfolio?", person: "person1" },
//   { text: "It’s a high-risk, high-return investment focused on sector-specific mutual funds.", person: "person2" },
//   { text: "Wow! Precise Goal really balances risk and returns.", person: "person1" },
//   { text: "Yes! They help you invest wisely and achieve financial growth.", person: "person2" },
// ];

// const content = [
//   {
//     icon: <FaChartLine />,
//     title: "What is a Mutual Fund?",
//     text: "A mutual fund pools money from multiple investors and invests in stocks, bonds, and securities.",
//   },
//   {
//     icon: <FaUserShield />,
//     title: "Why Choose PG Asset?",
//     text: "We provide expert guidance, customer-centric strategies, and research-driven portfolio management.",
//   },
//   {
//     icon: <FaRocket />,
//     title: "How to Start Investing?",
//     text: "Sign up online, complete KYC, choose a plan, and start investing in 10 minutes!",
//   },
//   {
//     icon: <FaDollarSign />,
//     title: "Investing in Mutual Funds?",
//     text: "Mutual Funds: More than Just Stocks! Yes, mutual funds offer exposure to a variety of asset classes, including equities, bonds, real estate, commodities (gold & silver), and foreign assets. Explore the possibilities with PG Asset today!",
//   },
//   {
//     icon: <FaListAlt />,
//     title: "How to Choose a Mutual Fund?",
//     text: "With over 40+ AMCs, 30+ sub-categories, and 2500+ schemes, choosing the right mutual fund can be overwhelming. But don’t worry—PG Asset is here to help!",
//   },
//   {
//     icon: <FaUsers />,
//     title: "Why Choose Us?",
//     text: "We provide expert guidance, proven experience, customer-centric approaches, and research-driven strategies for your investments.",
//   },
//   {
//     icon: <FaHandshake />,
//     title: "How Are We Different?",
//     text: "We go beyond traditional financial intermediaries by offering goal-based financial planning, risk analysis, customized portfolio creation, and holistic wealth management.",
//   },
//   {
//     icon: <FaUserCheck />,
//     title: "Open Your Account Online in Just 10 Minutes!",
//     text: "Get started in a few simple steps: PAN details, KYC validation, BSEStar MF registration, mandate registration, and start investing!",
//   },
//   {
//     icon: <FaClock />,
//     title: "How to Transact with PG Asset?",
//     text: "Log in to our app or portal, select your scheme, process your order, get unit allotment, and track your investments anytime.",
//   },
// ];

// const MutualFundsAnimated = () => {
// const [visibleIndex, setVisibleIndex] = useState(0);
// const [currentIndex, setCurrentIndex] = useState(0);
// const [isPerson1, setIsPerson1] = useState(true);

// useEffect(() => {
//   if (visibleIndex < conversations.length) {
//     const timeout = setTimeout(() => {
//       setVisibleIndex((prevIndex) => prevIndex + 1);
//     }, 1500);
//     return () => clearTimeout(timeout);
//   }
// }, [visibleIndex]);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setIsPerson1((prev) => !prev);
//     if (!isPerson1) {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + 2 < conversations.length ? prevIndex + 2 : 0
//       );
//     }
//   }, 2000);
//   return () => clearInterval(interval);
// }, [isPerson1, conversations]);

//   return (
//     <div className="mutual-funds-container">
//       {/* Top Content Section */}
//       <div className="content-section">
//         <h2 className="section-title">Mutual Funds</h2>
//         <div className="content-grid">
//           {content.map((item, index) => (
//             <div key={index} className="content-card fade-in">
//               <div className="icon">{item.icon}</div>
//               <h4>{item.title}</h4>
//               <p>{item.text}</p>
//             </div>
//           ))}
//         </div>
//         <button className="invest-btn">Start Investing 🚀</button>
//       </div>

// {/* Bottom Chat Section */}
// <div className="chat-section">
//   <h3>💬 Live Discussion</h3>
//   <div className="chat-box">
//     {conversations.length > 0 && (
//       <div className={`chat-row ${isPerson1 ? "left" : "right"} fade-in`}>
//         <img
//           src={isPerson1 ? person1 : person2}
//           alt="Person"
//           className="chat-avatar"
//         />
//         <div className="speech-bubble">{conversations[currentIndex].text}</div>
//       </div>
//     )}
//   </div>
// </div>
//     </div>
//   );
// };

// export default MutualFundsAnimated;

import React, { useState, useEffect } from "react";
import { FaChartLine, FaListAlt, FaDollarSign, FaUserCheck, FaRocket, FaComments } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MutualFunds.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const content = [
  { icon: <FaChartLine />, title: "What is a Mutual Fund?", text: "A mutual fund is a collective investment vehicle where money from multiple investors is combined and invested in various assets like stocks, bonds, and other securities." },
  { icon: <FaListAlt />, title: "How to Choose a Mutual Fund?", text: "Investing in Mutual Funds Made Simple! With over 40+ AMCs, 30+ sub-categories, and 2500+ schemes, PG Asset is here to help! We assist you in selecting the right funds by defining financial goals, evaluating risk appetite, and creating a diversified portfolio." },
  { icon: <FaDollarSign />, title: "Investing in Mutual Funds?", text: "Mutual Funds: More than Just Stocks! Many think mutual funds are only about stocks, but they include equities, bonds, real estate, commodities, and foreign assets. Diversify and grow your wealth with PG Asset today!" },
  { icon: <FaRocket />, title: "How to Transact with PG Asset?", text: "Log in to our app, select your scheme, process your order via BSEStar MF, receive unit allotment confirmation, and track your investments easily!" },
  { icon: <FaUserCheck />, title: "Open Your Account Online in Just 10 Minutes!", text: "Get started in a few simple steps: Provide PAN details, complete KYC, register with BSEStar MF, set up your mandate, and start investing!" },
  { icon: <FaComments />, title: "Still not convinced?", text: "See what our investors have to say!" }
];


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

const MutualFundsBootstrap = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPerson1, setIsPerson1] = useState(true);
  
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    if (visibleIndex < conversations.length) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [visibleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPerson1((prev) => !prev);
      if (!isPerson1) {
        setCurrentIndex((prevIndex) =>
          prevIndex + 2 < conversations.length ? prevIndex + 2 : 0
        );
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPerson1, conversations]);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ color: '#2A9D8F' }}>Mutual Funds</h2>
      <div className="row">
        {content.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
            <div className="card text-center p-3 mutual-card">
              <div className="icon">{item.icon}</div>
              <h5 className="mt-3">{item.title}</h5>
              <div className="content">
                <p className="text-muted">{item.text}</p>
                {index === content.length - 2 && ( // Show button only on the last card
                  <button
                    className="btn mt-2 align-self-end register-btn"
                    onClick={() => window.location.href = "https://precisegoal.my-portfolio.co.in/app/#/public/signup/1"}
                  >
                    Click to Register
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div className="chat-section mt-5">
        <h3 className="text-center">💬 Quick Talk</h3>
        <div className="chat-box">
          {conversations.length > 0 && (
            <div className={`chat-row ${isPerson1 ? "left" : "right"} fade-in`}>
              <img
                src={isPerson1 ? person1 : person2}
                alt="Person"
                className="chat-avatar"
              />
              <div className="speech-bubble">{conversations[currentIndex].text}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MutualFundsBootstrap;
