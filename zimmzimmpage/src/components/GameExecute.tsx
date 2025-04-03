import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameExecute.css';

interface GameExecuteProps {
  gameId: 'draconiano' | 'where-are-the-alices';
}

const GameExecute: React.FC<GameExecuteProps> = ({ gameId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir según el ID del juego
    if (gameId === 'draconiano') {
      navigate('/draconiano');
    } else if (gameId === 'where-are-the-alices') {
      navigate('/where-are-the-alices');
    }
  }, [gameId, navigate]);

  return (
    <div className="game-execute-container">
      <div className="loading-message">
        <h2>Redirigiendo al juego...</h2>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default GameExecute;
