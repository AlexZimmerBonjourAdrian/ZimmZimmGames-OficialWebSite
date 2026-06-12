import React from 'react';
import styles from './FanArts.module.css';
import content from './content.json';

export interface FanArt {
    id: number;
    image: string;
    title: string;
    artist: string;
}

export interface FanArtsProps {
    className?: string;
    title?: string;
    fanArts?: FanArt[];
}

const FanArts: React.FC<FanArtsProps> = ({ className = '', title, fanArts: fanArtsProp }) => {
    const effectiveFanArts = fanArtsProp ?? content.fanArts;
    const displayFanArts = [...effectiveFanArts, ...effectiveFanArts];

    return (
        <section id="fan-arts" className={`${styles.fanArtsSection} ${className}`}>
            <h2 className={styles.title}>{title ?? content.title}</h2>
            
            <div className={styles.carouselContainer}>
                <div className={styles.carouselTrack}>
                    {displayFanArts.map((art, index) => (
                        <div key={`${art.id}-${index}`} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={art.image} 
                                    alt={art.title}
                                    className={styles.image}
                                />
                            </div>
                            <h3 className={styles.artTitle}>{art.title}</h3>
                            <p className={styles.artist}>by {art.artist}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FanArts;
