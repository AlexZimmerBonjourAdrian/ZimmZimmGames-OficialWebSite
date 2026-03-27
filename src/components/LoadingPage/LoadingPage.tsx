'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './LoadingPage.module.css';
import { ResourcePreloader, criticalResources, pagePreloadConfigs } from '@/lib/preloader';

interface LoadingPageProps {
  onComplete: () => void;
  duration?: number; // Duración mínima en milisegundos
  page?: 'home' | 'wata'; // Página específica para preloading
  enablePreloading?: boolean; // Habilitar preloading real
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  onComplete, 
  duration = 2000,
  page = 'home',
  enablePreloading = true
}) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isPreloading, setIsPreloading] = useState(enablePreloading);
  const [preloadProgress, setPreloadProgress] = useState(0);
  const preloaderRef = useRef<ResourcePreloader | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Configuración de recursos según la página
  const getPreloadConfig = () => {
    return pagePreloadConfigs[page] || criticalResources;
  };

  useEffect(() => {
    if (!enablePreloading) {
      // Fallback al comportamiento original si no hay preloading
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 2;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 300);
            return 100;
          }
          return newProgress;
        });
      }, duration / 50);

      return () => clearInterval(interval);
    }

    // Iniciar preloading real
    const config = getPreloadConfig();
    preloaderRef.current = new ResourcePreloader(
      (progress) => {
        setPreloadProgress(progress);
        // Combinar progreso de preloading con progreso mínimo
        const minProgress = Math.min(progress, 90); // Máximo 90% hasta completar preloading
        setProgress(minProgress);
      },
      () => {
        setIsPreloading(false);
        // Completar hasta 100% después del preloading
        setProgress(100);
        // Asegurar duración mínima
        const elapsed = Date.now() - startTimeRef.current;
        const remainingTime = Math.max(0, duration - elapsed);
        setTimeout(onComplete, Math.max(remainingTime, 300));
      }
    );

    preloaderRef.current.startPreloading(config);

    return () => {
      preloaderRef.current = null;
    };
  }, [duration, onComplete, enablePreloading, page]);

  useEffect(() => {
    const loadingTexts = [
      // White Rabbit Quotes
      "Oh dear! Oh dear! I shall be too late!",
      "Oh, my fur and whiskers! I'm late, I'm late, I'm late!",
      "The Duchess! The Duchess! Oh my dear paws! Oh my fur and whiskers!",
      
      // Alice Quotes
      "How long is forever? Sometimes, just one second.",
      "Sometimes I've believed as many as six impossible things before breakfast.",
      "If you don't know where you are going, any road will get you there.",
      "Imagination is the only weapon in the war against reality.",
      "I'm afraid so. You're entirely bonkers. But I'll tell you a secret. All the best people are.",
      
      // Cheshire Cat Quotes
      "We're all mad here. I'm mad. You're mad.",
      "How do you know I'm mad? -said Alice. -You must be, -said the Cat, -or you wouldn't have come here.",
      "Always get to somewhere if you only walk far enough.",
      
      // Queen of Hearts Quotes
      "Off with her head!",
      "Here everyone wins and all have prizes!",
      "Before I'm finished with the sentence, off with his head!",
      
      // General Book Quotes
      "Curiouser and curiouser...",
      "What a strange world we live in...",
      "In Wonderland, everything is possible.",
      "Who are YOU? -said the Caterpillar.",
      "Eat me! -said the Caterpillar, pointing to the mushroom.",
      
      // Transition Phrases
      "Descending through the rabbit hole...",
      "Finding Wonderland...",
      "Preparing the most curious adventure...",
      "Almost ready for the madness..."
    ];

    // Preloading specific texts
    const preloadTexts = [
      "Loading images from Wonderland...",
      "Preparing the magic fonts...",
      "Downloading Alice's secrets...",
      "Loading the most curious characters...",
      "Preparing the visual experience...",
      "Almost ready for the adventure..."
    ];

    const allTexts = enablePreloading ? [...preloadTexts, ...loadingTexts] : loadingTexts;

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = allTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % allTexts.length;
        return allTexts[nextIndex];
      });
    }, enablePreloading ? 600 : 800); // Más rápido durante preloading

    // Establecer el primer texto inmediatamente
    setCurrentText(allTexts[0]);

    return () => clearInterval(textInterval);
  }, [enablePreloading]);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        {/* Logo/Título */}
        <div className={styles.logoContainer}>
          <img 
            src="/Steam/Capsulas de Steam/Título del juego/titulo-wata-editable.png" 
            alt="W.A.T.A" 
            className={styles.logoImage}
          />
          <div className={styles.logoSubtitle}>Where are the Alices?</div>
        </div>

        {/* Barra de progreso */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.progressText}>
            {progress}%
            {enablePreloading && isPreloading && (
              <span className={styles.preloadIndicator}>
                {' '}(Preloading: {preloadProgress}%)
              </span>
            )}
          </div>
        </div>

        {/* Texto de carga */}
        <div className={styles.loadingText}>
          {currentText}
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;
