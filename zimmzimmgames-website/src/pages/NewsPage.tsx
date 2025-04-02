import React from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const NewsCard = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
  }
`;

const NewsTitle = styled.h3`
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const NewsDate = styled.p`
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const NewsPage: React.FC = () => {
  return (
    <NewsContainer>
      <Title>Noticias</Title>
      <NewsGrid>
        <NewsCard>
          <NewsDate>01/04/2024</NewsDate>
          <NewsTitle>Nuevo juego en desarrollo</NewsTitle>
          <p>Estamos trabajando en un nuevo juego emocionante que pronto estará disponible.</p>
        </NewsCard>
        <NewsCard>
          <NewsDate>15/03/2024</NewsDate>
          <NewsTitle>Actualización de nuestro juego más popular</NewsTitle>
          <p>Hemos lanzado una gran actualización con nuevas características y mejoras.</p>
        </NewsCard>
        <NewsCard>
          <NewsDate>01/03/2024</NewsDate>
          <NewsTitle>Próximos eventos</NewsTitle>
          <p>No te pierdas nuestros próximos eventos y lanzamientos programados.</p>
        </NewsCard>
      </NewsGrid>
    </NewsContainer>
  );
};

export default NewsPage; 