'use client';

import React from 'react';
import { FaSteam } from 'react-icons/fa';
import Footer from '@/components/Footer';

const DraconianoPage = () => {
  const handleSteamClick = () => {
    window.open('https://store.steampowered.com/app/2471960/Draconiano/', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <main className="w-full max-w-2xl px-4 py-16 text-center">
        <h1 className="text-5xl font-gothic font-bold mb-6 tracking-widest">DRACONIANO</h1>
        <p className="text-lg text-gray-300 mb-8 font-gothic">
          Draconiano es un juego de disparos arcade donde controlas a un ser sobrenatural que debe abrirse paso entre hordas de enemigos en escenarios oscuros y fantásticos. Domina poderes únicos, esquiva proyectiles y sobrevive a intensos combates llenos de acción.
        </p>
        <button
          onClick={handleSteamClick}
          className="mb-10 px-8 py-4 bg-[#171a21] hover:bg-[#1b2838] text-white font-bold rounded-lg border-2 border-[#171a21] hover:border-[#1b2838] transition-all duration-300 uppercase tracking-widest flex items-center gap-2 mx-auto"
        >
          <FaSteam />
          Comprar en Steam
        </button>
        <div className="text-left bg-gray-900/80 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 font-gothic">Mecánicas principales</h2>
          <ul className="list-disc pl-6 text-gray-300 font-gothic space-y-2">
            <li>Disparos arcade frenéticos con múltiples armas y power-ups</li>
            <li>Control de un personaje sobrenatural con habilidades especiales</li>
            <li>Enemigos y jefes con patrones de ataque únicos</li>
            <li>Escenarios oscuros y fantásticos llenos de acción</li>
            <li>Progresión de poderes y mejoras durante la partida</li>
            <li>Desafíos de supervivencia y puntuaciones altas</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DraconianoPage; 