import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [vue(), vueJsx()],
    server: {
        host: '0.0.0.0',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        port: 5174,
        strictPort: true
    }
})
