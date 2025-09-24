import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";

const CalculatorLayout = ({ title, description, inputControls, charts, results, extraContent }) => {
  return (
    <Container className="mt-4">
      <Row>
        {/* Main Content */}
        <Col md={9}>
          <Card className="p-4 shadow-sm" style={{ marginBottom: '20px' }}>
            <h2 className="text-center mb-3" style={{ color: '#1363a2' }}>{title}</h2>
            <p className="text-center mb-4">{description}</p>

            {/* Input + Charts */}
            <Row className="mb-4">
              <Col md={6}>
                <Card className="p-3 mb-3 shadow-sm">
                  <h5 className="mb-3" style={{ color: '#1363a2' }}>Adjust Your Inputs</h5>
                  {inputControls?.map((control, idx) => (
                    <div className="mb-3" key={idx}>
                      <label>{control.label}</label>
                      <input
                        type={control.type || "number"}
                        className="form-control mb-1"
                        value={control.value}
                        onChange={(e) => control.setValue(Number(e.target.value) || control.min)}
                      />
                      {control.range && (
                        <input
                          type="range"
                          className="form-range"
                          min={control.min}
                          max={control.max}
                          step={control.step || 1}
                          value={control.value}
                          onChange={(e) => control.setValue(Number(e.target.value))}
                        />
                      )}
                    </div>
                  ))}

                </Card>
              </Col>

              <Col md={6}>
                {charts?.map((chart, idx) => (
                  <Card className="p-3 mb-3 shadow-sm" key={idx}>
                    <h5 className="text-center" style={{ color: '#1363a2' }}>{chart.title}</h5>
                    {chart.component}
                  </Card>
                ))}
              </Col>
            </Row>

            {/* Results */}
            <Row>
              {results?.map((result, idx) => (
                <Col md={4} key={idx}>
                  <Card className="p-3 mb-3 shadow-sm text-center">
                    <h6 className="text" style={{ color: '#1363a2' }}>{result.title}</h6>
                    <p className="fs-5 fw-bold" style={{ color: "#57C675" || "#1363a2" }}>
                      {result.value}
                    </p>
                  </Card>
                </Col>
              ))}
            </Row>
            {extraContent && <div className="mt-3">{extraContent}</div>}
          </Card>
        </Col>

        {/* Sidebar */}
        <Col md={3} style={{ marginBottom: '20px' }}>
          <Row className="mb-3">
            {/* Invest Description */}
            <Card className="p-3 mb-3 shadow-sm">
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <h5 style={{ color: "#1363a2", marginBottom: "5px" }}>Invest in Your Future</h5>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Start investing today to grow your wealth over time. Take control of your financial goals and secure a better future.
              </p>
            </div>

            {/* Invest Button */}
            <button
              style={{
                width: "100%",
                padding: "10px 0",
                backgroundColor: "#57C675",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#45a162";
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#57C675";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
              onClick={() => window.open("https://precisegoal.my-portfolio.co.in/app/#/public/signup/1", "_blank")}
            >
              Invest
            </button>
            </Card>
          </Row>

          <Row>
            <Card className="p-3 mb-3 shadow-sm">
              <Sidebar />
            </Card>
          </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default CalculatorLayout;
