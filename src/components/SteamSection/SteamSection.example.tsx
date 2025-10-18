import React from 'react';
import SteamSection from './SteamSection';

// Ejemplo de uso del componente SteamSection
const SteamSectionExample: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: '#0f1419',
      minHeight: '100vh',
      padding: '20px 0'
    }}>
      <h1 style={{ 
        color: '#c7d5e0', 
        textAlign: 'center', 
        marginBottom: '40px',
        fontSize: '2.5rem'
      }}>
        Steam Section - Ejemplos
      </h1>
      
      {/* Sección completa por defecto */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#c7d5e0', 
          textAlign: 'center', 
          marginBottom: '20px',
          fontSize: '1.8rem'
        }}>
          Sección Completa (Por defecto)
        </h2>
        <SteamSection />
      </div>
      
      {/* Solo botón de Steam */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#c7d5e0', 
          textAlign: 'center', 
          marginBottom: '20px',
          fontSize: '1.8rem'
        }}>
          Solo Botón de Steam
        </h2>
        <SteamSection showCharacterGallery={false} />
      </div>
      
      {/* Botón grande con galería apilada */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#c7d5e0', 
          textAlign: 'center', 
          marginBottom: '20px',
          fontSize: '1.8rem'
        }}>
          Botón Grande + Galería Apilada
        </h2>
        <SteamSection 
          buttonSize="large" 
          galleryLayout="stacked"
        />
      </div>
      
      {/* Botón pequeño con galería en grid */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#c7d5e0', 
          textAlign: 'center', 
          marginBottom: '20px',
          fontSize: '1.8rem'
        }}>
          Botón Pequeño + Galería Grid
        </h2>
        <SteamSection 
          buttonSize="small" 
          galleryLayout="grid"
        />
      </div>
    </div>
  );
};

export default SteamSectionExample;
