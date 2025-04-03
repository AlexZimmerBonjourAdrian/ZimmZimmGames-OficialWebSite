import React from 'react';
import { FaSteam, FaWindows, FaXbox } from 'react-icons/fa';
import './Draconiano.css';

const Draconiano: React.FC = () => {
  const handleSteamClick = () => {
    window.open('https://store.steampowered.com/app/2471960/Draconiano/', '_blank');
  };

  return (
    <div className="draconiano-page">
      <section className="game-section">
        <div className="game-header">
          <h2>Draconiano</h2>
          <div className="game-platforms">
            <span className="platform"><FaWindows /> PC</span>
            <span className="platform"><FaXbox /> Xbox</span>
          </div>
        </div>
        
        <div className="game-content">
          <div className="game-image">
            <img src="/assets/images/draconiano.jpg" alt="Draconiano" />
          </div>
          
          <div className="game-details">
            <p className="game-description">
              Un RPG de acción ambientado en un mundo oscuro donde los dragones gobiernan. 
              Crea tu personaje y enfréntate a desafíos épicos mientras descubres los 
              secretos de un reino en decadencia.
            </p>
            
            <div className="game-features">
              <h3>Características:</h3>
              <ul>
                <li>Sistema de combate dinámico</li>
                <li>Personalización profunda de personajes</li>
                <li>Mundo abierto con múltiples biomas</li>
                <li>Historia épica con decisiones morales</li>
              </ul>
            </div>

            <button className="steam-button" onClick={handleSteamClick}>
              <FaSteam className="steam-icon" />
              Comprar en Steam
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Draconiano;
