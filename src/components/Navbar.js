import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsFillHouseFill, BsFillPersonFill, BsFillMortarboardFill, BsFilterSquareFill, BsLaptopFill, BsBarChartSteps, BsFeather, BsEnvelopeFill, BsSun, BsMoon } from "react-icons/bs";
import './Navbar.css';

export default function NavbarComponent({ darkMode, setDarkMode }) {
  const [navBackground, setNavBackground] = useState("transparent");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setNavBackground(darkMode ? "#222" : "#fff");
    };

    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, [darkMode]);

  return (
    <>
      <Navbar
        expand="lg"
        variant={darkMode ? "dark" : "light"}
        fixed="top"
        className={`navbar-custom ${darkMode ? "navbar-dark-custom" : "navbar-light-custom"}`}
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        <Container>
          <Navbar.Brand>
            <Button className="dark-mode-btn" variant={darkMode ? "outline-light" : "outline-secondary"} onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
            <Nav className="ms-auto" onClick={() => setExpanded(false)}>
              <Nav.Link href="#home" className="nav-link-custom"><BsFillHouseFill /> Inicio</Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom"><BsFillPersonFill /> Sobre</Nav.Link>
              <Nav.Link href="#certificates" className="nav-link-custom"><BsFillMortarboardFill /> Certificados</Nav.Link>
              <Nav.Link href="#skills" className="nav-link-custom"><BsFilterSquareFill /> Skills</Nav.Link>
              <Nav.Link href="#projects" className="nav-link-custom"><BsLaptopFill /> Projetos</Nav.Link>
              <Nav.Link href="#stats" className="nav-link-custom"><BsBarChartSteps /> Estatísticas</Nav.Link>
              <Nav.Link href="#blog" className="nav-link-custom"><BsFeather /> Blog</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom"><BsEnvelopeFill /> Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={expanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          overflow: "hidden",
          position: "absolute",
          top: "56px",
          left: 0,
          right: 0,
          backgroundColor: darkMode ? "#222" : "#fff",
          zIndex: 999,
        }}
      >
        <Nav className="flex-column" onClick={() => setExpanded(false)}>
          <Nav.Link href="#about" style={{ color: darkMode ? "white" : "black" }}>Sobre</Nav.Link>
          <Nav.Link href="#skills" style={{ color: darkMode ? "white" : "black" }}>skills</Nav.Link>
          <Nav.Link href="#projects" style={{ color: darkMode ? "white" : "black" }}>Projetos</Nav.Link>
          <Nav.Link href="#certificates" style={{ color: darkMode ? "white" : "black" }}>Certificados</Nav.Link>
          <Nav.Link href="#stats" style={{ color: darkMode ? "white" : "black" }}>Estatísticas</Nav.Link>
          <Nav.Link href="#blog" style={{ color: darkMode ? "white" : "black" }}>Blog</Nav.Link>
          <Nav.Link href="#contact" style={{ color: darkMode ? "white" : "black" }}>Contato</Nav.Link>
        </Nav>
      </motion.div>
    </>
  );
}
