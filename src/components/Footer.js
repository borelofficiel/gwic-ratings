import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo et texte */}
      <div className="footer-logo">
        <img src="/logo.png" alt="GWIC Ratings Logo" />
        <p>© 2025 GWIC Ratings. Tous droits réservés.</p>
      </div>

      {/* Liens utiles */}
      <div className="footer-links">
        <h4>Liens utiles</h4>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
        <a href="/companies">Notation ESG</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Réseaux sociaux */}
      <div className="footer-socials">
        <h4>Suivez-nous</h4>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
