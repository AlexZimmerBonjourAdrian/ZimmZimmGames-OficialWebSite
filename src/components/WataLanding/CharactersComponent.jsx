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
      name: 'Alice',
      alias: 'La Perdida',
      age: 'Desconocida',
      height: '1.65m',
      weight: '55kg',
      eyes: 'Azules',
      hair: 'Rubio',
      status: 'Desaparecida',
      dangerLevel: 'Alto',
      image: '/images/Wata/WhereAreTheAlices.JPG',
      description: 'La protagonista principal que se adentra en el mundo de Wata. Su mente se desvanece entre la realidad y la locura.',
      background: 'Alice era una joven normal hasta que encontró la puerta. Ahora su conciencia flota entre múltiples realidades.',
      personality: 'Curiosa, valiente pero confundida. Su identidad se fragmenta a medida que avanza en su viaje.',
      abilities: 'Puede percibir realidades alternativas, pero esto afecta su cordura.',
      weaknesses: 'Vulnerable a la confusión mental, fácilmente manipulable por las voces.',
      evidence: [
        'Fotografía encontrada en la puerta',
        'Diario personal con entradas confusas',
        'Huellas dactilares en múltiples objetos',
        'Testimonio de vecinos sobre comportamiento extraño'
      ],
      notes: 'Caso prioritario. Su desaparición coincide con otros incidentes similares en la zona.',
      lastSeen: 'En la puerta del mundo interior',
      caseNumber: 'WATA-001'
    },
    {
      id: 2,
      name: 'El Conejo',
      alias: 'El Guía',
      age: 'Inmortal',
      height: '1.80m',
      weight: '75kg',
      eyes: 'Rojos',
      hair: 'Gris',
      status: 'Activo',
      dangerLevel: 'Crítico',
      image: '/images/Wata/Door.PNG',
      description: 'Una entidad misteriosa que guía a Alice a través del mundo de Wata. Su verdadera naturaleza es desconocida.',
      background: 'Aparece en múltiples relatos y leyendas. Siempre presente cuando alguien cruza el umbral.',
      personality: 'Enigmático, manipulador, siempre un paso adelante. Habla en acertijos y metáforas.',
      abilities: 'Puede manipular la realidad, aparecer y desaparecer a voluntad, controlar las mentes débiles.',
      weaknesses: 'No puede actuar directamente, necesita que otros tomen decisiones.',
      evidence: [
        'Testimonios de múltiples testigos',
        'Huellas de patas en lugares imposibles',
        'Registros históricos de apariciones',
        'Análisis de comportamiento predictivo'
      ],
      notes: 'Entidad de alto riesgo. Responsable de múltiples desapariciones. No se recomienda contacto directo.',
      lastSeen: 'En los límites de la realidad',
      caseNumber: 'WATA-002'
    },
    {
      id: 3,
      name: 'Las Voces',
      alias: 'Los Susurros',
      age: 'Eternas',
      height: 'Variable',
      weight: 'Inmaterial',
      eyes: 'Invisibles',
      hair: 'N/A',
      status: 'Activas',
      dangerLevel: 'Extremo',
      image: '/images/Wata/Menu.PNG',
      description: 'Entidades incorpóreas que susurran en la mente de Alice. Su origen y propósito son un misterio.',
      background: 'Han existido desde el inicio del tiempo. Se alimentan de la confusión y el miedo.',
      personality: 'Sádicas, manipuladoras, disfrutan del sufrimiento mental de sus víctimas.',
      abilities: 'Telepatía, manipulación mental, creación de ilusiones, control emocional.',
      weaknesses: 'No pueden manifestarse físicamente, dependen de la vulnerabilidad mental.',
      evidence: [
        'Registros de audio con voces inexplicables',
        'Reportes de alucinaciones auditivas',
        'Análisis de patrones de comportamiento',
        'Testimonios de víctimas'
      ],
      notes: 'Amenaza psicológica máxima. Causan daño mental permanente. Protocolo de aislamiento recomendado.',
      lastSeen: 'En la mente de Alice',
      caseNumber: 'WATA-003'
    },
    {
      id: 4,
      name: 'El Mundo Interior',
      alias: 'Wata',
      age: 'Atemporal',
      height: 'Infinita',
      weight: 'Incalculable',
      eyes: 'Múltiples',
      hair: 'N/A',
      status: 'Expansivo',
      dangerLevel: 'Máximo',
      image: '/images/Wata/Menu-3.PNG',
      description: 'Una dimensión alternativa que existe dentro de la mente colectiva. Sus leyes desafían la física conocida.',
      background: 'Se formó a partir de los pensamientos y miedos de todos los que han cruzado el umbral.',
      personality: 'Caótico, impredecible, cambia constantemente según las emociones de sus habitantes.',
      abilities: 'Manipulación de la realidad, control del tiempo, creación de espacios imposibles.',
      weaknesses: 'Depende de la energía mental de sus habitantes, vulnerable a la claridad mental.',
      evidence: [
        'Fotografías de espacios imposibles',
        'Testimonios de testigos',
        'Análisis dimensional',
        'Registros de fenómenos paranormales'
      ],
      notes: 'Dimensión de máxima prioridad. Requiere investigación continua. Posible amenaza existencial.',
      lastSeen: 'En expansión constante',
      caseNumber: 'WATA-004'
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
          <h2 className={styles.title}>Expedientes de Personajes</h2>
          <p className={styles.subtitle}>
            Archivos clasificados de los habitantes del mundo de Wata
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
                      <span className={styles.dangerLabel}>Nivel de Peligro:</span>
                      <span className={`${styles.dangerBadge} ${styles[character.dangerLevel.toLowerCase()]}`}>
                        {character.dangerLevel}
                      </span>
                    </div>
                    <span className={styles.viewFileButton}>Ver Expediente</span>
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
                    <h2>EXPEDIENTE POLICIAL</h2>
                    <div className={styles.caseNumber}>{selectedCharacter.caseNumber}</div>
                  </div>
                  <button className={styles.closeFileButton} onClick={closeCharacterFile}>
                    ×
                  </button>
                </div>

                {/* File Content */}
                <div className={styles.fileContent}>
                  {/* Character Image */}
                  <div className={styles.fileImageContainer}>
                    <img 
                      src={selectedCharacter.image} 
                      alt={selectedCharacter.name}
                      className={styles.fileImage}
                    />
                    <div className={styles.statusBadge}>
                      {selectedCharacter.status}
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className={styles.fileTabs}>
                    <button
                      className={`${styles.tabButton} ${activeTab === 'overview' ? styles.activeTab : ''}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Resumen
                    </button>
                    <button
                      className={`${styles.tabButton} ${activeTab === 'details' ? styles.activeTab : ''}`}
                      onClick={() => setActiveTab('details')}
                    >
                      Detalles
                    </button>
                    <button
                      className={`${styles.tabButton} ${activeTab === 'evidence' ? styles.activeTab : ''}`}
                      onClick={() => setActiveTab('evidence')}
                    >
                      Evidencia
                    </button>
                    <button
                      className={`${styles.tabButton} ${activeTab === 'notes' ? styles.activeTab : ''}`}
                      onClick={() => setActiveTab('notes')}
                    >
                      Notas
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className={styles.tabContent}>
                    {activeTab === 'overview' && (
                      <div className={styles.overviewTab}>
                        <div className={styles.basicInfo}>
                          <h3>Información Básica</h3>
                          <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Nombre:</span>
                              <span className={styles.infoValue}>{selectedCharacter.name}</span>
                            </div>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Alias:</span>
                              <span className={styles.infoValue}>{selectedCharacter.alias}</span>
                            </div>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Edad:</span>
                              <span className={styles.infoValue}>{selectedCharacter.age}</span>
                            </div>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Altura:</span>
                              <span className={styles.infoValue}>{selectedCharacter.height}</span>
                            </div>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Peso:</span>
                              <span className={styles.infoValue}>{selectedCharacter.weight}</span>
                            </div>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Ojos:</span>
                              <span className={styles.infoValue}>{selectedCharacter.eyes}</span>
                            </div>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Cabello:</span>
                              <span className={styles.infoValue}>{selectedCharacter.hair}</span>
                            </div>
                            <div className={styles.infoItem}>
                              <span className={styles.infoLabel}>Última Vez Visto:</span>
                              <span className={styles.infoValue}>{selectedCharacter.lastSeen}</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.description}>
                          <h3>Descripción</h3>
                          <p>{selectedCharacter.description}</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'details' && (
                      <div className={styles.detailsTab}>
                        <div className={styles.detailSection}>
                          <h3>Antecedentes</h3>
                          <p>{selectedCharacter.background}</p>
                        </div>
                        <div className={styles.detailSection}>
                          <h3>Personalidad</h3>
                          <p>{selectedCharacter.personality}</p>
                        </div>
                        <div className={styles.detailSection}>
                          <h3>Habilidades</h3>
                          <p>{selectedCharacter.abilities}</p>
                        </div>
                        <div className={styles.detailSection}>
                          <h3>Debilidades</h3>
                          <p>{selectedCharacter.weaknesses}</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'evidence' && (
                      <div className={styles.evidenceTab}>
                        <h3>Evidencia Recolectada</h3>
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
                        <h3>Notas del Investigador</h3>
                        <div className={styles.notesContent}>
                          <p>{selectedCharacter.notes}</p>
                        </div>
                        <div className={styles.fileFooter}>
                          <div className={styles.investigatorInfo}>
                            <span>Investigador: Agente WATA</span>
                            <span>Fecha: {new Date().toLocaleDateString()}</span>
                          </div>
                        </div>
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