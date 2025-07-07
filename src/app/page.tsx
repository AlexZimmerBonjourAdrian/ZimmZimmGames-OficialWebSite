'use client';

import HeroSection from '@/components/WataLanding/HeroSection';
import GameplaySection from '@/components/WataLanding/GameplaySection';
import StorySection from '@/components/WataLanding/StorySection';
import ScreenshotsSection from '@/components/WataLanding/ScreenshotsSection';
import FeaturesSection from '@/components/WataLanding/FeaturesSection';
import DownloadSection from '@/components/WataLanding/DownloadSection';
import Footer from '@/components/WataLanding/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Gameplay Section */}
      <GameplaySection />
      
      {/* Story Section */}
      <StorySection />
      
      {/* Screenshots Gallery */}
      <ScreenshotsSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Download Section */}
      <DownloadSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
