import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// This is the definitive configuration for a project with a 'client' sub-directory.
export default defineConfig({
  // Sets the root of the application to the 'client' folder.
  root: path.resolve(__dirname, 'client'),
  
  plugins: [react()],
  
  build: {
    // Builds the output into a 'dist' folder at the top level of the project.
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },

  server: {
    // Ensures the development server can access files from the project root.
    fs: {
      allow: [path.resolve(__dirname)],
    },
  },
})
