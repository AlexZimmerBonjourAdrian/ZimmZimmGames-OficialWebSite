import React from 'react';
import Image from 'next/image';
import styles from './SteamWishlistButton.module.css';

interface ReserveCopyButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  enabled?: boolean;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const ReserveCopyButton: React.FC<ReserveCopyButtonProps> = ({
  className = '',
  size = 'medium',
  enabled = true,
  href,
  target = '_blank',
}) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  } as const;

  const ButtonInner = (
    <button
      disabled={!enabled}
      className={`${styles.steamButton} ${sizeClasses[size]} ${enabled ? styles.enabled : styles.disabled}`}
      aria-label={enabled ? 'Reserve a copy' : 'Reserve a copy - Unavailable'}
      type="button"
    >
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            src="/globe.svg"
            alt="Reserve icon"
            width={32}
            height={32}
            className={styles.logo}
          />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.textLine1}>Reserve a</span>
          <span className={styles.textLine2}>COPY</span>
        </div>
      </div>
    </button>
  );

  if (href && enabled) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`${styles.steamButtonWrapper} ${className}`}>
        {ButtonInner}
      </a>
    );
  }

  return <div className={`${styles.steamButtonWrapper} ${className}`}>{ButtonInner}</div>;
};

export default ReserveCopyButton;


