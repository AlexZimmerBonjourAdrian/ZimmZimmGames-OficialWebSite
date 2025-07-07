'use client';

import HeroSection from '@/components/WataLanding/HeroSection';
import ConceptArtComponent from '@/components/WataLanding/ConceptArtComponent';
import CharactersComponent from '@/components/WataLanding/CharactersComponent';
import DemoSection from '@/components/WataLanding/DemoSection';
import Footer from '@/components/WataLanding/Footer';


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
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
