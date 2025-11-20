import { Metadata } from 'next';
import WhereAreTheAlicesClient from './WhereAreTheAlicesClient';

export const metadata: Metadata = {
  title: 'W.A.T.A: Where Are The Alices? | Psychological Horror Visual Novel',
  description: 'A sadistic villain forces a detective, who hides a past of madness, to return to her own Wonderland to solve a girl\'s kidnapping, in a twisted psychological game where sanity is the greatest threat.',
  keywords: [
    'W.A.T.A', 'Where Are The Alices', 'psychological horror', 'visual novel',
    'Alice in Wonderland', 'indie game', 'Steam', 'dark fantasy', 'noir',
    'detective game', 'ZimmZimm Games'
  ],
  openGraph: {
    title: 'W.A.T.A: Where Are The Alices? | Psychological Horror Visual Novel',
    description: 'A sadistic villain forces a detective, who hides a past of madness, to return to her own Wonderland to solve a girl\'s kidnapping, in a twisted psychological game where sanity is the greatest threat.',
    url: 'https://zimmzimmgames.com/where-are-the-alices',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A: Where Are The Alices? - Psychological Horror Visual Novel'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W.A.T.A: Where Are The Alices? | Psychological Horror Visual Novel',
    description: 'A sadistic villain forces a detective, who hides a past of madness, to return to her own Wonderland to solve a girl\'s kidnapping, in a twisted psychological game where sanity is the greatest threat.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
    creator: '@ZimmZimmGames'
  },
  alternates: {
    canonical: '/where-are-the-alices'
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

export default function WhereAreTheAlices() {
  return <WhereAreTheAlicesClient />;
}
