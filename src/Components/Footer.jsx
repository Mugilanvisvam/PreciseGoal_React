import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/styles.css'; 
import Appstore from '../assets/pngegg.png';
import Logo from '../assets/Precise-goal-logo.png';

// Social Media Icons
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import LinkedinIcon from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Left: Logo & Social Links */}
          <div className="col-12 col-md-3 mb-4">
            <img src={Logo} alt="Logo" className="mb-2 img-fluid" width="200" />
            <p>Connect with us:</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map((icon, index) => (
                <a key={index} href="#" className="text-light">
                  <img src={icon} alt="Social" width="25" height="25" />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="col-6 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {["About Us", "Smart Portfolio", "SIP Calculator", "Register", "Contact Us"].map((link, index) => (
                <li key={index}><a href="#" className="text-light">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Center: Useful Links */}
          <div className="col-6 col-md-3 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              {["Products", "Disclaimer", "Sitemap", "Privacy Policy", "Terms & Conditions"].map((link, index) => (
                <li key={index}><a href="#" className="text-light">{link}</a></li>
              ))}
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
