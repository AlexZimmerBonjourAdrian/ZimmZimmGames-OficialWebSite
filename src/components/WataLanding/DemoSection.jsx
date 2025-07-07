'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DemoSection.module.css';

const DemoSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const demoInfo = {
    title: 'WATA - Prototipo',
    version: 'v0.1.0',
    size: '156 MB',
    platform: 'Windows',
    description: 'Experimenta los primeros momentos del viaje psicológico de Alice. Este prototipo te introduce al mundo de Wata y sus misterios.',
    features: [
      'Primera hora de gameplay',
      'Sistema de menús completo',
      'Efectos visuales atmosféricos'
    ],
    requirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i3-6100 / AMD FX-6300',
      memory: '4 GB RAM',
      graphics: 'NVIDIA GTX 750 Ti / AMD Radeon R7 260X',
      storage: '2 GB available space'
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // In a real implementation, you would handle the actual download here
    // For now, we'll just simulate the download process
  };

  const handleDownloadClick = () => {
    if (!isDownloading) {
      handleDownload();
    }
  };

  return (
    <section className={styles.demoSection}>
      <div className={styles.container}>


        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                      <h2 className={styles.title}>Prototipo Disponible</h2>
            <p className={styles.subtitle}>
              Descarga y experimenta el primer capítulo de Wata
            </p>
        </motion.div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Demo Info Card */}
          <motion.div 
            className={styles.demoCard}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.demoHeader}>
              <div className={styles.demoTitle}>
                <h3>{demoInfo.title}</h3>
                <span className={styles.version}>{demoInfo.version}</span>
              </div>
            </div>

            {/* Log line */}
            <div className={styles.logline}>
              <p>Un viaje psicológico donde la realidad se desvanece.</p>
            </div>

            <div className={styles.demoDescription}>
              <p>{demoInfo.description}</p>
            </div>

            {/* System Requirements */}
            <div className={styles.requirements}>
              <h4>Requisitos Técnicos</h4>
              <ul>
                <li>Puede ser ejecutada en computadoras con requerimientos mínimos.</li>
                <li>Disponible para Android versión 4 o superior.</li>
              </ul>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div 
            className={styles.downloadSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.downloadCard}>
              <div className={styles.downloadHeader}>
                <h3>Descargar Prototipo</h3>
              </div>

              <div className={styles.downloadButtonsGroup}>
                <motion.button
                  className={styles.downloadButton}
                  onClick={() => window.open('#', '_blank')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.downloadIcon}>⬇</span>
                  Windows
                </motion.button>
                <div className={styles.versionLabel}>v0.1.0</div>

                <motion.button
                  className={styles.downloadButton}
                  onClick={() => window.open('#', '_blank')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.downloadIcon}>⬇</span>
                  APK
                </motion.button>
                <div className={styles.versionLabel}>v0.1.0</div>

                <motion.button
                  className={styles.downloadButton}
                  onClick={() => window.open('#', '_blank')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.downloadIcon}>🌐</span>
                  Web
                </motion.button>
                <div className={styles.versionLabel}>v0.1.0 (solo prototipo online)</div>
              </div>

              <div className={styles.downloadNote}>
                <p>⚠️ Este es un prototipo de desarrollo. Puede contener bugs y características incompletas.</p>
              </div>
            </div>


          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default DemoSection; 