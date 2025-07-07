'use client';

import { motion } from 'framer-motion';

export default function DownloadSection() {
  const platforms = [
    {
      name: 'Steam',
      icon: '🎮',
      color: 'from-blue-600 to-blue-800',
      url: '#'
    },
    {
      name: 'itch.io',
      icon: '🎯',
      color: 'from-orange-600 to-orange-800',
      url: '#'
    },
    {
      name: 'Game Jolt',
      icon: '🎲',
      color: 'from-green-600 to-green-800',
      url: '#'
    },
    {
      name: 'Direct Download',
      icon: '⬇️',
      color: 'from-red-600 to-red-800',
      url: '#'
    }
  ];

  const systemRequirements = {
    minimum: {
      os: 'Windows 10',
      processor: 'Intel Core i3-6100',
      memory: '4 GB RAM',
      graphics: 'Intel HD Graphics 520',
      storage: '2 GB available space'
    },
    recommended: {
      os: 'Windows 11',
      processor: 'Intel Core i5-8400',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 1050',
      storage: '2 GB available space'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visit our Friends
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descarga Wata desde tu plataforma favorita y comienza tu viaje hacia el terror psicológico.
          </p>
        </motion.div>

        {/* Plataformas de descarga */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${platform.color} p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {platform.name}
              </h3>
              <p className="text-gray-200 text-sm">
                Descargar desde {platform.name}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Requisitos del sistema */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Requisitos mínimos */}
          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Requisitos Mínimos
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <span className="font-semibold text-white">Sistema Operativo:</span> {systemRequirements.minimum.os}
              </div>
              <div>
                <span className="font-semibold text-white">Procesador:</span> {systemRequirements.minimum.processor}
              </div>
              <div>
                <span className="font-semibold text-white">Memoria:</span> {systemRequirements.minimum.memory}
              </div>
              <div>
                <span className="font-semibold text-white">Gráficos:</span> {systemRequirements.minimum.graphics}
              </div>
              <div>
                <span className="font-semibold text-white">Almacenamiento:</span> {systemRequirements.minimum.storage}
              </div>
            </div>
          </div>

          {/* Requisitos recomendados */}
          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Requisitos Recomendados
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <span className="font-semibold text-white">Sistema Operativo:</span> {systemRequirements.recommended.os}
              </div>
              <div>
                <span className="font-semibold text-white">Procesador:</span> {systemRequirements.recommended.processor}
              </div>
              <div>
                <span className="font-semibold text-white">Memoria:</span> {systemRequirements.recommended.memory}
              </div>
              <div>
                <span className="font-semibold text-white">Gráficos:</span> {systemRequirements.recommended.graphics}
              </div>
              <div>
                <span className="font-semibold text-white">Almacenamiento:</span> {systemRequirements.recommended.storage}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600/20 to-purple-600/20 p-8 rounded-lg border border-red-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¡Descarga Gratuita!
            </h3>
            <p className="text-gray-300 mb-6">
              Wata está disponible completamente gratis. No hay microtransacciones, 
              no hay contenido bloqueado. Solo terror psicológico puro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                DESCARGAR AHORA
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                VER TRAILER
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 