'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>ZimmZimm Games</h3>
          <p>An independent game development studio focused on creating unique psychological horror experiences.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>WATA</h3>
          <p>A psychological horror game where reality and nightmare blur together in Alice&apos;s twisted journey.</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} ZimmZimm Games. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 