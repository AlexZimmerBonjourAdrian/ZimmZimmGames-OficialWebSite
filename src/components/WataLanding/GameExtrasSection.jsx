'use client';

import styles from './GameExtrasSection.module.css';
import AboutSection from './AboutSection';

const socialLinks = [
  {
    name: 'Discord',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#5865F2"/>
        <path d="M22.5 22c-1.2-1-2.3-1.5-3.5-1.5l-.5.5c-1.2.5-2.3.5-3.5 0l-.5-.5c-1.2 0-2.3.5-3.5 1.5-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7C11.5 19.5 13.5 18 16 18s4.5 1.5 5.7 3.3c.2.2.2.5 0 .7-.2.2-.5.2-.7 0z" fill="#fff"/>
        <circle cx="12.5" cy="15.5" r="1.5" fill="#fff"/>
        <circle cx="19.5" cy="15.5" r="1.5" fill="#fff"/>
      </svg>
    ),
    url: 'https://discord.gg/zimmzimmgames'
  },
  {
    name: 'YouTube',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#FF0000"/>
        <path d="M22.5 16.5c0-.7-.1-1.3-.2-1.8-.2-.6-.6-1-1.2-1.2-.5-.2-1.2-.2-2.3-.2h-3.6c-1.1 0-1.8 0-2.3.2-.6.2-1 .6-1.2 1.2-.2.5-.2 1.1-.2 1.8s0 1.3.2 1.8c.2.6.6 1 1.2 1.2.5.2 1.2.2 2.3.2h3.6c1.1 0 1.8 0 2.3-.2.6-.2 1-.6 1.2-1.2.2-.5.2-1.1.2-1.8zM14.5 18.5v-4l3.5 2-3.5 2z" fill="#fff"/>
      </svg>
    ),
    url: '#'
  },
  {
    name: 'Patreon',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#F96854"/>
        <rect x="8" y="8" width="4" height="16" rx="2" fill="#fff"/>
        <circle cx="20" cy="16" r="6" fill="#fff"/>
      </svg>
    ),
    url: 'https://www.patreon.com/zimmzimmgames'
  }
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
    <>
      <AboutSection />
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

        {/* Después de la sección de social links, antes del separator */}
        <div className={styles.characterAiSection}>
          <a
            href="https://character.ai/chat/oqreJlXJ_idtC2zeRbAvOaodI8TaPPK4lGy9ADgdvT0"
            className={styles.characterAiButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.characterAiIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d60000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M12 13c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"/></svg>
            </span>
            <span className={styles.characterAiText}>CB on Character.AI</span>
          </a>
          <a
            href="https://character.ai/chat/K6hx6D66uCgp7sffTctct3V8ZH15_fEhu4ws4iPQRFs"
            className={styles.characterAiButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.characterAiIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d60000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="4"/><circle cx="12" cy="8" r="4"/></svg>
            </span>
            <span className={styles.characterAiText}>Juno on Character.AI</span>
          </a>
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
    </>
  );
} 