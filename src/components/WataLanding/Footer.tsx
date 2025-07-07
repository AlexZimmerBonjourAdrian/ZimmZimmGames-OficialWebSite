'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>ZimmZimm Games</h3>
          <p>Creating unique gaming experiences</p>
        </div>
        <div className={styles.footerSection}>
          <h3>WATA</h3>
          <p>Un viaje misterioso te espera</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} ZimmZimm Games. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 