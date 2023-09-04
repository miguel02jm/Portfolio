import React from "react";
import "../styles/Skills.css";
import react_icon from "../img/React.png";
import html_icon from "../img/html-5.png";
import css_icon from "../img/css-3.png";
import js_icon from "../img/js.png";
import mysql_icon from "../img/mysql.png";
import mongo_icon from "../img/mongodb.png";
import node_icon from "../img/nodejs.png";
import laravel_icon from "../img/Laravel.png";
import django_icon from "../img/django.png";

const Skills = () => {
  return (
    <div className="container vh-100 pt-5" id="skills">
      <div className="container pt-5">
        <div className="container d-flex justify-content-center align-items-center">
          <h1>
            <strong>HABILIDADES</strong>
            <div className="title mt-2"></div>
          </h1>
        </div>
        <div className="row d-flex justify-content-between align-items-center mt-5">
          <div className="col">
            <ul className="list-unstyled">
              <div className="container text-center">
                <h5 className="my-3">
                  <strong>Frontend</strong>
                </h5>
              </div>
              <li>
                <span className="ability-title">HTML</span>
              </li>
              <li>
                <span className="ability-title">CSS (Bootstrap)</span>
              </li>
              <li>
                <span className="ability-title">JavaScript (React)</span>
              </li>
              <div className="container text-center">
                <h5 className="my-3">
                  <strong>Backend</strong>
                </h5>
              </div>
              <li>
                <span className="ability-title">
                  PHP (Laravel - CodeIgniter)
                </span>
              </li>
              <li>
                <span className="ability-title">
                  JavaScript (NodeJS - ExpressJS)
                </span>
              </li>
              <li>
                <span className="ability-title">Python (Django)</span>
              </li>
              <div className="container text-center">
                <h5 className="my-3">
                  <strong>Lenguajes - Herramientas</strong>
                </h5>
              </div>
              <li>
                <span className="ability-title">C++</span>
              </li>
              <li>
                <span className="ability-title">SQL y NoSQL</span>
              </li>
              <li>
                <span className="ability-title">Git</span>
              </li>
            </ul>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="container">
              <img
                className="me-3 mb-3"
                src={html_icon}
                style={{ width: "128px" }}
              />
              <img
                className="me-3 mb-3"
                src={css_icon}
                style={{ width: "128px" }}
              />
              <img
                className="me-3 mb-3"
                src={js_icon}
                style={{ width: "128px" }}
              />
            </div>
            <div className="container">
              <img
                className="me-3 mb-3"
                src={react_icon}
                style={{ width: "128px" }}
              />
              <img
                className="me-3 mb-3"
                src={mysql_icon}
                style={{ width: "128px" }}
              />
              <img
                className="me-3 mb-3"
                src={mongo_icon}
                style={{ width: "128px" }}
              />
            </div>
            <div className="container">
              <img
                className="me-3 mb-3"
                src={laravel_icon}
                style={{ width: "128px" }}
              />
              <img
                className="me-3 mb-3"
                src={node_icon}
                style={{ width: "128px" }}
              />
              <img
                className="me-3 mb-3"
                src={django_icon}
                style={{ width: "128px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
