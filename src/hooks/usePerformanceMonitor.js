'use client';
import { useEffect, useRef, useState } from 'react';

// Hook para monitorear el rendimiento y ajustar automáticamente
export const usePerformanceMonitor = (targetFPS = 30) => {
  const [performanceLevel, setPerformanceLevel] = useState('medium');
  const frameCount = useRef(0);
  const lastTime = useRef(0);
  const fpsHistory = useRef([]);
  const isMonitoring = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measureFPS = (currentTime) => {
      if (!isMonitoring.current) return;

      frameCount.current++;
      
      if (currentTime - lastTime.current >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
        
        // Mantener historial de FPS
        fpsHistory.current.push(fps);
        if (fpsHistory.current.length > 10) {
          fpsHistory.current.shift();
        }
        
        // Calcular FPS promedio
        const avgFPS = fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length;
        
        // Ajustar nivel de rendimiento basado en FPS
        if (avgFPS < targetFPS * 0.5) {
          setPerformanceLevel('ultra_low');
        } else if (avgFPS < targetFPS * 0.7) {
          setPerformanceLevel('low');
        } else if (avgFPS < targetFPS * 0.9) {
          setPerformanceLevel('medium');
        } else {
          setPerformanceLevel('high');
        }
        
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Iniciar monitoreo
    isMonitoring.current = true;
    lastTime.current = performance.now();
    requestAnimationFrame(measureFPS);

    return () => {
      isMonitoring.current = false;
    };
  }, [targetFPS]);

  const startMonitoring = () => {
    isMonitoring.current = true;
  };

  const stopMonitoring = () => {
    isMonitoring.current = false;
  };

  const getCurrentFPS = () => {
    if (fpsHistory.current.length === 0) return 0;
    return fpsHistory.current[fpsHistory.current.length - 1];
  };

  const getAverageFPS = () => {
    if (fpsHistory.current.length === 0) return 0;
    return fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length;
  };

  return {
    performanceLevel,
    startMonitoring,
    stopMonitoring,
    getCurrentFPS,
    getAverageFPS,
    isMonitoring: isMonitoring.current
  };
};

// Hook para detectar si el dispositivo está en modo de ahorro de energía
export const usePowerSaveMode = () => {
  const [isPowerSaveMode, setIsPowerSaveMode] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detectar modo de ahorro de energía
    const checkPowerSaveMode = () => {
      let powerSave = false;

      // Detectar si el usuario prefiere ahorro de batería
      if (navigator.connection) {
        const connection = navigator.connection;
        powerSave = connection.saveData || 
                   connection.effectiveType === 'slow-2g' || 
                   connection.effectiveType === '2g';
      }

      // Detectar nivel de batería
      if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
          if (battery.level < 0.2) {
            powerSave = true;
          }
          setIsPowerSaveMode(powerSave);
        });
      } else {
        setIsPowerSaveMode(powerSave);
      }
    };

    checkPowerSaveMode();

    // Escuchar cambios en la conexión
    if (navigator.connection) {
      navigator.connection.addEventListener('change', checkPowerSaveMode);
    }

    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', checkPowerSaveMode);
      }
    };
  }, []);

  return isPowerSaveMode;
};

// Hook para detectar si la página está en segundo plano
export const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
};
