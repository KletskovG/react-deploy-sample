/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [],
    }
  })],
  resolve: {
    alias: {
      "@typings": path.resolve(__dirname, './src/typings'),
      "@components": path.resolve(__dirname, './src/components'),
      "@pages": path.resolve(__dirname, './src/pages'),
    },
  },
  build: {
    target: 'es2015',
  }
});
