import type { EditorComponent } from '@lowcode/shared'
import type { Plugin } from 'vue'

import '@varlet/ui/es/style'

interface Module {
  default: EditorComponent
}

interface VueModule {
  default: Plugin
}

type EditorComponents = Record<string, EditorComponent>
type VueComponents = Plugin[]

// 批量导出所有的配置
const modules = import.meta.glob<Module>('./src/**/config.tsx', { eager: true })
const uiSchema: EditorComponents = {}

const modulesKeys = Object.entries(modules)
modulesKeys.forEach(([key, module]) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1').replace(/src\//g, '');
  uiSchema[name] = module?.default || module;
})

// 批量导出所有组件
const components = import.meta.glob<VueModule>('./src/**/index.ts', { eager: true })
const componentSchema: VueComponents = []

const componentsKeys = Object.entries(components)
componentsKeys.forEach(([key, module]) => {
  componentSchema.push(module?.default || module)
})

export {
  uiSchema,
  componentSchema
}