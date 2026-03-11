import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your quote request has been submitted.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
  <div className="contact-bg-overlay">
    <div className="contact-container">
      {/* LEFT: Contact Info */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>We are here to answer your queries and capture your special moments.</p>
        <div className="info-item"><FaPhoneAlt /> +91-9000 899936, +91-9000 140747</div>
        <div className="info-item"><FaEnvelope />gy3tanuku@gmail.com</div>
        <div className="info-item"><FaMapMarkerAlt />Tanuku, Andhra Pradesh, India</div>
        <div className="social-links">
          <FaInstagram /> <a href="#">Instagram</a> | 
          <FaYoutube /> <a href="#">YouTube</a> | 
          <FaFacebook /> <a href="#">Facebook</a>
        </div>
      </div>

      {/* RIGHT: Quote Form */}
      <div className="contact-form-wrapper">
        <h2>Get a Quote</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Message / Requirements" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default Contact;