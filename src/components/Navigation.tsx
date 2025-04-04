'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/dev-journal', label: 'Diario' },
    { href: '/about', label: 'Sobre Nosotros' },
    { href: '/faq', label: 'FAQ' },
    { href: '/support', label: 'Soporte' }
  ];

  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-gothic text-xl font-bold text-white">
            ZimmZimm Games
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-gothic ${
                    isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
                  } transition-colors`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-blue-400 bottom-[-4px]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button className="md:hidden text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 