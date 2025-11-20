import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compresión
  compress: true,

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/Font/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/Icon/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/Music/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/Books/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirecciones para SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/game',
        destination: '/wata',
        permanent: true,
      },
      {
        source: '/wata-game',
        destination: '/wata',
        permanent: true,
      },
      // Redirecciones específicas para Alicia
      {
        source: '/alice',
        destination: '/wata',
        permanent: true,
      },
      {
        source: '/alicia',
        destination: '/wata',
        permanent: true,
      },
      {
        source: '/wonderland',
        destination: '/wata',
        permanent: true,
      },
      {
        source: '/visual-novel',
        destination: '/wata',
        permanent: true,
      },
      {
        source: '/novela-visual',
        destination: '/wata',
        permanent: true,
      },
      // Redirecciones para plataformas
      {
        source: '/steam',
        destination: '/wata/steam',
        permanent: true,
      },
      {
        source: '/itchio',
        destination: '/wata/itchio',
        permanent: true,
      },
      {
        source: '/gamejolt',
        destination: '/wata/gamejolt',
        permanent: true,
      },
    ];
  },

  // Nota: sin configuración webpack personalizada para compatibilidad con Turbopack

  // Configuración de experimental features
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['framer-motion', 'react-icons'],
    // Optimizaciones de preloading
    webpackBuildWorker: true,
  },

  // Configuración de paquetes externos del servidor
  serverExternalPackages: [],

  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Configuración de output
  output: 'standalone',

  // Configuración de trailing slash
  trailingSlash: false,

  // Configuración de base path (si es necesario)
  // basePath: '',

  // Configuración de asset prefix (si es necesario)
  // assetPrefix: '',

  // Configuración de powered by header
  poweredByHeader: false,

  // Configuración de react strict mode
  reactStrictMode: true,

  // Nota: swcMinify es obsoleto en Next 15
};

export default nextConfig;
