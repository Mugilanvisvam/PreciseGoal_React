import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/styles.css';
import Appstore from '../assets/pngegg.png';
import Logo from '../assets/taglogo.png';

// Social Media Icons
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import LinkedinIcon from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4" style={{ borderTop: "3px solid #1E2050" }}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Left: Logo & Social Links */}
          <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-center align-items-md-start">
            <div className="d-flex align-items-center mb-2">
              <img src={Logo} alt="Logo" className="img-fluid" width="80" />
              <div className="d-flex flex-column" style={{ lineHeight: "1", marginLeft: "8px" }}>
                <span className="fw-bold" style={{ color: "#1E2050", fontSize: "x-large" }}>PG ASSET</span>
                <span style={{ color: "#3A858B", fontSize: "x-small" }}>Invest Precisely. Retire Wisely.</span>
              </div>
            </div>
            <p>Connect with us:</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map((icon, index) => (
                <a key={index} href="#" className="text-dark">
                  <img src={icon} alt="Social" width="25" height="25" />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="col-6 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-dark">About Us</a></li>
              <li><a href="/service" className="text-dark">Services</a></li>
              <li><a href="/sip-calculator" className="text-dark">SIP Calculator</a></li>
              <li><a href="https://precisegoal.my-portfolio.co.in/app/#/public/signup/1" className="text-dark" target="_blank" rel="noopener noreferrer">Register</a></li>
              <li><a href="/contact" className="text-dark">Contact Us</a></li>
              <li><a href="https://goo.gl/maps/jajuu1CC7isDKxjy7" className="text-dark">Sitemap</a></li>
            </ul>
          </div>


          {/* Center: Useful Links */}
          <div className="col-6 col-md-3 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/mutualfund" className="text-dark">MutualFund</a></li>
              <li><a href="/insurance" className="text-dark">Insurance</a></li>
              <li><a href="/disclaimer" className="text-dark">Disclaimer</a></li>
              <li><a href="/privacypolicy" className="text-dark">Privacy Policy</a></li>
              <li><a href="/terms&condition" className="text-dark">Terms & Conditions</a></li>
            </ul>
          </div>


          {/* Right: Mobile Apps & Legal Info */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5>Download Mobile Apps</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <img src={Appstore} alt="Google Play" width="140" height="100" />
            </div>
            <p className="mt-2">ARN CODE: 262882</p>
            <p>AMFI Registered Mutual Fund Distributor</p>
          </div>
        </div>

        {/* Bottom: Copyright & Disclaimer */}
        <div className="text-center mt-3">
          <p>© Copyright Precise Goal, 2024. All rights reserved</p>
          <p className="small">
            Mutual Fund investments are subjected to market risk. Read scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
