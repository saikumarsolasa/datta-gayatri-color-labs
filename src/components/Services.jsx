import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import "../styles/Services.css";

function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="services">

      <h2>Our Services</h2>

      <div className="services-grid">

        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            onClick={()=>navigate(service.link || "#")}
            style={{ cursor: service.title === "Photo & Videography" ? "pointer" : "default" }}
          >
            
            <div className="service-img">
              <img src={service.img} alt={service.title} />
            </div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            {service.title === "Photo & Videography" && (
              <span className="view-more">View All Photography Services →</span>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;