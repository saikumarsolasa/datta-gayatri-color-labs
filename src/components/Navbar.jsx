import React, { useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assests/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <div className="logo-img">
            <img src={Logo} alt="DG Logo" />
          </div>
          <div className="logo-text">Datta Gayatri Color Labs</div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#gallery">Gallery</a>
          </li>

          <li>
            <a href="#testimonials">Reviews</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
