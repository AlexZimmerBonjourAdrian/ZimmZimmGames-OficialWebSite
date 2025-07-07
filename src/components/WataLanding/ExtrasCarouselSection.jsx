'use client';

import { useState } from 'react';
import styles from './ExtrasCarouselSection.module.css';

const extras = [
  {
    type: 'Libro',
    title: 'Alice Deeps',
    file: '/Books/Alice Deeps.pdf',
    preview: '/images/Wata/Menu.PNG', // Placeholder image for the book
    description: 'Novela visual inspirada en el universo de WATA.',
    icon: '📖'
  },
  {
    type: 'Sketch',
    title: 'Boceto de la Puerta',
    file: '/images/Wata/Door.PNG',
    preview: '/images/Wata/Door.PNG',
    description: 'Arte conceptual de la puerta misteriosa.',
    icon: '✏️'
  },
  {
    type: 'Figurita',
    title: 'Conejo Enigmático',
    file: '/images/Wata/Menu-7.PNG',
    preview: '/images/Wata/Menu-7.PNG',
    description: 'Figurita digital del Conejo guía.',
    icon: '🎯'
  },
  {
    type: 'Imagen',
    title: 'Menú Principal',
    file: '/images/Wata/Menu.PNG',
    preview: '/images/Wata/Menu.PNG',
    description: 'Captura del menú principal del juego.',
    icon: '🖼️'
  }
];

export default function ExtrasCarouselSection() {
  const [index, setIndex] = useState(0);
  const total = extras.length;
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));
  const current = extras[index];

  return (
    <section className={styles.carouselSection}>
      {/* Header with decorative elements */}
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.title}>Contenido Extra</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.carouselContainer}>
        <button 
          className={styles.arrow} 
          onClick={prev} 
          aria-label="Anterior"
        >
          <span className={styles.arrowIcon}>&#8592;</span>
        </button>
        
        <div className={styles.card}>
          <div className={styles.previewWrapper}>
            {current.type === 'Libro' ? (
              <a href={current.file} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                <img src={current.preview} alt={current.title} className={styles.previewImg} />
                <div className={styles.typeIcon}>{current.icon}</div>
                <div className={styles.overlay}>
                  <span className={styles.viewText}>Ver {current.type}</span>
                </div>
              </a>
            ) : (
              <a href={current.file} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                <img src={current.preview} alt={current.title} className={styles.previewImg} />
                <div className={styles.typeIcon}>{current.icon}</div>
                <div className={styles.overlay}>
                  <span className={styles.viewText}>Ver {current.type}</span>
                </div>
              </a>
            )}
          </div>
          <div className={styles.info}>
            <span className={styles.type}>{current.type}</span>
            <h3 className={styles.itemTitle}>{current.title}</h3>
            <p className={styles.description}>{current.description}</p>
          </div>
        </div>
        
        <button 
          className={styles.arrow} 
          onClick={next} 
          aria-label="Siguiente"
        >
          <span className={styles.arrowIcon}>&#8594;</span>
        </button>
      </div>
      
      <div className={styles.dots}>
        {extras.map((_, i) => (
          <button
            key={i}
            className={i === index ? styles.dotActive : styles.dot}
            onClick={() => setIndex(i)}
            aria-label={`Ir al elemento ${i + 1}`}
          />
        ))}
      </div>

      {/* Footer decorative element */}
      <div className={styles.footerDecoration}>
        <div className={styles.decorativeDot}></div>
        <div className={styles.decorativeDot}></div>
        <div className={styles.decorativeDot}></div>
      </div>
    </section>
  );
} 