// import React, { useState, useEffect } from "react";
// import {
//   FaQuestionCircle, FaShieldAlt, FaCheckCircle, FaCarCrash, FaUserMd,
//   FaMoneyBillWave, FaUserShield, FaHeartbeat, FaHome, FaBriefcaseMedical,
//   FaUmbrella
// } from "react-icons/fa";
// import "./Insurance.css";
// import person1 from "../../assets/person1.png";
// import person2 from "../../assets/person2.png";

// const conversations = [
//   { text: "Hey! Do you know why insurance is important?", person: "person1" },
//   { text: "Yes! It helps protect our financial future from uncertainties.", person: "person2" },
//   { text: "Exactly! But choosing the right policy is confusing.", person: "person1" },
//   { text: "That’s where SecureShield helps! They offer tailored insurance plans.", person: "person2" },
//   { text: "What types of insurance do they provide?", person: "person1" },
//   { text: "They offer Life, Health, Auto, Home, and Business Insurance.", person: "person2" },
//   { text: "How do I know which policy is right for me?", person: "person1" },
//   { text: "SecureShield experts analyze your needs and suggest the best options.", person: "person2" },
//   { text: "That sounds convenient! Can I get instant quotes?", person: "person1" },
//   { text: "Yes! You can compare and choose plans online within minutes.", person: "person2" },
// ];

// const content = [
//   {
//     icon: <FaQuestionCircle />,
//     title: "What is Insurance?",
//     text: "An agreement between an individual and an insurance company, offering financial protection in case of unfortunate events."
//   },
//   {
//     icon: <FaShieldAlt />, 
//     title: "Benefits of Insurance", 
//     text: "Provides financial security, helps manage money efficiently, and offers tax benefits."
//   },
//   {
//     icon: <FaCheckCircle />, 
//     title: "Precise Insurance", 
//     text: "Ensures a hassle-free experience for health and motor insurance, prioritizing protection over investment."
//   },
//   {
//     icon: <FaCarCrash />, 
//     title: "Motor Insurance", 
//     text: "Covers vehicle damages, accidents, theft, natural calamities, and third-party liabilities."
//   },
//   {
//     icon: <FaUserMd />, 
//     title: "Health Insurance", 
//     text: "Provides coverage for medical expenses, hospitalization, and preventive healthcare."
//   },
//   {
//     icon: <FaMoneyBillWave />, 
//     title: "How to Choose a Policy?", 
//     text: "Assess your needs, compare policies, and select the right coverage."
//   },
//   {
//     icon: <FaUserShield />, 
//     title: "Why SecureShield?", 
//     text: "We provide expert guidance, affordable plans, and hassle-free claims."
//   },
//   {
//     icon: <FaHeartbeat />, 
//     title: "Health Insurance Details", 
//     text: "Covers hospitalization, medication, and medical emergencies, with options up to Rs. 6 Crores."
//   },
//   {
//     icon: <FaHome />, 
//     title: "Home Insurance", 
//     text: "Safeguard your home from natural disasters and theft."
//   },
//   {
//     icon: <FaBriefcaseMedical />, 
//     title: "Life Insurance", 
//     text: "Ensure your family’s financial security with life coverage."
//   },
//   {
//     icon: <FaUmbrella />, 
//     title: "Business Insurance", 
//     text: "Cover business risks with customized insurance solutions."
//   },
// ];


// const InsuranceAnimated = () => {
//   const [visibleIndex, setVisibleIndex] = useState(0);

//   useEffect(() => {
//     if (visibleIndex < conversations.length) {
//       const timeout = setTimeout(() => {
//         setVisibleIndex((prevIndex) => prevIndex + 1);
//       }, 1500);
//       return () => clearTimeout(timeout);
//     }
//   }, [visibleIndex]);

//   return (
//     <div className="insurance-container">
//       {/* Left Side Content */}
//       <div className="content-section">
//         <h2 className="section-title"> Insurance Plans </h2>
//         <div className="content-grid">
//           {content.map((item, index) => (
//             <div key={index} className="content-card fade-in">
//               <div className="icon">{item.icon}</div>
//               <h4>{item.title}</h4>
//               <p>{item.text}</p>
//             </div>
//           ))}
//         </div>
//         <button className="invest-btn">Get a Quote 🚀</button>
//       </div>

