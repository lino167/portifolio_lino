import React from "react";
import { Container } from "react-bootstrap";

export default function Social() {
  return (
    <Container id="social" className="mt-5 text-center">
      <h2>Redes Sociais</h2>
      <p>
        <a href="https://linkedin.com/in/seuusuario">LinkedIn</a> |{" "}
        <a href="https://twitter.com/seuusuario">Twitter</a>
      </p>
    </Container>
  );
}
