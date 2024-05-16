import type { EditorProps, SelectOptions } from '../types'

import { URL_REGEX, URL_REGEX_MSG } from './pattern.utils'
import { EditorPropsType } from '../enum'

type EditorProp = Pick<
    EditorProps,
    'defaultValue' | 'label' | 'tips' | 'placeholder'
>

// ---- input 输入类型的表单项配置 ----
type EditorInputProp = EditorProp & {
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
        placeholder: propConfig.placeholder ?? '请输入...',
        rules,
        ...propConfig
    }
}

// ---- select 输入类型的表单项配置 ----
type EditorSelectProp = EditorProp & {
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
        options: stateOptions,
        placeholder: propConfig.placeholder ?? '请选择...',
        ...args
    }
}

// ---- switch 输入类型的表单项配置 ----
type EditorSwitchProp = EditorProp

export const createEditorSwitchProp = (
    propConfig: EditorSwitchProp
): EditorProps => {
    return {
        type: EditorPropsType.switch,
        ...propConfig
    }
}
