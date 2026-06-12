import React from 'react';
import styles from './GameStages.module.css';
import content from './content.json';

const GameStages = () => {
    // Flatten all stages into a single timeline
    const allStages = content.sections.flatMap(section =>
        section.stages.map(stage => ({
            ...stage,
            sectionName: section.name
        }))
    );

    return (
        <div className={styles.stagesContainer}>
            <h2 className={styles.title}>{content.title}</h2>
            <div className={styles.stagesTimeline}>
                {allStages.map((stage, index) => (
                    <div
                        key={stage.id}
                        className={`${styles.stageCard} ${stage.id === content.currentStage ? styles.currentStage : ''}`}
                    >
                        <div className={styles.stageNumber}>{stage.id}</div>
                        <div className={styles.stageDivider}></div>
                        <div className={styles.stageInfo}>
                            <div className={styles.stageSection}>{stage.sectionName}</div>
                            <h3 className={styles.stageName}>{stage.name}</h3>
                            <div className={styles.stagePrice}>{stage.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameStages;