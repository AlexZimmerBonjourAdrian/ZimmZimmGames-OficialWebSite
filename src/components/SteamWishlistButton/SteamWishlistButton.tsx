import React from 'react';
import Image from 'next/image';
import styles from './SteamWishlistButton.module.css';

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

  return (
    <div className={`${styles.steamButtonWrapper} ${className}`}>
      <button
        disabled={!enabled}
        className={`${styles.steamButton} ${sizeClasses[size]} ${enabled ? styles.enabled : styles.disabled}`}
        aria-label={enabled ? "Add to Steam Wishlist" : "Add to Steam Wishlist - Coming Soon"}
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
      {!enabled && (
        <div className={styles.comingSoonText}>
          <span className={styles.comingSoonLabel}>Coming Soon</span>
        </div>
      )}
    </div>
  );
};

export default SteamWishlistButton;
