import React from 'react';
import styles from './SupportButtons.module.css';
import { FaCoffee, FaPaypal, FaDiscord } from 'react-icons/fa';

interface SupportButtonsProps {
  className?: string;
}

const SupportButtons: React.FC<SupportButtonsProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.supportContainer} ${className}`}>
      <h3 className={styles.title}>Support the Project</h3>
      <div className={styles.buttonGrid}>
        <button className={`${styles.supportBtn} ${styles.kofi}`} aria-label="Support on Ko-fi">
          <FaCoffee className={styles.icon} />
          <span>Ko-fi</span>
        </button>
        <button className={`${styles.supportBtn} ${styles.paypal}`} aria-label="Support on PayPal">
          <FaPaypal className={styles.icon} />
          <span>PayPal</span>
        </button>
        <button className={`${styles.supportBtn} ${styles.discord}`} aria-label="Join Discord">
          <FaDiscord className={styles.icon} />
          <span>Discord</span>
        </button>
      </div>
    </div>
  );
};

export default SupportButtons;
