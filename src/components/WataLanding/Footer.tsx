'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <img
          src="/Icon/ajuste_avatar_Documents-3.png"
          alt="ZimmZimm Games Logo"
          style={{ height: '64px', width: 'auto', display: 'block' }}
        />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>ZimmZimm Games</h3>
          <p>Estudio indie creando aventuras donde los conejos pueden ser villanos y tú puedes ser parte de la historia. ¡Gracias por apoyar y compartir la locura!</p>
        </div>
        <div className={styles.footerSection}>
          <h3>W.A.T.A</h3>
          <p>Un juego donde la aventura, el misterio y el humor se mezclan. ¿Te animas a luchar contra un conejo villanesco? Únete a la comunidad, apóyanos en Patreon o simplemente comparte el proyecto. ¡Cada ayuda cuenta!</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} ZimmZimm Games. Todos los derechos reservados. <span role="img" aria-label="conejo">🐰</span></p>
      </div>
    </footer>
  );
};

export default Footer; 