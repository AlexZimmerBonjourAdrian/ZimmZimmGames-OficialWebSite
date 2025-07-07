'use client';

import HeroSection from '@/components/WataLanding/HeroSection';
import ConceptArtComponent from '@/components/WataLanding/ConceptArtComponent';
import CharactersComponent from '@/components/WataLanding/CharactersComponent';
import DemoSection from '@/components/WataLanding/DemoSection';
import GameExtrasSection from '@/components/WataLanding/GameExtrasSection';
import Footer from '@/components/WataLanding/Footer';
import TrailerSection from '@/components/WataLanding/TrailerSection';
import ExtrasCarouselSection from '@/components/WataLanding/ExtrasCarouselSection';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Concept Art Section */}
      <ConceptArtComponent />
      
      {/* Characters Section */}
      <CharactersComponent />
      
      {/* Demo Section */}
      <DemoSection />

      {/* Trailer Section */}
      <TrailerSection />

      {/* Game Extras Section */}
      <GameExtrasSection />

      {/* Extras Carousel Section */}
      <ExtrasCarouselSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
