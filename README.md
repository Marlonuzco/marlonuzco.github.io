# Portafolio de Marlon Uzcátegui

Sitio personal de una página, bilingüe y estático, construido con React, TypeScript y Vite.

## Requisitos

- Node.js 24
- npm 11

El proyecto no usa otra versión principal. Para cambiarla hay que actualizar `.nvmrc`, `engines` en `package.json` y comprobar `.npmrc`.

Dentro del proyecto:

```bash
nvm use
```

## Configuración

```bash
npm install
npm run dev
```

La aplicación queda en `http://localhost:5173`.

## Scripts

- `npm run dev`: servidor local.
- `npm run build`: comprueba tipos y genera `dist/`.
- `npm run preview`: sirve la compilación.
- `npm run lint`: ejecuta ESLint.
- `npm run lint:fix`: aplica correcciones de ESLint.
- `npm run prettier`: comprueba el formato.
- `npm run prettier:fix`: aplica Prettier.
- `npm run knip`: busca archivos y dependencias sin uso.
- `npm audit --omit=dev`: revisa vulnerabilidades de las dependencias de producción.

## Estructura

- `src/app`: composición de la página.
- `src/components`: piezas reutilizables.
- `src/sections`: secciones de la landing.
- `src/services/i18n`: carga de los textos y cambio de idioma.
- `src/context`: tema claro y oscuro.
- `public/translations`: textos en español e inglés.
- `public/cv`: CV publicados en PDF.
- `public/og-banner.png`: imagen para redes.

## Convenciones

- Los textos visibles viven en `public/translations` y deben existir en español e inglés.
- TypeScript es estricto: no se usa `any`.
- La validación del proyecto es lint, tipos, Knip y build. No hay tests automáticos.
- GitHub Actions publica el sitio estático en GitHub Pages cuando el repositorio usa la rama `main`.
