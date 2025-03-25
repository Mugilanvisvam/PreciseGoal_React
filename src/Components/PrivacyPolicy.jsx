import React ,{useEffect}from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="container my-5">
      <div className="Card border-0 shadow-lg p-4 animate__animated animate__fadeIn">
        <h2 className="text-center fw-bold text-primary mb-4">Privacy Policy</h2>
        
        <p className="text-dark">
          This privacy policy sets out how Precise Goal uses and protects any information that you share when you use this website. Precise Goal is committed to ensuring that your privacy is protected at all times.
        </p>

        <h5 className="fw-bold text-success mt-4">Information We Collect</h5>
        <ul className="text-dark">
          <li>Name and contact details</li>
          <li>Personal information such as date of birth, Aadhaar Number, PAN</li>
          <li>Demographic information such as gender and income</li>
          <li>Other information that helps us improve our services</li>
        </ul>

        <h5 className="fw-bold text-danger mt-4">What We Do With Your Information</h5>
        <p className="text-dark">
          We use your information to conduct KYC registration, improve our services, send periodic emails about investments, and for compliance purposes. You may unsubscribe at any time.
        </p>

        <h5 className="fw-bold text-primary mt-4">Security</h5>
        <p className="text-dark">
          We are committed to ensuring that your information is secure and have implemented safeguards to protect it.
        </p>

        <h5 className="fw-bold text-info mt-4">Links to Other Websites</h5>
        <p className="text-dark">
          Our website may contain links to third-party sites. We do not control these sites and are not responsible for their privacy policies.
        </p>

        <h5 className="fw-bold text-warning mt-4">Controlling Your Information</h5>
        <p className="text-dark">
          If you believe any of your information is incorrect, email us at <strong>contact@precisegoal.com</strong> and we will correct it promptly.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;