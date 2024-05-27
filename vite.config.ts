import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const BASE = "/fmg-site/";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:BASE,
  build:{
    outDir:"dist",
    assetsDir:"assets",
    rollupOptions:{
      input:{
        main: "index.html",
         404: "404.html"
      }
    }
  }
})
