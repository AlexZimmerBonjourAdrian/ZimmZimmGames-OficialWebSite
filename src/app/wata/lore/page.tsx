import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W.A.T.A Lore | Corrupted Wonderland — Final Letter of the Dormouse',
  description: 'A corrupted Wonderland where survival replaces compassion. The Dormouse’s final letter denounces the tyrant child-queen and hails the White Rabbit as the only true king.',
  keywords: [
    'corrupted Wonderland',
    'Dormouse final letter',
    'tyrant queen',
    'White Rabbit true king',
    'no compassion',
    'survival state',
    'beheading',
    'traitor to the system',
    'psychological horror',
    'visual novel'
  ],
  openGraph: {
    title: 'W.A.T.A Lore | Corrupted Wonderland — Final Letter of the Dormouse',
    description: 'A corrupted Wonderland where survival replaces compassion. The Dormouse’s final letter denounces the tyrant child-queen and hails the White Rabbit as the only true king.',
    url: 'https://zimmzimmgames.com/wata/lore',
    siteName: 'ZimmZimm Games',
    images: [
      { url: '/images/Wata/WhereAreTheAlices.JPG', width: 1200, height: 630, alt: 'Corrupted Wonderland — W.A.T.A Lore', type: 'image/jpeg' }
    ],
    locale: 'en_US',
    type: 'article',
  },
  alternates: { canonical: '/wata/lore' },
  robots: { index: true, follow: true }
};

export default function LorePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <article className="max-w-3xl mx-auto px-4 space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-gothic font-bold tracking-wider">Corrupted Wonderland</h1>
          <p className="text-gray-300">Final Letter of the Dormouse</p>
        </header>

        <section className="space-y-6 text-gray-200 leading-relaxed font-gothic">
          <p>
            Wonderland is a hell. Most of its inhabitants are functional psychopaths. We live in a state of
            survival, pretending to everyone else while trying not to drown. Death brings mockery, not compassion.
            Everyone looks out for themselves: you either belong to the system, or you are a traitor.
          </p>
          <p>
            We are ruled by a child who — even if she didn’t arrive with ill intent — will become a cruel tyrant
            sooner or later. That’s how it has always been. No one is free. We are all imprisoned: if not by the fear
            of beheading, then by the need to exploit, or to be exploited. There is no place for compassion here,
            though a few still try. Poor fools.
          </p>
          <p>
            My name is the Dormouse, and this is my final letter: damn the Queen and her wretched government of tyrants.
            Long live the White Rabbit — the only true king.
          </p>
        </section>
      </article>
    </main>
  );
}


