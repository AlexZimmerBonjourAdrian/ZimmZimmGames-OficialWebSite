'use client';

import React from 'react';
import styles from './GifImage.module.css';

interface GifImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

const GifImage: React.FC<GifImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`${styles.gifImage} ${className}`}
            style={{
                width: width ? `${width}px` : 'auto',
                height: height ? `${height}px` : 'auto'
            }}
        />
    );
};

export default GifImage;
