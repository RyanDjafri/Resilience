import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <h3 className="footer-title">Résilience et Actions</h3>
        <p className="footer-adress">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="footer-phone">+261(0) 814 317 392</p>
        <p className="footer-phone">+261(0) 823 927 645</p>
      </div>
      <div className="footer-links">
        <h3 className="footer-title">Liens utiles</h3>
        <ul className="links-list">
          <li className="link-list-item">
            <a href="/resilience">Résilience</a>
          </li>
          <li className="link-list-item">
            <a href="/projets">Nos projets</a>
          </li>
          <li className="link-list-item">
            <a href="/actualite">Actualité</a>
          </li>
          <li className="link-list-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <h3 className="footer-title">Socials</h3>
        <ul className="social-links-list">
          <li className="social-link-list-item">
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="social-link-list-item">
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="social-link-list-item">
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="social-link-list-item">
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="social-link-list-item">
            <a href="mailto:">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
