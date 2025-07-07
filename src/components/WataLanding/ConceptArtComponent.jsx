'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ConceptArtComponent.module.css';

const ConceptArtComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'
  const [carouselIndex, setCarouselIndex] = useState(0);

  const conceptArtImages = [
    {
      id: 1,
      src: '/images/Wata/Door.PNG',
      alt: 'Puerta misteriosa de Wata',
      title: 'La Puerta',
      description: 'El umbral entre la realidad y el mundo interior'
    },
    {
      id: 2,
      src: '/images/Wata/Menu.PNG',
      alt: 'Menú principal de Wata',
      title: 'El Menú',
      description: 'La interfaz que te guía hacia la locura'
    },
    {
      id: 3,
      src: '/images/Wata/Menu-3.PNG',
      alt: 'Menú 3 de Wata',
      title: 'Navegación',
      description: 'Explorando las opciones del juego'
    },
    {
      id: 4,
      src: '/images/Wata/Menu-4.PNG',
      alt: 'Menú 4 de Wata',
      title: 'Configuración',
      description: 'Ajustando la experiencia'
    },
    {
      id: 5,
      src: '/images/Wata/Menu-5.PNG',
      alt: 'Menú 5 de Wata',
      title: 'Opciones Avanzadas',
      description: 'Personalizando tu viaje'
    },
    {
      id: 6,
      src: '/images/Wata/Menu-6.PNG',
      alt: 'Menú 6 de Wata',
      title: 'Extras',
      description: 'Contenido adicional'
    },
    {
      id: 7,
      src: '/images/Wata/Menu-7.PNG',
      alt: 'Menú 7 de Wata',
      title: 'Créditos',
      description: 'Los creadores detrás de la experiencia'
    },
    {
      id: 8,
      src: '/images/Wata/Menu-8.PNG',
      alt: 'Menú 8 de Wata',
      title: 'Salida',
      description: 'El final del viaje'
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % conceptArtImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(conceptArtImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? conceptArtImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(conceptArtImages[prevIndex]);
  };

  // Carousel functions
  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % conceptArtImages.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? conceptArtImages.length - 1 : prev - 1));
  };

  // Auto-play carousel
  useEffect(() => {
    if (viewMode === 'carousel') {
      const interval = setInterval(() => {
        nextCarousel();
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [viewMode, carouselIndex]);

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'carousel' : 'grid');
    setCarouselIndex(0);
  };

  return (
    <section className={styles.conceptArtSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Concept Art</h2>
          <p className={styles.subtitle}>
            Explora el arte conceptual que da vida al mundo de Wata
          </p>
          
          {/* View Mode Toggle */}
          <div className={styles.viewModeToggle}>
            <button
              className={`${styles.toggleButton} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <span className={styles.toggleIcon}>⊞</span>
              Grid
            </button>
            <button
              className={`${styles.toggleButton} ${viewMode === 'carousel' ? styles.active : ''}`}
              onClick={() => setViewMode('carousel')}
            >
              <span className={styles.toggleIcon}>◀▶</span>
              Carousel
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        {viewMode === 'grid' && (
          <div className={styles.galleryGrid}>
            {conceptArtImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <div 
                  className={styles.imageContainer}
                  onClick={() => openModal(image, index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.imageTitle}>{image.title}</h3>
                      <p className={styles.imageDescription}>{image.description}</p>
                      <span className={styles.viewButton}>Ver más</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className={styles.carouselContainer}>
            <motion.div 
              className={styles.carouselTrack}
              animate={{ x: `-${carouselIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {conceptArtImages.map((image, index) => (
                <div key={image.id} className={styles.carouselSlide}>
                  <div className={styles.carouselImageContainer}>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className={styles.carouselImage}
                      loading="lazy"
                    />
                    <div className={styles.carouselOverlay}>
                      <div className={styles.carouselContent}>
                        <h3 className={styles.carouselTitle}>{image.title}</h3>
                        <p className={styles.carouselDescription}>{image.description}</p>
                        <button 
                          className={styles.carouselViewButton}
                          onClick={() => openModal(image, index)}
                        >
                          Ver en detalle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Carousel Navigation */}
            <button 
              className={`${styles.carouselNavButton} ${styles.carouselPrevButton}`}
              onClick={prevCarousel}
            >
              ‹
            </button>
            <button 
              className={`${styles.carouselNavButton} ${styles.carouselNextButton}`}
              onClick={nextCarousel}
            >
              ›
            </button>

            {/* Carousel Indicators */}
            <div className={styles.carouselIndicators}>
              {conceptArtImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === carouselIndex ? styles.activeIndicator : ''}`}
                  onClick={() => setCarouselIndex(index)}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className={styles.autoPlayIndicator}>
              <span className={styles.autoPlayText}>Auto-play</span>
              <div className={styles.autoPlayDot} />
            </div>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.closeButton} onClick={closeModal}>
                  ×
                </button>
                
                <div className={styles.modalImageContainer}>
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className={styles.modalImage}
                  />
                </div>
                
                <div className={styles.modalInfo}>
                  <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
                  <p className={styles.modalDescription}>{selectedImage.description}</p>
                </div>

                {/* Navigation arrows */}
                <button 
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={prevImage}
                >
                  ‹
                </button>
                <button 
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={nextImage}
                >
                  ›
                </button>

                {/* Image counter */}
                <div className={styles.imageCounter}>
                  {currentIndex + 1} / {conceptArtImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ConceptArtComponent; 