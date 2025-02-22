import React, { useState } from "react";
import logo from "../assets/Precise-goal-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false); // Track dropdown open state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    setIsProductMenuOpen(false); // Close dropdown on tab selection
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Precise Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "home" ? "active text-primary fw-bold" : ""}`}
                href="#home"
                onClick={() => handleTabClick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "aboutus" ? "active text-primary fw-bold" : ""}`}
                href="#aboutus"
                onClick={() => handleTabClick("aboutus")}
              >
                About Us
              </a>
            </li>

            {/* Products Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a
                className={`nav-link dropdown-toggle ${activeTab === "products" ? "active text-primary fw-bold" : ""}`}
                href="#products"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsProductMenuOpen(!isProductMenuOpen); // Toggle dropdown
                }}
              >
                Products
              </a>
              {(showDropdown || isProductMenuOpen) && (
                <ul className="dropdown-menu show">
                  <li>
                    <a className="dropdown-item" href="#mutualfund" onClick={() => handleTabClick("products")}>
                      Mutual Fund
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#insurance" onClick={() => handleTabClick("products")}>
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#loan" onClick={() => handleTabClick("products")}>
                      Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#structuredproducts" onClick={() => handleTabClick("products")}>
                      Structured Products
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "services" ? "active text-primary fw-bold" : ""}`}
                href="#services"
                onClick={() => handleTabClick("services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "contactus" ? "active text-primary fw-bold" : ""}`}
                href="#contactus"
                onClick={() => handleTabClick("contactus")}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "precisetool" ? "active text-primary fw-bold" : ""}`}
                href="#precisetool"
                onClick={() => handleTabClick("precisetool")}
              >
                Precise Tools
              </a>
            </li>
          </ul>

          {/* Right - Buttons */}
          <div className="d-flex">
            <button className="btn btn-light me-2">Login</button>
            <button
              style={{
                backgroundColor: "#1362a2",
                borderColor: "#1362a2",
                color: "#fff",
              }}
              className="btn btn-warning"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
