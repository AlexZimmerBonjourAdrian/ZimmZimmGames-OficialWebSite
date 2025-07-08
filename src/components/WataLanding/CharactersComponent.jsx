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
      name: "Juno",
      alias: "The Detective",
      image: "/Characters/Juno.png",
      profileImage: "/Characters/Profile/Juno.png",
      focusFace: true,
      caseNumber: "CASE-003",
      status: "Active",
      lastSeen: "2025-07-01",
      description: "A determined detective investigating the mysterious disappearance of Alice. Her investigation leads her into a surreal world where reality and nightmare blend together.",
      age: "37",
      birthDate: "March 15, 1988",
      race: "Wonderland Creature-Goblin hybrid",
      subspecies: "Hare",
      profession: "Detective",
      height: "5'7\"",
      weight: "Unknown",
      eyes: "Green",
      hair: "Brown",
      background: "Juno discovered the case of Alice's disappearance while working as a detective. What started as a routine missing person investigation quickly spiraled into something far more sinister when she encountered dolls with familiar faces and a white rabbit with button eyes in a mysterious garden.",
      personality: "Analytical and brave, but increasingly questioning her own sanity as the investigation progresses. She follows her instincts even when logic suggests otherwise, driven by a deep need to find the truth.",
      abilities: "Sharp investigative skills, marksmanship, survival instincts, ability to navigate surreal environments",
      weaknesses: "Her determination sometimes blinds her to danger, and the psychological toll of the investigation is affecting her perception of reality",
      evidence: [
        "Case files documenting Alice's disappearance",
        "Photographs of the doll garden with familiar faces",
        "Audio recordings of impossible conversations",
        "Teacup with swirling liquid that shows different reflections"
      ],
      notes: "Juno's investigation has led her deeper into Wonderland than any detective before. She's beginning to question whether she's still investigating Alice's disappearance or if she's become part of the mystery herself. Her encounters with CB suggest he knows more than he reveals."
    },
    {
      id: 2,
      name: "CB",
      alias: "The White Rabbit",
      image: "/Characters/CB.png",
      profileImage: "/Characters/Profile/CB.png",
      focusFace: true,
      caseNumber: "CASE-004",
      status: "Unknown",
      lastSeen: "2025-07-01",
      description: "A mysterious white rabbit with button eyes who appears to control the flow of time and reality in Wonderland. He serves as both guide and obstacle in Juno's investigation.",
      age: "Unknown",
      birthDate: "Unknown",
      race: "Wonderland Creature",
      subspecies: "Rabbit",
      profession: "CEO of Juno Enterprises",
      height: "5'10\"",
      weight: "Unknown",
      eyes: "Button eyes (red)",
      hair: "White",
      background: "CB's true nature remains a mystery. He appears to be the guardian or controller of Wonderland, orchestrating Juno's journey through the surreal landscape. Whether he's helping her find Alice or leading her deeper into madness is unclear.",
      personality: "Cryptic and unpredictable, speaking in riddles and enjoying the confusion he creates. He seems to test Juno's resolve while hiding crucial information about Alice's fate.",
      abilities: "Time manipulation, reality distortion, illusion creation, ability to control the environment of Wonderland",
      weaknesses: "Bound by the rules and logic of Wonderland, his cryptic nature can sometimes reveal more than intended",
      evidence: [
        "Playing cards with shifting symbols that change when not observed",
        "A pocket watch that ticks backwards and forwards randomly",
        "Photographs that show different scenes depending on who's looking",
        "Tea party arrangements that appear and disappear"
      ],
      notes: "CB appears to be testing Juno's ability to navigate Wonderland's twisted logic. His relationship with Alice is unclear - he may be protecting her, imprisoning her, or something else entirely. His button eyes suggest he might not be entirely real, or perhaps he's more real than the world around him."
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
            Meet the key figures in the world of WATA
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
                  style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.characterInfo}>
                <h3 className={styles.characterName}>{character.name}</h3>
                <p className={styles.characterAlias}>{character.alias}</p>
                <span className={styles.viewFileButton} onClick={() => openCharacterFile(character)}>View File</span>
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