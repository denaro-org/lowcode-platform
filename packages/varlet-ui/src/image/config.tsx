import type { EditorComponent } from '@lowcode/shared'

import { h } from 'vue'

import VeImage from './index.vue'

const imageConfig: EditorComponent = {
    key: 'tm-var-image',
    label: '图片',
    moduleName: 'baseWidgets',
    preview: () => h(VeImage)
}

export default imageConfig
