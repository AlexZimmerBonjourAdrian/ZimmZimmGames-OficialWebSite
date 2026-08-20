'use client';

import React, { useRef, useState } from 'react';
import styles from './VideoContainer.module.css';

interface VideoContainerProps {
    src: string;
    poster?: string;
    className?: string;
    width?: number;
    height?: number;
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
    src,
    poster,
    className = '',
    width,
    height,
    autoplay = false,
    muted = false,
    loop = false,
    controls = true
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div 
            className={`${styles.videoContainer} ${className}`}
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : 'auto'
            }}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className={styles.video}
                autoPlay={autoplay}
                muted={muted}
                loop={loop}
                controls={controls}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            {!controls && (
                <button 
                    className={styles.playButton}
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? '❚❚' : '▶'}
                </button>
            )}
        </div>
    );
};

export default VideoContainer;
