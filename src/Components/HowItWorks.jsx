import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Components/styles.css';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: 'Set a goal for yourself', description: 'Share with us a bit about yourself. How much you will be investing and the amount of risk you are ready to take.' },
    { id: 2, title: 'Select a portfolio design', description: 'Select the type of investment and portfolio you would be willing to have to meet your specific goals.' },
    { id: 3, title: 'Rely on us', description: 'Our experts will build a portfolio for you and will keep you updated about its performance as well.' },
  ];

  return (
    <section className="how-it-works py-5">
      <div className="container">
        <h3 className="text-center" style={{ color: 'limegreen', fontWeight: 'bold' }}>HOW IT WORKS</h3>
        <p className="text-center mb-4 text-black">
          Investing can be tedious when not done correctly. The chances of failing to beat uncertainties are always there. 
          <br />We have experts, technology, and portfolios to guide you in the right direction.
        </p>
        <p className="text-center mb-4 text-black">We work in the following steps:</p>

        <div className="row justify-content-center">
          {steps.map((step) => (
            <div key={step.id} className="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">
              <div className="step p-4 text-white rounded shadow" style={{ backgroundColor: 'limegreen', width: '100%', maxWidth: '350px' }}>
                <div className="step-id bg-white text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  {`0${step.id}`}
                </div>
                <div className="step-content mt-3">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
