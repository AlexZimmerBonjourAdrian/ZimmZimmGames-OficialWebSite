'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const DevJournalPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center font-gothic tracking-wider"
        >
          DEV JOURNAL
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
            We're working on bringing you behind-the-scenes content, development updates, and insights into our creative process. Stay tuned!
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default DevJournalPage;
