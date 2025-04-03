'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { games } from '@/data/games';
import GameCard from '@/components/GameCard';

const universes = [
  { id: 'all', name: 'TODOS', color: 'gray' },
  { id: 'wonderland', name: 'WONDERLAND', color: 'gray' },
  { id: 'travelers', name: 'TRAVELERS', color: 'gray' },
  { id: 'dadasleep', name: 'DADASLEEP', color: 'gray' },
  { id: 'cults', name: 'CULTS', color: 'gray' },
  { id: 'corrupt', name: 'CORRUPT', color: 'gray' }
];

const getButtonClasses = (universe: typeof universes[0], isSelected: boolean) => {
  const baseClasses = "px-6 py-3 rounded-none font-gothic font-bold transition-all duration-500 border-2 uppercase tracking-widest";
  
  if (isSelected) {
    return `${baseClasses} bg-black text-white border-white shadow-lg shadow-white/20`;
  } else {
    return `${baseClasses} bg-black/50 text-gray-400 border-gray-600 hover:border-white hover:text-white hover:shadow-lg hover:shadow-white/20`;
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

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="flex-shrink-0"
            >
              <h1 className="text-2xl font-gothic font-bold text-white tracking-widest">ZIMMZIMM GAMES</h1>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="bg-black/95 py-8 border-t border-white/20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <motion.div 
              className="flex space-x-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              {['discord', 'twitter', 'youtube'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                >
                  <i className={`fab fa-${social} text-2xl`}></i>
                </motion.a>
              ))}
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="text-gray-400 font-gothic tracking-widest"
            >
              &copy; 2024 ZIMMZIMM GAMES. TODOS LOS DERECHOS RESERVADOS.
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
