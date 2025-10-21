'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { usePerformanceMonitor, usePowerSaveMode, usePageVisibility } from '@/hooks/usePerformanceMonitor';

// Configuración optimizada - menos partículas y mejor rendimiento
const PARTICLE_COUNT = 50; // Reducido de 100 a 50
const PARTICLE_MIN_SIZE = 0.8;
const PARTICLE_MAX_SIZE = 2.0;
const PARTICLE_MIN_SPEED = 0.08;
const PARTICLE_MAX_SPEED = 0.18;

// Configuración de rendimiento optimizada para CPU
const PERFORMANCE_MODES = {
  HIGH: { particles: 30, quality: 'high', updateFreq: 1, batchSize: 10 },
  MEDIUM: { particles: 20, quality: 'medium', updateFreq: 2, batchSize: 8 },
  LOW: { particles: 10, quality: 'low', updateFreq: 3, batchSize: 5 },
  ULTRA_LOW: { particles: 5, quality: 'ultra_low', updateFreq: 4, batchSize: 3 }
};

// Object pool para reutilizar objetos de partículas
class ParticlePool {
  constructor(size) {
    this.pool = Array.from({ length: size }, () => ({
      x: 0, y: 0, r: 0, speed: 0, alpha: 0, drift: 0, active: false
    }));
    this.available = [...this.pool];
  }

  get() {
    if (this.available.length === 0) {
      // Si no hay disponibles, crear uno nuevo
      return { x: 0, y: 0, r: 0, speed: 0, alpha: 0, drift: 0, active: true };
    }
    const particle = this.available.pop();
    particle.active = true;
    return particle;
  }

  release(particle) {
    particle.active = false;
    this.available.push(particle);
  }
}

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

// Detectar rendimiento del dispositivo - optimizado para CPU
function getPerformanceMode() {
  if (typeof window === 'undefined') return PERFORMANCE_MODES.LOW;
  
  // Detectar dispositivos de muy bajo rendimiento
  const isUltraLowEnd = navigator.hardwareConcurrency <= 2 || 
                        navigator.deviceMemory <= 2 ||
                        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isUltraLowEnd) return PERFORMANCE_MODES.ULTRA_LOW;
  
  // Detectar dispositivos de bajo rendimiento
  const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                   navigator.deviceMemory <= 4;
  
  if (isLowEnd) return PERFORMANCE_MODES.LOW;
  
  // Detectar si hay throttling de batería
  if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
      if (battery.level < 0.3) return PERFORMANCE_MODES.LOW;
      if (battery.level < 0.1) return PERFORMANCE_MODES.ULTRA_LOW;
    });
  }
  
  // Detectar si el usuario prefiere ahorro de batería
  if (navigator.connection) {
    const connection = navigator.connection;
    if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return PERFORMANCE_MODES.ULTRA_LOW;
    }
  }
  
  return PERFORMANCE_MODES.MEDIUM;
}

// Función optimizada para cálculos matemáticos
const mathUtils = {
  // Pre-calcular valores comunes
  TWO_PI: Math.PI * 2,
  
  // Función optimizada para random
  random: (() => {
    let seed = Date.now();
    return (min, max) => {
      seed = (seed * 9301 + 49297) % 233280;
      return min + (seed / 233280) * (max - min);
    };
  })(),
  
  // Función optimizada para wrap around
  wrap: (value, min, max) => {
    if (value < min) return max;
    if (value > max) return min;
    return value;
  }
};

