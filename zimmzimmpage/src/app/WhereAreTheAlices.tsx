import React from 'react';
import { FaGamepad, FaPlaystation, FaXbox, FaWindows } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import './WhereAreTheAlices.css';

const WhereAreTheAlices: React.FC = () => {
  return (
    <div className="game-page">
      <section className="game-section" id="where-are-the-alices">
        <div className="game-header">
          <h2>Where are the Alices?</h2>
          <div className="game-platforms">
            <span className="platform"><FaWindows /> PC</span>
            <span className="platform"><SiNintendoswitch /> Nintendo Switch</span>
            <span className="platform"><FaPlaystation /> PlayStation</span>
          </div>
        </div>
        <div className="game-content">
          <div className="game-image">
            <img src="/assets/images/where-are-the-alices.jpg" alt="Where are the Alices?" />
          </div>
          <div className="game-details">
            <p className="game-description">
              Un thriller psicológico que te sumerge en un mundo donde la realidad y la fantasía se entrelazan. 
              Descubre el misterio detrás de las Alices desaparecidas mientras exploras un mundo surrealista 
              lleno de pistas y secretos.
            </p>
            <div className="game-features">
              <h3>Características:</h3>
              <ul>
                <li>Narrativa no lineal con múltiples finales</li>
                <li>Mecánicas de puzzle innovadoras</li>
                <li>Atmósfera psicológica envolvente</li>
                <li>Banda sonora original</li>
              </ul>
            </div>
            <button className="cta-button">Descargar Ahora</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereAreTheAlices;
