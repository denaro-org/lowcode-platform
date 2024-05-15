import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'

import { genComDTs } from './genComDTs.js'
import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

const distEs = resolve(__dirname, 'lib/es')
const distCjs = resolve(__dirname, 'lib/cjs')
const typesDir = resolve(__dirname, 'lib/types')
const entryFile = resolve(__dirname, 'src/index.ts')
const srcDir = resolve(__dirname, 'src')

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        dtsPlugin({ outDir: typesDir }),
        genComDTs({
            entryDir: srcDir,
            outDir: typesDir,
            prefix: 'TmVar'
        })
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL(srcDir, import.meta.url))
            }
        ]
    },
    // 删除调试信息
    esbuild: {
        pure: ['console.log'], // 删除 console.log
        drop: ['debugger'] // 删除 debugger
    },
    build: {
        outDir: 'lib',
        minify: 'esbuild',
        target: 'esnext',
        emptyOutDir: true,
        lib: {
            entry: entryFile,
            name: packageJson.name,
            fileName: 'index'
        },
        rollupOptions: {
            external(id: string) {
                return deps.some(k => new RegExp(`^${k}`).test(id))
            },
            input: [entryFile],
            output: [
                {
                    // 打包格式
                    format: 'esm', // 打包后文件名
                    entryFileNames: '[name].mjs', // 配置打包根目录
                    dir: distEs, // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    preserveModulesRoot: 'src'
                },
                {
                    // 打包格式
                    format: 'commonjs',
                    name: packageJson.name, // 打包后文件名
                    entryFileNames: '[name].js', // 配置打包根目录
                    dir: distCjs, // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    preserveModulesRoot: 'src'
                }
            ]
        }
    }
})
