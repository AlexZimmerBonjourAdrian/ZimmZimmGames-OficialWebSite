'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const SupportPageClient = () => {
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

export default SupportPageClient;

