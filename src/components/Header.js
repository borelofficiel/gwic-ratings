import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icônes burger
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // pour le menu mobile
  const [dropdownOpen, setDropdownOpen] = useState(false); // pour Notation ESG

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/"><img src="logo.png" alt="GWIC Ratings Logo" /></Link>
      </div>

      {/* Menu principal */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>À propos</Link>

        {/* Dropdown Notation ESG */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Notation ESG
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/companies" onClick={() => setMenuOpen(false)}>Pour Entreprises</Link>
              <Link to="/investors" onClick={() => setMenuOpen(false)}>Pour Investisseurs</Link>
              <Link to="/labels" onClick={() => setMenuOpen(false)}>Labels ESG</Link>
            </div>
          )}
        </div>

        <Link to="/methodology" onClick={() => setMenuOpen(false)}>Méthodologie</Link>
        <Link to="/reporting" onClick={() => setMenuOpen(false)}>Reporting</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

      {/* Actions */}
      <div className="header-actions">
        <Link to="/signup" className="btn-primary" onClick={() => setMenuOpen(false)}>Commencez votre évaluation</Link>
        <Link to="/login" className="btn-secondary" onClick={() => setMenuOpen(false)}>Connexion</Link>
      </div>

      {/* Bouton burger pour mobile */}
      <button className="burger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} color="#fff" /> : <FaBars size={25} color="#fff" />}
      </button>
    </header>
  );
};

export default Header;
