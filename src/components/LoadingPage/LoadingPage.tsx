'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './LoadingPage.module.css';
import { ResourcePreloader, criticalResources, pagePreloadConfigs } from '@/lib/preloader';
import content from './content.json';

interface LoadingPageProps {
  onComplete: () => void;
  page?: 'home' | 'wata'; // Página específica para preloading
  enablePreloading?: boolean; // Habilitar preloading real
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  onComplete, 
  page = 'home',
  enablePreloading = false // Default to false for faster load
}) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<ResourcePreloader | null>(null);

  // Configuración de recursos según la página
  const getPreloadConfig = () => {
    return pagePreloadConfigs[page] || criticalResources;
  };

  useEffect(() => {
    if (!enablePreloading) {
      // No artificial delay - complete immediately
      setProgress(100);
      onComplete();
      return;
    }

    // Iniciar preloading real, no artificial delay
    const config = getPreloadConfig();
    preloaderRef.current = new ResourcePreloader(
      (progress) => {
        setProgress(progress);
      },
      () => {
        setProgress(100);
        onComplete(); // Complete immediately when preloading is done
      }
    );

    preloaderRef.current.startPreloading(config);

    return () => {
      preloaderRef.current = null;
    };
  }, [onComplete, enablePreloading, page]);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        {/* Logo/Título */}
        <div className={styles.logoContainer}>
          <img 
            src={content.site.logo} 
            alt={content.site.title} 
            className={styles.logoImage}
          />
          <div className={styles.logoSubtitle}>{content.hero.subtitle}</div>
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
            {progress}{content.progressText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;