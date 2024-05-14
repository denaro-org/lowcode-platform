import type { EditorComponent } from '@lowcode/shared'

const imageConfig: EditorComponent = {
    key: 'tm-var-image',
    label: '图片',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-image lazy src={'https://picsum.photos/200/200'}></tm-var-image>
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-image {...props} />
            </div>
        )
    }
}

export default imageConfig
