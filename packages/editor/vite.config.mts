import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve, join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'

import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

const distEs = resolve(__dirname, 'lib/es')
const distCjs = resolve(__dirname, 'lib/cjs')

export default defineConfig({
    css: {
        modules: {
            localsConvention: 'camelCase' // 默认只支持驼峰，修改为同时支持横线和驼峰
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
                replacement: fileURLToPath(new URL('./src', import.meta.url))
            }
        ]
    },
    build: {
        outDir: 'lib',
        minify: 'esbuild',
        target: 'esnext',
        emptyOutDir: true,
        lib: {
            entry: join(__dirname, './index.ts'),
            name: '@lowcode/editor',
            fileName: 'index'
        },
        // 删除调试信息
        // terserOptions: {
        //     compress: {
        //         drop_console: true,
        //         drop_debugger: true
        //     }
        // },
        // 打包文件目录
        rollupOptions: {
            // 忽略打包vue文件
            external(id: string) {
                return deps.some(k => new RegExp(`^${k}`).test(id))
            },
            input: ['./index.ts'],
            output: [
                {
                    // 打包格式
                    format: 'es',
                    // 打包后文件名
                    entryFileNames: '[name].mjs',
                    // 配置打包根目录
                    dir: distEs
                }
                // {
                //     // 打包格式
                //     format: 'commonjs',
                //     name: '@lowcode/editor',
                //     // 打包后文件名
                //     entryFileNames: '[name].js',
                //     // 配置打包根目录
                //     dir: distCjs
                // }
            ]
        }
    },
    plugins: [
        vue(),
        vueJsx(),
        dtsPlugin({ rollupTypes: true, outDir: [distEs, distCjs] })
    ]
})
