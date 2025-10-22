import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dev Journal | ZimmZimm Games',
  description: 'Development journal and behind-the-scenes content from ZimmZimm Games. Follow our journey creating unique psychological horror and mystery experiences.',
  keywords: [
    'ZimmZimm Games', 'dev journal', 'game development', 'behind the scenes',
    'W.A.T.A', 'development blog', 'indie game development', 'psychological horror'
  ],
  openGraph: {
    title: 'Dev Journal | ZimmZimm Games',
    description: 'Development journal and behind-the-scenes content from ZimmZimm Games. Follow our journey creating unique psychological horror and mystery experiences.',
    url: 'https://zimmzimmgames.com/dev-journal',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games Dev Journal'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Journal | ZimmZimm Games',
    description: 'Development journal and behind-the-scenes content from ZimmZimm Games.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
    creator: '@ZimmZimmGames'
  },
  alternates: {
    canonical: '/dev-journal'
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

export default function DevJournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
