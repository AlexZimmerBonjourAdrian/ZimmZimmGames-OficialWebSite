'use client';

import React from 'react';
import styles from './press-kit.module.css';

export default function PressKit() {
  return (
    <div className={styles.pressKitContainer}>
      <div className={styles.pressKitSection}>
        <div className={styles.imageWrapper}>
          <img 
            src="/ConceptArt/ConceptJunoAndCB.png" 
            alt="Juno and CB Characters" 
            className={styles.pressKitImage}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h1 className={`${styles.title} font-alice`}>Press Kit</h1>
          <p className={styles.description}>
            If you'd like to write about our games, we've a Press Kit full of videos, facts and images.
          </p>
          <p className={styles.contact}>
            For any additional press enquiries, please contact{' '}
            <a href="mailto:zimmzimmGames@gmail.com" className={styles.emailLink}>
              zimmzimmGames@gmail.com
            </a>
          </p>
          <a 
            href="https://drive.google.com/drive/folders/1emKF_YeHf_EF4fC_vUqYhLweThc-t9fV?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pressKitButton}
          >
            VISIT THE PRESS KIT
          </a>
        </div>
      </div>
    </div>
  );
}
