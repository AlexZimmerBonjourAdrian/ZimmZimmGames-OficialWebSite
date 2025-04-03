// CÓDIGO TEMPORALMENTE DESHABILITADO
/*
import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  game: string;
  author: string;
  excerpt: string;
  content?: string;
}

export async function getAllEntries(): Promise<BlogEntry[]> {
  const entriesDirectory = path.join(process.cwd(), 'src/app/dev-journal/entries');
  const files = fs.readdirSync(entriesDirectory);

  const entries = files.map(filename => {
    const slug = filename.replace('.mdx', '');
    const filePath = path.join(entriesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    } as BlogEntry;
  });

  return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getEntryBySlug(slug: string): Promise<BlogEntry | null> {
  const filePath = path.join(process.cwd(), 'src/app/dev-journal/entries', `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    } as BlogEntry;
  } catch (error) {
    return null;
  }
}
*/

// Exportamos una versión mock de las funciones para evitar errores
export interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  game: string;
  author: string;
  excerpt: string;
  content?: string;
}

export async function getAllEntries(): Promise<BlogEntry[]> {
  return [];
}

export async function getEntryBySlug(): Promise<BlogEntry | null> {
  return null;
} 