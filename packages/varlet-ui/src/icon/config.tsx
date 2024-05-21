import type { EditorComponent } from '@lowcode/shared'
import type { VNode } from 'vue'

import {
    createEditorColorProp,
    createEditorInputProp,
    createEditorNumberProp,
    createEditorSelectProp
} from '@lowcode/shared'

import { DEFAULT_ICON, ICON_LIST } from '@/__const'
import { useRegisterRef } from '@/__utils'

const iconConfig: EditorComponent = {
    key: 'tm-var-icon',
    label: '图标',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-icon
            config={{
                name: 'information'
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-icon
                    ref={(el: VNode) => useRegisterRef(el, block.UUID ?? '')}
                    config={props}
                />
            </div>
        )
    },
    props: {
        // 图标名称
        name: createEditorSelectProp({
            label: '图标名称',
            constDict: ICON_LIST,
            defaultValue: DEFAULT_ICON
        }),
        // 尺寸
        size: createEditorNumberProp({
            label: '尺寸',
            propsBind: {
                addonAfter: 'px'
            }
        }),
        // 图标颜色, 只适用于字体图标
        color: createEditorColorProp({
            label: '图标颜色'
        }),
        // 图标的命名空间, 可扩展自定义图标库
        namespace: createEditorInputProp({
            label: '命名空间',
            defaultValue: 'var-icon'
        }),
        // 过渡动画类名
        animationClass: createEditorInputProp({
            label: '过渡动画类名'
        }),
        transition: createEditorNumberProp({
            label: '过渡时间',
            propsBind: {
                addonAfter: 'ms'
            }
        })
    }
}

export default iconConfig
