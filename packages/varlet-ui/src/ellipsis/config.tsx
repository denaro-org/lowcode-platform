import type { EditorComponent } from '@lowcode/shared'

import { Icon } from '@iconify/vue'
import { h } from 'vue'

const ellipsisConfig: EditorComponent = {
    key: 'tm-var-ellipsis',
    label: '文本省略',
    moduleName: 'baseWidgets',
    preview: () =>
        h(Icon, {
            icon: 'solar:text-bold',
            style: { fontSize: '32px' }
        })
}

export default ellipsisConfig
