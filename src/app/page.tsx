'use client';

import HeroSection from '@/components/WataLanding/HeroSection';
import ConceptArtComponent from '@/components/WataLanding/ConceptArtComponent';
import CharactersComponent from '@/components/WataLanding/CharactersComponent';
import DemoSection from '@/components/WataLanding/DemoSection';
import Footer from '@/components/WataLanding/Footer';
import GameplaySection from '@/components/WataLanding/GameplaySection';
import EngineSection from '@/components/WataLanding/EngineSection';
import SectionDivider from '@/components/WataLanding/SectionDivider';
import UpdatesSection from '@/components/WataLanding/UpdatesSection';
import PatreonSection from '@/components/WataLanding/PatreonSection';
import TeamSelector from '@/components/WataLanding/TeamSelector';
import LaunchInfoSection from '@/components/WataLanding/LaunchInfoSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Demo Section - MOVIDO ARRIBA para mejor conversión */}
      <DemoSection />
      <SectionDivider />
      
      {/* Launch Info Section */}
      <LaunchInfoSection />
      <SectionDivider />
      
      {/* Gameplay Section */}
      <GameplaySection />
      <SectionDivider />
      
      {/* Concept Art Section */}
      <ConceptArtComponent />
      <SectionDivider />
      
      {/* Characters Section */}
      <CharactersComponent />
      <SectionDivider />

      {/* Team Selector Section */}
      <TeamSelector />
      <SectionDivider />
      
      {/* Patreon Section */}
      <PatreonSection />
      <SectionDivider />

      {/* Engine Section */}
      <EngineSection />
      <SectionDivider />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
