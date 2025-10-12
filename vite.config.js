import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"/ApiSimpsons_2025IIg1_Juan_Sanchez_Edwuar_Cuellar",
  plugins: [
    react(),
    tailwindcss()
  ],
})
