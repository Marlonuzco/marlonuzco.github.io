import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [
    react(),
    svgr(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    checker({ typescript: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
