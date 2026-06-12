'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import styles from './HomeSection.module.css';
import { HeroCarousel, ContactForm, SupportButtons } from '@/components';
import content from './content.json';
import links from './links.json';

// Deferred loading to reduce initial JS
const CharacterGallery = dynamic(() => import('@/components/CharacterGallery/CharacterGallery'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: 300 }} aria-hidden="true" />
});

const Team = dynamic(() => import('@/components/Team/Team'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: 200 }} aria-hidden="true" />
});

const HomeSection = () => {
  const router = useRouter();

  return (
    <main className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroStack} ${styles.fadeIn}`}>
            <h1 className={styles.heroTitle}>
              <img 
                src={content.site.logo} 
                alt={content.site.title} 
                className={styles.heroLogo}
              />
            </h1>
            <h2 className={styles.heroSubtitle}>
              {content.hero.subtitle}
            </h2>
          </div>

          <div className={`${styles.steamSectionInline} ${styles.fadeIn}`} style={{ ['--flow-duration']: `600ms` }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <HeroCarousel className={styles.enterContainer} />
              
              {/* Disabled Steam Wishlist Image */}
              <a 
                href={links.steam} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.enterContainer} ${styles.disabledWishlistContainer}`}
              >
                <img 
                  src={content.wishlist.image} 
                  alt={content.wishlist.altText} 
                  className={styles.disabledWishlistImage}
                />
                <div className={styles.comingSoonBadge}>{links.wishlistBadge}</div>
              </a>

              {/* Concept Art (Formerly CharacterGallery) */}
              <CharacterGallery 
                className={`${styles.enterContainer} ${styles.enterGallery}`}
                layout="grid" 
                showTitles={true} 
                variant="heroInline"
                overrides={{
                  cbDesc: content.characters.dominic,
                  junoDesc: content.characters.juno,
                  expressionDesc: content.characters.expression,
                  duoDesc: content.characters.duo
                }}
              />

              <Team
                className={`${styles.enterContainer}`}
              />

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