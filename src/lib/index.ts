/**
 * Archivo de índice para el sistema de enrutamiento
 * Exporta todas las funciones y configuraciones de navegación
 */

// Exportar rutas
export * from '../routes';

// Exportar navegación
export * from './navigation';

// Re-exportar componentes de navegación
export { default as Navigation } from '../components/Navigation';
