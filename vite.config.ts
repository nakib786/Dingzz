import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  build: {
    // Add platform-specific configurations for production builds
    rollupOptions: {
      // Ensure compatibility with various platforms
      external: []
    },
    // Ensure sourcemaps are generated for easier debugging
    sourcemap: true,
  },
  optimizeDeps: {
    // Force inclusion of esbuild in the dependency optimization
    include: ['react', 'react-dom']
  },
  // Add esbuild options to handle potential platform issues
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
