import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const sectionAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
      <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container className="mt-5 pt-5">
        {[
          
        ].map(({ id, Component }) => (
          <motion.div key={id} id={id} variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Component />
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
