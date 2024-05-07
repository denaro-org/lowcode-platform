import type { EditorComponent } from '@lowcode/shared'

import { h } from 'vue'

import VeButton from './index.vue'

const buttonConfig: EditorComponent = {
    key: 'var-button',
    label: '按钮',
    moduleName: 'baseWidgets',
    preview: () => h(VeButton)
}

export default buttonConfig
