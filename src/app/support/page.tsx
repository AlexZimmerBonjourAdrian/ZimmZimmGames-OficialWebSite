import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | W.A.T.A - Where Are The Alices? | Alice in Wonderland Horror Game',
  description: 'Get support for W.A.T.A - Where Are The Alices?, Alice in Wonderland horror visual novel, C.B. detective game. Report bugs, get help, and contact ZimmZimm Games team.',
  keywords: [
    'W.A.T.A', 'Where Are The Alices', 'Alice in Wonderland', 'support', 'help', 'bug report',
    'C.B.', 'Juno Hare', 'rabbit detective', 'corrupted Wonderland', 'dark Wonderland',
    'Cheshire Cat', 'Queen of Hearts', 'Alice Maine', 'Alice Queenstone', 'Alice Ludwig',
    'Alice Deeps', 'Alice Dinner', 'Blue Hare', 'Ashu Star', 'cannibals', 'trauma',
    'psychological horror', 'visual novel', 'Steam', 'ZimmZimm Games', 'game support'
  ],
  openGraph: {
    title: 'Support | W.A.T.A - Where Are The Alices? | Alice in Wonderland Horror Game',
    description: 'Get support for W.A.T.A - Where Are The Alices?, Alice in Wonderland horror visual novel, C.B. detective game. Report bugs, get help, and contact ZimmZimm Games team.',
    url: 'https://zimmzimmgames.com/support',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Where Are The Alices? Support'
      },
      {
        url: '/Gameplay/Case00-CB.jpg',
        width: 1280,
        height: 720,
        alt: 'W.A.T.A - C.B. Detective Support'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support | W.A.T.A - Where Are The Alices? | Alice in Wonderland Horror Game',
    description: 'Get support for W.A.T.A - Where Are The Alices?, Alice in Wonderland horror visual novel, C.B. detective game.',
    images: [
      '/images/Wata/WhereAreTheAlices.JPG',
      '/Gameplay/Case00-CB.jpg'
    ],
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
