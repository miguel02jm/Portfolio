import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProyectos] = useState([]);

  useEffect(() => {
    fetch("../projects.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setProyectos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="custom-container2 pt-5" id="projects">
      <div className="container pt-5">
        <div className="container d-flex justify-content-center align-items-center">
          <h1>
            <strong>PROYECTOS</strong>
            <div className="title mt-2"></div>
          </h1>
        </div>
        <div className="album my-3">
          <div className="container">
            {projects.length > 0 ? (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                {projects.map((projects, índex) => (
                  <div key={índex}>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img
                          src={projects.img}
                          style={{
                            width: "100%",
                          }}
                        />
                        <div className="card-body">
                          <h5 className="text-center">{projects.title}</h5>
                          <p className="card-text">{projects.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <p>Aún no he subido ningún proyecto :(</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
