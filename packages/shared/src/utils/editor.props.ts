import type { EditorProps } from '../types'

import { EditorPropsType } from '../enum'

type EditorProp = Pick<EditorProps, 'defaultValue' | 'label' | 'tips'>

// ---- input 输入类型的表单项配置 ----
type EditorInputProp = EditorProp

export const createEditorInputProp = (
    options: EditorInputProp
): EditorProps => {
    return {
        type: EditorPropsType.input,
        ...options
    }
}

// ---- select 输入类型的表单项配置 ----
type EditorSelectProp = EditorProp & {
    // 用于生成 options 的字典
    constDict: string[]
}
export const createEditorSelectProp = (
    options: EditorSelectProp
): EditorProps => {
    return {
        type: EditorPropsType.select,
        ...options
    }
}
