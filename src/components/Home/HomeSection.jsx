'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import styles from './HomeSection.module.css';
import { SteamWishlistButton, ReserveCopyButton } from '@/components';
import graph from '@/components/DialogueGame/dialogue.example.json';
import { getWishlistFromCookie, setWishlistCookie, removeWishlistCookie } from '@/lib/cookies';

// Cargas diferidas para reducir el JS inicial
const DialogueGame = dynamic(() => import('@/components/DialogueGame/DialogueGame'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: 200 }} aria-hidden="true" />,
});

const CharacterGallery = dynamic(() => import('@/components/CharacterGallery/CharacterGallery'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: 300 }} aria-hidden="true" />,
});

const GameplayBlock = dynamic(() => import('./GameplayBlock'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: 300 }} aria-hidden="true" />,
});

const Team = dynamic(() => import('@/components/Team/Team'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: 200 }} aria-hidden="true" />,
});

const LoadingPage = dynamic(() => import('@/components/LoadingPage/LoadingPage'), {
  ssr: false,
  loading: () => null,
});

const DustParticles = dynamic(() => import('./DustParticles'), {
  ssr: false,
  loading: () => null,
});

const ParticleControls = dynamic(() => import('./ParticleControls'), {
  ssr: false,
  loading: () => null,
});

const HomeSection = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showDialogue, setShowDialogue] = useState(false);
  const [showSteam, setShowSteam] = useState(false);
  const [dialogueFading, setDialogueFading] = useState(false);
  const FLOW_MS = 600; // duración unificada de fade in/out (ms)
  const [heroFading, setHeroFading] = useState(false);
  const [wishlistEnabled, setWishlistEnabled] = useState(false); // Controla si el wishlist está habilitado
  const [particleMode, setParticleMode] = useState('auto'); // Controla el modo de partículas

  const transitionKey = `${wishlistEnabled}-${showSteam}-${showDialogue}`;

  // Cargar estado del wishlist desde cookies al montar el componente
  useEffect(() => {
    const savedWishlistState = getWishlistFromCookie();
    if (savedWishlistState) {
      setWishlistEnabled(true);
      setShowSteam(true);
    }
  }, []);

  // Función para completar la carga
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Guardar estado del wishlist en cookies cuando cambie
  useEffect(() => {
    setWishlistCookie(wishlistEnabled);
  }, [wishlistEnabled]);

  const handleResetCookiesAndReturn = () => {
    removeWishlistCookie();
    setWishlistEnabled(false);
    setShowSteam(false);
    setShowDialogue(false);
    router.push('/');
  };

  // Función para manejar cambios en el modo de partículas
  const handleParticleModeChange = (mode) => {
    setParticleMode(mode);
  };
  // Mostrar página de carga si está cargando
  if (isLoading) {
    return (
      <LoadingPage 
        onComplete={handleLoadingComplete} 
        duration={2000}
        page="home"
        enablePreloading={true}
      />
    );
  }

  return (
    <main className={styles.homeContainer}>
      {/* Partículas de fondo */}
      <DustParticles mode={particleMode} />
      
      {/* Controles de partículas */}
      <ParticleControls 
        onPerformanceChange={handleParticleModeChange}
        currentMode={particleMode}
      />
      
      {/* Hero Section - Solo June Hare */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {!showDialogue && !wishlistEnabled && (
            <div className={`${styles.heroStack} ${heroFading ? styles.heroFadeOut : ''}`}>
              <h1 className={styles.heroTitle}>
                W.A.T.A:
              </h1>
              <h2 className={styles.heroSubtitle}>
                Where are the Alices?
              </h2>
              <button
                className={`${styles.heroSubtitle} ${styles.heroCta}`}
                onClick={() => {
                  setHeroFading(true);
                  setTimeout(() => setShowDialogue(true), FLOW_MS);
                }}
                aria-label="Enter the rabbit hole"
              >
                Enter the rabbit hole
              </button>
            </div>
          )}

          {wishlistEnabled && (
            <div className={`${styles.heroStack} ${styles.fadeIn}`}>
              <h1 className={styles.heroTitle}>
                W.A.T.A:
              </h1>
              <h2 className={styles.heroSubtitle}>
                Where are the Alices?
              </h2>
            </div>
          )}

          {showDialogue && (
            <div className={`${styles.dialogueInline} ${dialogueFading ? styles.fadeOut : styles.dialogueFadeIn}`} style={{ ['--flow-duration']: `${FLOW_MS}ms` }}>
              <DialogueGame
                graph={graph}
                onSkip={() => {
                  setDialogueFading(true);
                  setTimeout(() => {
                    setShowDialogue(false);
                    setShowSteam(true);
                    setWishlistEnabled(true); // Habilita automáticamente el wishlist
                  }, FLOW_MS);
                }}
              />
            </div>
          )}

          {(showSteam || wishlistEnabled) && (
            <div className={`${styles.steamSectionInline} ${styles.fadeIn}`} style={{ ['--flow-duration']: `${FLOW_MS}ms` }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <SteamWishlistButton 
                  key={`wl-${transitionKey}`}
                  className={`${styles.enterContainer} ${styles.enterWishlist}`}
                  size="medium" 
                  enabled={false}
                />
                <ReserveCopyButton
                  key={`reserve-${transitionKey}`}
                  className={`${styles.enterContainer} ${styles.enterWishlist}`}
                  size="medium"
                  enabled={true}
                  href="https://forms.gle/i73jWkaX8JdcsE8r7"
                  target="_blank"
                />
                <CharacterGallery 
                  key={`gal-${transitionKey}`}
                  className={`${styles.enterContainer} ${styles.enterGallery}`}
                  layout="grid" 
                  showTitles={false} 
                  variant="heroInline"
                  overrides={{
                    cbDesc: 'Did you know this white rabbit?',
                    junoDesc: 'A detective from Wonderland?',
                    expressionDesc: "He is odious, don't you think?",
                    duoDesc: 'They are adorable, I would love to see them together... oh, perhaps they already were?'
                  }}
                />
                {/* Gameplay showcase (below gallery, before team) */}
                <GameplayBlock key={`gameplay-${transitionKey}`} />
                <Team
                  key={`team-${transitionKey}`}
                  className={`${styles.enterContainer}`}
                  title="Team"
                  members={[
                    { name: 'Alex Zimmer', role: 'PM, Programmer and Writer', note: "Rabbit, femboy son of a bitch, my boy — so proud." },
                    { name: 'Lily', role: 'Translator', note: "I make cursed CB memes." },
                    { name: 'Pami', role: 'Literary Consultant', note: "I LOVE IT! Then I remember he's a politician and it goes away." },
                    { name: 'EveChan', role: 'Voice Actress: CB and Juno', note: "Look at this idiot, I want a PILLOW." },
                    { name: 'Father', role: 'Marketing and Post-Producer', note: "It's fine." },
                    { name: 'Yahjix', role: 'Lead Artist', note: "Yeah, right — 'warrior mom' Juno." },
                  ]}
                />
                <button
                  key={`btn-${transitionKey}`}
                  className={`${styles.heroSubtitle} ${styles.heroCta} ${styles.enterContainer} ${styles.enterButton}`}
                  onClick={handleResetCookiesAndReturn}
                  aria-label="Return to Wonderland"
                >
                  Return to Wonderland
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default HomeSection;
