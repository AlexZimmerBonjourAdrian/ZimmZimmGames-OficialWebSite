'use client';

import { useState } from 'react';
import styles from './ExtrasCarouselSection.module.css';

const extras = [
  {
    type: 'Libro',
    title: 'Alice Deeps',
    file: '/Books/Alice Deeps.pdf',
    preview: '/images/Wata/Menu.PNG', // Placeholder image for the book
    description: 'Novela visual inspirada en el universo de WATA.'
  },
  {
    type: 'Sketch',
    title: 'Boceto de la Puerta',
    file: '/images/Wata/Door.PNG',
    preview: '/images/Wata/Door.PNG',
    description: 'Arte conceptual de la puerta misteriosa.'
  },
  {
    type: 'Figurita',
    title: 'Conejo Enigmático',
    file: '/images/Wata/Menu-7.PNG',
    preview: '/images/Wata/Menu-7.PNG',
    description: 'Figurita digital del Conejo guía.'
  },
  {
    type: 'Imagen',
    title: 'Menú Principal',
    file: '/images/Wata/Menu.PNG',
    preview: '/images/Wata/Menu.PNG',
    description: 'Captura del menú principal del juego.'
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
      <h2 className={styles.title}>Contenido Extra</h2>
      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={prev} aria-label="Anterior">&#8592;</button>
        <div className={styles.card}>
          <div className={styles.previewWrapper}>
            {current.type === 'Libro' ? (
              <a href={current.file} target="_blank" rel="noopener noreferrer">
                <img src={current.preview} alt={current.title} className={styles.previewImg} />
                <div className={styles.bookIcon}>📖</div>
              </a>
            ) : (
              <a href={current.file} target="_blank" rel="noopener noreferrer">
                <img src={current.preview} alt={current.title} className={styles.previewImg} />
              </a>
            )}
          </div>
          <div className={styles.info}>
            <span className={styles.type}>{current.type}</span>
            <h3 className={styles.itemTitle}>{current.title}</h3>
            <p className={styles.description}>{current.description}</p>
          </div>
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Siguiente">&#8594;</button>
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
    </section>
  );
} 