import { ReactNode } from 'react';

declare module 'next/metadata' {
  export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string[];
    authors?: { name: string; url?: string }[];
    creator?: string;
    publisher?: string;
    formatDetection?: {
      email?: boolean;
      address?: boolean;
      telephone?: boolean;
    };
    metadataBase?: URL;
    alternates?: {
      canonical?: string | URL;
      languages?: { [key: string]: string | URL };
    };
    openGraph?: {
      title?: string;
      description?: string;
      url?: string | URL;
      siteName?: string;
      images?: {
        url: string | URL;
        width?: number;
        height?: number;
        alt?: string;
      }[];
      locale?: string;
      type?: string;
    };
    twitter?: {
      card?: string;
      site?: string;
      creator?: string;
      title?: string;
      description?: string;
      image?: string | URL;
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      nocache?: boolean;
      googleBot?: {
        index?: boolean;
        follow?: boolean;
        noimageindex?: boolean;
      };
    };
    icons?: {
      icon?: string | URL;
      shortcut?: string | URL;
      apple?: string | URL;
      other?: {
        rel: string;
        url: string | URL;
      }[];
    };
    viewport?: {
      width?: string | number;
      height?: string | number;
      initialScale?: number;
      minimumScale?: number;
      maximumScale?: number;
      userScalable?: boolean;
    };
    verification?: {
      google?: string;
      yandex?: string;
      yahoo?: string;
      other?: {
        name: string;
        content: string;
      }[];
    };
  }
  
  export function generateMetadata(): Metadata | Promise<Metadata>;
} 