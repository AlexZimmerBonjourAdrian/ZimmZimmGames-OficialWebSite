'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaUsers, FaLightbulb } from 'react-icons/fa';
import Footer from '@/components/Footer';

const AboutPageClient = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center font-gothic tracking-wider"
        >
          SOBRE NOSOTROS
        </motion.h1>

        <div className="space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 p-8 rounded-lg border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 font-gothic">Nuestra Historia</h2>
            <p className="text-gray-300 mb-6 font-gothic">
              ZimmZimm Games nació de la pasión por crear experiencias únicas y memorables en el mundo de los videojuegos.
              Fundado por un equipo de desarrolladores independientes, nuestro estudio se especializa en crear juegos que
              desafían las convenciones y exploran nuevas formas de contar historias.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <FaGamepad className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3 font-gothic">Innovación</h3>
              <p className="text-gray-300 font-gothic">
                Buscamos constantemente nuevas formas de innovar en el diseño y la narrativa de nuestros juegos.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3 font-gothic">Comunidad</h3>
              <p className="text-gray-300 font-gothic">
                Valoramos la retroalimentación de nuestra comunidad y la incorporamos en nuestro proceso creativo.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <FaLightbulb className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3 font-gothic">Creatividad</h3>
              <p className="text-gray-300 font-gothic">
                Cada proyecto es una oportunidad para explorar nuevas ideas y crear experiencias únicas.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 p-8 rounded-lg border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 font-gothic">Nuestro Equipo</h2>
            <p className="text-gray-300 mb-6 font-gothic">
              Somos un equipo diverso de desarrolladores, artistas y diseñadores apasionados por crear experiencias
              memorables. Cada miembro aporta una perspectiva única y habilidades especializadas que nos permiten
              crear juegos excepcionales.
            </p>
          </motion.section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPageClient;

