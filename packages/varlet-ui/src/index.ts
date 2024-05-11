import type { EditorComponent } from '@lowcode/shared'
import type { App, Plugin } from 'vue'

import TmVarButton from './button/index.js'
import TmVarEllipsis from './ellipsis/index.js'
import TmVarImage from './image/index.js'

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

const components: Plugin[] = [TmVarButton, TmVarEllipsis, TmVarImage]

const install = (app: App): void => {
    components.forEach(component => {
        app.use(component)
    })
}

export { uiSchema, TmVarButton, TmVarEllipsis, TmVarImage }

export default {
    install
}
