'use client';

import { motion } from 'framer-motion';
import styles from './LaunchInfoSection.module.css';

const LaunchInfoSection = () => {
  return (
    <section className={styles.launchInfoSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Información de Lanzamiento</h2>
          <p className={styles.subtitle}>
            Todo lo que necesitas saber sobre W.A.T.A
          </p>
        </motion.div>

        <div className={styles.infoGrid}>
          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>📅</div>
            <h3>Fecha de Lanzamiento</h3>
            <p>Q4 2024 - Q1 2025</p>
            <span className={styles.note}>Fecha exacta por confirmar</span>
          </motion.div>

          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>🎮</div>
            <h3>Plataformas</h3>
            <ul>
              <li>Windows (Steam, itch.io)</li>
              <li>GameJolt</li>
              <li>Android (TBA)</li>
            </ul>
          </motion.div>

          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>💰</div>
            <h3>Precio</h3>
            <p className={styles.price}>Gratis</p>
            <span className={styles.note}>Con opciones de donación</span>
          </motion.div>

          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>⚙️</div>
            <h3>Requisitos Mínimos</h3>
            <ul>
              <li>Windows 10 (64-bit)</li>
              <li>4 GB RAM</li>
              <li>DirectX 11</li>
              <li>1 GB espacio libre</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>¿Quieres ser el primero en jugar?</h3>
          <p>Únete a nuestro Patreon para acceso anticipado y contenido exclusivo</p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://patreon.com/zimmzimmgames', '_blank')}
          >
            Apoyar en Patreon
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchInfoSection; 