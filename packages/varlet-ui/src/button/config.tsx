import type { EditorComponent } from '@lowcode/shared'
import type { VNode } from 'vue'

import {
    createEditorGroupProp,
    createEditorInputProp,
    createEditorNumberProp,
    createEditorSelectProp,
    createEditorSwitchProp
} from '@lowcode/shared'

import {
    DEFAULT_LOADING_TYPE,
    DEFAULT_NATIVE_TYPE,
    DEFAULT_SIZE,
    DEFAULT_TYPE,
    LOADING_TYPE_LIST,
    NATIVE_TYPE_LIST,
    SIZE_LIST,
    TYPE_LIST
} from '@/__const'
import { useRegisterRef } from '@/__utils'

const buttonConfig: EditorComponent = {
    key: 'tm-var-button',
    label: '按钮',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-button
            config={{
                buttonText: '按钮',
                type: 'primary'
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-button
                    ref={(el: VNode) => useRegisterRef(el, block.UUID ?? '')}
                    config={props}
                />
            </div>
        )
    },
    props: {
        // 按钮文案
        buttonText: createEditorInputProp({
            label: '按钮文案',
            defaultValue: '按钮'
        }),
        // 按钮类型
        type: createEditorSelectProp({
            label: '按钮类型',
            defaultValue: DEFAULT_TYPE,
            constDict: TYPE_LIST
        }),
        // 按钮原生类型
        nativeType: createEditorSelectProp({
            label: '按钮原生类型',
            defaultValue: DEFAULT_NATIVE_TYPE,
            constDict: NATIVE_TYPE_LIST
        }),
        // 按钮尺寸
        size: createEditorSelectProp({
            label: '按钮尺寸',
            defaultValue: DEFAULT_SIZE,
            constDict: SIZE_LIST
        }),
        // loading 加载状态
        loading: createEditorSwitchProp({
            label: '加载状态',
            defaultValue: false
        }),
        // loading 的类型
        loadingType: createEditorSelectProp({
            label: 'loading 的类型',
            defaultValue: DEFAULT_LOADING_TYPE,
            constDict: LOADING_TYPE_LIST,
            display: ({ model }) => !!model.loading
        }),
        // loading 的半径，只作用于 loading-type="circle" 时
        loadingRadius: createEditorNumberProp({
            label: 'loading 的半径',
            propsBind: {
                min: 0,
                max: 24,
                addonAfter: 'px'
            },
            display: ({ model }) =>
                !!model.loading && model.loadingType === 'circle'
        }),
        // loading 的尺寸
        loadingSize: createEditorSelectProp({
            label: 'loading 的尺寸',
            defaultValue: DEFAULT_SIZE,
            constDict: SIZE_LIST,
            display: ({ model }) => !!model.loading
        }),
        // loading 的颜色
        // loadingColor: createEditorColorProp({
        //     label: 'loading 的颜色',
        //     defaultValue: '#1989fa',
        //     display: ({ model }) => !!model.loading
        // })
        // 自动 loading 模式，方便处理异步任务
        autoLoading: createEditorSwitchProp({
            label: '自动 loading 模式',
            defaultValue: false
        }),
        // 是否是圆形按钮
        round: createEditorSwitchProp({
            label: '是否是圆形按钮',
            defaultValue: false
        }),
        // 是否是块级元素
        block: createEditorSwitchProp({
            label: '是否是块级元素',
            defaultValue: false
        }),
        // 是否是文字按钮
        text: createEditorSwitchProp({
            label: '是否是文字按钮',
            defaultValue: false
        }),
        // 是否作为图标容器
        iconContainer: createEditorSwitchProp({
            label: '是否作为图标容器',
            defaultValue: false
        }),
        // 是否使用外边框
        outline: createEditorSwitchProp({
            label: '是否使用外边框',
            defaultValue: false
        }),
        // 禁用状态
        disabled: createEditorSwitchProp({
            label: '禁用状态',
            defaultValue: false
        }),
        // 是否使用水波纹
        ripple: createEditorSwitchProp({
            label: '是否使用水波纹',
            defaultValue: true
        }),
        // 海拔高度
        elevation: createEditorGroupProp({
            label: '海拔高度',
            defaultValue: true,
            children: [
                createEditorSwitchProp({
                    defaultValue: true
                }),
                createEditorNumberProp({
                    propsBind: {
                        min: 0,
                        max: 24,
                        addonAfter: 'px'
                    }
                })
            ]
        })
    }
}

export default buttonConfig
