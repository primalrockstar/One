import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Definitive configuration for the 'client' sub-directory.
export default defineConfig({
  root: 'client',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
