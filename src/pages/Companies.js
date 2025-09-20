import React from "react";
import "../styles/Companies.css"; // CSS spécifique

// Icônes pour illustrer les critères des labels
import { FaMedal, FaCertificate, FaAward } from "react-icons/fa";

const Companies = () => {
  return (
    <section className="companies">
      <h1>Notation ESG pour Entreprises</h1>
      <p>Découvrez nos labels et leurs critères :</p>

      <div className="labels-container">
        <div className="label-card bronze">
          <FaMedal className="label-icon" />
          <h2>Bronze</h2>
          <p>Critères ESG de base. Reconnaissance pour l'engagement initial.</p>
        </div>

        <div className="label-card silver">
          <FaCertificate className="label-icon" />
          <h2>Argent</h2>
          <p>Critères intermédiaires. Valorise les entreprises performantes en ESG.</p>
        </div>

        <div className="label-card gold">
          <FaAward className="label-icon" />
          <h2>Or</h2>
          <p>Critères avancés. Récompense l’excellence en pratiques durables.</p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
