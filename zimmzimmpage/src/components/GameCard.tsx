'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
  onClick: () => void;
  isSelected: boolean;
}

export default function GameCard({ game, onClick, isSelected }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden cursor-pointer group ${
        isSelected ? 'col-span-full md:col-span-2 lg:col-span-3' : ''
      }`}
      onClick={onClick}
    >
      <motion.div
        className={`relative ${
          isSelected ? 'h-[600px]' : 'h-[400px]'
        } transition-all duration-500`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Imagen del juego con overlay */}
        <div className="absolute inset-0">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover transition-all duration-500 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
        </div>

        {/* Contenido */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <h3 className="text-2xl md:text-3xl font-gothic font-bold text-white mb-2 tracking-widest">
              {game.title}
            </h3>
            
            {/* Plataformas */}
            <div className="flex gap-2 mb-3">
              {game.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-2 py-1 text-xs font-gothic bg-black/50 text-white border border-white/20 tracking-widest"
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* Descripción */}
            <p className="text-gray-300 mb-4 font-gothic tracking-widest">
              {game.description}
            </p>

            {/* Características (solo visible cuando está seleccionado) */}
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <h4 className="text-lg font-gothic font-bold text-white mb-3 tracking-widest">
                  CARACTERÍSTICAS
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {game.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center text-gray-300 font-gothic tracking-widest"
                    >
                      <span className="w-1.5 h-1.5 bg-white mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Botón de acción */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 font-gothic font-bold tracking-widest transition-all duration-300 ${
                game.status === 'released'
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black/50 text-white border border-white/20 hover:bg-black hover:border-white'
              }`}
            >
              {game.status === 'released' ? 'JUGAR AHORA' : 'VER MÁS'}
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
} 