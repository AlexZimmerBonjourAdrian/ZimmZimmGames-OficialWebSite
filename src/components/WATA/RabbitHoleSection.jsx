'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './RabbitHoleSection.module.css';

const RabbitHoleSection = () => {
  return (
    <div className={styles.rabbitHoleSection}>
      <motion.div
        className={styles.rabbitHoleContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Enter the Rabbit Hole</h2>
        <p>
          Join our community and dive deeper into the world of Where are the Alices?
        </p>
        <div className={styles.socialLinks}>
          <motion.a
            href="https://discord.gg/zimmzimmgames"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-discord"></i>
            Discord
          </motion.a>
          <motion.a
            href="https://twitter.com/zimmzimmgames"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-twitter"></i>
            Twitter
          </motion.a>
          <motion.a
            href="https://www.instagram.com/zimmzimmgames"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-instagram"></i>
            Instagram
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default RabbitHoleSection; 