import "./styles/commonStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsappButton from "./components/WhatAppBtn";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PhotographyDetail from "./components/PhotographyDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsappButton />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSlider />
              <Services />
              <Gallery />
              <Testimonials />
              <Contact />
            </div>
          }
        />
        <Route path="/photography" element={<PhotographyDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
