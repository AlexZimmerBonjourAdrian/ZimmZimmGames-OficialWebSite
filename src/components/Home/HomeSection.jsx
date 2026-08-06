'use client';

import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './HomeSection.module.css';
import { HeroCarousel, ContactForm, SupportButtons } from '@/components';
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
    const [selectedGameplayIndex, setSelectedGameplayIndex] = useState(0);

    const characterGalleryProps = useMemo(() => ({
        layout: "grid",
        showTitles: true,
        variant: "heroInline",
        overrides: {
            cbDesc: content.characters.dominic,
            junoDesc: content.characters.juno,
        }
    }), [content.characters]);

    return (
        <main className={styles.homeContainer}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroStack}>
                        <h1 className={styles.heroTitle}>
                            <img
                                src={content.site.logo}
                                alt={content.site.title}
                                className={styles.heroLogo}
                            />
                        </h1>
                        <h2 className={styles.heroSubtitle}>{content.hero.subtitle}</h2>
                    </div>

                    <div className={styles.steamSectionInline}>
                        <div className={styles.steamContentWrapper}>
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

                            <section id="gameplay" className={`${styles.enterContainer} ${styles.gameplaySection}`}>
                                <h3 className={styles.sectionTitle}>{content.gameplay.title}</h3>
                                <div className={styles.gameplayViewer}>
                                    {/* Menu/Archiver */}
                                    <div className={styles.gameplayMenu}>
                                        {content.gameplay.items.map((item, index) => (
                                            <button
                                                key={item.id}
                                                className={`${styles.gameplayMenuItem} ${index === selectedGameplayIndex ? styles.gameplayMenuItemActive : ''}`}
                                                onClick={() => setSelectedGameplayIndex(index)}
                                            >
                                                {item.title}
                                            </button>
                                        ))}
                                    </div>
                                    
                                    {/* Viewer with image left, description right */}
                                    <div className={styles.gameplayDisplay}>
                                        <div className={styles.gameplayImageWrapper}>
                                            <img
                                                src={content.gameplay.items[selectedGameplayIndex].image}
                                                alt={content.gameplay.items[selectedGameplayIndex].title}
                                                className={styles.gameplayDisplayImage}
                                            />
                                        </div>
                                        <div className={styles.gameplayDescriptionWrapper}>
                                            <h4 className={styles.gameplayDisplayTitle}>{content.gameplay.items[selectedGameplayIndex].title}</h4>
                                            <p className={styles.gameplayDisplayDescription}>{content.gameplay.items[selectedGameplayIndex].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>



                            <CharacterGallery
                                className={`${styles.enterContainer} ${styles.enterGallery}`}
                                {...characterGalleryProps}
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

export default React.memo(HomeSection);