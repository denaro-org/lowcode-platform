import type { EditorProps, SelectOptions, UserPropConfig } from '../types'
import type {
    InputNumberProps,
    InputProps,
    SelectProps,
    SwitchProps
} from 'ant-design-vue'

import { URL_REGEX, URL_REGEX_MSG } from './pattern.utils'
import { EditorPropsType } from '../enum'

/**
 * !!!---- input 输入类型的表单项配置 ----
 */

/**
 * @description 输入框类型的表单项配置
 */
type EditorInputProp = UserPropConfig<InputProps> & {
    /**
     * @description 配置的验证规则
     */
    ruleNames?: Array<'URL'>
}

/**
 * @description 创建一个输入框类型的表单项
 * @import import { createEditorInputProp } from '@lowcode/shared'
 * @param {EditorInputProp} propConfig 配置
 * @returns {EditorProps}
 */
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

/**
 * !!!---- select 下拉框类型的表单项配置 ----
 */

/**
 * @description 下拉框类型的表单项配置
 */
type EditorSelectProp = UserPropConfig<SelectProps> & {
    /**
     * @description 用于生成 options 的字典
     */
    constDict?: string[]
    /**
     * @description 不采用字典生成, 使用 options
     */
    options?: SelectOptions
}

/**
 * @description 创建一个下拉框类型的表单项
 * @import import { createEditorSelectProp } from '@lowcode/shared'
 * @param {EditorSelectProp} propConfig 配置
 * @returns {EditorProps}
 */
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
            showSearch: true,
            placeholder: `请选择${propConfig.label}`
        },
        ...args
    }
}

/**
 * !!!---- boolean 类型的表单项配置 ----
 */

/**
 * @description boolean 类型的表单项配置
 */
type EditorSwitchProp = UserPropConfig<SwitchProps>

/**
 * @description 创建一个boolean 类型的表单项
 * @import import { createEditorSwitchProp } from '@lowcode/shared'
 * @param {EditorSwitchProp} propConfig 配置
 * @returns {EditorProps}
 */
export const createEditorSwitchProp = (
    propConfig: EditorSwitchProp
): EditorProps => {
    return {
        type: EditorPropsType.switch,
        ...propConfig
    }
}

/**
 * !!!---- number 输入类型的表单项配置 ----
 */

/**
 * @description number 输入类型的表单项配置
 */
type EditorNumberProp = UserPropConfig<InputNumberProps>

/**
 * @description 创建 number 输入类型的表单项
 * @import import { createEditorNumberProp } from '@lowcode/shared'
 * @param {EditorNumberProp} propConfig 配置
 * @returns {EditorProps}
 */
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

/**
 * !!!---- 颜色选择类型的表单项配置 ----
 */

/**
 * @description 颜色选择类型的表单项配置
 */
type EditorColorProp = UserPropConfig<object>

/**
 * @description 创建颜色选择类型的表单项
 * @import import { createEditorColorProp } from '@lowcode/shared'
 * @param {EditorColorProp} propConfig 配置
 * @returns {EditorProps}
 */
export const createEditorColorProp = (
    propConfig: EditorColorProp
): EditorProps => {
    return {
        type: EditorPropsType.color,
        ...propConfig
    }
}

/**
 * !!!---- 表单组合类型的表单项配置 ----
 */

/**
 * @description 表单组合类型的表单项配置
 */
type EditorGroupProp = UserPropConfig<object> & {
    /**
     * @description 表单组合子项配置
     */
    children: EditorProps[]
}

/**
 * @description 创建表单组合类型的表单项
 * @import import { createEditorGroupProp } from '@lowcode/shared'
 * @param {EditorGroupProp} propConfig 配置
 * @returns {EditorProps}
 */
export const createEditorGroupProp = (
    propConfig: EditorGroupProp
): EditorProps => {
    return {
        type: EditorPropsType.group,
        ...propConfig
    }
}
