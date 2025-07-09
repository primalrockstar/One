import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// This is the definitive configuration that matches tsconfig.json.
export default defineConfig({
  // The root is the 'client' folder where index.html lives.
  root: 'client',
  
  // The alias for Vite, matching the 'paths' in tsconfig.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
  
  plugins: [react()],
  
  build: {
    // The output directory is relative to the root, so '../dist' puts it back at the top level.
    outDir: '../dist',
    emptyOutDir: true,
  },
})
