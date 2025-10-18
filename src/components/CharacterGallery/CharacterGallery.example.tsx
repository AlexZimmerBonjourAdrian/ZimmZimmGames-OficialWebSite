import React from 'react';
import CharacterGallery from './CharacterGallery';

// Ejemplo de uso del componente CharacterGallery
const CharacterGalleryExample: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '40px', 
      padding: '20px',
      alignItems: 'center',
      backgroundColor: '#0f1419',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#c7d5e0', textAlign: 'center' }}>
        Character Gallery - Ejemplos
      </h1>
      
      {/* Layout por defecto (grid) */}
      <div>
        <h2 style={{ color: '#c7d5e0', textAlign: 'center', marginBottom: '20px' }}>
          Layout Grid (Por defecto)
        </h2>
        <CharacterGallery />
      </div>
      
      {/* Layout sin títulos */}
      <div>
        <h2 style={{ color: '#c7d5e0', textAlign: 'center', marginBottom: '20px' }}>
          Sin títulos
        </h2>
        <CharacterGallery showTitles={false} />
      </div>
      
      {/* Layout apilado */}
      <div>
        <h2 style={{ color: '#c7d5e0', textAlign: 'center', marginBottom: '20px' }}>
          Layout Apilado
        </h2>
        <CharacterGallery layout="stacked" />
      </div>
      
      {/* Con clase personalizada */}
      <div>
        <h2 style={{ color: '#c7d5e0', textAlign: 'center', marginBottom: '20px' }}>
          Con clase personalizada
        </h2>
        <CharacterGallery 
          className="custom-gallery"
          showTitles={true}
          layout="grid"
        />
      </div>
    </div>
  );
};

export default CharacterGalleryExample;
