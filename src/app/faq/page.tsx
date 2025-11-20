import { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ | ZimmZimm Games',
  description: 'Frequently asked questions about ZimmZimm Games, W.A.T.A: Where Are The Alices?, and our development process.',
  keywords: [
    'ZimmZimm Games', 'FAQ', 'frequently asked questions', 'W.A.T.A',
    'Where Are The Alices', 'game support', 'indie games', 'visual novel'
  ],
  openGraph: {
    title: 'FAQ | ZimmZimm Games',
    description: 'Frequently asked questions about ZimmZimm Games, W.A.T.A: Where Are The Alices?, and our development process.',
    url: 'https://zimmzimmgames.com/faq',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games FAQ'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | ZimmZimm Games',
    description: 'Frequently asked questions about ZimmZimm Games and W.A.T.A.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
    creator: '@ZimmZimmGames'
  },
  alternates: {
    canonical: '/faq'
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

export default function FAQPage() {
  return <FAQPageClient />;
}
