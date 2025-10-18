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
        title="Configuración de partículas"
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
        <h4 style={{ margin: 0, fontSize: '14px' }}>Partículas</h4>
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
          Activar partículas
        </label>
      </div>

      {preferences.enabled && (
        <div>
          <div style={{ marginBottom: '8px', fontSize: '11px', opacity: 0.8 }}>
            Modo de rendimiento:
          </div>
          {[
            { key: 'auto', label: 'Automático', desc: 'Detecta automáticamente' },
            { key: 'high', label: 'Alto', desc: '50 partículas, alta calidad' },
            { key: 'medium', label: 'Medio', desc: '30 partículas, calidad media' },
            { key: 'low', label: 'Bajo', desc: '15 partículas, baja calidad' },
          ].map(({ key, label, desc }) => (
            <label
              key={key}
              style={{
                display: 'block',
                marginBottom: '5px',
                cursor: 'pointer',
                padding: '5px',
                borderRadius: '3px',
                backgroundColor: preferences.mode === key ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              }}
            >
              <input
                type="radio"
                name="performanceMode"
                value={key}
                checked={preferences.mode === key}
                onChange={() => handleModeChange(key)}
                style={{ marginRight: '8px' }}
              />
              <div>
                <div style={{ fontWeight: 'bold' }}>{label}</div>
                <div style={{ fontSize: '10px', opacity: 0.7 }}>{desc}</div>
              </div>
            </label>
          ))}
        </div>
      )}

      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.6 }}>
        Modo actual: {currentMode}
      </div>
    </div>
  );
};

export default ParticleControls;
