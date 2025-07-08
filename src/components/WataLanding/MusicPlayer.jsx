'use client';
import { useRef, useState } from 'react';
import styles from './MusicPlayer.module.css';

const tracks = [
  {
    name: 'White Rabbit (1)',
    src: '/Music/White Rabbit (1).mp3',
  },
  {
    name: 'White Rabbit (2)',
    src: '/Music/White Rabbit (2).mp3',
  },
];

export default function MusicPlayer() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!playing) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const nextTrack = () => {
    const next = (current + 1) % tracks.length;
    setCurrent(next);
    setPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setPlaying(true);
    }, 100);
  };

  const onEnded = () => {
    nextTrack();
  };

  return (
    <div className={styles.musicPlayer}>
      <audio
        ref={audioRef}
        src={tracks[current].src}
        onEnded={onEnded}
        preload="none"
      />
      <div className={styles.info}>
        <span className={styles.trackName}>{tracks[current].name}</span>
      </div>
      <div className={styles.controls}>
        <button className={styles.btn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d60000" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="4" width="4" height="16" rx="1.5"/><rect x="14" y="4" width="4" height="16" rx="1.5"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d60000" strokeWidth="2.5" strokeLinecap="round"><polygon points="6,4 20,12 6,20"/></svg>
          )}
        </button>
        <button className={styles.btn} onClick={nextTrack} aria-label="Next track">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d60000" strokeWidth="2.5" strokeLinecap="round"><polygon points="5,4 15,12 5,20"/><rect x="17" y="4" width="2" height="16" rx="1"/></svg>
        </button>
      </div>
    </div>
  );
} 