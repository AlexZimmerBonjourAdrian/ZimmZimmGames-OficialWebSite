'use client';

import styles from './PlatformsSection.module.css';

export default function PlatformsSection() {
  return (
    <section className={styles.platformsSection}>
      <h2 className={styles.title}>Download Prototype</h2>
      <div className={styles.grid}>
        <a
          href="#" // TODO: Replace with actual PC download link
          className={styles.platformButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-05/128/Steam-icon.png" alt="PC Logo" className={styles.logo} />
          <span className={styles.name}>PC</span>
          <span className={styles.download}>Download</span>
        </a>
        <button
          className={styles.platformButton + ' ' + styles.disabled}
          disabled
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android Logo" className={styles.logo} />
          <span className={styles.name}>Android</span>
          <span className={styles.comingSoon}>Coming Soon</span>
        </button>
      </div>
    </section>
  );
} 