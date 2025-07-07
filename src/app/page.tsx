'use client';

import HeroSection from '@/components/WataLanding/HeroSection';
import ConceptArtComponent from '@/components/WataLanding/ConceptArtComponent';
import Footer from '@/components/WataLanding/Footer';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Concept Art Section */}
      <ConceptArtComponent />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
