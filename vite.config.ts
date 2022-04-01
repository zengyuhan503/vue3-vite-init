import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    refTransform: true
  })],
  resolve:{
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server:{
    host:'192.168.50.68',
    port:8080,
    https:false,
    proxy:{
      '/api': {
        target: process.env.VUE_APP_BASE_API || 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    },

  }
})
