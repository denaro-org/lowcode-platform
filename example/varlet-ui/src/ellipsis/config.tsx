import type { EditorComponent } from '@lowcode/shared'

import { h } from 'vue'

import VeEllipsis from './index.vue'

const ellipsisConfig: EditorComponent = {
    key: 'var-ellipsis',
    label: '文本省略',
    moduleName: 'baseWidgets',
    preview: () => h(VeEllipsis, '这里写文案'),
}

export default ellipsisConfig