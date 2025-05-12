'use client';

import React from 'react';
import Image from 'next/image';
import PlatformSection from '../../components/WATA/PlatformSection';
import SupportSection from '../../components/WATA/SupportSection';
import DemoSection from '../../components/WATA/DemoSection';
import RabbitHoleSection from '../../components/WATA/RabbitHoleSection';
import Footer from '../../components/WATA/Footer';
import InteractiveStorie from '../../components/WATA/interactiveStorie';

const WATA = () => {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', position: 'relative' }}>
        <Image 
          src="/images/zimmzimmgames-logo.png" 
          alt="ZimmZimmGames Logo" 
          width={200}
          height={80}
          style={{ marginBottom: '3rem', filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.3))' }}
        />
        <div style={{ textAlign: 'center', maxWidth: 800 }}>
          <h1 style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '1rem', textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}>
            Where are the Alices?
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#FFD700', marginBottom: '2rem', opacity: 0.8 }}>
            A Psychological Horror Game
          </p>
          <div style={{ marginBottom: '3rem', color: '#FFD700', fontSize: '1.2rem', opacity: 0.9 }}>
            <p>Enter a world where nightmares come to life and dolls hold dark secrets. Discover what really happened to the Alices... if you dare.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', background: 'transparent', border: '2px solid #FFD700', color: '#FFD700', cursor: 'pointer', minWidth: 200 }}>
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '4rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <PlatformSection 
          title="Nintendo Switch"
          platforms={['Nintendo eShop', 'Physical Edition']}
          disabled={true}
        />
        <PlatformSection 
          title="PC / Mac"
          platforms={['Steam', 'Epic Games', 'GOG']}
          disabled={true}
          hasDemo={true}
        />
        <PlatformSection 
          title="PlayStation"
          platforms={['PS4 / PS5', 'Physical Edition']}
          disabled={true}
        />
      </div>

      {/* Mobile Platforms */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '0 2rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
        <PlatformSection 
          title="Android"
          platforms={['Google Play Store']}
          disabled={true}
        />
        <PlatformSection 
          title="iOS"
          platforms={['App Store']}
          disabled={true}
        />
      </div>

      {/* News Section */}
      <section style={{ padding: '6rem 2rem', background: '#111', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '2rem', textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}>
            Dare to Enter?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, lineHeight: 1.6, color: '#FFD700' }}>
            Step into a world where nightmares come to life and dolls hold dark secrets. 
            Discover what really happened to the Alices... if you dare.
          </p>
          <button style={{ padding: '1rem 3rem', fontSize: '1.3rem', background: 'transparent', border: '2px solid #FFD700', color: '#FFD700', cursor: 'pointer' }}>
            Very Soon
          </button>
        </div>
      </section>

      {/* Support Section */}
      <SupportSection />

      {/* Demo Section */}
      <DemoSection />

      {/* Rabbit Hole Section */}
      <RabbitHoleSection />

      {/* Interactive Story Section */}
      <InteractiveStorie />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WATA;
