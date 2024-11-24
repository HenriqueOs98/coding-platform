import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({

  ...(process.env.NODE_ENV === 'development'
    ? {
      define: {
        global: {},
      },
    }
    : {}),


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
})