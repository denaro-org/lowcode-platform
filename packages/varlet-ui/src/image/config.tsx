import type { EditorComponent } from '@lowcode/shared'

import { createEditorInputProp, createEditorSwitchProp } from '@lowcode/shared'

const imageConfig: EditorComponent = {
    key: 'tm-var-image',
    label: '图片',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-image
            config={{
                lazy: true,
                src: 'https://varlet.pages.dev/cat.jpg'
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-image config={props} />
            </div>
        )
    },
    props: {
        src: createEditorInputProp({
            label: '图片地址',
            defaultValue: 'https://varlet.pages.dev/cat.jpg',
            ruleNames: ['URL']
        }),
        lazy: createEditorSwitchProp({
            label: '懒加载',
            defaultValue: true
        })
    }
}

export default imageConfig
