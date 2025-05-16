import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/elites__1_-removebg-preview.png";
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [color, setColor] = useState("white");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setColor("red");
  };

  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="img2" />

      <div className={`navbar-toggle`} onClick={toggleMobileMenu} >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="log">
          <Link to="/signin"><button className="sign">Sign in</button></Link>
          <Link to="/signup"><button className="sign">Sign up</button></Link>
        </div>
      </div>
    </div>
  );
}
