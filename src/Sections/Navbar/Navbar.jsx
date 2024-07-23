
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`navbar-brand ${isOpen ? 'hidden' : ''}`}></div>
        <div className="navbar-toggle" onClick={toggleDropdown}>
          {isOpen ? '▲' : '☰'}
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#section0" className="nav-link">Home</a>
        <a href="#section1" className="nav-link">Projects</a>
        <a href="#section2" className="nav-link">Skills</a>
        <a href="#section4" className="nav-link">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

