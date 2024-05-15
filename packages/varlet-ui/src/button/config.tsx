import type { EditorComponent } from '@lowcode/shared'

import { createEditorInputProp, createEditorSelectProp } from '@lowcode/shared'

import { DEFAULT_TYPE, TYPE_LIST } from '@/__const'

const buttonConfig: EditorComponent = {
    key: 'tm-var-button',
    label: '按钮',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-button
            config={{
                buttonText: '按钮'
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-button {...props} />
            </div>
        )
    },
    props: {
        buttonText: createEditorInputProp({
            label: '按钮文案',
            defaultValue: '按钮'
        }),
        type: createEditorSelectProp({
            label: '按钮类型',
            defaultValue: DEFAULT_TYPE,
            constDict: TYPE_LIST
        })
    }
}

export default buttonConfig
