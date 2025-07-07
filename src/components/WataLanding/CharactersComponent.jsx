'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CharactersComponent.module.css';

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
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCharacterFile}
            >
              <motion.div
                className={styles.fileModal}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* File Header */}
                <div className={styles.fileHeader}>
                  <div className={styles.fileTitle}>
                    <h2>File: {selectedCharacter.name}</h2>
                    <span className={styles.caseNumber}>{selectedCharacter.caseNumber}</span>
                  </div>
                  <button 
                    className={styles.closeButton}
                    onClick={closeCharacterFile}
                  >
                    Close
                  </button>
                </div>

                {/* File Content */}
                <div className={styles.fileContent}>
                  {/* Tabs */}
                  <div className={styles.tabs}>
                    <button
                      className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </button>
                    <button
                      className={`${styles.tab} ${activeTab === 'details' ? styles.active : ''}`}
                      onClick={() => setActiveTab('details')}
                    >
                      Details
                    </button>
                    <button
                      className={`${styles.tab} ${activeTab === 'evidence' ? styles.active : ''}`}
                      onClick={() => setActiveTab('evidence')}
                    >
                      Evidence
                    </button>
                    <button
                      className={`${styles.tab} ${activeTab === 'notes' ? styles.active : ''}`}
                      onClick={() => setActiveTab('notes')}
                    >
                      Notes
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className={styles.tabContent}>
                    {activeTab === 'overview' && (
                      <div className={styles.overviewTab}>
                        <div className={styles.characterImageLarge}>
                          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                        </div>
                        <div className={styles.overviewInfo}>
                          <h3>{selectedCharacter.name}</h3>
                          <p className={styles.alias}>Alias: {selectedCharacter.alias}</p>
                          <p className={styles.description}>{selectedCharacter.description}</p>
                          <div className={styles.quickStats}>
                            <div className={styles.stat}>
                              <span className={styles.statLabel}>Status:</span>
                              <span className={styles.statValue}>{selectedCharacter.status}</span>
                            </div>
                            <div className={styles.stat}>
                              <span className={styles.statLabel}>Last Seen:</span>
                              <span className={styles.statValue}>{selectedCharacter.lastSeen}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'details' && (
                      <div className={styles.detailsTab}>
                        <div className={styles.detailSection}>
                          <h4>Personal Information</h4>
                          <div className={styles.detailGrid}>
                            <div className={styles.detailItem}>
                              <span className={styles.detailLabel}>Age:</span>
                              <span className={styles.detailValue}>{selectedCharacter.age}</span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.detailLabel}>Height:</span>
                              <span className={styles.detailValue}>{selectedCharacter.height}</span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.detailLabel}>Weight:</span>
                              <span className={styles.detailValue}>{selectedCharacter.weight}</span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.detailLabel}>Eyes:</span>
                              <span className={styles.detailValue}>{selectedCharacter.eyes}</span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.detailLabel}>Hair:</span>
                              <span className={styles.detailValue}>{selectedCharacter.hair}</span>
                            </div>
                          </div>
                        </div>

                        <div className={styles.detailSection}>
                          <h4>Background</h4>
                          <p>{selectedCharacter.background}</p>
                        </div>

                        <div className={styles.detailSection}>
                          <h4>Personality</h4>
                          <p>{selectedCharacter.personality}</p>
                        </div>

                        <div className={styles.detailSection}>
                          <h4>Abilities</h4>
                          <p>{selectedCharacter.abilities}</p>
                        </div>

                        <div className={styles.detailSection}>
                          <h4>Weaknesses</h4>
                          <p>{selectedCharacter.weaknesses}</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'evidence' && (
                      <div className={styles.evidenceTab}>
                        <h4>Collected Evidence</h4>
                        <ul className={styles.evidenceList}>
                          {selectedCharacter.evidence.map((item, index) => (
                            <li key={index} className={styles.evidenceItem}>
                              <span className={styles.evidenceBullet}>•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'notes' && (
                      <div className={styles.notesTab}>
                        <h4>Investigator Notes</h4>
                        <p className={styles.notesText}>{selectedCharacter.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CharactersComponent; 