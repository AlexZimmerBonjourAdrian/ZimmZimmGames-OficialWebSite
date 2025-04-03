// PÁGINA TEMPORALMENTE DESHABILITADA
/*
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getEntryBySlug } from '@/lib/blog';
import Footer from '@/components/Footer';

interface Props {
  params: {
    slug: string;
  };
}

const BlogPost = async ({ params }: Props) => {
  const entry = await getEntryBySlug(params.slug);
  
  if (!entry) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Entrada no encontrada</h1>
        </div>
      </div>
    );
  }

  const mdxSource = await serialize(entry.content || '');

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/dev-journal"
          className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors font-gothic"
        >
          ← Volver al diario
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-8 rounded-lg border border-gray-800"
        >
          <header className="mb-8">
            <h1 className="text-4xl font-bold font-gothic mb-4">
              {entry.title}
            </h1>
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

          <div className="prose prose-invert max-w-none font-gothic">
            <MDXRemote {...mdxSource} />
          </div>
        </motion.article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
*/

// Página temporal de "En construcción"
export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 font-gothic">
          Entrada del Diario
        </h1>
        <p className="text-gray-400 font-gothic">
          Esta sección está temporalmente en construcción.
        </p>
      </div>
    </div>
  )
} 