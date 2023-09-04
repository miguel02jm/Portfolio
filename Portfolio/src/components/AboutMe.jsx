import React from "react";
import "../styles/AboutMe.css";
import jaen from "../img/Jaen.jpg";

const AboutMe = () => {
  return (
    <div className="custom-container2 vh-100 pt-5" id="aboutMe">
      <div className="container pt-5">
        <div className="container d-flex justify-content-center align-items-center">
          <h1>
            <strong>SOBRE MÍ</strong>
            <div className="title mt-2"></div>
          </h1>
        </div>
        <div className="row d-flex justify-content-between align-items-center mt-5">
          <div className="col ps-5 pb-5">
            <img
              className="img-custom"
              src={jaen}
              style={{ width: "450px", border: "4px solid #efb810" }}
            ></img>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="container">
              <p>¿Quién soy? ¿A qué me dedico?</p>
              <p>
                Mi nombre es Miguel Ángel Jaén. Nací en Jaén, una ciudad al sur
                de España en el año 2002, donde sigo viviendo hoy en día. En el
                año 2020 comencé mi carrera en el mundo de la informática y la
                programación iniciando el grado en Ingeniería Informática en mi
                ciudad natal. Actualmente estudio el 4º curso, más concretamente
                en la rama de Tecnologías de la Información y con mención en
                Tratamiento Inteligente de la Información, además de contar con
                un B1 de Inglés por Cambridge.
              </p>
              <p>
                Sin embargo, lo que más me apasiona es aprender por mi cuenta
                nuevas tecnologías. Por ello, compagino mis estudios con un
                aprendizaje autodidacta poniendo en práctica dicho conocimiento
                desarrollando multitud de proyectos personales. A los cuales
                puedes echarles un vistazo más adelante.
              </p>
              <p>
                En conclusión, me defino como un desarrollador software
                apasionado de la informática, con un gran espiritu de trabajo en
                equipo y que sin experiencia todavía en el mundo laboral, busca
                aprender cada día nuevos conceptos y llevarlos los productos que
                desarrollo, creando así soluciones digitales atractivas y
                funcionales, manteniendo siempre la fusión entre la creatividad
                con la tecnología para lograr experiencias únicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
