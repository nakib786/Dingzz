// Force SWC to use WASM version instead of native bindings
process.env.SWC_USE_WASM = '1';

import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [
        // Ensure SWC uses WASM
        ['@swc/plugin-react', { 
          useWasm: true 
        }]
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  build: {
    // Disable minification if it causes issues
    minify: 'esbuild',
    rollupOptions: {
      external: []
    },
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@swc/wasm']
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
}); 