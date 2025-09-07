'use client';

import { motion } from 'framer-motion';
import styles from './DemoSection.module.css';

const DemoSection = () => {
  return (
    <section id="demo" className={styles.demoSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Prototype Chapter 0 - Follow the White Rabbit June</h2>
          <p className={styles.subtitle}>
            Experience the beginning of Alice's journey into madness
          </p>
        </motion.div>

        {/* Download Button Only */}
        <div className={styles.simpleDownloadWrapper}>
          <motion.button
            className={styles.downloadButton}
            disabled
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.downloadIcon}></span>
            Coming Soon for Windows
          </motion.button>
          
          {/* Newsletter Signup */}
          <motion.div 
            className={styles.newsletterSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>¡Sé el primero en saber cuando esté disponible!</h3>
            <p>Recibe notificaciones sobre el lanzamiento del demo y actualizaciones exclusivas</p>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Tu email aquí..." 
                className={styles.emailInput}
              />
              <motion.button
                className={styles.notifyButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notificarme
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 