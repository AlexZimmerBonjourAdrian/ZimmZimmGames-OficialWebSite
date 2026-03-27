'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import styles from './HomeSection.module.css';
import { HeroCarousel, ContactForm, SupportButtons } from '@/components';

// Deferred loading to reduce initial JS
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
  const [particleMode, setParticleMode] = useState('auto'); // Controls particle mode

  // Function to complete loading
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Function to handle changes in particle mode
  const handleParticleModeChange = (mode) => {
    setParticleMode(mode);
  };

  // Show loading page if loading
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
      {/* Background particles */}
      <DustParticles mode={particleMode} />
      
      {/* Particle controls */}
      <ParticleControls 
        onPerformanceChange={handleParticleModeChange}
        currentMode={particleMode}
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroStack} ${styles.fadeIn}`}>
            <h1 className={styles.heroTitle}>
              <img 
                src="/Steam/Capsulas de Steam/Título del juego/titulo-wata-editable.png" 
                alt="W.A.T.A" 
                className={styles.heroLogo}
              />
            </h1>
            <h2 className={styles.heroSubtitle}>
              Where are the Alices?
            </h2>
          </div>

          <div className={`${styles.steamSectionInline} ${styles.fadeIn}`} style={{ ['--flow-duration']: `600ms` }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <HeroCarousel className={styles.enterContainer} />
              
              {/* Disabled Steam Wishlist Image */}
              <div className={`${styles.enterContainer} ${styles.disabledWishlistContainer}`}>
                <img 
                  src="/WishList/WishList.png" 
                  alt="Wishlist on Steam" 
                  className={styles.disabledWishlistImage}
                />
                <div className={styles.comingSoonBadge}>Demo - June 2026</div>
              </div>

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
                  <div className={styles.projectDetail}>
                    <p className={styles.aboutText}><strong>You are Detective Juno Hare.</strong></p>
                    <p className={styles.aboutText}>
                      He is the White Rabbit — charming, sadistic, and the only one who knows where Alicia is… because he was once part of your life.
                    </p>
                    <p className={styles.aboutText}>
                      Each case is a single, uninterrupted 60-minute real-time interrogation. No pauses. No rewinds. Every word, every silence, every raised voice can break you both.
                    </p>
                  </div>

                  <div className={styles.projectDetail}>
                    <h3 className={styles.detailTitle}>60-MINUTE REAL-TIME PSYCHOLOGICAL DUEL</h3>
                    <p className={styles.aboutText}>
                      Choose your style: confront him head-on, expose contradictions, or exploit your shared traumatic past.
                    </p>
                    <p className={styles.aboutText}>
                      Spot lies in real time and decide exactly when — and how hard — to press.
                    </p>
                    <p className={styles.aboutText}>
                      Manage Juno’s emotional state as it deteriorates: <strong>Tensed → Vulnerable → Broken.</strong>
                    </p>
                    <p className={styles.aboutText}>
                      He knows your trauma intimately… and he will weaponize it against you without mercy.
                    </p>
                  </div>

                  <div className={styles.projectDetail}>
                    <h3 className={styles.detailTitle}>KEMONO-NOIR THRILLER</h3>
                    <p className={styles.aboutText}>
                      Dark anime aesthetics collide with gritty noir. Anthropomorphic characters with deadly secrets. A world where “cute” has never looked so dangerous.
                    </p>
                  </div>

                  <div className={styles.projectDetail}>
                    <h3 className={styles.detailTitle}>ONE STORY. EIGHT INTERCONNECTED CASES</h3>
                    <p className={styles.aboutText}>
                      Uncover the mystery behind multiple Alicias in a connected 8-case miniseries.
                    </p>
                    <p className={styles.aboutText}>
                      Your choices create branching suspects, shocking revelations, and 8+ endings per case.
                    </p>
                    <p className={styles.aboutText}>
                      Cases 1 & 2 available now in Early Access. Your feedback will shape the final six.
                    </p>
                  </div>

                  <div className={styles.projectDetail}>
                    <h3 className={styles.detailTitle}>TIME IS THE REAL ENEMY</h3>
                    <p className={styles.aboutText}>
                      Visible countdown. The Rabbit fights back with psychological warfare and intimate knowledge of your pain.
                    </p>
                    <p className={styles.aboutText}>
                      Lose control… lose the case… and maybe lose yourself.
                    </p>
                  </div>

                  <div className={styles.warningBox}>
                    <p className={styles.warningText}>
                      This game contains explicit violence, murder, blood and gore, strong language, and intense psychological themes (including trauma and mental breakdown). Intended for mature audiences (18+). All content is fictional.
                    </p>
                  </div>

                  <div className={styles.featuresList}>
                    <h3 className={styles.detailTitle}>Features</h3>
                    <ul className={styles.aboutText}>
                      <li>60-minute real-time interrogations (one per case)</li>
                      <li>Deep emotional state system for Juno (Tensed / Vulnerable / Broken)</li>
                      <li>Dynamic contradiction detection & pressure choices</li>
                      <li>Branching 8-case story with 8+ endings per case</li>
                      <li>Connected miniseries narrative</li>
                      <li>Kemono-noir cinematic art style + planned full voice acting</li>
                      <li>Singleplayer</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact Form */}
              <ContactForm className={styles.enterContainer} />

              {/* Support Buttons */}
              <SupportButtons className={styles.enterContainer} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeSection;
