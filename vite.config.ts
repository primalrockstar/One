import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: 'client',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
