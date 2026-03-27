'use client';
import { useState, useEffect } from 'react';

const ParticleControls = ({ onPerformanceChange, currentMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('particlePreferences') || '{"mode": "auto", "enabled": true}');
    }
    return { mode: 'auto', enabled: true };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('particlePreferences', JSON.stringify(preferences));
    }
  }, [preferences]);

  const handleModeChange = (mode) => {
    const newPreferences = { ...preferences, mode };
    setPreferences(newPreferences);
    onPerformanceChange(mode);
  };

  const toggleParticles = () => {
    const newPreferences = { ...preferences, enabled: !preferences.enabled };
    setPreferences(newPreferences);
    onPerformanceChange(newPreferences.enabled ? preferences.mode : 'disabled');
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          zIndex: 1000,
          fontSize: '12px',
        }}
        title="Particle Settings"
      >
        ⚙️
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '15px',
        borderRadius: '10px',
        zIndex: 1000,
        minWidth: '200px',
        fontFamily: 'var(--font-courier)',
        fontSize: '12px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h4 style={{ margin: 0, fontSize: '14px' }}>Particles</h4>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ×
        </button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={preferences.enabled}
            onChange={toggleParticles}
            style={{ marginRight: '8px' }}
          />
          Enable Particles
        </label>
      </div>

      {preferences.enabled && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ marginBottom: '5px', opacity: 0.7 }}>Performance:</span>
          <button
            onClick={() => handleModeChange('low')}
            style={{
              background: preferences.mode === 'low' ? 'white' : 'rgba(255, 255, 255, 0.1)',
              color: preferences.mode === 'low' ? 'black' : 'white',
              border: 'none',
              padding: '5px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '10px',
            }}
          >
            Low (Performance)
          </button>
          <button
            onClick={() => handleModeChange('auto')}
            style={{
              background: preferences.mode === 'auto' ? 'white' : 'rgba(255, 255, 255, 0.1)',
              color: preferences.mode === 'auto' ? 'black' : 'white',
              border: 'none',
              padding: '5px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '10px',
            }}
          >
            Auto (Balanced)
          </button>
          <button
            onClick={() => handleModeChange('high')}
            style={{
              background: preferences.mode === 'high' ? 'white' : 'rgba(255, 255, 255, 0.1)',
              color: preferences.mode === 'high' ? 'black' : 'white',
              border: 'none',
              padding: '5px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '10px',
            }}
          >
            High (Quality)
          </button>
        </div>
      )}

      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.6 }}>
        Current Mode: {currentMode}
      </div>
    </div>
  );
};

export default ParticleControls;
