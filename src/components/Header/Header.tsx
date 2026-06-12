'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Header.module.css';
import content from './content.json';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" onClick={closeMobileMenu}>
                        <img
                            src={content.logo.src}
                            alt={content.logo.alt}
                            className={styles.logoImage}
                        />
                    </Link>
                </div>
                
                {/* Botón hamburguesa para móviles */}
                <button 
                    className={styles.mobileMenuButton}
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>

                {/* Navegación desktop */}
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
                
                {/* Menú móvil */}
                {isMobileMenuOpen && (
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileNavList}>
                            <li className={styles.mobileNavItem}>
                                <Link href="/" onClick={closeMobileMenu}>{content.nav.home}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#gameplay" onClick={closeMobileMenu}>{content.nav.gameplay}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#characters" onClick={closeMobileMenu}>{content.nav.characters}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#concept-art" onClick={closeMobileMenu}>{content.nav.conceptArt}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#team" onClick={closeMobileMenu}>{content.nav.team}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#contact" onClick={closeMobileMenu}>{content.nav.contact}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#support" onClick={closeMobileMenu}>{content.nav.support}</Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;