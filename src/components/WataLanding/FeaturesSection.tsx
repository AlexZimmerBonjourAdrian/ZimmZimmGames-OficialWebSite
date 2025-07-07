'use client';

import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Hidden Dreams',
      subtitle: 'Mighty new foes emerge!',
      description: 'Nuevos jefes aterradores. Nuevas mejoras. Nueva música.',
      color: 'from-red-600 to-red-800'
    },
    {
      title: 'The Shadow Troupe',
      subtitle: 'Light the Nightmare Lantern.',
      description: 'Summon the Troupe. Nueva misión principal. Nuevos jefes. Nuevos encantos. Nuevos enemigos. Nuevos amigos.',
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Blood Corruption',
      subtitle: 'A Mind Upgraded!',
      description: 'Nuevo jefe. Jefes mejorados. Ajustes y refinamientos en todo el juego.',
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Mind Master',
      subtitle: 'Take your place amongst the Gods.',
      description: 'Nuevos personajes y misiones. Nuevas batallas de jefes. ¡Nueva música épica!',
      color: 'from-indigo-600 to-indigo-800'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wata Expands with 4 Giant Free Content Packs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cuatro expansiones masivas que profundizan en el terror psicológico 
            y expanden el mundo de Wata con nuevos horrores y misterios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className={`bg-gradient-to-br ${feature.color} p-8 h-full relative overflow-hidden`}>
                {/* Efecto de fondo */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Contenido */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-200 mb-4">
                    {feature.subtitle}
                  </h4>
                  <p className="text-gray-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Efecto de hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de características adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Gameplay Inmersivo
              </h3>
              <p className="text-gray-300">
                Mecánicas únicas que te harán cuestionar la realidad y tu propia cordura.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Arte Único
              </h3>
              <p className="text-gray-300">
                Diseño visual que combina lo hermoso con lo aterrador de manera única.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Banda Sonora
              </h3>
              <p className="text-gray-300">
                Música atmosférica que te transportará a un mundo de pesadilla.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-600/20 to-purple-600/20 p-8 rounded-lg border border-red-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Estás listo para enfrentar tus miedos?
            </h3>
            <p className="text-gray-300 mb-6">
              Descarga Wata ahora y comienza tu viaje hacia las profundidades de la mente.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105">
              DESCARGAR GRATIS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 