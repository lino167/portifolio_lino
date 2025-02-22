import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Stats() {
  return (
    <Container id="stats" className="mt-5 text-center">
      <h2>Estatísticas</h2>
      <Row>
        <Col><h3>10+</h3><p>Projetos Concluídos</p></Col>
        <Col><h3>2+</h3><p>Anos de Experiência</p></Col>
        <Col><h3>5+</h3><p>Certificados</p></Col>
      </Row>
    </Container>
  );
}
