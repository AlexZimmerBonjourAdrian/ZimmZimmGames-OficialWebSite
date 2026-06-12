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
      id: 'dominic',
      name: content.characters[0].name,
      image: '/Characters/CB.png',
      description: overrides?.cbDesc ?? content.characters[0].description,
      quotes: content.characters[0].quotes
    },
    {
      id: 'juno',
      name: content.characters[1].name,
      image: '/Characters/Juno.png',
      description: overrides?.junoDesc ?? content.characters[1].description,
      quotes: content.characters[1].quotes
    }
  ];

  const conceptArt = [
    {
      id: 'expression-sheet',
      name: content.conceptArtPieces[0].name,
      image: '/ConceptArt/ConceptExpressionSheetCB.png',
      description: overrides?.expressionDesc ?? content.conceptArtPieces[0].description
    },
    {
      id: 'main-characters',
      name: content.conceptArtPieces[1].name,
      image: '/ConceptArt/ConceptJunoAndCB.png',
      description: overrides?.duoDesc ?? content.conceptArtPieces[1].description
    },
    {
      id: 'main-menu-gameplay',
      name: content.conceptArtPieces[2].name,
      image: '/Gameplay/MainMenu.jpg',
      description: content.conceptArtPieces[2].description
    },
    {
      id: 'menu-case-gameplay',
      name: content.conceptArtPieces[3].name,
      image: '/Gameplay/MenuCase.png',
      description: content.conceptArtPieces[3].description
    },
    {
      id: 'storyboard-1',
      name: content.conceptArtPieces[4].name,
      image: '/Gameplay/Storyboard.png',
      description: content.conceptArtPieces[4].description
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
                
                {character.quotes && character.quotes.length > 0 && (
                  <div className={styles.quotesContainer}>
                    <h5 className={styles.quotesTitle}>{content.dialogues}</h5>
                    <div className={styles.quotesList}>
                      {character.quotes.map((quote, index) => (
                        <div key={index} className={styles.quoteWrapper}>
                          <span className={styles.quoteIcon}>"</span>
                          <p className={styles.characterQuote}>{quote}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Concept Art */}
      <section id="concept-art" className={styles.section}>
        <h3 className={styles.sectionTitle}>{content.conceptArt}</h3>
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
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
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