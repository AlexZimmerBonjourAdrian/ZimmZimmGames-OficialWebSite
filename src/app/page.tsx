'use client';

import HeroSection from '@/components/WataLanding/HeroSection';
import ConceptArtComponent from '@/components/WataLanding/ConceptArtComponent';
import CharactersComponent from '@/components/WataLanding/CharactersComponent';
import DemoSection from '@/components/WataLanding/DemoSection';
import GameExtrasSection from '@/components/WataLanding/GameExtrasSection';
import Footer from '@/components/WataLanding/Footer';
import TrailerSection from '@/components/WataLanding/TrailerSection';
import GameplaySection from '@/components/WataLanding/GameplaySection';
//import PlatformsSection from '@/components/WataLanding/PlatformsSection';
import EngineSection from '@/components/WataLanding/EngineSection';
import SectionDivider from '@/components/WataLanding/SectionDivider';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      
      {/* Hero Section */}
      <HeroSection />
      {/* Gameplay Section */}
      <GameplaySection />
      <SectionDivider />
      {/* <PlatformsSection /> */}
      
      {/* Concept Art Section */}
      <ConceptArtComponent />
      <SectionDivider />
      
      {/* Characters Section */}
      <CharactersComponent />
      <SectionDivider />
      
      {/* Demo Section */}
      <DemoSection />
      <SectionDivider />

      {/* Trailer Section */}
      <TrailerSection />
      <SectionDivider />

      {/* Game Extras Section */}
      <GameExtrasSection />
      <SectionDivider />
      {/* Engine Section */}
      <EngineSection />
      <SectionDivider />
      {/* Extras Carousel Section */}
      {/*<ExtrasCarouselSection />*/}
      
      {/* Rating Label */}
      {/*<RatingLabel />*/}
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
