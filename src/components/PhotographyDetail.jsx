import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PhotographyDetail.css";
import AnnaprasanaImg from "../assests/Annaprasana.png";
import DhothiImg from "../assests/dhothi.png";
import WeddingImg from "../assests/wedding.png";
import NamingCeremony from "../assests/cradle ceremony.png";
import BirthdayImg from "../assests/birthday.png";
import PreshootImg from "../assests/preshoot.png";
import GruhapravesamImg from "../assests/gruha.png";
import Candid from "../assests/candid.jpg.jpeg";
import Other from "../assests/other.png";

function PhotographyDetail() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const photographyServices = [
    {
      id: 1,
      title: "Naming Ceremony",
      desc: "Capture the precious moment when your newborn receives their name with professional photography.",
      details: "Professional documentation of this auspicious milestone with candid moments of family celebrations and joy.",
      icon: NamingCeremony,
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Annaprasana",
      desc: "Preserve the beautiful tradition of your baby's first rice ceremony with stunning photography.",
      details: "Capture every detail of this sacred moment - from rituals to family reactions - with professional quality and care.",
      icon: AnnaprasanaImg,
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Birthday",
      desc: "Make your birthday celebration unforgettable with professional photography and videography.",
      details: "From candid party moments to posed portraits, we capture the joy and laughter of your special day.",
      icon: BirthdayImg,
      color: "#FFD93D"
    },
    {
      id: 4,
      title: "Dhothi And Half Saree",
      desc: "Professional photography for this traditional coming-of-age ceremony with cultural elegance.",
      details: "Beautiful coverage of rituals, traditional performances, and family moments with traditional attire.",
      icon: DhothiImg,
      color: "#A8E6CF"
    },
    {
      id: 5,
      title: "Pre-shoot and Post-shoot",
      desc: "Creative pre-wedding and post-wedding photography that tells your unique love story.",
      details: "Candid and posed sessions in scenic locations capturing the magic before and after your big day.",
      icon: PreshootImg,
      color: "#95E1D3"
    },
    {
      id: 6,
      title: "Wedding",
      desc: "Capture every precious moment of your wedding day with professional cinematic videography.",
      details: "From bridal preparations to the grand finale - comprehensive coverage ensuring no moment is missed.",
      icon: WeddingImg,
      color: "#F38181"
    },
    {
      id: 7,
      title: "Candid & Cinematography",
      desc: "Authentic candid photography combined with cinematic videography for your special events.",
      details: "Storytelling through natural moments and professional video production for timeless memories.",
      icon: Candid,
      color: "#FF6B6B"
    },
    {
      id: 8,
      title: "Gruhapravesam",
      desc: "Capture the auspicious occasion of your new home with professional photography and videography.",
      details: "Complete documentation of this sacred housewarming ceremony with family moments and traditional rituals.",
      icon: GruhapravesamImg,
      color: "#FFB6C1"
    },
    {
      id: 9,
      title: "Other Events",
      desc: "Professional photography and videography for all other special occasions and events not listed above.",
      details: "Comprehensive coverage of corporate events, anniversaries, engagements, and any memorable occasions you want captured.",
      icon: Other,
      color: "#87CEEB"
    }
  ];

  return (
    <div className="photography-detail">
      {/* Floating Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Header */}
      <div className="photo-header" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
        <div className="header-content">
          <h1 className="header-title">Photo & Videography Services</h1>
          <p className="header-subtitle">
            Professional photography and videography services to capture your most precious moments
          </p>
          <div className="header-accent"></div>
        </div>
      </div>

      {/* Hero Section with Parallax */}
      <div className="photo-hero-wrapper">
        <div className="photo-hero" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Photography Services"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      </div>
      {/* Services Grid */}
      <div className="photo-services-container">
        <div className="section-header">
          <h2>Our Photography Services</h2>
          <p className="section-subtitle">Comprehensive solutions for all your photography needs</p>
        </div>
        <div className="photo-services-grid">
          {photographyServices.map((service, index) => (
            <div 
              key={service.id} 
              className="photo-service-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <img src={service?.icon} alt={service?.title} className="service-icon-img" />
              </div>
              <div className="photo-service-content">
                <h3>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <p className="service-details">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotographyDetail;
