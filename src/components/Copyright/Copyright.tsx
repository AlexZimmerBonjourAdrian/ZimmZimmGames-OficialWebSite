import React from 'react';
import styles from './Copyright.module.css';
import content from './content.json';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.copyrightContainer}>
      <div className={styles.legalClause}>
        <p>{content.copyright.replace('{currentYear}', currentYear.toString())}</p>
        <p className={styles.disclaimer}>
          {content.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default Copyright;