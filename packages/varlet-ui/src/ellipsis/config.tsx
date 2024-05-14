import type { EditorComponent } from '@lowcode/shared'

const ellipsisConfig: EditorComponent = {
    key: 'tm-var-ellipsis',
    label: '文本省略',
    moduleName: 'baseWidgets',
    preview: () => <tm-var-ellipsis>这是一段文案</tm-var-ellipsis>,
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-ellipsis {...props}>这是一段文案</tm-var-ellipsis>
            </div>
        )
    }
}

export default ellipsisConfig
