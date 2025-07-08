'use client';

import styles from './EngineSection.module.css';

export default function EngineSection() {
  return (
    <section className={styles.engineSection}>
      <div className={styles.content}>
        <div className={styles.logoRow}>
          <span className={styles.madeWith}>Made with</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg"
            alt="Unity Logo"
            className={styles.unityLogo}
          />
        </div>
        <p className={styles.description}>
          This game was developed using the Unity engine, a powerful and flexible platform for creating immersive experiences.
        </p>
        <button className={styles.detailsBtn} disabled>DETAILS</button>
      </div>
    </section>
  );
} 