import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="custom-container4" id="contact">
      <div className="container d-flex justify-content-center align-items-center py-5">
        <h1 className="text-white">
          <strong>CONTACTO</strong>
          <div className="title2 mt-2"></div>
        </h1>
      </div>
      <div className="login-box container">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Correo Electrónico</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Mensaje</label>
          </div>
          <center>
            <a href="#">
              ENVIAR
              <span></span>
            </a>
          </center>
        </form>
      </div>
      <div className="container d-flex justify-content-center align-items-center pt-5">
        <p className="text-white">Created by Miguel Ángel Jaén</p>
      </div>
    </div>
  );
};

export default Contact;
