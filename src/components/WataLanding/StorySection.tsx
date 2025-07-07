'use client';

import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Evocative Hand-Drawn Horror
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            El mundo de Wata cobra vida en detalles vívidos y sombríos, donde cada sombra 
            esconde un nuevo terror esperando ser descubierto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Historia */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              The World of Wata
            </h3>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Cada nueva área que descubrirás es bellamente única y extraña, repleta de 
                nuevas criaturas y personajes perturbadores por descubrir. El mundo de Wata 
                es uno que vale la pena explorar solo para contemplar las vistas y descubrir 
                nuevas maravillas ocultas fuera del camino trillado.
              </p>
              
              <p className="text-lg leading-relaxed">
                Las cavernas cobran vida con criaturas bizarras y aterradoras, cada una 
                animada a mano en un estilo 2D tradicional que evoca los peores temores 
                de la mente humana.
              </p>
              
              <p className="text-lg leading-relaxed">
                A medida que profundices en las sombras, descubrirás que la línea entre 
                la realidad y la pesadilla se desvanece, y que los horrores que enfrentas 
                son solo el reflejo de tus propios miedos más profundos.
              </p>
            </div>
          </motion.div>

          {/* Columna derecha - Características visuales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Arte Tradicional 2D
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Cada frame, cada animación, cada detalle ha sido creado a mano con amor 
                y dedicación, creando una experiencia visual única que transporta al 
                jugador a un mundo de pesadilla.
              </p>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Diseño Atmosférico
              </h4>
              <p className="text-gray-300 leading-relaxed">
                La iluminación, las sombras y los efectos visuales trabajan en conjunto 
                para crear una atmósfera de terror psicológico que se adentra en la 
                mente del jugador.
              </p>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Criaturas Únicas
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Cada enemigo y criatura ha sido diseñado para representar diferentes 
                aspectos del terror psicológico, desde el miedo a lo desconocido hasta 
                el horror de la corrupción mental.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cita inspiradora */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed">
            &ldquo;En las profundidades de la mente, donde la cordura se desvanece, 
            encontrarás la verdadera naturaleza del terror.&rdquo;
          </blockquote>
          <p className="text-lg text-gray-400 mt-4">- Wata</p>
        </motion.div>
      </div>
    </section>
  );
} 