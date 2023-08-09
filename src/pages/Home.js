import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="center-section">
        <div className="top-section">
          <div className="left-part-container">
            <h1>Résilience et Actions</h1>
            <h2>Association.</h2>
          </div>
          <div className="right-part-container">
            <p className="para-right-part">
              L'Association "Actions et résilience" agit auprès des communautés
              rurales et des familles plongés dans l'extrême pauvreté, et
              accompagne des petits projets sous forme d'aide ponctuelle en vue
              de booster la capacité de résilience des bénéficiaires. L'objectif
              est d'accompagner les bénéficiaires dans la reconquête de leurs
              objectifs de développement durable. <br /> L'association cible
              principalement les communautés frappées par des catastrophes et
              les familles très pauvres et marginalisés ayant perdu leur
              diginité humaine.
            </p>
          </div>
          <div className="mid-section"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
