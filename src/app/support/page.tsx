import { Metadata } from 'next';
import SupportPageClient from './SupportPageClient';

export const metadata: Metadata = {
  title: 'Support | ZimmZimm Games',
  description: 'Get support for ZimmZimm Games and W.A.T.A: Where Are The Alices?. Find help, report bugs, and contact our team.',
  keywords: [
    'ZimmZimm Games', 'support', 'help', 'bug report', 'W.A.T.A',
    'Where Are The Alices', 'game support', 'customer service', 'technical support'
  ],
  openGraph: {
    title: 'Support | ZimmZimm Games',
    description: 'Get support for ZimmZimm Games and W.A.T.A: Where Are The Alices?. Find help, report bugs, and contact our team.',
    url: 'https://zimmzimmgames.com/support',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games Support'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support | ZimmZimm Games',
    description: 'Get support for ZimmZimm Games and W.A.T.A.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
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

export default function SupportPage() {
  return <SupportPageClient />;
}
