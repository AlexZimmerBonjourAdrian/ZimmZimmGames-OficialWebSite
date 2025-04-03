import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #e0e0e0;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #ff0000;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  margin-bottom: 2rem;
  font-family: 'Press Start 2P', cursive;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const MonsterCharacter = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 300px;
  height: 400px;
  background-image: url('/monster-character.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: 1;
`;

const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  background-color: #1a1a1a;
`;

const SectionTitle = styled.h2`
  color: #ff0000;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Press Start 2P', cursive;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GameCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const GameImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #333;
  background-size: cover;
  background-position: center;
`;

const GameInfo = styled.div`
  padding: 1.5rem;
`;

const GameTitle = styled.h3`
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const GameDescription = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>ZimmZimm Games</HeroTitle>
          <HeroSubtitle>
            Creando experiencias de juego únicas y memorables que desafían la imaginación
          </HeroSubtitle>
        </HeroContent>
        <MonsterCharacter />
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Juegos Destacados</SectionTitle>
        <GameGrid>
          <GameCard>
            <GameImage style={{ backgroundImage: 'url(/game1.jpg)' }} />
            <GameInfo>
              <GameTitle>Juego 1</GameTitle>
              <GameDescription>
                Una aventura emocionante que te transportará a un mundo de fantasía y misterio.
              </GameDescription>
            </GameInfo>
          </GameCard>
          <GameCard>
            <GameImage style={{ backgroundImage: 'url(/game2.jpg)' }} />
            <GameInfo>
              <GameTitle>Juego 2</GameTitle>
              <GameDescription>
                Un desafío estratégico que pondrá a prueba tus habilidades y tu ingenio.
              </GameDescription>
            </GameInfo>
          </GameCard>
          <GameCard>
            <GameImage style={{ backgroundImage: 'url(/game3.jpg)' }} />
            <GameInfo>
              <GameTitle>Juego 3</GameTitle>
              <GameDescription>
                Una experiencia inmersiva que te sumergirá en un universo único y cautivador.
              </GameDescription>
            </GameInfo>
          </GameCard>
        </GameGrid>
      </FeaturedSection>
    </HomeContainer>
  );
};

export default HomePage; 