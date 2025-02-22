import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function Navigation({ darkMode, setDarkMode }) {
  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Meu Portfólio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#certificates">Certificados</Nav.Link>
            <Nav.Link href="#stats">Estatísticas</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
          <Button variant="outline-secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Modo Claro" : "Modo Escuro"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
