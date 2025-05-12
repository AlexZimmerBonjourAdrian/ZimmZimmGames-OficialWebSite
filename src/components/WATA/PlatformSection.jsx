'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './PlatformSection.module.css';

const PlatformSection = ({ title, platforms, disabled = false, hasDemo = false }) => {
  return (
    <motion.div 
      className={`${styles.platformSection} ${disabled ? styles.disabled : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      {disabled && <div className={styles.comingSoon}>Coming Soon</div>}
      <div className={styles.platformButtons}>
        {platforms.map((platform, index) => (
          <motion.button
            key={platform}
            className={styles.platformBtn}
            disabled={disabled}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {platform}
          </motion.button>
        ))}
      </div>
      {hasDemo && disabled && (
        <div className={styles.demoAvailable}>
          <span>Demo coming soon</span>
        </div>
      )}
    </motion.div>
  );
};

export default PlatformSection; 