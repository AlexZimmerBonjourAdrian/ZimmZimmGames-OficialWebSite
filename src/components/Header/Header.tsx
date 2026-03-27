import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img 
              src="/Steam/Capsulas de Steam/Título del juego/titulo-wata-editable.png" 
              alt="W.A.T.A" 
              className={styles.logoImage}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#characters">Characters</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#concept-art">Concept Art</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#team">Team</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact">Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#support">Support</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
