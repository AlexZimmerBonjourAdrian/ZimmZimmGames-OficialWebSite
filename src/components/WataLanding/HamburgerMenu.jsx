'use client';
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Gameplay', href: '#gameplay' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Extras', href: '#extras' },
  { name: 'Contact', href: '#contact' },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.hamburgerBtn}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <nav
            className={styles.menu}
            onClick={e => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul className={styles.menuList}>
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className={styles.menuLink} onClick={() => setOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
} 