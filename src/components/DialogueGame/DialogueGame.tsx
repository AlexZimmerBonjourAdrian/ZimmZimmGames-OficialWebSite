'use client';

import React, { useMemo } from 'react';
import styles from './DialogueGame.module.css';
import useDialogueEngine, { DialogueGraph, ResolvedNode } from './useDialogueEngine';

export interface DialogueGameProps {
  graph: DialogueGraph;
  locale?: 'en' | 'es';
  className?: string;
  onSkip?: () => void;
}

const DialogueGame: React.FC<DialogueGameProps> = ({ graph, locale = 'en', className, onSkip }) => {
  // Validar que el graph existe y tiene la estructura correcta
  if (!graph || !graph.start || !graph.nodes) {
    console.error('DialogueGame: Invalid graph structure', graph);
    return (
      <div className={[styles.container, className].filter(Boolean).join(' ')}>
        <div className={styles.text}>Error: Invalid dialogue data</div>
      </div>
    );
  }

  const { currentNode, selectChoice, getIsChoiceDisabled } = useDialogueEngine(graph, locale);

  // Validar que currentNode existe
  if (!currentNode) {
    console.error('DialogueGame: No current node available');
    return (
      <div className={[styles.container, className].filter(Boolean).join(' ')}>
        <div className={styles.text}>Error: No dialogue content available</div>
      </div>
    );
  }

  const choices = useMemo(() => currentNode.choices ?? [], [currentNode]);

  // Nota: el botón Skip ahora redirige a Steam; la lógica anterior de avance se removió.

  const renderHeader = (node: ResolvedNode) => (
    <div className={styles.header}>
      <div className={styles.speaker}>{node.speaker ?? '???'}</div>
    </div>
  );

  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')}>
      {renderHeader(currentNode)}
      <div className={styles.text}>{currentNode.text}</div>
      <div className={styles.choices}>
        {choices.map((choice) => {
          const disabled = getIsChoiceDisabled(choice.id);
          return (
            <button
              key={choice.id}
              className={[
                styles.choiceButton,
                disabled ? styles.choiceDisabled : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => selectChoice(choice.id)}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
      <div className={styles.skipRow}>
        <button
          type="button"
          className={styles.skipButton}
          onClick={onSkip}
          aria-label="Skip"
        >
          {locale === 'es' ? 'Saltar' : 'Skip'}
        </button>
      </div>
    </div>
  );
};

export default DialogueGame;


