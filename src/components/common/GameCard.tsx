'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
  isSelected: boolean;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, isSelected, onClick }) => {
  return (
    <Link href={`/${game.id}`}>
      <motion.div
        className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
          isSelected ? 'ring-4 ring-white shadow-xl' : ''
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        <div className="relative w-full aspect-video">
        
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{game.description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default GameCard; 