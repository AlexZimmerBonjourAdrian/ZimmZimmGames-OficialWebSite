'use client';

import { useState } from 'react';
import styles from './ExtrasCarouselSection.module.css';

export default function ExtrasCarouselSection() {
  const extras = [
    {
      title: "Alice Deeps - The Book",
      description: "Dive into the literary world that inspired WATA. This book contains the original story and additional lore that expands the game's universe.",
      type: "book",
      icon: "📚",
      preview: "/images/Wata/WhereAreTheAlices.JPG",
      file: "/Books/Alice Deeps.pdf"
    },
    {
      title: "Concept Art Gallery",
      description: "Explore the visual development of WATA through concept art, character designs, and environmental sketches.",
      type: "gallery",
      icon: "🎨",
      preview: "/images/Wata/Menu.PNG",
      file: "#"
    },
    {
      title: "Soundtrack Preview",
      description: "Listen to the atmospheric soundtrack that creates the haunting atmosphere of WATA's world.",
      type: "audio",
      icon: "🎵",
      preview: "/images/Wata/Menu-3.PNG",
      file: "#"
    }
  ];
  
  const [index, setIndex] = useState(0);
  const total = extras.length;
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));
  const current = extras[index];

  const typeLabels = {
    book: "Book",
    gallery: "Gallery", 
    audio: "Audio"
  };

  return (
    <section className={styles.carouselSection}>
      {/* Header with decorative elements */}
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.title}>Extras</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.carouselContainer}>
        <button 
          className={styles.arrow} 
          onClick={prev} 
          aria-label="Previous"
        >
          <span className={styles.arrowIcon}>&#8592;</span>
        </button>
        
        <div className={styles.card}>
          <div className={styles.previewWrapper}>
            <a href={current.file} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
              <img src={current.preview} alt={current.title} className={styles.previewImg} />
              <div className={styles.typeIcon}>{current.icon}</div>
              <div className={styles.overlay}>
                <span className={styles.viewText}>View {typeLabels[current.type]}</span>
              </div>
            </a>
          </div>
          <div className={styles.info}>
            <span className={styles.type}>{typeLabels[current.type]}</span>
            <h3 className={styles.itemTitle}>{current.title}</h3>
            <p className={styles.description}>{current.description}</p>
          </div>
        </div>
        
        <button 
          className={styles.arrow} 
          onClick={next} 
          aria-label="Next"
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
            aria-label={`Go to item ${i + 1}`}
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