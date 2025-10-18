import React from 'react';
import { SteamWishlistButton, CharacterGallery } from '@/components';
import styles from './SteamSection.module.css';

interface SteamSectionProps {
  className?: string;
  showCharacterGallery?: boolean;
  buttonSize?: 'small' | 'medium' | 'large';
  galleryLayout?: 'grid' | 'carousel' | 'stacked';
}

const SteamSection: React.FC<SteamSectionProps> = ({ 
  className = '',
  showCharacterGallery = true,
  buttonSize = 'medium',
  galleryLayout = 'grid'
}) => {
  return (
    <section className={`${styles.steamSection} ${className}`}>
      <div className={styles.container}>
        {/* Botón de Steam */}
        <div className={styles.steamButtonContainer}>
          <SteamWishlistButton size={buttonSize} />
        </div>
        
        {/* Galería de personajes */}
        {showCharacterGallery && (
          <div className={styles.characterGalleryContainer}>
            <CharacterGallery 
              layout={galleryLayout}
              showTitles={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SteamSection;
