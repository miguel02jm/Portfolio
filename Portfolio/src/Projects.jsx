import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="py-2 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Proyectos Web</h1>
          </div>
        </div>
      </div>
      <div className="album py-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title">title</h5>
                  <p className="card-text">description</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a
                        className="custom-link"
                        href="https://github.com/miguel02jm/Portfolio"
                      >
                        Ver código en Github
                      </a>
                    </div>
                    <small className="text-body-secondary">fecha</small>
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

export default Projects;
