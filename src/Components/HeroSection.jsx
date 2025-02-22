import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sectionVideo from "../assets/section.mp4"; // Import the video

const HeroSection = () => {
  return (
    <section className="hero position-relative d-flex align-items-center text-white" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: "-2" }}
      >
        <source src={sectionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Contrast */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "-1" }}></div>

      {/* Content Container */}
      <div className="container text-center text-md-start position-relative" style={{ zIndex: "2" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h1 className="display-4 fw-bold mb-3 text-white text-shadow hero-heading">To invest, the right way.</h1>
            <p className="lead text-white text-shadow hero-text">
              The approach to investing should be simple, clear, and straightforward. 
              We strive to build diversified portfolios using technology to efficiently 
              manage them with our expertise. Our goal is to keep you updated on where 
              your money is invested.
            </p>
            <button className="btn hero-btn px-4 py-2 text-white" style={{ backgroundColor: "#1362a2",
                borderColor: "#1362a2"}}>Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;