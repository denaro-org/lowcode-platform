import type { EditorComponent, EditorComponents } from '@lowcode/shared'
import type { App } from 'vue'

import TmVarButton from './button'
import TmVarEllipsis from './ellipsis'
import TmVarFab from './fab'
import TmVarIcon from './icon'
import TmVarImage from './image'

interface Module {
    default: EditorComponent
}

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

const components = [TmVarButton, TmVarEllipsis, TmVarImage, TmVarFab, TmVarIcon]

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name ?? '', component)
    })
}

export { uiSchema, TmVarButton, TmVarEllipsis, TmVarImage, TmVarFab, TmVarIcon }

export default {
    install
}

export type * from '@/__types'
