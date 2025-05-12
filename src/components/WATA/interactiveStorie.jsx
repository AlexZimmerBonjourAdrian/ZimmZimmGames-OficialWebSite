'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './interactiveStorie.module.css';
import storyData from './data/storyData.json';

const InteractiveStorie = () => {
  const [currentScene, setCurrentScene] = useState('start');
  const [isGameActive, setIsGameActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [visitedScenes, setVisitedScenes] = useState(new Set());

  const startGame = () => {
    setIsMenuVisible(false);
    setIsGameActive(true);
    setCurrentScene('start');
    setVisitedScenes(new Set(['start']));
  };

  const updateScene = (choiceKey) => {
    const nextScene = storyData[currentScene].choices[choiceKey].nextScene;
    setCurrentScene(nextScene);
    setVisitedScenes(prev => new Set([...prev, nextScene]));
  };

  const getCurrentSceneData = () => {
    return storyData[currentScene];
  };

  const handleWindowControl = (action) => {
    switch (action) {
      case 'close':
        setIsGameActive(false);
        setIsMenuVisible(true);
        break;
      case 'minimize':
        // Implementar minimizar
        break;
      case 'maximize':
        // Implementar maximizar
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.textAdventureSection}>
      <div className={styles.crtFrame}>
        <div className={styles.crtScreen}>
          <div className={styles.gameHeader}>
            <div className={styles.windowControls}>
              <button 
                className={styles.windowControl} 
                onClick={() => handleWindowControl('close')}
                aria-label="Close"
              >
                ×
              </button>
              <button 
                className={styles.windowControl} 
                onClick={() => handleWindowControl('maximize')}
                aria-label="Maximize"
              >
                □
              </button>
              <button 
                className={styles.windowControl} 
                onClick={() => handleWindowControl('minimize')}
                aria-label="Minimize"
              >
                ─
              </button>
            </div>
            <div className={styles.terminalTitle}>C:\\WHERE_ARE_THE_ALICES\\DEMO.exe</div>
          </div>

          {isMenuVisible ? (
            <div className={styles.gameContent}>
              <motion.h1 
                className={styles.gameTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Where are the Alices?
              </motion.h1>
              <div className={styles.menuOptions}>
                <motion.button 
                  className={styles.menuBtn}
                  onClick={startGame}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Game
                </motion.button>
                <motion.button 
                  className={`${styles.menuBtn} ${styles.disabled}`}
                  disabled
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue
                </motion.button>
                <motion.button 
                  className={styles.menuBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Credits
                </motion.button>
              </div>
            </div>
          ) : (
            <div className={`${styles.gameContent} ${isGameActive ? styles.active : ''}`}>
              <div className={styles.storyContainer}>
                <motion.div 
                  className={styles.locationName}
                  key={`location-${currentScene}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {getCurrentSceneData().location}
                </motion.div>
                <motion.div 
                  className={styles.storyText}
                  key={`text-${currentScene}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {getCurrentSceneData().text}
                </motion.div>
                <div className={styles.choicesContainer}>
                  {Object.entries(getCurrentSceneData().choices).map(([key, choice], index) => (
                    <motion.button
                      key={key}
                      className={styles.choiceBtn}
                      onClick={() => updateScene(key)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={styles.choicePrefix}>› </span>
                      {choice.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveStorie;
