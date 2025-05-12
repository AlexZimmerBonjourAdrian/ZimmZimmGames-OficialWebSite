'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SupportSection.module.css';

const SupportSection = () => {
  const supportOptions = [
    {
      icon: 'fab fa-paypal',
      title: 'PayPal',
      description: 'One-time contribution to development',
      link: 'https://www.paypal.com/ncp/payment/RZGJ66JYMZD5A',
      buttonText: 'Donate with PayPal'
    },
    {
      icon: 'fab fa-patreon',
      title: 'Patreon',
      description: 'Exclusive access to development and special content',
      link: 'https://www.patreon.com/zimmzimmgames',
      buttonText: 'Join on Patreon'
    },
    {
      icon: 'fas fa-coffee',
      title: 'Ko-fi',
      description: 'Buy us a coffee to keep the nightmares alive',
      link: 'https://ko-fi.com/zimmzimmgames',
      buttonText: 'Buy a Ko-fi'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Indiegogo',
      description: 'Crowdfunding campaign coming soon',
      disabled: true,
      buttonText: 'Pre-order'
    }
  ];

  return (
    <div className={styles.supportSection}>
      <h2>Support Development</h2>
      <p className={styles.subtitle}>Help us bring more nightmares to reality</p>

      <div className={styles.supportGrid}>
        {supportOptions.map((option, index) => (
          <motion.div
            key={option.title}
            className={`${styles.supportCard} ${option.disabled ? styles.disabled : ''}`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <i className={option.icon}></i>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            {option.disabled ? (
              <>
                <div className={styles.comingSoon}>Coming Soon</div>
                <button className={styles.supportBtn} disabled>
                  <span className={styles.btnText}>{option.buttonText}</span>
                  <span className={styles.btnGlitch}></span>
                </button>
              </>
            ) : (
              <a 
                href={option.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.supportBtn}
              >
                <span className={styles.btnText}>{option.buttonText}</span>
                <span className={styles.btnGlitch}></span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection; 