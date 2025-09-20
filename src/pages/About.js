import React from "react";
import "../styles/About.css"; // CSS spécifique à cette page
import { FaUsers, FaBullseye, FaHandshake } from "react-icons/fa"; // Icônes React

const About = () => {
  return (
    <section className="about">
      <h1>À propos de GWIC Ratings</h1>

      {/* Mission */}
      <div className="about-item">
        <FaBullseye className="about-icon" />
        <h2>Notre Mission</h2>
        <p>
          Évaluer les pratiques ESG des entreprises et investisseurs pour un avenir responsable.
        </p>
      </div>

      {/* Expertise / Valeurs */}
      <div className="about-item">
        <FaUsers className="about-icon" />
        <h2>Notre Expertise</h2>
        <p>
          Une équipe d’experts ESG avec des années d’expérience dans l’évaluation et le conseil stratégique.
        </p>
      </div>

      {/* Partenaires */}
      <div className="about-item">
        <FaHandshake className="about-icon" />
        <h2>Nos Partenaires</h2>
        <p>
          Nous collaborons avec des institutions financières, des ONG et des cabinets de conseil pour maximiser l’impact ESG.
        </p>
      </div>
    </section>
  );
};

export default About;
