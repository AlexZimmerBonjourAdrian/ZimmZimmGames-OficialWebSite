'use client';

import styles from './TrailerSection.module.css';

export default function TrailerSection() {
  return (
    <section id="trailer" className={styles.trailerSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tráiler Oficial</h2>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/s3ny03wibmQ"
            title="Tráiler WATA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
} 