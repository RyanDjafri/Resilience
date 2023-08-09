import React from "react";
import logo from "../assets/logo/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          <li className="menu-list-item">Accueil</li>
          <li className="menu-list-item">La Resilience</li>
          <li className="menu-list-item">Nos Projets</li>
          <li className="menu-list-item">Actualité</li>
          <li className="menu-list-item">Contact</li>
          <li className="menu-list-item">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
