import type { Plugin } from 'rollup'

import fs from 'fs-extra'
import { cyan, green, red } from 'kolorist'
import path from 'path'
import { createLogger } from 'vite'

const logger = createLogger()

interface Config {
    // 入口目录
    entryDir: string
    // 输出的文件名, 默认值 components.d.ts
    fileName?: string
    // 输出目录
    outDir: string | string[]
    // 输出文件的前缀
    prefix?: string
}

export function genComDTs(config: Config): Plugin {
    return {
        name: 'rollup-genComDTs',

        // 编译完成之后执行
        closeBundle() {
            // 读取目录结构
            const { entryDir } = config
            if (fs.lstatSync(entryDir).isDirectory()) {
                logger.info(cyan('开始生成组件声明文件'))

                let files = fs.readdirSync(entryDir)

                // 首字母转大写
                files.forEach((file: string, index: number) => {
                    files[index] = file.charAt(0).toUpperCase() + file.slice(1)
                })
                // 过滤掉非文件夹
                files = files.filter((file: string) => {
                    return fs
                        .lstatSync(path.resolve(entryDir, file))
                        .isDirectory()
                })

                let content =
                    'import type { ' +
                    files
                        .map((file: string) => config.prefix + file)
                        .join(', ') +
                    " } from './index.d.ts'\n\n"

                content += `declare module 'vue' {\n`
                content += `  export interface GlobalComponents {\n`
                files.forEach((file: string) => {
                    content += `    ${config.prefix + file}: typeof ${config.prefix + file};\n`
                })
                content += `  }\n`
                content += `}\n`

                const { outDir, fileName = 'components.d.ts' } = config
                const outDirs = Array.isArray(outDir) ? outDir : [outDir]
                outDirs.forEach(dir => {
                    const filePath = path.resolve(dir, fileName)
                    fs.outputFileSync(filePath, content)

                    logger.info(green(`生成组件声明文件 ${filePath} 成功`))
                })
            } else {
                logger.error(red('入口目录不存在'))
            }
        }
    }
}
