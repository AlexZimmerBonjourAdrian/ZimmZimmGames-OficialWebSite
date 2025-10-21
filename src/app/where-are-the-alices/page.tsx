'use client';

import React from 'react';
import { FaWindows, FaHeart, FaShare, FaSteam, FaAndroid } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

const WhereAreTheAlices = () => {
  const handleWishlist = () => {
    // Implementar funcionalidad de wishlist
    console.log('Añadido a wishlist');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Where Are The Alices - ZimmZimm Games',
        text: 'Cuando la pequeña Alicia desaparece, una liebre detective se ve arrastrada al enfrentamiento con un antiguo enemigo...',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  const handleSteamClick = () => {
    window.open('https://store.steampowered.com/app/2471961/Where_Are_The_Alices/', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/WhereAreTheAlices.JPG"
            alt="Where Are The Alices Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-gothic font-bold mb-6 tracking-widest">
              WHERE ARE THE ALICES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-gothic leading-relaxed">
              Cuando la pequeña Alicia desaparece, una liebre detective se ve arrastrada al enfrentamiento con un antiguo enemigo: un conejo diminuto pero letal, cuya maldad es una peste olvidada. Este caso es solo la entrada a un infierno personal, una travesía donde resolver esta conspiración podría costarle la última pizca de su humanidad.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#171a21] hover:bg-[#1b2838] text-white font-bold rounded-none border-2 border-[#171a21] hover:border-[#1b2838] transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
                onClick={handleSteamClick}
              >
                <FaSteam />
                VER EN STEAM
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-bold rounded-none border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
                onClick={handleWishlist}
              >
                <FaHeart />
                AÑADIR A WISHLIST
              </motion.button>
            </div>

            {/* Platforms */}
            <div className="flex justify-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <FaWindows className="text-blue-500" />
                PC
              </span>
              <span className="flex items-center gap-2">
                <FaAndroid className="text-green-500" />
                Android
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Game Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Game Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 font-gothic">SOBRE EL JUEGO</h2>
              <p className="text-gray-300 mb-6 font-gothic leading-relaxed">
                Sumérgete en un Wonderland corrupto donde la desaparición de Alicia es solo la punta del iceberg. 
                Como una liebre detective, te verás arrastrada a un caso que te llevará al corazón de una 
                conspiración olvidada, donde un conejo diminuto pero letal guarda secretos que amenazan 
                con destruir tu humanidad.
              </p>
              <p className="text-gray-300 mb-6 font-gothic leading-relaxed">
                Cada pista que sigues, cada decisión que tomas, te acerca más a la verdad pero también 
                te aleja de tu esencia. En este infierno personal, resolver la conspiración podría costarte 
                la última pizca de tu humanidad, mientras el conejo malvado te observa desde las sombras 
                del Wonderland olvidado.
              </p>
            </motion.div>

            {/* Game Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 font-gothic">CARACTERÍSTICAS</h2>
              <div className="space-y-4">
                {[
                  'Narrativa no lineal con múltiples finales que afectan tu humanidad',
                  'Mecánicas de detective innovadoras en un mundo surrealista',
                  'Atmósfera psicológica envolvente con elementos de terror',
                  'Sistema de pistas y conspiraciones interconectadas',
                  'Banda sonora original que adapta la música a la tensión',
                  'Múltiples dimensiones del Wonderland corrupto'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 font-gothic">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center font-gothic"
          >
            PRÓXIMAMENTE
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group bg-gray-800 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">🐰</div>
                  <p className="text-gray-400 font-gothic">Concept Art {index}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 font-gothic">¿LISTO PARA LA INVESTIGACIÓN?</h2>
            <p className="text-xl text-gray-300 mb-8 font-gothic">
              Descubre la verdad detrás de la desaparición de Alicia y enfrenta la conspiración del conejo malvado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#171a21] hover:bg-[#1b2838] text-white font-bold rounded-none border-2 border-[#171a21] hover:border-[#1b2838] transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
                onClick={handleSteamClick}
              >
                <FaSteam />
                VER EN STEAM
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-bold rounded-none border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
                onClick={handleShare}
              >
                <FaShare />
                COMPARTIR
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhereAreTheAlices; 