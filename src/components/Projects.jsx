import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [projects, setProyectos] = useState([]);

  useEffect(() => {
    fetch("../projects.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setProyectos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const [t, i18n] = useTranslation("global");

  return (
    <div className="custom-container2 pt-5" id="projects">
      <div className="container pt-5">
        <div className="container d-flex justify-content-center align-items-center">
          <h1>
            <strong>{t("sections.projects")}</strong>
            <div className="title mt-2"></div>
          </h1>
        </div>
        <div className="album my-5">
          <div className="container">
            {projects.length > 0 ? (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                {projects.map((projects, índex) => (
                  <div key={índex}>
                    <div className="col">
                      <a
                        href={projects.link}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="card shadow-sm">
                          <img
                            src={projects.img}
                            style={{
                              width: "100%",
                            }}
                          />
                          <div className="card-body">
                            <h5 className="text-center">
                              <strong>{projects.title}</strong>
                            </h5>
                            <p className="text-secondary">
                              {projects.technologies}
                            </p>
                            <p className="card-text">
                              {i18n.language === "en"
                                ? projects.description_en
                                : projects.description_es}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <p>{t("projects.no-projects")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
