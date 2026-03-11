import React from "react";
import { services } from "../data/services";
import "../styles/Services.css";

function Services() {

  return (
    <section id="services" className="services">

      <h2>Our Services</h2>

      <div className="services-grid">

        {services.map((service, index) => (
          <div key={index} className="service-card">
            
            <div className="service-img">
              <img src={service.img} alt={service.title} />
            </div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;