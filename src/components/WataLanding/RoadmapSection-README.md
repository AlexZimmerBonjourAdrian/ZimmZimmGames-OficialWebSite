# RoadmapSection Component

Un componente React bien diseñado para mostrar el roadmap de desarrollo del juego, con animaciones suaves y fácil modificación mediante JavaScript.

## Características

- ✅ **Diseño profesional**: Timeline visual con fases organizadas
- ✅ **Animaciones suaves**: Entrada deslizante y efectos hover
- ✅ **Fácil modificación con JavaScript**: API simple para gestionar fases
- ✅ **Estados de fase**: Completado, En Progreso, Planificado, Retrasado
- ✅ **Barras de progreso**: Visualización del progreso de cada fase
- ✅ **Características detalladas**: Lista de características por fase
- ✅ **Auto-rotación**: Las fases se muestran automáticamente
- ✅ **Controles manuales**: Puntos de navegación para control manual
- ✅ **Responsive**: Diseño adaptativo para móviles y tablets
- ✅ **Colores personalizables**: Cada fase tiene su propio color

## Archivos del Componente

```
src/components/WataLanding/
├── RoadmapSection.jsx          # Componente principal
├── RoadmapSection.module.css   # Estilos y animaciones
├── roadmapManager.js           # Gestor JavaScript para el roadmap
├── roadmap-example.html        # Ejemplo de uso
└── RoadmapSection-README.md    # Esta documentación
```

## Uso Básico

### 1. Importar el Componente

```jsx
import RoadmapSection from './components/WataLanding/RoadmapSection';

function App() {
  return (
    <div>
      <RoadmapSection />
    </div>
  );
}
```

### 2. Importar el Gestor JavaScript

```html
<!-- En tu HTML o en el head del documento -->
<script src="/src/components/WataLanding/roadmapManager.js"></script>
```

O en tu componente React:

```jsx
import './components/WataLanding/roadmapManager.js';
```

## API JavaScript

### Funciones Principales

#### `RoadmapManager.addPhase(phaseData)`
Añade una nueva fase al roadmap.

```javascript
// Ejemplo básico
RoadmapManager.addPhase({
  title: "Fase de Desarrollo",
  description: "Implementación de características principales",
  status: "in-progress",
  date: "Q2 2024",
  features: ["Sistema de movimiento", "Mecánicas de puzzle"],
  progress: 45,
  color: "#2196F3"
});
```

#### `RoadmapManager.updateProgress(phaseId, newProgress)`
Actualiza el progreso de una fase específica.

```javascript
RoadmapManager.updateProgress(1, 75); // Actualiza fase 1 al 75%
```

#### `RoadmapManager.updateStatus(phaseId, newStatus)`
Cambia el estado de una fase.

```javascript
RoadmapManager.updateStatus(1, 'completed'); // Marca fase 1 como completada
```

#### `RoadmapManager.addFeature(phaseId, feature)`
Añade una característica a una fase específica.

```javascript
RoadmapManager.addFeature(1, "Nueva característica añadida");
```

#### `RoadmapManager.getPhases()`
Obtiene todas las fases del roadmap.

```javascript
const phases = RoadmapManager.getPhases();
console.log(phases);
```

#### `RoadmapManager.getOverallProgress()`
Calcula el progreso general del proyecto.

```javascript
const overallProgress = RoadmapManager.getOverallProgress();
console.log(`Progreso general: ${overallProgress}%`);
```

### Funciones Rápidas

#### `addDevelopmentPhase(title, description, features)`
Añade una fase de desarrollo.

```javascript
addDevelopmentPhase(
  "Desarrollo Core",
  "Implementación de características principales",
  ["Sistema de movimiento", "IA de enemigos", "Sistema de inventario"]
);
```

#### `addTestingPhase(title, description, features)`
Añade una fase de testing.

```javascript
addTestingPhase(
  "Testing y Optimización",
  "Fase de testing exhaustivo",
  ["Testing de funcionalidades", "Corrección de bugs", "Optimización"]
);
```

#### `addReleasePhase(title, description, features)`
Añade una fase de lanzamiento.

```javascript
addReleasePhase(
  "Preparación para Lanzamiento",
  "Preparación final para el lanzamiento",
  ["Builds finales", "Marketing", "Configuración de plataformas"]
);
```

#### `addBugFixPhase(title, description, features)`
Añade una fase de corrección de bugs.

```javascript
addBugFixPhase(
  "Corrección de Bugs",
  "Identificación y corrección de bugs críticos",
  ["Análisis de reportes", "Desarrollo de correcciones", "Testing"]
);
```

### Funciones de Consulta

#### `RoadmapManager.getPhase(phaseId)`
Obtiene una fase específica por ID.

```javascript
const phase = RoadmapManager.getPhase(1);
console.log(phase);
```

#### `RoadmapManager.getPhasesByStatus(status)`
Obtiene fases por estado.

