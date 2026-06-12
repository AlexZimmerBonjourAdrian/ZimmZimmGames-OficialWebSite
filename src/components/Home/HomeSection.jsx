'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './HomeSection.module.css';
import { HeroCarousel, ContactForm, SupportButtons, ItchioEmbed, Platforms } from '@/components';
import content from './content.json';
import links from './links.json';

const CharacterGallery = dynamic(() => import('@/components/CharacterGallery/CharacterGallery'), {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: 300 }} aria-hidden="true" />,
});

const Team = dynamic(() => import('@/components/Team/Team'), {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: 200 }} aria-hidden="true" />,
});

const HomeSection = () => {
    return (
        <main className={styles.homeContainer}>
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
                        <h2 className={styles.heroSubtitle}>{content.hero.subtitle}</h2>
                    </div>

                    <div className={`${styles.steamSectionInline} ${styles.fadeIn}`} style={{ ['--flow-duration']: '600ms' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                            <HeroCarousel className={styles.enterContainer} />

                            <a
                                href={links.steam}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.enterContainer} ${styles.wishlistButton}`}
                            >
                                <img
                                    src={content.wishlist.image}
                                    alt={content.wishlist.altText}
                                    className={styles.wishlistImage}
                                />
                            </a>

                            <ItchioEmbed className={`${styles.enterContainer}`} />

                            <Platforms className={styles.enterContainer} />

                            <section id="gameplay" className={`${styles.enterContainer} ${styles.gameplaySection}`}>
                                <h3 className={styles.sectionTitle}>{content.gameplay.title}</h3>
                                <div className={styles.gameplayGrid}>
                                    {content.gameplay.items.map((item) => (
                                        <div key={item.id} className={styles.gameplayCard}>
                                            <div className={styles.gameplayImageContainer}>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className={styles.gameplayImage}
                                                />
                                            </div>
                                            <div className={styles.gameplayInfo}>
                                                <h4 className={styles.gameplayCardTitle}>{item.title}</h4>
                                                <p className={styles.gameplayDescription}>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>



                            <CharacterGallery
                                className={`${styles.enterContainer} ${styles.enterGallery}`}
                                layout="grid"
                                showTitles={true}
                                variant="heroInline"
                                overrides={{
                                    cbDesc: content.characters.dominic,
                                    junoDesc: content.characters.juno,
                                    expressionDesc: content.characters.expression,
                                    duoDesc: content.characters.duo,
                                }}
                            />

                            <Team className={styles.enterContainer} />

                            <ContactForm className={styles.enterContainer} />

                            <SupportButtons className={styles.enterContainer} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomeSection;