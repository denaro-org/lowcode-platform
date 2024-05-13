import type { EditorComponent } from '@lowcode/shared'

import { Icon } from '@iconify/vue'
import { h } from 'vue'

const buttonConfig: EditorComponent = {
    key: 'tm-var-button',
    label: '按钮',
    moduleName: 'baseWidgets',
    preview: () =>
        h(Icon, {
            icon: 'teenyicons:button-solid',
            style: { fontSize: '32px' }
        }),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-button {...props} />
            </div>
        )
    }
}

export default buttonConfig
