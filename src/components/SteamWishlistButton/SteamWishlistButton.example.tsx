import React from 'react';
import SteamWishlistButton from './SteamWishlistButton';

// Ejemplo de uso del componente SteamWishlistButton
const SteamWishlistButtonExample: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px', 
      padding: '20px',
      alignItems: 'center'
    }}>
      <h2>Steam Wishlist Button - Ejemplos</h2>
      
      {/* Tamaño pequeño */}
      <div>
        <h3>Tamaño Pequeño</h3>
        <SteamWishlistButton size="small" />
      </div>
      
      {/* Tamaño mediano (por defecto) */}
      <div>
        <h3>Tamaño Mediano (Por defecto)</h3>
        <SteamWishlistButton size="medium" />
      </div>
      
      {/* Tamaño grande */}
      <div>
        <h3>Tamaño Grande</h3>
        <SteamWishlistButton size="large" />
      </div>
      
      {/* Con clase personalizada */}
      <div>
        <h3>Con clase personalizada</h3>
        <SteamWishlistButton 
          size="medium" 
          className="custom-steam-button"
        />
      </div>
      
      {/* Múltiples botones en fila */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <SteamWishlistButton size="small" />
        <SteamWishlistButton size="medium" />
        <SteamWishlistButton size="large" />
      </div>
    </div>
  );
};

export default SteamWishlistButtonExample;
