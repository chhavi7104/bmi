import React from 'react';
import './Navbar.css'; // Ensure this file exists and is styled

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BMI Calculator</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#calculator">Calculator</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;