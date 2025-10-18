'use client';

import React, { useEffect, useState } from 'react';
import { ResourcePreloader, criticalResources, pagePreloadConfigs } from '@/lib/preloader';

interface PreloadManagerProps {
  children: React.ReactNode;
  page?: 'home' | 'wata';
  enablePreloading?: boolean;
  onPreloadComplete?: () => void;
}

const PreloadManager: React.FC<PreloadManagerProps> = ({
  children,
  page = 'home',
  enablePreloading = true,
  onPreloadComplete
}) => {
  const [isPreloading, setIsPreloading] = useState(enablePreloading);
  const [preloadProgress, setPreloadProgress] = useState(0);

  useEffect(() => {
    if (!enablePreloading) {
      setIsPreloading(false);
      return;
    }

    const config = pagePreloadConfigs[page] || criticalResources;
    const preloader = new ResourcePreloader(
      (progress) => {
        setPreloadProgress(progress);
      },
      () => {
        setIsPreloading(false);
        onPreloadComplete?.();
      }
    );

    preloader.startPreloading(config);

    return () => {
      // Cleanup si es necesario
    };
  }, [enablePreloading, page, onPreloadComplete]);

  // Mostrar indicador de preloading si está activo
  if (isPreloading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        color: 'white',
        fontFamily: 'var(--font-courier)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Preloading resources... {preloadProgress}%
          </div>
          <div style={{
            width: '200px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${preloadProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #4A90E2, #66c0f4)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadManager;
