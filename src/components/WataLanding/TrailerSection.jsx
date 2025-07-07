'use client';

import styles from './TrailerSection.module.css';

export default function TrailerSection() {
  return (
    <section id="trailer" className={styles.trailerSection}>
      {/* Header with decorative elements */}
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.title}>Tráiler Oficial</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/s3ny03wibmQ"
              title="Tráiler WATA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
            ></iframe>
          </div>
        </div>
        
        {/* Footer decorative element */}
        <div className={styles.footerDecoration}>
          <div className={styles.decorativeDot}></div>
          <div className={styles.decorativeDot}></div>
          <div className={styles.decorativeDot}></div>
        </div>
      </div>
    </section>
  );
} 