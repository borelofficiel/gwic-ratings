import React from "react";
import "./../styles/Methodology.css";
import { FaClipboardList } from "react-icons/fa"; // Icône React pour illustration

const Methodology = () => {
  return (
    <section className="methodology">
      <h1><FaClipboardList /> MÉTHODOLOGIE</h1>
      <p>
        Découvrez notre approche pour évaluer les performances ESG des entreprises et investisseurs.
      </p>
      <ul className="steps">
        <li>Étape 1 : Collecte des données</li>
        <li>Étape 2 : Analyse selon les standards ESG</li>
        <li>Étape 3 : Notation et recommandations</li>
      </ul>
    </section>
  );
};

export default Methodology;
