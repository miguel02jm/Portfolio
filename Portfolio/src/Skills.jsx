import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="container-fluid pt-5 ps-5">
        <h5>
          Estas son mis principales habilidades en el sector y el dominio que
          tengo de las mismas
        </h5>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <div className="languages-list">
              <h2 className="d-flex justify-content-center py-4">Lenguajes</h2>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">HTML</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">CSS</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">JavaScript</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">PHP</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">C++</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">SQL</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 py-5">
            <div className="FrameworksTools-list">
              <h2 className="d-flex justify-content-center py-4">
                Frameworks/Herramientas
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">Bootstrap</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">NodeJS/Express</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">Laravel</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">CodeIgniter</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="ability-title">Git</span>
                  <span className="ability-score">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <ul className="list-unstyled d-flex justify-content-center">
            <li>
              <span className="ability-title pe-3">Principiante</span>
              <span className="ability-score pe-5">
                <i className="fa fa-star"></i>
              </span>
              <span className="ability-title pe-3">Básico</span>
              <span className="ability-score pe-5">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <span className="ability-title pe-3">Intermedio</span>
              <span className="ability-score pe-5">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <span className="ability-title pe-3">Avanzado</span>
              <span className="ability-score pe-5">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <span className="ability-title pe-3">Experto</span>
              <span className="ability-score pe-5">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
