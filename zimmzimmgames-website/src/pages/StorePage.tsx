import React from 'react';
import styled from 'styled-components';

const StoreContainer = styled.div`
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
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

const ProductTitle = styled.h3`
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  color: #00ff00;
  font-weight: bold;
  margin-top: 1rem;
`;

const StorePage: React.FC = () => {
  return (
    <StoreContainer>
      <Title>Tienda</Title>
      <ProductGrid>
        <ProductCard>
          <ProductTitle>Producto 1</ProductTitle>
          <p>Descripción del producto 1</p>
          <Price>$19.99</Price>
        </ProductCard>
        <ProductCard>
          <ProductTitle>Producto 2</ProductTitle>
          <p>Descripción del producto 2</p>
          <Price>$29.99</Price>
        </ProductCard>
        <ProductCard>
          <ProductTitle>Producto 3</ProductTitle>
          <p>Descripción del producto 3</p>
          <Price>$39.99</Price>
        </ProductCard>
      </ProductGrid>
    </StoreContainer>
  );
};

export default StorePage; 