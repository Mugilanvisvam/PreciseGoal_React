import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Postlandingimage.png"; // your main hero image
import "../Components/styles.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Section */}
          <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3 hero-heading">
              To invest, the right way.
            </h1>
            <p className="lead hero-text">
              The approach to investing should be simple, clear, and
              straightforward. We strive to build diversified portfolios using
              technology to efficiently manage them with our expertise. Our goal
              is to keep you updated on where your money is invested.
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

          {/* Image Section */}
          <div className="col-12 col-lg-6 text-center">
            <img
              src={logo}
              alt="Investment Illustration"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
