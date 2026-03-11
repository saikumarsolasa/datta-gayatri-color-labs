import { useState, useEffect } from "react";
import "../styles/HeroSlider.css";

const slides = [
  {
    title: "Traditional Andhra Bride & Groom",
    subtitle: "Capturing timeless love and culture",
    img: "https://images.pexels.com/photos/17680902/pexels-photo-17680902.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Beautiful Wedding Portrait",
    subtitle: "Memories that last forever",
    img: "https://images.pexels.com/photos/30482896/pexels-photo-30482896.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Joyful Wedding Celebration",
    subtitle: "Celebrate life’s happiest moments",
    img: "https://images.pexels.com/photos/24029751/pexels-photo-24029751.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      <div className="slide" key={index}>
        <img src={slides[index].img} alt={slides[index].title} />
        <div className="hero-text">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].subtitle}</p>
          <a href="#services" className="cta-btn">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;