'use client';

import { motion } from 'framer-motion';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background minimalista */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('/images/Wata/Door.PNG')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>
      
      {/* Efectos sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-red-400 rounded-full animate-pulse opacity-40"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Título principal */}
          <motion.h1 
            className="font-alice text-8xl md:text-9xl font-bold mb-6 text-white tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            WATA
          </motion.h1>
          
          {/* Subtítulo */}
          <motion.p 
            className="font-courier text-xl md:text-2xl text-gray-400 mb-8 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Un viaje al interior de la mente
          </motion.p>
          
          {/* Descripción simple */}
          <motion.p 
            className="font-courier text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Un juego de terror psicológico donde la realidad se desvanece.
          </motion.p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              className="font-courier bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('demo')}
            >
              DESCARGAR
            </motion.button>
            
            <motion.button
              className="font-courier bg-transparent border border-red-600 text-red-400 hover:bg-red-600/10 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('extras')}
            >
              VER MÁS
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator minimalista */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
} 