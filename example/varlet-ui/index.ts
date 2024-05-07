import type { EditorComponent } from '@lowcode/shared'

import '@varlet/ui/es/style'

interface Module {
  default: EditorComponent
}

type EditorComponents = Record<string, EditorComponent>

// 批量导出所有的配置
const modules = import.meta.glob<Module>('./src/**/index.tsx', { eager: true })
const components: EditorComponents = {};

const keys = Object.entries(modules);

keys.forEach(([key, module]) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1').replace(/src\//g, '');
  components[name] = module?.default || module;
});

export default components;