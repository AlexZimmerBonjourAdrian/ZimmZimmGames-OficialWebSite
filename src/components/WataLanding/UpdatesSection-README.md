# UpdatesSection Component

Un componente React animado para mostrar las últimas actualizaciones del juego, con imágenes a la izquierda y fácil integración con JavaScript.

## Características

- ✅ **Animaciones suaves**: Entrada deslizante y efectos hover
- ✅ **Imágenes a la izquierda**: Cada actualización tiene una imagen asignada
- ✅ **Fácil actualización con JavaScript**: API simple para añadir/modificar actualizaciones
- ✅ **Categorías**: Sistema de categorías para organizar actualizaciones
- ✅ **Marcado de "Nuevo"**: Las actualizaciones nuevas se destacan automáticamente
- ✅ **Responsive**: Diseño adaptativo para móviles y tablets
- ✅ **Auto-rotación**: Las actualizaciones se muestran automáticamente
- ✅ **Controles manuales**: Puntos de navegación para control manual

## Archivos del Componente

```
src/components/WataLanding/
├── UpdatesSection.jsx          # Componente principal
├── UpdatesSection.module.css   # Estilos y animaciones
├── updatesManager.js           # Gestor JavaScript para actualizaciones
├── updates-example.html        # Ejemplo de uso
└── UpdatesSection-README.md    # Esta documentación
```

## Uso Básico

### 1. Importar el Componente

```jsx
import UpdatesSection from './components/WataLanding/UpdatesSection';

function App() {
  return (
    <div>
      <UpdatesSection />
    </div>
  );
}
```

### 2. Importar el Gestor JavaScript

```html
<!-- En tu HTML o en el head del documento -->
<script src="/src/components/WataLanding/updatesManager.js"></script>
```

O en tu componente React:

```jsx
import './components/WataLanding/updatesManager.js';
```

## API JavaScript

### Funciones Principales

#### `UpdatesManager.addUpdate(updateData)`
Añade una nueva actualización.

```javascript
// Ejemplo básico
UpdatesManager.addUpdate({
  title: "Nueva mecánica implementada",
  description: "Se ha añadido un sistema de puzzles completamente nuevo.",
  category: "Gameplay",
  image: "/images/Wata/Menu-3.PNG"
});
```

#### `UpdatesManager.markAsRead(updateId)`
Marca una actualización como leída.

```javascript
UpdatesManager.markAsRead(1); // Marca la actualización con ID 1 como leída
```

#### `UpdatesManager.getUpdates()`
Obtiene todas las actualizaciones actuales.

```javascript
const updates = UpdatesManager.getUpdates();
console.log(updates);
```

#### `UpdatesManager.clearUpdates()`
Elimina todas las actualizaciones.

```javascript
UpdatesManager.clearUpdates();
```

### Funciones Rápidas

#### `addGameUpdate(title, description)`
Añade una actualización de gameplay.

```javascript
addGameUpdate(
  "Nueva mecánica de puzzle",
  "Sistema de puzzles completamente renovado"
);
```

#### `addAudioUpdate(title, description)`
Añade una actualización de audio.

```javascript
addAudioUpdate(
  "Mejoras en el sistema de audio",
  "Efectos 3D y música dinámica implementados"
);
```

#### `addTechnicalUpdate(title, description)`
Añade una actualización técnica.

```javascript
addTechnicalUpdate(
  "Optimización de rendimiento",
  "Mejoras significativas en FPS"
);
```

#### `addVisualUpdate(title, description)`
Añade una actualización visual.

```javascript
addVisualUpdate(
  "Nuevos assets visuales",
  "Más de 50 nuevos elementos gráficos"
);
```

#### `addBugFix(description)`
Añade una corrección de bug.

```javascript
addBugFix("Se corrigieron varios errores menores de estabilidad");
```

#### `addFeatureUpdate(title, description)`
Añade una nueva característica.

```javascript
addFeatureUpdate(
  "Modo multijugador",
  "Nuevo modo cooperativo para 2-4 jugadores"
);
```

## Estructura de Datos

