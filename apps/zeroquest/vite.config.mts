/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import babel from 'vite-plugin-babel';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const APP = './src/app';
export default defineConfig(({ mode, command }) => {
  const isDev = mode === 'development' || command === 'serve';

  return {
    root: import.meta.dirname,
    cacheDir: '../../node_modules/.vite/apps/zeroquest',
    resolve: {
      conditions: ['@zeroquest/source'],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    server: {
      port: 4200,
      host: '127.0.0.1',

      allowedHosts: isDev
        ? [
            '.lhr.life',
            '.ngrok-free.app',
            '.trycloudflare.com',
            '.serveousercontent.com',
          ]
        : ['zerokqk.ru'],

      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
        },
      },
    },

    preview: {
      port: 4300,
      host: '127.0.0.1',
    },

    plugins: [
      tanstackRouter({
        target: 'react',
        generatedRouteTree: APP + '/route-tree.gen.ts',
        autoCodeSplitting: true,
        routesDirectory: APP + '/routes',
      }),
      react(),
      babel({
        filter: /\.[jt]sx?$/,
        exclude: /\/node_modules\//,
        babelConfig: {
          parserOpts: {
            plugins: ['typescript', 'jsx'],
          },
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
    ],

    build: {
      outDir: './dist',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    test: {
      name: '@zeroquest/zeroquest',
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: './test-output/vitest/coverage',
        provider: 'v8' as const,
      },
    },
  };
});
