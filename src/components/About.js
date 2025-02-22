import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container id="about" className="mt-5 pt-5">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-center mt-5">Sobre Mim</h2>
        <p className="text-center">
          Desenvolvedor Fullstack JavaScript, com experiência em projetos envolvendo IA, automação e análise esportiva.
        </p>
      </motion.div>
    </Container>
  );
}
