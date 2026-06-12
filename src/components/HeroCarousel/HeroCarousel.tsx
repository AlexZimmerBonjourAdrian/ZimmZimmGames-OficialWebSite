'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import styles from './HeroCarousel.module.css';
import content from './content.json';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = content.items;

interface HeroCarouselProps {
  className?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = carouselItems.length - 1;
      if (nextIndex >= carouselItems.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <div className={`${styles.heroCarouselContainer} ${className || ''}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={styles.carouselSlide}
        >
          <img
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].title}
            className={styles.carouselImage}
          />
          <div className={styles.carouselOverlay}>
            <h3 className={styles.carouselTitle}>{carouselItems[currentIndex].title}</h3>
            <p className={styles.carouselDescription}>{carouselItems[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <button
          className={styles.controlButton}
          onClick={() => paginate(-1)}
          aria-label={content.ariaLabels.previous}
        >
          <HiChevronLeft size={24} />
        </button>
        <button
          className={styles.controlButton}
          onClick={() => paginate(1)}
          aria-label={content.ariaLabels.next}
        >
          <HiChevronRight size={24} />
        </button>
      </div>

      <div className={styles.indicators}>
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.indicatorActive : ''
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;