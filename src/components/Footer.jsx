import React from "react";
import { FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      {/* Main Footer Container */}
      <div className="footer-main">
        {/* Section 1: Brand & About */}
        <div className="footer-column footer-brand-column">
          <h3 className="footer-title">Datta Gayatri Digital Colour Labs</h3>
          <p className="footer-tagline">Professional Photography & Videography Services</p>
          <p className="footer-description">
            Capturing your precious moments with passion and creativity. We specialize in weddings, events, and special occasions.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/dattagayatricolourlab?igsh=MWRyczMxNGRzN2ttMQ==" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@dattagayatridigitallab" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><button onClick={() => navigate("/")} className="footer-link-btn">Home</button></li>
            <li><button onClick={() => scrollToSection("services")} className="footer-link-btn">Services</button></li>
            <li><button onClick={() => scrollToSection("gallery")} className="footer-link-btn">Gallery</button></li>
            <li><button onClick={() => navigate("/photography")} className="footer-link-btn">Photography</button></li>
            <li><button onClick={() => scrollToSection("testimonials")} className="footer-link-btn">Reviews</button></li>
          </ul>
        </div>

        {/* Section 3: Services */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Our Services</h4>
          <ul className="footer-links">
            <li><span className="footer-service">Wedding Photography</span></li>
            <li><span className="footer-service">Event Photography</span></li>
            <li><span className="footer-service">Candid Videography</span></li>
            <li><span className="footer-service">Pre-Wedding Shoots</span></li>
            <li><span className="footer-service">Cinematography</span></li>
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div className="footer-column footer-contact-column">
          <h4 className="footer-subtitle">Get In Touch</h4>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <p className="contact-label">Phone</p>
              <a href="tel:+919000899636" className="contact-value">+91-9000 899 636</a>
              <a href="tel:+919848150567" className="contact-value">+91-9848 150 567</a>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <p className="contact-label">Address</p>
              <p className="contact-value">Beside Papparao Petrol Bunk</p>
              <p className="contact-value">West Godavari District</p>
              <p className="contact-value">Tanuku - 534211</p>
            </div>
          </div>

          <div className="contact-item">
            <FaClock className="contact-icon" />
            <div>
              <p className="contact-label">Hours</p>
              <p className="contact-value">Mon - Sun: 10AM - 8PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copy">&copy; {currentYear} Datta Gayatri Digital Colour Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;