import React from 'react';
import styles from './FundingGoals.module.css';
import content from './content.json';

const FundingGoals = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{content.title}</h2>
            <div className={styles.description}>{content.description}</div>

            {/* Backer Rewards Section */}
            <div className={styles.rewardsSection}>
                <h3 className={styles.rewardsTitle}>Backer Rewards</h3>
                <div className={styles.rewardsGrid}>
                    {content.backerRewards.map((reward, index) => (
                        <div key={index} className={styles.rewardCard}>
                            <div className={styles.rewardPrice}>{reward.price}</div>
                            <h4 className={styles.rewardTier}>{reward.tier}</h4>
                            <div className={styles.rewardDescription}>{reward.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Stretch Goals Section */}
            <div className={styles.goalsSection}>
                <h3 className={styles.goalsTitle}>Stretch Goals</h3>
                <div className={styles.goalsTimeline}>
                    {content.goals.map((goal, index) => (
                        <div
                            key={goal.id}
                            className={`${styles.goalCard} ${goal.completed ? styles.completedGoal : ''}`}
                        >
                            <div className={styles.goalNumber}>{goal.id}</div>
                            <div className={styles.goalDivider}></div>
                            <div className={styles.goalInfo}>
                                <div className={styles.goalAmount}>{goal.amount}</div>
                                <h4 className={styles.goalTitle}>{goal.title}</h4>
                                <div className={styles.goalDescription}>{goal.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FundingGoals;