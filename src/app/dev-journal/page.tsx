// PÁGINA TEMPORALMENTE DESHABILITADA
/*
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllEntries } from '@/lib/blog';
import Footer from '@/components/Footer';

interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  game: string;
  author: string;
  excerpt: string;
}

const DevJournal = async () => {
  const entries = await getAllEntries();

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center font-gothic tracking-wider"
        >
          DIARIO DE DESARROLLO
        </motion.h1>

        <div className="space-y-12">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <Link href={`/dev-journal/${entry.slug}`} className="block">
                <header className="mb-6">
                  <h2 className="text-2xl font-bold font-gothic mb-2 hover:text-blue-400 transition-colors">
                    {entry.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <time dateTime={entry.date} className="font-gothic">
                      {new Date(entry.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full font-gothic">
                      {entry.game}
                    </span>
                    <span className="font-gothic">
                      Por {entry.author}
                    </span>
                  </div>
                </header>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 font-gothic line-clamp-3">
                    {entry.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DevJournal;
*/

// Página temporal de "En construcción"
export default function DevJournal() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 font-gothic">
          Diario de Desarrollo
        </h1>
        <p className="text-gray-400 font-gothic">
          Esta sección está temporalmente en construcción.
        </p>
      </div>
    </div>
  )
} 