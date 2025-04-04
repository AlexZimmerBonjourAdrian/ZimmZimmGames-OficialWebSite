'use client';

import React from 'react';
import { FaSteam, FaWindows, FaXbox } from 'react-icons/fa';
import Image from 'next/image';

const Draconiano = () => {
  const handleSteamClick = () => {
    window.open('https://store.steampowered.com/app/2471960/Draconiano/', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-video">
            <Image
              src="/draconiano.jpg"
              alt="Draconiano"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Draconiano</h1>
              <div className="flex gap-4 mb-6">
                <span className="flex items-center gap-2">
                  <FaWindows className="text-blue-500" />
                  PC
                </span>
                <span className="flex items-center gap-2">
                  <FaXbox className="text-green-500" />
                  Xbox
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Descripción</h2>
              <p className="text-gray-300">
                Un RPG de acción ambientado en un mundo oscuro donde los dragones gobiernan. 
                Crea tu personaje y enfréntate a desafíos épicos mientras descubres los 
                secretos de un reino en decadencia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Características</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Sistema de combate dinámico</li>
                <li>• Personalización profunda de personajes</li>
                <li>• Mundo abierto con múltiples biomas</li>
                <li>• Historia épica con decisiones morales</li>
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

export default Draconiano; 