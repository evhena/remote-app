// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'remote',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './List': './src/components/List.jsx',
//         './Input': './src/components/Input.jsx',
//       },
//       shared: ['react', 'react-dom'],
//     }),
//   ],
//   build: {
//     outDir: 'dist',
//     target: 'esnext', // Set the target environment to support top-level await
//     lib: {
//       entry: 'src/main.jsx', // Adjust the entry point if needed
//       formats: ['es'],
//     },
//     rollupOptions: {
//       output: {
//         dir: 'dist',
//         entryFileNames: 'build.js', // Specify the output file name
//         format: 'es',
//       },
//     },
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'remote',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './List': './src/components/List.jsx',
//         './Input': './src/components/Input.jsx',
//       },
//       shared: ['react', 'react-dom'],
//     }),
//   ],
//   build: {
//     outDir: 'dist',
//     target: 'esnext', // Set the target environment to support top-level await
//     lib: {
//       entry: 'src/main.jsx', // Adjust the entry point if needed
//       formats: ['es'],
//     },
//     rollupOptions: {
//       output: {
//         entryFileNames: 'build.js', // Specify the output file name
//         format: 'es',
//       },
//     },
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'remote',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './RemoteApp': './src/App',
//       },
//       shared: ['react', 'react-dom'],
//     }),
//   ],
//   build: {
//     outDir: 'dist',
//     target: 'esnext', // Set the target environment to support top-level await
//     lib: {
//       entry: 'src/main.jsx', // Adjust the entry point if needed
//       formats: ['es'],
//     },
//     rollupOptions: {
//       input: {
//         main: 'src/main.jsx', // Specify the input file
//       },
//       output: {
//         entryFileNames: 'build.js', // Specify the output file name
//         format: 'es',
//       },
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
// import { removeUnwantedFilesPlugin } from './removeUnwantedFilesPlugin'; // Import the custom plugin

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './List': './src/components/List.jsx',
        './Input': './src/components/Input.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
    // removeUnwantedFilesPlugin(), // Add the custom plugin to remove unwanted files
  ],
  build: {
    outDir: 'dist',
    target: 'esnext', // Set the target environment to esnext for transpilation
    polyfillDynamicImport: false, // Disable dynamic import polyfill
    lib: {
      entry: 'src/main.jsx', // Adjust the entry point if needed
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        main: 'src/main.jsx', // Specify the input file
      },
      output: {
        entryFileNames: 'build.js', // Specify the output file name
        format: 'es',
      },
      manualChunks: undefined, // Disable manual chunking
    },
  },
  optimizeDeps: {
    exclude: ['remoteEntry.js'], // Exclude remoteEntry.js from optimization
  },
});
