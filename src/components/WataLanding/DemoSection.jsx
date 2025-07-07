'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DemoSection.module.css';

const DemoSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const demoInfo = {
    title: 'WATA - Prototype',
    version: 'v0.1.0',
    size: '156 MB',
    platform: 'Windows',
    description: 'Experience the first moments of Alice\'s psychological journey. This prototype introduces you to the world of Wata and its mysteries.',
    features: [
      'First hour of gameplay',
      'Complete menu system',
      'Atmospheric visual effects'
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
          <h2 className={styles.title}>Download Demo</h2>
          <p className={styles.subtitle}>
            Experience the beginning of Alice's journey into madness
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
                <span className={styles.version}>v0.1.0</span>
              </div>
            </div>

            {/* Log line */}
            <div className={styles.logline}>
              <p>A psychological horror adventure where reality and nightmare blur together</p>
            </div>

            <div className={styles.demoDescription}>
              <p>{demoInfo.description}</p>
            </div>

            {/* System Requirements */}
            <div className={styles.requirements}>
              <h4>System Requirements</h4>
              <ul>
                <li>OS: Windows 10 64-bit</li>
                <li>Processor: Intel Core i3-6100 / AMD FX-6300</li>
                <li>Memory: 4 GB RAM</li>
                <li>Graphics: NVIDIA GTX 750 Ti / AMD Radeon R7 260X</li>
                <li>Storage: 2 GB available space</li>
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
                <h3>Download Demo</h3>
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
                <div className={styles.versionLabel}>v0.1.0 (online prototype only)</div>
              </div>

              <div className={styles.downloadNote}>
                <p>⚠️ This is a prototype version. The final game may have different features and requirements.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 