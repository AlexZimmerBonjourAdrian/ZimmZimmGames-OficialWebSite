'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Animaciones para los elementos
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Sección de bienvenida */}
      <section className="text-center space-y-8 relative pt-32">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent -z-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        ></motion.div>
        <motion.h1 
          className="heading-1 text-gradient"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          ZIMMZIMM GAMES
        </motion.h1>
        <motion.p 
          className="body-text max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Donde la oscuridad cobra vida y las pesadillas se vuelven realidad.
          Explora nuestro catálogo de experiencias que te transportarán a mundos donde la cordura se desvanece.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Link href="/games" className="button-primary inline-flex items-center">
            Explorar Juegos
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Sección de juegos destacados */}
      <section className="py-24 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="heading-2 text-center text-gradient">
            Juegos Destacados
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                variants={fadeIn}
                className="card group p-6"
              >
                <div className="aspect-video bg-zinc-800 mb-4 rounded-md overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-zinc-100">Título del Juego</h3>
                <p className="text-sm mb-4 text-zinc-400">Descripción breve del juego y sus características principales.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/games" className="button-secondary inline-flex items-center">
                    Explorar
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sección de merch */}
      <section className="text-center space-y-8 relative py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent -z-10"></div>
          <motion.h2 variants={fadeIn} className="heading-2 text-gradient">
            Merchandising
          </motion.h2>
          <motion.p variants={fadeIn} className="body-text max-w-2xl mx-auto">
            Lleva contigo el horror y la oscuridad de ZimmZimm Games con nuestra colección exclusiva.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
          >
            <Link href="/merch" className="button-primary inline-flex items-center">
              Ver Colección
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 