const DustParticles = ({ mode = 'auto' }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const particlePool = useRef(null);
  const animationId = useRef(null);
  const lastTime = useRef(0);
  const frameCount = useRef(0);
  const updateCounter = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [performanceMode, setPerformanceMode] = useState(PERFORMANCE_MODES.MEDIUM);
  
  // Variables para optimización de CPU
  const isIdle = useRef(false);
  const pendingUpdates = useRef([]);
  const lastIdleTime = useRef(0);
  
  // Hooks de monitoreo de rendimiento
  const { performanceLevel: monitoredLevel, getCurrentFPS } = usePerformanceMonitor(30);
  const isPowerSaveMode = usePowerSaveMode();
  const isPageVisible = usePageVisibility();

  // Detectar si el elemento está visible (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Detectar modo de rendimiento con monitoreo automático
  useEffect(() => {
    if (mode === 'disabled') {
      setPerformanceMode({ particles: 0, quality: 'disabled' });
    } else if (mode === 'auto') {
      // Usar monitoreo automático si está disponible, sino usar detección estática
      const autoMode = monitoredLevel || getPerformanceMode();
      setPerformanceMode(PERFORMANCE_MODES[autoMode.toUpperCase()] || PERFORMANCE_MODES.MEDIUM);
    } else {
      setPerformanceMode(PERFORMANCE_MODES[mode.toUpperCase()] || PERFORMANCE_MODES.MEDIUM);
    }
  }, [mode, monitoredLevel]);

  // Ajustar automáticamente según el modo de ahorro de energía
  useEffect(() => {
    if (isPowerSaveMode && mode === 'auto') {
      setPerformanceMode(PERFORMANCE_MODES.ULTRA_LOW);
    }
  }, [isPowerSaveMode, mode]);

  // Pausar cuando la página no es visible
  useEffect(() => {
    if (!isPageVisible && mode !== 'disabled') {
      // Reducir drásticamente el rendimiento cuando no es visible
      setPerformanceMode(PERFORMANCE_MODES.ULTRA_LOW);
    }
  }, [isPageVisible, mode]);

  // Función optimizada de renderizado con ahorro de CPU
  const draw = useCallback((currentTime) => {
    if (!isVisible) {
      animationId.current = requestAnimationFrame(draw);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Throttling agresivo para ahorro de CPU
    const targetFPS = performanceMode === PERFORMANCE_MODES.ULTRA_LOW ? 15 : 
                     performanceMode === PERFORMANCE_MODES.LOW ? 20 : 30;
    
    if (currentTime - lastTime.current < 1000 / targetFPS) {
      animationId.current = requestAnimationFrame(draw);
      return;
    }

    lastTime.current = currentTime;
    frameCount.current++;
    updateCounter.current++;

    // Solo actualizar partículas cada N frames para ahorrar CPU
    const shouldUpdateParticles = updateCounter.current % performanceMode.updateFreq === 0;

    // Limpiar canvas de forma optimizada
    ctx.clearRect(0, 0, width, height);

    // Renderizar partículas en lotes optimizados
    const batchSize = performanceMode.batchSize;
    
    for (let i = 0; i < particles.current.length; i += batchSize) {
      const batch = particles.current.slice(i, i + batchSize);
      
      // Configurar contexto una vez por lote
      ctx.save();
      ctx.fillStyle = '#fff';
      
      // Solo aplicar sombras en modo alto
      if (performanceMode.quality === 'high') {
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 6;
      }

      for (let p of batch) {
        // Solo renderizar si está en pantalla (culling optimizado)
        if (p.x > -p.r && p.x < width + p.r && p.y > -p.r && p.y < height + p.r) {
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, mathUtils.TWO_PI);
          ctx.fill();
        }

        // Actualizar posición solo cuando es necesario
        if (shouldUpdateParticles) {
          p.y -= p.speed;
          p.x += p.drift;

          // Wrap around optimizado
          if (p.y < -p.r) {
            p.y = height + p.r;
            p.x = mathUtils.random(0, width);
          }
          if (p.x < -p.r) p.x = width + p.r;
          if (p.x > width + p.r) p.x = -p.r;
        }
      }
      
      ctx.restore();
    }

    // Usar requestIdleCallback para cálculos no críticos
    if (shouldUpdateParticles && window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        // Cálculos adicionales cuando el navegador está inactivo
        if (performanceMode.quality === 'high') {
          // Ajustar alpha basado en distancia del centro
          const centerX = width / 2;
          const centerY = height / 2;
          
          for (let p of particles.current) {
            const distance = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
            const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
            p.alpha = Math.max(0.05, 0.2 * (1 - distance / maxDistance));
          }
        }
      }, { timeout: 100 });
    }

    animationId.current = requestAnimationFrame(draw);
  }, [isVisible, performanceMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configurar canvas con DPI optimizado
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    // Función de resize optimizada con debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.scale(dpr, dpr);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Inicializar object pool y partículas
    const particleCount = performanceMode.particles;
    particlePool.current = new ParticlePool(particleCount * 2); // Pool más grande para reutilización
    
    // Limpiar partículas existentes
    if (particles.current.length > 0) {
      particles.current.forEach(p => particlePool.current?.release(p));
    }
    
    // Crear nuevas partículas usando el pool
    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      const particle = particlePool.current.get();
      particle.x = mathUtils.random(0, width);
      particle.y = mathUtils.random(0, height);
      particle.r = mathUtils.random(PARTICLE_MIN_SIZE, PARTICLE_MAX_SIZE);
      particle.speed = mathUtils.random(PARTICLE_MIN_SPEED, PARTICLE_MAX_SPEED);
      particle.alpha = mathUtils.random(0.08, 0.18);
      particle.drift = mathUtils.random(-0.08, 0.08);
      particles.current.push(particle);
    }

    // Iniciar animación
    animationId.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      
      // Limpiar object pool
      if (particlePool.current && particles.current.length > 0) {
        particles.current.forEach(p => particlePool.current.release(p));
      }
    };
  }, [performanceMode, draw]);

  // No renderizar si las partículas están deshabilitadas
  if (mode === 'disabled' || performanceMode.particles === 0) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        willChange: 'transform', // Optimización para GPU
        transform: 'translateZ(0)', // Forzar aceleración por hardware
      }}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
      aria-hidden="true"
    />
  );
};

export default DustParticles; 