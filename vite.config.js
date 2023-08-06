import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
    }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': `${resolve(__dirname, 'src')}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/variables.scss" as *;@use "@/styles/element/index.scss" as *;'
      }
    }
  }
})
