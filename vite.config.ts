/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: './node_modules/.vite/type-and-learn',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: './',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: './',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },

  resolve: {
    alias: {
      '@features': path.resolve(__dirname, './src/app/features'),
      '@layouts': path.resolve(__dirname, './src/app/layouts'),
      '@assets': path.resolve(__dirname, './src/app/shared/assets'),
      '@auth': path.resolve(__dirname, './src/app/shared/auth'),
      '@http': path.resolve(__dirname, './src/app/shared/http'),
      '@theme': path.resolve(__dirname, './src/app/shared/theme'),
      '@ui': path.resolve(__dirname, './src/app/shared/ui'),
      '@utils': path.resolve(__dirname, './src/app/shared/utils'),
    },
  },
});