//       {/* Right Side Chat Section */}
//       <div className="chat-section">
//         <h3>💬 Live Discussion</h3>
//         <div className="chat-box">
//           {conversations.slice(0, visibleIndex).map((chat, index) => (
//             <div key={index} className={`chat-row ${chat.person === "person1" ? "left" : "right"} fade-in`}>
//               <img src={chat.person === "person1" ? person1 : person2} alt="Person" className="chat-avatar" />
//               <div className="speech-bubble">{chat.text}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsuranceAnimated;




import React, { useState, useEffect } from "react";
import {
  FaFileContract,
  FaShieldAlt,
  FaClipboardCheck,
  FaCar,
  FaUserInjured,
  FaBalanceScale,
  FaUserShield,
  FaHospital,
  FaHouseDamage,
  FaHandHoldingUsd,
  FaBuilding
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MutualFunds.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";

const conversations = [
  { text: "Hey! Do you know why insurance is important?", person: "person1" },
  { text: "Yes! It helps protect our financial future from uncertainties.", person: "person2" },
  { text: "Exactly! But choosing the right policy is confusing.", person: "person1" },
  { text: "That’s where SecureShield helps! They offer tailored insurance plans.", person: "person2" },
  { text: "What types of insurance do they provide?", person: "person1" },
  { text: "They offer Life, Health, Auto, Home, and Business Insurance.", person: "person2" },
  { text: "How do I know which policy is right for me?", person: "person1" },
  { text: "SecureShield experts analyze your needs and suggest the best options.", person: "person2" },
  { text: "That sounds convenient! Can I get instant quotes?", person: "person1" },
  { text: "Yes! You can compare and choose plans online within minutes.", person: "person2" },
];

const content = [
  {
    icon: <FaFileContract />, 
    title: "What is Insurance?", 
    text: "An agreement between an individual and an insurance company, offering financial protection in case of unfortunate events."
  },
  {
    icon: <FaShieldAlt />, 
    title: "Benefits of Insurance", 
    text: "Provides financial security, helps manage money efficiently, and offers tax benefits."
  },
  {
    icon: <FaClipboardCheck />, 
    title: "Precise Insurance", 
    text: "Ensures a hassle-free experience for health and motor insurance, prioritizing protection over investment."
  },
  {
    icon: <FaCar />, 
    title: "Motor Insurance", 
    text: "Covers vehicle damages, accidents, theft, natural calamities, and third-party liabilities."
  },
  {
    icon: <FaUserInjured />, 
    title: "Health Insurance", 
    text: "Provides coverage for medical expenses, hospitalization, and preventive healthcare."
  },
  {
    icon: <FaBalanceScale />, 
    title: "How to Choose a Policy?", 
    text: "Assess your needs, compare policies, and select the right coverage."
  },
  {
    icon: <FaUserShield />, 
    title: "Why SecureShield?", 
    text: "We provide expert guidance, affordable plans, and hassle-free claims."
  },
  {
    icon: <FaHospital />, 
    title: "Health Insurance Details", 
    text: "Covers hospitalization, medication, and medical emergencies, with options up to Rs. 6 Crores."
  },
  {
    icon: <FaHouseDamage />, 
    title: "Home Insurance", 
    text: "Safeguard your home from natural disasters and theft."
  },
  {
    icon: <FaHandHoldingUsd />, 
    title: "Life Insurance", 
    text: "Ensure your family’s financial security with life coverage."
  },
  {
    icon: <FaBuilding />, 
    title: "Business Insurance", 
    text: "Cover business risks with customized insurance solutions."
  },
];


const InsuranceAnimated = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPerson1, setIsPerson1] = useState(true);

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
      <h2 className="text-center mb-4" style={{color:'#2A9D8F'}}>Insurance</h2>
      <div className="row">
        {content.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div className="card text-center p-3 mutual-card">
              <div className="icon">{item.icon}</div>
              <div className="content">
                <h5 className="mt-3">{item.title}</h5>
                <p className="text-muted">{item.text}</p>
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

export default InsuranceAnimated;
