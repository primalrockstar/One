import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This is the critical line that tells Vite where your frontend code lives.
  root: 'client', 
  plugins: [react()],
  build: {
    // This tells Vite where to put the final built files.
    outDir: '../dist',
    emptyOutDir: true,
  }
})
