import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Precise-goal-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-dark text-white d-flex justify-content-between align-items-center p-3">
      {/* Left - Logo */}
      <div>
        <img src={logo} alt="Precise Logo" className="logo" style={{ width: '50%' }} />
      </div>

      {/* Center - Navigation */}
      <nav className="nav mx-auto">
        <a href="#home" className="nav-link text-white">Home</a>
        <a href="#ecosystem" className="nav-link text-white">Ecosystem</a>
        <a href="#aboutus" className="nav-link text-white">About us</a>
        <a href="#blog" className="nav-link text-white">Blog</a>
        <a href="#token" className="nav-link text-white">Token</a>
        <a href="#expo" className="nav-link text-white">Expo</a>
      </nav>

      {/* Right - Buttons and Theme Icon */}
      <div className="d-flex align-items-center ms-auto">
        <button className="btn btn-light me-2">Login</button>
        <button style={{ backgroundColor: '#1362a2', borderColor: '#1362a2',color: '#fff'  }} className="btn btn-warning">
          Register
        </button>
        {/* <FontAwesomeIcon icon={faSun} className="theme-icon ms-2" /> */}
      </div>
    </header>
  );
};

export default Header;
