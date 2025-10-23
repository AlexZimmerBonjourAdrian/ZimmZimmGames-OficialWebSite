import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | ZimmZimm Games',
  description: 'Get support for ZimmZimm Games and W.A.T.A: Where Are The Alices?. Find help, report bugs, and contact our team.',
  keywords: [
    'ZimmZimm Games', 'support', 'help', 'bug report', 'W.A.T.A',
    'Where Are The Alices', 'game support', 'customer service', 'technical support'
  ],
  openGraph: {
    title: 'Support | ZimmZimm Games',
    description: 'Get support for ZimmZimm Games and W.A.T.A: Where Are The Alices?. Find help, report bugs, and contact our team.',
    url: 'https://zimmzimmgames.com/support',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games Support'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support | ZimmZimm Games',
    description: 'Get support for ZimmZimm Games and W.A.T.A.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
    creator: '@ZimmZimmGames'
  },
  alternates: {
    canonical: '/support'
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

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center font-gothic tracking-wider"
        >
          SUPPORT
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
            We're setting up our support system to help you with any questions or issues. In the meantime, you can reach us through our Discord community or social media.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
