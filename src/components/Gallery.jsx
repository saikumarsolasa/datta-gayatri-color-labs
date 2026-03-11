import React from "react";
import "../styles/Gallery.css";

const images = [
  { id: 1, title: "Wedding Photography", src: "https://images.pexels.com/photos/4113955/pexels-photo-4113955.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, title: "Birthday Shoot", src: "https://images.pexels.com/photos/1910226/pexels-photo-1910226.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, title: "Gift Printing", src: "https://images.pexels.com/photos/3951620/pexels-photo-3951620.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, title: "Album Design", src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, title: "Professional Portraits", src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 6, title: "Candid Shots", src: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800" }
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>Our Gallery</h2>
        <p>Showcasing our photography and videography work over 30 years.</p>
      </div>
      <div className="gallery-grid">
        {images.map(image => (
          <div className="gallery-card" key={image.id}>
            <img src={image.src} alt={image.title} />
            <div className="overlay">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;