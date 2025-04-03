'use client';

import React from 'react';
import { motion } from 'framer-motion';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';

export async function getStaticPaths() {
  const entriesDirectory = path.join(process.cwd(), 'src/app/dev-journal/entries');
  const files = fs.readdirSync(entriesDirectory);

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/app/dev-journal/entries', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      slug,
      mdxSource,
    },
  };
}

const BlogPost = ({ frontMatter, mdxSource }) => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
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
              {frontMatter.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime={frontMatter.date} className="font-gothic">
                {new Date(frontMatter.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full font-gothic">
                {frontMatter.game}
              </span>
              <span className="font-gothic">
                Por {frontMatter.author}
              </span>
            </div>
          </header>

          <div className="prose prose-invert max-w-none font-gothic">
            <MDXRemote {...mdxSource} />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost; 