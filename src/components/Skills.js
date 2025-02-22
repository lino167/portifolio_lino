import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Skills() {
  return (
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
  );
}
