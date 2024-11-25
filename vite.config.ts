import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use Vite's mode instead of process.env
export default defineConfig(({ mode }) => ({
  define: {
    // Always provide global object
    global: {},
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  },
  server: {
  },
  worker: {
    format: 'es',
    plugins: () => []
  }
}))