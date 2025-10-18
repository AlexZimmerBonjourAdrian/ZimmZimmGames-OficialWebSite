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
      // Frases del Conejo Blanco
      "¡Dios mío! ¡Dios mío! ¡Voy a llegar tarde!",
      "¡Oh, mi pelo y mis bigotes! ¡Qué tarde se está haciendo!",
      "¡La Duquesa! ¡La Duquesa! ¡Oh, mi querida! ¡Oh, mi querida!",
      
      // Frases de Alicia
      "¿Cuánto tiempo es para siempre? A veces, solo un segundo.",
      "A veces pienso hasta seis cosas imposibles antes del desayuno.",
      "Si no sabes a dónde vas, cualquier camino te llevará allí.",
      "La imaginación es la única arma en la guerra contra la realidad.",
      "Creo que sí, que has perdido la cabeza, estás completamente loco. Pero te diré un secreto: las mejores personas lo están.",
      
      // Frases del Gato de Cheshire
      "Todos estamos locos aquí. Yo estoy loco. Tú estás loca.",
      "¿Cómo sabes que estoy loca? -preguntó Alicia. -Debes estarlo -dijo el Gato- o no habrías venido aquí.",
      "Siempre llegas a alguna parte si caminas lo suficiente.",
      
      // Frases de la Reina de Corazones
      "¡Que le corten la cabeza!",
      "¡Aquí todos ganan y todos tienen premios!",
      "¡Antes de que termine la frase, que le corten la cabeza!",
      
      // Frases generales del libro
      "Curioser y curioser...",
      "¡Qué extraño es todo hoy!",
      "En el País de las Maravillas, todo es posible.",
      "¿Quién eres tú? -preguntó la Oruga.",
      "¡Come de mí! -dijo la Oruga, señalando el hongo.",
      
      // Frases de transición
      "Descendiendo por la madriguera del conejo...",
      "Encontrando el País de las Maravillas...",
      "Preparando la aventura más curiosa...",
      "Casi listo para la locura..."
    ];

    // Textos específicos para preloading
    const preloadTexts = [
      "Cargando imágenes del País de las Maravillas...",
      "Preparando las fuentes mágicas...",
      "Descargando los secretos de Alicia...",
      "Cargando los personajes más curiosos...",
      "Preparando la experiencia visual...",
      "Casi listo para la aventura..."
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
          <h1 className={styles.logo}>W.A.T.A</h1>
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
