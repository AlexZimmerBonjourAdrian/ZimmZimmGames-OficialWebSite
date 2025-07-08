'use client';

import styles from './GameplaySection.module.css';

const gameplayData = [
  {
    image: '/images/Wata/Menu-8.PNG',
    heading: 'Descend into Madness',
    text: `Step into Alice's fractured mind as you explore surreal environments where reality and nightmare blend. Each area is filled with secrets, dangers, and shifting perspectives that challenge your perception.`,
    bullets: [
      'Uncover hidden paths and mind-bending puzzles',
      'Face psychological horrors and shifting environments',
      'Experience a story that adapts to your choices'
    ],
    imageLeft: true
  },
  {
    image: '/images/Wata/Menu-7.PNG',
    heading: 'Master Unique Abilities',
    text: `Gain new powers as Alice confronts her fears. Use stealth, manipulation of reality, and quick reflexes to survive encounters with bizarre entities and escape deadly traps.`,
    bullets: [
      'Unlock reality-bending abilities',
      'Evade and outsmart relentless pursuers',
      'Adapt to ever-changing threats and environments'
    ],
    imageLeft: false
  }
];

export default function GameplaySection() {
  return (
    <section className={styles.gameplaySection}>
      <h2 className={styles.mainTitle}>Gameplay</h2>
      {gameplayData.map((item, idx) => (
        <div key={idx} className={styles.row}>
          {item.imageLeft && (
            <div className={styles.imageCol}>
              <img src={item.image} alt={item.heading} className={styles.image} />
            </div>
          )}
          <div className={styles.textCol}>
            <h3 className={styles.heading}>{item.heading}</h3>
            <p className={styles.text}>{item.text}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
          {!item.imageLeft && (
            <div className={styles.imageCol}>
              <img src={item.image} alt={item.heading} className={styles.image} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
} 