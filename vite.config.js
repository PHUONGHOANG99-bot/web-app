import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Khi chạy dev (npm run dev), base là '/'
  // Khi build (npm run build), base là '/APP-WEB/' cho GitHub Pages
  const base = command === 'build' ? '/APP-WEB/' : '/';
  
  return {
    plugins: [react()],
    base,
  }
})
