'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import styles from './HomeSection.module.css';
import { SteamWishlistButton, ReserveCopyButton, HeroCarousel, ContactForm } from '@/components';
import { removeWishlistCookie } from '@/lib/cookies';

// Cargas diferidas para reducir el JS inicial
const CharacterGallery = dynamic(() => import('@/components/CharacterGallery/CharacterGallery'), {
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
  const [particleMode, setParticleMode] = useState('auto'); // Controla el modo de partículas

  // Función para completar la carga
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleResetCookiesAndReturn = () => {
    removeWishlistCookie();
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
        duration={800}
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
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroStack} ${styles.fadeIn}`}>
            <h1 className={styles.heroTitle}>
              W.A.T.A:
            </h1>
            <h2 className={styles.heroSubtitle}>
              Where are the Alices?
            </h2>
          </div>

          <div className={`${styles.steamSectionInline} ${styles.fadeIn}`} style={{ ['--flow-duration']: `600ms` }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <HeroCarousel className={styles.enterContainer} />
              <SteamWishlistButton 
                className={`${styles.enterContainer} ${styles.enterWishlist}`}
                size="medium" 
                enabled={false}
              />
              <ReserveCopyButton
                className={`${styles.enterContainer} ${styles.enterWishlist}`}
                size="medium"
                enabled={true}
                href="https://forms.gle/i73jWkaX8JdcsE8r7"
                target="_blank"
              />

              {/* Concept Art (Formerly CharacterGallery) */}
              <CharacterGallery 
                className={`${styles.enterContainer} ${styles.enterGallery}`}
                layout="grid" 
                showTitles={true} 
                variant="heroInline"
                overrides={{
                  cbDesc: 'Did you know this white rabbit?',
                  junoDesc: 'A detective from Wonderland?',
                  expressionDesc: "He is odious, don't you think?",
                  duoDesc: 'They are adorable, I would love to see them together... oh, perhaps they already were?'
                }}
              />

              <Team
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

              {/* About Section */}
              <section id="about" className={`${styles.enterContainer} ${styles.aboutSection}`}>
                <h2 className={styles.gameplayTitle}>About the Project</h2>
                <div className={styles.aboutContent}>
                  <p className={styles.aboutText}>
                    W.A.T.A (Where Are The Alices?) is a psychological horror visual novel inspired by the twisted world of Alice in Wonderland. 
                    Dive into a noir detective story where sanity is a luxury and the truth is buried deep within the rabbit hole.
                  </p>
                  <p className={styles.aboutText}>
                    Developed by ZimmZimm Games, this project aims to deliver a unique experience blending political thriller elements, 
                    dark fantasy, and a deeply emotional narrative.
                  </p>
                </div>
              </section>

              {/* Contact Form */}
              <ContactForm className={styles.enterContainer} />

              <button
                className={`${styles.heroSubtitle} ${styles.heroCta} ${styles.enterContainer} ${styles.enterButton}`}
                onClick={handleResetCookiesAndReturn}
                aria-label="Return to Wonderland"
              >
                Return to Wonderland
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeSection;
