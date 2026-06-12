'use client';

import React from 'react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import Copyright from '../Copyright/Copyright';
import content from './content.json';
import links from './links.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-gothic tracking-wider">{content.studio.name}</h3>
            <p className="text-gray-400 font-gothic text-sm">
              {content.studio.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-gothic">{content.sections.navigation}</h4>
            <ul className="space-y-2 font-gothic">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {content.nav.home}
                </Link>
              </li>
              <li>
                <Link href="#characters" className="text-gray-400 hover:text-white transition-colors">
                  {content.nav.characters}
                </Link>
              </li>
              <li>
                <Link href="#concept-art" className="text-gray-400 hover:text-white transition-colors">
                  {content.nav.conceptArt}
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                  {content.nav.team}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {content.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-400 hover:text-white transition-colors">
                  {content.nav.support}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-gothic">{content.sections.contactUs}</h4>
            <a
              href={`mailto:${content.studio.email}`}
              className="text-gray-400 hover:text-white transition-colors font-gothic text-sm block mb-4"
            >
              {content.studio.email}
            </a>
            <h4 className="text-lg font-bold mb-4 font-gothic">{content.sections.followUs}</h4>
            <div className="flex gap-4">
              <a
                href={links.discord}
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
            {content.copyright.replace('{currentYear}', currentYear.toString())}
          </p>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;