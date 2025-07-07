'use client';

import { motion } from 'framer-motion';

export default function GameplaySection() {
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
            Descend into the Dark
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora un mundo donde la cordura se desvanece y cada decisión tiene consecuencias impredecibles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Descripción */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Brave the Depths of a Forgotten Mind
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              En las profundidades de una mente fracturada, encontrarás un reino olvidado donde 
              la realidad se desmorona. Muchos han sido atraídos hacia las sombras, buscando 
              respuestas, redención o simplemente una forma de escapar.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Como el protagonista de esta pesadilla, deberás navegar por las profundidades, 
              desentrañar sus misterios y enfrentar los horrores que acechan en cada esquina.
            </p>
          </motion.div>

          {/* Columna derecha - Características */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-3">
                Explora Mundos Interconectados
              </h4>
              <p className="text-gray-300">
                Navega por laberintos mentales donde cada habitación revela nuevos horrores 
                y secretos ocultos en las sombras.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-3">
                Enfrenta Tus Miedos
              </h4>
              <p className="text-gray-300">
                Encuentra una colección perturbadora de criaturas y entidades que representan 
                los peores temores de la mente humana.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-3">
                Evoluciona con Nuevas Habilidades
              </h4>
              <p className="text-gray-300">
                Descubre poderes psíquicos y habilidades que te permitirán sobrevivir en 
                este mundo de pesadilla.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sección adicional de gameplay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Use Your Skills and Reflexes to Survive
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Wata es una experiencia desafiante de terror psicológico en 2D. Explorarás cavernas 
            retorcidas, lucharás contra criaturas corrompidas y escaparás de trampas intrincadas, 
            todo para resolver un misterio ancestral que ha permanecido oculto durante siglos.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 