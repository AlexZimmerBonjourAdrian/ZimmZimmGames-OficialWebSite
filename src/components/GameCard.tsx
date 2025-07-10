'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/types/game';
import { FaPlay, FaExternalLinkAlt, FaSteam } from 'react-icons/fa';

interface GameCardProps {
  game: Game;
  isSelected: boolean;
  onClick: () => void;
}

const getStatusInfo = (status: Game['status']) => {
  switch (status) {
    case 'released':
      return { text: 'DISPONIBLE', className: 'bg-green-600 text-white' };
    case 'development':
      return { text: 'EN DESARROLLO', className: 'bg-yellow-600 text-black' };
    default:
      return { text: 'DESCONOCIDO', className: 'bg-gray-600 text-white' };
  }
};

const GameCard: React.FC<GameCardProps> = ({ game, isSelected, onClick }) => {
  const statusInfo = getStatusInfo(game.status);
  const hasExternalLinks = !!game.steamUrl || !!game.repository;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-gray-900 border-2 ${
        isSelected ? 'border-white shadow-xl shadow-white/20' : 'border-gray-800 hover:border-gray-600'
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Game Image */}
      <div className="relative w-full aspect-video">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusInfo.className}`}>
            {statusInfo.text}
          </span>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <FaPlay className="text-white text-2xl" />
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-gothic">{game.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 font-gothic">{game.description}</p>
        
        {/* Platforms */}
        <div className="flex flex-wrap gap-2 mb-4">
          {game.platforms.map((platform) => (
            <span key={platform} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded font-gothic">
              {platform}
            </span>
          ))}
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-bold text-gray-400 mb-2 font-gothic">CARACTERÍSTICAS:</h4>
          <ul className="text-xs text-gray-500 space-y-1 font-gothic">
            {game.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
            {game.features.length > 2 && (
              <li className="text-blue-400 font-gothic">+{game.features.length - 2} más...</li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {hasExternalLinks ? (
            <Link href={`/${game.id}`} className="flex-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-bold transition-colors duration-300 flex items-center justify-center gap-2 font-gothic"
              >
                <FaExternalLinkAlt className="text-sm" />
                VER DETALLES
              </motion.button>
            </Link>
          ) : (
            <button
              className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded font-bold font-gothic cursor-not-allowed opacity-70"
              disabled
            >
              PRÓXIMAMENTE
            </button>
          )}
          {game.steamUrl && (
            <motion.a
              href={game.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#171a21] hover:bg-[#1b2838] text-white py-2 px-3 rounded font-bold transition-colors duration-300 flex items-center justify-center"
            >
              <FaSteam className="text-sm" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard; 