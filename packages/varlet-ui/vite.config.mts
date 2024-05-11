import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'

import { genComDTs } from './genComDTs.js'
import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

const distEs = resolve(__dirname, 'lib/es')
const distCjs = resolve(__dirname, 'lib/cjs')
const entryFile = resolve(__dirname, 'src/index.ts')

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        dtsPlugin({ outDir: 'lib/types' }),
        genComDTs({
            entryDir: resolve(__dirname, 'src'),
            outDir: 'lib/types',
            prefix: 'TmVar'
        }),

        components({
            resolvers: [VarletUIResolver()]
        }),
        autoImport({
            resolvers: [VarletUIResolver({ autoImport: true })]
        })
    ],
    build: {
        outDir: 'lib',
        minify: 'esbuild',
        target: 'esnext',
        emptyOutDir: true,
        lib: {
            entry: entryFile,
            name: '@lowcode/varlet-ui'
        },
        rollupOptions: {
            // 忽略打包vue文件
            external(id: string) {
                return deps.some(k => new RegExp(`^${k}`).test(id))
            },
            input: [entryFile],
            output: [
                {
                    // 打包格式
                    format: 'es',
                    // 打包后文件名
                    entryFileNames: '[name].mjs',
                    // 配置打包根目录
                    dir: distEs,
                    // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    preserveModulesRoot: 'src'
                },
                {
                    // 打包格式
                    format: 'commonjs',
                    name: '@lowcode/varlet-ui',
                    // 打包后文件名
                    entryFileNames: '[name].js',
                    // 配置打包根目录
                    dir: distCjs,
                    // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    preserveModulesRoot: 'src'
                }
            ]
        }
    }
})
