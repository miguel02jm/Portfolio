import React from "react";
import "../styles/AboutMe.css";
import jaen from "../img/Jaen.jpg";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="custom-container2 pt-5" id="aboutMe">
      <div className="container pt-5">
        <div className="container d-flex justify-content-center align-items-center">
          <h1>
            <strong>{t("sections.about-me")}</strong>
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
              <p className="fw-bold">{t("aboutMe.title")}</p>
              <p>{t("aboutMe.paragraph1")}</p>
              <p>{t("aboutMe.paragraph2")}</p>
              <p>{t("aboutMe.paragraph3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
