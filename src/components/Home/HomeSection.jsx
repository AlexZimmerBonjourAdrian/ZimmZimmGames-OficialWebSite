'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DustParticles from './DustParticles';
import styles from './HomeSection.module.css';
import { DialogueGame } from '@/components';
import { SteamWishlistButton, CharacterGallery, Team } from '@/components';
import LoadingPage from '@/components/LoadingPage';
import graph from '@/components/DialogueGame/dialogue.example.json';
import { getWishlistFromCookie, setWishlistCookie, removeWishlistCookie } from '@/lib/cookies';

const HomeSection = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showDialogue, setShowDialogue] = useState(false);
  const [showSteam, setShowSteam] = useState(false);
  const [dialogueFading, setDialogueFading] = useState(false);
  const FLOW_MS = 600; // duración unificada de fade in/out (ms)
  const [heroFading, setHeroFading] = useState(false);
  const [wishlistEnabled, setWishlistEnabled] = useState(false); // Controla si el wishlist está habilitado

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
  // Mostrar página de carga si está cargando
  if (isLoading) {
    return <LoadingPage onComplete={handleLoadingComplete} duration={2000} />;
  }

  return (
    <main className={styles.homeContainer}>
      {/* Partículas de fondo */}
      <DustParticles />
      
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
                  size="medium" 
                  enabled={wishlistEnabled}
                />
                <CharacterGallery 
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
                <Team
                  title="Team"
                  members={[
                    { name: 'Alex Zimmer', role: 'PM, Programmer and Writer', note: "Rabbit, femboy son of a bitch, my boy — so proud." },
                    { name: 'Lily', role: 'Translator', note: "I make sappy CB memes." },
                    { name: 'Pami', role: 'Literary Consultant', note: "I didn't know being experts at writing rabbits would be useful — poor thing." },
                    { name: 'EveChan', role: 'Voice Actress: CB and Juno', note: "Look at this idiot, I want a PILLOW." },
                    { name: 'Father', role: 'Marketing and Post-Producer', note: "It's fine." },
                    { name: 'Yahjix', role: 'Lead Artist', note: "Yeah, right — 'warrior mom' Juno." },
                  ]}
                />
                <button
                  className={`${styles.heroSubtitle} ${styles.heroCta}`}
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
