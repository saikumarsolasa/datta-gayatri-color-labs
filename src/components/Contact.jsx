import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "../styles/Contact.css";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be at most 500 characters")
    .required("Message is required")
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Replace with your Google Apps Script Web App URL
        const GOOGLE_SHEET_URL = "https://script.google.com/macros/d/1QfegHYRrqbcbZxTo461Cl7-A0c2Y3ynK9X5KO0B_JJU/AKfycbwagnFLI9YXfXVdcpasFv2Z70mEpcYKR_1K7hcK38b70Xzm_2I7zUSi1v0i690dxgXA/dev";
        const response = await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          body: new URLSearchParams({
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message
          })
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
          alert("Thank you! Your quote request has been submitted.");
          resetForm();
        } else {
          alert("Error submitting form. Please try again.");
        }
      } catch (error) {
        console.error('Error:', error);
        alert("Error submitting form. Please try again.");
      }
    }
  });

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
        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.name && formik.errors.name ? "error" : ""}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error-message">{formik.errors.name}</div>
            )}
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.email && formik.errors.email ? "error" : ""}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.phone && formik.errors.phone ? "error" : ""}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="error-message">{formik.errors.phone}</div>
            )}
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message / Requirements"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.message && formik.errors.message ? "error" : ""}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className="error-message">{formik.errors.message}</div>
            )}
          </div>
          
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default Contact;