import type { EditorComponent } from '@lowcode/shared'
import type { VNode } from 'vue'

import {
    createArrGrouppProp,
    createEditorColorProp,
    createEditorGroupProp,
    createEditorNumberProp,
    createEditorSelectProp,
    createEditorSwitchProp
} from '@lowcode/shared'

import { DEFAULT_SIZE, DEFAULT_TYPE, SIZE_LIST, TYPE_LIST } from '@/__const'
import { useRegisterRef } from '@/__utils'
import buttonConfig from '@/button/config.tsx'

const buttonGroupConfig: EditorComponent = {
    key: 'tm-var-button-group',
    label: '按钮组',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-button-group
            config={{
                type: 'primary',
                size: 'small',
                childrenConfig: [
                    {
                        buttonText: '按钮1'
                    },
                    {
                        buttonText: '按钮2'
                    }
                ]
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-button-group
                    ref={(el: VNode) => useRegisterRef(el, block.UUID ?? '')}
                    config={props}
                />
            </div>
        )
    },
    props: {
        // 按钮类型
        type: createEditorSelectProp({
            label: '按钮类型',
            defaultValue: DEFAULT_TYPE,
            constDict: TYPE_LIST
        }),
        // 按钮尺寸
        size: createEditorSelectProp({
            label: '按钮尺寸',
            defaultValue: DEFAULT_SIZE,
            constDict: SIZE_LIST
        }),
        // 按钮组模式
        mode: createEditorSelectProp({
            label: '按钮组模式',
            defaultValue: 'normal',
            constDict: ['normal', 'text', 'outline', 'icon-container']
        }),
        // 按钮组是否竖直排列
        vertical: createEditorSwitchProp({
            label: '按钮组是否竖直排列',
            defaultValue: false
        }),
        // 海拔高度
        elevation: createEditorGroupProp({
            label: '海拔高度',
            defaultValue: true,
            children: [
                createEditorSwitchProp({
                    label: '',
                    defaultValue: true
                }),
                createEditorNumberProp({
                    label: '',
                    propsBind: {
                        min: 0,
                        max: 24,
                        addonAfter: 'px'
                    }
                })
            ]
        }),
        // 背景颜色
        color: createEditorColorProp({
            label: '背景颜色',
            defaultValue: undefined
        }),
        // 文字颜色
        textColor: createEditorColorProp({
            label: '文字颜色',
            defaultValue: undefined
        }),
        // 子按钮配置
        childrenConfig: createArrGrouppProp({
            label: '子按钮配置',
            collapseHeader: '按钮',
            defaultValue: [
                {
                    buttonText: '按钮1'
                },
                {
                    buttonText: '按钮2'
                }
            ],
            props: buttonConfig.props
        })
    }
}

export default buttonGroupConfig
