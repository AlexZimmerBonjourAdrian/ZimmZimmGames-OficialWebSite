'use client';

import styles from './GameExtrasSection.module.css';

const socialLinks = [
  { name: 'Discord', icon: '🎮', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'YouTube', icon: '📺', url: '#' }
];

export default function GameExtrasSection() {
  const requirements = [
    {
      platform: 'PC',
      icon: '🖥️',
      details: [
        'Windows 10 64-bit',
        'Intel Core i5 or equivalent',
        '8 GB RAM',
        'DirectX 11 compatible graphics',
        '5 GB available space'
      ]
    },
    {
      platform: 'Android',
      icon: '📱',
      details: [
        'Android 8.0 or higher',
        '3 GB RAM',
        'Adreno 530 or equivalent',
        '2 GB available space'
      ]
    }
  ];

  return (
    <section className={styles.extrasSection}>
      {/* Header with decorative elements */}
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.sectionTitle}>Game Information</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      {/* Social Links */}
      <div className={styles.socialSection}>
        <span className={styles.socialLabel}>Join our community</span>
        <div className={styles.socialIcons}>
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              className={styles.socialIcon} 
              title={social.name}
            >
              <span className={styles.socialIconEmoji}>{social.icon}</span>
              <span className={styles.socialIconText}>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Separator */}
      <hr className={styles.separator} />

      {/* Technical Requirements */}
      <div className={styles.requirementsBlock}>
        <h3 className={styles.requirementsTitle}>Technical Requirements</h3>
        <div className={styles.requirementsGrid}>
          {requirements.map((req) => (
            <div key={req.platform} className={styles.requirementCard}>
              <div className={styles.platformHeader}>
                <span className={styles.platformIcon}>{req.icon}</span>
                <h4 className={styles.platformTitle}>{req.platform}</h4>
              </div>
              <ul className={styles.requirementsList}>
                {req.details.map((detail, i) => (
                  <li key={i} className={styles.requirementItem}>
                    <span className={styles.requirementBullet}>•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer decorative element */}
      <div className={styles.footerDecoration}>
        <div className={styles.decorativeDot}></div>
        <div className={styles.decorativeDot}></div>
        <div className={styles.decorativeDot}></div>
      </div>
    </section>
  );
} 