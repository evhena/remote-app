import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';
// import { viteSingleFile } from 'vite-plugin-singlefile';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  // plugins: [vue(), viteSingleFile(), ],
  plugins: [
    react(),
    // svelte({
    //   emitCss: false,
    // }),
    cssInjectedByJsPlugin({
      relativeCSSInjection: true,
    }),
    // federation({
    //   name: 'remote-app',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './List': './src/components/List.jsx',
    //     './Input': './src/components/Input.jsx',
    //   },
    //   shared: ['react'],
    // }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    assetsDir: '',
    sourcemap: true,
    // lib: {
    //   entry: 'dist/remoteEntry.js',
    //   formats: ['iife'],
    //   name: 'SvelteMicroFrontend',
    //   fileName: 'svelte-micro-frontend',
    // },
    outDir: './build',
    rollupOptions: {},
  },
});
