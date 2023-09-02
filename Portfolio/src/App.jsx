import React from "react";
import Index from "./Index";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Navbar from "./components/navbar";
import "./styles/app.css";

function App() {
  return (
    <div className="custom-font">
      <Navbar></Navbar>
      <Index></Index>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
