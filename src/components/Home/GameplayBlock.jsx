'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HomeSection.module.css';

const GameplayBlock = () => {
  return (
    <div className={`${styles.enterContainer} ${styles.enterGallery} ${styles.gameplaySection}`}>
      <h2 className={styles.gameplayTitle}>Gameplay</h2>
      <div className={styles.gameplayCard}>
        <Image
          src="/Gameplay/Case00-CB.jpg"
          alt="W.A.T.A - CB interrogation - gameplay still"
          width={1280}
          height={720}
          className={styles.gameplayImage}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1280px"
        />
      </div>
      <div className={styles.gameplayCaption}>
        <div className={styles.gameplayCaptionTitle}>Juno:</div>
        <div className={styles.gameplayCaptionText}>Where is Alice Rabbit??!! Answer me!</div>
      </div>
    </div>
  );
};

export default GameplayBlock;


