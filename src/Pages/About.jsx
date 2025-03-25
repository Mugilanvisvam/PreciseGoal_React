import React ,{useEffect} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css"; // Import custom styles if needed

const About = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <Container className="about-container py-5">
      {/* Who Are We Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col lg={8}>
          <h2 className="section-title">Who Are We?</h2>
          <p className="section-text">
            We are a simple and sensible mutual fund distribution company based in Chennai, India. Our company offers various financial products such as Insurance, Loans, and Structured Products that are purely customer-centric and value-added, providing a comfortable investing experience.
          </p>
        </Col>
      </Row>

      {/* Know Our Architects Section */}
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h2 className="section-title">Know Our Architects</h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {/* Architect 1 */}
        <Col md={6} lg={5} className="mb-4">
          <Card className="architect-card shadow">
            <Card.Body>
              <Card.Title className="architect-name">DilliBabu.M</Card.Title>
              <Card.Subtitle className="architect-role">Partner</Card.Subtitle>
              <Card.Text className="architect-text">
                A commerce graduate with over 18 years of experience in Financial Planning and Wealth Management, working with organizations like ICICI, IIFL, Geojit, and FundsIndia. Passionate about personalized financial plans for clients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Architect 2 */}
        <Col md={6} lg={5} className="mb-4">
          <Card className="architect-card shadow">
            <Card.Body>
              <Card.Title className="architect-name">N.M. Hema Raju</Card.Title>
              <Card.Subtitle className="architect-role">Partner</Card.Subtitle>
              <Card.Text className="architect-text">
                A Wealth Manager turned Life Coach with 13 years of experience in financial markets. Worked with top banking firms like Kotak Securities and ICICI Securities, helping clients align their wealth strategy with financial success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Us Section */}
      <Row className="justify-content-center text-center mt-5">
        <Col lg={8}>
          <h2 className="section-title">Why Us?</h2>
          <p className="section-text">
            Many companies provide similar services, but we believe in **Skin in the Game** – if your portfolio grows, our income grows too. We treat all clients equally, whether big investors or small investors, and support them in crafting investment plans tailored to their needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
