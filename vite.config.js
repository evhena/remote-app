// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'remote-app',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './List': './src/components/List.jsx',
//         './Input': './src/components/Input.jsx',
//       },
//       shared: ['react'],
//     }),
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: false,
//     cssCodeSplit: false,
//   },
// });

// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     target: 'esnext',
//     outDir: 'dist', // Output directory for built files
//     assetsInLineLimit: 0,
//     // assetsDir: '', // Directory for static assets (relative to outDir)
//     // sourcemap: true, // Generate source maps
//     rollupOptions: {
//       // Configure Rollup
//       input: 'src/main.jsx', // Entry point of the app
//       output: { manualChunks: () => 'bundle.js' },
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'), // Entry point of the remote app
      name: 'RemoteApp',
      fileName: (format) => `bundle.${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
