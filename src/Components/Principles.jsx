import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/styles.css";
import offerImage from "../assets/principles.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaTrophy, FaShoppingCart } from "react-icons/fa";
// const containerStyle = {
//   display: "flex",
//   gap: "20px",
//   justifyContent: "center",
//   alignItems: "stretch",
//   flexWrap: "wrap",
//   padding: "40px",
// };

// const cardStyle = {
//   background: "linear-gradient(135deg, #48C774, #2A9D8F)",
//     width: "320px",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   borderRadius: "15px",
//   padding: "25px",
//   color: "#fff",
//   boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//   textAlign: "center",
//   border: "1px solid #ddd",
//   marginTop:'5%'
// };

// const cardHoverEffect = {
//   transform: "translateY(-8px)",
//   boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
// };

// const titleStyle = {
//   fontSize: "22px",
//   fontWeight: "bold",
//   marginBottom: "15px",
//   color: "#fff",
// };

// const listStyle = {
//   textAlign: "left",
//   paddingLeft: "20px",
// };



const Principles = () => {
  return (
    <section className="featured-event py-5" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold" style={{ color: "#57C675", fontWeight: "bold" }}>
              Our Core Principles!
            </h2>
            <p className="lead">
              Our foundation is built upon three unwavering core principles, <br />
              ensuring clarity, security, and strategic growth in every investment decision we make.
            </p>
          </div>

          {/* Image Content */}
          <div className="col-12 col-md-6 text-center">
            <img src={offerImage} alt="Offer" className="img-fluid w-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
