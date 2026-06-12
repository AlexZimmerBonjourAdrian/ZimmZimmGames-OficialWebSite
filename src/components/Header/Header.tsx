import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import content from './content.json';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img
                            src={content.logo.src}
                            alt={content.logo.alt}
                            className={styles.logoImage}
                        />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/">{content.nav.home}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#gameplay">{content.nav.gameplay}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#characters">{content.nav.characters}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#concept-art">{content.nav.conceptArt}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#team">{content.nav.team}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#contact">{content.nav.contact}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#support">{content.nav.support}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;