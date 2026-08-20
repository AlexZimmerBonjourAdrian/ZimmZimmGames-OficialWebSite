'use client';

import React, { useEffect, useRef } from 'react';
import styles from './FeaturedSection.module.css';

interface FeaturedSectionProps {
    title: string;
    description: string;
    image: string;
    imagePosition?: 'left' | 'right';
    className?: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
    title,
    description,
    image,
    imagePosition = 'left',
    className = ''
}) => {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className={`${styles.featuredSection} ${imagePosition === 'left' ? styles.imageLeft : styles.imageRight} ${className}`}>
            {imagePosition === 'left' ? (
                <>
                    <div ref={imageRef} className={styles.featuredImageWrapper}>
                        <img src={image} alt={title} className={styles.featuredImage} />
                    </div>
                    <div className={styles.featuredContent}>
                        <h3 className={styles.featuredTitle}>{title}</h3>
                        <p className={styles.featuredDescription}>{description}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.featuredContent}>
                        <h3 className={styles.featuredTitle}>{title}</h3>
                        <p className={styles.featuredDescription}>{description}</p>
                    </div>
                    <div ref={imageRef} className={styles.featuredImageWrapper}>
                        <img src={image} alt={title} className={styles.featuredImage} />
                    </div>
                </>
            )}
        </div>
    );
};

export default FeaturedSection;
