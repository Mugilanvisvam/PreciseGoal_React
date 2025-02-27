import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/styles.css";
import offerImage from "../assets/principles.png";

const Principles = () => {
  return (
    <section className="featured-event py-5" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold" style={{color: '#57C675', fontWeight: 'bold'}}>Our Core Principles!</h2>
            <p className="lead">
              Our foundation is built upon three unwavering core principles, <br />
              ensuring clarity, security, and strategic growth in every investment decision we make.
            </p>
          </div>

          {/* Image Content */}
          <div className="col-12 col-md-6 text-center">
            <img src={offerImage} alt="Offer" className="img-fluid w-75"  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
