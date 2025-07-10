'use client';

import React from 'react';

const WATA: React.FC = () => {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2rem', 
        position: 'relative' 
      }}>
        <div style={{ textAlign: 'center', maxWidth: 800 }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: '#FFD700', 
            marginBottom: '1rem', 
            textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' 
          }}>
            Where are the Alices?
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#FFD700', 
            marginBottom: '2rem', 
            opacity: 0.8 
          }}>
            A Psychological Horror Game
          </p>
          <div style={{ 
            marginBottom: '3rem', 
            color: '#FFD700', 
            fontSize: '1.2rem', 
            opacity: 0.9 
          }}>
            <p>Enter a world where nightmares come to life and dolls hold dark secrets. Discover what really happened to the Alices... if you dare.</p>
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center' 
          }}>
            <button style={{ 
              padding: '1rem 2.5rem', 
              fontSize: '1.2rem', 
              background: 'transparent', 
              border: '2px solid #FFD700', 
              color: '#FFD700', 
              cursor: 'pointer', 
              minWidth: 200 
            }}>
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem', 
        padding: '4rem 2rem', 
        maxWidth: 1200, 
        margin: '0 auto' 
      }}>
        <div style={{ 
          padding: '2rem', 
          border: '1px solid #333', 
          borderRadius: '8px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ color: '#FFD700', marginBottom: '1rem' }}>Nintendo Switch</h3>
          <p style={{ opacity: 0.7 }}>Coming Soon</p>
        </div>
        <div style={{ 
          padding: '2rem', 
          border: '1px solid #333', 
          borderRadius: '8px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ color: '#FFD700', marginBottom: '1rem' }}>PC / Mac</h3>
          <p style={{ opacity: 0.7 }}>Coming Soon</p>
        </div>
        <div style={{ 
          padding: '2rem', 
          border: '1px solid #333', 
          borderRadius: '8px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ color: '#FFD700', marginBottom: '1rem' }}>PlayStation</h3>
          <p style={{ opacity: 0.7 }}>Coming Soon</p>
        </div>
      </div>

      {/* News Section */}
      <section style={{ 
        padding: '6rem 2rem', 
        background: '#111', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#FFD700', 
            marginBottom: '2rem', 
            textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' 
          }}>
            Dare to Enter?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            opacity: 0.9, 
            lineHeight: 1.6, 
            color: '#FFD700' 
          }}>
            Step into a world where nightmares come to life and dolls hold dark secrets. 
            Discover what really happened to the Alices... if you dare.
          </p>
          <button style={{ 
            padding: '1rem 3rem', 
            fontSize: '1.3rem', 
            background: 'transparent', 
            border: '2px solid #FFD700', 
            color: '#FFD700', 
            cursor: 'pointer' 
          }}>
            Very Soon
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem', 
        background: '#111', 
        textAlign: 'center', 
        borderTop: '1px solid #333' 
      }}>
        <p style={{ opacity: 0.7 }}>© 2024 ZimmZimm Games. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WATA; 