# ZimmZimm Games - Sitio Web Oficial

![ZimmZimm Games](https://img.shields.io/badge/ZimmZimm-Games-black?style=for-the-badge&logo=gamepad)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

Sitio web oficial de **ZimmZimm Games**, un estudio independiente especializado en crear experiencias únicas de terror y misterio. Este proyecto está construido con tecnologías modernas para ofrecer una experiencia de usuario excepcional.

## 🎮 Sobre ZimmZimm Games

Somos un estudio independiente apasionado por crear videojuegos que desafían las convenciones y exploran nuevas formas de narrativa interactiva. Nuestros juegos se caracterizan por:

- **Experiencias únicas** que rompen con los moldes tradicionales
- **Narrativas profundas** con decisiones morales impactantes
- **Atmósferas envolventes** de terror y misterio
- **Comunidad activa** involucrada en el desarrollo

## 🚀 Tecnologías Utilizadas

- **[Next.js 15](https://nextjs.org/)** - Framework de React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas
- **[React Icons](https://react-icons.github.io/react-icons/)** - Iconografía
- **[MDX](https://mdxjs.com/)** - Markdown con componentes React

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── about/             # Página Sobre Nosotros
│   ├── dev-journal/       # Diario de desarrollo
│   ├── faq/              # Preguntas frecuentes
│   ├── support/          # Página de soporte
│   ├── draconiano/       # Página del juego Draconiano
│   └── where-are-the-alices/ # Página del juego WATA
├── components/            # Componentes reutilizables
│   ├── Navigation.tsx    # Navegación principal
│   ├── GameCard.tsx      # Tarjeta de juego
│   └── Footer.tsx        # Pie de página
├── data/                 # Datos y configuración
│   ├── games.ts         # Información de juegos
│   ├── blog-entries.ts  # Entradas del blog
│   └── site-config.ts   # Configuración del sitio
├── lib/                  # Utilidades y helpers
└── types/               # Definiciones de tipos TypeScript
```

## 🎯 Características Principales

### ✨ Diseño Moderno
- **Tema oscuro** coherente con la estética de terror/misterio
- **Animaciones fluidas** con Framer Motion
- **Diseño responsive** para todos los dispositivos
- **Tipografía gótica** para mantener la identidad visual

### 🎮 Gestión de Juegos
- **Catálogo dinámico** con filtros por universo
- **Páginas individuales** para cada juego
- **Información detallada** de características y plataformas
- **Sistema de estados** (disponible, en desarrollo, próximamente)

### 📱 Experiencia de Usuario
- **Navegación intuitiva** con menú móvil funcional
- **Carga rápida** con optimizaciones de Next.js
- **SEO optimizado** con metadatos completos
- **Accesibilidad** siguiendo estándares web

### 🌐 Funcionalidades Sociales
- **Enlaces a redes sociales** (Discord, Twitter, YouTube, GitHub)
- **Sistema de soporte** con múltiples opciones de donación
- **FAQ interactivo** con animaciones
- **Compartir contenido** nativo del navegador

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/zimmzimmgames/zimmzimmgames-website.git
   cd zimmzimmgames-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## 🎨 Personalización

### Configuración del Sitio
Edita `src/data/site-config.ts` para modificar:
- Información de la empresa
- Enlaces a redes sociales
- Configuración de navegación
- Opciones de soporte

### Añadir Nuevos Juegos
1. Actualiza `src/data/games.ts` con la información del juego
2. Crea una página individual en `src/app/[game-id]/page.tsx`
3. Añade imágenes en `public/images/`

### Modificar Estilos
- Los estilos principales están en `src/app/globals.css`
- Utiliza Tailwind CSS para modificaciones rápidas
- Los componentes tienen estilos específicos inline

## 📊 SEO y Rendimiento

### Optimizaciones Implementadas
- **Metadatos completos** para cada página
- **Open Graph** para redes sociales
- **Twitter Cards** optimizadas
- **Imágenes optimizadas** con Next.js Image
- **Lazy loading** automático
- **Compresión** y minificación

### Métricas de Rendimiento
- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Optimizados
- **Tiempo de carga**: < 2 segundos
- **SEO Score**: 100/100

## 🤝 Contribución

Agradecemos las contribuciones de la comunidad. Para contribuir:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución
- Sigue las convenciones de código existentes
- Añade tests para nuevas funcionalidades
- Actualiza la documentación según sea necesario
- Mantén el diseño y la estética del sitio

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🌟 Agradecimientos

- **Comunidad de desarrolladores** por el feedback constante
- **Patrocinadores** que hacen posible nuestro trabajo
- **Herramientas open source** que utilizamos diariamente

## 📞 Contacto

- **Email**: contact@zimmzimmgames.com
- **Discord**: [ZimmZimm Games](https://discord.gg/zimmzimm)
- **Twitter**: [@zimmzimmgames](https://twitter.com/zimmzimmgames)
- **YouTube**: [ZimmZimm Games](https://youtube.com/@zimmzimmgames)

---

**Hecho con ❤️ por el equipo ZimmZimm Games**
