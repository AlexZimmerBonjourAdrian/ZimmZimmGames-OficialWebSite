'use client';

import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [fade, setFade] = useState('in');
  const doorRef = useRef(null);

  // Fade in on mount
  useEffect(() => {
    setFade('in');
  }, []);

  // Navegar con fade out
  const handleKnobClick = () => {
    setFade('out');
    setTimeout(() => {
      router.push('/wata');
    }, 350); // Duración del fade out
  };

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden bg-black transition-opacity duration-350 ${fade === 'out' ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Partículas de suciedad */}
      {/* <ParticlesDust />  // Componente a crear */}

      {/* Imagen de la puerta */}
      <Image
        src="/images/Wata/Door.PNG"
        alt="Puerta"
        fill
        style={{ objectFit: 'cover', zIndex: 1 }}
        priority
        ref={doorRef}
      />
      {/* Botón invisible sobre el picaporte */}
      <button
        aria-label="Abrir puerta"
        onClick={handleKnobClick}
        style={{
          position: 'absolute',
          left: '62%', // Ajustar según la posición real del picaporte
          top: '62%',
          width: '6%',
          height: '12%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 2,
        }}
      />
      {/* Opcional: overlay para oscurecer bordes o ambientar */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />
    </div>
  );
}
