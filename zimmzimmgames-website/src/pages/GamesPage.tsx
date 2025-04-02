import React from 'react';
import styled from 'styled-components';

const GamesContainer = styled.div`
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

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const GameCard = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
  }
`;

const GameTitle = styled.h3`
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const GamesPage: React.FC = () => {
  return (
    <GamesContainer>
      <Title>Nuestros Juegos</Title>
      <GameGrid>
        <GameCard>
          <GameTitle>Juego 1</GameTitle>
          <p>Descripción del juego 1</p>
        </GameCard>
        <GameCard>
          <GameTitle>Juego 2</GameTitle>
          <p>Descripción del juego 2</p>
        </GameCard>
        <GameCard>
          <GameTitle>Juego 3</GameTitle>
          <p>Descripción del juego 3</p>
        </GameCard>
      </GameGrid>
    </GamesContainer>
  );
};

export default GamesPage; 