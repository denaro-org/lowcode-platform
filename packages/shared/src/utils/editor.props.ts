import type { EditorProps, SelectOptions, UserPropConfig } from '../types'
import type {
    InputNumberProps,
    InputProps,
    SelectProps,
    SwitchProps
} from 'ant-design-vue'

import { URL_REGEX, URL_REGEX_MSG } from './pattern.utils'
import { EditorPropsType } from '../enum'

// ---- input 输入类型的表单项配置 ----
type EditorInputProp = UserPropConfig<InputProps> & {
    // 验证规则
    ruleNames?: Array<'URL'>
}

export const createEditorInputProp = (
    propConfig: EditorInputProp
): EditorProps => {
    const rules: EditorProps['rules'] = []
    if (propConfig.ruleNames?.includes('URL')) {
        rules.push({
            pattern: URL_REGEX,
            message: URL_REGEX_MSG,
            trigger: ['blur', 'change']
        })
    }

    return {
        type: EditorPropsType.input,
        propsBind: {
            placeholder: `请输入${propConfig.label}`
        },
        rules,
        ...propConfig
    }
}

// ---- select 输入类型的表单项配置 ----
type EditorSelectProp = UserPropConfig<SelectProps> & {
    // 用于生成 options 的字典
    constDict?: string[]
    // 不采用字典生成, 使用 options
    options?: SelectOptions
}

export const createEditorSelectProp = (
    propConfig: EditorSelectProp
): EditorProps => {
    const { constDict, options, ...args } = propConfig

    let stateOptions: SelectOptions = options ?? []
    // 从字典中生成默认的 options
    if (Array.isArray(constDict) && constDict.length) {
        stateOptions = constDict?.map(item => {
            return {
                label: item,
                value: item,
                title: item
            }
        })
    }

    return {
        type: EditorPropsType.select,
        propsBind: {
            options: stateOptions,
            placeholder: `请选择${propConfig.label}`
        },
        ...args
    }
}

// ---- switch 输入类型的表单项配置 ----
type EditorSwitchProp = UserPropConfig<SwitchProps>

export const createEditorSwitchProp = (
    propConfig: EditorSwitchProp
): EditorProps => {
    return {
        type: EditorPropsType.switch,
        ...propConfig
    }
}

// ---- number 输入类型的表单项配置 ----
type EditorNumberProp = UserPropConfig<InputNumberProps>

export const createEditorNumberProp = (
    propConfig: EditorNumberProp
): EditorProps => {
    const { propsBind = {} } = propConfig

    return {
        type: EditorPropsType.number,
        propsBind: {
            placeholder: `请输入${propConfig.label}`,
            min: propsBind?.min ?? 0,
            max: propsBind?.max ?? 100,
            step: propsBind.step ?? 1
        },
        ...propConfig
    }
}

// ---- color 输入类型的表单项配置 ----
type EditorColorProp = UserPropConfig<object>

export const createEditorColorProp = (
    propConfig: EditorColorProp
): EditorProps => {
    return {
        type: EditorPropsType.color,
        ...propConfig
    }
}

// ---- group 输入类型的表单项配置 ----
type EditorGroupProp = UserPropConfig<object> & {
    // 子项配置
    children: EditorProps[]
}

export const createEditorGroupProp = (
    propConfig: EditorGroupProp
): EditorProps => {
    return {
        type: EditorPropsType.group,
        ...propConfig
    }
}
