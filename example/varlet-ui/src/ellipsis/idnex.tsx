import type { EditorComponent } from '@lowcode/shared'


import { h } from 'vue'

import VeEllipsis from './index.vue'

const ellipsisConfig: EditorComponent = {
    key: 'var-ellipsis',
    label: '文本省略',
    moduleName: 'baseWidgets',
    preview: () => h(VeEllipsis)
}

export default ellipsisConfig