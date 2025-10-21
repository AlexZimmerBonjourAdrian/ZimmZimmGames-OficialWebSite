# Script de Ejecución - ZimmZimm Games

## 🚀 Scripts Disponibles

### 1. `run.ps1` - Script Principal
Script básico que verifica Node.js y ejecuta el servidor (requiere Node.js instalado).

### 2. `run-auto.ps1` - Script Automático (Recomendado)
Script que instala Node.js automáticamente si no está presente y luego ejecuta el servidor.

### 3. `install-node.ps1` - Instalador de Node.js
Script simple para instalar solo Node.js usando winget.

### 4. `start.bat` - Script Batch
Versión en batch para usuarios que prefieren archivos .bat.

### 📋 Requisitos Previos

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)
- **PowerShell** (disponible en Windows)

### 🎯 Cómo Ejecutar

#### Opción 1: Script Automático (Recomendado)
```powershell
# Navegar al directorio del proyecto
cd C:\Github\ZimmZimmGames-OficialWebSite

# Ejecutar el script automático (instala Node.js si es necesario)
.\run-auto.ps1
```

#### Opción 2: Script Principal
```powershell
# Navegar al directorio del proyecto
cd C:\Github\ZimmZimmGames-OficialWebSite

# Ejecutar el script (requiere Node.js instalado)
.\run.ps1
```

#### Opción 3: Solo Instalar Node.js
```powershell
# Instalar Node.js usando winget
.\install-node.ps1
```

#### Opción 2: Desde el Explorador de Archivos
1. Navega a la carpeta del proyecto
2. Haz clic derecho en `run.ps1`
3. Selecciona "Ejecutar con PowerShell"

#### Opción 3: Desde la Terminal Integrada
```bash
# En VS Code o cualquier editor
powershell -ExecutionPolicy Bypass -File run.ps1
```

### 🔧 Lo que hace el Script

1. **Verificación de Prerrequisitos**
   - ✅ Verifica que Node.js esté instalado
   - ✅ Verifica que npm esté disponible
   - ❌ Muestra error si falta algún requisito

2. **Instalación de Dependencias**
   - 📦 Ejecuta `npm install`
   - ⏳ Muestra progreso durante la instalación
   - ✅ Confirma instalación exitosa

3. **Inicio del Servidor**
   - 🚀 Ejecuta `npm run dev`
   - 🌐 Abre el servidor en `http://localhost:3000`
   - 📝 Muestra instrucciones de uso

### 🎨 Características del Script

- **Colores en la Terminal**: Usa colores para mejor legibilidad
- **Manejo de Errores**: Captura y muestra errores claramente
- **Mensajes Informativos**: Proporciona feedback durante cada paso
- **Verificación de Prerrequisitos**: Asegura que todo esté listo antes de continuar

### 🛠️ Comandos Manuales (Alternativos)

Si el script no funciona, puedes ejecutar manualmente:

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start

# Verificar código
npm run lint
```

### 🐛 Solución de Problemas

#### Error de Política de Ejecución
```powershell
# Si aparece error de política de ejecución
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Node.js no encontrado
- Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/)
- Reinicia la terminal después de la instalación

#### Puerto 3000 ocupado
```bash
# El script usará el siguiente puerto disponible automáticamente
# O puedes especificar un puerto diferente:
npm run dev -- -p 3001
```

### 📱 Acceso a la Aplicación

Una vez ejecutado el script:
- **URL Local**: `http://localhost:3000`
- **URL de Red**: `http://[tu-ip]:3000` (para acceso desde otros dispositivos)

### 🎮 Características de la Aplicación

- **Home**: Página principal con tema negro y partículas
- **W.A.T.A**: Página del juego con información detallada
- **Responsive**: Funciona en desktop, tablet y móvil
- **Partículas**: Efectos visuales atmosféricos
- **Navegación**: Sistema de rutas completo

### 🔄 Reiniciar el Servidor

Para reiniciar el servidor:
1. Presiona `Ctrl+C` en la terminal
2. Ejecuta `.\run.ps1` nuevamente

### 📝 Logs y Debugging

El script muestra información detallada:
- Versiones de Node.js y npm
- Progreso de instalación
- Errores específicos si ocurren
- URL del servidor cuando esté listo

---

**Desarrollado por ZimmZimm Games** 🎮
