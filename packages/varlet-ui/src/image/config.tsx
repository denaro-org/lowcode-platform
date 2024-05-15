import type { EditorComponent } from '@lowcode/shared'

const imageConfig: EditorComponent = {
    key: 'tm-var-image',
    label: '图片',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-image
            config={{
                src: 'https://varlet.pages.dev/cat.jpg'
            }}
        />
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
