import React from "react";
import logo from "../assets/logo/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <a href="/" id="logo-link">
          <img src={logo} alt="logo" id="logo-pic" />
        </a>
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          <li className="menu-list-item">
            <a href="/">Accueil</a>
          </li>
          <li className="menu-list-item">
            <a href="/resilience">Résilience</a>
          </li>
          <li className="menu-list-item">
            <a href="/projets">Nos projets</a>
          </li>
          <li className="menu-list-item">
            <a href="/actualite">Actualité</a>
          </li>
          <li className="menu-list-item">
            <a href="/contact">Contact</a>
          </li>
          <li className="menu-list-item search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
