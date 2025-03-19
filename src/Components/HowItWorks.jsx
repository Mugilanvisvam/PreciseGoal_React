import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/styles.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Set a goal for yourself",
      description:
        "Share with us a bit about yourself. How much you will be investing and the amount of risk you are ready to take.",
    },
    {
      id: 2,
      title: "Pick a portfolio design",
      description:
        "Select the type of investment and portfolio you would be willing to have to meet your specific goals.",
    },
    {
      id: 3,
      title: "Rely on us",
      description:
        "Our experts will build a portfolio for you and will keep you updated about its performance as well.",
    },
  ];

  const cardStyle = {
    background: "linear-gradient(135deg, #48C774, #2A9D8F)",
    width: "100%",
    maxWidth: "360px",
    minHeight: "200px",
    transition: "transform 0.3s ease-in-out",
    borderRadius: "12px",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    animation: "floatUpDown 3s ease-in-out infinite",
  };

  const cardHoverEffect = {
    transform: "scale(1.05)",
  };

  return (
    <section className="how-it-works py-5">
      <div className="container">
        <h3 className="text-center" style={{ color: "#57C675", fontWeight: "bold" }}>
          HOW IT WORKS
        </h3>
        <p className="text-center mb-4 text-black">
          Investing can be tedious when not done correctly. The chances of failing to beat uncertainties are always there.
          <br />
          We have experts, technology, and portfolios to guide you in the right direction.
        </p>
        <p className="text-center mb-4 text-black">We work in the following steps:</p>

        <div className="row justify-content-center">
          {steps.map((step) => (
            <div key={step.id} className="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">
              <div
                className="step-card"
                style={cardStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverEffect.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* Step ID & Title in same line */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #48C774, #2A9D8F)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {`0${step.id}`}
                  </div>
                  <h4 style={{ fontSize: "1.4rem", fontWeight: "bold", margin: 0 }}>{step.title}</h4>
                </div>

                <p className="mt-2" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
