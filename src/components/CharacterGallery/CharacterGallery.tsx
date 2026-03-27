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
      description: overrides?.cbDesc ?? 'El conejo elegante y astuto',
      quotes: [
        "Hello, Detective, how have you been? How is Cheshire? Are you still unemployed?",
        "Was it for being a good guy? Or for looking weak? Maybe both?",
        "We could be frank, starting with you, Junie. Can you be yourself with me?",
        "Maybe I just wanted to see you…",
        "Do you want to know who I really am, 'Heroine'?"
      ]
    },
    {
      id: 'juno',
      name: 'Juno',
      image: '/Characters/Juno.png',
      description: overrides?.junoDesc ?? 'La coneja determinada y valiente',
      quotes: [
        "I have violent fantasies, I have desires and dreams that scare me. [...] Every day I tell myself in the mirror: 'I am a good person'.",
        "I WANT TO KILL HIM! I WANT TO BEAT HIM UNTIL HE BLEEDS! BUT IT'S WRONG! And he... he laughs at me!..",
        "We have suspicions about your involvement and we wish to... clear things up.",
        "...I have to lie to my kids again.",
        "Done... this human whiskey is terrible, it tastes like gasoline with sugar. Too bad they know how to make quality whiskey in Wonderland... Shit... I miss that taste."
      ]
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
          <h2 className={styles.title}>Concept Art</h2>
          <p className={styles.subtitle}>Meet the world of W.A.T.A</p>
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
                  sizes="(max-width: 768px) 45vw, (max-width: 1200px) 25vw, 200px"
                />
              </div>
              <div className={styles.characterInfo}>
                <h4 className={styles.characterName}>{character.name}</h4>
                <p className={styles.characterDescription}>{character.description}</p>
                
                {character.quotes && character.quotes.length > 0 && (
                  <div className={styles.quotesContainer}>
                    <h5 className={styles.quotesTitle}>Diálogos</h5>
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
