import React from "react";
import "../styles/AboutMe.css";
import jaen from "../img/Jaen.jpg";

const AboutMe = () => {
  return (
    <div className="custom-container2 pt-5" id="aboutMe">
      <div className="container pt-5">
        <div className="container d-flex justify-content-center align-items-center">
          <h1>
            <strong>SOBRE MÍ</strong>
            <div className="title mt-2"></div>
          </h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3 mt-5">
          <div className="col d-flex justify-content-center align-items-center">
            <img
              className="img-custom"
              src={jaen}
              style={{ maxWidth: "100%", border: "4px solid #efb810" }}
            ></img>
          </div>
          <div className="col">
            <div className="container">
              <p className="fw-bold">¿QUIÉN SOY? ¿A QUÉ ME DEDICO?</p>
              <p>
                Mi nombre es Miguel Ángel Jaén. Nací en Jaén, una ciudad al sur
                de España en el año 2002, donde sigo viviendo hoy en día. En el
                año 2020 comencé mi carrera en el mundo de la informática y la
                programación iniciando el grado en Ingeniería Informática en mi
                ciudad. A día de hoy continuo dichos estudios cursando el 4º
                curso, más concretamente en la rama de Tecnologías de la
                Información y con mención en Tratamiento Inteligente de la
                Información.
              </p>
              <p>
                Además de los estudios que me encuentro desarrollando, trato de
                aprender por mi cuenta nuevas tecnologías (Actualmente React por
                parte del Frontend y NodeJS en el lado del backend). Por ello,
                compagino mis estudios con un aprendizaje autodidacta, poniendo
                en práctica dicho conocimiento desarrollando mis propios
                proyectos personales. A los cuales podrás echarles un vistazo
                más adelante.
              </p>
              <p>
                En conclusión, me defino como un desarrollador software
                apasionado de la informática, con un gran espiritu de trabajo en
                equipo y que, a pesar de no contar con experiencia todavía en el
                mundo laboral, busca aprender cada día nuevos conceptos y
                plasmarlos en los productos que desarrollo por mi cuenta,
                creando así soluciones digitales atractivas y funcionales,
                tratando de transmitir experiencias únicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
