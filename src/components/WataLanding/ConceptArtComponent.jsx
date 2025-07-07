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
      title: "Alice's Room",
      description: "The starting location where Alice's journey begins. A seemingly normal bedroom that hides dark secrets.",
      src: "/images/Wata/Menu.PNG",
      alt: "Alice's Room Concept Art"
    },
    {
      id: 2,
      title: "The Door",
      description: "The mysterious door that leads to the unknown. Its appearance changes based on Alice's mental state.",
      src: "/images/Wata/Door.PNG",
      alt: "The Door Concept Art"
    },
    {
      id: 3,
      title: "Menu Interface",
      description: "The game's menu system designed to feel like a corrupted computer interface.",
      src: "/images/Wata/Menu-3.PNG",
      alt: "Menu Interface Concept Art"
    },
    {
      id: 4,
      title: "Shadow Corridors",
      description: "The endless corridors where reality begins to break down and shadows come to life.",
      src: "/images/Wata/Menu-4.PNG",
      alt: "Shadow Corridors Concept Art"
    },
    {
      id: 5,
      title: "The Watcher's Domain",
      description: "The realm where The Watcher resides, a place of pure nightmare and psychological horror.",
      src: "/images/Wata/Menu-5.PNG",
      alt: "The Watcher's Domain Concept Art"
    },
    {
      id: 6,
      title: "Reality Fracture",
      description: "A visual representation of how reality fractures and distorts as Alice's sanity wanes.",
      src: "/images/Wata/Menu-6.PNG",
      alt: "Reality Fracture Concept Art"
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
            Explore the visual development and artistic vision behind WATA
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
                      <span className={styles.viewButton}>View</span>
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
                    />
                    <div className={styles.carouselOverlay}>
                      <div className={styles.carouselContent}>
                        <h3 className={styles.carouselTitle}>{image.title}</h3>
                        <p className={styles.carouselDescription}>{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Carousel Navigation */}
            <div className={styles.carouselNavigation}>
              <button 
                className={styles.carouselButton}
                onClick={prevCarousel}
                aria-label="Previous"
              >
                Previous
              </button>
              <div className={styles.carouselDots}>
                {conceptArtImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.carouselDot} ${index === carouselIndex ? styles.active : ''}`}
                    onClick={() => setCarouselIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                className={styles.carouselButton}
                onClick={nextCarousel}
                aria-label="Next"
              >
                Next
              </button>
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
                <button 
                  className={styles.closeButton}
                  onClick={closeModal}
                >
                  Close
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
                
                <div className={styles.modalNavigation}>
                  <button 
                    className={styles.modalNavButton}
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    Previous
                  </button>
                  <span className={styles.modalCounter}>
                    {currentIndex + 1} / {conceptArtImages.length}
                  </span>
                  <button 
                    className={styles.modalNavButton}
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    Next
                  </button>
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