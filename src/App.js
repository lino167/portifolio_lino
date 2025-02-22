import React, { useState } from "react";
import { Container, Nav, Navbar, Card, Button, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Micro SaaS de Análise Esportiva",
    description: "Plataforma com IA para análise de apostas esportivas.",
    link: "#",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Bot de Manutenção no Telegram",
    description: "Automação de registros de manutenção de teares Picanol.",
    link: "#",
    image: "https://via.placeholder.com/150"
  }
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
      {/* Navbar */}
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

      {/* Seção Sobre Mim */}
      <Container id="about" className="mt-5 pt-5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-center mt-5">Sobre Mim</h2>
          <p className="text-center">
            Desenvolvedor Fullstack JavaScript, com experiência em projetos envolvendo IA, automação e análise esportiva.
          </p>
        </motion.div>
      </Container>

      {/* Seção Habilidades */}
      <Container id="skills" className="mt-5">
        <h2 className="text-center">Habilidades</h2>
        <Row className="text-center">
          <Col>JavaScript</Col>
          <Col>React</Col>
          <Col>Node.js</Col>
          <Col>Python</Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>Bootstrap</Col>
          <Col>Sass</Col>
          <Col>MongoDB</Col>
          <Col>APIs</Col>
        </Row>
      </Container>

      {/* Seção Projetos */}
      <Container id="projects" className="mt-5">
        <h2 className="text-center">Projetos</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {projects.map((project, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index} className="m-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>Ver mais</Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Seção Certificados */}
      <Container id="certificates" className="mt-5">
        <h2 className="text-center">Certificados</h2>
        <p className="text-center">Lista de cursos e certificações obtidas.</p>
      </Container>

      {/* Seção Estatísticas */}
      <Container id="stats" className="mt-5 text-center">
        <h2>Estatísticas</h2>
        <Row>
          <Col><h3>10+</h3><p>Projetos Concluídos</p></Col>
          <Col><h3>2+</h3><p>Anos de Experiência</p></Col>
          <Col><h3>5+</h3><p>Certificados</p></Col>
        </Row>
      </Container>

      {/* Seção Blog */}
      <Container id="blog" className="mt-5">
        <h2 className="text-center">Blog</h2>
        <p className="text-center">Artigos e insights sobre desenvolvimento e tecnologia.</p>
      </Container>

      {/* Seção Contato */}
      <Container id="contact" className="mt-5 text-center">
        <h2>Contato</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Seu nome" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Sua mensagem" />
          </Form.Group>
          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
        <p className="mt-3">Email: seuemail@email.com</p>
        <p>GitHub: <a href="https://github.com/seuusuario">github.com/seuusuario</a></p>
      </Container>

      {/* Seção Redes Sociais */}
      <Container id="social" className="mt-5 text-center">
        <h2>Redes Sociais</h2>
        <p><a href="https://linkedin.com/in/seuusuario">LinkedIn</a> | <a href="https://twitter.com/seuusuario">Twitter</a></p>
      </Container>
    </div>
  );
}
