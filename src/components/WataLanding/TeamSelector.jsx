import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TeamSelector.module.css';

const teamMessages = {
  none: '¿De qué lado estás en esta aventura? Elige tu equipo:',
  liebre: '¡Bienvenido al Team Liebre! Rápido, curioso y siempre un paso adelante. 🐇',
  conejo: '¡Bienvenido al Team Conejo! Astuto, misterioso y con planes villanescos... 🐰'
};

export default function TeamSelector() {
  const [team, setTeam] = useState('none');

  return (
    <section className={styles.teamSelectorSection}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        ¿Eres Team Liebre o Team Conejo?
      </motion.h2>
      <motion.p 
        className={styles.message}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {teamMessages[team]}
      </motion.p>
      <div className={styles.buttonGroup}>
        <motion.button
          className={`${styles.teamButton} ${team === 'liebre' ? styles.selected : ''}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTeam('liebre')}
        >
          Team Liebre 🐇
        </motion.button>
        <motion.button
          className={`${styles.teamButton} ${team === 'conejo' ? styles.selected : ''}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTeam('conejo')}
        >
          Team Conejo 🐰
        </motion.button>
      </div>
    </section>
  );
} 