import type { EditorComponent } from '@lowcode/shared'

import {
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
                <tm-var-button config={props} />
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
            defaultValue: 16,
            propsBind: {
                min: 0,
                max: 20
            },
            display: ({ model }) =>
                !!model.loading && model.loadingType === 'circle'
        })
    }
}

export default buttonConfig
