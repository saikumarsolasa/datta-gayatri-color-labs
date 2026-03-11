import "./styles/commonStyles.css";
import WhatsappButton from "./components/WhatAppBtn";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <HeroSlider />

      <Services />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />

      <WhatsappButton />
    </div>
  );
}

export default App;
