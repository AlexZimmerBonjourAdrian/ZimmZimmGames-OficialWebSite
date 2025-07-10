'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWindows, FaHeart, FaShare, FaSteam } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '@/components/Footer';

const DraconianoPage = () => {
  const handleWishlist = () => {
    // Implementar funcionalidad de wishlist
    console.log('Añadido a wishlist');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Draconiano - ZimmZimm Games',
        text: 'Tras pactar con una máscara demoníaca para saldar sus deudas, un estafador descubre que su cuerpo es ahora propiedad del ente...',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  const handleSteamClick = () => {
    window.open('https://store.steampowered.com/app/2471960/Draconiano/', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
            src="https://placehold.co/1920x1080/000000/FFFFFF/png?text=Draconiano"
            alt="Draconiano Background"
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
            <h1 className="text-6xl md:text-8xl font-gothic font-bold mb-6 tracking-widest">
              DRACONIANO
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-gothic leading-relaxed">
              Tras pactar con una máscara demoníaca para saldar sus deudas, un estafador descubre que su cuerpo es ahora propiedad del ente: convertido en mero espectador de sus propios actos, deberá recuperar el control luchando contra sectas interdimensionales... antes de que su mente sea borrada para siempre.
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
                COMPRAR EN STEAM
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
                Sumérgete en una pesadilla donde el pacto con lo demoníaco se convierte en tu mayor error. 
                Como un estafador desesperado, has vendido tu cuerpo a una máscara demoníaca, pero ahora 
                eres solo un espectador de tus propios actos, viendo cómo el ente controla tu forma física.
              </p>
              <p className="text-gray-300 mb-6 font-gothic leading-relaxed">
                Tu única esperanza es luchar contra sectas interdimensionales que buscan tu destrucción 
                total. Cada batalla, cada decisión moral, cada alianza con entidades sobrenaturales te 
                acerca más a recuperar el control... o a perder tu mente para siempre en las dimensiones 
                corruptas del Dadasleep.
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
                  'Sistema de combate dinámico contra sectas interdimensionales',
                  'Mecánica única de posesión demoníaca y lucha por el control',
                  'Mundo abierto con múltiples dimensiones y biomas corruptos',
                  'Historia épica con decisiones morales que afectan tu humanidad',
                  'Sistema de alianzas con entidades sobrenaturales',
                  'Banda sonora atmosférica que refleja la corrupción mental'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
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
            CAPTURAS DE PANTALLA
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            >
                <Image
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Draconiano+Screenshot+${index}`}
                  alt={`Draconiano Screenshot ${index}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
            <h2 className="text-4xl font-bold mb-6 font-gothic">¿LISTO PARA EL PACTO?</h2>
            <p className="text-xl text-gray-300 mb-8 font-gothic">
              Únete a la lucha contra las sectas interdimensionales y recupera el control de tu destino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#171a21] hover:bg-[#1b2838] text-white font-bold rounded-none border-2 border-[#171a21] hover:border-[#1b2838] transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
                onClick={handleSteamClick}
              >
                <FaSteam />
                COMPRAR EN STEAM
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

export default DraconianoPage; 