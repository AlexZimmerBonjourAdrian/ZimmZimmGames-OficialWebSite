import { useState, useEffect } from 'react';
import styles from './UpdatesSection.module.css';

// Data structure for updates - easy to modify with JavaScript
const updatesData = [
  {
    id: 1,
    title: "Nueva mecánica de puzzle implementada",
    description: "Hemos añadido un sistema de puzzles completamente nuevo que desafía la percepción del jugador.",
    date: "2024-01-15",
    image: "/images/Wata/Menu-3.PNG",
    category: "Gameplay",
    isNew: true
  },
  {
    id: 2,
    title: "Mejoras en el sistema de audio",
    description: "El sistema de audio ha sido completamente renovado con efectos 3D y música dinámica.",
    date: "2024-01-10",
    image: "/images/Wata/Menu-4.PNG",
    category: "Audio",
    isNew: false
  },
  {
    id: 3,
    title: "Optimización de rendimiento",
    description: "Mejoras significativas en el rendimiento del juego para una experiencia más fluida.",
    date: "2024-01-05",
    image: "/images/Wata/Menu-5.PNG",
    category: "Technical",
    isNew: false
  },
  {
    id: 4,
    title: "Nuevos assets visuales",
    description: "Se han añadido más de 50 nuevos assets visuales para mejorar la inmersión.",
    date: "2024-01-01",
    image: "/images/Wata/Menu-6.PNG",
    category: "Visual",
    isNew: false
  }
];

export default function UpdatesSection() {
  const [updates, setUpdates] = useState(updatesData);
  const [visibleUpdates, setVisibleUpdates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation effect for updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 5000); // Change update every 5 seconds

    return () => clearInterval(interval);
  }, [updates.length]);

  // Show updates with animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleUpdates(updates.slice(0, currentIndex + 1));
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, updates]);

  // Function to add new update (easy JavaScript integration)
  const addUpdate = (newUpdate) => {
    const updateWithId = {
      ...newUpdate,
      id: Math.max(...updates.map(u => u.id)) + 1,
      date: new Date().toISOString().split('T')[0],
      isNew: true
    };
    setUpdates(prev => [updateWithId, ...prev]);
  };

  // Function to mark update as read
  const markAsRead = (updateId) => {
    setUpdates(prev => 
      prev.map(update => 
        update.id === updateId 
          ? { ...update, isNew: false }
          : update
      )
    );
  };

  return (
    <section className={styles.updatesSection}>
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.sectionTitle}>Últimas Actualizaciones</h2>
        <div className={styles.decorativeLine}></div>
      </div>
      
      <div className={styles.updatesContainer}>
        {visibleUpdates.map((update, index) => (
          <div 
            key={update.id} 
            className={`${styles.updateCard} ${update.isNew ? styles.newUpdate : ''} ${styles[`slideIn${index + 1}`]}`}
            onClick={() => markAsRead(update.id)}
          >
            <div className={styles.updateImage}>
              <img src={update.image} alt={update.title} />
              {update.isNew && <div className={styles.newBadge}>NUEVO</div>}
            </div>
            
            <div className={styles.updateContent}>
              <div className={styles.updateHeader}>
                <h3 className={styles.updateTitle}>{update.title}</h3>
                <span className={styles.updateCategory}>{update.category}</span>
              </div>
              
              <p className={styles.updateDescription}>{update.description}</p>
              
              <div className={styles.updateFooter}>
                <span className={styles.updateDate}>{update.date}</span>
                {update.isNew && (
                  <span className={styles.readMore}>Click para marcar como leído</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.dots}>
          {updates.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Hidden functions for easy JavaScript access */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.UpdatesSection = {
            addUpdate: ${addUpdate.toString()},
            markAsRead: ${markAsRead.toString()},
            getUpdates: () => ${JSON.stringify(updates)},
            setUpdates: ${setUpdates.toString()}
          };
        `
      }} />
    </section>
  );
} 