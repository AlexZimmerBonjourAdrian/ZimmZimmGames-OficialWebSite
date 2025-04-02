import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #ff0000;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
`;

const Content = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 5px;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    color: #e0e0e0;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    margin-bottom: 1rem;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Acerca de Nosotros</Title>
      <Content>
        <Section>
          <h2>Nuestra Historia</h2>
          <p>
            ZimmZimm Games es un estudio independiente de desarrollo de videojuegos fundado en 2024.
            Nos especializamos en crear experiencias únicas y memorables para los jugadores.
          </p>
        </Section>
        <Section>
          <h2>Nuestra Misión</h2>
          <p>
            Nuestra misión es crear juegos que inspiren, entretengan y desafíen a los jugadores.
            Nos esforzamos por innovar y ofrecer experiencias de juego únicas.
          </p>
        </Section>
        <Section>
          <h2>Nuestro Equipo</h2>
          <p>
            Contamos con un equipo apasionado de desarrolladores, artistas y diseñadores
            dedicados a crear los mejores juegos posibles.
          </p>
        </Section>
      </Content>
    </AboutContainer>
  );
};

export default AboutPage; 