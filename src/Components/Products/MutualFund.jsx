import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MutualFunds.css";
import { FaChartLine, FaListAlt, FaDollarSign, FaUserCheck, FaRocket, FaComments } from "react-icons/fa";
import sideImage1 from "../../assets/image1.png";
import sideImage2 from "../../assets/image2.png";
import sideImage3 from "../../assets/image3.png";
import sideImage4 from "../../assets/image4.png";
import sideImage5 from "../../assets/image5.png";
import sideImage6 from "../../assets/image6.png";

const content = [
  { icon: <FaChartLine />, title: "What is a Mutual Fund?", image: sideImage1 },
  { icon: <FaListAlt />, title: "How to Choose a Mutual Fund?", image: sideImage2 },
  { icon: <FaDollarSign />, title: "Investing in Mutual Funds?", image: sideImage3 },
  { icon: <FaRocket />, title: "How to Transact with PG Asset?", image: sideImage4 },
  { icon: <FaUserCheck />, title: "Open Your Account Online in Just 10 Minutes!", image: sideImage5 },
  { icon: <FaComments />, title: "Still not convinced?", image: sideImage6 },
];

const MutualFundsBootstrap = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ color: "#57C675" }}>
        Mutual Funds
      </h2>
      <div className="row">
        {/* Desktop/Tablet View */}
        <div className="d-none d-md-block col-md-4">
          <ul className="list-group list-group-flush">
            {content.map((item, index) => (
              <li
                key={index}
                className={`list-group-item list-group-item-action p-3 mb-3 shadow-sm rounded custom-item ${selectedIndex === index ? "active-item" : ""
                  }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-5 text-success">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-none d-md-flex col-md-8 justify-content-center align-items-center">
          <div className="image-container shadow rounded p-3">
            <img
              src={content[selectedIndex].image}
              alt={content[selectedIndex].title}
              className="img-fluid rounded"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="d-block d-md-none col-12">
          <ul className="list-group  list-group-flush">
            {content.map((item, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action p-3 mb-3 shadow-sm rounded custom-item"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="d-flex align-items-center gap-2" style={{ fontWeight: "600" }}>
                  <span className="fs-5 text-success">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                {selectedIndex === index && (
                  <div className="mt-3 text-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
                    />
                  </div>
                )}
              </li>

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MutualFundsBootstrap;
