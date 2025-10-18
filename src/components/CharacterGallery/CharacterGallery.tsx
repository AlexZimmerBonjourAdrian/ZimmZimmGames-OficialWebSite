import React from 'react';
import Image from 'next/image';
import styles from './CharacterGallery.module.css';

interface CharacterGalleryProps {
  className?: string;
  showTitles?: boolean;
  layout?: 'grid' | 'carousel' | 'stacked';
  /** variante visual. 'heroInline' quita fondos y usa fuentes del DialogueGame */
  variant?: 'default' | 'heroInline';
  /** textos opcionales para sobrescribir descripciones/títulos */
  overrides?: {
    cbDesc?: string;
    junoDesc?: string;
    expressionDesc?: string;
    duoDesc?: string;
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
      id: 'cb',
      name: 'C.B.',
      image: '/Characters/CB.png',
      description: overrides?.cbDesc ?? 'El conejo elegante y astuto'
    },
    {
      id: 'juno',
      name: 'Juno',
      image: '/Characters/Juno.png',
      description: overrides?.junoDesc ?? 'La coneja determinada y valiente'
    }
  ];

  const conceptArt = [
    {
      id: 'expression-sheet',
      name: 'Expression Sheet - C.B.',
      image: '/ConceptArt/ConceptExpressionSheetCB.png',
      description: overrides?.expressionDesc ?? 'Expressions and moods of C.B.'
    },
    {
      id: 'main-characters',
      name: 'Main Characters',
      image: '/ConceptArt/ConceptJunoAndCB.png',
      description: overrides?.duoDesc ?? 'Juno and C.B. together'
    }
  ];

  const layoutClasses = {
    grid: styles.gridLayout,
    carousel: styles.carouselLayout,
    stacked: styles.stackedLayout
  };

  return (
    <div className={`${styles.characterGallery} ${layoutClasses[layout]} ${variant === 'heroInline' ? styles.heroInline : ''} ${className}`}>
      {showTitles && (
        <div className={styles.header}>
          <h2 className={styles.title}>W.A.T.A Characters</h2>
          <p className={styles.subtitle}>Meet the protagonists of our story</p>
        </div>
      )}

      {/* Main Characters */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Main Characters</h3>
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
                  priority
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

      {/* Concept Art */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Concept Art</h3>
        <div className={styles.conceptGrid}>
          {conceptArt.map((art) => (
            <div key={art.id} className={styles.conceptCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={art.image}
                  alt={art.name}
                  width={400}
                  height={300}
                  className={styles.conceptImage}
                  priority
                />
              </div>
              <div className={styles.conceptInfo}>
                <h4 className={styles.conceptName}>{art.name}</h4>
                <p className={styles.conceptDescription}>{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharacterGallery;
