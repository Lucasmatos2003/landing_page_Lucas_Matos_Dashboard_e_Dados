import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ Configuração correta do Vite
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  root: '.', 
})
