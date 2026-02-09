'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  status?: 'coming_soon' | 'released';
  platforms: string[];
  features: string[];
}

interface GameCardProps {
  game: Game;
  isSelected?: boolean;
  onClick?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, isSelected = false, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-gray-900 rounded-lg border-2 overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'border-blue-400 shadow-[0_0_20px_4px_rgba(59,130,246,0.5)]' 
          : 'border-gray-700 hover:border-gray-500'
      }`}
      onClick={onClick}
    >
      <div className="relative h-64 w-full">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {game.status === 'coming_soon' && (
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold font-gothic">
            PRÓXIMAMENTE
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 font-gothic text-white">
          {game.title}
        </h3>
        <p className="text-gray-300 mb-4 font-gothic text-sm line-clamp-3">
          {game.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {game.platforms.slice(0, 3).map((platform) => (
            <span
              key={platform}
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-gothic"
            >
              {platform}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {game.features.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs font-gothic"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Link
          href={`/${game.id}`}
          className="inline-block w-full text-center bg-white text-black px-4 py-2 rounded font-bold font-gothic hover:bg-gray-200 transition-colors uppercase tracking-wider"
          onClick={(e) => e.stopPropagation()}
        >
          Ver Detalles
        </Link>
      </div>
    </motion.div>
  );
};

export default GameCard;

