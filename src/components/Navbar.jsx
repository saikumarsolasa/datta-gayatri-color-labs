import React, { useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assests/logo.jpeg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <div className="logo-img" onClick={()=>navigate("/")}>
            <img src={Logo} alt="DG Logo" />
          </div>
          <div className="logo-text">Dattha Gayatri Digital Colour Labs</div>
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
