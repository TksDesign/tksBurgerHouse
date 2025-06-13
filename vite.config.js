import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,  // Permet l'accès via IP locale (ex: 192.168.x.x)
  }
})
