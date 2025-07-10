'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/95 py-12 border-t border-white/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4 font-gothic">ZIMMZIMM GAMES</h3>
          <p className="text-gray-400 mb-4 font-gothic leading-relaxed">
            Estudio independiente especializado en crear experiencias únicas de terror y misterio. Nuestro compromiso es desarrollar juegos que desafíen las convenciones y exploren nuevas formas de narrativa interactiva.
          </p>
          <a 
            href="mailto:zimmzimmgames@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-gothic"
          >
            zimmzimmgames@gmail.com
          </a>
        </div>
        <div className="pt-8">
          <p className="text-center text-gray-500 font-gothic text-sm">
            © 2025 ZIMMZIMM GAMES. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 