'use client';

import React, { useState, useEffect } from 'react';
import styles from './SimpleCarousel.module.css';

interface CarouselItem {
  id: number;
  image: string;
}

interface SimpleCarouselProps {
  items: CarouselItem[];
  className?: string;
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ items, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className={`${styles.carouselContainer} ${className || ''}`}>
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className={styles.carouselSlide}>
              <img src={item.image} alt={`Slide ${item.id}`} className={styles.carouselImage} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.carouselButtonPrev}`} aria-label="Previous">
        ‹
      </button>
      <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.carouselButtonNext}`} aria-label="Next">
        ›
      </button>

      <div className={styles.carouselDots}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;
