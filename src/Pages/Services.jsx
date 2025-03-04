import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";

const services = [
  {
    title: "Retirement Planning",
    tagline: "Secure an undisturbed flow of money after retirement!",
    description:
      "Retirement planning is a vital part of a robust financial plan to secure your future. We offer multiple ways to plan for retirement based on your age and aspirations. SIP is a popular option to create wealth systematically over time.",
  },
  {
    title: "Tax Planning",
    tagline: "Get profit-oriented tax-related decisions at your convenience!",
    description:
      "Saving taxes at the right time is crucial. We introduce all the ways and nuances of tax planning to help you lessen the tax burden under various income heads like salary, business, capital gains, and more.",
  },
  {
    title: "Assisted Equities",
    tagline: "Get result-oriented equity-related assistance fast!",
    description:
      "Equities are an essential part of every portfolio. Our expert team analyzes stocks and market trends to provide reliable assistance for equity investments and derivatives.",
  },
  {
    title: "Debt Restructuring",
    tagline: "Restore and improve liquidity with debt management!",
    description:
      "Struggling with loans? Our debt restructuring experts analyze your cash flows and create personalized plans to overcome debt stress-free.",
  },
  {
    title: "Financial Product Comparison",
    tagline: "Invest intelligently after comparison!",
    description:
      "Compare financial products before investing. We provide insights on mutual funds, fixed deposits, real estate, and more to help you make informed investment decisions.",
  },
  {
    title: "NPS",
    tagline: "We make financial planning after retirement easy!",
    description:
      "NPS is a long-term investment plan with tax benefits. We help individuals understand risk assessments, withdrawal rules, and equity allocation to maximize returns.",
  },
];

const ServicesPage = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="h-100 shadow-lg border-0 service-card">
              <Card.Body>
                <Card.Title className="fw-bold service-title">
                  {service.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 service-tagline">
                  {service.tagline}
                </Card.Subtitle>
                <Card.Text className="service-description">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;