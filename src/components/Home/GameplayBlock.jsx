'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HomeSection.module.css';

const GameplayBlock = ({ 
  title = "Gameplay", 
  image = "/Gameplay/Case00-CB.jpg", 
  captionTitle = "Juno:", 
  captionText = "Where is Alice Rabbit??!! Answer me!" 
}) => {
  return (
    <div className={`${styles.enterContainer} ${styles.enterGallery} ${styles.gameplaySection}`}>
      <h2 className={styles.gameplayTitle}>{title}</h2>
      <div className={styles.gameplayCard}>
        <Image
          src={image}
          alt={`W.A.T.A - ${title} - gameplay still`}
          width={1280}
          height={720}
          className={styles.gameplayImage}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1280px"
        />
      </div>
      <div className={styles.gameplayCaption}>
        <div className={styles.gameplayCaptionTitle}>{captionTitle}</div>
        <div className={styles.gameplayCaptionText}>{captionText}</div>
      </div>
    </div>
  );
};

export default GameplayBlock;


