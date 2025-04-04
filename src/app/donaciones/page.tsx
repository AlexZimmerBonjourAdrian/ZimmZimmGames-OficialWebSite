'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPaypal, FaPatreon, FaHeart } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';
import Footer from '@/components/Footer';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center font-gothic tracking-wider"
        >
          PATROCÍNANOS
        </motion.h1>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 p-8 rounded-lg border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 font-gothic flex items-center gap-2">
              <FaHeart className="text-red-500" />
              Apoya Nuestro Trabajo
            </h2>
            <p className="text-gray-300 mb-6 font-gothic">
              Tu apoyo nos ayuda a seguir creando juegos únicos y experiencias memorables.
              Cada donación contribuye directamente al desarrollo de nuestros proyectos y
              nos permite mantener nuestra independencia creativa.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* PayPal */}
            <a
              href="https://paypal.me/zimmzimmgames"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#00457C] transition-colors group"
            >
              <FaPaypal className="w-12 h-12 mb-4 text-[#00457C]" />
              <h3 className="text-xl font-bold mb-3 font-gothic group-hover:text-[#00457C]">PayPal</h3>
              <p className="text-gray-300 font-gothic">
                Realiza una donación única o recurrente a través de PayPal.
              </p>
            </a>

            {/* Ko-fi */}
            <a
              href="https://ko-fi.com/zimmzimmgames"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FF5E5B] transition-colors group"
            >
              <SiKofi className="w-12 h-12 mb-4 text-[#FF5E5B]" />
              <h3 className="text-xl font-bold mb-3 font-gothic group-hover:text-[#FF5E5B]">Ko-fi</h3>
              <p className="text-gray-300 font-gothic">
                Invítanos a un café y apoya nuestro desarrollo.
              </p>
            </a>

            {/* Patreon */}
            <a
              href="https://www.patreon.com/zimmzimmgames"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FF424D] transition-colors group"
            >
              <FaPatreon className="w-12 h-12 mb-4 text-[#FF424D]" />
              <h3 className="text-xl font-bold mb-3 font-gothic group-hover:text-[#FF424D]">Patreon</h3>
              <p className="text-gray-300 font-gothic">
                Conviértete en patrocinador y obtén recompensas exclusivas.
              </p>
            </a>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 p-8 rounded-lg border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 font-gothic">Beneficios de Patrocinio</h2>
            <ul className="space-y-4 text-gray-300 font-gothic list-disc pl-6">
              <li>Acceso anticipado a nuestros juegos</li>
              <li>Contenido exclusivo y behind-the-scenes</li>
              <li>Tu nombre en los créditos de nuestros juegos</li>
              <li>Participación en decisiones de desarrollo</li>
              <li>Discord exclusivo para patrocinadores</li>
            </ul>
          </motion.section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage; 