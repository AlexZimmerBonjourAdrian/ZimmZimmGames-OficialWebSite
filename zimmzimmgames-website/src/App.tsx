import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import StorePage from './pages/StorePage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #e0e0e0;
  font-family: 'Press Start 2P', cursive;
`;

const NavBar = styled.nav`
  background-color: #1a1a1a;
  padding: 1rem;
  border-bottom: 2px solid #ff0000;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2rem;
`;

const NavItem = styled.li`
  a {
    color: #e0e0e0;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ff0000;
    }
    
    &.active {
      color: #ff0000;
      text-shadow: 0 0 5px #ff0000;
    }
  }
`;

const MainContent = styled.main`
  padding: 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <NavBar>
          <NavList>
            <NavItem>
              <Link to="/">Inicio</Link>
            </NavItem>
            <NavItem>
              <Link to="/games">Juegos</Link>
            </NavItem>
            <NavItem>
              <Link to="/store">Tienda</Link>
            </NavItem>
            <NavItem>
              <Link to="/news">Noticias</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">Acerca de</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contacto</Link>
            </NavItem>
          </NavList>
        </NavBar>
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
