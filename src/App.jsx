import React from "react";
import Index from "./components/Index";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import "./styles/app.css";

function App() {
  return (
    <div className="custom-font">
      <Navbar></Navbar>
      <Index></Index>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
