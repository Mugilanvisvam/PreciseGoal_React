import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/styles.css'; 
import Appstore from '../assets/pngegg.png';

// Social Media Icons as Images
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import LinkedinIcon from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Left: Logo & Social Links */}
          <div className="col-md-3">
            <img src="https://via.placeholder.com/100" alt="Logo" className="mb-2" /> {/* Replace with actual logo */}
            <p>Connect with us:</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <img src={FacebookIcon} alt="Facebook" width="25" height="25" />
              </a>
              <a href="#" className="text-light">
                <img src={InstagramIcon} alt="Instagram" width="25" height="25" />
              </a>
              <a href="#" className="text-light">
                <img src={TwitterIcon} alt="Twitter" width="25" height="25" />
              </a>
              <a href="#" className="text-light">
                <img src={LinkedinIcon} alt="LinkedIn" width="25" height="25" />
              </a>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Smart Portfolio</a></li>
              <li><a href="#" className="text-light">SIP Calculator</a></li>
              <li><a href="#" className="text-light">Register</a></li>
              <li><a href="#" className="text-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Center: Useful Links */}
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Products</a></li>
              <li><a href="#" className="text-light">Disclaimer</a></li>
              <li><a href="#" className="text-light">Sitemap</a></li>
              <li><a href="#" className="text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-light">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Right: Mobile Apps & Legal Info */}
          <div className="col-md-3">
            <h5>Download Mobile Apps</h5>
            <div className="d-flex gap-2">
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
            Mutual Fund investments are subjected to market risk. So, Investors are advised to read the scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
