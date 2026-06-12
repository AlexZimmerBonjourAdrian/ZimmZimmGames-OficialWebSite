'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import styles from './ItchioEmbed.module.css';
import content from './content.json';
import { event, trackEngagement } from '@/lib/analytics';

interface ItchioEmbedProps {
  className?: string;
}

const ItchioEmbed: React.FC<ItchioEmbedProps> = ({ className = '' }) => {
  const gameSectionRef = useRef<HTMLDivElement>(null);
  const enterTimeRef = useRef<number | null>(null);
  const hasTrackedViewRef = useRef(false);

  const handleSteamDemoClick = useCallback(() => {
    event({
      action: 'click_play_steam_demo',
      category: 'game',
      label: 'Play Steam Demo Button',
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            enterTimeRef.current = Date.now();
            if (!hasTrackedViewRef.current) {
              trackEngagement('view_section', 'web_demo');
              hasTrackedViewRef.current = true;
            }
          } else if (enterTimeRef.current) {
            const timeSpent = Math.floor((Date.now() - enterTimeRef.current) / 1000);
            event({
              action: 'time_spent',
              category: 'game',
              label: 'web_demo_section',
              value: timeSpent,
            });
            enterTimeRef.current = null;
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = gameSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (enterTimeRef.current) {
        const timeSpent = Math.floor((Date.now() - enterTimeRef.current) / 1000);
        event({
          action: 'time_spent',
          category: 'game',
          label: 'web_demo_section',
          value: timeSpent,
        });
      }
    };
  }, []);

  return (
    <div ref={gameSectionRef} className={`${styles.itchioContainer} ${className}`}>
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
              onClick={handleSteamDemoClick}
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
