import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

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

export default function Projects() {
  return (
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
  );
}
