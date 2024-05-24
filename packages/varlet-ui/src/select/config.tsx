import type { EditorComponent } from '@lowcode/shared'
import type { VNode } from 'vue'

import {
    createArrGrouppProp,
    createEditorColorProp,
    createEditorInputProp,
    createEditorNumberProp,
    createEditorSelectProp,
    createEditorSwitchProp
} from '@lowcode/shared'

import {
    DEFAULT_FORM_SIZE,
    DEFAULT_VALIDATE_TRIGGER,
    FORM_SIZE_LIST,
    VALIDATE_TRIGGER_LIST
} from '@/__const'
import { useRegisterRef } from '@/__utils'

const selectConfig: EditorComponent = {
    key: 'tm-var-select',
    label: '选择框',
    moduleName: 'baseWidgets',
    preview: () => (
        <tm-var-select
            value='1'
            config={{
                options: [
                    { label: '选项1', value: '1' },
                    { label: '选项2', value: '2' },
                    { label: '选项3', value: '3' }
                ]
            }}
        />
    ),
    render: ({ props, block, styles }) => {
        return () => (
            <div style={styles}>
                <tm-var-select
                    v-model:value={props.value}
                    ref={(el: VNode) => useRegisterRef(el, block.UUID ?? '')}
                    config={props}
                />
            </div>
        )
    },
    props: {
        value: createEditorInputProp({
            label: '绑定值',
            defaultValue: '1',
            propsBind: {
                readonly: true
            }
        }),
        // 选择框尺寸
        size: createEditorSelectProp({
            label: '选择框尺寸',
            defaultValue: DEFAULT_FORM_SIZE,
            constDict: FORM_SIZE_LIST
        }),
        // 选择框风格
        variant: createEditorSelectProp({
            label: '选择框风格',
            defaultValue: DEFAULT_VALIDATE_TRIGGER,
            constDict: VALIDATE_TRIGGER_LIST
        }),
        // 占位符
        placeholder: createEditorInputProp({
            label: '占位符',
            defaultValue: ''
        }),
        // 是否开启多选
        multiple: createEditorSwitchProp({
            label: '是否开启多选',
            defaultValue: false
        }),
        // 下拉菜单的垂直偏移量
        offsetY: createEditorNumberProp({
            label: '下拉菜单的垂直偏移量',
            defaultValue: 0,
            propsBind: {
                addonAfter: 'px'
            }
        }),
        // 是否使用纸片风格(仅限多选)
        chip: createEditorSwitchProp({
            label: '是否使用纸片风格(仅限多选)',
            defaultValue: false,
            display: ({ model }) => !!model.multiple
        }),
        // 是否显示分割线
        line: createEditorSwitchProp({
            label: '是否显示分割线',
            defaultValue: true
        }),
        // 是否使用占位符作为提示
        hint: createEditorSwitchProp({
            label: '是否使用占位符作为提示',
            defaultValue: true
        }),
        // 文字颜色
        textColor: createEditorColorProp({
            label: '文字颜色'
        }),
        // 聚焦时的主要颜色
        focusColor: createEditorColorProp({
            label: '聚焦时的主要颜色'
        }),
        // 失焦时的主要颜色
        blurColor: createEditorColorProp({
            label: '失焦时的主要颜色'
        }),
        // 是否只读
        readonly: createEditorSwitchProp({
            label: '是否只读',
            defaultValue: false
        }),
        // 是否禁用
        disabled: createEditorSwitchProp({
            label: '是否禁用',
            defaultValue: false
        }),
        // 是否可清除
        clearable: createEditorSwitchProp({
            label: '是否可清除',
            defaultValue: false
        }),
        // 触发验证的时机
        validateTrigger: createEditorSelectProp({
            label: '触发验证的时机',
            defaultValue: DEFAULT_VALIDATE_TRIGGER,
            constDict: VALIDATE_TRIGGER_LIST,
            propsBind: {
                mode: 'multiple'
            }
        }),
        // options 配置
        options: createArrGrouppProp({
            label: 'options 配置',
            collapseHeader: 'option',
            defaultValue: [
                { label: '选项1', value: '1' },
                { label: '选项2', value: '2' },
                { label: '选项3', value: '3' }
            ],
            props: {
                label: createEditorInputProp({
                    label: '选项名称',
                    defaultValue: ''
                }),
                value: createEditorInputProp({
                    label: '选项值',
                    defaultValue: ''
                }),
                disabled: createEditorSwitchProp({
                    label: '是否禁用',
                    defaultValue: false
                })
            }
        })
    }
}

export default selectConfig
