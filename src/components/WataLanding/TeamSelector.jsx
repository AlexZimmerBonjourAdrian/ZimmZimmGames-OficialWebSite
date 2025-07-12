import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TeamSelector.module.css';

const teamMessages = {
  none: '¿De qué lado estás en esta aventura? Elige tu equipo:',
  juno: '¡Bienvenido al Team Juno! Detective, valiente y siempre buscando la verdad. 🔍',
  cb: '¡Bienvenido al Team CB! Misterioso, astuto y con planes que van más allá de la realidad... 🐰'
};

const teams = [
  {
    id: 'juno',
    name: 'Team Juno',
    alias: 'The Detective',
    profileImage: '/Characters/Profile/Juno.png',
    description: 'Detective valiente que busca la verdad',
    emoji: '🔍',
    color: '#4CAF50'
  },
  {
    id: 'cb',
    name: 'Team CB',
    alias: 'The White Rabbit',
    profileImage: '/Characters/Profile/CB.png',
    description: 'Misterioso conejo blanco con planes ocultos',
    emoji: '🐰',
    color: '#FF9800'
  }
];

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
        ¿Eres Team Juno o Team CB?
      </motion.h2>
      <motion.p 
        className={styles.message}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {teamMessages[team]}
      </motion.p>
      
      <div className={styles.teamsContainer}>
        {teams.map((teamData) => (
          <motion.div
            key={teamData.id}
            className={`${styles.teamCard} ${team === teamData.id ? styles.selected : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTeam(teamData.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: teamData.id === 'juno' ? 0.3 : 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.profileImageContainer}>
              <img 
                src={teamData.profileImage} 
                alt={teamData.name}
                className={styles.profileImage}
                loading="lazy"
              />
              <div className={styles.teamEmoji}>{teamData.emoji}</div>
            </div>
            <div className={styles.teamInfo}>
              <h3 className={styles.teamName}>{teamData.name}</h3>
              <p className={styles.teamAlias}>{teamData.alias}</p>
              <p className={styles.teamDescription}>{teamData.description}</p>
            </div>
            {team === teamData.id && (
              <motion.div 
                className={styles.selectedIndicator}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 