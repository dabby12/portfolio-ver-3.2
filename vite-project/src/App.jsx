// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar"; // Keep the Sidebar
import Testimonials from "./components/Testimonials/Testimonials"; // Import the Testimonials component
import Awards from "./components/AwardsAndRecognitions/Awards"
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Sidebar available across all pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} /> {/* New route for Testimonials */}
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
