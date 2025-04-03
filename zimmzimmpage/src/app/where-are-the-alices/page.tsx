'use client';

import React from 'react';
import { FaSteam, FaWindows, FaPlaystation } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import Image from 'next/image';

const WhereAreTheAlices = () => {
  const handleSteamClick = () => {
    window.open('https://store.steampowered.com/app/2471961/Where_Are_The_Alices/', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-video">
            <Image
              src="/images/WhereAreTheAlices.JPG"
              alt="Where Are The Alices"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Where Are The Alices</h1>
              <div className="flex gap-4 mb-6">
                <span className="flex items-center gap-2">
                  <FaWindows className="text-blue-500" />
                  PC
                </span>
                <span className="flex items-center gap-2">
                  <FaPlaystation className="text-blue-400" />
                  PlayStation
                </span>
                <span className="flex items-center gap-2">
                  <SiNintendoswitch className="text-red-500" />
                  Nintendo Switch
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Descripción</h2>
              <p className="text-gray-300">
                Un thriller psicológico que te sumerge en un mundo donde la realidad y la fantasía se entrelazan. 
                Descubre el misterio detrás de las Alices desaparecidas mientras exploras un mundo surrealista 
                lleno de pistas y secretos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Características</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Narrativa no lineal con múltiples finales</li>
                <li>• Mecánicas de puzzle innovadoras</li>
                <li>• Atmósfera psicológica envolvente</li>
                <li>• Banda sonora original</li>
              </ul>
            </div>

            <button
              onClick={handleSteamClick}
              className="flex items-center gap-2 px-6 py-3 bg-[#171a21] text-white rounded-lg hover:bg-[#1b2838] transition-colors"
            >
              <FaSteam className="text-2xl" />
              Comprar en Steam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereAreTheAlices; 