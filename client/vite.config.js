import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    cors: true, // Enable CORS
    host: "localhost",
    port: 5173, // Ensure your frontend runs on this port
    open: true, // Automatically open browser on start
  },
  headers: {
    "Cross-Origin-Opener-Policy": "same-origin-allow-popups", // Fix Google OAuth issue
  },
})
