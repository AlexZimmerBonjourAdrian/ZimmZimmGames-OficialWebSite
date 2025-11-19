'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-gothic tracking-wider">ZIMMZIMM GAMES</h3>
            <p className="text-gray-400 font-gothic text-sm">
              Estudio independiente especializado en experiencias únicas de terror y misterio.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-gothic">Enlaces</h4>
            <ul className="space-y-2 font-gothic">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/wata" className="text-gray-400 hover:text-white transition-colors">
                  W.A.T.A
                </Link>
              </li>
              <li>
                <Link href="/dev-journal" className="text-gray-400 hover:text-white transition-colors">
                  Dev Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-gothic">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/ZimmZimmGames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://github.com/ZimmZimmGames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://discord.gg/zimmzimm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://youtube.com/@zimmzimmgames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-gothic text-sm">
            © {currentYear} ZimmZimm Games. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

