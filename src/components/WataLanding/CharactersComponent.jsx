'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CharactersComponent.module.css';
import CharacterFile from './CharacterFile';

const CharactersComponent = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  
  const characters = [
    {
      id: 1,
      name: "Alice",
      alias: "The Lost One",
      image: "/images/Wata/Menu.PNG",
      dangerLevel: "HIGH",
      caseNumber: "CASE-001",
      status: "Missing",
      lastSeen: "Unknown",
      description: "The main protagonist whose reality begins to unravel as she searches for answers in a twisted world.",
      age: "Unknown",
      height: "5'6\"",
      weight: "Unknown",
      eyes: "Blue",
      hair: "Blonde",
      background: "Alice was once a normal person until she discovered the truth about her existence and the world around her.",
      personality: "Determined but increasingly unstable as her perception of reality shifts.",
      abilities: "Reality manipulation, enhanced perception",
      weaknesses: "Mental instability, confusion about what's real",
      evidence: [
        "Personal diary found in abandoned house",
        "Photographs showing multiple versions of Alice",
        "Audio recordings of her voice in different locations"
      ],
      notes: "Subject appears to exist in multiple states simultaneously. Reality seems to bend around her presence."
    },
    {
      id: 2,
      name: "The Watcher",
      alias: "Shadow Figure",
      image: "/images/Wata/Menu-3.PNG",
      dangerLevel: "EXTREME",
      caseNumber: "CASE-002",
      status: "Active",
      lastSeen: "Everywhere",
      description: "A mysterious entity that observes Alice's journey from the shadows, its true nature unknown.",
      age: "Unknown",
      height: "Variable",
      weight: "Unknown",
      eyes: "None visible",
      hair: "None",
      background: "No background information available. Entity appears to have always existed.",
      personality: "Enigmatic, manipulative, possibly malevolent",
      abilities: "Shapeshifting, reality distortion, teleportation",
      weaknesses: "Unknown",
      evidence: [
        "Security camera footage showing figure in multiple locations",
        "Witness testimonies of shadowy presence",
        "Distorted photographs with figure in background"
      ],
      notes: "Entity seems to feed on fear and confusion. May be responsible for Alice's condition."
    }
  ];

  const openCharacterFile = (character) => {
    setSelectedCharacter(character);
    setActiveTab('overview');
  };

  const closeCharacterFile = () => {
    setSelectedCharacter(null);
  };

  return (
    <section className={styles.charactersSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Characters</h2>
          <p className={styles.subtitle}>
            Meet the key figures in Alice's twisted journey
          </p>
        </motion.div>

        {/* Characters Grid */}
        <div className={styles.charactersGrid}>
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              className={styles.characterCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
            >
              <div 
                className={styles.characterImageContainer}
                onClick={() => openCharacterFile(character)}
              >
                <img 
                  src={character.image} 
                  alt={character.name}
                  className={styles.characterImage}
                  loading="lazy"
                />
                <div className={styles.characterOverlay}>
                  <div className={styles.characterInfo}>
                    <h3 className={styles.characterName}>{character.name}</h3>
                    <p className={styles.characterAlias}>{character.alias}</p>
                    <div className={styles.dangerLevel}>
                      <span className={styles.dangerLabel}>Danger Level:</span>
                      <span className={`${styles.dangerBadge} ${styles[character.dangerLevel.toLowerCase()]}`}>
                        {character.dangerLevel}
                      </span>
                    </div>
                    <span className={styles.viewFileButton}>View File</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Character File Modal */}
        <AnimatePresence>
          {selectedCharacter && (
            <CharacterFile
              character={selectedCharacter}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onClose={closeCharacterFile}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CharactersComponent; 