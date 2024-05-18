import type { OutputOptions } from 'rollup'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'

import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

const distEs = resolve(__dirname, 'lib/es')
const distCjs = resolve(__dirname, 'lib/cjs')
const typesDir = resolve(__dirname, 'lib/types')
const entryFile = resolve(__dirname, './index.ts')
const srcDir = resolve(__dirname, './src')

export default defineConfig(({ mode }) => {
    const esOutput: OutputOptions = {
        // 打包格式
        format: 'es', // 打包后文件名
        entryFileNames: '[name].mjs', // 配置打包根目录
        dir: distEs, // 让打包目录和我们目录对应
        preserveModules: true,
        exports: 'named',
        preserveModulesRoot: 'src'
    }
    const cjsOutput: OutputOptions = {
        // 打包格式
        format: 'commonjs',
        name: packageJson.name, // 打包后文件名
        entryFileNames: '[name].js', // 配置打包根目录
        dir: distCjs, // 让打包目录和我们目录对应
        preserveModules: true,
        exports: 'named',
        preserveModulesRoot: 'src'
    }

    const output: OutputOptions[] =
        mode === 'production' ? [esOutput, cjsOutput] : [esOutput]

    return {
        plugins: [vue(), vueJsx(), dtsPlugin({ outDir: typesDir })],
        css: {
            modules: {
                localsConvention: 'camelCase' // 默认只支持驼峰, 修改为同时支持横线和驼峰
            },
            preprocessorOptions: {
                scss: {
                    charset: false
                },
                less: {
                    charset: false
                }
            }
        },
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: fileURLToPath(new URL(srcDir, import.meta.url))
                }
            ]
        },
        ...(mode === 'production' && {
            // 删除调试信息
            esbuild: {
                pure: ['console.log'], // 删除 console.log
                drop: ['debugger'] // 删除 debugger
            }
        }),
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
                output: output
            }
        }
    }
})
