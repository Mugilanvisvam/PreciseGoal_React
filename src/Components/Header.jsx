import React, { useState, useEffect, useRef } from "react";
// import logo from "../assets/taglogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/pglogo.png"; // ✅ use the new logo

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(""); // Active submenu
  const [activeCalculator, setActiveCalculator] = useState(""); // Active calculator
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const toolsDropdownRef = useRef(null);

  const companySubmenus = [
    { name: "About Us", path: "/about" },
    // { name: "Service", path: "/service" },
    { name: "Contact Us", path: "/contact" },
  ];

  const calculatorList = [
    { name: "Become a Crorepati Calculator", path: "/become-a-crorepati-calculator" },
    { name: "SIP Calculator", path: "/sip-calculator" },
    { name: "MF SIP Step-Up Calculator", path: "/mf-sip-step-up-calculator" },
    { name: "Goal-Based Top-Up SIP Calculator", path: "/goal-based-top-up-sip-calculator" },
    { name: "Target Amount SIP Calculator", path: "/target-amount-sip-calculator" },
    { name: "SIP with Annual Increase Calculator", path: "/sip-with-annual-increase-calculator" },
    { name: "Retirement Planning Calculator", path: "/retirement-planning-calculator" },
    { name: "PPF Calculator", path: "/ppf-calculator" },
    { name: "EPF Calculator", path: "/epf-calculator" },
    { name: "Asset Allocation Calculator", path: "/asset-allocation-calculator" },
    { name: "Home Loan EMI Calculator", path: "/home-loan-emi-calculator" },
    { name: "Personal Loan EMI Calculator", path: "/personal-loan-emi-calculator" },
    { name: "Car Loan EMI Calculator", path: "/car-loan-emi-calculator" },
    { name: "Education Loan EMI Calculator", path: "/education-loan-emi-calculator" },
    { name: "Goal Setting Calculator", path: "/goal-setting-calculator" },
    { name: "Financial Goal Planner Calculator", path: "/financial-goal-planner-calculator" },
    { name: "Cost Inflation Index Calculator", path: "/cost-inflation-index-calculator" },
    { name: "Compounding Calculator", path: "/compounding-calculator" },
    { name: "Spending Less Calculator", path: "/spending-less-calculator" },
    { name: "Future Value Inflation Calculator", path: "/future-value-inflation-calculator" },
    { name: "Human Life Value Calculator", path: "/human-life-value-calculator" },
    { name: "Lumpsum Target Calculator", path: "/lumpsum-target-calculator" },
    { name: "Lumpsum Calculator", path: "/lumpsum-calculator" },
    { name: "Children Education Planner Calculator", path: "/children-education-planner-calculator" },
    { name: "Net Worth Calculator", path: "/net-worth-calculator" },
  ];


  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu(submenu);
    setShowDropdown(true);
    navigate(submenu);
  };

  const handleCalculatorClick = (calculator) => {
    setActiveCalculator(calculator);
    setShowToolsDropdown(true);
    navigate(calculator);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === "company") {
      setShowDropdown((prev) => !prev);
      setShowToolsDropdown(false);
    } else if (dropdown === "tools") {
      setShowToolsDropdown((prev) => !prev);
      setShowDropdown(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
      setActiveSubmenu("");
    }
    if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target)) {
      setShowToolsDropdown(false);
      setActiveCalculator("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
         <Link to="/" className="navbar-brand d-flex align-items-center">
            {/* ✅ Only the logo */}
            <img
              src={logo}
              alt="PG Asset Logo"
              style={{ width: "180px", height: "auto" }}
            />
          </Link>
        </div>

        <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto small">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === "/" ? "active text-dark fw-bold" : ""}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/mutualfund" className={`nav-link ${location.pathname === "/mutualfund" ? "active text-dark fw-bold" : ""}`}>Mutual Fund</Link>
            </li>
            <li className="nav-item">
              <Link to="/equity" className={`nav-link ${location.pathname === "/equity" ? "active text-dark fw-bold" : ""}`}>Equity</Link>
            </li>
            <li className="nav-item" >
              <Link to="/insurance" className={`nav-link disabled-link ${location.pathname === "/insurance" ? "active text-dark fw-bold" : ""}`}>Insurance</Link>
            </li>
            <li className="nav-item" >
              <Link to="/service" className={`nav-link  ${location.pathname === "/service" ? "active text-dark fw-bold" : ""}`}>Service</Link>
            </li>

            {/* Calculators Dropdown */}
            <li
              className="nav-item dropdown"
              ref={toolsDropdownRef}
              onMouseEnter={() => setShowToolsDropdown(true)}
              onMouseLeave={() => setShowToolsDropdown(false)}
            >
              <a
                href="#precisetool"
                className={`nav-link dropdown-toggle ${showToolsDropdown || activeCalculator ? "active text-dark fw-bold" : ""}`}
                role="button"
                onClick={() => toggleDropdown("tools")}
              >
                Calculators
              </a>
              {showToolsDropdown && (
                <div
                  className="dropdown-menu show p-3"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    minWidth: "700px",
                    maxWidth: "1200px",
                    right: 0,
                    justifyContent: "space-between"
                  }}
                >
                  {[0, 1, 2, 3].map((colIndex) => (
                    <div
                      key={colIndex}
                      style={{
                        flex: "1 1 22%",  // Each column takes equal space
                        minWidth: "250px"  // Ensures columns don't shrink too much
                      }}
                    >
                      {calculatorList
                        .slice(colIndex * 7, colIndex === 3 ? undefined : (colIndex + 1) * 7)
                        .map(({ name, path }, index) => (
                          <Link
                            key={index}
                            to={path}
                            className={`dropdown-item ${activeCalculator === path ? "active bg-success text-white" : ""}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleCalculatorClick(path);
                            }}
                          >
                            ➽ {name}
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Company Dropdown */}
            <li className="nav-item dropdown" ref={dropdownRef} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <a
                href="#company"
                className={`nav-link dropdown-toggle ${showDropdown || activeSubmenu ? "active text-dark fw-bold" : ""}`}
                role="button"
                onClick={() => toggleDropdown("company")}
              >
                Company
              </a>
              {showDropdown && (
                <ul className="dropdown-menu show">
                  {companySubmenus.map(({ name, path }, index) => (
                    <li key={index}>
                      <Link
                        to={path}
                        className={`dropdown-item ${activeSubmenu === path ? "active bg-primary text-white" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmenuClick(path);
                        }}
                      >
                        ➽ {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* 
            <li className="nav-item"><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active text-dark fw-bold" : ""}`}>About Us</Link></li>
            <li className="nav-item"><Link to="/service" className={`nav-link ${location.pathname === "/service" ? "active text-dark fw-bold" : ""}`}>Services</Link></li>
            <li className="nav-item"><Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active text-dark fw-bold" : ""}`}>Contact Us</Link></li> */}
          </ul>

          <div className="d-flex">
            <button className="btn btn-dark me-2 btn-sm" onClick={() => window.location.href = "https://precisegoal.my-portfolio.co.in/app/#/login"}>Login</button>
            <button className="btn btn-warning btn-sm" style={{ backgroundColor: "#57C675", borderColor: "#57C675", color: "#fff" }} onClick={() => window.location.href = "https://precisegoal.my-portfolio.co.in/app/#/public/signup/1"}>Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
