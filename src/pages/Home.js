import React from "react";
import Navbar from "../components/Navbar";
import check from "../assets/logo/check.png";
import logo from "../assets/logo/logo.jpg";
import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import Footer from "../components/Footer";

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
        </div>
        {/* <div className="mid-section">
            <p>PIC</p>
          </div> */}
        <div className="bottom-section">
          <div className="goal-cards">
            <div className="goal-one goal">
              <img src={check} alt="" id="goal-pic" />
              <h2 id="goal-title">Example 1 </h2>
              <p id="goal-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                praesentium similique hic corporis reprehenderit eius.
              </p>
            </div>
            <div className="goal-two goal">
              <img src={check} alt="" id="goal-pic" />
              <h2 id="goal-title">Example 2 </h2>
              <p id="goal-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                praesentium similique hic corporis reprehenderit eius.
              </p>
            </div>
            <div className="goal-three goal">
              <img src={check} alt="" id="goal-pic" />
              <h2 id="goal-title">Example 3 </h2>
              <p id="goal-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                praesentium similique hic corporis reprehenderit eius.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="mid-section">
        <div className="logo-container">
          <img src={logo} alt="logo-pic" />
        </div>
        <div className="text-container">
          <h2>Notre vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum non
            temporibus doloremque! Asperiores cumque consectetur nisi quisquam
            vel molestiae nesciunt cupiditate, et voluptates provident.
          </p>
          <a href="/resilience">
            <button>En savoir plus</button>
          </a>
        </div>
      </section>
      <section id="projets-section">
        <h3 className="projets-title">Nos Projets</h3>
        <div className="imgs-container">
          <div className="imgs-container-one">
            <img src={image1} alt="image-1" />
            <p className="img-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              consequuntur.
            </p>
            <br />
            <img src={image2} alt="image-2" />
            <p className="img-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              consequuntur.
            </p>
            <br />
          </div>
          <div className="imgs-container-two">
            <img src={image1} alt="image-1" />
            <p className="img-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              consequuntur.
            </p>
            <br />
            <img src={image2} alt="image-2" />
            <p className="img-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              consequuntur.
            </p>
            <br />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
