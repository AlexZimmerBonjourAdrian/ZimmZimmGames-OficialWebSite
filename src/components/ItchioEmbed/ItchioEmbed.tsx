import React from 'react';
import styles from './ItchioEmbed.module.css';
import content from './content.json';

interface ItchioEmbedProps {
  className?: string;
}

const ItchioEmbed: React.FC<ItchioEmbedProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.itchioContainer} ${className}`}>
      {content.enabled ? (
        <>
          <h3 className={styles.ctaText}>{content.ctaText}</h3>
          <div className={styles.itchioFrameWrapper}>
            <div className={styles.iframeContainer}>
              <iframe
                src={content.embedUrl}
                title="Where Are The Alices? - Play Demo"
                className={styles.itchioFrame}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; payment"
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.steamDemoSection}>
            <p className={styles.steamDemoText}>{content.steamDemoText}</p>
            <a
              href={content.steamDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.steamDemoButton}
            >
              Play Demo on Steam
            </a>
          </div>
        </>
      ) : (
        <p className={styles.comingSoonText}>Coming Soon</p>
      )}
    </div>
  );
};

export default ItchioEmbed;
