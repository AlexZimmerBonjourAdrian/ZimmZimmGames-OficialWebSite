'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: '¿Cuándo se lanzará "Where Are The Alices"?',
    answer: 'Estamos trabajando arduamente en el desarrollo de "Where Are The Alices". La fecha exacta de lanzamiento será anunciada en nuestras redes sociales y en el diario de desarrollo.'
  },
  {
    question: '¿En qué plataformas estarán disponibles los juegos?',
    answer: 'Nuestros juegos estarán disponibles inicialmente en Steam para PC. Estamos considerando otras plataformas para el futuro.'
  },
  {
    question: '¿Cómo puedo reportar un bug?',
    answer: 'Puedes reportar bugs a través de nuestra página de soporte o directamente en nuestro servidor de Discord. Agradecemos todos los reportes que nos ayuden a mejorar nuestros juegos.'
  },
  {
    question: '¿Ofrecen versiones de prueba de sus juegos?',
    answer: 'Ocasionalmente lanzamos demos y betas cerradas. Sigue nuestro diario de desarrollo y redes sociales para estar al tanto de estas oportunidades.'
  },
  {
    question: '¿Cómo puedo participar en las betas?',
    answer: 'Las betas son anunciadas en nuestro diario de desarrollo y redes sociales. Los miembros de nuestra comunidad en Discord suelen tener acceso prioritario.'
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-gray-800 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-gray-900 text-left"
      >
        <span className="text-lg font-bold font-gothic">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-blue-400" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/50"
          >
            <p className="p-6 text-gray-300 font-gothic">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center font-gothic tracking-wider"
        >
          PREGUNTAS FRECUENTES
        </motion.h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage; 