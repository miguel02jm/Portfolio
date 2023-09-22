import React from "react";
import { useEffect } from "react";
import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
      <div className="container py-2">
        <a className="navbar-brand text-white" href="#index">
          <h4>MIGUEL ÁNGEL JAÉN</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li>
              <a className="nav-link" href="#aboutMe">
                <h5>{t("sections.about-me")}</h5>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills">
                <h5>{t("sections.skills")}</h5>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                <h5>{t("sections.projects")}</h5>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                <h5>{t("sections.contact")}</h5>
              </a>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn nav-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5 className="text-white">{t("sections.language")}</h5>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item selectable"
                      onClick={() => changeLanguage("es")}
                    >
                      Español
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item selectable"
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
