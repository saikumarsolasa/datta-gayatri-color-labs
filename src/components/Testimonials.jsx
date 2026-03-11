import React, { useState, useEffect } from "react";
import { reviews } from "../data/reviews";
import "../styles/Reviews.css";

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-card">
        <p className="feedback">"{reviews[current].feedback}"</p>
        <h4 className="client-name">- {reviews[current].name}</h4>
      </div>
      <div className="dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;