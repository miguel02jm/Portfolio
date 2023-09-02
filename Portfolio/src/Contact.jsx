import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container py-5">
        <form action="/messages/add" method="POST">
          <div className="form-group py-3">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="string"
              className="form-control"
              id="email"
              name="email"
            ></input>
          </div>
          <div className="form-group py-3">
            <label htmlFor="message">Mensaje</label>
            <textarea
              type="text"
              rows="5"
              className="form-control"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div className="py-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="container-redes">
        <ul className="d-flex justify-content-center list-unstyled py-5">
          <li className="mx-4">
            <a
              href="https://www.instagram.com/miguel02jm/?hl=es"
              className="Instagram"
            >
              <i className="fab fa-instagram fa-2x icon"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://twitter.com/Miguel02jm" className="Twitter">
              <i className="fab fa-twitter fa-2x icon"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://github.com/miguel02jm" className="Github">
              <i className="fab fa-github fa-2x icon"></i>
            </a>
          </li>
          <li className="mx-4">
            <a
              href="https://www.linkedin.com/in/miguel-%C3%A1ngel-ja%C3%A9n-mart%C3%ADnez-4806a8207/"
              className="Linkedin"
            >
              <i className="fab fa-linkedin-in fa-2x icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
