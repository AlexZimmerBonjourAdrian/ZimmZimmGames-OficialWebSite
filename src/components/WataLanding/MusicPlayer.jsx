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
  const [loop, setLoop] = useState(false);
  const [volume, setVolume] = useState(0.7);
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
    if (loop) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      nextTrack();
    }
  };

  const toggleLoop = () => setLoop((l) => !l);

  const handleVolume = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    audioRef.current.volume = v;
  };

  // Sync volume on mount and track change
  const onAudioRef = (el) => {
    if (el) el.volume = volume;
    audioRef.current = el;
  };

  return (
    <div className={styles.musicPlayer}>
      <audio
        ref={onAudioRef}
        src={tracks[current].src}
        onEnded={onEnded}
        preload="none"
        loop={loop}
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
        <button
          className={styles.btn + ' ' + (loop ? styles.loopActive : '')}
          onClick={toggleLoop}
          aria-label={loop ? 'Disable loop' : 'Enable loop'}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={loop ? '#fff' : '#d60000'} strokeWidth="2.5" strokeLinecap="round"><path d="M3 17v2a2 2 0 0 0 2 2h2"/><polyline points="7 17 3 17 3 21"/><path d="M21 7V5a2 2 0 0 0-2-2h-2"/><polyline points="17 7 21 7 21 3"/><path d="M7 7h10v10H7z" opacity="0.1"/></svg>
        </button>
        <div className={styles.volumeBox}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d60000" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19 9v6"/><path d="M23 9v6"/></svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            className={styles.volumeSlider}
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
} 