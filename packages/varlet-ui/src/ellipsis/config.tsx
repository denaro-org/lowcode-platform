import type { EditorComponent } from '@lowcode/shared'

import { createEditorInputProp } from '@lowcode/shared'

const ellipsisConfig: EditorComponent = {
    key: 'tm-var-ellipsis',
    label: '文本省略',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-ellipsis
            config={{
                buttonText: '这是一段文案'
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-ellipsis {...props} />
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
