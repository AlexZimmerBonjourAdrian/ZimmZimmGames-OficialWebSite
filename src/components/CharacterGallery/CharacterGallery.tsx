'use client';

import React from 'react';
import Image from 'next/image';
import styles from './CharacterGallery.module.css';
import content from './content.json';

interface CharacterGalleryProps {
  className?: string;
  showTitles?: boolean;
  layout?: 'grid' | 'carousel' | 'stacked';
  /** Visual variant. 'heroInline' removes backgrounds and uses DialogueGame fonts */
  variant?: 'default' | 'heroInline';
  /** Optional texts to override descriptions/titles */
  overrides?: {
    cbDesc?: string;
    junoDesc?: string;
  };
}

const CharacterGallery: React.FC<CharacterGalleryProps> = ({ 
  className = '', 
  showTitles = true,
  layout = 'grid',
  variant = 'default',
  overrides,
}) => {
  const characters = [
    {
      id: 'dominic',
      name: content.characters[0].name,
      image: '/Characters/CB.png',
      description: overrides?.cbDesc ?? content.characters[0].description
    },
    {
      id: 'juno',
      name: content.characters[1].name,
      image: '/Characters/Juno.png',
      description: overrides?.junoDesc ?? content.characters[1].description
    }
  ];

  const layoutClasses = {
    grid: styles.gridLayout,
    carousel: styles.carouselLayout,
    stacked: styles.stackedLayout
  };

  return (
    <div id="characters" className={`${styles.characterGallery} ${layoutClasses[layout]} ${variant === 'heroInline' ? styles.heroInline : ''} ${className}`}>
      {showTitles && (
        <div className={styles.header}>
          <h2 className={styles.title}>{content.header.title}</h2>
          <p className={styles.subtitle}>{content.header.subtitle}</p>
        </div>
      )}

      {/* Main Characters */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>{content.mainCharacters}</h3>
        <div className={styles.characterGrid}>
          {characters.map((character) => (
            <div key={character.id} className={styles.characterCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={200}
                  height={300}
                  className={styles.characterImage}
                  sizes="(max-width: 768px) 45vw, (max-width: 1200px) 25vw, 200px"
                />
              </div>
              <div className={styles.characterInfo}>
                <h4 className={styles.characterName}>{character.name}</h4>
                <p className={styles.characterDescription}>{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharacterGallery;