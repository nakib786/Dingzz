import { defineConfig } from 'vite';
import path from 'path';

// Fallback config without SWC for environments where it doesn't work
export default defineConfig({
  // Don't use SWC for React
  plugins: [],
  
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  
  build: {
    minify: 'esbuild',
    rollupOptions: {
      external: []
    },
    sourcemap: true,
  },
  
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
}); 