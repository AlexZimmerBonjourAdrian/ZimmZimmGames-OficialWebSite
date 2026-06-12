import React from 'react';
import { FaWindows, FaLinux, FaApple, FaAndroid, FaMobileAlt, FaGamepad } from 'react-icons/fa';
import styles from './Platforms.module.css';
import content from './content.json';

interface PlatformsProps {
  className?: string;
}

const Platforms: React.FC<PlatformsProps> = ({ className = '' }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'windows':
        return <FaWindows className={styles.platformIcon} />;
      case 'apple':
        return <FaApple className={styles.platformIcon} />;
      case 'linux':
        return <FaLinux className={styles.platformIcon} />;
      case 'android':
        return <FaAndroid className={styles.platformIcon} />;
      case 'ios':
        return <FaMobileAlt className={styles.platformIcon} />;
      case 'nintendo':
        return <FaGamepad className={styles.platformIcon} />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available Now';
      case 'planned':
        return 'Coming Soon';
      case 'considering':
        return 'Under Consideration';
      case 'publisher':
        return 'Only with Publisher';
      default:
        return '';
    }
  };

  return (
    <section id="platforms" className={`${styles.platformsSection} ${className}`}>
      <h3 className={styles.sectionTitle}>{content.title}</h3>
      
      {content.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className={styles.categoryContainer}>
          <h4 className={styles.categoryTitle}>{category.title}</h4>
          <div className={styles.platformsGrid}>
            {category.items.map((platform) => (
              <div 
                key={platform.icon} 
                className={`${styles.platformCard} ${styles[platform.status]}`}
              >
                {getIcon(platform.icon)}
                <span className={styles.platformName}>{platform.name}</span>
                <span className={`${styles.platformStatus} ${styles[platform.status]}`}>
                  {getStatusText(platform.status)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Platforms;
