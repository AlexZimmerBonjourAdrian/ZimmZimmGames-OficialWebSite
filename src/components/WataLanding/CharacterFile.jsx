import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CharactersComponent.module.css';

const CharacterFile = ({ character, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!character) return null;

  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.fileModal}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Botón de cerrar (X) en la esquina superior izquierda, pequeño y blanco */}
        <button className={styles.closeIconButtonSmall} onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="4" x2="16" y2="16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="16" y1="4" x2="4" y2="16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
        {/* Encabezado */}
        <div className={styles.policeHeader}>
          <div>
            <h2 className={styles.policeTitle}>CASE FILE: {character.name.toUpperCase()}</h2>
            <span className={styles.caseNumber}>{character.caseNumber}</span>
          </div>
          <span className={`${styles.statusBadge} ${styles[character.status.toLowerCase()]}`}>{character.status}</span>
          {/*  /*<button className={styles.closeButton} onClick={onClose}>Close</button>* */}
        </div>

        <div className={styles.policeBodyScrollable}>
          <div className={styles.policeBody}>
            {/* Columna Izquierda: Foto y datos clave */}
            <div className={styles.leftCol}>
              <div className={styles.photoBox}>
                <img src={character.image} alt={character.name} className={styles.fileImage} />
              </div>
              <div className={styles.keyDataBox}>
                <div><span className={styles.keyLabel}>Age:</span> <span className={styles.keyValue}>{character.age}</span></div>
                <div><span className={styles.keyLabel}>Height:</span> <span className={styles.keyValue}>{character.height}</span></div>
                <div><span className={styles.keyLabel}>Eyes:</span> <span className={styles.keyValue}>{character.eyes}</span></div>
                <div><span className={styles.keyLabel}>Hair:</span> <span className={styles.keyValue}>{character.hair}</span></div>
                <div><span className={styles.keyLabel}>Danger Level:</span> <span className={`${styles.dangerBadge} ${styles[character.dangerLevel.toLowerCase()]}`}>{character.dangerLevel}</span></div>
                <div><span className={styles.keyLabel}>Last Seen:</span> <span className={styles.keyValue}>{character.lastSeen}</span></div>
              </div>
            </div>

            {/* Columna Derecha: Información principal */}
            <div className={styles.rightCol}>
              <div className={styles.section}><span className={styles.aliasLabel}>Alias:</span> <span className={styles.aliasValue}>{character.alias}</span></div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Description</span>
                <p className={styles.sectionText}>{character.description}</p>
              </div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Background</span>
                <p className={styles.sectionText}>{character.background}</p>
              </div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Personality</span>
                <p className={styles.sectionText}>{character.personality}</p>
              </div>
              <div className={styles.sectionRow}>
                <div className={styles.sectionHalf}>
                  <span className={styles.sectionTitle}>Abilities</span>
                  <p className={styles.sectionText}>{character.abilities}</p>
                </div>
                <div className={styles.sectionHalf}>
                  <span className={styles.sectionTitle}>Weaknesses</span>
                  <p className={styles.sectionText}>{character.weaknesses}</p>
                </div>
              </div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Collected Evidence</span>
                <ul className={styles.evidenceList}>
                  {character.evidence.map((item, idx) => (
                    <li key={idx} className={styles.evidenceItem}><span className={styles.evidenceBullet}>•</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Investigator Notes</span>
                <p className={styles.sectionText}>{character.notes}</p>
              </div>
              <div className={styles.policeFooter}>
                <span>Filed by: <b>Detective Juno</b></span>
                <span>Date: <b>June 2024</b></span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CharacterFile; 