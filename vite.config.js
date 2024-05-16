import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createWebpackDevMiddleware } from '@module-federation/webpack-5-vite';

export default defineConfig({
  plugins: [
    react(),
    createWebpackDevMiddleware({
      webpackConfigPath: './webpack.config.js',
    }),
  ],
});
