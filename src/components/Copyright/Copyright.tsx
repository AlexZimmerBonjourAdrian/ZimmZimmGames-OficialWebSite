import React from 'react';
import styles from './Copyright.module.css';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.copyrightContainer}>
      <div className={styles.legalClause}>
        <p>© {currentYear} ZimmZimm Games. All rights reserved.</p>
        <p className={styles.disclaimer}>
          W.A.T.A: Where are the Alices? and all related characters, logos, and elements 
          are trademarks of ZimmZimm Games. Any unauthorized use, reproduction, or 
          distribution of the materials on this website is strictly prohibited without 
          express written permission from ZimmZimm Games.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
