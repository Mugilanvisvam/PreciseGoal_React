import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const FundAdvisorSection = () => {
  return (
    <Container className="text-center">
      <h3 className="fw-bold" style={{color:'#57C675'}}>Why Choose PG Asset?</h3>
      <Row className="mt-4">
        {/* Card 1 */}
        <Col md={4} className="text-center card-hover p-4">
          <FaChartLine size={50} className="icon-hover text-primary mb-3" />
          <h5 className="fw-bold">How to Choose a Mutual Fund?</h5>
          <p>With over 40+ AMCs, 30+ sub-categories, and 2500+ schemes, choosing the right mutual fund can be overwhelming. But don’t worry—PG Asset is here to help!</p>
        </Col>
        {/* Card 2 */}
        <Col md={4} className="text-center border-start border-end card-hover p-4">
          <FaUsers size={50} className="icon-hover text-primary mb-3" />
          <h5 className="fw-bold">Why Choose Us?</h5>
          <p>We provide expert guidance, proven experience, customer-centric approaches, and research-driven strategies for your investments.</p>
        </Col>
        {/* Card 3 */}
        <Col md={4} className="text-center card-hover p-4">
          <FaLightbulb size={50} className="icon-hover text-primary mb-3" />
          <h5 className="fw-bold">How Are We Different?</h5>
          <p>We go beyond traditional financial intermediaries by offering goal-based financial planning, risk analysis, customized portfolio creation, and holistic wealth management.</p>
        </Col>
      </Row>
      <style jsx>{`
        .card-hover {
          transition: background 0.3s ease-in-out;
          cursor: pointer;
        }
        .card-hover:hover {
          background: linear-gradient(135deg, #48C774, #2A9D8F);
          color: white;
        }
        .card-hover:hover .icon-hover {
          color: white !important;
        }
      `}</style>
    </Container>
  );
};

export default FundAdvisorSection;