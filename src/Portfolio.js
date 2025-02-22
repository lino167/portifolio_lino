import React, { useState } from "react";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Stats from "./components/Stats";
import Blog from "./components/Blog";
import Social from "./components/Social";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Certificates darkMode={darkMode} />
      <Stats darkMode={darkMode} />
      <Blog darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Social darkMode={darkMode} />
    </div>
  );
}
