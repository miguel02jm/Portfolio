import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-md shadow-sm fixed-top">
          <div className="container py-2">
            <a className="navbar-brand text-white" href="#index">
              <h4>MIGUEL ÁNGEL JAÉN</h4>
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li>
                  <a className="nav-link" href="#skills">
                    <h5>HABILIDADES</h5>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#projects">
                    <h5>PROYECTOS</h5>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    <h5>CONTACTO</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
