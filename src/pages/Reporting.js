import React from "react";
import "./../styles/Reporting.css";
import { FaFilePdf } from "react-icons/fa"; // Icône PDF

const Reporting = () => {
  return (
    <section className="reporting">
      <h1><FaFilePdf /> REPORTING ESG</h1>
      <p>Nous vous accompagnons dans la création de rapports ESG fiables et clairs.</p>
      <div className="report-types">
        <div className="report-card">Rapports ESG annuels</div>
        <div className="report-card">Tableaux de bord investisseurs</div>
        <div className="report-card">Recommandations personnalisées</div>
      </div>
    </section>
  );
};

export default Reporting;
