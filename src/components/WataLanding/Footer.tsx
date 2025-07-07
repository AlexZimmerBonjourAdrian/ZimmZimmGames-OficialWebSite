'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Discord', url: '#', icon: '🎮' },
    { name: 'YouTube', url: '#', icon: '📺' },
    { name: 'GitHub', url: '#', icon: '💻' }
  ];

  const teamMembers = [
    {
      name: 'ZimmZimm',
      role: 'Desarrollador Principal',
      description: 'Responsable del diseño del juego junto con el equipo. Crea el arte, los entornos y anima cientos de criaturas aterradoras.'
    }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Sección principal del footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Información del juego */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Wata</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Un viaje al interior de la mente donde la realidad se desvanece y los 
              límites entre lo que es real y lo que no, se desdibujan por completo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-2xl hover:text-red-500 transition-colors duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">
                  Descargar Juego
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">
                  Ver Trailer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">
                  Banda Sonora
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Información del desarrollador */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Desarrollado por</h3>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                  <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-red-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mb-8"
        />

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Press Kit */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-2">Press Kit</h4>
            <p className="text-gray-300 text-sm mb-4">
              Si te gustaría escribir sobre Wata, tenemos un Press Kit lleno de videos, 
              datos e imágenes.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
            >
              VISITAR PRESS KIT
            </a>
          </div>

          {/* Clasificación */}
          <div className="text-center md:text-right">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50 inline-block">
              <p className="text-sm text-gray-300 mb-2">Wata es</p>
              <div className="text-2xl font-bold text-white">M</div>
              <p className="text-xs text-gray-400">Terror Psicológico</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400 text-sm">
            Wata es © Copyright 2025 ZimmZimmGames. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desarrollado con amor y terror en las profundidades de la mente.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 