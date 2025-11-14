import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/postlanding1.png";
import "../Components/styles.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center bg-light ">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">
              To invest, the right way.
            </h1>
            <p className="lead text-muted mt-3">
              The approach to investing should be simple, clear, and straightforward. We strive to build diversified portfolios using technology to efficiently manage them with our expertise. Our goal is to keep you updated on where your money is invested
            </p>

            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
              <button
                className="btn animated-btn"
                onClick={() => navigate("/mutualfund")}
              >
                Mutual Fund
              </button>
              <button
                className="btn animated-btn"
                disabled
                onClick={() => navigate("/insurance")}
              >
                Insurance
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 text-center">
            <img
              src={logo}
              alt="Landing Illustration"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
