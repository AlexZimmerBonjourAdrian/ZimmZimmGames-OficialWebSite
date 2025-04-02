'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "#fff",
      transition: { duration: 0.2 }
    }
  };

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-transparent"></div>
      <nav className="container mx-auto px-4 py-6 relative">
        <div className="flex justify-between items-center">
          <Link href="/" className="group relative">
            <motion.span 
              className="text-2xl font-bold tracking-tight text-gradient"
              whileHover={{ scale: 1.02 }}
            >
              ZIMMZIMM GAMES
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <div className="hidden md:flex space-x-12">
            {['Juegos', 'Merch', 'About'].map((item) => (
              <motion.div key={item} whileHover="hover">
                <Link href={`/${item.toLowerCase()}`} className="text-zinc-400 hover:text-zinc-100 uppercase tracking-wider text-sm font-medium">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button 
            className="md:hidden text-zinc-400 hover:text-zinc-100"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        <motion.div 
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={menuVariants}
          className="md:hidden mt-4 rounded-xl overflow-hidden glass-effect"
        >
          <div className="p-4 space-y-4">
            {['Juegos', 'Merch', 'About'].map((item) => (
              <motion.div key={item} whileHover="hover">
                <Link href={`/${item.toLowerCase()}`} className="block text-zinc-400 hover:text-zinc-100 uppercase tracking-wider text-sm font-medium">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
}; 