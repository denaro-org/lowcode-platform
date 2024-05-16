import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        components({
            resolvers: [VarletUIResolver()]
        }),
        autoImport({
            resolvers: [VarletUIResolver({ autoImport: true })]
        })
    ],
    server: {
        host: '0.0.0.0',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        port: 5173,
        strictPort: true,
        cors: true,
        open: true
    },
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, './index.html'),
                preview: resolve(__dirname, './preview.html')
            }
        }
    }
})
