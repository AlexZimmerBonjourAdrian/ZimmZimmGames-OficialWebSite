'use client';

import React from 'react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import Copyright from '../Copyright/Copyright';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-gothic tracking-wider">ZIMMZIMM GAMES</h3>
            <p className="text-gray-400 font-gothic text-sm">
              Independent studio specialized in unique horror and mystery experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-gothic">Navigation</h4>
            <ul className="space-y-2 font-gothic">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#characters" className="text-gray-400 hover:text-white transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="#concept-art" className="text-gray-400 hover:text-white transition-colors">
                  Concept Art
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-gothic">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/cNM9brehGR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-gothic text-sm">
            © {currentYear} ZimmZimm Games. All rights reserved.
          </p>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;

