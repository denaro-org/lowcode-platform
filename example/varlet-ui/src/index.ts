import type { EditorComponent } from '@lowcode/shared'

import VarButton from './button/index.js'
import VarEllipsis from './ellipsis/index.js'
import VarImage from './image/index.js'

interface Module {
    default: EditorComponent
}

type EditorComponents = Record<string, EditorComponent>

// 批量导出所有的配置
const modules = import.meta.glob<Module>('./**/config.tsx', { eager: true })
const uiSchema: EditorComponents = {}

const modulesKeys = Object.entries(modules)
modulesKeys.forEach(([key, module]) => {
    const name = key
        .replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1')
        .replace(/src\//g, '')
    uiSchema[name] = module?.default || module
})

export { uiSchema, VarButton, VarEllipsis, VarImage }
