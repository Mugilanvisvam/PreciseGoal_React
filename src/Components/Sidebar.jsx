// src/components/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { popularCalculators } from "../Constants/popularCalculators";
import "./Sidebar.css"; // Optional: add custom styles

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar p-3">
      <h5>Popular Calculators</h5>
      <ul className="list-unstyled">
        {popularCalculators.map((calc) => (
          <li key={calc.path} className={location.pathname === calc.path ? "active" : ""}>
            <Link to={calc.path}>{calc.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
