'use client';

import styles from './GameExtrasSection.module.css';

const requirements = [
  {
    platform: 'PC',
    icon: '🖥️',
    details: [
      'SO: Windows /10/11',
      'Procesador: Intel Core 2 Duo 2.0 GHz',
      'Memoria: 2 GB RAM',
      'Gráficos: GPU con 2GB VRAM, DirectX 9.0c',
      'Almacenamiento: 4 GB de espacio disponible'
    ]
  },
  {
    platform: 'Android',
    icon: '📱',
    details: [
      'Próximamente'
    ]
  }
];

const socialLinks = [
  { name: 'Discord', icon: '🎮', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'YouTube', icon: '📺', url: '#' }
];

export default function GameExtrasSection() {
  return (
    <section className={styles.extrasSection}>
      {/* Header with decorative elements */}
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.sectionTitle}>Información del Juego</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      {/* Social Links */}
      <div className={styles.socialSection}>
        <span className={styles.socialLabel}>Comunidad:</span>
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
        <h3 className={styles.requirementsTitle}>Requisitos Técnicos Completos</h3>
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