import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // This tells Vite that your app's "home base" is the 'client' folder.
  root: path.resolve(__dirname, 'client'),
  
  plugins: [react()],
  
  build: {
    // This tells Vite where to put the final built files, back in the root 'dist' folder.
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },

  server: {
    // This is a security setting to ensure the dev server can access files from the root.
    fs: {
      allow: [path.resolve(__dirname)],
    },
  },
})
