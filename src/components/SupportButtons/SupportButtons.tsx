'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import styles from './SupportButtons.module.css';
import { FaCoffee, FaPaypal, FaDiscord } from 'react-icons/fa';
import content from './content.json';
import links from './links.json';
import { event, trackEngagement } from '@/lib/analytics';

interface SupportButtonsProps {
  className?: string;
}

const SupportButtons: React.FC<SupportButtonsProps> = ({ className = '' }) => {
  const supportSectionRef = useRef<HTMLDivElement>(null);
  const enterTimeRef = useRef<number | null>(null);
  const hasTrackedViewRef = useRef(false);

  const handleKoFiClick = useCallback(() => {
    event({
      action: 'click_kofi',
      category: 'support',
      label: 'Ko-fi Button',
    });
  }, []);

  const handleDiscordClick = useCallback(() => {
    event({
      action: 'click_discord',
      category: 'social',
      label: 'Discord Button',
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            enterTimeRef.current = Date.now();
            if (!hasTrackedViewRef.current) {
              trackEngagement('view_section', 'support');
              hasTrackedViewRef.current = true;
            }
          } else if (enterTimeRef.current) {
            const timeSpent = Math.floor((Date.now() - enterTimeRef.current) / 1000);
            event({
              action: 'time_spent',
              category: 'engagement',
              label: 'support_section',
              value: timeSpent,
            });
            enterTimeRef.current = null;
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = supportSectionRef.current;
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
          category: 'engagement',
          label: 'support_section',
          value: timeSpent,
        });
      }
    };
  }, []);

  return (
    <div id="support" ref={supportSectionRef} className={`${styles.supportContainer} ${className}`}>
      <h3 className={styles.title}>{content.title}</h3>
      <p className={styles.description}>
        {content.description}
      </p>
      <p className={styles.signature}>{content.signature}</p>
      <blockquote className={styles.quote}>{content.quote}</blockquote>
      <div className={styles.buttonGrid}>
        <a 
          href={links.kofi} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.supportBtn} ${styles.kofi}`} 
          aria-label="Support on Ko-fi"
          onClick={handleKoFiClick}
        >
          <FaCoffee className={styles.icon} />
          <span>{content.buttons.kofi}</span>
        </a>
        
        {/* PayPal desactivado temporalmente por petición del usuario */}
        {/* 
        <button className={`${styles.supportBtn} ${styles.paypal}`} aria-label="Support on PayPal">
          <FaPaypal className={styles.icon} />
          <span>{content.buttons.paypal}</span>
        </button>
        */}

        <a 
          href={links.discord} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.supportBtn} ${styles.discord}`} 
          aria-label="Join Discord"
          onClick={handleDiscordClick}
        >
          <FaDiscord className={styles.icon} />
          <span>{content.buttons.discord}</span>
        </a>
      </div>
    </div>
  );
};

export default SupportButtons;