import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/taglogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/styles.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();
  const dropdownRef = useRef(null);
  const toolsDropdownRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    setShowDropdown(false);
    setShowToolsDropdown(false);
  };

  const toggleDropdown = (e, dropdown) => {
    e.preventDefault();
    if (dropdown === "products") {
      setShowDropdown(!showDropdown);
      setShowToolsDropdown(false);
    } else if (dropdown === "tools") {
      setShowToolsDropdown(!showToolsDropdown);
      setShowDropdown(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
    if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target)) {
      setShowToolsDropdown(false);
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
        {/* Logo and Name */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Precise Logo" style={{ width: "60px", height: "auto", marginRight: "10px" }} />
            <div className="d-flex flex-column" style={{ lineHeight: "1" }}>
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
              <Link
                to='/'
                className={`nav-link  ${location.pathname === "/" ? "active text-dark fw-bold" : ""}`}
                >Home
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown"
    ref={dropdownRef}
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}
>
  <a
    className={`nav-link dropdown-toggle ${activeTab === "products" ? "active text-dark fw-bold" : ""}`}
    href="#products"
    role="button"
    onClick={(e) => toggleDropdown(e, "products")}
  >
    Products
  </a>

  {showDropdown && (
    <ul className="dropdown-menu show">
      <li>
        <Link 
          to='mutualfund' 
          className={`dropdown-item ${activeSubmenu === "mutualfund" ? "text-dark fw-bold" : ""}`}
          onClick={() => setActiveSubmenu("mutualfund")}
        >
          Mutual Fund
        </Link>
      </li>
      <li>
        <Link 
          to='insurance' 
          className={`dropdown-item ${activeSubmenu === "insurance" ? "text-dark fw-bold" : ""}`}
          onClick={() => setActiveSubmenu("insurance")}
        >
          Insurance
        </Link>
      </li>
      <li>
        <Link 
          to='loan' 
          className={`dropdown-item ${activeSubmenu === "loan" ? "text-dark fw-bold" : ""}`}
          onClick={() => setActiveSubmenu("loan")}
        >
          Loan
        </Link>
      </li>
      <li>
        <Link 
          to='structuredProduct' 
          className={`dropdown-item ${activeSubmenu === "structuredProduct" ? "text-dark fw-bold" : ""}`}
          onClick={() => setActiveSubmenu("structuredProduct")}
        >
          Structured Products
        </Link>
      </li>
    </ul>
  )}
</li>


            {/* Precise Tools Dropdown */}
            <li
              className="nav-item dropdown"
              ref={toolsDropdownRef}
              onMouseEnter={() => setShowToolsDropdown(true)}
              onMouseLeave={() => setShowToolsDropdown(false)}
            >
              <a
                className={`nav-link dropdown-toggle ${activeTab === "precisetool" ? "active text-dark fw-bold" : ""}`}
                href="#precisetool"
                role="button"
                onClick={(e) => toggleDropdown(e, "tools")}
              >
                Calculators
              </a>
              {showToolsDropdown && (
                <div className="dropdown-menu show p-3" style={{
                  maxWidth: "100%",
                  minWidth: "720px",
                  overflow: "hidden",
                  left: "0", // Align dropdown to the left
                }}>
                  <div className="d-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    {[
                      "Become A Crorepati", "SIP Calculator", "MF SIP Step Up", "Goal based Top Up SIP",
                      "Target Amount SIP", "SIP with Annual Increase", "PPF Calculator", "EPF Calculator",
                      "Retirement Planning", "Asset Allocation", "Home Loan EMI", "Personal Loan EMI",
                      "Car Loan EMI", "Education Loan EMI", "Goal Setting", "Financial Goal Planner",
                      "Cost Inflation Index", "Compounding Calculator", "Spending Less Calculator", "Future Value Inflation",
                      "Human Life Value", "Lumpsum Target", "Lumpsum Calculator", "Children Education Planner",
                      "Networth Calculator"
                    ].map((tool, index) => (
                      <a key={index} className="dropdown-item" href={`#${tool.toLowerCase().replace(/ /g, "")}`} onClick={() => handleTabClick("precisetool")}>
                        {tool}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active text-dark fw-bold" : ""}`}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/service" 
             className={`nav-link ${location.pathname === "/service" ? "active text-dark fw-bold" : ""}`}>Services
             </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/contact" 
                className={`nav-link ${location.pathname ===  "/contact" ? "active text-dark fw-bold" : ""}`}>Contact Us
            </Link>
            </li>
          </ul>

          {/* Right - Buttons */}
          <div className="d-flex">
            <button
              className="btn btn-dark me-2 btn-sm"
              onClick={() => window.location.href = "https://precisegoal.my-portfolio.co.in/app/#/login"}
            >
              Login
            </button>

            <button
              className="btn btn-warning btn-sm"
              style={{ backgroundColor: "#57C675", borderColor: "#57C675", color: "#fff" }}
              onClick={() => window.location.href = "https://precisegoal.my-portfolio.co.in/app/#/public/signup/1"}
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
