import React, { useState, useEffect } from 'react';
import styles from './LoadingPage.module.css';

interface LoadingPageProps {
  onComplete: () => void;
  duration?: number; // Duración en milisegundos
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  onComplete, 
  duration = 2000 
}) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300); // Pequeña pausa antes de completar
          return 100;
        }
        return newProgress;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

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

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 800); // Más tiempo para leer las frases más largas

    // Establecer el primer texto inmediatamente
    setCurrentText(loadingTexts[0]);

    return () => clearInterval(textInterval);
  }, []);

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
          <div className={styles.progressText}>{progress}%</div>
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
