import type { EditorComponent } from '@lowcode/shared'

import { Icon } from '@iconify/vue'
import { h } from 'vue'

const imageConfig: EditorComponent = {
    key: 'tm-var-image',
    label: '图片',
    moduleName: 'baseWidgets',
    preview: () =>
        h(Icon, {
            icon: 'ion:image-outline',
            style: { fontSize: '32px' }
        }),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-image {...props} />
            </div>
        )
    }
}

export default imageConfig
