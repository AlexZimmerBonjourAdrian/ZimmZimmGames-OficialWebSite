'use client';

import React, { useMemo, useEffect, useRef, useCallback } from 'react';
import styles from './DialogueGame.module.css';
import useDialogueEngine, { DialogueGraph, ResolvedNode } from './useDialogueEngine';
import { trackGameEvent } from '@/lib/analytics';

export interface DialogueGameProps {
  graph: DialogueGraph;
  locale?: 'en' | 'es';
  className?: string;
  onSkip?: () => void;
}

const DialogueGame: React.FC<DialogueGameProps> = ({ graph, locale = 'en', className, onSkip }) => {
  const { currentNode, selectChoice, getIsChoiceDisabled, reset } = useDialogueEngine(graph, locale);
  const startTimeRef = useRef<number>(Date.now());
  const hasTrackedStartRef = useRef(false);
  const choices = useMemo(() => currentNode?.choices ?? [], [currentNode]);

  // Validar que el graph existe y tiene la estructura correcta
  const isValidGraph = graph && graph.start && graph.nodes;

  const handleChoiceSelect = useCallback((choiceId: string) => {
    selectChoice(choiceId);
    trackGameEvent('choice_selected', { choice_id: choiceId, node_id: currentNode?.id });
  }, [selectChoice, currentNode]);

  const handleSkipClick = useCallback(() => {
    trackGameEvent('skip_clicked');
    const playTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
    trackGameEvent('play_time', { seconds: playTime });
    onSkip?.();
  }, [onSkip]);

  useEffect(() => {
    if (!hasTrackedStartRef.current && isValidGraph) {
      trackGameEvent('game_started');
      hasTrackedStartRef.current = true;
    }

    return () => {
      if (hasTrackedStartRef.current) {
        const playTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
        trackGameEvent('play_time', { seconds: playTime });
      }
    };
  }, [isValidGraph]);

  if (!isValidGraph) {
    console.error('DialogueGame: Invalid graph structure', graph);
    return (
      <div className={[styles.container, className].filter(Boolean).join(' ')}>
        <div className={styles.text}>Error: Invalid dialogue data</div>
      </div>
    );
  }

  if (!currentNode) {
    console.error('DialogueGame: No current node available');
    return (
      <div className={[styles.container, className].filter(Boolean).join(' ')}>
        <div className={styles.text}>Error: No dialogue content available</div>
      </div>
    );
  }

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
              onClick={() => handleChoiceSelect(choice.id)}
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
          onClick={handleSkipClick}
          aria-label="Skip"
        >
          {locale === 'es' ? 'Saltar' : 'Skip'}
        </button>
      </div>
    </div>
  );
};

export default DialogueGame;
