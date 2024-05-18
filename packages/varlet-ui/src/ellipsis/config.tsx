import type { EditorComponent } from '@lowcode/shared'
import type { VNode } from 'vue'

import {
    createEditorInputProp,
    createEditorNumberProp,
    createEditorSelectProp,
    createEditorSwitchProp
} from '@lowcode/shared'

import { DEFAULT_TRIGGER, TRIGGER_LIST } from '@/__const'
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
                    v-model:expand={props.expand}
                    ref={(el: VNode) => useRegisterRef(el, block.UUID ?? '')}
                    config={props}
                />
            </div>
        )
    },
    props: {
        // 配置的文案
        text: createEditorInputProp({
            label: '文案',
            defaultValue: '这是一段文案'
        }),
        // 是否展开
        expand: createEditorSwitchProp({
            label: '是否展开',
            defaultValue: false
        }),
        // 展开触发方式
        expandTrigger: createEditorSelectProp({
            label: '展开触发方式',
            defaultValue: DEFAULT_TRIGGER,
            constDict: TRIGGER_LIST
        }),
        // 最大显示行数
        lineClamp: createEditorNumberProp({
            label: '最大显示行数',
            defaultValue: 1
        }),
        // tooltip
        tooltip: createEditorSwitchProp({
            label: '是否开启 tooltip',
            defaultValue: true
        })
    }
}

export default ellipsisConfig
