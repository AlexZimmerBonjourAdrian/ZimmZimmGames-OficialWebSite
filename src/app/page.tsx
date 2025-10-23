'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { seoMetadata } from '@/lib/site-config';

export const metadata: Metadata = {
  title: seoMetadata.home.title,
  description: seoMetadata.home.description,
  keywords: seoMetadata.home.keywords,
  openGraph: {
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
    url: 'https://zimmzimmgames.com',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Where Are The Alices? | Alice in Wonderland Horror Visual Novel',
        type: 'image/jpeg',
      },
      {
        url: '/Gameplay/Case00-CB.jpg',
        width: 1280,
        height: 720,
        alt: 'W.A.T.A - C.B. Detective Interrogation Scene',
        type: 'image/jpeg',
      },
      {
        url: '/ConceptArt/ConceptJunoAndCB.png',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Juno and C.B. Character Concept Art',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
    images: [
      '/images/Wata/WhereAreTheAlices.JPG',
      '/Gameplay/Case00-CB.jpg',
      '/ConceptArt/ConceptJunoAndCB.png'
    ],
    creator: '@ZimmZimmGames',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
import { motion, AnimatePresence } from 'framer-motion';
import { games } from '@/data/games';
import GameCard from '@/components/GameCard';
import Footer from '@/components/Footer';
import { FaGamepad, FaUsers, FaRocket } from 'react-icons/fa';

const universes = [
  { id: 'all', name: 'TODOS', color: 'bg-gray-800 text-white border-gray-400 shadow-[0_0_16px_2px_rgba(156,163,175,0.5)]' },
  { id: 'wonderland', name: 'WONDERLAND', color: 'bg-purple-700 text-white border-purple-400 shadow-[0_0_16px_2px_rgba(168,85,247,0.5)]' },
  { id: 'travelers', name: 'TRAVELERS', color: 'bg-blue-700 text-white border-blue-400 shadow-[0_0_16px_2px_rgba(59,130,246,0.5)]' }
];

const getButtonClasses = (universe: { id: string; name: string; color: string }, isSelected: boolean) => {
  const baseClasses = "px-6 py-3 rounded-lg font-gothic font-bold transition-all duration-500 border-2 uppercase tracking-widest text-lg";
  if (isSelected) {
    return `${baseClasses} ${universe.color} scale-105`;
  } else {
    return `${baseClasses} bg-black/70 text-gray-300 border-gray-600 hover:${universe.color} hover:scale-105`;
  }
};

export default function Home() {
  const [selectedUniverse, setSelectedUniverse] = useState<string>('all');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const filteredGames = selectedUniverse === 'all'
    ? games
    : games.filter(game => game.universe === selectedUniverse);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-gray-500/20 to-white/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-gray-500/20 to-white/20"></div>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-gothic font-bold mb-6 text-white tracking-widest">
              ZIMMZIMM GAMES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-gothic tracking-widest mb-8 max-w-3xl mx-auto">
              Estudio independiente especializado en experiencias únicas de terror y misterio
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold rounded-none border-2 border-white hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest"
              >
                Ver Nuestros Juegos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-bold rounded-none border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
              >
                Únete a la Comunidad
              </motion.button>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <FaGamepad className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 font-gothic">Experiencias Únicas</h3>
              <p className="text-gray-400 font-gothic">Creamos juegos que desafían las convenciones</p>
            </div>
            <div className="text-center">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 font-gothic">Comunidad Activa</h3>
              <p className="text-gray-400 font-gothic">Involucramos a nuestros fans en el desarrollo</p>
            </div>
            <div className="text-center">
              <FaRocket className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2 font-gothic">Innovación Constante</h3>
              <p className="text-gray-400 font-gothic">Exploramos nuevas formas de narrativa</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-gothic font-bold mb-4 text-white tracking-widest">
              NUESTROS UNIVERSOS
            </h2>
            <p className="text-xl text-gray-300 font-gothic tracking-widest">
              Explora nuestras creaciones y sumérgete en mundos de terror y misterio
            </p>
          </motion.div>

          {/* Universe Selector */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            {universes.map((universe, index) => (
              <motion.button
                key={universe.id}
                onClick={() => setSelectedUniverse(universe.id)}
                className={getButtonClasses(universe, selectedUniverse === universe.id)}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95, rotate: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              >
                {universe.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Games Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedUniverse}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  isSelected={selectedGame === game.id}
                  onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Coming Soon Section */}
          {filteredGames.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-bold mb-4 font-gothic text-gray-400">
                MÁS PROYECTOS EN DESARROLLO
              </h3>
              <p className="text-gray-500 font-gothic">
                Estamos trabajando en nuevos títulos para este universo. ¡Mantente atento!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
