'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ScreenshotsSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const screenshots = [
    {
      id: 1,
      title: 'Las Profundidades',
      description: 'Explora cavernas oscuras donde la realidad se desvanece',
      image: '/images/Wata/screenshot1.jpg' // Placeholder - usar imágenes reales
    },
    {
      id: 2,
      title: 'Criaturas de la Sombra',
      description: 'Enfrenta horrores que acechan en las sombras',
      image: '/images/Wata/screenshot2.jpg'
    },
    {
      id: 3,
      title: 'El Laberinto Mental',
      description: 'Navega por pasillos que desafían la lógica',
      image: '/images/Wata/screenshot3.jpg'
    },
    {
      id: 4,
      title: 'La Corrupción',
      description: 'Descubre los efectos de la corrupción mental',
      image: '/images/Wata/screenshot4.jpg'
    },
    {
      id: 5,
      title: 'El Final',
      description: 'El desenlace de tu viaje psicológico',
      image: '/images/Wata/screenshot5.jpg'
    },
    {
      id: 6,
      title: 'Los Secretos',
      description: 'Revela los misterios ocultos',
      image: '/images/Wata/screenshot6.jpg'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Haunting, Orchestral Score
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compuesta y producida para crear una atmósfera de terror psicológico, 
            la banda sonora de Wata te acompañará en tu viaje hacia las profundidades.
          </p>
        </motion.div>

        {/* Galería de capturas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(screenshot.id)}
            >
              {/* Placeholder para imagen */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay de información */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {screenshot.description}
                  </p>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal para imagen seleccionada */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                {/* Aquí iría la imagen real */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  Vista previa de {screenshots.find(s => s.id === selectedImage)?.title}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Sección de música */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Banda Sonora Oficial
            </h3>
            <p className="text-gray-300 mb-6">
              La música de Wata está tejida a lo largo del juego, haciendo eco de la 
              tristeza de una mente majestuosa llevada a la ruina.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Comprar Banda Sonora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 