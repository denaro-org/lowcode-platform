import type { EditorComponent } from '@lowcode/shared'

const buttonConfig: EditorComponent = {
    key: 'tm-var-button',
    label: '按钮',
    moduleName: 'baseWidgets',
    preview: () => <tm-var-button type={'primary'}>按钮</tm-var-button>,
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-button {...props} />
            </div>
        )
    }
}

export default buttonConfig
