import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/covertop.jpg"; // Import the image
import "../Components/styles.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero position-relative d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for Better Readability */}
      {/* <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "1" }}
      ></div> */}

      {/* Content Container */}
      <div className="container position-relative" style={{ zIndex: "2" }}>
        <div className="row  text-center text-lg-start">
          <div className="col-12 col-md-10 col-lg-6">
            <h1
              className="display-4 fw-bold mb-3 hero-heading"
              style={{
                color: "black",
                // textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              To invest, the right way.
            </h1>
            <p
              className="lead hero-text"
              style={{
                color: "black",
                // textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
              }}
            >
              The approach to investing should be simple, clear, and
              straightforward. We strive to build diversified portfolios using
              technology to efficiently manage them with our expertise. Our goal
              is to keep you updated on where your money is invested.
            </p>

            {/* Responsive Buttons */}
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
              <button className="btn animated-btn" onClick={() => navigate("/mutualfund")}>
                Mutual Fund
              </button>
              <button className="btn animated-btn" onClick={() => navigate("/insurance")}>
                Insurance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
