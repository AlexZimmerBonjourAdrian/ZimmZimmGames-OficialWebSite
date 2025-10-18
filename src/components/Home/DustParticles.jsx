'use client';
import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 100;
const PARTICLE_MIN_SIZE = 0.7;
const PARTICLE_MAX_SIZE = 2.2;
const PARTICLE_MIN_SPEED = 0.10;
const PARTICLE_MAX_SPEED = 0.22;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const DustParticles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    // Inicializar partículas
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(PARTICLE_MIN_SIZE, PARTICLE_MAX_SIZE),
      speed: randomBetween(PARTICLE_MIN_SPEED, PARTICLE_MAX_SPEED),
      alpha: randomBetween(0.08, 0.18),
      drift: randomBetween(-0.08, 0.08),
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 4 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
        // Movimiento lento hacia arriba y leve deriva
        p.y -= p.speed;
        p.x += p.drift;
        // Si sale de pantalla, reaparece abajo
        if (p.y < -p.r) {
          p.y = height + p.r;
          p.x = randomBetween(0, width);
        }
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

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
      }}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
      aria-hidden="true"
    />
  );
};

export default DustParticles; 