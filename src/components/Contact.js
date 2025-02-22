import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
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
  );
}
