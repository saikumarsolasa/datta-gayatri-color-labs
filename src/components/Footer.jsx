import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left: Branding */}
        <div className="footer-brand">
          DG Photo Lab
        </div>

        {/* Center: Social Media */}
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>

        {/* Right: Copyright */}
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} DG Photo Lab
        </div>
      </div>
    </footer>
  );
}

export default Footer;