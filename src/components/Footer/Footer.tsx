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
    <footer className="bg-black border-t border-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;