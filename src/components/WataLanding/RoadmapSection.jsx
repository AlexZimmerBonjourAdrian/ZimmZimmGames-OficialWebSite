import { useState, useEffect } from 'react';
import styles from './RoadmapSection.module.css';

// Roadmap data structure - only for display, not for client modification
const roadmapData = [
  {
    id: 1,
    phase: "Fase 1",
    title: "Fundación del Proyecto",
    description: "Desarrollo de la base del juego y conceptos fundamentales",
    status: "in-progress", // completed, in-progress, planned, delayed
    date: "01/08/2025",
    features: [
      "Concepto del juego",
      "Página web oficial",
      "Arte conceptual",
      "Sistema básico de emociones",
      "Sistema de decisiones",
      "Diseño del nivel",
      "Sistema de animatics (incompleto)",
      "Pruebas de build correctas"
    ],
    progress: 60,
    color: "#2196F3"
  }
];

export default function RoadmapSection() {
  const [roadmap, setRoadmap] = useState(roadmapData);
  const [activePhase, setActivePhase] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect for roadmap visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance phases (disabled since we only have one phase)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActivePhase((prev) => {
  //       const nextPhase = prev + 1;
  //       return nextPhase > roadmap.length ? 1 : nextPhase;
  //     });
  //   }, 8000); // Change phase every 8 seconds

  //   return () => clearInterval(interval);
  // }, [roadmap.length]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⟳';
      case 'planned':
        return '⏳';
      case 'delayed':
        return '⚠';
      default:
        return '○';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return styles.completed;
      case 'in-progress':
        return styles.inProgress;
      case 'planned':
        return styles.planned;
      case 'delayed':
        return styles.delayed;
      default:
        return styles.planned;
    }
  };

  return (
    <section className={`${styles.roadmapSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.sectionTitle}>Roadmap de Desarrollo</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.roadmapContainer}>
        <div className={styles.timeline}>
          {roadmap.map((phase, index) => (
            <div 
              key={phase.id} 
              className={`${styles.phaseCard} ${getStatusClass(phase.status)} ${activePhase === phase.id ? styles.active : ''}`}
            >
              <div className={styles.phaseHeader}>
                <div className={styles.phaseNumber}>
                  <span className={styles.phaseText}>{phase.phase}</span>
                  <span className={styles.statusIcon}>{getStatusIcon(phase.status)}</span>
                </div>
                <div className={styles.phaseInfo}>
                  <h3 className={styles.phaseTitle}>{phase.title}</h3>
                  <p className={styles.phaseDate}>{phase.date}</p>
                </div>
              </div>

              <p className={styles.phaseDescription}>{phase.description}</p>

              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ 
                      width: `${phase.progress}%`,
                      backgroundColor: phase.color
                    }}
                  ></div>
                </div>
                <span className={styles.progressText}>{phase.progress}%</span>
              </div>

              <div className={styles.featuresList}>
                <h4 className={styles.featuresTitle}>Características:</h4>
                <ul className={styles.features}>
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.feature}>
                      <span className={styles.featureBullet}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Controls removed since we only have one phase */}
        {/* <div className={styles.controls}>
          <div className={styles.phaseDots}>
            {roadmap.map((phase, index) => (
              <button
                key={phase.id}
                className={`${styles.phaseDot} ${activePhase === phase.id ? styles.activeDot : ''}`}
                onClick={() => setActivePhase(phase.id)}
                style={{ backgroundColor: phase.color }}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
} 