import React from "react";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="custom-container5" id="contact">
      <div className="container d-flex justify-content-center align-items-center py-5">
        <h1 className="text-white">
          <strong>{t("sections.contact")}</strong>
          <div className="title2 mt-2"></div>
        </h1>
      </div>
      <div className="container d-flex justify-content-center align-items-center py-3">
        <a
          href="https://www.instagram.com/miguel02jm"
          className="Instagram me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x icon"></i>
          <span className="d-none d-sm-inline">Instagram</span>
        </a>

        <a
          href="https://github.com/miguel02jm"
          className="Github me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github custom-icon"></i>
          <span className="d-none d-sm-inline">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/miguel-%C3%A1ngel-ja%C3%A9n-mart%C3%ADnez-4806a8207/"
          className="LinkedIn me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in custom-icon"></i>
          <span className="d-none d-sm-inline">LinkedIn</span>
        </a>
      </div>
      <div className="container d-flex justify-content-center align-items-center pt-5">
        <p className="text-white">Created by Miguel Ángel Jaén</p>
      </div>
    </div>
  );
};

export default Contact;
