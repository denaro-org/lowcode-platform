import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
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
        port: 5173,
        strictPort: true
    }
})
