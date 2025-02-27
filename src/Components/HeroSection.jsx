import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/covertop.jpg"; // Import the image
import "../Components/styles.css";

const HeroSection = () => {
  return (
    <section
      className="hero position-relative d-flex align-items-center text-white"
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Dark Overlay for Better Contrast */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "-1" }}
      ></div>

      {/* Content Container */}
      <div
        className="container text-center text-md-start position-relative"
        style={{ zIndex: "2" }}
      >
        <div className="row ">
          <div className="col-md-8 col-lg-6">
            <h1 className="display-4 fw-bold mb-3 text-black text-shadow hero-heading">
              To invest, the right way.
            </h1>
            <p className="lead text-black text-shadow hero-text">
              The approach to investing should be simple, clear, and
              straightforward. We strive to build diversified portfolios using
              technology to efficiently manage them with our expertise. Our goal
              is to keep you updated on where your money is invested.
            </p>
            <button
              className="btn hero-btn px-4 py-2 text-white"
              style={{ backgroundColor: "#57C675", borderColor: "#57C675" }}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
