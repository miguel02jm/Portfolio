import React from "react";
import "../styles/Index.css";
import "../styles/SocialMedia.css";
import fotoperfil from "../img/Perfil.jpeg";

function Index() {
  return (
    <div
      className="custom-container d-flex justify-content-center align-items-center vh-100"
      id="index"
    >
      <div className="custom-container">
        <div className="row">
          <div className="col flex-column d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center pt-5">
              <h1 className="display-4 me-4">Desarrollador</h1>
              <h1 className="gold-color display-4">Full-Stack</h1>
            </div>
            <p className="text-center pt-5">
              Hola! Mi nombre es Miguel Ángel Jaén y soy desarrollador web
              Full-Stack. Actualmente resido en Jaén, España. 📍 Echa un vistazo
              a mi portfolio!
            </p>
            <div className="container d-flex justify-content-center align-items-center py-3">
              <a href="https://twitter.com/Miguel02jm" className="Twitter me-2">
                <i className="fab fa-twitter fa-2x icon"></i>
                <span className="d-none d-sm-inline">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/tu_perfil_de_instagram"
                className="Instagram me-2"
              >
                <i className="fab fa-instagram fa-2x icon"></i>
                <span className="d-none d-sm-inline">Instagram</span>
              </a>

              <a href="https://github.com/miguel02jm" className="Github me-2">
                <i className="fa-brands fa-github custom-icon"></i>
                <span className="d-none d-sm-inline">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-%C3%A1ngel-ja%C3%A9n-mart%C3%ADnez-4806a8207/"
                className="LinkedIn me-2"
              >
                <i className="fa-brands fa-linkedin-in custom-icon"></i>
                <span className="d-none d-sm-inline">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="one-div my-2">
              <img
                src={fotoperfil}
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
