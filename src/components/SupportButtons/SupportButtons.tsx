import React from 'react';
import styles from './SupportButtons.module.css';
import { FaCoffee, FaPaypal, FaDiscord } from 'react-icons/fa';
import content from './content.json';
import links from './links.json';

interface SupportButtonsProps {
  className?: string;
}

const SupportButtons: React.FC<SupportButtonsProps> = ({ className = '' }) => {
  return (
    <div id="support" className={`${styles.supportContainer} ${className}`}>
      <h3 className={styles.title}>{content.title}</h3>
      <p className={styles.description}>
        {content.description}
      </p>
      <div className={styles.buttonGrid}>
        <a 
          href={links.kofi} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.supportBtn} ${styles.kofi}`} 
          aria-label="Support on Ko-fi"
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
        >
          <FaDiscord className={styles.icon} />
          <span>{content.buttons.discord}</span>
        </a>
      </div>
    </div>
  );
};

export default SupportButtons;