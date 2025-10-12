import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
 build: {
    sourcemap: true,
    minify: false,
    rollupOptions: {
      input: {
        main:   path.resolve(__dirname, 'index.html'),
        galaga: path.resolve(__dirname, 'galaga.html'),
      },
    },
  }
})
