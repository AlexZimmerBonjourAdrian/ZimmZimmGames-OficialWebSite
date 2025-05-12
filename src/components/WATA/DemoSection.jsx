'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './DemoSection.module.css';

const DemoSection = () => {
  return (
    <div className={styles.demoSection}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Try the Demo
      </motion.h2>
      <div className={styles.demoContent}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the first chapter of Where are the Alices?
        </motion.p>
        <motion.button
          className={styles.demoBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Download Demo
        </motion.button>
      </div>
    </div>
  );
};

export default DemoSection; 