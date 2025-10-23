import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | ZimmZimm Games',
  description: 'Frequently asked questions about ZimmZimm Games, W.A.T.A: Where Are The Alices?, and our development process.',
  keywords: [
    'ZimmZimm Games', 'FAQ', 'frequently asked questions', 'W.A.T.A',
    'Where Are The Alices', 'game support', 'indie games', 'visual novel'
  ],
  openGraph: {
    title: 'FAQ | ZimmZimm Games',
    description: 'Frequently asked questions about ZimmZimm Games, W.A.T.A: Where Are The Alices?, and our development process.',
    url: 'https://zimmzimmgames.com/faq',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games FAQ'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | ZimmZimm Games',
    description: 'Frequently asked questions about ZimmZimm Games and W.A.T.A.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
    creator: '@ZimmZimmGames'
  },
  alternates: {
    canonical: '/faq'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center font-gothic tracking-wider"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-2xl font-bold mb-4 font-gothic text-gray-400">
            COMING SOON
          </h2>
          <p className="text-gray-500 font-gothic">
            We're preparing a comprehensive FAQ section to answer all your questions about our games and development process. Check back soon!
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
