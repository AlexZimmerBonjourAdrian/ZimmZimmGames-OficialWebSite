'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Header.module.css';
import content from './content.json';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href;
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
                        <li className={`${styles.navItem} ${isActive('/') ? styles.active : ''}`}>
                            <Link href="/">{content.nav.home}</Link>
                        </li>
                        <li className={`${styles.navItem} ${isActive('/press-kit') ? styles.active : ''}`}>
                            <Link href="/press-kit">{content.nav.pressKit}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#contact">{content.nav.contact}</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#team">{content.nav.team}</Link>
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
                            <li className={`${styles.mobileNavItem} ${isActive('/') ? styles.active : ''}`}>
                                <Link href="/" onClick={closeMobileMenu}>{content.nav.home}</Link>
                            </li>
                            <li className={`${styles.mobileNavItem} ${isActive('/press-kit') ? styles.active : ''}`}>
                                <Link href="/press-kit" onClick={closeMobileMenu}>{content.nav.pressKit}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#contact" onClick={closeMobileMenu}>{content.nav.contact}</Link>
                            </li>
                            <li className={styles.mobileNavItem}>
                                <Link href="#team" onClick={closeMobileMenu}>{content.nav.team}</Link>
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