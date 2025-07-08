'use client';

import styles from './RatingLabel.module.css';

export default function RatingLabel() {
  return (
    <div className={styles.ratingLabel}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/ESRB_2013_Mature_17%2B.svg"
        alt="ESRB Mature 17+"
        className={styles.logo}
      />
      <div className={styles.text}>
        <strong>Rated M for Mature 17+</strong>
        <span>This game is intended for mature audiences only.</span>
      </div>
    </div>
  );
} 