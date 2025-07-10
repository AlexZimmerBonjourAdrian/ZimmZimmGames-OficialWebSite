'use client';

import styles from './GameplaySection.module.css';

const gameplayData = [
  {
    image: '/images/Wata/Menu-8.PNG',
    heading: 'Sistema de Emociones Reactivo',
    text: `Tu estado emocional no es solo un número en pantalla. Cada decisión, cada interacción, cada descubrimiento altera tu psicología de forma permanente. La ira te hace más agresivo, la tristeza te vuelve más vulnerable, y la determinación puede salvarte de situaciones imposibles.`,
    bullets: [
      'Emociones que cambian tu forma de jugar',
      'Estados psicológicos con ventajas y desventajas (Ej: Furia)',
      'Narrativa que se adapta a tu estado mental adaptando tus respuestas a tu emoción'
    ],
    imageLeft: true
  },
  {
    image: '/images/Wata/Menu-7.PNG',
    heading: 'Sistema de Relaciones Impactantes',
    text: `"Que te odien, amen, admiren pero jamás sean indiferentes en tu presencia." En un mundo de fantasía urbana donde los dragones son taxis y los conejos parlantes dirigen compañías, cada interacción deja una huella permanente. Los NPCs recuerdan, reaccionan y evolucionan basándose en tus acciones, creando relaciones que pueden salvarte o destruirte.`,
    bullets: [
      'NPCs que nunca olvidan tus acciones',
      'Relaciones que evolucionan de amor a odio',
      'Consecuencias emocionales que afectan el gameplay'
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