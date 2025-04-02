import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
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
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Title>ZimmZimm Games</Title>
      <Content>
        <p>Bienvenido a nuestro sitio web. Aquí encontrarás nuestros juegos más recientes y emocionantes.</p>
      </Content>
    </HomeContainer>
  );
};

export default HomePage; 