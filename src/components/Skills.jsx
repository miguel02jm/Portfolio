import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Skills.css";
import react_icon from "../img/React.png";
import html_icon from "../img/html-5.png";
import css_icon from "../img/css-3.png";
import js_icon from "../img/js.png";
import mysql_icon from "../img/mysql.png";
import mongo_icon from "../img/mongodb.png";
import node_icon from "../img/nodejs.png";
import python_icon from "../img/python.png";
import flutter_icon from "../img/flutter.png";

const Skills = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="custom-container2 pt-5" id="skills">
      <div className="container pt-5">
        <div className="container d-flex justify-content-center align-items-center">
          <h1>
            <strong>{t("sections.skills")}</strong>
            <div className="title mt-2"></div>
          </h1>
        </div>
        <div className="album mt-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
              <div className="col">
                <ul className="list-unstyled">
                  <div className="container text-center">
                    <h5 className="mt-3 mb-1">
                      <strong>Frontend</strong>
                    </h5>
                  </div>
                  <li>
                    <span>HTML</span>
                  </li>
                  <li>
                    <span>CSS (Bootstrap)</span>
                  </li>
                  <li>
                    <span>JavaScript (React)</span>
                  </li>
                  <div className="container text-center">
                    <h5 className="mt-3 mb-1">
                      <strong>Backend</strong>
                    </h5>
                  </div>
                  <li>
                    <span>JavaScript (NodeJS - ExpressJS)</span>
                  </li>
                  <li>
                    <span>Python (Flask)</span>
                  </li>
                  <li>
                    <span>SQL (MySQL) - NoSQL (MongoDB)</span>
                  </li>
                  <div className="container text-center">
                    <h5 className="mt-3 mb-1">
                      <strong>{t("skills.mobile")}</strong>
                    </h5>
                  </div>
                  <li>
                    <span>Dart (Flutter)</span>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="container d-flex justify-content-center align-items-center">
                  <div className="col">
                    <img
                      className="me-3 mb-3"
                      src={html_icon}
                      style={{ width: "100px" }}
                    />
                    <img
                      className="me-3 mb-3"
                      src={css_icon}
                      style={{ width: "100px" }}
                    />
                    <img
                      className="mb-3"
                      src={js_icon}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col">
                    <img
                      className="me-3 mb-3"
                      src={react_icon}
                      style={{ width: "100px" }}
                    />
                    <img
                      className="me-3 mb-3"
                      src={mysql_icon}
                      style={{ width: "100px" }}
                    />
                    <img
                      className="mb-3"
                      src={mongo_icon}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col">
                    <img
                      className="me-3 mb-3"
                      src={python_icon}
                      style={{ width: "100px" }}
                    />
                    <img
                      className="me-3 mb-3"
                      src={node_icon}
                      style={{ width: "100px" }}
                    />
                    <img
                      className="me-3 mb-3"
                      src={flutter_icon}
                      style={{ width: "100px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
