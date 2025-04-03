'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
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
            <motion.a
              href="https://discord.gg/zimmzimm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
            >
              <FaDiscord className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com/zimmzimmgames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://youtube.com/@zimmzimmgames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
            >
              <FaYoutube className="text-2xl" />
            </motion.a>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-gray-400 font-gothic tracking-widest"
          >
            &copy; 2025 ZIMMZIMM GAMES. TODOS LOS DERECHOS RESERVADOS.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 