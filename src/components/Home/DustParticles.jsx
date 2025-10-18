'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

// Configuración optimizada - menos partículas y mejor rendimiento
const PARTICLE_COUNT = 50; // Reducido de 100 a 50
const PARTICLE_MIN_SIZE = 0.8;
const PARTICLE_MAX_SIZE = 2.0;
const PARTICLE_MIN_SPEED = 0.08;
const PARTICLE_MAX_SPEED = 0.18;

// Configuración de rendimiento
const PERFORMANCE_MODES = {
  HIGH: { particles: 50, quality: 'high' },
  MEDIUM: { particles: 30, quality: 'medium' },
  LOW: { particles: 15, quality: 'low' }
};

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

// Detectar rendimiento del dispositivo
function getPerformanceMode() {
  if (typeof window === 'undefined') return PERFORMANCE_MODES.MEDIUM;
  
  // Detectar dispositivos de bajo rendimiento
  const isLowEnd = navigator.hardwareConcurrency <= 2 || 
                   navigator.deviceMemory <= 4 ||
                   /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isLowEnd) return PERFORMANCE_MODES.LOW;
  
  // Detectar si hay throttling de batería
  if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
      if (battery.level < 0.2) return PERFORMANCE_MODES.LOW;
    });
  }
  
  return PERFORMANCE_MODES.MEDIUM;
}

const DustParticles = ({ mode = 'auto' }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationId = useRef(null);
  const lastTime = useRef(0);
  const frameCount = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [performanceMode, setPerformanceMode] = useState(PERFORMANCE_MODES.MEDIUM);

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

  // Detectar modo de rendimiento
  useEffect(() => {
    if (mode === 'disabled') {
      setPerformanceMode({ particles: 0, quality: 'disabled' });
    } else if (mode === 'auto') {
      setPerformanceMode(getPerformanceMode());
    } else {
      setPerformanceMode(PERFORMANCE_MODES[mode.toUpperCase()] || PERFORMANCE_MODES.MEDIUM);
    }
  }, [mode]);

  // Función optimizada de renderizado
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

    // Throttling de frames para dispositivos de bajo rendimiento
    if (performanceMode === PERFORMANCE_MODES.LOW && currentTime - lastTime.current < 1000 / 30) {
      animationId.current = requestAnimationFrame(draw);
      return;
    }

    lastTime.current = currentTime;
    frameCount.current++;

    // Limpiar canvas de forma optimizada
    ctx.clearRect(0, 0, width, height);

    // Renderizar partículas en lotes para mejor rendimiento
    const batchSize = performanceMode === PERFORMANCE_MODES.LOW ? 5 : 10;
    
    for (let i = 0; i < particles.current.length; i += batchSize) {
      const batch = particles.current.slice(i, i + batchSize);
      
      // Configurar contexto una vez por lote
      ctx.save();
      ctx.fillStyle = '#fff';
      
      if (performanceMode !== PERFORMANCE_MODES.LOW) {
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
      }

      for (let p of batch) {
        // Solo renderizar si está en pantalla
        if (p.x > -p.r && p.x < width + p.r && p.y > -p.r && p.y < height + p.r) {
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // Actualizar posición
        p.y -= p.speed;
        p.x += p.drift;

        // Wrap around
        if (p.y < -p.r) {
          p.y = height + p.r;
          p.x = randomBetween(0, width);
        }
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
      }
      
      ctx.restore();
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

    // Inicializar partículas según el modo de rendimiento
    const particleCount = performanceMode.particles;
    particles.current = Array.from({ length: particleCount }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(PARTICLE_MIN_SIZE, PARTICLE_MAX_SIZE),
      speed: randomBetween(PARTICLE_MIN_SPEED, PARTICLE_MAX_SPEED),
      alpha: randomBetween(0.08, 0.18),
      drift: randomBetween(-0.08, 0.08),
    }));

    // Iniciar animación
    animationId.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
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