import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/taglogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/styles.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const dropdownRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    setShowDropdown(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo and Precise Goal Name */}
        <div className="d-flex align-items-center">
  <a className="navbar-brand d-flex align-items-center" href="/">
    <img src={logo} alt="Precise Logo" style={{ width: "60px", height: "auto", marginRight: "10px" }} />
    <div className="d-flex flex-column" style={{ lineHeight: "1"}}>
      <span className="fw-bold" style={{ color: "#1E2050", fontSize: "x-large" }}>PG ASSET</span>
      <span style={{ color: "#3A858B", fontSize: "x-small" }}>Invest Precisely. Retire Wisely.</span>
    </div>
  </a>
</div>


        {/* Mobile Menu Toggle */}
        <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto small">
            <li className="nav-item">
              <a className={`nav-link ${activeTab === "home" ? "active text-dark fw-bold" : ""}`} href="#home" onClick={() => handleTabClick("home")}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === "aboutus" ? "active text-dark fw-bold" : ""}`} href="#aboutus" onClick={() => handleTabClick("aboutus")}>About Us</a>
            </li>
            
            {/* Products Dropdown */}
            <li className="nav-item dropdown" ref={dropdownRef}>
              <a className={`nav-link dropdown-toggle ${activeTab === "products" ? "active text-dark fw-bold" : ""}`} href="#products" role="button" onClick={toggleDropdown}>Products</a>
              {showDropdown && (
                <ul className="dropdown-menu show">
                  <li><a className="dropdown-item" href="#mutualfund" onClick={() => handleTabClick("products")}>Mutual Fund</a></li>
                  <li><a className="dropdown-item" href="#insurance" onClick={() => handleTabClick("products")}>Insurance</a></li>
                  <li><a className="dropdown-item" href="#loan" onClick={() => handleTabClick("products")}>Loan</a></li>
                  <li><a className="dropdown-item" href="#structuredproducts" onClick={() => handleTabClick("products")}>Structured Products</a></li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <a className={`nav-link ${activeTab === "services" ? "active text-dark fw-bold" : ""}`} href="#services" onClick={() => handleTabClick("services")}>Services</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === "contactus" ? "active text-dark fw-bold" : ""}`} href="#contactus" onClick={() => handleTabClick("contactus")}>Contact Us</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === "precisetool" ? "active text-dark fw-bold" : ""}`} href="#precisetool" onClick={() => handleTabClick("precisetool")}>Precise Tools</a>
            </li>
          </ul>

          {/* Right - Buttons */}
          <div className="d-flex">
            <button className="btn btn-dark me-2 btn-sm">Login</button>
            <button className="btn btn-warning btn-sm" style={{ backgroundColor: "#57C675", borderColor: "#57C675", color: "#fff" }}>Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;