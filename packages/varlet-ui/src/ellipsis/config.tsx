import type { EditorComponent } from '@lowcode/shared'
import type { VNode } from 'vue'

import { createEditorInputProp } from '@lowcode/shared'

import { useRegisterRef } from '@/__utils'

const ellipsisConfig: EditorComponent = {
    key: 'tm-var-ellipsis',
    label: '文本省略',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-ellipsis
            config={{
                text: '这是一段文案'
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-ellipsis
                    ref={(el: VNode) => useRegisterRef(el, block.UUID ?? '')}
                    config={props}
                />
            </div>
        )
    },
    props: {
        text: createEditorInputProp({
            label: '文案',
            defaultValue: '这是一段文案'
        })
    }
}

export default ellipsisConfig