```javascript
const completedPhases = RoadmapManager.getCompletedPhases();
const inProgressPhases = RoadmapManager.getInProgressPhases();
const plannedPhases = RoadmapManager.getPlannedPhases();
const delayedPhases = RoadmapManager.getDelayedPhases();
```

## Estructura de Datos

Cada fase tiene la siguiente estructura:

```javascript
{
  id: 1,                    // ID único (se genera automáticamente)
  phase: "Fase 1",          // Nombre de la fase
  title: "Título",          // Título de la fase
  description: "Descripción", // Descripción detallada
  status: "in-progress",    // Estado: planned, in-progress, completed, delayed
  date: "Q2 2024",         // Fecha objetivo
  features: ["Feature 1", "Feature 2"], // Lista de características
  progress: 65,            // Progreso (0-100)
  color: "#2196F3"         // Color de la fase
}
```

## Estados de Fase

- **planned**: Planificado (naranja)
- **in-progress**: En Progreso (azul)
- **completed**: Completado (verde)
- **delayed**: Retrasado (rojo)

## Colores por Defecto

- **Completado**: `#4CAF50` (Verde)
- **En Progreso**: `#2196F3` (Azul)
- **Planificado**: `#FF9800` (Naranja)
- **Retrasado**: `#f44336` (Rojo)

## Personalización

### Cambiar Colores por Estado

Modifica el archivo `RoadmapSection.module.css`:

```css
:root {
  --completed-color: #4CAF50;    /* Color para fases completadas */
  --in-progress-color: #2196F3;  /* Color para fases en progreso */
  --planned-color: #FF9800;      /* Color para fases planificadas */
  --delayed-color: #f44336;      /* Color para fases retrasadas */
}
```

### Modificar Animaciones

Edita las animaciones en `RoadmapSection.module.css`:

```css
@keyframes slideInPhase {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 0.7;
    transform: translateX(-20px);
  }
}
```

## Ejemplos de Uso

### Ejemplo 1: Añadir Fase desde Consola

```javascript
// Abre la consola del navegador y ejecuta:
RoadmapManager.addPhase({
  title: "Nueva fase desde consola",
  description: "Esta fase fue añadida desde la consola del navegador.",
  status: "in-progress",
  features: ["Característica 1", "Característica 2"],
  progress: 25
});
```

### Ejemplo 2: Actualizar Progreso de Fase

```javascript
// Actualizar progreso de la fase 1
RoadmapManager.updateProgress(1, 80);

// Cambiar estado de la fase 1
RoadmapManager.updateStatus(1, 'completed');
```

### Ejemplo 3: Añadir Múltiples Fases

```javascript
const phases = [
  {
    title: "Fase 1",
    description: "Primera fase del proyecto",
    status: "completed",
    features: ["Feature 1", "Feature 2"]
  },
  {
    title: "Fase 2",
    description: "Segunda fase del proyecto",
    status: "in-progress",
    features: ["Feature 3", "Feature 4"]
  }
];

phases.forEach(phase => RoadmapManager.addPhase(phase));
```

### Ejemplo 4: Integración con Sistema de Eventos

```javascript
// Cuando se completa una tarea
function onTaskComplete(taskId) {
  const phase = RoadmapManager.getPhase(1);
  const newProgress = Math.min(100, phase.progress + 10);
  RoadmapManager.updateProgress(1, newProgress);
  
  if (newProgress === 100) {
    RoadmapManager.updateStatus(1, 'completed');
  }
}

// Cuando se detecta un retraso
function onPhaseDelayed(phaseId) {
  RoadmapManager.updateStatus(phaseId, 'delayed');
}
```

### Ejemplo 5: Seguimiento de Progreso

```javascript
// Función para mostrar estadísticas del proyecto
function showProjectStats() {
  const overallProgress = RoadmapManager.getOverallProgress();
  const completedPhases = RoadmapManager.getCompletedPhases().length;
  const totalPhases = RoadmapManager.getPhases().length;
  
  console.log(`Progreso general: ${overallProgress}%`);
  console.log(`Fases completadas: ${completedPhases}/${totalPhases}`);
  console.log(`Fases restantes: ${totalPhases - completedPhases}`);
}
```

## Solución de Problemas

### El componente no se muestra
- Verifica que el componente esté importado correctamente
- Asegúrate de que las rutas de los archivos sean correctas
- Revisa la consola del navegador para errores

### Las funciones JavaScript no funcionan
- Verifica que `roadmapManager.js` esté cargado
- Espera a que el componente se monte completamente
- Usa `RoadmapManager.init()` si es necesario

### Las animaciones no funcionan
- Verifica que CSS esté cargado correctamente
- Asegúrate de que el navegador soporte las animaciones CSS
- Revisa que no haya conflictos con otros estilos

### El progreso no se actualiza
- Verifica que el ID de la fase sea correcto
- Asegúrate de que el progreso esté entre 0 y 100
- Revisa que la función se esté ejecutando correctamente

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ React 16.8+ (para hooks)

## Licencia

Este componente es parte del proyecto ZimmZimm Games y sigue las mismas licencias del proyecto principal. 