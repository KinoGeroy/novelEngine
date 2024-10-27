import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginWebpAndPath from 'vite-plugin-webp-and-path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
      react(),
    VitePluginWebpAndPath({
      targetDir: './src/images',
      imgExtensions: 'jpg,png,gif',
      textExtensions: 'html,css,js,ts,tsx',
    })
  ],
})

