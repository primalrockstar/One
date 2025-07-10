import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the standard, default configuration now that index.html is in the root.
// It has no confusing path overrides.
export default defineConfig({
  plugins: [react()],
})