Cada actualización tiene la siguiente estructura:

```javascript
{
  id: 1,                    // ID único (se genera automáticamente)
  title: "Título",          // Título de la actualización
  description: "Descripción", // Descripción detallada
  date: "2024-01-15",       // Fecha (se genera automáticamente)
  image: "/path/to/image",  // Ruta de la imagen
  category: "Gameplay",     // Categoría (Gameplay, Audio, Technical, Visual)
  isNew: true              // Si es nueva (se marca automáticamente)
}
```

## Categorías Disponibles

- **Gameplay**: Mecánicas de juego, controles, etc.
- **Audio**: Música, efectos de sonido, etc.
- **Technical**: Optimizaciones, correcciones de bugs, etc.
- **Visual**: Gráficos, assets, efectos visuales, etc.

## Imágenes por Categoría

El componente asigna automáticamente imágenes según la categoría:

- **Gameplay**: `/images/Wata/Menu-3.PNG`
- **Audio**: `/images/Wata/Menu-4.PNG`
- **Technical**: `/images/Wata/Menu-5.PNG`
- **Visual**: `/images/Wata/Menu-6.PNG`

## Personalización

### Cambiar Imágenes por Categoría

Modifica el archivo `UpdatesSection.jsx`:

```javascript
const getImageByCategory = (category) => {
  const imageMap = {
    'Gameplay': '/images/Wata/Menu-3.PNG',
    'Audio': '/images/Wata/Menu-4.PNG',
    'Technical': '/images/Wata/Menu-5.PNG',
    'Visual': '/images/Wata/Menu-6.PNG',
    'Custom': '/images/Wata/Menu-7.PNG' // Nueva categoría
  };
  return imageMap[category] || imageMap['Gameplay'];
};
```

### Modificar Estilos

Edita `UpdatesSection.module.css` para cambiar colores, animaciones, etc.

```css
:root {
  --accent-color: #ff0000;        /* Color principal */
  --accent-color-hover: #cc0000;  /* Color hover */
  --darker-bg: #1a1a1a;          /* Fondo oscuro */
  --card-bg: #2a2a2a;            /* Fondo de tarjetas */
}
```

## Ejemplos de Uso

### Ejemplo 1: Añadir Actualización desde Consola

```javascript
// Abre la consola del navegador y ejecuta:
UpdatesManager.addUpdate({
  title: "Nueva actualización desde consola",
  description: "Esta actualización fue añadida desde la consola del navegador.",
  category: "Technical"
});
```

### Ejemplo 2: Añadir Múltiples Actualizaciones

```javascript
const updates = [
  {
    title: "Actualización 1",
    description: "Primera actualización",
    category: "Gameplay"
  },
  {
    title: "Actualización 2", 
    description: "Segunda actualización",
    category: "Audio"
  }
];

updates.forEach(update => UpdatesManager.addUpdate(update));
```

### Ejemplo 3: Integración con Eventos del Juego

```javascript
// Cuando el jugador completa un nivel
function onLevelComplete() {
  addGameUpdate(
    "Nuevo nivel desbloqueado",
    "¡Has completado el nivel anterior! Un nuevo desafío te espera."
  );
}

// Cuando se detecta un bug
function onBugDetected(bugDescription) {
  addBugFix(`Bug reportado: ${bugDescription}`);
}
```

## Solución de Problemas

### El componente no se muestra
- Verifica que el componente esté importado correctamente
- Asegúrate de que las rutas de las imágenes sean correctas
- Revisa la consola del navegador para errores

### Las funciones JavaScript no funcionan
- Verifica que `updatesManager.js` esté cargado
- Espera a que el componente se monte completamente
- Usa `UpdatesManager.init()` si es necesario

### Las animaciones no funcionan
- Verifica que CSS esté cargado correctamente
- Asegúrate de que el navegador soporte las animaciones CSS
- Revisa que no haya conflictos con otros estilos

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ React 16.8+ (para hooks)

## Licencia

Este componente es parte del proyecto ZimmZimm Games y sigue las mismas licencias del proyecto principal. 