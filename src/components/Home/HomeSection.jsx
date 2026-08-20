'use client';

import React, { useState } from 'react';
import styles from './HomeSection.module.css';
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection';
import SimpleCarousel from '@/components/SimpleCarousel/SimpleCarousel';
import ContactForm from '@/components/ContactForm/ContactForm';
import Team from '@/components/Team/Team';
import SupportButtons from '@/components/SupportButtons/SupportButtons';
import content from './content.json';
import links from './links.json';
import carouselContent from '@/components/SimpleCarousel/content.json';

const HomeSection = () => {
    const [selectedGameplayIndex, setSelectedGameplayIndex] = useState(0);

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
                            <div className={`${styles.enterContainer} ${styles.highConcept}`}>
                                <h3 className={styles.highConceptTitle}>High Concept</h3>
                                <p className={styles.highConceptText}>
                                    Where are the Alices? A Kemono-Noir visual novel where you embody detective Juno Hare. 
                                    In a tense interrogation, you must face Dominic, the White Rabbit, who allegedly kidnapped 
                                    the girl Alice Dinner. Every decision you make and every question you ask will be crucial to 
                                    unraveling the truth. With your dark past haunting you, you only hope your children don't 
                                    find out if something bad happens to you. Remember, Juno, don't kill him... he's just a rabbit.
                                </p>
                            </div>

                            <section className={`${styles.enterContainer} ${styles.featuredSections}`}>
                                <h2 className={styles.mainTitle}>Juno Hare!</h2>
                                {content.sections.map((section, index) => (
                                    <FeaturedSection
                                        key={section.id}
                                        title={section.title}
                                        description={section.description}
                                        image={section.image}
                                        imagePosition={index % 2 === 0 ? 'left' : 'right'}
                                    />
                                ))}
                            </section>

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

                            <SimpleCarousel items={carouselContent.items} className={styles.simpleCarouselSection} />

                            <section className={`${styles.enterContainer} ${styles.pressKitSection}`}>
                                <h2 className={styles.mainTitle}>Press Kit</h2>
                                <div className={styles.pressKitContent}>
                                    <p className={styles.pressKitDescription}>
                                        If you'd like to write about our games, we've a Press Kit full of videos, facts and images.
                                    </p>
                                    <p className={styles.pressKitContact}>
                                        For any additional press enquiries, please contact{' '}
                                        <a href="mailto:zimmzimmGames@gmail.com" className={styles.pressKitEmail}>
                                            zimmzimmGames@gmail.com
                                        </a>
                                    </p>
                                    <a 
                                        href="https://drive.google.com/drive/folders/1emKF_YeHf_EF4fC_vUqYhLweThc-t9fV?usp=sharing" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.pressKitButton}
                                    >
                                        VISIT THE PRESS KIT
                                    </a>
                                </div>
                            </section>

                            <ContactForm className={styles.contactSection} />

                            <Team className={styles.teamSection} />

                            <SupportButtons className={styles.supportSection} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default React.memo(HomeSection);