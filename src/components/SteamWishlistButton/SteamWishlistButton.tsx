'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import styles from './SteamWishlistButton.module.css';
import { event } from '@/lib/analytics';
import links from '../SupportButtons/links.json';

interface SteamWishlistButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  enabled?: boolean;
}

const SteamWishlistButton: React.FC<SteamWishlistButtonProps> = ({ 
  className = '', 
  size = 'medium',
  enabled = false
}) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  };

  const handleWishlistClick = useCallback(() => {
    event({
      action: 'click_steam_wishlist',
      category: 'game',
      label: 'Steam Wishlist Button',
    });
  }, []);

  return (
    <div className={`${styles.steamButtonWrapper} ${className}`}>
      {enabled ? (
        <a
          href={links.steam}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.steamButton} ${sizeClasses[size]} ${styles.enabled}`}
          aria-label="Add to Steam Wishlist"
          onClick={handleWishlistClick}
        >
          <div className={styles.content}>
            <div className={styles.logoContainer}>
              <Image
                src="/Icon/steam-svgrepo-com.svg"
                alt="Steam Logo"
                width={32}
                height={32}
                className={styles.logo}
              />
            </div>
            <div className={styles.textContainer}>
              <span className={styles.textLine1}>Wishlist on</span>
              <span className={styles.textLine2}>STEAM™</span>
            </div>
          </div>
        </a>
      ) : (
        <button
          disabled={true}
          className={`${styles.steamButton} ${sizeClasses[size]} ${styles.disabled}`}
          aria-label="Add to Steam Wishlist - Coming Soon"
        >
          <div className={styles.content}>
            <div className={styles.logoContainer}>
              <Image
                src="/Icon/steam-svgrepo-com.svg"
                alt="Steam Logo"
                width={32}
                height={32}
                className={styles.logo}
              />
            </div>
            <div className={styles.textContainer}>
              <span className={styles.textLine1}>Wishlist on</span>
              <span className={styles.textLine2}>STEAM™</span>
            </div>
          </div>
        </button>
      )}
      {!enabled && (
        <div className={styles.comingSoonText}>
          <span className={styles.comingSoonLabel}>Coming Soon</span>
        </div>
      )}
    </div>
  );
};

export default SteamWishlistButton;
