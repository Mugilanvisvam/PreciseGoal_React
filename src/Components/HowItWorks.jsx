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
      <h3 className="text-center" style={{color:'#1362a2',fontWeight:'bold'}}>HOW IT WORKS</h3>
      <p className="text-center mb-4 text-black">Investing can be tedious task when not done in the right way; also, the chances of failing to beat the uncertainties are always there.<br/>
      We have experts, the technology, and the portfolio to guide you in the right direction.</p>
      <br/>
      <p className="text-center mb-4 text-black">We work in the following steps</p>
      <div className="container">
  <div className="row justify-content-center">
    {steps.map((step, index) => (
      <div 
        key={step.id} 
        className={`col-md-6 mb-4 ${steps.length % 2 !== 0 && index === steps.length - 1 ? 'd-flex justify-content-center' : ''}`}
      >
        <div className="step p-4 text-white rounded shadow" style={{ backgroundColor: '#0f8b8b', width: '100%' }}>
          <div className="step-id bg-white text-dark rounded-circle d-flex align-items-center justify-content-center">
            {`0${step.id}`}
          </div>
          <div className="step-content ms-3">
            <h3>{step.title}</h3>
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
