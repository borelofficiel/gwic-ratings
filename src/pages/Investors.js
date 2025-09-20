import React from "react";
import "../styles/Investors.css"; // Chemin correct vers CSS
import { FaChartPie, FaHandshake } from "react-icons/fa"; // Icônes React

const Investors = () => {
  return (
    <section className="investors">
      {/* Titre de la page */}
      <h1>Notation ESG pour Investisseurs</h1>
      <p>Nos services pour accompagner vos décisions d'investissement responsable :</p>

      {/* Cartes des services */}
      <div className="investor-services">
        <div className="service-card">
          <FaChartPie className="service-icon" />
          <h2>Analyse ESG</h2>
          <p>Évaluation complète des entreprises selon critères ESG.</p>
        </div>

        <div className="service-card">
          <FaHandshake className="service-icon" />
          <h2>Accompagnement stratégique</h2>
          <p>Conseils personnalisés pour intégrer ESG dans vos investissements.</p>
        </div>
      </div>
    </section>
  );
};

export default Investors;
