import React from 'react';
import styles from './SupportButtons.module.css';
import { FaCoffee, FaPaypal, FaDiscord } from 'react-icons/fa';

interface SupportButtonsProps {
  className?: string;
}

const SupportButtons: React.FC<SupportButtonsProps> = ({ className = '' }) => {
  return (
    <div id="support" className={`${styles.supportContainer} ${className}`}>
      <h3 className={styles.title}>Support Us</h3>
      <p className={styles.description}>
        Your support helps us continue developing W.A.T.A. Every contribution allows us to improve the art, voice acting, and narrative of this twisted psychological journey.
      </p>
      <div className={styles.buttonGrid}>
        <a 
          href="https://ko-fi.com/zimmzimmgames/tip" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.supportBtn} ${styles.kofi}`} 
          aria-label="Support on Ko-fi"
        >
          <FaCoffee className={styles.icon} />
          <span>Ko-fi</span>
        </a>
        
        {/* PayPal desactivado temporalmente por petición del usuario */}
        {/* 
        <button className={`${styles.supportBtn} ${styles.paypal}`} aria-label="Support on PayPal">
          <FaPaypal className={styles.icon} />
          <span>PayPal</span>
        </button>
        */}

        <a 
          href="https://discord.gg/cNM9brehGR" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.supportBtn} ${styles.discord}`} 
          aria-label="Join Discord"
        >
          <FaDiscord className={styles.icon} />
          <span>Discord</span>
        </a>
      </div>
    </div>
  );
};

export default SupportButtons;
