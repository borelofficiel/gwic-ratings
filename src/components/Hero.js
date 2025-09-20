import React from "react";
import "../styles/Hero.css";

const heroImageUrl = "/b.jpg"; // Image de fond

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <h1>Mesurez vos performances ESG</h1>
      <p>GWIC Ratings évalue vos pratiques et vous accompagne vers un avenir responsable.</p>
      <div className="hero-buttons">
        <button>Commencez votre évaluation</button>
        <button>Découvrez nos services</button>
      </div>
    </section>
  );
};

export default Hero;
